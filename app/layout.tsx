import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SoraFont = Sora({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Sui Serverless MCP | Connect AI to Sui Blockchain with zkLogin",
  description: "Specialized Model Context Protocol service enabling AI models to seamlessly interact with the Sui blockchain ecosystem through zkLogin",
  keywords: "Sui, blockchain, AI, MCP, zkLogin, Claude, cryptocurrency, Web3",
  authors: [
    {
      name: "Tamago Labs Team"
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={SoraFont.className}>
        <Providers>
          <div className="min-h-screen  w-full text-blue-100  bg-gradient-to-b from-blue-950 to-blue-900  relative overflow-hidden">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>

      </body>
    </html>
  );
}
