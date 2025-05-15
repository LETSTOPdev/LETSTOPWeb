"use client"

import { useState } from "react"
import Image from "next/image"

interface SvgLogoProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function SvgLogo({ src, alt, width, height, className = "" }: SvgLogoProps) {
  const [error, setError] = useState(false)
  const isSvg = src.toLowerCase().endsWith(".svg")

  // If the source isn't an SVG or we've encountered an error, use a PNG fallback
  const fallbackSrc = isSvg ? src.replace(".svg", ".png") : src

  if (!isSvg) {
    // For non-SVG images, use regular Image component
    return (
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{ objectFit: "contain" }}
      />
    )
  }

  // For SVGs, use object tag for perfect scaling
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {error ? (
        // Fallback to Image component if SVG fails to load
        <Image
          src={fallbackSrc || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          style={{ objectFit: "contain" }}
          onError={() => console.error(`Failed to load image: ${fallbackSrc}`)}
        />
      ) : (
        // Use object tag for SVGs to maintain perfect scaling
        <object
          data={src}
          type="image/svg+xml"
          width={width}
          height={height}
          className="w-full h-full"
          onError={() => {
            console.error(`Failed to load SVG: ${src}`)
            setError(true)
          }}
          aria-label={alt}
        >
          {/* Fallback content if object fails */}
          <Image
            src={fallbackSrc || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            style={{ objectFit: "contain" }}
            onError={() => console.error(`Failed to load fallback image: ${fallbackSrc}`)}
          />
        </object>
      )}
    </div>
  )
}
