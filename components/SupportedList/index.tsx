"use client"

import { Lock, Shield, Key, ArrowLeftRight, Send, LogIn, CircleDollarSign, Check, Database, PlugZap, Network, ExternalLink, RefreshCcw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Bot, Coins, Infinity, ChevronDown, ChevronUp, Wallet, Shuffle , FileText, DollarSign } from 'lucide-react';


const SupportedList = () => {


    return (
        <section className={`  min-h-[700px]  relative mx-auto px-4 sm:px-6 lg:px-8 py-24`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <h2 className="text-4xl font-bold text-white text-center mb-16">Supported Technologies</h2> */}
                {/* <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seamless Web3 Access</h2>
                    <div className="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
                    <p className="text-teal-100/80 max-w-2xl text-sm md:text-base mx-auto">
                        We integrate mature Agent Kits from across the Web3 ecosystem, giving you instant access to 100+ protocols with no additional integration work
                    </p>
                </div> */}

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Available Features</h2>
                    <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
                    Turn your everyday AI assistant into a fully functional Web3 agent to manage Sui accounts, perform DeFi action & many more to come
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Wallet Management */}
                    <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6 transition-all hover:bg-blue-900/60 hover:border-blue-600/50">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-800/70 p-3 rounded-lg">
                                <Wallet className="w-6 h-6 text-blue-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Account Operations</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            Check your wallet address and token balances with simple natural language commands
                        </p>
                        <div className="text-blue-300 text-sm italic">
                            "What's my wallet address?" • "Show my token balances"
                        </div>
                    </div>

                    {/* Token Transfers */}
                    <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6 transition-all hover:bg-blue-900/60 hover:border-blue-600/50">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-800/70 p-3 rounded-lg">
                                <Send className="w-6 h-6 text-blue-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Token Transfers</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            Send SUI and other tokens to any address securely through conversational commands
                        </p>
                        <div className="text-blue-300 text-sm italic">
                            "Transfer 5 SUI to 0x123..." • "Send 10 USDC to Bob's wallet"
                        </div>
                    </div>

                    {/* Token Swaps */}
                    <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6 transition-all hover:bg-blue-900/60 hover:border-blue-600/50">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-800/70 p-3 rounded-lg">
                                <RefreshCcw className="w-6 h-6 text-blue-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Token Swaps</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            Swap tokens using Cetus Aggregator for optimal rates across multiple liquidity sources
                        </p>
                        <div className="text-blue-300 text-sm italic">
                            "Swap 10 SUI to CETUS" • "Get quote for exchanging 5 USDC to USDT"
                        </div>
                    </div>

                    {/* Staking */}
                    <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6 transition-all hover:bg-blue-900/60 hover:border-blue-600/50">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-800/70 p-3 rounded-lg">
                                {/* <CoinsStacked className="w-6 h-6 text-blue-300" /> */}
                                <Network className="w-6 h-6 text-blue-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Sui Native Staking</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            Stake and unstake SUI tokens with validators to earn rewards and participate in consensus
                        </p>
                        <div className="text-blue-300 text-sm italic">
                            "Stake 100 SUI to validator X" • "Show my staked positions" • "Unstake my SUI"
                        </div>
                    </div>

                    {/* SNS Domains */}
                    <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6 transition-all hover:bg-blue-900/60 hover:border-blue-600/50">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-800/70 p-3 rounded-lg">
                                <FileText className="w-6 h-6 text-blue-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Sui Name Service</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            Register and manage Sui Name Service domains through simple conversational interactions
                        </p>
                        <div className="text-blue-300 text-sm italic">
                            "Register myname.sui for 2 years" • "Look up info about domain.sui"
                        </div>
                    </div>

                    {/* Token Creation */}
                    <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6 transition-all hover:bg-blue-900/60 hover:border-blue-600/50">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-800/70 p-3 rounded-lg">
                                {/* <DollarSign className="w-6 h-6 text-blue-300" /> */}
                                <Coins className="w-6 h-6 text-blue-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Token Creation</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            Deploy your own tokens on Sui blockchain with customizable parameters and supply
                        </p>
                        <div className="text-blue-300 text-sm italic">
                            "Create a token named MyToken with symbol MTK" • "Deploy a fixed supply token"
                        </div>
                    </div>
 

                    

                   
                </div>
            </div>
        </section>
    )
}
 

export default SupportedList