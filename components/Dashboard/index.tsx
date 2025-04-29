"use client"

import { ArrowRight, Settings, Send, MessageSquare, CheckCircle, Copy, Wallet, Code, Clock, RefreshCw, Zap, Command, Infinity, Banknote, ArrowUpRight } from 'lucide-react';


const DashboardContainer = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Dashboard</h1>
                <p className="text-lg text-blue-100/80 max-w-2xl">
                    Manage and approve your pending transactions when using zkLogin
                </p>
            </div>

            {/* Connection Status & Wallet Info */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8 mb-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Connected with zkLogin</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <img src="/google-icon.svg" alt="Google" className="w-4 h-4" />
                                <p className="text-blue-100/80">username@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-800/60 hover:bg-blue-700/70 text-blue-200 text-sm rounded-lg transition border border-blue-700/40">
                        Disconnect
                    </button>
                </div>

                <div className="border-t border-blue-700/30 pt-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div>
                            <h4 className="text-sm font-medium text-blue-300 uppercase mb-1">Wallet Address</h4>
                            <div className="flex items-center gap-2">
                                <code className="text-white font-mono">0x71c2...8f39</code>
                                <button className="p-1 hover:bg-blue-800/40 rounded-md transition" title="Copy address">
                                    <Copy className="w-4 h-4 text-blue-300" />
                                </button>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-blue-300 uppercase mb-1">Balance</h4>
                            <p className="text-white font-medium">125.45 SUI</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Access Key Section */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8 mb-8">
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
            </div>

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

            {/* Setup Instructions */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Connect to Claude Desktop</h2>
                <p className="text-blue-100/80 mb-8">
                    Follow these steps to configure Claude Desktop to use your Sui zkMCP access key
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-blue-950/50 border border-blue-800/40 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                1
                            </div>
                            <h3 className="text-lg font-medium text-white">Create Config File</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            Create a JSON file named <code className="text-blue-300">sui-zkmcp-config.json</code>
                        </p>
                        <div className="bg-blue-950/80 border border-blue-800/50 rounded-lg p-3">
                            <pre className="text-blue-300 font-mono text-xs overflow-auto">
                                {`{
  "accessKey": "sui_zk_mcp_r3ad_...",
  "endpoint": "https://zkmcp.sui.io"
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
                            <h3 className="text-lg font-medium text-white">Add to Claude Desktop</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            Open Claude Desktop and go to Settings → Integrations → MCP
                        </p>
                        <div className="bg-blue-950/80 border border-blue-800/50 rounded-lg h-32 flex items-center justify-center">
                            <Settings className="w-10 h-10 text-blue-400/50" />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-blue-950/50 border border-blue-800/40 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                3
                            </div>
                            <h3 className="text-lg font-medium text-white">Start Using</h3>
                        </div>
                        <p className="text-blue-100/80 mb-4">
                            Begin interacting with Sui blockchain through natural language commands
                        </p>
                        <div className="bg-blue-950/80 border border-blue-800/50 rounded-lg h-32 flex items-center justify-center">
                            <MessageSquare className="w-10 h-10 text-blue-400/50" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardContainer