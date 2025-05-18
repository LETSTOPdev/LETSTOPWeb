"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"
import { useIsMobile } from "@/hooks/use-mobile"

export function PremiumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const isMobile = useIsMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let time = 0

    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)

      // Reinitialize particles when canvas is resized
      initParticles()
    }

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      hue: number
      originalX: number
      originalY: number
      angle: number
      radius: number
      angleSpeed: number
      glowing: boolean

      constructor() {
        this.originalX = Math.random() * window.innerWidth
        this.originalY = Math.random() * window.innerHeight
        this.x = this.originalX
        this.y = this.originalY
        this.size = Math.random() * (isMobile ? 1.5 : 2.5) + 1
        this.speedX = (Math.random() - 0.5) * 0.2
        this.speedY = (Math.random() - 0.5) * 0.2
        this.opacity = Math.random() * 0.5 + 0.3
        this.hue = 355 + Math.random() * 10 // Red to slightly pink
        this.glowing = Math.random() > 0.3

        // For circular motion
        this.angle = Math.random() * Math.PI * 2
        this.radius = Math.random() * 50 + 20
        this.angleSpeed = (Math.random() * 0.001 + 0.0005) * (Math.random() > 0.5 ? 1 : -1)
      }

      update() {
        // Elegant circular motion
        this.angle += this.angleSpeed
        this.x = this.originalX + Math.cos(this.angle) * this.radius
        this.y = this.originalY + Math.sin(this.angle) * this.radius

        // Subtle drift
        this.originalX += this.speedX
        this.originalY += this.speedY

        // Wrap around edges
        if (this.originalX < 0) this.originalX = window.innerWidth
        if (this.originalX > window.innerWidth) this.originalX = 0
        if (this.originalY < 0) this.originalY = window.innerHeight
        if (this.originalY > window.innerHeight) this.originalY = 0

        // Subtle breathing effect
        const breatheFactor = Math.sin(time * 0.001 + this.angle) * 0.2 + 1
        const currentSize = this.size * breatheFactor

        // Mouse interaction
        const dx = this.x - mouseX
        const dy = this.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          this.opacity = Math.min(0.8, this.opacity + 0.01)
          this.glowing = true
        } else if (this.opacity > 0.3) {
          this.opacity -= 0.005
        }
      }

      draw() {
        // Draw particle with glow
        if (this.glowing) {
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3)
          gradient.addColorStop(0, `hsla(${this.hue}, 100%, 50%, ${this.opacity})`)
          gradient.addColorStop(1, "rgba(255, 30, 50, 0)")

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw particle core
        ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = []
      const particleCount = isMobile ? 40 : 80

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    // Draw connections between particles
    const drawConnections = () => {
      const connectionDistance = isMobile ? 120 : 180

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            // Create gradient line
            const opacity = (1 - distance / connectionDistance) * 0.3
            ctx.strokeStyle = `rgba(255, 30, 50, ${opacity})`
            ctx.lineWidth = (1 - distance / connectionDistance) * (isMobile ? 0.5 : 1)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Draw elegant gradient background
    const drawBackground = () => {
      // Create subtle gradient background
      const gradient = ctx.createRadialGradient(
        window.innerWidth / 2,
        window.innerHeight / 2,
        0,
        window.innerWidth / 2,
        window.innerHeight / 2,
        window.innerWidth * 0.8,
      )

      gradient.addColorStop(0, "#050000")
      gradient.addColorStop(1, "#000000")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    }

    // Draw accent glows
    const drawAccentGlows = () => {
      // Create accent glows in corners
      const positions = [
        { x: window.innerWidth * 0.8, y: window.innerHeight * 0.2 },
        { x: window.innerWidth * 0.2, y: window.innerHeight * 0.8 },
        { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 },
      ]

      positions.forEach((pos, i) => {
        const radius = Math.min(window.innerWidth, window.innerHeight) * (i === 2 ? 0.4 : 0.3)
        const pulseIntensity = 0.05 + Math.sin(time * 0.0005 + i) * 0.02

        const glowGradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, radius)
        glowGradient.addColorStop(0, `rgba(255, 30, 50, ${pulseIntensity * 1.5})`)
        glowGradient.addColorStop(0.5, `rgba(255, 30, 50, ${pulseIntensity})`)
        glowGradient.addColorStop(1, "rgba(255, 30, 50, 0)")

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      time++

      // Draw layers
      drawBackground()
      drawAccentGlows()

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      drawConnections()

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    resizeCanvas()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark, isMobile])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" style={{ pointerEvents: "none" }} />
}
