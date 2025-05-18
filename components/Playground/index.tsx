"use client"

import { useState, useEffect } from 'react';
import { Code, FileCode, Layers, ArrowRight, Settings, RefreshCw, BookOpen, FolderOpen, Terminal, ArrowRightCircle, Coins, Calculator, PieChart, ChevronDown, Copy, Check, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function PlaygroundContainer() {
    const [activeTab, setActiveTab] = useState('defi');
    const [copiedConfig, setCopiedConfig] = useState(false);

    const useCases: any = {
        defi: {
            title: "DeFi Portfolio Management",
            description: "Manage your crypto portfolios, check prices, and execute trades with AI assistance.",
            icon: <Coins className="w-6 h-6 text-cyan-400" />,
            config: {
                requirements: ["Sui Butler"],
                configJson: `{
  "mcpServers": {
    "sui": {
      "command": "npx",
      "args": [
        "-y",
        "sui-butler",
        "--sui_access_key=YOUR_ACCESS_KEY", 
        "--sui_network=mainnet"
      ],
      "disabled": false
    }
  }
}`
            },
            examples: [
                {
                    title: "Check Token Prices",
                    prompt: "What are the current prices for Bitcoin, Ethereum, Solana and SUI?",
                    result: "Based on Pyth price oracle data, here are the current prices:\n\n- Bitcoin (BTC): $97,452.83 (±$12.40)\n- Ethereum (ETH): $3,785.12 (±$2.87)\n- Solana (SOL): $187.22 (±$0.17)\n- Sui (SUI): $1.43 (±$0.002)\n\nThese prices were updated within the last 30 seconds. Would you like me to help you swap any tokens or analyze market trends?"
                },
                {
                    title: "Execute Token Swap",
                    prompt: "I want to swap 10 SUI to USDC. What rate would I get right now? If it's good, please execute the swap.",
                    result: "I've checked the current swap rates via Cetus Aggregator for 10 SUI to USDC:\n\n- Rate: 1 SUI = 1.428 USDC\n- You will receive: ~14.28 USDC\n- Slippage: 0.5%\n- Min. received: 14.21 USDC\n- Price impact: 0.05%\n\nThis appears to be a favorable rate compared to the 24h average. Would you like me to execute this swap? If yes, I'll need your approval in the dashboard."
                },
                {
                    title: "Portfolio Analysis",
                    prompt: "Analyze my portfolio and recommend rebalancing options based on current market conditions.",
                    result: "I've analyzed your wallet holdings and current market conditions:\n\nCurrent Portfolio:\n- SUI: 85.4% (315.7 SUI worth $451.45)\n- USDC: 14.6% (54.12 USDC worth $54.12)\n\nObservations:\n- Your portfolio is heavily weighted toward SUI (85.4%)\n- SUI price is up 12.8% in the past week, but showing signs of resistance at $1.45\n- BTC dominance is rising, suggesting possible altcoin correction\n\nRecommended rebalancing:\n1. Consider reducing SUI exposure to 60-70%\n2. Swap ~60 SUI to USDC to protect against volatility\n3. Consider diversifying 10-15% into BTC as a hedge\n\nWould you like me to prepare any of these swaps for you?"
                }
            ]
        },
        developer: {
            title: "Smart Contract Development",
            description: "Develop, test, and deploy Sui Move smart contracts with AI code assistance.",
            icon: <FileCode className="w-6 h-6 text-cyan-400" />,
            config: {
                requirements: ["Sui Butler", "Filesystem MCP"],
                configJson: `{
  "mcpServers": {
    "sui": {
      "command": "npx",
      "args": [
        "-y",
        "sui-butler",
        "--sui_access_key=YOUR_ACCESS_KEY", 
        "--sui_network=testnet"
      ],
      "disabled": false
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "\${workspaceFolder}"
      ],
      "disabled": false
    }
  }
}`
            },
            examples: [
                {
                    title: "Generate Test Cases",
                    prompt: "Analyze my Move contract and create comprehensive test cases for all public functions.",
                    result: "I've analyzed your Move contract in the current workspace and identified 4 public functions that require testing:\n\n1. `create_post`\n2. `update_post`\n3. `delete_post`\n4. `transfer_ownership`\n\nI've generated comprehensive test cases for each function, including positive tests, edge cases, and error conditions. The tests cover:\n\n- Authentication checks\n- Input validation\n- State transitions\n- Event emissions\n- Error handling\n\nWould you like me to write these tests in your project's test directory? I'll use the Sui Move test framework with proper assertions and mocks."
                },
                {
                    title: "Build & Test Package",
                    prompt: "Run tests for my Move package and analyze the results for any issues.",
                    result: "I'm running the Sui CLI to build and test your Move package...\n\n✅ Build completed successfully.\n\nRunning Move unit tests:\n[PASS] 0x123::blog::test_create_post\n[PASS] 0x123::blog::test_update_post\n[PASS] 0x123::blog::test_delete_post\n[FAIL] 0x123::blog::test_transfer_ownership\n\nTest result: FAILED. Total tests: 4; passed: 3; failed: 1\n\nAnalysis of failed test:\n- The `test_transfer_ownership` test failed because there's a missing authorization check in the transfer_ownership function.\n- Line 142: The function should verify that the caller is the current owner before allowing the transfer.\n- Recommendation: Add a precondition check using `assert!(tx_context::sender(ctx) == post.owner, ERROR_NOT_OWNER);`\n\nWould you like me to fix this issue in your code?"
                },
                {
                    title: "Deploy Contract",
                    prompt: "Publish my Move package to the Sui testnet and explain what I need to do next.",
                    result: "I'll publish your Move package to the Sui testnet using the Sui CLI.\n\nRunning `sui client publish` command...\n\nTransaction Digest: 7YcEV4u1UfU96hqPKH8P5vufeUbfA5S6qhzpgbKJwvCR\n\n✅ Package published successfully!\n\n📦 Package ID: 0x42a97a0f043e95fae576bb0c27933ac37e9d5c2821c38ab3cd8d7b22d38573b2\n\n🔑 Upgrade Cap: 0x871c88260dddaf44dad9f0cc9d2e7972f809b81dd23ef37bee1f9b4730a14f9e\n\nImportant next steps:\n1. **Save your Package ID** - You'll need this to interact with your contract\n2. **Store your Upgrade Cap** - This unique object allows you to upgrade your package later\n3. **Interact with your contract** - Use `sui client call` to test your functions\n\nWould you like me to help you initialize your contract or call any of its functions?"
                }
            ]
        },
        governance: {
            title: "Protocol Governance",
            description: "Monitor DeFi protocol metrics and manage protocol parameters through AI assistance.",
            icon: <PieChart className="w-6 h-6 text-cyan-400" />,
            config: {
                requirements: ["Sui Butler"],
                configJson: `{
  "mcpServers": {
    "sui": {
      "command": "npx",
      "args": [
        "-y",
        "sui-butler",
        "--sui_access_key=YOUR_ACCESS_KEY", 
        "--sui_network=mainnet"
      ],
      "disabled": false
    }
  }
}`
            },
            examples: [
                {
                    title: "Market Analysis",
                    prompt: "Analyze current market conditions and recommend optimal utilization ratio for our lending protocol.",
                    result: "I've analyzed the current market conditions for your lending protocol:\n\n**Current Metrics:**\n- SUI supply: 2.45M SUI ($3.5M)\n- SUI borrow: 1.89M SUI ($2.7M)\n- Current utilization: 77.1%\n- Target utilization: 80%\n- Current borrow APR: 5.12%\n- Deposit APR: 3.94%\n\n**Market Conditions:**\n- SUI price volatility (30d): 18.5% (Moderate)\n- Market sentiment: Neutral, slightly bullish\n- Competitive landscape: Average borrow APR across protocols is 4.8%\n\n**Recommendation:**\n- Increase target utilization ratio from 80% to 85%\n- Projected impact: +0.62% on deposit APR, +0.81% on borrow APR\n- Rationale: Current volatility is moderate, and your protocol has strong liquidation mechanisms in place\n\nWould you like me to help you implement this parameter change?"
                },
                {
                    title: "Update Protocol Parameters",
                    prompt: "Update the target utilization ratio in our lending protocol to 85% based on current market conditions.",
                    result: "I'll help you update the target utilization ratio in your lending protocol from 80% to 85%.\n\nPreparing transaction to call the update_utilization_target function...\n\n**Transaction Preview:**\n- Module: lending_protocol\n- Function: update_utilization_target\n- Parameter: 85\n- Current value: 80\n- Required permissions: ADMIN\n\nThis transaction requires confirmation in the dashboard. Once approved, the new target utilization ratio will take effect immediately. This will likely:\n\n- Increase deposit APR by approximately 0.62%\n- Increase borrow APR by approximately 0.81%\n- Allow for more efficient capital utilization\n\nI'll create the transaction now. Please check the dashboard to approve it."
                },
                {
                    title: "Risk Assessment",
                    prompt: "Assess the liquidation risk in our protocol based on current market volatility and borrowing levels.",
                    result: "I've performed a risk assessment for your lending protocol based on current market conditions:\n\n**Current State:**\n- Total value locked: $8.2M\n- Total borrowed: $5.7M\n- Collateralization ratio: 143%\n- Liquidation threshold: 120%\n\n**Risk Metrics:**\n- SUI 24h volatility: 4.3%\n- SUI 7d volatility: 12.8%\n- Maximum historical 1-day drop: 18.7%\n\n**Liquidation Risk Analysis:**\n- Low risk: $2.1M (36.8% of positions)\n- Medium risk: $3.2M (56.1% of positions)\n- High risk: $0.4M (7.1% of positions)\n\n**Recommendations:**\n1. Maintain current liquidation parameters as they're well-calibrated for current volatility\n2. Consider implementing targeted notifications for high-risk borrowers\n3. Ensure sufficient liquidator incentives during high volatility periods\n\nThe protocol's risk level is within acceptable parameters, but monitoring the 7.1% high-risk positions is advisable. Would you like more detailed data on specific risk thresholds?"
                }
            ]
        }
    };

    const currentUseCase = useCases[activeTab];

    const copyConfig = () => {
        navigator.clipboard.writeText(currentUseCase.config.configJson);
        setCopiedConfig(true);
        setTimeout(() => setCopiedConfig(false), 2000);
    };

    const handleTryExample = (prompt: any) => {
        // Copy to clipboard or integrate with chat
        navigator.clipboard.writeText(prompt);
        alert("Example prompt copied to clipboard!");
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Playground</h1>
                <p className="text-lg text-blue-100/80">
                    Explore example use cases for Sui Butler
                </p>
            </div>

            {/* Use Case Selection - Top Bar */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-4 mb-8">
                <div className="flex flex-col sm:flex-row items-center">
                    <label className="text-blue-200 mr-4 mb-2 sm:mb-0">Select Use Case:</label>
                    <div className="w-full sm:w-auto grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {Object.entries(useCases).map(([id, useCase]: any) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`flex items-center justify-center px-6 py-3 font-medium text-sm rounded-lg transition-colors
                  ${activeTab === id
                                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                                        : 'bg-blue-800/30 text-blue-200 hover:text-white hover:bg-blue-800/50'}`}
                            >
                                {useCase.icon}
                                <span className="ml-2">{useCase.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content - Two-Column Layout */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Configuration */}
                <div className="w-full lg:w-1/3">
                    <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6 sticky top-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-white flex items-center">
                                <Settings className="w-5 h-5 mr-2 text-cyan-400" />
                                Configuration
                            </h2>
                            <button
                                onClick={copyConfig}
                                className="flex items-center text-blue-300 hover:text-cyan-400 transition-colors"
                                title="Copy configuration"
                            >
                                {copiedConfig ? (
                                    <Check className="w-5 h-5" />
                                ) : (
                                    <Copy className="w-5 h-5" />
                                )}
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Use Case Info */}
                            <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-4">
                                <div className="flex items-center mb-2">
                                    {currentUseCase.icon}
                                    <h3 className="text-white font-medium ml-2">{currentUseCase.title}</h3>
                                </div>
                                <p className="text-sm text-blue-100/80">{currentUseCase.description}</p>
                            </div>

                            {/* Required Tools */}
                            <div>
                                <h3 className="text-blue-200 mb-2 text-sm font-medium">Required Tools</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {currentUseCase.config.requirements.map((req: any, idx: number) => (
                                        <span key={idx} className="px-3 py-1 bg-blue-800/50 text-blue-100 rounded-lg text-sm">
                                            {req}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Configuration Code */}
                            <div>
                                <h3 className="text-blue-200 mb-2 text-sm font-medium">Claude Desktop Configuration</h3>
                                <div className="bg-blue-950/50 rounded-lg p-4 font-mono text-sm text-blue-100 whitespace-pre overflow-x-auto max-h-[300px]">
                                    {currentUseCase.config.configJson}
                                </div>
                            </div>

                            {/* Configuration Notes */}
                            <div className="bg-blue-800/20 rounded-lg p-4 text-sm">
                                <h3 className="text-blue-200 font-medium mb-2 flex items-center">
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    Setup Instructions
                                </h3>
                                <ol className="space-y-2 text-blue-100/80 ml-5 list-decimal">
                                    <li>Install Claude Desktop app on your computer</li>
                                    <li>Open Settings in Claude Desktop</li>
                                    <li>Copy the configuration above and paste it into your Claude Desktop settings</li>
                                    <li>Restart Claude Desktop to apply changes</li>
                                </ol>

                                {currentUseCase.config.requirements.includes("Filesystem MCP") && (
                                    <div className="mt-4 pt-4 border-t border-blue-800/30">
                                        <div className="flex items-start">
                                            <FolderOpen className="w-4 h-4 text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                                            <p className="text-yellow-300">
                                                Replace <code className="bg-blue-900/40 px-1 py-0.5 rounded">${"{workspaceFolder}"}</code> with the absolute path to your project directory.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Setup Link */}
                            <Link
                                href="/setup"
                                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                            >
                                Set Up Sui Butler
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column - Examples */}
                <div className="w-full lg:w-2/3">
                    <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6">
                        <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
                            Example Interactions
                        </h2>

                        <div className="space-y-6">
                            {currentUseCase.examples.map((example: any, idx: number) => (
                                <div key={idx} className="bg-blue-950/60 border border-blue-800/50 rounded-lg overflow-hidden">
                                    <div className="border-b border-blue-800/50 px-4 py-3 flex items-center justify-between">
                                        <h3 className="font-medium text-white">{example.title}</h3>
                                        <button
                                            onClick={() => handleTryExample(example.prompt)}
                                            className="text-sm bg-blue-700/50 hover:bg-blue-700 text-blue-100 hover:text-white px-3 py-1 rounded-lg transition-colors flex items-center"
                                        >
                                            <Copy className="w-3 h-3 mr-1" />
                                            Copy
                                        </button>
                                    </div>

                                    <div className="p-4 space-y-4">
                                        {/* User Prompt */}
                                        <div className="bg-blue-900/40 rounded-lg p-4">
                                            <div className="flex items-start">
                                                <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center mr-3 flex-shrink-0">
                                                    <span className="text-white text-sm">U</span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="text-white">{example.prompt}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* AI Response */}
                                        <div className="bg-blue-950/60 rounded-lg p-4">
                                            <div className="flex items-start">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mr-3 flex-shrink-0">
                                                    <span className="text-white text-sm">AI</span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="text-white whitespace-pre-line">{example.result}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}