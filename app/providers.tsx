'use client';


import { useEffect, useState } from 'react';
 

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { EnokiFlowProvider } from '@mysten/enoki/react';
import {
	createNetworkConfig,
	SuiClientProvider,
	useSuiClientContext,
	WalletProvider,
} from '@mysten/dapp-kit';
 
import { isEnokiNetwork, registerEnokiWallets } from '@mysten/enoki';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getFullnodeUrl } from "@mysten/sui/client";
import "@mysten/dapp-kit/dist/index.css"; 

import AccountProvider from "../contexts/account" 
import DatabaseProvider  from "../contexts/database"
import RemoteProvider from "../contexts/remoteSigner"
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

const { networkConfig } = createNetworkConfig({
	testnet: { url: getFullnodeUrl('testnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
});

const queryClient = new QueryClient();

const sessionStorageAdapter = {
    getItem: async (key: any) => {
        return sessionStorage.getItem(key);
    },
    setItem: async (key: any, value: any) => {
        sessionStorage.setItem(key, value);
    },
    removeItem: async (key: any) => {
        sessionStorage.removeItem(key);
    },
};

export function Providers({ children }: any) {


	return ( 
		<QueryClientProvider client={queryClient}>
			 <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
				{/*<RegisterEnokiWallets />*/}
				<WalletProvider 
					autoConnect
					storage={sessionStorageAdapter}
				>
					<EnokiFlowProvider apiKey={process.env.ENOKI_API_KEY || ""}>
						<DatabaseProvider>
							<AccountProvider>
								<RemoteProvider>
								{ children }
								</RemoteProvider>
							</AccountProvider>
						</DatabaseProvider>
					</EnokiFlowProvider>
				</WalletProvider>
			 </SuiClientProvider> 	
		</QueryClientProvider>
		)
}

// function RegisterEnokiWallets() {
// 	const { client, network } = useSuiClientContext();
 
// 	useEffect(() => {
// 		if (!isEnokiNetwork(network)) return;
 
// 		const { unregister } = registerEnokiWallets({
// 			apiKey: process.env.ENOKI_API_KEY || "",
// 			providers: {
// 				// Provide the client IDs for each of the auth providers you want to use:
// 				google: {
// 					clientId: process.env.GOOGLE_CLIENT_ID,
// 				},
// 				// facebook: {
// 				// 	clientId: 'YOUR_FACEBOOK_CLIENT_ID',
// 				// },
// 				// twitch: {
// 				// 	clientId: 'YOUR_TWITCH_CLIENT_ID',
// 				// },
// 			},
// 			client,
// 			network,
// 		});
 
// 		return unregister;
// 	}, [client, network]);
 
// 	return null;
// }