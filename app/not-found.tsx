"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { ChevronRight } from "lucide-react"

export default function NotFound() {
  const isMobile = useIsMobile()
  const [astronautPos, setAstronautPos] = useState({ x: 0, y: 0 })
  const [loaded, setLoaded] = useState(false)
  const starsCanvasRef = useRef<HTMLCanvasElement>(null)

  // Handle animations and stars
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

    const animationId = requestAnimationFrame(floatAnimation)

    // Create stars with canvas (more efficient than DOM elements)
    const canvas = starsCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const starCount = isMobile ? 100 : 200
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.7 + 0.3,
      direction: Math.random() * Math.PI * 2,
    }))

    // Animate stars
    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Move star
        star.x += Math.cos(star.direction) * star.speed
        star.y += Math.sin(star.direction) * star.speed

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animateStars)
    }

    const starsAnimationId = requestAnimationFrame(animateStars)

    return () => {
      cancelAnimationFrame(animationId)
      cancelAnimationFrame(starsAnimationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isMobile])

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Stars background using canvas (more efficient) */}
      <canvas ref={starsCanvasRef} className="fixed inset-0 pointer-events-none z-0" />

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
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center group mx-auto w-fit"
        >
          <span>Go to Homepage</span>
          <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
