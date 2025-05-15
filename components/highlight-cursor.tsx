"use client"

import { useEffect, useState } from "react"

export default function HighlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handleMouseLeave = () => {
      setVisible(false)
    }

    window.addEventListener("mousemove", updatePosition)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "30px",
          height: "30px",
          backgroundColor: "#ff132a",
          transform: "translate(-50%, -50%)",
          opacity: 0.5,
          transition: "transform 0.1s ease-out, opacity 0.2s ease-out",
        }}
      />
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "10px",
          height: "10px",
          backgroundColor: "#ffffff",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.05s ease-out",
        }}
      />
    </>
  )
}
