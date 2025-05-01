import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react"
import { TransactionBlock, Inputs } from '@mysten/sui.js/transactions'
import { SuiClient, getFullnodeUrl, SuiMoveObject } from '@mysten/sui.js/client'
import BigNumber from "bignumber.js"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource"
import { useCurrentAccount, useCurrentWallet, useDisconnectWallet, useSignTransaction, useSuiClient } from "@mysten/dapp-kit";
import { Transaction } from '@mysten/sui/transactions';
import { useEnokiFlow, useZkLogin, useZkLoginSession } from "@mysten/enoki/react";
import { SUI_SYSTEM_STATE_OBJECT_ID } from "@mysten/sui/utils";

export const RemoteContext = createContext({})

const client = generateClient<Schema>();

const Provider = ({ children }: any) => {

    const suiClient = useSuiClient()

    const enokiFlow = useEnokiFlow();

    const build = async (toolName: string, params: any, sender: string) => {

        if (!["StakeSuiTool", "TransferTokenTool", "UnstakeSuiTool"].includes(toolName)) {
            throw new Error(`Pending transaction with tool: ${toolName} is not supported`)
        }

        if (toolName === "TransferTokenTool") {
            return await buildTransferTokenTool(params, sender)
        } else if (toolName === "StakeSuiTool") {
            return await buildStakeSuiTool(params, sender)
        } else if (toolName === "UnstakeSuiTool") {
            return await buildUnstakeSuiTool(params, sender)
        }

    }

    const buildTransferTokenTool = async (params: any, sender: string) => {
        // get metadata of all coins
        const balances = await suiClient.getAllBalances({
            owner: sender,
        });
        const coins = await Promise.all(
            balances.map(async (balance) => {
                const metadata = await suiClient.getCoinMetadata({
                    coinType: balance.coinType,
                });
                return {
                    address: balance.coinType,
                    name: metadata?.name || "",
                    symbol: metadata?.symbol || "",
                    decimals: metadata?.decimals || 0,
                    balance: (
                        Number(balance.totalBalance) /
                        10 ** (metadata?.decimals || 0)
                    ).toString(),
                };
            }),
        );
        // get the coin metadata to transfer
        const coinMetadata = coins.find((coin) => coin.symbol === params.tokenSymbol);

        if (!coinMetadata) {
            throw new Error(`Token ${params.tokenSymbol} not found in wallet`);
        }

        // prepare transaction
        const tx = new Transaction();

        // get the coin object
        const allCoins = await suiClient.getCoins({
            owner: sender,
            coinType: coinMetadata.address,
        });
        const [mainCoin, ...restCoins] = allCoins.data;

        // check if the balance is enough
        const decimals = coinMetadata.decimals;
        const totalBalance = allCoins.data.reduce(
            (output, coin) => output + Number(coin.balance),
            0,
        );

        if (totalBalance / 10 ** decimals < params.amount) {
            throw new Error("Insufficient balance");
        }

        // split the coin
        const coinObjId = params.tokenSymbol === "SUI" ? tx.gas : mainCoin.coinObjectId;
        const [coin] = tx.splitCoins(coinObjId, [params.amount * 10 ** decimals]);

        // merge the coins
        if (restCoins.length > 0) {
            tx.mergeCoins(
                tx.object(mainCoin.coinObjectId),
                restCoins.map((coin) => tx.object(coin.coinObjectId)),
            );
        }

        tx.transferObjects([coin], params.to);

        return tx
    }

    const buildStakeSuiTool = async (params: any, sender: string) => {

        // get the coin object
        const allCoins = await suiClient.getCoins({
            owner: sender,
            coinType: "0x2::sui::SUI",
        });

        const [mainCoin, ...restCoins] = allCoins.data;

        const totalBalance = allCoins.data.reduce(
            (output, coin) => output + Number(coin.balance),
            0,
        );

        const balance = totalBalance / (10 ** 9);
        if (balance < params.amount || params.amount < 1) {
            throw new Error("Insufficient balance");
        }

        // prepare transaction
        const txb = new Transaction();

        // Convert amount to base units before splitting
        const amountInBaseUnits = BigInt(Math.floor(params.amount * (10 ** 9)));

        // split the coin using base units
        const [coin] = txb.splitCoins(txb.gas, [txb.pure.u64(amountInBaseUnits)]);

        // merge the coins
        if (restCoins.length > 0) {
            txb.mergeCoins(
                txb.object(mainCoin.coinObjectId),
                restCoins.map((coin) => txb.object(coin.coinObjectId)),
            );
        }

        // stake the coin
        txb.moveCall({
            target: "0x3::sui_system::request_add_stake",
            arguments: [
                txb.sharedObjectRef({
                    objectId: SUI_SYSTEM_STATE_OBJECT_ID,
                    initialSharedVersion: 1,
                    mutable: true,
                }),
                coin,
                txb.pure.address(params.poolId),
            ],
        });

        return txb

    }

    const buildUnstakeSuiTool = async (params: any, sender: string) => {

        // prepare transaction
        const txb = new Transaction(); 

        // get the coin object
        txb.moveCall({
            target: "0x3::sui_system::request_withdraw_stake",
            arguments: [
                txb.object(SUI_SYSTEM_STATE_OBJECT_ID),
                txb.object(params.stakedSuiId),
            ],
        });

        return txb

    }

    const approve = async (transactionId: string, toolName: string, params: any, network: string) => {

        const keypair = await enokiFlow.getKeypair({ network: "testnet" });

        const sender = keypair.toSuiAddress()

        const tx: any = await build(toolName, params, sender)

        // Sign and execute the transaction, using the Enoki keypair
        const txOutput = await suiClient.signAndExecuteTransaction({
            signer: keypair,
            transaction: tx,
        });

        // wait for the transaction to be executed
        const res = await suiClient.waitForTransaction({
            digest: txOutput.digest,
            options: {
                showEffects: true,
            },
        });

        await client.models.PendingTransaction.update({
            id: transactionId,
            status: res.effects?.status.status || "unknown",
            digest: txOutput.digest,
            isCompleted: true
        })

    }

    const remove = async (transactionId: string) => {
        await client.models.PendingTransaction.delete({
            id: transactionId
        })
    }

    const removeContext = useMemo(
        () => ({
            approve,
            remove
        }),
        [approve]
    )

    return (
        <RemoteContext.Provider value={removeContext}>
            {children}
        </RemoteContext.Provider>
    )
}

export default Provider
