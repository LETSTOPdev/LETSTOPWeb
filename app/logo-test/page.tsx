"use client"

import { useState, useEffect } from "react"
import { SvgLogoDebug } from "@/components/svg-logo-debug"

export default function LogoTestPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Partner logo data
  const svgLogos = [
    { name: "Solana", path: "/images/solana-logo.svg" },
    { name: "VeChain", path: "/images/vechain-logo.svg" },
    { name: "Beitar Jerusalem", path: "/images/beitar-logo.svg" },
    { name: "NVIDIA", path: "/images/nvidia-logo.svg" },
    { name: "Raydium", path: "/images/raydium-logo.svg" },
    { name: "BingX", path: "/images/bingx-logo.svg" },
    { name: "Bybit", path: "/images/bybit-logo.svg" },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">SVG Logo Test Page</h1>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">SVG Logo Status</h2>
          <p className="text-gray-400 mb-4">
            This page tests if SVG logos are loading correctly. Green checkmark means the SVG file is accessible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {svgLogos.map((logo) => (
              <div key={logo.name} className="bg-black/60 border border-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">{logo.name}</h3>
                <div className="h-24 flex items-center justify-center">
                  <SvgLogoDebug src={logo.path} alt={`${logo.name} logo`} width={150} height={80} />
                </div>
                <div className="mt-2 text-xs text-gray-500 break-all">{logo.path}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/partners-showcase"
            className="inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-full transition-all duration-300"
          >
            Go to Partners Showcase
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
