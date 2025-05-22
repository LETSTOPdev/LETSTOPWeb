"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function HorizontalScrollSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Automotive Technology</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-300">
          Explore our innovative solutions designed to enhance vehicle safety and performance
        </p>

        <div className="overflow-x-auto pb-6 hide-scrollbar">
          <div ref={scrollRef} className="flex space-x-6 px-4" style={{ minWidth: "max-content" }}>
            {/* Card 1 */}
            <div className="w-72 flex-shrink-0 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group border border-gray-800 hover:border-primary/30 transition-all duration-300">
              <div className="h-40 relative overflow-hidden">
                <Image
                  src="/images/sports-car-side.png"
                  alt="Advanced Safety Systems"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2 text-white group-hover:text-primary transition-colors">
                  Safety Systems
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Next-generation collision prevention and driver assistance technologies.
                </p>
                <div className="flex items-center text-primary/70 group-hover:text-primary transition-colors">
                  <span className="text-sm">Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-72 flex-shrink-0 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group border border-gray-800 hover:border-primary/30 transition-all duration-300">
              <div className="h-40 relative overflow-hidden">
                <Image
                  src="/images/gears.png"
                  alt="Precision Engineering"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2 text-white group-hover:text-primary transition-colors">
                  Precision Engineering
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Meticulously designed components that ensure reliability in all conditions.
                </p>
                <div className="flex items-center text-primary/70 group-hover:text-primary transition-colors">
                  <span className="text-sm">Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-72 flex-shrink-0 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group border border-gray-800 hover:border-primary/30 transition-all duration-300">
              <div className="h-40 relative overflow-hidden">
                <Image
                  src="/images/network-sphere.webp"
                  alt="Connected Vehicles"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2 text-white group-hover:text-primary transition-colors">
                  Connected Vehicles
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Seamless integration of vehicles into the broader transportation ecosystem.
                </p>
                <div className="flex items-center text-primary/70 group-hover:text-primary transition-colors">
                  <span className="text-sm">Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-72 flex-shrink-0 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group border border-gray-800 hover:border-primary/30 transition-all duration-300">
              <div className="h-40 relative overflow-hidden">
                <Image
                  src="/images/digital-handshake.png"
                  alt="Strategic Partnerships"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2 text-white group-hover:text-primary transition-colors">
                  Strategic Partnerships
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Collaborations with industry leaders to accelerate innovation.
                </p>
                <div className="flex items-center text-primary/70 group-hover:text-primary transition-colors">
                  <span className="text-sm">Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="w-72 flex-shrink-0 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group border border-gray-800 hover:border-primary/30 transition-all duration-300">
              <div className="h-40 relative overflow-hidden">
                <Image
                  src="/images/truck.png"
                  alt="Fleet Management"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2 text-white group-hover:text-primary transition-colors">
                  Fleet Management
                </h3>
                <p className="text-gray-400 text-sm mb-3">Comprehensive solutions for commercial vehicle fleets.</p>
                <div className="flex items-center text-primary/70 group-hover:text-primary transition-colors">
                  <span className="text-sm">Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
