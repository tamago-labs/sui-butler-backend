

import { FileCode, Shield, CheckCircle, ArrowRight, Wallet, Code, Zap, Command, Infinity, Banknote, ArrowUpRight, Settings, LineChart } from 'lucide-react';

const KeyBenefits = () => {
	return (
		<div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8 py-24">
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits</h2>
    <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
      Unlock the full potential of AI to benefit everyone in the ecosystem
    </p> 
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/20 shadow-lg shadow-blue-900/20 group hover:border-blue-600/40 transition-all">
      <div className="mb-6 bg-blue-600/20 p-3 rounded-xl w-14 h-14 flex items-center justify-center group-hover:bg-blue-600/30 transition-all">
        <Code className="w-7 h-7 text-cyan-400" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">Developers</h3>
      <ul className="space-y-2 text-blue-100/90">
        <li className="flex items-start">
          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
          <span>Generate test cases with simple prompts</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
          <span>Audit smart contracts for vulnerabilities</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
          <span>Debug code through conversational AI</span>
        </li>
      </ul>
    </div>
    
    {/* Card 2 */}
    <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/20 shadow-lg shadow-blue-900/20 group hover:border-blue-600/40 transition-all">
      <div className="mb-6 bg-blue-600/20 p-3 rounded-xl w-14 h-14 flex items-center justify-center group-hover:bg-blue-600/30 transition-all">
        <LineChart className="w-7 h-7 text-cyan-400" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">DeFi Users</h3>
      <ul className="space-y-2 text-blue-100/90">
        <li className="flex items-start">
          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
          <span>Monitor portfolio performance in real-time</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
          <span>Execute trades through natural language</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
          <span>Get AI-powered insights on positions</span>
        </li>
      </ul>
    </div>
    
    {/* Card 3 */}
    <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/20 shadow-lg shadow-blue-900/20 group hover:border-blue-600/40 transition-all">
      <div className="mb-6 bg-blue-600/20 p-3 rounded-xl w-14 h-14 flex items-center justify-center group-hover:bg-blue-600/30 transition-all">
        <Settings className="w-7 h-7 text-cyan-400" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">Protocol Managers</h3>
      <ul className="space-y-2 text-blue-100/90">
        <li className="flex items-start">
          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
          <span>Update protocol parameters seamlessly</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
          <span>Simulate changes before deployment</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
          <span>Participate in governance through AI</span>
        </li>
      </ul>
    </div>
  </div>
 

</div>)
}

export default KeyBenefits