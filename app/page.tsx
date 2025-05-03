"use client"

import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SupportedList from "@/components/SupportedList";
import { Check } from "lucide-react"
import Link from "next/link";

export default function Home() {


  return (
    <>
      <Hero />
      <HowItWorks />
      <SupportedList />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Background glow effects */}
        <div className="absolute inset-0   pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 bg-blue-900/60 border border-blue-700/50 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left text content */}
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Manage Your Sui Assets with AI
              </h2>
              <p className="text-lg text-blue-100/90 mb-6">
                Integrate AI assistants with your Sui blockchain apps in minutes, not months — powered by Sui Serverless MCP
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check

                    />
                  </div>
                  <span className="text-blue-100">Open Source</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check

                    />
                  </div>
                  <span className="text-blue-100">Secure by Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check

                    />
                  </div>
                  <span className="text-blue-100">Production Ready</span>
                </div>
              </div>
            </div>

            {/* Right CTA buttons */}
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              <Link href="/dashboard" target="_blank" className="cursor-pointer">
                <button className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all flex items-center justify-center group">
                  Get Started Now
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>

              {/* <button className="w-full px-8 py-4 bg-transparent hover:bg-blue-800/40 text-blue-300 font-medium rounded-lg transition-all border border-blue-700/50 flex items-center justify-center">
                View Documentation
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button> */}
              <a href="https://github.com/tamago-labs/sui-mcp-client" target="_blank" rel="noopener noreferrer" className="w-full px-8 py-4 bg-transparent hover:bg-blue-800/40 text-blue-300 font-medium rounded-lg transition-all border border-blue-700/50 flex items-center justify-center">
                GitHub Repository
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
