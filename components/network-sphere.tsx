"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function NetworkSphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !imageRef.current) return

    let rotationX = 0
    let rotationY = 0
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from center (normalized to -1 to 1)
      const distanceX = (e.clientX - centerX) / (rect.width / 2)
      const distanceY = (e.clientY - centerY) / (rect.height / 2)

      // Set rotation based on mouse position
      rotationX = distanceY * 15 // Max 15 degrees
      rotationY = -distanceX * 15 // Max 15 degrees

      if (imageRef.current) {
        imageRef.current.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1.05)`
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      // Animate back to center when mouse leaves
      const animate = () => {
        rotationX *= 0.9
        rotationY *= 0.9

        if (imageRef.current) {
          imageRef.current.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1)`
        }

        if (Math.abs(rotationX) > 0.1 || Math.abs(rotationY) > 0.1) {
          animationFrameId = requestAnimationFrame(animate)
        } else {
          if (imageRef.current) {
            imageRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
          }
        }
      }

      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)
    container.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("mouseenter", handleMouseEnter)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md mx-auto h-[400px] flex items-center justify-center overflow-hidden cursor-pointer"
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isHovering ? "opacity-70" : "opacity-40"}`}
      >
        <div className="w-64 h-64 rounded-full bg-primary blur-xl"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-72 h-72 rounded-full border border-primary opacity-30 transition-all duration-700 ${isHovering ? "scale-110" : "scale-100"}`}
        ></div>
      </div>
      <Image
        ref={imageRef as any}
        src="/images/network-sphere.png"
        alt="Interactive Network Sphere"
        width={400}
        height={400}
        className={`w-full max-w-[320px] h-auto object-contain z-10 relative ${
          isHovering ? "" : "grow-shrink-animation"
        }`}
        style={{
          transformStyle: "preserve-3d",
          animationPlayState: isHovering ? "paused" : "running",
        }}
        priority
      />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary transition-all duration-700 ${isHovering ? "opacity-100 blur-sm" : "opacity-0"}`}
        ></div>
        <div
          className={`absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-primary transition-all duration-700 ${isHovering ? "opacity-100 blur-sm" : "opacity-0"}`}
        ></div>
        <div
          className={`absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-primary transition-all duration-700 ${isHovering ? "opacity-100 blur-sm" : "opacity-0"}`}
        ></div>
      </div>
    </div>
  )
}
