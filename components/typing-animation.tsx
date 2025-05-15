"use client"

import { useState, useEffect, useCallback } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useTheme } from "@/components/theme-provider"

export default function TypingAnimation() {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const isMobile = useIsMobile()
  const { theme } = useTheme()

  // Adjust typing speed for mobile
  const baseSpeed = isMobile ? 100 : 150
  const deleteSpeed = isMobile ? 75 : 100
  const pauseBeforeDelete = isMobile ? 1500 : 2000
  const pauseBeforeType = 500

  const words = ["Drive.", "Earn.", "Repeat."]

  const tick = useCallback(() => {
    const i = loopNum % words.length
    const fullText = words[i]

    if (isDeleting) {
      // Deleting text
      setDisplayText(fullText.substring(0, displayText.length - 1))
      setTypingSpeed(deleteSpeed)
    } else {
      // Typing text
      setDisplayText(fullText.substring(0, displayText.length + 1))
      setTypingSpeed(baseSpeed)
    }

    // Handle transitions between typing and deleting
    if (!isDeleting && displayText === fullText) {
      // Finished typing, pause before deleting
      setTypingSpeed(pauseBeforeDelete)
      setIsDeleting(true)
    } else if (isDeleting && displayText === "") {
      // Finished deleting, move to next word
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(pauseBeforeType)
    }
  }, [displayText, isDeleting, loopNum, words, baseSpeed, deleteSpeed, pauseBeforeDelete, pauseBeforeType])

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick()
    }, typingSpeed)

    return () => clearTimeout(ticker)
  }, [displayText, isDeleting, loopNum, typingSpeed, tick])

  return (
    <span className="text-white inline-block min-w-[100px] md:min-w-[140px]">
      {displayText}
      <span className="text-white animate-blink">|</span>
    </span>
  )
}
