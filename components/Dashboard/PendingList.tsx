
import { RemoteContext } from '@/contexts/remoteSigner';
import { X, ArrowRight, Shield, Settings, Send, User, MessageSquare, CheckCircle, Copy, Wallet, Code, Clock, RefreshCw, Zap, Command, Infinity, Banknote, ArrowUpRight, WifiOff, RefreshCcw } from 'lucide-react';
import { useCallback, useContext, useEffect, useState, useReducer } from "react"
import { motion } from 'framer-motion';
import { AccountContext } from '@/contexts/account';


function getRelativeTime(timestamp: any) {
    const now = new Date();
    const created = new Date(timestamp);
    const diff = Math.floor((now.valueOf() - created.valueOf()) / 1000); // difference in seconds

    if (diff < 60) return `Requested just now`;
    if (diff < 3600) return `Requested ${Math.floor(diff / 60)} minute(s) ago`;
    if (diff < 86400) return `Requested ${Math.floor(diff / 3600)} hour(s) ago`;
    return `Requested ${Math.floor(diff / 86400)} day(s) ago`;
}

const PendingList = ({ profile }: any) => {

    const { network }: any = useContext(AccountContext)
    const { approve, remove }: any = useContext(RemoteContext)

    const [list, setList] = useState([])

    const [state, setState] = useReducer((prev: any, next: any) => ({ ...prev, ...next }), {
        errorMessage: undefined,
        loading: false
    })

    const { errorMessage, loading } = state

    useEffect(() => {

        if (profile) {
            (async () => {
                const { data } = await profile.pendingTransactions()
                setList(data)
            })()
        }

    }, [profile])

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

            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Pending Transactions</h2>
                <p className="text-blue-100/80 mb-6">
                    Transactions requested through Claude Desktop require your approval
                </p>

                {/* Empty state */}
                {list.length === 0 && (
                    <div className="border border-dashed border-blue-700/50 rounded-lg p-8 text-center">
                        <Clock className="w-12 h-12 text-blue-400/50 mx-auto mb-4" />
                        <p className="text-blue-100/80 mb-2">No pending transactions</p>
                        <p className="text-sm text-blue-400/70">
                            When you request a transaction through Claude Desktop, it will appear here for approval
                        </p>
                    </div>)}

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
                    )
                })}


            </div>
        </>
    )
}

export default PendingList