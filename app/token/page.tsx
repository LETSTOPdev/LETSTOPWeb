"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Chart, registerables } from "chart.js"

// Register Chart.js components
Chart.register(...registerables)

export default function TokenPage() {
  const tokenDistributionChartRef = useRef<HTMLCanvasElement>(null)
  const tokenReleaseChartRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)
  const splineContainerRef = useRef<HTMLDivElement>(null)

  const [chartInstances, setChartInstances] = useState<{
    distribution?: Chart
    release?: Chart
  }>({})

  useEffect(() => {
    setIsClient(true)

    // Clean up function to destroy charts
    return () => {
      if (chartInstances.distribution) {
        chartInstances.distribution.destroy()
      }
      if (chartInstances.release) {
        chartInstances.release.destroy()
      }
    }
  }, [chartInstances])

  // Initialize Spline
  useEffect(() => {
    if (!isClient) return

    // Load Spline viewer
    const script = document.createElement("script")
    script.src = "https://unpkg.com/@splinetool/viewer@0.9.490/build/spline-viewer.js"
    script.type = "module"
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [isClient])

  // Initialize charts when component is mounted on client
  useEffect(() => {
    if (!isClient) return

    // Destroy existing charts before creating new ones
    if (chartInstances.distribution) {
      chartInstances.distribution.destroy()
    }
    if (chartInstances.release) {
      chartInstances.release.destroy()
    }

    const newChartInstances = { ...chartInstances }

    // Initialize token distribution chart
    if (tokenDistributionChartRef.current) {
      const ctx = tokenDistributionChartRef.current.getContext("2d")
      if (ctx) {
        const pieData = {
          labels: ["Rewards", "Pre Seed", "Development", "Presale", "Team", "Listing", "Marketing", "Early Incentives"],
          datasets: [
            {
              label: "Token Distribution",
              data: [42, 15, 10, 10, 10, 7, 4, 2], // Numeric values for calculations
              backgroundColor: [
                "#B40C1A", // Rewards
                "#BA0716", // Pre Seed
                "#C5281A", // Development
                "#D0491D", // Presale
                "#DB6A20", // Team
                "#E17B22", // Listing
                "#E49030", // Marketing
                "#E68B23", // Early Incentives
              ],
              hoverOffset: 4,
              borderWidth: 0.5,
            },
          ],
        }

        const pieConfig = {
          type: "pie" as const,
          data: pieData,
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: false,
                text: "Token Distribution",
              },
              tooltip: {
                callbacks: {
                  label: (context: any) => {
                    const label = context.label || ""
                    const value = context.parsed
                    return label + ": " + value + "%"
                  },
                },
              },
            },
          },
        }

        newChartInstances.distribution = new Chart(ctx, pieConfig)
      }
    }

    // Initialize token release chart
    if (tokenReleaseChartRef.current) {
      const ctx = tokenReleaseChartRef.current.getContext("2d")
      if (ctx) {
        const colors = {
          1: { fill: "#8B0A14", stroke: "#B40C1A" },
          2: { fill: "#910613", stroke: "#BA0716" },
          3: { fill: "#9D1E15", stroke: "#C5281A" },
          4: { fill: "#A63A17", stroke: "#D0491D" },
          5: { fill: "#B2551A", stroke: "#DB6A20" },
          6: { fill: "#B8621B", stroke: "#E17B22" },
          7: { fill: "#B57225", stroke: "#E49030" },
          8: { fill: "#B56E1C", stroke: "#E68B23" },
        }

        const rewards = [5.25, 8.75, 25.38, 33.69, 37.84, 39.92, 40.96]
        const development = [0.6, 1.0, 3.4, 6.0, 8.4, 10.0, 10.0]
        const team = [0.0, 0.2, 2.4, 5.0, 7.4, 9.8, 10.0]
        const preSeed = [1.2, 4.8, 15.0, 15.0, 15.0, 15.0, 15.0]
        const presale = [7.0, 8.5, 10.0, 10.0, 10.0, 10.0, 10.0]
        const listing = [7.0, 7.0, 7.0, 7.0, 7.0, 7.0, 7.0]
        const marketing = [1.6, 1.9, 4.0, 4.0, 4.0, 4.0, 4.0]
        const earlyIncentives = [2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0]

        const xData = [2024, 2025, 2026, 2027, 2028, 2029, 2030]

        const lineConfig = {
          type: "line" as const,
          data: {
            labels: xData,
            datasets: [
              {
                label: "Rewards",
                fill: true,
                backgroundColor: colors[1 as keyof typeof colors].stroke,
                borderColor: colors[1 as keyof typeof colors].fill,
                data: rewards,
              },
              {
                label: "Pre Seed",
                fill: true,
                backgroundColor: colors[2 as keyof typeof colors].stroke,
                borderColor: colors[2 as keyof typeof colors].fill,
                data: preSeed,
              },
              {
                label: "Development",
                fill: true,
                backgroundColor: colors[3 as keyof typeof colors].stroke,
                borderColor: colors[3 as keyof typeof colors].fill,
                data: development,
              },
              {
                label: "Team",
                fill: true,
                backgroundColor: colors[4 as keyof typeof colors].stroke,
                borderColor: colors[4 as keyof typeof colors].fill,
                data: team,
              },
              {
                label: "Presale",
                fill: true,
                backgroundColor: colors[5 as keyof typeof colors].stroke,
                borderColor: colors[5 as keyof typeof colors].fill,
                data: presale,
              },
              {
                label: "Listing",
                fill: true,
                backgroundColor: colors[6 as keyof typeof colors].stroke,
                borderColor: colors[6 as keyof typeof colors].fill,
                data: listing,
              },
              {
                label: "Marketing",
                fill: true,
                backgroundColor: colors[7 as keyof typeof colors].stroke,
                borderColor: colors[7 as keyof typeof colors].fill,
                data: marketing,
              },
              {
                label: "Early Incentives",
                fill: true,
                backgroundColor: colors[8 as keyof typeof colors].stroke,
                borderColor: colors[8 as keyof typeof colors].fill,
                data: earlyIncentives,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: "index" as const,
              intersect: false,
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context: any) => {
                    const label = context.dataset.label || ""
                    const value = context.parsed.y
                    return label + ": " + value + "%"
                  },
                },
              },
              legend: {
                display: true,
                position: "top" as const,
                labels: {
                  color: "white",
                  font: {
                    size: 12,
                  },
                },
              },
            },
            scales: {
              x: {
                stacked: true,
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
                ticks: {
                  color: "rgba(255, 255, 255, 0.7)",
                },
              },
              y: {
                stacked: true,
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
                ticks: {
                  color: "rgba(255, 255, 255, 0.7)",
                  callback: (value: any) => value + "%",
                },
              },
            },
            animation: {
              duration: 750,
            },
          },
        }

        newChartInstances.release = new Chart(ctx, lineConfig)
      }
    }

    setChartInstances(newChartInstances)
  }, [isClient])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Spline Background */}
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
        <spline-viewer url="https://prod.spline.design/MlELXbeLIo0xsOu3/scene.splinecode"></spline-viewer>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          {/* Radial gradient background */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-black/90 to-black opacity-90"></div>

          {/* Subtle glowing orbs */}
          <div className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-gradient-radial from-primary/20 to-transparent blur-3xl opacity-40"></div>
          <div className="absolute bottom-[30%] right-[20%] w-80 h-80 rounded-full bg-gradient-radial from-primary/15 to-transparent blur-3xl opacity-40"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Logo and title */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-full blur-xl opacity-80 animate-pulse-slow"></div>
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <Image
                    src="/images/stop-token-logo.png"
                    alt="STOP Token Logo"
                    width={120}
                    height={120}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            <span className="text-white">STOP</span> <span className="text-primary">Token</span>
          </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
              The native cryptocurrency of the LETSTOP ecosystem, rewarding safe driving.
            </p>

            {/* Supply info */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-10 inline-block">
              <p className="text-gray-400 text-sm">Total Supply</p>
              <p className="text-3xl font-bold text-white">
                <span className="text-glow">100,000,000</span> <span className="text-primary">STOP</span>
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.bybit.com/en-US/trade/spot/STOP/USDT"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center group"
              >
                <span>Trade Now</span>
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://whitepaper.letstop.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/40 backdrop-blur-md border border-primary/30 hover:border-primary text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center group"
              >
                <span>Whitepaper</span>
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Listed On Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Listed On</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* BingX */}
            <div className="group relative overflow-hidden rounded-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative h-full flex flex-col items-center justify-center group-hover:border-white/30 transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="bg-white rounded-xl p-6 mb-6 w-full flex items-center justify-center h-24">
                  <Image
                    src="/images/bingx-logo.png"
                    alt="BingX Exchange"
                    width={180}
                    height={60}
                    className="h-auto max-h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">BingX</h3>
                <a
                  href="https://bingx.com/en-us/spot/STOPUSDT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-primary flex items-center hover:underline"
                >
                  <span>Trade Now</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Raydium */}
            <div className="group relative overflow-hidden rounded-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative h-full flex flex-col items-center justify-center group-hover:border-white/30 transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="bg-white rounded-xl p-6 mb-6 w-full flex items-center justify-center h-24">
                  <Image
                    src="/images/raydium-logo.png"
                    alt="Raydium"
                    width={180}
                    height={60}
                    className="h-auto max-h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Raydium</h3>
                <a
                  href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=STOP&fixed=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-primary flex items-center hover:underline"
                >
                  <span>Swap Now</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Bybit */}
            <div className="group relative overflow-hidden rounded-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative h-full flex flex-col items-center justify-center group-hover:border-white/30 transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="bg-white rounded-xl p-6 mb-6 w-full flex items-center justify-center h-24">
                  <Image
                    src="/images/bybit-logo.png"
                    alt="Bybit Exchange"
                    width={180}
                    height={60}
                    className="h-auto max-h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Bybit</h3>
                <a
                  href="https://www.bybit.com/en-US/trade/spot/STOP/USDT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-primary flex items-center hover:underline"
                >
                  <span>Trade Now</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Features */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="relative">
                STOP Token Features
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6" />
                    <path d="M12 18v2M12 6v2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">SPL Asset</h3>
                <p className="text-gray-300">
                  STOP is a Solana Program Library (SPL) token, signifying safe driving rewards within the LETSTOP
                  ecosystem.
                </p>
              </div>
            </div>

            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Convertible Credits</h3>
                <p className="text-gray-300">
                  LETSTOP credits earned through safe driving can be converted into STOP tokens, creating a direct link
                  between road safety and cryptocurrency rewards.
                </p>
              </div>
            </div>

            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Future Utility</h3>
                <p className="text-gray-300">
                  STOP tokens will be accepted as payment across various businesses in the future, expanding the utility
                  and value of the ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Distribution */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="relative">
                Token Allocation
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">Max Supply: 100,000,000 STOP tokens</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Chart */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-black/70 backdrop-blur-md border border-primary/20 rounded-xl p-6 shadow-[0_0_30px_rgba(255,19,42,0.15)]">
                <canvas ref={tokenDistributionChartRef} width="400" height="400"></canvas>
              </div>
            </div>

            {/* Legend */}
            <div className="bg-black/70 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,19,42,0.15)]">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-semibold">$STOP Token Distribution</h3>
              </div>
              <div className="divide-y divide-gray-800/50">
                {/* Allocation 1 */}
                <div className="p-4 flex items-center justify-between token-allocation-item">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#B40C1A] mr-4"></div>
                    <div>Rewards</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-primary font-semibold mr-2">42%</div>
                    <div className="text-sm text-gray-400">(42,000,000 tokens)</div>
                  </div>
                </div>

                {/* Allocation 2 */}
                <div className="p-4 flex items-center justify-between token-allocation-item">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#BA0716] mr-4"></div>
                    <div>Pre Seed</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-primary font-semibold mr-2">15%</div>
                    <div className="text-sm text-gray-400">(15,000,000 tokens)</div>
                  </div>
                </div>

                {/* Allocation 3 */}
                <div className="p-4 flex items-center justify-between token-allocation-item">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#C5281A] mr-4"></div>
                    <div>Development</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-primary font-semibold mr-2">10%</div>
                    <div className="text-sm text-gray-400">(10,000,000 tokens)</div>
                  </div>
                </div>

                {/* Allocation 4 */}
                <div className="p-4 flex items-center justify-between token-allocation-item">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#D0491D] mr-4"></div>
                    <div>Presale</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-primary font-semibold mr-2">10%</div>
                    <div className="text-sm text-gray-400">(10,000,000 tokens)</div>
                  </div>
                </div>

                {/* Allocation 5 */}
                <div className="p-4 flex items-center justify-between token-allocation-item">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#DB6A20] mr-4"></div>
                    <div>Team</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-primary font-semibold mr-2">10%</div>
                    <div className="text-sm text-gray-400">(10,000,000 tokens)</div>
                  </div>
                </div>

                {/* Allocation 6 */}
                <div className="p-4 flex items-center justify-between token-allocation-item">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#E17B22] mr-4"></div>
                    <div>Listing</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-primary font-semibold mr-2">7%</div>
                    <div className="text-sm text-gray-400">(7,000,000 tokens)</div>
                  </div>
                </div>

                {/* Allocation 7 */}
                <div className="p-4 flex items-center justify-between token-allocation-item">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#E49030] mr-4"></div>
                    <div>Marketing</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-primary font-semibold mr-2">4%</div>
                    <div className="text-sm text-gray-400">(4,000,000 tokens)</div>
                  </div>
                </div>

                {/* Allocation 8 */}
                <div className="p-4 flex items-center justify-between token-allocation-item">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#E68B23] mr-4"></div>
                    <div>Early Incentives</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-primary font-semibold mr-2">2%</div>
                    <div className="text-sm text-gray-400">(2,000,000 tokens)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Release */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="relative">
                Token Release Schedule
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              The STOP token follows a strategic release schedule to ensure long-term sustainability and value.
            </p>
          </div>

          <div className="bg-black/70 backdrop-blur-sm border border-primary/20 rounded-xl p-8 shadow-[0_0_30px_rgba(255,19,42,0.15)]">
            <div className="w-full" style={{ height: "600px" }}>
              <canvas ref={tokenReleaseChartRef} height="600" style={{ width: "100%", height: "100%" }}></canvas>
            </div>
          </div>
        </div>
      </section>

      {/* Live Price Chart */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-primary/80 to-white bg-clip-text text-transparent">
            Live LETSTOP Price Chart
          </h2>

          <div className="chart-container w-full max-w-5xl mx-auto bg-black/90 backdrop-blur-sm border border-primary/20 rounded-xl p-4 md:p-6 shadow-[0_0_30px_rgba(255,19,42,0.15)]">
            <div className="relative w-full" style={{ height: "600px" }}>
              {/* TradingView Widget BEGIN */}
              <div className="tradingview-widget-container" style={{ height: "100%", width: "100%" }}>
                <iframe
                  src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_4b5c2&symbol=CRYPTO%3ASTOPLUSD&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=exchange&withdateranges=1&showpopupbutton=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&showpopupbutton=1&locale=en&utm_source=&utm_medium=widget&utm_campaign=chart&utm_term=CRYPTO%3ASTOPLUSD"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allowTransparency={true}
                  scrolling="no"
                  allowFullScreen={true}
                ></iframe>
              </div>
              {/* TradingView Widget END */}
              <div className="absolute bottom-4 right-4 text-xs text-blue-500">
                <a href="https://www.tradingview.com/" rel="noreferrer noopener nofollow" target="_blank">
                  Track all markets on TradingView
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Halving System */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="relative">
                  Halving System
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
                </span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                The annual STOP Token halving event, mirroring Bitcoin's model but occurring yearly, enhances the
                token's scarcity to encourage early adoption and stimulate the LETSTOP ecosystem growth. This approach
                ensures a continuous reward cycle for safe driving, maintaining incentive relevance within a limited
                token supply framework.
              </p>

              <div className="bg-black/70 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-[0_0_30px_rgba(255,19,42,0.15)]">
                <h3 className="text-xl font-semibold mb-4">Halving Schedule</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Year 1</span>
                    <span className="text-primary font-semibold">100% Reward Rate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Year 2</span>
                    <span className="text-primary font-semibold">50% Reward Rate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Year 3</span>
                    <span className="text-primary font-semibold">25% Reward Rate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Year 4</span>
                    <span className="text-primary font-semibold">12.5% Reward Rate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-[40px] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Halving-ALTeRLgmkldOvsZ0CVaq9xTrot2wAU.png"
                  alt="STOP Token Halving Concept"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-[0_0_30px_rgba(255,19,42,0.2)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-70"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="bg-gradient-to-br from-black/90 via-black/80 to-primary/30 backdrop-blur-md rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_50px_rgba(255,19,42,0.15)] p-8 md:p-12 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 opacity-70"></div>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Start Earning $STOP Tokens?
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg">
                Join LETSTOP today and turn your safe driving habits into valuable rewards. Start earning tokens and be
                part of our growing community of safety-conscious drivers.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="https://letstop.page.link/LWrsaaPgoZ8v3wBN6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 inline-flex items-center relative overflow-hidden group shadow-[0_5px_15px_rgba(255,19,42,0.3)]"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </a>
                <a
                  href="https://whitepaper.letstop.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-primary/50 hover:border-primary text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 inline-flex items-center"
                >
                  Read Whitepaper
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
