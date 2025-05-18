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
  title: "Sui Butler | Let the smartest AI to simplify your Sui journey",
  description: "Sui Butler is a specialized Model Context Protocol (MCP) service that enables AI models to seamlessly interact with the Sui blockchain ecosystem using zkLogin.",
  keywords: "Sui Butler, Sui, blockchain, AI, MCP, zkLogin, Claude, cryptocurrency, Web3",
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
