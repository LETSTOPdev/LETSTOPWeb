"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { feature } from "topojson-client"
import { ZoomIn, ZoomOut, RotateCcw, Info, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// List of blocked countries
const blockedCountries = [
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Belarus",
  "Bosnia and Herzegovina",
  "Burundi",
  "Central African Republic",
  "China",
  "North Korea", // "Democratic People's Republic of Korea"
  "Democratic Republic of the Congo",
  "Guinea",
  "Guinea-Bissau", // "Republic of Guinea-Bissau"
  "Haiti",
  "Iran",
  "Iraq",
  "Lebanon",
  "Libya",
  "Mali",
  "Myanmar",
  "Nicaragua",
  "Russia",
  "Somalia",
  "South Sudan",
  "Sudan",
  "Syria",
  "Venezuela",
  "Yemen",
  "Zimbabwe",
  "Algeria",
  "Djibouti",
  "Egypt",
  "Jordan",
  "Kyrgyzstan",
  "Lesotho",
  "Mauritania",
  "Mozambique",
  "Niger",
  "Oman",
  "Qatar",
  "Senegal",
]

// ISO code mapping for some countries that might have different names in the dataset
const countryCodeMapping: Record<string, string> = {
  "North Korea": "PRK",
  "Democratic Republic of the Congo": "COD",
  "Guinea-Bissau": "GNB",
  "South Sudan": "SSD",
  "Bosnia and Herzegovina": "BIH",
  "Central African Republic": "CAF",
}

// Country name mapping for data consistency
const countryNameMapping: Record<string, string> = {
  "United States": "United States of America",
  "United Kingdom": "UK",
  "Russian Federation": "Russia",
  "Korea, Democratic People's Republic of": "North Korea",
  "Korea, Republic of": "South Korea",
  "Congo, Democratic Republic of the": "Democratic Republic of the Congo",
  "Tanzania, United Republic of": "Tanzania",
  "Saint Barthélemy": "St. Barthélemy",
  "Viet Nam": "Vietnam",
  "Lao People's Democratic Republic": "Laos",
  "Côte d'Ivoire": "Ivory Coast",
  "St. Barthélemy": "Saint Barthélemy",
}

// Mapping from TopoJSON country names to our dataset names
const topoToDatasetMapping: Record<string, string> = {
  "United States": "United States of America",
  "Dominican Rep.": "Dominican Republic",
  "Central African Rep.": "Central African Republic",
  "Dem. Rep. Congo": "Democratic Republic of the Congo",
  Congo: "Republic of Congo",
  "Eq. Guinea": "Equatorial Guinea",
  eSwatini: "Swaziland",
  "Bosnia and Herz.": "Bosnia and Herzegovina",
  "Czech Rep.": "Czech Republic",
  Macedonia: "North Macedonia",
  "S. Sudan": "South Sudan",
  "Solomon Is.": "Solomon Islands",
  Brunei: "Brunei Darussalam",
  "Lao PDR": "Laos",
  Myanmar: "Burma",
  Vietnam: "Viet Nam",
  "South Korea": "Korea, Republic of",
  "North Korea": "Korea, Democratic People's Republic of",
}

// Comprehensive dataset of LETSTOP users by country
const letstopUserData: Record<string, number> = {
  India: 190,
  Israel: 189,
  Pakistan: 188,
  Indonesia: 187,
  "South Africa": 186,
  Philippines: 185,
  "United States of America": 184,
  Nigeria: 183,
  Germany: 182,
  Mexico: 181,
  "United Arab Emirates": 180,
  Malaysia: 179,
  Colombia: 178,
  Ghana: 177,
  "United Kingdom": 176,
  Bangladesh: 175,
  Rwanda: 174,
  "Côte d'Ivoire": 173,
  "Saudi Arabia": 172,
  Turkey: 171,
  France: 170,
  Romania: 169,
  Italy: 168,
  Kenya: 167,
  Nepal: 166,
  Zambia: 165,
  Canada: 164,
  Morocco: 163,
  Brazil: 162,
  Netherlands: 161,
  Japan: 160,
  Spain: 159,
  Poland: 158,
  Greece: 157,
  "Sri Lanka": 156,
  Australia: 155,
  Cameroon: 154,
  Singapore: 153,
  Tunisia: 152,
  Czechia: 151,
  Albania: 150,
  "Burkina Faso": 149,
  Ethiopia: 148,
  Hungary: 147,
  Portugal: 146,
  Finland: 145,
  Thailand: 144,
  Georgia: 143,
  Belgium: 142,
  Kuwait: 141,
  Uzbekistan: 140,
  Chile: 139,
  Serbia: 138,
  Switzerland: 137,
  Argentina: 136,
  Austria: 135,
  Sweden: 134,
  Taiwan: 133,
  Bulgaria: 132,
  Tanzania: 131,
  Togo: 130,
  Kosovo: 129,
  Vietnam: 128,
  Cyprus: 127,
  Croatia: 126,
  Bahrain: 125,
  "South Korea": 124,
  Peru: 123,
  Ecuador: 122,
  "New Zealand": 121,
  Mongolia: 120,
  Ukraine: 119,
  Slovakia: 118,
  "El Salvador": 117,
  "Dominican Republic": 116,
  Botswana: 115,
  Maldives: 114,
  Slovenia: 113,
  Benin: 112,
  "North Macedonia": 111,
  Uganda: 110,
  Denmark: 109,
  "Costa Rica": 108,
  Jamaica: 107,
  Guatemala: 106,
  Norway: 105,
  Cambodia: 104,
  Namibia: 103,
  Honduras: 102,
  "Hong Kong": 101,
  Bolivia: 100,
  Mauritius: 99,
  China: 98,
  Ireland: 97,
  Panama: 96,
  Fiji: 95,
  Lithuania: 94,
  Tajikistan: 93,
  Kazakhstan: 92,
  Gambia: 91,
  Moldova: 90,
  Malta: 89,
  Paraguay: 88,
  "Trinidad & Tobago": 87,
  Montenegro: 86,
  Latvia: 85,
  Madagascar: 84,
  "Papua New Guinea": 83,
  Bhutan: 82,
  Gabon: 81,
  Suriname: 80,
  "Puerto Rico": 79,
  Uruguay: 78,
  Angola: 77,
  Malawi: 76,
  Estonia: 75,
  Luxembourg: 74,
  Eswatini: 73,
  "Congo - Kinshasa": 72,
  Brunei: 71,
  "Sierra Leone": 70,
  Laos: 69,
  Chad: 68,
  Guyana: 67,
  Seychelles: 66,
  Liberia: 65,
  Mali: 64,
  Greenland: 63,
  Macao: 62,
  Belize: 61,
  Samoa: 60,
  "Western Sahara": 59,
  Réunion: 58,
  Barbados: 57,
  Iceland: 56,
  Turkmenistan: 55,
  "French Polynesia": 54,
  Guam: 53,
  "French Guiana": 52,
  "Timor-Leste": 51,
  Cuba: 50,
  Grenada: 49,
  "Isle of Man": 48,
  Curaçao: 47,
  "American Samoa": 46,
  "Solomon Islands": 45,
  "St. Vincent & Grenadines": 44,
  Guadeloupe: 43,
  Tonga: 42,
  Bahamas: 41,
  "St. Lucia": 40,
  "San Marino": 39,
  Aruba: 38,
  "Cape Verde": 37,
  "Cayman Islands": 36,
  Andorra: 35,
  "Antigua & Barbuda": 34,
  Micronesia: 33,
  "New Caledonia": 32,
  Vanuatu: 31,
  "Equatorial Guinea": 30,
  Martinique: 29,
  Dominica: 28,
  Jersey: 27,
  "St. Kitts & Nevis": 26,
  Gibraltar: 25,
  "Sint Maarten": 24,
  "Turks & Caicos Islands": 23,
  "Marshall Islands": 22,
  "British Virgin Islands": 21,
  Mayotte: 20,
  "Faroe Islands": 19,
  Comoros: 18,
  "Cook Islands": 17,
  "U.S. Virgin Islands": 16,
  Liechtenstein: 15,
  "St. Martin": 14,
  Kiribati: 13,
  Nauru: 12,
  Palau: 11,
  Bermuda: 10,
  Anguilla: 9,
  "Caribbean Netherlands": 8,
  Guernsey: 7,
  Monaco: 6,
  "Northern Mariana Islands": 5,
  "São Tomé & Príncipe": 4,
  "British Indian Ocean Territory": 3,
  Montserrat: 2,
  "St. Barthélemy": 1
}

export default function WorldMap() {
  const svgRef = useRef<SVGSVGElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  const [hoveredCountryData, setHoveredCountryData] = useState<number | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<any>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [countryData, setCountryData] = useState<Record<string, number>>({})
  const [maxValue, setMaxValue] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [countryRankings, setCountryRankings] = useState<Record<string, number>>({})
  const zoomRef = useRef<any>(null)
  const mapGroupRef = useRef<any>(null)
  const legendRef = useRef<HTMLDivElement>(null)

  // Initialize country data
  useEffect(() => {
    const initializeData = () => {
      try {
        setIsLoading(true)

        // Calculate the maximum value for scaling
        const max = Math.max(...Object.values(letstopUserData))

        // Calculate rankings
        const sortedCountries = Object.entries(letstopUserData)
          .sort((a, b) => b[1] - a[1])
          .map(([country], index) => ({ country, rank: index + 1 }))

        const rankings: Record<string, number> = {}
        sortedCountries.forEach(({ country, rank }) => {
          rankings[country] = rank
        })

        // Set the state with our data
        setCountryRankings(rankings)
        setCountryData(letstopUserData)
        setMaxValue(max)

        // Short timeout to simulate loading for a smoother transition
        setTimeout(() => {
          setIsLoading(false)
        }, 800)
      } catch (error) {
        console.error("Error initializing map data:", error)
        setIsLoading(false)
      }
    }

    initializeData()
  }, [])

  useEffect(() => {
    if (!svgRef.current || isLoading) return

    const svg = d3.select(svgRef.current)
    const width = svgRef.current.clientWidth
    const height = svgRef.current.clientHeight

    // Clear any existing content
    svg.selectAll("*").remove()

    // Add a background with subtle gradient
    const bgGradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "bg-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%")

    bgGradient.append("stop").attr("offset", "0%").attr("stop-color", "#0a0a0a")
    bgGradient.append("stop").attr("offset", "100%").attr("stop-color", "#111111")

    svg.append("rect").attr("width", width).attr("height", height).attr("fill", "url(#bg-gradient)")

    // Create a flat projection - Mercator is common for flat maps
    const projection = d3
      .geoMercator()
      .scale(width / 6.5)
      .center([0, 20]) // Center slightly above the equator
      .translate([width / 2, height / 2])

    // Create a path generator
    const pathGenerator = d3.geoPath().projection(projection)

    // Create a color scale for the heat map - using enhanced LETSTOP red colors
    // Adjusted to make mid-range values (like India) more visible
    const colorScale = d3
      .scaleLinear<string>()
      .domain([0, maxValue * 0.1, maxValue * 0.25, maxValue * 0.5, maxValue])
      .range(["#7f1d1d", "#991b1b", "#b91c1c", "#dc2626", "#ef4444"])

    // Create a group for the map that will be affected by zoom
    const mapGroup = svg.append("g")
    mapGroupRef.current = mapGroup

    // Load world map data
    d3.json("https://unpkg.com/world-atlas@2.0.2/countries-110m.json")
      .then((worldData: any) => {
        if (!worldData) return

        // Convert TopoJSON to GeoJSON
        const countries = feature(worldData, worldData.objects.countries)

        // Add subtle glow effect for countries
        const glow = svg
          .append("defs")
          .append("filter")
          .attr("id", "glow")
          .attr("x", "-50%")
          .attr("y", "-50%")
          .attr("width", "200%")
          .attr("height", "200%")

        glow.append("feGaussianBlur").attr("stdDeviation", "2").attr("result", "coloredBlur")

        const feComponentTransfer = glow
          .append("feComponentTransfer")
          .attr("in", "coloredBlur")
          .attr("result", "coloredBlur")

        feComponentTransfer.append("feFuncR").attr("type", "linear").attr("slope", "3")
        feComponentTransfer.append("feFuncG").attr("type", "linear").attr("slope", "0.5")
        feComponentTransfer.append("feFuncB").attr("type", "linear").attr("slope", "0.5")

        const feMerge = glow.append("feMerge")
        feMerge.append("feMergeNode").attr("in", "coloredBlur")
        feMerge.append("feMergeNode").attr("in", "SourceGraphic")

        // Add subtle graticule (latitude/longitude lines)
        const graticule = d3.geoGraticule()

        mapGroup
          .append("path")
          .datum(graticule)
          .attr("d", pathGenerator as any)
          .attr("fill", "none")
          .attr("stroke", "#1a1a1a")
          .attr("stroke-width", 0.2)
          .attr("class", "graticule")

        // Draw the map
        mapGroup
          .selectAll("path.country")
          .data(countries.features)
          .enter()
          .append("path")
          .attr("class", "country")
          .attr("d", pathGenerator)
          .attr("fill", (d: any) => {
            const countryName = d.properties.name
            const countryId = d.id

            // Get the dataset name for this country
            const datasetName = topoToDatasetMapping[countryName] || countryName

            // Check if the country is in our blocked list
            const isBlocked = blockedCountries.some((country) => {
              // Check by name
              if (country === countryName || country === datasetName) return true

              // Check by code if we have a mapping
              const code = countryCodeMapping[country]
              if (code && countryId === code) return true

              return false
            })

            // If it's a blocked country, use black
            if (isBlocked) {
              return "#000000"
            }

            // Get the country's data value
            const value = countryData[datasetName] || 0

            // Use the color scale based on the value
            return value > 0 ? colorScale(value) : "#1f1f1f" // Use dark gray for countries with no data
          })
          .attr("stroke", "#0a0a0a") // Dark border matching background
          .attr("stroke-width", 0.5)
          .attr("data-country", (d: any) => d.properties.name)
          .style("filter", (d: any) => {
            const countryName = d.properties.name
            const datasetName = topoToDatasetMapping[countryName] || countryName

            // Apply glow effect to countries with significant data
            if (datasetName === "United States of America" || datasetName === "Turkey" || datasetName === "India") {
              return "url(#glow)"
            }
            return "none"
          })
          .on("mouseover", function (event, d: any) {
            d3.select(this)
              .transition()
              .duration(200)
              .attr("stroke", "#ffffff")
              .attr("stroke-width", 1)
              .style("filter", "url(#glow)")

            const countryName = d.properties.name
            const datasetName = topoToDatasetMapping[countryName] || countryName

            setHoveredCountry(countryName)
            setHoveredCountryData(countryData[datasetName] || 0)

            // Get mouse position relative to the SVG container
            const svgRect = svgRef.current?.getBoundingClientRect()
            if (svgRect) {
              const mouseX = event.clientX - svgRect.left
              const mouseY = event.clientY - svgRect.top
              setTooltipPosition({ x: mouseX, y: mouseY })
            }
          })
          .on("mousemove", (event) => {
            // Update tooltip position on mouse move
            const svgRect = svgRef.current?.getBoundingClientRect()
            if (svgRect) {
              const mouseX = event.clientX - svgRect.left
              const mouseY = event.clientY - svgRect.top
              setTooltipPosition({ x: mouseX, y: mouseY })
            }
          })
          .on("mouseout", function (event, d: any) {
            const countryName = d.properties.name
            const datasetName = topoToDatasetMapping[countryName] || countryName

            d3.select(this)
              .transition()
              .duration(200)
              .attr("stroke", "#0a0a0a")
              .attr("stroke-width", 0.5)
              .style("filter", () => {
                // Maintain glow effect on key countries
                if (datasetName === "United States of America" || datasetName === "Turkey" || datasetName === "India") {
                  return "url(#glow)"
                }
                return "none"
              })

            setHoveredCountry(null)
            setHoveredCountryData(null)
          })
          .on("click", function (event, d: any) {
            // Pulse animation
            d3.select(this)
              .transition()
              .duration(100)
              .attr("stroke-width", 2)
              .transition()
              .duration(200)
              .attr("stroke-width", 0.5)

            const countryName = d.properties.name
            const datasetName = topoToDatasetMapping[countryName] || countryName
            const isBlocked = blockedCountries.includes(datasetName) || blockedCountries.includes(countryName)

            setSelectedCountry({
              name: countryName,
              users: countryData[datasetName] || 0,
              isBlocked: isBlocked,
              rank: countryRankings[datasetName] || 0,
            })
          })

        // Add zoom and pan functionality with restrictions
        const zoom = d3
          .zoom()
          .scaleExtent([1, 8])
          .on("zoom", (event) => {
            mapGroup.attr("transform", event.transform)
            setZoomLevel(event.transform.k)
          })

        // Apply zoom but disable wheel zooming
        svg
          .call(zoom as any)
          .on("wheel.zoom", null) // Disable mouse wheel zooming
          .on("dblclick.zoom", null) // Disable double-click zooming

        zoomRef.current = zoom

        // Detect pinch gestures and prevent them
        let touchStartDistance = 0
        svg.node()?.addEventListener(
          "touchstart",
          (e) => {
            if (e.touches.length === 2) {
              // Calculate distance between two fingers
              const dx = e.touches[0].clientX - e.touches[1].clientX
              const dy = e.touches[0].clientY - e.touches[1].clientY
              touchStartDistance = Math.sqrt(dx * dx + dy * dy)
            }
          },
          { passive: true },
        )

        svg.node()?.addEventListener(
          "touchmove",
          (e) => {
            if (e.touches.length === 2) {
              // Calculate current distance
              const dx = e.touches[0].clientX - e.touches[1].clientX
              const dy = e.touches[0].clientY - e.touches[1].clientY
              const currentDistance = Math.sqrt(dx * dx + dy * dy)

              // If distance changed significantly, it's a pinch gesture
              if (Math.abs(currentDistance - touchStartDistance) > 10) {
                e.preventDefault() // Prevent pinch zoom
              }
            }
          },
          { passive: false },
        )

        // Prevent middle mouse button scrolling
        svg.node()?.addEventListener("mousedown", (e) => {
          // Middle mouse button is usually button 1
          if (e.button === 1) {
            e.preventDefault()
          }
        })

        // Cleanup function to remove event listeners
        return () => {
          const svgNode = svg.node()
          if (svgNode) {
            svgNode.removeEventListener("touchstart", () => {})
            svgNode.removeEventListener("touchmove", () => {})
            svgNode.removeEventListener("mousedown", () => {})
          }
        }
      })
      .catch((error) => {
        console.error("Error loading world map data:", error)
        setIsLoading(false)
      })

    // Add subtle world map title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("fill", "rgba(255,255,255,0.15)")
      .attr("font-size", "24px")
      .attr("font-weight", "700")
      .text("LETSTOP GLOBAL PRESENCE")
  }, [countryData, maxValue, isLoading, countryRankings])

  // Create the legend as a separate HTML element outside the SVG
  useEffect(() => {
    if (isLoading || !legendRef.current) return

    // Clear any existing content
    legendRef.current.innerHTML = ""

    // Create an SVG for the legend
    const legendWidth = 200
    const legendHeight = 20
    const legendSvg = d3
      .select(legendRef.current)
      .append("svg")
      .attr("width", legendWidth + 40)
      .attr("height", legendHeight + 50)

    // Create gradient for legend
    const defs = legendSvg.append("defs")
    const gradient = defs
      .append("linearGradient")
      .attr("id", "usage-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%")

    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#000000")
    gradient.append("stop").attr("offset", "10%").attr("stop-color", "#7f1d1d")
    gradient.append("stop").attr("offset", "25%").attr("stop-color", "#991b1b")
    gradient.append("stop").attr("offset", "50%").attr("stop-color", "#b91c1c")
    gradient.append("stop").attr("offset", "75%").attr("stop-color", "#dc2626")
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#ef4444")

    // Add a background for the legend to ensure it's visible
    legendSvg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", legendWidth + 40)
      .attr("height", legendHeight + 50)
      .attr("fill", "rgba(0,0,0,0.7)")
      .attr("rx", 8)
      .attr("ry", 8)

    // Add legend rectangle with enhanced styling
    legendSvg
      .append("rect")
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", legendWidth)
      .attr("height", legendHeight)
      .style("fill", "url(#usage-gradient)")
      .attr("rx", 4) // Rounded corners
      .attr("ry", 4)
      .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.5))")

    // Create a scale for the legend
    const legendScale = d3.scaleLinear().domain([0, maxValue]).range([0, legendWidth])

    // Add legend axis with enhanced styling
    const legendAxis = d3
      .axisBottom(legendScale)
      .tickValues([0, maxValue * 0.25, maxValue * 0.5, maxValue * 0.75, maxValue])
      .tickFormat((d) => `${d}`)

    legendSvg
      .append("g")
      .attr("transform", `translate(20, ${20 + legendHeight})`)
      .call(legendAxis)
      .selectAll("text")
      .attr("fill", "#ffffff")
      .attr("font-size", "10px")
      .attr("font-weight", "500")

    // Add legend title with enhanced styling
    legendSvg
      .append("text")
      .attr("x", 20)
      .attr("y", 12)
      .attr("fill", "#ffffff")
      .attr("font-size", "12px")
      .attr("font-weight", "600")
      .text("LETSTOP Users")
  }, [maxValue, isLoading])

  // Function to get ranking tier based on actual rank
  const getRankingTier = (rank: number) => {
    if (rank <= 10) return "Top 10"
    if (rank <= 25) return "Top 25"
    if (rank <= 50) return "Top 50"
    if (rank <= 100) return "Top 100"
    return "Top 200"
  }

  const handleZoomIn = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 1.5)
    }
  }

  const handleZoomOut = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 0.75)
    }
  }

  const handleReset = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current).transition().duration(500).call(zoomRef.current.transform, d3.zoomIdentity)
    }
  }

  return (
    <div ref={mapContainerRef} className="relative w-full h-[480px]">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-red-600 border-gray-800 rounded-full animate-spin"></div>
            <p className="mt-4 text-white font-medium">Loading map data...</p>
          </div>
        </div>
      ) : (
        <>
          <svg ref={svgRef} width="100%" height="100%" className="world-map" />

          {/* Legend as a separate HTML element that stays on top */}
          <div ref={legendRef} className="absolute bottom-4 left-4 z-10 pointer-events-none"></div>

          {hoveredCountry && (
            <div
              className="absolute pointer-events-none z-10"
              style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y,
                transform: "translate(-50%, -100%)",
              }}
            >
              <div className="letstop-tooltip">
                <div className="font-medium">{hoveredCountry}</div>
                {hoveredCountryData > 0 && (
                  <div className="text-xs mt-1 opacity-90">
                    <span className="text-red-400">Ranking:</span>{" "}
                    {getRankingTier(countryRankings[topoToDatasetMapping[hoveredCountry] || hoveredCountry] || 999)}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="absolute bottom-16 right-4 flex flex-col gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-black/60 backdrop-blur-sm hover:bg-black/80 border-red-900/30 transition-all duration-300 hover:border-red-500/50"
              onClick={handleZoomIn}
            >
              <ZoomIn className="h-4 w-4 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-black/60 backdrop-blur-sm hover:bg-black/80 border-red-900/30 transition-all duration-300 hover:border-red-500/50"
              onClick={handleZoomOut}
            >
              <ZoomOut className="h-4 w-4 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-black/60 backdrop-blur-sm hover:bg-black/80 border-red-900/30 transition-all duration-300 hover:border-red-500/50"
              onClick={handleReset}
            >
              <RotateCcw className="h-4 w-4 text-white" />
            </Button>
          </div>

          {selectedCountry && (
            <div className="absolute top-4 right-4 w-72">
              <Card className="bg-black/90 backdrop-blur-sm border-red-900/30 shadow-[0_4px_30px_rgba(220,38,38,0.15)]">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-red-500 mr-2" />
                      <CardTitle className="text-lg text-white">{selectedCountry.name}</CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-gray-400 hover:text-white hover:bg-transparent"
                      onClick={() => setSelectedCountry(null)}
                    >
                      <span className="sr-only">Close</span>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Button>
                  </div>
                  <CardDescription className="text-gray-400">Regional Information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedCountry.isBlocked || selectedCountry.users === 0 ? (
                      <div className="bg-gradient-to-r from-black to-gray-900/30 rounded-lg p-4 border border-gray-800/20">
                        <div className="text-lg font-medium text-white mb-1">Region Information</div>
                        <div className="text-xs text-gray-400">LETSTOP regional data unavailable</div>
                      </div>
                    ) : (
                      <>
                        <div
                          className="rounded-lg p-4 border border-red-900/20"
                          style={{
                            background: `linear-gradient(to right, rgba(0,0,0,1), ${
                              selectedCountry.rank <= 10
                                ? "rgba(239, 68, 68, 0.3)"
                                : selectedCountry.rank <= 25
                                  ? "rgba(220, 38, 38, 0.25)"
                                  : selectedCountry.rank <= 50
                                    ? "rgba(185, 28, 28, 0.2)"
                                    : selectedCountry.rank <= 100
                                      ? "rgba(153, 27, 27, 0.15)"
                                      : "rgba(127, 29, 29, 0.1)"
                            })`,
                          }}
                        >
                          <div className="text-lg font-medium text-white mb-1">LETSTOP Presence</div>
                          <div className="text-xs text-gray-400">Active in this region</div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-300">Global Ranking</span>
                            <span className="text-sm font-medium text-white">
                              {getRankingTier(selectedCountry.rank)}
                            </span>
                          </div>
                          <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                width: `${Math.max(5, 100 - (selectedCountry.rank / 200) * 100)}%`,
                                background: `linear-gradient(90deg, #7f1d1d, ${d3
                                  .scaleLinear<string>()
                                  .domain([0, maxValue * 0.1, maxValue * 0.25, maxValue * 0.5, maxValue])
                                  .range(["#7f1d1d", "#991b1b", "#b91c1c", "#dc2626", "#ef4444"])(
                                  selectedCountry.users,
                                )})`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="pt-2">
                          <div className="flex items-start gap-2 text-sm">
                            <Info className="h-4 w-4 text-gray-400 mt-0.5" />
                            <span className="text-gray-300">
                              {selectedCountry.rank <= 10
                                ? "Major market presence"
                                : selectedCountry.rank <= 25
                                  ? "Strong market presence"
                                  : selectedCountry.rank <= 50
                                    ? "Established market presence"
                                    : selectedCountry.rank <= 100
                                      ? "Growing market presence"
                                      : "Emerging market presence"}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </>
      )}
    </div>
  )
}
