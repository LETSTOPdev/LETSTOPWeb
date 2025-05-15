"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { PartnerLogo } from "@/components/partner-logo"
import { PremiumBackground } from "@/components/premium-background"

export default function PartnersShowcasePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Partner logo data
  const partners = [
    { name: "Solana", logo: "/images/solana-sol-seeklogo.svg", width: 150, height: 80 },
    { name: "VeChain", logo: "/images/vechain-logo.svg", width: 150, height: 80 },
    { name: "Beitar Jerusalem", logo: "/images/beitar-logo.svg", width: 150, height: 80 },
    { name: "NVIDIA", logo: "/images/nvidia-logo.svg", width: 150, height: 80 },
    { name: "TEN", logo: "/images/ten-logo.png", width: 150, height: 80 },
    { name: "Airalo", logo: "/images/airalo-logo.png", width: 150, height: 80 },
    { name: "IBC Group", logo: "/images/ibc-group-logo.png", width: 150, height: 80 },
    { name: "Raydium", logo: "/images/raydium-logo.svg", width: 150, height: 80 },
    { name: "BingX", logo: "/images/bingx-logo.svg", width: 150, height: 80 },
    { name: "Bybit", logo: "/images/bybit-logo.svg", width: 150, height: 80 },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <PremiumBackground />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Radial gradient background */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-70"></div>

          {/* Glowing orbs */}
          <div className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-[30%] right-[20%] w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float-medium"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
              <span className="text-white">Our</span> <span className="text-primary">Partners</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Collaborating with industry leaders to create safer roads and innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="h-24 flex items-center justify-center mb-4">
                  <PartnerLogo
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={partner.width}
                    height={partner.height}
                    className="max-h-20"
                  />
                </div>
                <h3 className="text-lg font-medium text-white text-center">{partner.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="relative">
                Partnership Benefits
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our partnerships enable us to leverage cutting-edge technology and reach a global audience in our mission
              to make roads safer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-white">Technology Integration</h3>
                <p className="text-gray-300">
                  Leveraging cutting-edge technologies from our partners to enhance our road safety solutions and
                  provide the best experience for our users.
                </p>
              </div>
            </div>

            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-white">Global Reach</h3>
                <p className="text-gray-300">
                  Expanding our presence in over 180 countries through strategic partnerships with international
                  organizations and businesses.
                </p>
              </div>
            </div>

            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-white">Innovation</h3>
                <p className="text-gray-300">
                  Collaborating with industry leaders to drive innovation in road safety technology and blockchain
                  integration for our STOP token.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
