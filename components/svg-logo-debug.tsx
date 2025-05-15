"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface SvgLogoDebugProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function SvgLogoDebug({ src, alt, width, height, className = "" }: SvgLogoDebugProps) {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if the file exists
    fetch(src)
      .then((response) => {
        if (response.ok) {
          setStatus("success")
        } else {
          console.error(`Failed to load SVG: ${src}`, response.status)
          setStatus("error")
        }
      })
      .catch((error) => {
        console.error(`Error fetching SVG: ${src}`, error)
        setStatus("error")
      })
  }, [src])

  if (!mounted) return null

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <div className="absolute top-0 right-0 z-10 text-xs px-2 py-1 rounded-full">
        {status === "loading" && <span className="text-yellow-500">⏳</span>}
        {status === "success" && <span className="text-green-500">✓</span>}
        {status === "error" && <span className="text-red-500">✗</span>}
      </div>

      {status === "error" ? (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-red-500 text-xs mb-1">Error loading SVG</div>
          <div className="text-gray-400 text-xs overflow-hidden text-ellipsis max-w-full">{src}</div>
          <Image
            src={src.replace(".svg", ".png") || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            style={{ objectFit: "contain" }}
            onError={() => console.error(`Failed to load fallback image: ${src.replace(".svg", ".png")}`)}
          />
        </div>
      ) : (
        <object
          data={src}
          type="image/svg+xml"
          width={width}
          height={height}
          className="w-full h-full"
          onError={() => setStatus("error")}
          aria-label={alt}
        >
          <Image
            src={src.replace(".svg", ".png") || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            style={{ objectFit: "contain" }}
          />
        </object>
      )}
    </div>
  )
}
