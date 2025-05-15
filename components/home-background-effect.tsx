"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"

export function HomeBackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Initialize particles array early
    const particles: Particle[] = []
    let isInitialized = false

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Only redraw if particles have been initialized
      if (isInitialized) {
        drawBackground()
        drawLightRays()
        drawParticles()
        drawConnections()
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle class with enhanced properties
    class Particle {
      x: number
      y: number
      size: number
      baseSize: number
      speedX: number
      speedY: number
      color: string
      pulseSpeed: number
      pulseDirection: boolean
      orbitRadius: number
      orbitSpeed: number
      orbitAngle: number
      centerX: number
      centerY: number
      isOrbiting: boolean

      constructor() {
        this.baseSize = Math.random() * 3 + 1
        this.size = this.baseSize
        this.pulseSpeed = Math.random() * 0.03 + 0.01
        this.pulseDirection = Math.random() > 0.5

        // Determine if this particle will orbit or move freely
        this.isOrbiting = Math.random() > 0.7

        if (this.isOrbiting) {
          // Orbiting particles
          this.centerX = canvas.width / 2 + (Math.random() - 0.5) * canvas.width * 0.5
          this.centerY = canvas.height / 2 + (Math.random() - 0.5) * canvas.height * 0.5
          this.orbitRadius = Math.random() * 150 + 50
          this.orbitSpeed = (Math.random() * 0.002 + 0.001) * (Math.random() > 0.5 ? 1 : -1)
          this.orbitAngle = Math.random() * Math.PI * 2
          this.x = this.centerX + Math.cos(this.orbitAngle) * this.orbitRadius
          this.y = this.centerY + Math.sin(this.orbitAngle) * this.orbitRadius
          // Orbiting particles have more vibrant colors
          this.color = `rgba(${200 + Math.random() * 55}, ${20 + Math.random() * 30}, ${20 + Math.random() * 30}, ${0.5 + Math.random() * 0.5})`
        } else {
          // Free-moving particles
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          this.speedX = Math.random() * 0.5 - 0.25
          this.speedY = Math.random() * 0.5 - 0.25
          this.color = `rgba(${150 + Math.random() * 50}, ${20 + Math.random() * 20}, ${20 + Math.random() * 20}, ${0.3 + Math.random() * 0.4})`
          // These properties exist but aren't used for free particles
          this.orbitRadius = 0
          this.orbitSpeed = 0
          this.orbitAngle = 0
          this.centerX = 0
          this.centerY = 0
        }
      }

      update() {
        if (this.isOrbiting) {
          // Update orbiting particles
          this.orbitAngle += this.orbitSpeed
          this.x = this.centerX + Math.cos(this.orbitAngle) * this.orbitRadius
          this.y = this.centerY + Math.sin(this.orbitAngle) * this.orbitRadius
        } else {
          // Update free-moving particles
          this.x += this.speedX
          this.y += this.speedY

          // Wrap around edges with a small buffer
          if (this.x < -50) this.x = canvas.width + 50
          if (this.x > canvas.width + 50) this.x = -50
          if (this.y < -50) this.y = canvas.height + 50
          if (this.y > canvas.height + 50) this.y = -50
        }

        // Pulse size effect
        if (this.pulseDirection) {
          this.size += this.pulseSpeed
          if (this.size >= this.baseSize * 1.5) {
            this.pulseDirection = false
          }
        } else {
          this.size -= this.pulseSpeed
          if (this.size <= this.baseSize * 0.7) {
            this.pulseDirection = true
          }
        }
      }

      draw() {
        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, "rgba(150, 20, 20, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw the core of the particle
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles - adjust count based on screen size
    const getParticleCount = () => {
      const area = window.innerWidth * window.innerHeight
      const baseCount = 80
      const maxCount = 150
      return Math.min(maxCount, Math.max(baseCount, Math.floor(area / 10000)))
    }

    // Initialize particles
    for (let i = 0; i < getParticleCount(); i++) {
      particles.push(new Particle())
    }

    // Mark as initialized after particles are created
    isInitialized = true

    // Draw connections between particles with enhanced visuals
    function drawConnections() {
      const maxDistance = 180

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Create gradient line for more depth
            const gradient = ctx.createLinearGradient(particles[a].x, particles[a].y, particles[b].x, particles[b].y)

            const opacity = 1 - distance / maxDistance
            gradient.addColorStop(0, `rgba(180, 30, 30, ${opacity * 0.3})`)
            gradient.addColorStop(0.5, `rgba(200, 40, 40, ${opacity * 0.4})`)
            gradient.addColorStop(1, `rgba(180, 30, 30, ${opacity * 0.3})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = Math.max(0.5, 1.5 * (1 - distance / maxDistance))
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Enhanced gradient background with depth
    function drawBackground() {
      // Create a rich, deep background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#140a0a")
      gradient.addColorStop(0.5, "#1a0d0d")
      gradient.addColorStop(1, "#140a0a")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add subtle noise texture for depth
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 1.5
        const opacity = Math.random() * 0.03

        ctx.fillStyle = `rgba(255, 30, 30, ${opacity})`
        ctx.fillRect(x, y, size, size)
      }

      // Add multiple radial gradients for a more dynamic look
      for (let i = 0; i < 3; i++) {
        const x = canvas.width * (0.3 + Math.random() * 0.4)
        const y = canvas.height * (0.3 + Math.random() * 0.4)
        const radius = canvas.width * (0.3 + Math.random() * 0.2)

        const radialGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        radialGradient.addColorStop(0, "rgba(100, 20, 20, 0.05)")
        radialGradient.addColorStop(0.5, "rgba(80, 15, 15, 0.03)")
        radialGradient.addColorStop(1, "rgba(20, 10, 10, 0)")

        ctx.fillStyle = radialGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }

    // New function to draw light rays emanating from center points
    function drawLightRays() {
      const centerPoints = [
        { x: canvas.width * 0.3, y: canvas.height * 0.4 },
        { x: canvas.width * 0.7, y: canvas.height * 0.6 },
        { x: canvas.width * 0.5, y: canvas.height * 0.2 },
      ]

      centerPoints.forEach((center) => {
        const rayCount = 12
        const rayLength = Math.min(canvas.width, canvas.height) * 0.4

        for (let i = 0; i < rayCount; i++) {
          const angle = ((Math.PI * 2) / rayCount) * i
          const endX = center.x + Math.cos(angle) * rayLength
          const endY = center.y + Math.sin(angle) * rayLength

          const gradient = ctx.createLinearGradient(center.x, center.y, endX, endY)
          gradient.addColorStop(0, "rgba(255, 30, 30, 0.15)")
          gradient.addColorStop(1, "rgba(255, 30, 30, 0)")

          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(center.x, center.y)
          ctx.lineTo(endX, endY)
          ctx.stroke()
        }

        // Add a glow at the center
        const glow = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, 50)
        glow.addColorStop(0, "rgba(255, 50, 50, 0.2)")
        glow.addColorStop(1, "rgba(255, 50, 50, 0)")

        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(center.x, center.y, 50, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Function to update and draw all particles
    function drawParticles() {
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })
    }

    // Animation loop with time-based updates
    let lastTime = 0
    function animate(timestamp: number) {
      const deltaTime = timestamp - lastTime
      lastTime = timestamp

      if (deltaTime < 100) {
        // Skip huge deltas (e.g., when tab is inactive)
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        drawBackground()
        drawLightRays()
        drawParticles()
        drawConnections()
      }

      requestAnimationFrame(animate)
    }

    animate(0)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme, isDark])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}
