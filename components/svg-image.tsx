"use client"

import Image from "next/image"
import { useState } from "react"

interface SvgImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  fallbackSrc?: string
}

export function SvgImage({ src, alt, width, height, className, fallbackSrc }: SvgImageProps) {
  // Determine if the source is an SVG
  const isSvg = src.toLowerCase().endsWith(".svg")

  // Set fallback source - either the provided fallback or a PNG version of the SVG
  const fallback = fallbackSrc || (isSvg ? src.replace(".svg", ".png") : src)

  // State to track the current image source
  const [imgSrc, setImgSrc] = useState<string>(src)

  // State to track if the image has loaded successfully
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // Handle image load error
  const handleError = () => {
    if (imgSrc !== fallback) {
      console.log(`Image failed to load: ${imgSrc}, falling back to: ${fallback}`)
      setImgSrc(fallback)
    }
  }

  // Handle successful image load
  const handleLoad = () => {
    setIsLoaded(true)
  }

  // If the source is an SVG, also provide a link to the viewer HTML
  const viewerUrl = isSvg ? src.replace(".svg", "-viewer.html") : null

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        priority
        onError={handleError}
        onLoad={handleLoad}
      />

      {/* Show a link to the viewer HTML for SVGs */}
      {viewerUrl && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
          <a href={viewerUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">
            View {alt} in dedicated viewer
          </a>
        </div>
      )}
    </div>
  )
}
