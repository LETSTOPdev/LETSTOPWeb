"use client"

import { useEffect, useRef } from "react"

export default function WavePattern({
  className = "",
  color = "#ff132a",
  opacity = 0.2,
  speed = 0.05,
  interactive = true,
}: {
  className?: string
  color?: string
  opacity?: number
  speed?: number
  interactive?: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0
    let waves: { x: number; y: number; radius: number; opacity: number; speed: number }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      // Initialize waves
      waves = []
      const waveCount = Math.floor(canvas.width / 200) + 1
      for (let i = 0; i < waveCount; i++) {
        waves.push({
          x: (canvas.width / waveCount) * i,
          y: canvas.height / 2,
          radius: 50 + Math.random() * 50,
          opacity: 0.1 + Math.random() * 0.2,
          speed: 0.03 + Math.random() * 0.03,
        })
      }
    }

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw main wave
      ctx.fillStyle = color
      ctx.globalAlpha = opacity

      const amplitude = canvas.height / 4
      const frequency = 0.01

      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let x = 0; x < canvas.width; x++) {
        let y = Math.sin(x * frequency + time) * amplitude + canvas.height / 2

        // Add mouse interaction
        if (interactive && mouseRef.current.active) {
          const dx = x - mouseRef.current.x
          const distanceSquared = dx * dx
          const maxDistance = 10000
          if (distanceSquared < maxDistance) {
            const influence = 1 - distanceSquared / maxDistance
            y -= influence * 50 * Math.sin(time * 5)
          }
        }

        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fill()

      // Draw additional waves
      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.globalAlpha = wave.opacity

        const waveAmplitude = wave.radius
        const waveFrequency = 0.02

        ctx.moveTo(0, canvas.height)

        for (let x = 0; x < canvas.width; x++) {
          let y = Math.sin(x * waveFrequency + time * wave.speed) * waveAmplitude + canvas.height / 2

          // Add mouse interaction
          if (interactive && mouseRef.current.active) {
            const dx = x - mouseRef.current.x
            const distanceSquared = dx * dx
            const maxDistance = 15000
            if (distanceSquared < maxDistance) {
              const influence = 1 - distanceSquared / maxDistance
              y -= influence * 30 * Math.sin(time * 3)
            }
          }

          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fill()
      })

      time += speed
      animationFrameId = requestAnimationFrame(drawWave)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      mouseRef.current.active = true
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener("resize", resize)
    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("mouseleave", handleMouseLeave)
    }

    resize()
    drawWave()

    return () => {
      window.removeEventListener("resize", resize)
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("mouseleave", handleMouseLeave)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, opacity, speed, interactive])

  return (
    <canvas ref={canvasRef} className={`absolute left-0 right-0 w-full ${className}`} style={{ height: "150px" }} />
  )
}
