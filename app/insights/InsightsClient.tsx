"use client"

import type React from "react"

import { useEffect, useRef, useState, Component, type ReactNode } from "react"
import { AlertTriangle, PhoneOff, Car, Globe, Download, Activity, Users } from "lucide-react"
import { PremiumBackground } from "@/components/premium-background"
import WorldMap from "@/components/world-map"

interface ErrorBoundaryProps {
  fallback: ReactNode
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Map error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

// Calculate base values based on the current date
function calculateBaseValuesForDate() {
  // Reference date (e.g., January 1, 2023)
  const referenceDate = new Date(2025, 4, 1).getTime()

  // Reference base values on that date
  const referenceDownloads = 1000000
  const referenceKilometers = 67000000

  // Daily increase rates
  const dailyDownloads = 4583
  const dailyKilometers = 21658

  // Current date
  const now = new Date()

  // Days since reference date
  const daysSinceReference = Math.floor((now.getTime() - referenceDate) / (10000 * 60 * 60 * 24))

  // Calculate current base values
  const currentDownloads = referenceDownloads + daysSinceReference * dailyDownloads
  const currentKilometers = referenceKilometers + daysSinceReference * dailyKilometers

  return {
    downloads: currentDownloads,
    kilometers: currentKilometers,
  }
}

export default function InsightsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  // Get base values based on current date
  const baseValues = calculateBaseValuesForDate()

  // Set the stats directly without animation
  const [animatedStats, setAnimatedStats] = useState({
    downloads: baseValues.downloads,
    kilometers: baseValues.kilometers,
    countries: 180,
    deaths: 1.35,
    phoneUsers: 40,
    fatalities: 9,
    risk: 6,
  })

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const lastUpdateTimeRef = useRef(Date.now())
  const [isLoading, setIsLoading] = useState(false) // Set to false to skip loading state

  // Animation for counting up statistics - initial visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Set up counter updates for downloads and kilometers only
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set up interval for counter updates
    intervalRef.current = setInterval(() => {
      const now = Date.now()
      const elapsedSeconds = (now - lastUpdateTimeRef.current) / 1000
      lastUpdateTimeRef.current = now

      // Only update if enough time has passed to avoid too frequent renders
      if (elapsedSeconds < 0.5) return

      // Calculate increments based on daily rates
      // 4,583 downloads per day = ~0.053 per second
      const downloadIncrement = Math.floor(elapsedSeconds * 0.053)

      // 21,658 km per day = ~0.25 km per second
      const kilometerIncrement = Math.floor(elapsedSeconds * 0.25)

      // Only update state if there are actual increments
      if (downloadIncrement > 0 || kilometerIncrement > 0) {
        setAnimatedStats((prev) => ({
          ...prev,
          downloads: prev.downloads + downloadIncrement,
          kilometers: prev.kilometers + kilometerIncrement,
        }))
      }
    }, 2000) // Update every 2 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <PremiumBackground />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          {/* Radial gradient background */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-70"></div>

          {/* Glowing orbs */}
          <div className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-[30%] right-[20%] w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float-medium"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
              <span className="text-white">Road Safety</span> <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover the impact of distracted driving and how LETSTOP is working to create safer roads worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Key Statistics Section */}
      <section ref={statsRef} className="pt-10 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="relative">
                Our Key Statistics
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Downloads Stat */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                {isLoading ? (
                  <div className="h-12 bg-gray-800/50 rounded animate-pulse mb-2"></div>
                ) : (
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white whitespace-normal break-words">
                    {formatNumber(animatedStats.downloads)}
                  </h3>
                )}
                <p className="text-gray-300 text-xl">Total Downloads</p>
                <div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? "100%" : "0%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Kilometers Driven Stat */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                {isLoading ? (
                  <div className="h-12 bg-gray-800/50 rounded animate-pulse mb-2"></div>
                ) : (
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white whitespace-normal break-words">
                    {formatNumber(animatedStats.kilometers)}
                  </h3>
                )}
                <p className="text-gray-300 text-xl">Total Kilometers Driven</p>
                <div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? "100%" : "0%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Active Countries Stat */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                {isLoading ? (
                  <div className="h-12 bg-gray-800/50 rounded animate-pulse mb-2"></div>
                ) : (
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white whitespace-normal break-words">
                    {animatedStats.countries}+
                  </h3>
                )}
                <p className="text-gray-300 text-xl">Active Countries</p>
                <div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? "100%" : "0%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Map Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="relative">
                Our Global Presence
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              LETSTOP is making roads safer in over 180 countries worldwide. Explore our global impact and see where our
              technology is helping drivers stay focused.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
            <div className="relative w-full">
              {/* Add error handling wrapper */}
              <ErrorBoundary
                fallback={
                  <div className="flex items-center justify-center h-[480px] bg-black/80">
                    <div className="text-center p-8">
                      <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Map Visualization Unavailable</h3>
                      <p className="text-gray-400 max-w-md">
                        We're experiencing issues loading the global map data. Our team is working to resolve this
                        issue.
                      </p>
                    </div>
                  </div>
                }
              >
                <WorldMap />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </section>

      {/* Road Safety Insights Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="relative">
                The State of Road Safety
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Global Deaths Stat */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-6 group-hover:bg-primary/30 transition-all duration-300 flex-shrink-0">
                    <AlertTriangle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    {isLoading ? (
                      <div className="h-10 bg-gray-800/50 rounded animate-pulse mb-2 w-24"></div>
                    ) : (
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white whitespace-normal break-words">
                        {animatedStats.deaths}M
                      </h3>
                    )}
                    <p className="text-gray-300 text-xl">Global road accident deaths/year</p>
                  </div>
                </div>
                <div className="mt-6 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? "100%" : "0%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Phone Usage Stat */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-6 group-hover:bg-primary/30 transition-all duration-300 flex-shrink-0">
                    <PhoneOff className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    {isLoading ? (
                      <div className="h-10 bg-gray-800/50 rounded animate-pulse mb-2 w-24"></div>
                    ) : (
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white whitespace-normal break-words">
                        {animatedStats.phoneUsers}%
                      </h3>
                    )}
                    <p className="text-gray-300 text-xl">Of drivers admit they use phones</p>
                  </div>
                </div>
                <div className="mt-6 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${animatedStats.phoneUsers}%` : "0%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Texting Fatalities Stat */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-6 group-hover:bg-primary/30 transition-all duration-300 flex-shrink-0">
                    <Activity className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    {isLoading ? (
                      <div className="h-10 bg-gray-800/50 rounded animate-pulse mb-2 w-24"></div>
                    ) : (
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white whitespace-normal break-words">
                        {animatedStats.fatalities}%
                      </h3>
                    )}
                    <p className="text-gray-300 text-xl">Of all road fatalities are from texting and driving</p>
                  </div>
                </div>
                <div className="mt-6 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${animatedStats.fatalities}%` : "0%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Risk Comparison Stat */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-6 group-hover:bg-primary/30 transition-all duration-300 flex-shrink-0">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    {isLoading ? (
                      <div className="h-10 bg-gray-800/50 rounded animate-pulse mb-2 w-24"></div>
                    ) : (
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white whitespace-normal break-words">
                        {animatedStats.risk}x
                      </h3>
                    )}
                    <p className="text-gray-300 text-xl">Risk compared to driving under the influence</p>
                  </div>
                </div>
                <div className="mt-6 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${animatedStats.risk * 16.6}%` : "0%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[150px] opacity-70 animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[150px] opacity-70 animate-float-medium"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 relative">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                With these concerning numbers, LETSTOP uses tech and campaigns to fight phone distractions and make
                roads safer for all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
