"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Create stars across the entire page
    const createStars = () => {
      const container = document.getElementById("stars-container")
      if (!container) return

      // Clear existing stars
      container.innerHTML = ""

      // Create stars based on screen size
      const starCount = Math.min((window.innerWidth * window.innerHeight) / 1000, 200)

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

    createStars()
    window.addEventListener("resize", createStars)

    return () => {
      window.removeEventListener("resize", createStars)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Stars background covering the entire page */}
      <div id="stars-container" className="fixed inset-0 overflow-hidden pointer-events-none z-0"></div>

      {/* Red glow effect */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] opacity-70 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-4">
        {/* Single astronaut image that floats */}
        <div className="w-full max-w-[280px] mx-auto mb-12 animate-float-slow">
          <Image
            src="/images/404-astronaut.png"
            alt="Lost astronaut in space"
            width={600}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Sorry!</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center">We could not find that page.</p>

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
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  )
}
