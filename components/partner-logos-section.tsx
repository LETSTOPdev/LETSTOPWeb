"use client"

import { useState, useEffect } from "react"
import { LogoCarousel } from "@/components/logo-carousel"

export function PartnerLogosSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Partner logo data with verification of file existence
  const partners = [
    { name: "Solana", logo: "/images/solana-logo.svg", width: 120, height: 60 },
    { name: "VeChain", logo: "/images/vechain-logo.svg", width: 120, height: 60 },
    { name: "Beitar", logo: "/images/beitar-logo-updated.png", width: 120, height: 60 },
    { name: "NVIDIA", logo: "/images/nvidia-logo.png", width: 120, height: 60 },
    { name: "TEN", logo: "/images/ten-logo-updated.png", width: 120, height: 60 },
    { name: "Airalo", logo: "/images/airalo-logo.png", width: 120, height: 60 },
    { name: "Raydium", logo: "/images/raydium-logo.svg", width: 120, height: 60 },
    { name: "BingX", logo: "/images/bingx-logo.svg", width: 120, height: 60 },
    { name: "Bybit", logo: "/images/bybit-logo.svg", width: 120, height: 60 },
  ]

  if (!mounted) return null

  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="relative">
              Our Partners
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with industry leaders to create safer roads and innovative technology solutions.
          </p>
        </div>

        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-8 hover:border-primary/30 transition-all duration-300 overflow-hidden">
          <div className="w-full overflow-hidden">
            <LogoCarousel partners={partners} speed={40} />
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/partners-showcase"
            className="inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-full transition-all duration-300"
          >
            View All Partners
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
    </section>
  )
}
