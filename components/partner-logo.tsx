"use client"

import { SvgLogo } from "@/components/svg-logo"

interface PartnerLogoProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function PartnerLogo({ src, alt, width = 120, height = 60, className = "" }: PartnerLogoProps) {
  // Determine if the source is an SVG
  const isSvg = src.toLowerCase().endsWith(".svg")

  return (
    <div className={`partner-logo-container ${className}`}>
      <SvgLogo
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="transition-all duration-300 hover:scale-105"
      />
    </div>
  )
}
