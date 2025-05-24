
import { Wallet , CheckCircle, Coins, Globe, Terminal, LineChart, ArrowRight , DollarSign, Banknote } from 'lucide-react';

const ToolsContainer = () => {
	return (
		<section className="container relative mx-auto px-4 py-16 max-w-6xl">
  <div className="text-center mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Available Tools</h2>
    <p className="text-sm md:text-lg text-blue-100/80 max-w-3xl mx-auto">
     Sui Butler provides a comprehensive suite of MCP tools to support any workflow
    </p>
  </div>
  
  <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-800/60 text-left">
            <th className="px-6 py-4 text-white font-semibold">Category</th>
            <th className="px-6 py-4 text-white font-semibold">Tool Name</th>
            <th className="px-6 py-4 text-white font-semibold hidden md:table-cell">Description</th>
            <th className="px-6 py-4 text-white font-semibold hidden lg:table-cell">Example Usage</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-800/40">
          {/* Wallet & Network Operations */}
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 text-blue-200 align-top" rowSpan={2}>
              <div className="flex items-center">
                <Wallet className="w-5 h-5 text-cyan-400 mr-2" />
                <span>Wallet</span>
              </div>
            </td>
            <td className="px-6 py-4 font-mono text-sm text-white">sui_get_wallet_address</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Retrieve your wallet address</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"What's my wallet address?"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_get_all_balances</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Get all token balances</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Show my token balances"</td>
          </tr> 
          
          {/* Token Transfers & DeFi */}
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 text-blue-200 align-top" rowSpan={3}>
              <div className="flex items-center">
                <Coins className="w-5 h-5 text-cyan-400 mr-2" />
                <span>Token Transfers & DeFi</span>
              </div>
            </td>
            <td className="px-6 py-4 font-mono text-sm text-white">sui_transfer_token</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Transfer tokens to another address</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Transfer 10 SUI to 0x123..."</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_get_swap_quote</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Get a quote for swapping tokens</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Get quote for swapping 10 SUI to CETUS"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_swap_tokens</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Swap tokens on Cetus Aggregator</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Swap 10 SUI to CETUS with 0.5% slippage"</td>
          </tr>
          
          {/* Staking Operations */}
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 text-blue-200 align-top" rowSpan={4}>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-cyan-400 mr-2" />
                <span>Staking Operations</span>
              </div>
            </td>
            <td className="px-6 py-4 font-mono text-sm text-white">sui_stake</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Stake SUI tokens to a validator</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Stake 100 SUI to validator X"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_get_validators</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Get all active validators</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"What are good validator to stake with?"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_get_stake</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Get all staked SUI tokens</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Show my staked positions"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_unstake</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Unstake SUI tokens</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Unstake my SUI from validator X"</td>
          </tr>
          
          {/* Token Management */}
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 text-blue-200 align-top">
              <div className="flex items-center">
                <Banknote className="w-5 h-5 text-cyan-400 mr-2" />
                <span>Token Management</span>
              </div>
            </td>
            <td className="px-6 py-4 font-mono text-sm text-white">sui_deploy_token</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Deploy a new token on Sui</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Create a token named MyToken with symbol MTK"</td>
          </tr>
          
          {/* SNS Domain Services */}
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 text-blue-200 align-top" rowSpan={2}>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                <span>SNS Domain Services</span>
              </div>
            </td>
            <td className="px-6 py-4 font-mono text-sm text-white">sui_get_sns_name_record</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Get SNS domain information</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Look up info about domain.sui"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_register_sns</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Register a SNS domain</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Register myname.sui for 2 years"</td>
          </tr>
          
          {/* Sui CLI Integration */}
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 text-blue-200 align-top" rowSpan={9}>
              <div className="flex items-center">
                <Terminal className="w-5 h-5 text-cyan-400 mr-2" />
                <span>Sui CLI Integration</span>
              </div>
            </td>
            <td className="px-6 py-4 font-mono text-sm text-white">sui_cli_publish</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Deploy a Move package to the network</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Deploy a Move package on provided folder to the network"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_cli_move_test</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Run Move unit tests on the folder</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Run tests for my smart contract on provided folder"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_cli_move_new</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Create a new Move project</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Help create a new move project name my-project-test"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_cli_move_build</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Build a Move package</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Help build the package on the provided folder"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_cli_call</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Call a Move function</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Call the package 0x1234 on update_k() with this args [10000]"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_cli_active_env</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Get the currently active Sui network environment</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Which network of Sui CLI connected to?"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_cli_active_address</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Get current network</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Get active address on Sui CLI?"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_cli_addresses</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">List all wallet addresses, their aliases</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"List all wallets on Sui CLI?"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">sui_cli_switch_address</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Change the active address</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Change active address on Sui CLI to 0x123?"</td>
          </tr>
          
          {/* Price Data (Pyth) */}
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 text-blue-200 align-top" rowSpan={3}>
              <div className="flex items-center">
                <LineChart className="w-5 h-5 text-cyan-400 mr-2" />
                <span>Price Data (Pyth)</span>
              </div>
            </td>
            <td className="px-6 py-4 font-mono text-sm text-white">pyth_search_price_feeds</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Search for price feeds</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Find BTC price feeds on Pyth"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">pyth_get_prices</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Get prices by feed IDs</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"Get the latest BTC and ETH prices"</td>
          </tr>
          <tr className="hover:bg-blue-800/20 transition-colors">
            <td className="px-6 py-4 font-mono text-sm text-white">pyth_get_common_crypto_prices</td>
            <td className="px-6 py-4 text-blue-100 hidden md:table-cell">Get common crypto prices</td>
            <td className="px-6 py-4 text-blue-100/80 hidden lg:table-cell">"What are the current prices for BTC, ETH, SOL and SUI?"</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
 
</section>)
}

export default ToolsContainer