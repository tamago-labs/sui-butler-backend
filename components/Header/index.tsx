"use client"

import { X, Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import LoginButton from "./LoginButton"
import { usePathname } from "next/navigation"

const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const path = usePathname()

    return (
        <header className="relative z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex justify-start min-w-[120px]">
                <Link href="/" className="flex items-center">
                    <div className="text-lg md:text-xl font-bold flex items-center">
                        <span className="text-white">Sui Butler</span>
                    </div>
                </Link>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-15">
                <Link href="/dashboard" className={` ${path === "/dashboard" ? "text-white font-semibold" : "text-blue-100 hover:text-white "} transition-colors`}>
                    Dashboard
                </Link>
                <Link href="/setup" className={` ${path === "/setup" ? "text-white font-semibold" : "text-blue-100 hover:text-white "} transition-colors`}>
                    Setup
                </Link>
                <Link href="/playground" className={` ${path === "/playground" ? "text-white font-semibold" : "text-blue-100 hover:text-white "} transition-colors`}>
                    Playground
                </Link> 
            </nav>
            
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center justify-end">
                <LoginButton />
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-800/50 focus:outline-none"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {/* Icon when menu is closed */}
                    {!mobileMenuOpen ? (
                        <Menu className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <X className="block h-6 w-6" aria-hidden="true" />
                    )}
                </button>
            </div>
        </div>
    </div>
    
    {/* Mobile menu, show/hide based on menu state */}
    {mobileMenuOpen && (
        <div className="md:hidden">
            <div className="bg-blue-900/90 backdrop-blur-lg shadow-lg border-t border-blue-800/50 pt-2 pb-4 px-4">
                <div className="space-y-1">
                    <Link 
                        href="/dashboard" 
                        className={`block py-3 px-3 rounded-md ${path === "/dashboard" ? "bg-blue-800/50 text-white" : "text-blue-100 hover:bg-blue-800/30 hover:text-white"}`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Dashboard
                    </Link>
                    <Link 
                        href="/setup" 
                        className={`block py-3 px-3 rounded-md ${path === "/setup" ? "bg-blue-800/50 text-white" : "text-blue-100 hover:bg-blue-800/30 hover:text-white"}`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Setup
                    </Link>
                    <Link 
                        href="/playground" 
                        className={`block py-3 px-3 rounded-md ${path === "/playground" ? "bg-blue-800/50 text-white" : "text-blue-100 hover:bg-blue-800/30 hover:text-white"}`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Playground
                    </Link>
                    
                    {/* Mobile login button */}
                    <div className="pt-2 pb-1">
                        <LoginButton />
                    </div>
                </div>
            </div>
        </div>
    )}

        </header>
    )
}

export default Header