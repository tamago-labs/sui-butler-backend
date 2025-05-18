"use client"


import Hero from "@/components/Hero";
import KeyBenefits from "@/components/KeyBenefits";
import HowItWorks from "@/components/HowItWorks";
import SupportedList from "@/components/Tools";
import { Check, Coins, PieChart, FileCode, ArrowRight } from "lucide-react"
import Link from "next/link";

export default function Home() {


  return (
    <>
      <Hero />
      {/*<KeyBenefits/>*/}
      <HowItWorks />
      <SupportedList />

      <section className="container relative mx-auto px-4 py-20 max-w-5xl">
        <div className="  rounded-2xl overflow-hidden border border-blue-700/30 shadow-xl">
          <div className="grid grid-cols-1 gap-8">
            {/* Left Side - Content */}
            <div className="p-10 lg:p-12 flex flex-col justify-center">

              <p className="text-blue-100/90 text-lg mb-8">
                See real examples of how Sui Butler enables AI assistants to manage your crypto portfolio, develop smart contracts, and govern DeFi protocols.
              </p>

              {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex-shrink-0 flex items-center justify-center mr-4">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium text-lg mb-1">DeFi Portfolio Management</h3>
              <p className="text-blue-100/80">Monitor prices, execute swaps, and analyze your portfolio with simple conversations</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex-shrink-0 flex items-center justify-center mr-4">
              <FileCode className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium text-lg mb-1">Smart Contract Development</h3>
              <p className="text-blue-100/80">Generate tests, build packages, and deploy contracts through AI assistance</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex-shrink-0 flex items-center justify-center mr-4">
              <PieChart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium text-lg mb-1">Protocol Governance</h3>
              <p className="text-blue-100/80">Update parameters, assess risks, and monitor metrics for DeFi protocols</p>
            </div>
          </div>
        </div>*/}

              <Link
                href="/playground"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-xl group"
              >
                Explore the Playground
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>


      </section>
    </>
  );
}
