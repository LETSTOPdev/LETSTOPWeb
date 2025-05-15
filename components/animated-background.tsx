"use client"

import { useEffect, useRef } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useTheme } from "@/components/theme-provider"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useIsMobile()
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      connections: number[]
      opacity: number
      pulseDirection: boolean
      pulseSpeed: number
    }[] = []

    // Reduce particle count and effects on mobile for better performance
    const particleCount = isMobile ? 80 : 200
    const connectionDistance = isMobile ? 120 : 200
    const particleRadius = isMobile ? 1.5 : 2.5
    const lineWidth = isMobile ? 0.3 : 0.6
    const noiseCount = isMobile ? 300 : 1000
    const glowSpots = isMobile ? 2 : 5

    // Resize canvas to fill window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Initialize particles
    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        // Adjust color based on theme
        const particleColor = isDark
          ? `rgba(255, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}, ${Math.random() * 0.5 + 0.3})`
          : `rgba(255, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}, ${Math.random() * 0.3 + 0.1})`

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * particleRadius + 0.5,
          color: particleColor,
          speedX: (Math.random() - 0.5) * 0.3, // Reduced speed for mobile
          speedY: (Math.random() - 0.5) * 0.3, // Reduced speed for mobile
          connections: [],
          opacity: Math.random() * 0.5 + 0.3,
          pulseDirection: Math.random() > 0.5,
          pulseSpeed: Math.random() * 0.01 + 0.005,
        })
      }
    }

    // Update the draw function to add more impressive effects
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Add a subtle red glow in the center - adjust opacity based on theme
      const glowOpacity = isDark ? 0.1 : 0.05
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
      )
      gradient.addColorStop(0, `rgba(255, 30, 30, ${glowOpacity})`)
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add multiple secondary glow spots - reduced for mobile
      for (let i = 0; i < glowSpots; i++) {
        const x = canvas.width * (0.2 + Math.random() * 0.6)
        const y = canvas.height * (0.2 + Math.random() * 0.6)
        const radius = 150 + Math.random() * 200
        const spotOpacity = isDark ? 0.05 : 0.03

        const spotGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        spotGradient.addColorStop(0, `rgba(255, 30, 30, ${spotOpacity})`)
        spotGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = spotGradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add subtle noise texture - reduced for mobile
      for (let i = 0; i < noiseCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 1
        const noiseOpacity = isDark ? Math.random() * 0.02 : Math.random() * 0.01

        ctx.fillStyle = `rgba(255, 30, 30, ${noiseOpacity})`
        ctx.fillRect(x, y, size, size)
      }

      // Update particle positions
      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Pulse opacity
        if (particle.pulseDirection) {
          particle.opacity += particle.pulseSpeed
          if (particle.opacity >= (isDark ? 0.8 : 0.5)) {
            particle.pulseDirection = false
          }
        } else {
          particle.opacity -= particle.pulseSpeed
          if (particle.opacity <= (isDark ? 0.3 : 0.1)) {
            particle.pulseDirection = true
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)

        // Adjust color based on theme
        const particleOpacity = isDark ? particle.opacity : particle.opacity * 0.7
        ctx.fillStyle = `rgba(255, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}, ${particleOpacity})`
        ctx.fill()

        // Reset connections
        particle.connections = []

        // Find connections - limit connections on mobile for performance
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectionDistance) {
              particle.connections.push(otherIndex)

              // Draw connection
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              const opacity = (1 - distance / connectionDistance) * (isDark ? 0.5 : 0.3)
              ctx.strokeStyle = `rgba(255, 30, 30, ${opacity})`
              ctx.lineWidth = lineWidth
              ctx.stroke()
            }
          }
        })
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile, theme, isDark])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}
