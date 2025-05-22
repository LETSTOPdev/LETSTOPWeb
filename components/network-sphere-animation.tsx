"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"
import { useTheme } from "@/components/theme-provider"

export default function NetworkSphereAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sphereRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Defer initialization of heavy animations until after the page has loaded
  const [isClientReady, setIsClientReady] = useState(false)

  useEffect(() => {
    // Use requestIdleCallback or setTimeout to defer non-critical initialization
    const readyTimer = setTimeout(() => {
      setIsClientReady(true)
    }, 100) // Short delay to prioritize visible content first

    return () => clearTimeout(readyTimer)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!isClientReady || !container || !sphereRef.current) return

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
      rotationX = distanceY * 10 // Max 10 degrees
      rotationY = -distanceX * 10 // Max 10 degrees

      if (sphereRef.current) {
        sphereRef.current.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return

      const touch = e.touches[0]
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from center (normalized to -1 to 1)
      const distanceX = (touch.clientX - centerX) / (rect.width / 2)
      const distanceY = (touch.clientY - centerY) / (rect.height / 2)

      // Set rotation based on touch position
      rotationX = distanceY * 10 // Max 10 degrees
      rotationY = -distanceX * 10 // Max 10 degrees

      if (sphereRef.current) {
        sphereRef.current.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
      }
    }

    const handleMouseLeave = () => {
      // Animate back to center when mouse leaves
      const animate = () => {
        rotationX *= 0.9
        rotationY *= 0.9

        if (sphereRef.current) {
          sphereRef.current.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
        }

        if (Math.abs(rotationX) > 0.1 || Math.abs(rotationY) > 0.1) {
          animationFrameId = requestAnimationFrame(animate)
        } else {
          if (sphereRef.current) {
            sphereRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
          }
        }
      }

      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleTouchEnd = () => {
      handleMouseLeave() // Reuse the same animation for touch end
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)
    container.addEventListener("touchmove", handleTouchMove)
    container.addEventListener("touchend", handleTouchEnd)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("touchmove", handleTouchMove)
      container.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isClientReady])

  // Adjust sizes based on mobile or desktop
  const containerHeight = isMobile ? "h-[400px]" : "h-[800px]"
  const sphereSize = isMobile ? "max-w-[300px]" : "max-w-[900px]"
  const glowSize = isMobile ? "w-[350px] h-[350px]" : "w-[900px] h-[900px]"
  const ringSize1 = isMobile ? "w-[320px] h-[320px]" : "w-[1000px] h-[1000px]"
  const ringSize2 = isMobile ? "w-[350px] h-[350px]" : "w-[1100px] h-[1100px]"
  const ringSize3 = isMobile ? "w-[380px] h-[380px]" : "w-[1200px] h-[1200px]"

  // Reduce number of floating elements on mobile
  const showAllFloatingElements = !isMobile

  // Adjust opacity based on theme
  const glowOpacity = isDark ? "bg-primary/10" : "bg-primary/5"
  const ringOpacity1 = isDark ? "border-primary/10" : "border-primary/5"
  const ringOpacity2 = isDark ? "border-primary/5" : "border-primary/3"
  const ringOpacity3 = isDark ? "border-primary/3" : "border-primary/2"

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-6xl mx-auto ${containerHeight} flex items-center justify-center overflow-hidden cursor-pointer`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`${glowSize} rounded-full ${glowOpacity} blur-3xl`}></div>
      </div>
      <div
        ref={sphereRef}
        className="relative z-10 transition-transform duration-200 animate-pulse-slow"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src="/images/network-sphere.webp"
          alt="Network Sphere"
          width={1000}
          height={1000}
          className={`w-full ${sphereSize} h-auto object-contain animate-grow-shrink`}
          priority
        />
      </div>

      {/* Enhanced floating elements around the sphere - reduced on mobile */}
      <div className="absolute top-1/4 left-1/4 w-3 md:w-8 h-3 md:h-8 rounded-full bg-primary/30 blur-md animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-4 md:w-10 h-4 md:h-10 rounded-full bg-primary/20 blur-md animate-float-medium"></div>

      {/* Only show these on desktop */}
      {showAllFloatingElements && (
        <>
          <div className="absolute top-2/3 left-1/3 w-6 h-6 rounded-full bg-primary/40 blur-md animate-float-fast"></div>
          <div className="absolute top-1/3 right-1/3 w-7 h-7 rounded-full bg-primary/25 blur-md animate-float-slow"></div>
        </>
      )}

      {/* Glowing lines radiating from the sphere - simplified on mobile */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`${ringSize1} rounded-full border ${ringOpacity1} animate-pulse-slow`}></div>

        {/* Only show these on desktop */}
        {showAllFloatingElements && (
          <>
            <div
              className={`absolute ${ringSize2} rounded-full border ${ringOpacity2} animate-pulse-slow`}
              style={{ animationDelay: "-1s" }}
            ></div>
            <div
              className={`absolute ${ringSize3} rounded-full border ${ringOpacity3} animate-pulse-slow`}
              style={{ animationDelay: "-2s" }}
            ></div>
          </>
        )}
      </div>

      {/* Floating lines - simplified on mobile */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      {showAllFloatingElements && (
        <>
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
        </>
      )}
    </div>
  )
}
