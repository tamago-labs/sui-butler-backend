"use client"

import { AccountContext } from '@/contexts/account';
import { useContext, useState, useEffect } from 'react';
import { WifiOff, Copy, Check, RefreshCw, ChevronDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { shortAddress } from "@/utils/helpers";
import NeedConnected from "../NeedConnected"

export default function SetupContainer() {

  const { profile, network }: any = useContext(AccountContext)

  const [user, setUser] = useState({
    email: 'user@example.com',
    walletAddress: '0x1a2b3c4d5e6f...',
    network: 'testnet',
    accessKey: 'sui_access_1234567890abcdef'
  });

  const [showAccessKey, setShowAccessKey] = useState(false);
  const [copied, setCopied] = useState({
    walletAddress: false,
    accessKey: false,
    config: false
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [field]: true });
    setTimeout(() => setCopied({ ...copied, [field]: false }), 2000);
  };



  const configJson = `{
  "mcpServers": {
    "sui": {
      "command": "npx",
      "args": [
        "-y",
        "sui-butler",
        "--sui_access_key=${profile?.id}", 
        "--sui_network=${network}"
      ],
      "disabled": false
    }
  }
}`;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-white mb-2">Setup</h1>
      <p className="text-lg text-blue-100/80 mb-10">
        Configure Sui Butler to connect with your AI assistants
      </p>

      {!profile && (
        <NeedConnected />
      )}

      {profile && (
        <>
          {/* Status Card */}
          <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/20 shadow-lg shadow-blue-900/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Connection Status</h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="mb-2 sm:mb-0">
                  <p className="text-blue-200 text-sm mb-1">Email</p>
                  <p className="text-white">{profile?.emailAddress}</p>
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-green-400">{profile ? "Connected" : "Disconnected"}</span>
                  </div>
                </div>
              </div>

              {/* Wallet Address */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-blue-700/30 pt-6">
                <div className="mb-2 sm:mb-0">
                  <p className="text-blue-200 text-sm mb-1">Wallet Address</p>
                  <p className="text-white font-mono text-sm">{shortAddress(profile?.walletAddress, 20, -10)}</p>
                </div>
                <button
                  onClick={() => handleCopy(profile?.walletAddress, 'walletAddress')}
                  className="flex items-center justify-center px-3 py-1.5 bg-blue-800/50 hover:bg-blue-700/50 text-blue-100 rounded-lg transition-colors"
                >
                  {copied.walletAddress ? (
                    <><Check className="w-4 h-4 mr-1" /> Copied</>
                  ) : (
                    <><Copy className="w-4 h-4 mr-1" /> Copy</>
                  )}
                </button>
              </div>

              {/* Network */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-blue-700/30 pt-6">
                <div className="mb-2 sm:mb-0">
                  <p className="text-blue-200 text-sm mb-1">Network</p>
                  <p className="text-white capitalize">{network}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Access Key Card */}
          <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/20 shadow-lg shadow-blue-900/20 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white mb-2 sm:mb-0">Access Key</h2>
              {/*<button 
            onClick={refreshAccessKey}
            className="flex items-center justify-center px-3 py-1.5 bg-blue-800/50 hover:bg-blue-700/50 text-blue-100 rounded-lg transition-colors"
            disabled={isRefreshing}
          >
            {isRefreshing ? (
              <><RefreshCw className="w-4 h-4 mr-1 animate-spin" /> Refreshing...</>
            ) : (
              <><RefreshCw className="w-4 h-4 mr-1" /> Refresh Key</>
            )}
          </button>*/}
            </div>

            <div className="bg-blue-950/50 rounded-lg p-4 flex items-center justify-between mb-4">
              <div className="font-mono text-sm truncate max-w-[80%]">
                {showAccessKey ? profile?.id : '•'.repeat(20)}
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => setShowAccessKey(!showAccessKey)}
                  className="text-blue-300 hover:text-blue-100 mr-2"
                >
                  {showAccessKey ? 'Hide' : 'Show'}
                </button>
                <button
                  onClick={() => handleCopy(profile?.id, 'accessKey')}
                  className="text-blue-300 hover:text-blue-100"
                >
                  {copied.accessKey ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <p className="text-blue-100/80 text-sm mb-6">
              Your access key is required to connect Claude Desktop with Sui Butler using zkLogin. Alternatively, you can use a private key without zkLogin directly on the client.
            </p>

            <div className="bg-blue-950/50 rounded-lg mb-6">
              <div className="flex items-center justify-between border-b border-blue-800/50 px-4 py-3">
                <p className="text-white font-medium">Configuration JSON</p>
                <button
                  onClick={() => handleCopy(configJson, 'config')}
                  className="text-blue-300 hover:text-blue-100"
                >
                  {copied.config ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-blue-100 text-sm font-mono">
                {configJson}
              </pre>
            </div>

            <p className="text-blue-100/80 text-sm">
              Locate the configuration by go to File → Settings → Developer, update then restart the app and you're all set.
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/20 shadow-lg shadow-blue-900/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Next Steps</h2>

            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-medium">1</span>
                </div>
                <div>
                  <p className="text-white">Update the configuration JSON on your computer</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-medium">2</span>
                </div>
                <div>
                  <p className="text-white">Restart Claude Desktop with new settings</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-medium">3</span>
                </div>
                <div>
                  <p className="text-white">
                    Try it out in the
                    <Link href="/playground" className="text-cyan-400 hover:text-cyan-300 mx-1">
                      playground
                    </Link>
                    or start using it with Claude
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-blue-700/30">
              <Link
                href="https://github.com/tamago-labs/sui-butler"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-100 hover:text-white"
              >
                Need help? Check out the documentation
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </>)

      }


    </div>
  );
}