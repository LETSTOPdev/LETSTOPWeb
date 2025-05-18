"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function NotFound() {
  const isMobile = useIsMobile()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [loaded, setLoaded] = useState(false)

  // Handle smooth floating animation
  useEffect(() => {
    setLoaded(true)

    const floatAnimation = () => {
      const maxOffset = isMobile ? 15 : 30

      // Create a gentle random movement
      const newX = Math.sin(Date.now() / 2000) * maxOffset
      const newY = Math.cos(Date.now() / 2500) * maxOffset

      setPosition({ x: newX, y: newY })
      requestAnimationFrame(floatAnimation)
    }

    const animationId = requestAnimationFrame(floatAnimation)

    return () => cancelAnimationFrame(animationId)
  }, [isMobile])

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="relative w-full max-w-md h-[60vh] flex items-center justify-center mb-8">
        {/* Planet (static) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] max-w-[280px]">
          <Image
            src="/images/404-astronaut.png"
            alt="Red planet"
            width={600}
            height={600}
            className="w-full h-auto opacity-90"
            priority
          />
        </div>

        {/* Astronaut (animated) */}
        <div
          className={`absolute transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{
            transform: `translate(${position.x}px, ${position.y - 140}px)`,
            transition: "transform 0.5s ease-out",
            width: isMobile ? "120px" : "150px",
            top: "40%",
            left: "calc(50% - 75px)",
          }}
        >
          <Image
            src="/images/404-astronaut.png"
            alt="Lost astronaut"
            width={300}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center z-10 mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Sorry!</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">We could not find that page.</p>
        <Link
          href="/welcome-screen"
          className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-medium py-3 px-8 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
        >
          Go to Homepage
        </Link>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
