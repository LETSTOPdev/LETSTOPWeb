"use client"

import { useEffect, useRef } from "react"

export default function RedWavePattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0
    let mouseX = 0
    let mouseY = 0
    let isMouseActive = false

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw multiple wave lines
      const waveCount = 20

      // Distribute waves across the entire canvas height
      for (let i = 0; i < waveCount; i++) {
        const yPosition = (canvas.height / (waveCount - 1)) * i

        ctx.beginPath()
        ctx.moveTo(0, yPosition)

        for (let x = 0; x < canvas.width; x += 5) {
          const frequency = 0.003
          const amplitude = 15 + i * 1.5
          const speed = 0.3 + i * 0.05

          // Base wave
          let y = Math.sin(x * frequency + time * speed) * amplitude + yPosition

          // Add mouse interaction
          if (isMouseActive) {
            const dx = x - mouseX
            const dy = yPosition - mouseY
            const distance = Math.sqrt(dx * dx + dy * dy)
            const maxDistance = 200

            if (distance < maxDistance) {
              const influence = 1 - distance / maxDistance
              y -= influence * 30 * Math.sin(time * 3)
            }
          }

          ctx.lineTo(x, y)
        }

        // Adjust opacity based on position - more visible at bottom
        const opacity = 0.05 + (i / waveCount) * 0.25
        ctx.strokeStyle = `rgba(255, 19, 42, ${opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      time += 0.01
      animationFrameId = requestAnimationFrame(drawWaves)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      isMouseActive = true
    }

    const handleMouseLeave = () => {
      isMouseActive = false
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    resize()
    drawWaves()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: "none", opacity: 0.8 }}
    />
  )
}
