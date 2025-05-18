"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function NotFound() {
  const isMobile = useIsMobile()
  const [astronautPos, setAstronautPos] = useState({ x: 0, y: 0 })
  const [loaded, setLoaded] = useState(false)

  // Create stars across the entire page
  useEffect(() => {
    setLoaded(true)

    // Handle the floating astronaut animation
    const floatAnimation = () => {
      const maxOffset = isMobile ? 15 : 30

      // Create a gentle random movement
      const newX = Math.sin(Date.now() / 2000) * maxOffset
      const newY = Math.cos(Date.now() / 2500) * maxOffset

      setAstronautPos({ x: newX, y: newY })
      requestAnimationFrame(floatAnimation)
    }

    // Create stars
    const createStars = () => {
      const container = document.getElementById("stars-container")
      if (!container) return

      // Clear existing stars
      container.innerHTML = ""

      // More stars on desktop, fewer on mobile
      const starCount = isMobile ? 50 : 150

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div")
        star.classList.add("star")

        // Random position across entire viewport
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`

        // Random size
        const size = Math.random() * 2 + 1
        star.style.width = `${size}px`
        star.style.height = `${size}px`

        // Random opacity
        star.style.opacity = `${Math.random() * 0.7 + 0.3}`

        // Random twinkle animation
        star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite`

        container.appendChild(star)
      }
    }

    const animationId = requestAnimationFrame(floatAnimation)
    createStars()

    // Recreate stars on window resize
    window.addEventListener("resize", createStars)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", createStars)
    }
  }, [isMobile])

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Stars background covering the entire screen */}
      <div id="stars-container" className="fixed inset-0 pointer-events-none z-0"></div>

      {/* Red glow effect */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] opacity-70 z-0"></div>

      {/* Scene container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 mb-20">
        {/* Red Planet (fixed position) */}
        <div
          className="relative mb-12 w-full max-w-[220px] md:max-w-[280px] mx-auto animate-pulse-slow"
          style={{ animationDuration: "8s" }}
        >
          <Image
            src="/images/red-planet.png"
            alt="Red planet"
            width={600}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Astronaut (animated floating) */}
        <div
          className={`absolute transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{
            transform: `translate(${astronautPos.x}px, ${astronautPos.y - 80}px)`,
            transition: "transform 0.5s ease-out",
            width: isMobile ? "100px" : "130px",
            top: isMobile ? "15%" : "20%",
            left: "calc(50% - 65px)",
          }}
        >
          <Image
            src="/images/lost-astronaut.png"
            alt="Lost astronaut"
            width={300}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Text content */}
      <div className="text-center z-10 mt-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Sorry!</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">We could not find that page.</p>
        <Link
          href="/welcome-screen"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/20"
        >
          Go to Homepage
        </Link>
      </div>

      <style jsx global>{`
        .star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          pointer-events: none;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
