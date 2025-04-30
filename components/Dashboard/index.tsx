"use client"

import { useContext } from "react"
import { AccountContext } from '@/contexts/account';
import { ArrowRight, Shield, Settings, Send, User, MessageSquare, CheckCircle, Copy, Wallet, Code, Clock, RefreshCw, Zap, Command, Infinity, Banknote, ArrowUpRight, WifiOff } from 'lucide-react';
import { shortAddress } from "@/utils/helpers";


const DashboardContainer = () => {

    const { profile, logout }: any = useContext(AccountContext)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Dashboard</h1>
                <p className="text-lg text-blue-100/80 max-w-3xl">
                    Manage and approve pending transactions requested through your zkLogin account
                </p>
            </div>

            {!profile && (
                <div className="  mb-[40px]   bg-blue-900/40 border border-blue-700/30 rounded-xl p-8 text-center">
                    <WifiOff className="w-12 h-12 text-blue-400/50 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">Login Required</h2>
                    <p className="text-blue-100/80 mt-2 mb-2">
                        Log in to access the dashboard and get your access key
                    </p>
                </div>
            )}

            {profile && (
                <>

                    {/* Connection Status & Wallet Info */}
                    <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Your Account</h2>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
                            {/* <div className="flex items-center gap-4">
                                
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Your Connected Account</h3>
                                    <div className="flex items-center gap-2 mt-1"> 
                                        <p className="text-blue-100/80">{profile?.emailAddress}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-blue-800/60 hover:bg-blue-700/70 text-blue-200 text-sm rounded-lg transition border border-blue-700/40">
                                Disconnect
                            </button> */}
                            <div>
                                <h4 className="text-sm font-medium text-blue-300 uppercase mb-1">Email address</h4>
                                <div className="flex items-center gap-2">
                                    <p className="text-white">{profile?.emailAddress}</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-blue-300 uppercase mb-1">Wallet Address</h4>
                                <div className="flex items-center gap-2">
                                    <code className="text-white font-mono">{shortAddress(profile?.walletAddress, 10, -20)}</code>
                                    <button className="p-1 hover:bg-blue-800/40 rounded-md transition" title="Copy address">
                                        <Copy className="w-4 h-4 text-blue-300" />
                                    </button>
                                </div>
                            </div>

                            <button onClick={logout} className="px-4 py-2 cursor-pointer bg-blue-800/60 hover:bg-blue-700/70 text-blue-200 text-sm rounded-lg transition border border-blue-700/40">
                                Disconnect
                            </button>
                        </div>

                        <div className="border-t border-blue-700/30 pt-6">
                            {/* <div className="flex flex-col md:flex-row justify-between gap-6">
                                <div>
                                    <h4 className="text-sm font-medium text-blue-300 uppercase mb-1">Wallet Address</h4>
                                    <div className="flex items-center gap-2">
                                        <code className="text-white font-mono">0x71c2...8f39</code>
                                        <button className="p-1 hover:bg-blue-800/40 rounded-md transition" title="Copy address">
                                            <Copy className="w-4 h-4 text-blue-300" />
                                        </button>
                                    </div>
                                </div> 
                            </div> */}
                            <h4 className="text-sm font-medium text-blue-300 uppercase mb-1">Access Key</h4>
                            <p className="text-white mb-4">
                                Use the unique key below to represent your zkLogin account. Never share this key publicly.
                            </p>

                            <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-4  flex justify-between items-center">
                                <code className="text-blue-300 font-mono overflow-auto">{profile?.id}</code>
                                <div className="flex gap-2"> 
                                    <button className="p-2 hover:bg-blue-800/40 rounded-md transition" title="Copy to clipboard">
                                        <Copy className="w-5 h-5 text-blue-300" />
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-blue-300/70 mt-2">
                                Read-only actions like checking balances or staked amounts work instantly in chat. Write actions, such as transfers, require manual approval here
                            </p>
                        </div>
                    </div>

                    {/* Access Key Section */}
                    {/* <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Your MCP Access Key</h2>
                        <p className="text-blue-100/80 mb-6">
                            This unique key allows read operations from Claude Desktop. Never share this key publicly.
                        </p>

                        <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-4 flex justify-between items-center">
                            <code className="text-blue-300 font-mono overflow-auto">sui_zk_mcp_r3ad_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0</code>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-blue-800/40 rounded-md transition" title="Regenerate key">
                                    <RefreshCw className="w-5 h-5 text-blue-300" />
                                </button>
                                <button className="p-2 hover:bg-blue-800/40 rounded-md transition" title="Copy to clipboard">
                                    <Copy className="w-5 h-5 text-blue-300" />
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-blue-300/70 mt-2">
                            This key only grants read access to your blockchain data
                        </p>
                    </div> */}

                    {/* Pending Transactions */}
                    <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Pending Transactions</h2>
                        <p className="text-blue-100/80 mb-6">
                            Transactions requested through Claude Desktop require your approval
                        </p>

                        {/* Empty state */}
                        <div className="border border-dashed border-blue-700/50 rounded-lg p-8 text-center">
                            <Clock className="w-12 h-12 text-blue-400/50 mx-auto mb-4" />
                            <p className="text-blue-100/80 mb-2">No pending transactions</p>
                            <p className="text-sm text-blue-400/70">
                                When you request a transaction through Claude Desktop, it will appear here for approval
                            </p>
                        </div>


                        {/* Example of pending transaction (commented out, can be shown based on state) 
        <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <div className="bg-yellow-500/20 p-2 rounded-full">
                        <Send className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                        <p className="text-white font-medium">Transfer SUI</p>
                        <p className="text-sm text-blue-300/70">Requested 2 minutes ago</p>
                    </div>
                </div>
                <div className="bg-yellow-500/20 px-3 py-1 rounded-full">
                    <p className="text-yellow-500 text-sm font-medium">Pending</p>
                </div>
            </div>
            
            <div className="bg-blue-900/40 rounded-lg p-3 mb-4">
                <div className="flex justify-between mb-2">
                    <p className="text-sm text-blue-300">Amount</p>
                    <p className="text-white font-medium">5.0 SUI</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-sm text-blue-300">Recipient</p>
                    <p className="text-white font-mono text-sm">0x923...7a1b</p>
                </div>
            </div>
            
            <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition border border-red-500/30">
                    Reject
                </button>
                <button className="flex-1 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-lg transition border border-green-500/30">
                    Approve
                </button>
            </div>
        </div>
        */}
                    </div>
                </>
            )}

            {/* Setup Instructions */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8 mb-[60px]">
                <h2 className="text-2xl font-bold text-white mb-6">Using Claude Desktop</h2>
                <p className="text-blue-100/80 mb-8">
                    Follow these steps to configure Sui Serverless MCP with Claude Desktop using your access key
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-blue-950/50 border border-blue-800/40 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                1
                            </div>
                            <h3 className="text-lg font-medium text-white">Update Config File</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            Open Claude Desktop and go to File → Settings → Developer
                        </p>
                        <div className="bg-blue-950/80 border border-blue-800/50 rounded-lg p-3">
                            <pre className="text-blue-300 font-mono text-xs overflow-auto">
                                {`{
  "mcpServers": {
    "sui-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "sui-serverless-mcp",
        "--sui_access_key=YOUR_ACCESS_KEY", 
        "--sui_network=testnet"
      ],
      "disabled": false
    }
  }
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-blue-950/50 border border-blue-800/40 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                2
                            </div>
                            <h3 className="text-lg font-medium text-white">Start Chatting</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            Ask AI about your wallet or to perform any on-chain operations
                        </p>
                        <div className="bg-blue-950/80 border border-blue-800/50 rounded-lg p-3 mb-2">
                            <div className="flex gap-2 items-start mb-3">
                                <User className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                <p className="text-blue-100 text-sm">Check my SUI balance</p>
                            </div>
                            <div className="flex gap-2 items-start">
                                <MessageSquare className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                <p className="text-blue-100 text-sm">I've checked your wallet and your current SUI balance is 42.5 SUI</p>
                            </div>
                        </div>
                        <div className="bg-blue-950/80 border border-blue-800/50 rounded-lg p-3">
                            <div className="flex gap-2 items-start mb-3">
                                <User className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                <p className="text-blue-100 text-sm">Show my staked SUI</p>
                            </div>
                            <div className="flex gap-2 items-start">
                                <MessageSquare className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                <p className="text-blue-100 text-sm">You have 15 SUI staked with validator 0x71a2...</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-blue-950/50 border border-blue-800/40 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                3
                            </div>
                            <h3 className="text-lg font-medium text-white">Approve Transactions</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            When initiates transfers, approve them in your dashboard
                        </p>
                        <div className="bg-blue-950/80 border border-blue-800/50 rounded-lg p-3 mb-2">
                            <div className="flex gap-2 items-start mb-3">
                                <User className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                <p className="text-blue-100 text-sm">Transfer 5 SUI to 0x71c2...</p>
                            </div>
                            <div className="flex gap-2 items-start">
                                <MessageSquare className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                <p className="text-blue-100 text-sm">I've submitted your transfer request. Please approve it in your dashboard.</p>
                            </div>
                        </div>
                        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 mt-4">
                            <div className="flex items-start">
                                <Shield className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                                <div className="ml-2">
                                    <p className="text-yellow-300 font-medium text-sm mb-1">Transaction Pending Approval</p>
                                    <p className="text-yellow-300/80 text-xs">Transfer 5 SUI to 0x71c2...</p>
                                    <div className="flex gap-2 mt-2">
                                        <button className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs rounded transition">
                                            Reject
                                        </button>
                                        <button className="px-3 py-1 bg-green-500/20 hover:bg-green-500/30 text-green-300 text-xs rounded transition">
                                            Approve
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardContainer