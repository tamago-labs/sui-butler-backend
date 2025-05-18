

import { WifiOff } from "lucide-react"

const NeedConnected = () => {
	return (
		 <div className="  mb-[40px]   bg-blue-900/40 border border-blue-700/30 rounded-xl p-8 text-center">
                    <WifiOff className="w-12 h-12 text-blue-400/50 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">Login Required</h2>
                    <p className="text-blue-100/80 mt-2 mb-2">
                        Log in with zkLogin to access this section
                    </p>
                </div>
	)
}

export default NeedConnected