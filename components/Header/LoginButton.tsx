"use client"

import { AccountContext } from "@/contexts/account"
import { useContext, useState } from "react"
import Link from "next/link"
import { motion } from 'framer-motion';
import { FcGoogle } from "react-icons/fc";

import { usePathname } from "next/navigation"

import { ArrowRight, User, Mail, X } from "lucide-react"

const LoginButton = () => {

    const [modal, setModal] = useState<boolean>(false)

    const path = usePathname()

    const { isConnected, redirectToAuthUrl, logout }: any = useContext(AccountContext)

    const GoogleIcon: any = FcGoogle

    return (
        <div>

            {modal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-blue-800 z-20 rounded-xl border text-white border-blue-700 p-6 max-w-md w-full "
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold">Select Authentication Method</h3>

                            <button
                                className="text-blue-100/80 hover:text-white"
                                onClick={() => setModal(false)}
                            >
                                <X />
                            </button>
                        </div>
                        <div>
                            <p className="text-blue-100/80">
                                Choose an available option below to sign in
                            </p>
                            <div>
                                <button onClick={() => {
                                    redirectToAuthUrl()
                                }} className="mt-4 w-full flex flex-row cursor-pointer  bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition">

                                    <GoogleIcon size={30} />
                                    <div className="my-auto ml-2">
                                        Sign in with Google
                                    </div>
                                    <ArrowRight className="ml-auto my-auto" />

                                </button>
                            </div>
                        </div>
                    </motion.div></div>)

            }


            {!isConnected && (
                <button onClick={() => {
                    setModal(true)
                }} className={`whitespace-nowrap px-5 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium cursor-pointer text-white bg-blue-600  hover:bg-blue-700`}>
                    Login Now
                </button>
            )}
            {isConnected && (
                <button onClick={() => {
                    logout()
                }} className={`whitespace-nowrap px-5 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium cursor-pointer text-white bg-blue-600  hover:bg-blue-700`}>
                    Logout
                </button>
            )}

            {/*{isConnected && (
                <Link href="/dashboard" className="w-[150px]">
                    <User size={24} className={`my-auto mx-auto cursor-pointer mb-0.5 ${path === "/dashboard" ? "text-blue-400" : "text-white hover:text-blue-400"} `} />
                </Link>
            )}*/}
        </div>
    )
}

export default LoginButton