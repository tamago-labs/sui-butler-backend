"use client"

import { AccountContext } from '@/contexts/account';
import { RemoteContext } from '@/contexts/remoteSigner';
import { useCallback, useState, useEffect, useReducer, useContext } from 'react';
import { Clock, RefreshCcw, ArrowRight, AlertCircle, Check, X } from 'lucide-react';
import Link from 'next/link';
import NeedConnected from "../NeedConnected"
import { motion } from 'framer-motion';

export default function DashboardContainer() {

  const { profile, network }: any = useContext(AccountContext)
  const { approve, remove }: any = useContext(RemoteContext)

  const [list, setList] = useState([])

  const [state, setState] = useReducer((prev: any, next: any) => ({ ...prev, ...next }), {
    errorMessage: undefined,
    loading: false,
    tick: 1
  })

  const { errorMessage, loading, tick } = state

  useEffect(() => {

    if (profile) {
      (async () => {
        setList([])
        const { data } = await profile.pendingTransactions()
        setList(data)
      })()
    }

  }, [profile, tick])


  const getRelativeTime = (dateString: any) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now.valueOf() - date.valueOf()) / 1000); // difference in seconds

    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  const onApprove = useCallback(async (transactionId: string, toolName: string, params: any, txNetwork: string) => {

    setState({ errorMessage: undefined, loading: true })

    try {

      if (txNetwork !== network) {
        throw new Error(`Network mismatch: You network is ${network} but the transaction is ${txNetwork}`)
      }

      await approve(transactionId, toolName, params, txNetwork)

      setState({ errorMessage: `Your transaction has been approved successfully` })

    } catch (e: any) {
      console.log(e)
      setState({ errorMessage: `${e.message}`, loading: false })
    }

    setState({ loading: false })

  }, [network])

  const onRemove = useCallback(async (transactionId: string) => {

    setState({ errorMessage: undefined, loading: true })

    try {

      await remove(transactionId)

      setState({ errorMessage: `Removed. Please wait a few seconds for the list to update.` })

    } catch (e: any) {
      console.log(e)
      setState({ errorMessage: `${e.message}`, loading: false })
    }

    setState({ loading: false })

  }, [])

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-lg text-blue-100/80">
            Manage your Sui Butler transactions
          </p>
        </div>
        {profile && (
          <button
            onClick={() => setState({ tick: tick + 1 })}
            className="mt-4 md:mt-0 flex items-center justify-center px-4 py-2 bg-blue-800/50 hover:bg-blue-700/50 text-blue-100 rounded-lg transition-colors"
          >
            <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
          </button>)
        }
      </div>

      {!profile && (
        <NeedConnected />
      )}

      {profile && (
        <>

          {errorMessage && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-blue-800 z-20  rounded-xl border text-white border-blue-700 p-6 max-w-lg w-full"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Status Update</h3>
                  <button
                    className="text-blue-100/80 hover:text-white"
                    onClick={() => setState({
                      errorMessage: undefined
                    })}
                  >
                    <X />
                  </button>
                </div>
                <div className='relative'>
                  {errorMessage}
                </div>

                <div className='flex mt-4'>
                  <button onClick={() => {
                    setState({
                      errorMessage: undefined
                    })
                  }} className="px-8 py-3 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all flex items-center justify-center">
                    Close
                  </button>
                </div>


              </motion.div>
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-700/20 shadow-lg shadow-blue-900/20">
              <div className="flex items-center justify-between">
                <p className="text-blue-200">Total Transactions</p>
                <div className="w-10 h-10 bg-blue-800/50 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-blue-300" />
                </div>
              </div>
              {/* <p className="text-3xl font-bold text-white mt-2">{stats.totalTransactions}</p> */}
            </div>

            <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-700/20 shadow-lg shadow-blue-900/20">
              <div className="flex items-center justify-between">
                <p className="text-yellow-200">Pending</p>
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-yellow-300" />
                </div>
              </div>
              {/* <p className="text-3xl font-bold text-white mt-2">{stats.pendingTransactions}</p> */}
            </div>

            <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-700/20 shadow-lg shadow-blue-900/20">
              <div className="flex items-center justify-between">
                <p className="text-green-200">Successful</p>
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-300" />
                </div>
              </div>
              {/* <p className="text-3xl font-bold text-white mt-2">{stats.successfulTransactions}</p> */}
            </div>
          </div>

          {/* Transactions List */}
          <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Transactions</h2>
            <p className="text-blue-100/80 mb-6">
              Transactions requested through AI assistants require your approval
            </p>

            {/* Loading state */}
            {/* {loading && (
              <div className="border border-dashed border-blue-700/50 rounded-lg p-8 text-center">
                <RefreshCcw className="w-12 h-12 text-blue-400/50 mx-auto mb-4 animate-spin" />
                <p className="text-blue-100/80">Loading transactions...</p>
              </div>
            )} */}

            {/* Empty state */}
            {list.length === 0 && (
              <div className="border border-dashed border-blue-700 rounded-lg p-8 text-center">
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <p className="text-blue-100 mb-2">No transactions</p>
                <p className="text-sm text-blue-400">
                  When you request a transaction through an AI assistant, it will appear here for approval
                </p>
              </div>
            )}

            {/* Transactions list */}
            {list.map((item: any, index: number) => {
              const paramsJson = JSON.parse(item.params)
              return (
                <div key={index} className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">

                      <div>
                        <p className="text-white font-medium">{item.toolName}</p>
                        <p className="text-sm text-blue-300/70">{getRelativeTime(item.createdAt)}</p>
                      </div>
                    </div>
                    <div className={`${item.status === "success" ? "bg-green-500/20" : "bg-yellow-500/20"}  px-3 py-1 rounded-full`}>
                      <p className={`${item.status === "success" ? "text-green-500" : "text-yellow-500"} capitalize text-sm font-medium`}>
                        {item.status}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-900/40 rounded-lg p-3 mb-4">
                    {Object.keys(paramsJson).map((key, index) => {
                      return (
                        <div key={index} className="flex justify-between mb-2">
                          <p className="text-sm capitalize text-blue-300">{key}</p>
                          <p className="text-white font-medium">{paramsJson[key]}</p>
                        </div>
                      )
                    })}
                  </div>

                  {item.status === "pending" && (
                    <div className="flex gap-3">
                      <button onClick={() => onRemove(item.id)} disabled={loading} className="flex-1 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition border border-red-500/30">
                        Reject
                      </button>
                      <button disabled={loading} onClick={() => onApprove(item.id, item.toolName, paramsJson, item.network)} className="flex-1 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-lg flex transition border border-green-500/30">
                        {
                          loading ? <RefreshCcw className='m-auto  animate-spin' /> : <div className='m-auto'>
                            Approve
                          </div>
                        }

                      </button>
                    </div>
                  )}
                  {item.status !== "pending" && (
                    <div className="flex gap-3">
                      <button onClick={() => onRemove(item.id)} disabled={loading} className="px-8 py-3 mx-auto bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-medium rounded-lg transition-all w-full items-center justify-center">
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Quick Links */}
      <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/setup">
            <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-6 hover:bg-blue-900/60 transition-all cursor-pointer">
              <h3 className="text-xl font-medium text-white mb-2">Setup</h3>
              <p className="text-blue-100/80">Configure your connection settings and access keys</p>
            </div>
          </Link>

          <Link href="/playground">
            <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-6 hover:bg-blue-900/60 transition-all cursor-pointer">
              <h3 className="text-xl font-medium text-white mb-2">Playground</h3>
              <p className="text-blue-100/80">Try example commands and see how Sui Butler works</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}