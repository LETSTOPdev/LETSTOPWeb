"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type ThemeProviderProps = {
  children: React.ReactNode
  storageKey?: string
  defaultTheme?: "dark" | "light"
}

type ThemeProviderState = {
  theme: "dark"
}

const initialState: ThemeProviderState = {
  theme: "dark",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  storageKey = "letstop-theme",
  defaultTheme = "dark",
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Always set dark mode
    const root = window.document.documentElement
    root.classList.remove("light")
    root.classList.add("dark")
    localStorage.setItem(storageKey, "dark")
  }, [storageKey])

  // Prevent flash of incorrect theme
  if (!mounted) {
    return <>{children}</>
  }

  const value = {
    theme: "dark",
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
