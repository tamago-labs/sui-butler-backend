"use client"

import { Lock, Shield, Key, ArrowLeftRight, Send, LogIn } from 'lucide-react';


const HowItWorks = () => {
    return <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
                Choose your preferred option to interact with the Sui blockchain ecosystem on an MCP-compatible AI client
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Private Key Flow */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8">
                <div className="flex items-center mb-6">
                    <Key className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Connect with Private Key</h3>
                </div>
                <p className="text-blue-100/80 mb-8">
                    Fast, direct transaction execution with full control — ideal for developers and advanced users
                </p>

                <div className="space-y-8 mb-8">
                    {/* Step 1 */}
                    <div className="flex items-start">
                        <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                            1
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Prepare Your Private Key</h3>
                            <p className="text-blue-100/80">
                                Export your private key from your wallet in secure environment
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start">
                        <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                            2
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Configure in Claude Desktop</h3>
                            <p className="text-blue-100/80">
                                Add your private key to the config file - transactions will be signed automatically
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-950/60 mt-4 border border-blue-800/50 rounded-lg p-4">
                    <pre className="text-blue-300 font-mono text-xs overflow-auto">
                        {`{
  "mcpServers": {
    "hedera": {
      "command": "npx",
      "args": [
        "-y",
        "sui-serverless-mcp",
        "--sui_private_key=YOUR_PRIVATE_KEY", 
        "--sui_network=testnet"
      ],
      "disabled": false
    }
  }
}`}
                    </pre>
                </div>

                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div className="flex items-start">
                        <Shield className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-yellow-300 text-sm">
                            Security Note: Your private key grants full control over your assets. Only use this method in a secure environment.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column - zkLogin Flow */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8">
                <div className="flex items-center mb-6">
                    <LogIn className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Connect with zkLogin</h3>
                </div>
                <p className="text-blue-100/80 mb-8">
                    Login with Google or another provider suitable for all users, requires approval for transactions
                </p>

                <div className="space-y-8 mb-8">
                    {/* Step 1 */}
                    <div className="flex items-start">
                        <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                            1
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Connect & Get Access Key</h3>
                            <p className="text-blue-100/80">
                                Sign in with Google or another provider via zkLogin to receive your secure access key
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start">
                        <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                            2
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Configure in Claude Desktop</h3>
                            <p className="text-blue-100/80">
                                Add your access key to the config file - read operations work immediately
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-950/60 mt-4 border border-blue-800/50 rounded-lg p-4">
                    <pre className="text-blue-300 font-mono text-xs overflow-auto">
                        {`{
  "mcpServers": {
    "hedera": {
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

                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex items-start">
                        <ArrowLeftRight className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-green-300 text-sm">
                            Transaction Security: All transfer operations will require your approval in the dashboard before execution.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* How to use section (common for both methods) */}
        <div className="mt-16">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-white mb-2">Start Using Natural Language</h3>
                <p className="text-blue-100/80 max-w-2xl mx-auto">
                    Once configured, interact with Sui blockchain using simple conversational commands
                </p>
            </div>

            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6 shadow-xl max-w-2xl mx-auto">
                <div className="mb-4 flex items-center justify-between border-b border-blue-700/30 pb-4">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-blue-200 text-sm">Claude Desktop</div>
                    <div></div>
                </div>

                <div className="space-y-4 mb-4">
                    <div className="bg-blue-950/50 rounded-lg p-4 text-blue-200">
                        <p className="text-sm">Check my SUI balance</p>
                    </div>

                    <div className="bg-blue-900/60 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                            <div className="w-6 h-6 rounded-full bg-purple-600 mr-2"></div>
                            <p className="text-white font-medium">Claude</p>
                        </div>
                        <p className="text-blue-100/90 text-sm">
                            I've checked your Sui wallet and your current balance is 42.58 SUI.
                        </p>
                    </div>
                </div>

                <div className="border-t border-blue-700/30 pt-4">
                    <div className="bg-blue-800/50 rounded-full px-4 py-2 text-blue-200 text-sm flex items-center">
                        <span className="flex-grow">Ask me anything about your Sui wallet...</span>
                        <Send className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default HowItWorks