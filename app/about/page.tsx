"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Shield, Heart, Globe, Award, ChevronRight } from "lucide-react"
import { PremiumBackground } from "@/components/premium-background"

export default function AboutPage() {
  const [animatedElements, setAnimatedElements] = useState<string[]>([])
  const observerRefs = useRef<Map<string, HTMLElement>>(new Map())

  // Animation for elements as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id && !animatedElements.includes(id)) {
              setAnimatedElements((prev) => [...prev, id])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    observerRefs.current.forEach((element) => {
      if (element) observer.observe(element)
    })

    return () => {
      observerRefs.current.forEach((element) => {
        if (element) observer.unobserve(element)
      })
    }
  }, [animatedElements])

  // Helper function to register elements for animation
  const registerAnimationRef = (id: string, element: HTMLElement | null) => {
    if (element) {
      observerRefs.current.set(id, element)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <PremiumBackground />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
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
            <span className="text-white">About</span> <span className="text-primary">LETSTOP</span>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Redefining road safety through technology and rewards
            </p>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div
            id="company-story"
            ref={(el) => registerAnimationRef("company-story", el)}
            className={`transition-all duration-1000 transform ${
              animatedElements.includes("company-story") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Story</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Born from a real-life accident involving our VP and built with purpose, LETSTOP turns safe driving
                    into a rewarding experience. Using positive reinforcement system, and blockchain.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    LETSTOP mobile app tracks driving behavior and awards users with credits that can be redeemed for
                    vouchers, in-app vehicle upgrades, and cryptocurrency.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    The company believes responsibility should be recognized. That's why the mission goes beyond tech to
                    build a global movement of drivers motivated to drive safely.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    With a growing community and partnerships across mobility, crypto, and safety sectors, LETSTOP is
                    making everyday driving smarter, safer, and more rewarding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="company-values"
            ref={(el) => registerAnimationRef("company-values", el)}
            className={`transition-all duration-1000 transform ${
              animatedElements.includes("company-values") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              <span className="relative">
                Our Values
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value 1 */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Safety First</h3>
                  <p className="text-gray-300">
                    We're committed to creating safer roads through technology and positive reinforcement.
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Rewarding Responsibility</h3>
                  <p className="text-gray-300">
                    We believe good driving habits deserve recognition and tangible rewards.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Global Impact</h3>
                  <p className="text-gray-300">
                    We're building a worldwide movement of safer drivers through innovative technology.
                  </p>
                </div>
              </div>

              {/* Value 4 */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Community Driven</h3>
                  <p className="text-gray-300">
                    We're fostering a community that values and promotes road safety together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div
            id="team-intro"
            ref={(el) => registerAnimationRef("team-intro", el)}
            className={`transition-all duration-1000 transform ${
              animatedElements.includes("team-intro") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="relative">
                  Meet Our Team
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                </span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts is united by a shared mission to make roads safer through innovative
                technology and positive reinforcement.
              </p>
            </div>
          </div>

          {/* Leadership */}
          <div
            id="leadership"
            ref={(el) => registerAnimationRef("leadership", el)}
            className={`mb-20 transition-all duration-1000 transform ${
              animatedElements.includes("leadership") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Leadership</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Dor */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative p-6">
                  <div className="flex flex-col gap-6">
                    <div className="w-full aspect-[4/3] overflow-hidden border border-primary/30">
                      <Image
                        src="/images/dor.png"
                        alt="Dor"
                        width={400}
                        height={300}
                        className="w-full h-full object-contain bg-black"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold mb-1 text-white">Dor</h4>
                      <p className="text-primary font-medium mb-4">Co-Founder & CEO</p>
                      <div className="text-gray-300 space-y-2 mb-4">
                        <p>• Leads an investment community of ~20,000 members</p>
                        <p>• A trader and investor in the crypto industry for 6 years</p>
                        <p>• Founder of an NFT company</p>
                      </div>
                      <p className="text-gray-300">
                        Dor has been actively involved in the cryptocurrency and blockchain space, bringing valuable
                        expertise to LETSTOP's innovative approach to road safety rewards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Almog */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative p-6">
                  <div className="flex flex-col gap-6">
                    <div className="w-full aspect-[4/3] overflow-hidden border border-primary/30">
                      <Image
                        src="/images/almog.png"
                        alt="Almog"
                        width={400}
                        height={300}
                        className="w-full h-full object-contain bg-black"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold mb-1 text-white">Almog</h4>
                      <p className="text-primary font-medium mb-4">Co-Founder & VP</p>
                      <div className="text-gray-300 space-y-2 mb-4">
                        <p>• Dean's List honoree in Economics and Business Management</p>
                        <p>• Trader and investor in the stock market for 5 years</p>
                      </div>
                      <p className="text-gray-300">
                        Almog stood out during his studies of Economics and Business Administration at the university.
                        Apart from his main coursework, he furthered his education with courses in marketing, financial
                        analysis, and software development. He holds an Internal Audit Diploma and possesses significant
                        programming capabilities. After enduring a severe vehicle accident, Almog's personal experience
                        became the driving force behind the inception and passion for this project, emphasizing his
                        profound commitment to road safety.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div
            id="team-members"
            ref={(el) => registerAnimationRef("team-members", el)}
            className={`transition-all duration-1000 transform ${
              animatedElements.includes("team-members") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Team Members</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Nikita */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="aspect-[3/4] w-full overflow-hidden border-b border-primary/30">
                    <Image
                      src="/images/nikita.png"
                      alt="Nikita"
                      width={300}
                      height={400}
                      className="w-full h-full object-contain bg-black"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-white">Nikita</h4>
                    <p className="text-primary font-medium">DEVELOPER TEAM LEAD</p>
                    <div className="mt-3 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      In the development field for over 10 years, with expertise in server, frontend, mobile
                      applications, security, and application architecture.
                    </div>
                  </div>
                </div>
              </div>

              {/* Itay */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="aspect-[3/4] w-full overflow-hidden border-b border-primary/30">
                    <Image
                      src="/images/itay.png"
                      alt="Itay"
                      width={300}
                      height={400}
                      className="w-full h-full object-contain bg-black"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-white">Itay</h4>
                    <p className="text-primary font-medium">HEAD OF MARKETING</p>
                    <div className="mt-3 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      In the marketing and management field since 2018, with expertise in Web3, investments, and
                      trading.
                    </div>
                  </div>
                </div>
              </div>

              {/* Tom */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="aspect-[3/4] w-full overflow-hidden border-b border-primary/30">
                    <Image
                      src="/images/tom.png"
                      alt="Tom"
                      width={300}
                      height={400}
                      className="w-full h-full object-contain bg-black"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-white">Tom</h4>
                    <p className="text-primary font-medium">FULLSTACK DEVELOPER</p>
                    <div className="mt-3 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      With over two years of experience in development, specializing in frontend, mobile applications,
                      blockchain, server management, and application architecture.
                    </div>
                  </div>
                </div>
              </div>

              {/* Yakir */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="aspect-[3/4] w-full overflow-hidden border-b border-primary/30">
                    <Image
                      src="/images/yakir.png"
                      alt="Yakir"
                      width={300}
                      height={400}
                      className="w-full h-full object-contain bg-black"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-white">Yakir</h4>
                    <p className="text-primary font-medium">BLOCKCHAIN DEVELOPER</p>
                    <div className="mt-3 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Is an experienced software developer specializing in blockchain technologies and distributed
                      systems architecture. With expertise in TypeScript, NestJS, and multiple blockchain platforms.
                    </div>
                  </div>
                </div>
              </div>

              {/* Cfir */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="aspect-[3/4] w-full overflow-hidden border-b border-primary/30">
                    <Image
                      src="/images/cfir.png"
                      alt="Cfir"
                      width={300}
                      height={400}
                      className="w-full h-full object-contain bg-black"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-white">Cfir</h4>
                    <p className="text-primary font-medium">MARKETING & OPERATION</p>
                    <div className="mt-3 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Cfir is a seasoned Marketing Operator with 7+ years of experience building automation systems that
                      drive results. From strategy to execution, he turns processes into performance.
                    </div>
                  </div>
                </div>
              </div>

              {/* Ore */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="aspect-[3/4] w-full overflow-hidden border-b border-primary/30">
                    <Image
                      src="/images/ore.png"
                      alt="Ore"
                      width={300}
                      height={400}
                      className="w-full h-full object-contain bg-black"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-white">Ore</h4>
                    <p className="text-primary font-medium">SALES MANAGER & PARTNERSHIPS</p>
                    <div className="mt-3 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Social impact innovator since 2004, shaping industries with value-driven solutions, strategic
                      partnerships, and business growth.
                    </div>
                  </div>
                </div>
              </div>

              {/* Tomer */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="aspect-[3/4] w-full overflow-hidden border-b border-primary/30">
                    <Image
                      src="/images/tomer.png"
                      alt="Tomer"
                      width={300}
                      height={400}
                      className="w-full h-full object-contain bg-black"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-white">Tomer</h4>
                    <p className="text-primary font-medium">MARKETING & FINANCE</p>
                    <div className="mt-3 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Leading Support Operations, Financial Strategy & Social Media. Skilled in building engaged
                      communities, driving brand presence, and leveraging deep expertise in crypto trading.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Mission</h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
                Be part of the movement to make roads safer while earning rewards for responsible driving.
              </p>
              <Link
                href="/app"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 inline-flex items-center relative overflow-hidden group"
              >
                <span className="relative z-10">Download The App</span>
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
