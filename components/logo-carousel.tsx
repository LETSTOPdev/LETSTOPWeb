"use client"

import { useEffect, useState } from "react"
import { PartnerLogo } from "@/components/partner-logo"

interface LogoCarouselProps {
  partners: {
    name: string
    logo: string
    width: number
    height: number
  }[]
  speed?: number // Speed in seconds for one complete cycle
}

export function LogoCarousel({ partners, speed = 30 }: LogoCarouselProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Duplicate the partners array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="inline-flex animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex flex-col items-center justify-center mx-4 md:mx-8 flex-shrink-0"
            style={{ width: "150px" }}
          >
            <div className="h-16 flex items-center justify-center mb-2">
              <PartnerLogo
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="max-h-12 max-w-full"
              />
            </div>
            <h3 className="text-xs md:text-sm font-medium text-white text-center">{partner.name}</h3>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${partners.length * 166}px);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  )
}
