"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronRight, Store, BarChart3 } from "lucide-react"

export default function AppPage() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const [scrollY, setScrollY] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    // Set images as loaded after a short delay to prevent layout shifts
    const timer = setTimeout(() => {
      setImagesLoaded(true)
    }, 100)

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine which section is currently in view
      const currentPosition = window.scrollY + window.innerHeight / 2

      let newActiveSection = 0
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
            newActiveSection = index
          }
        }
      })

      setActiveSection(newActiveSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-black">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Text and buttons */}
            <div className="md:w-1/2 mb-12 md:mb-0 text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
                <span className="text-white">Download</span> <span className="text-primary">Now</span>
              </h1>
              <div className="flex flex-row justify-center md:justify-start gap-4 md:gap-8">
                <a
                  href="https://apps.apple.com/il/app/letstop/id6477782403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300 relative"
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl -z-10"></div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10 shadow-[0_0_30px_rgba(255,19,42,1)]"></div>
                  <Image
                    src="/images/apple-store-light.svg"
                    alt="Download on the App Store"
                    width={256}
                    height={76}
                    className="relative z-10 w-36 sm:w-44 md:w-48 lg:w-56"
                    priority
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.letstop.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300 relative"
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl -z-10"></div>
                  <div className="absolute inset-0 bg-primary/30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10 shadow-[0_0_30px_rgba(255,19,42,0.6)]"></div>
                  <Image
                    src="/images/google-play-light.svg"
                    alt="Get it on Google Play"
                    width={256}
                    height={76}
                    className="relative z-10 w-36 sm:w-44 md:w-48 lg:w-56"
                    priority
                  />
                </a>
              </div>
            </div>

            {/* Right side - Phone mockups */}
            <div className="md:w-1/2 relative flex justify-center md:block">
              {/* Mobile view */}
              <div className="md:hidden flex justify-center gap-4 w-full max-w-[280px]">
                <div className="w-1/2">
                  <Image
                    src="/images/ride2.png"
                    alt="LETSTOP App Navigation"
                    width={200}
                    height={400}
                    className="w-full"
                    priority
                    loading="eager"
                    sizes="(max-width: 768px) 140px, 200px"
                  />
                </div>
                <div className="w-1/2">
                  <Image
                    src="/images/profile.png"
                    alt="LETSTOP App Interface"
                    width={200}
                    height={400}
                    className="w-full"
                    priority
                    loading="eager"
                    sizes="(max-width: 768px) 140px, 200px"
                  />
                </div>
              </div>

              {/* Desktop view */}
              <div className="hidden md:block relative">
                <Image
                  src="/images/profile.png"
                  alt="LETSTOP App Interface"
                  width={400}
                  height={800}
                  className="w-full max-w-[300px] absolute top-0 right-0 z-20 transform translate-x-4 -translate-y-4"
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 140px, 300px"
                />
                <Image
                  src="/images/ride2.png"
                  alt="LETSTOP App Navigation"
                  width={400}
                  height={800}
                  className="w-full max-w-[300px] relative z-10"
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 140px, 300px"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Red wave graphic */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] z-0 overflow-hidden">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full h-auto" preserveAspectRatio="none">
            <path
              fill="rgba(255, 19, 42, 0.8)"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="relative">
                How It Works
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-12">LETSTOP rewards you for safe driving. Here's how:</p>
          </div>

          <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,19,42,0.15)]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zqgY_5HlCzs?rel=0"
              title="LETSTOP - How It Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <div className="w-full max-w-md mx-auto my-16 border-b border-primary/10"></div>

      {/* App Features Section */}
      <section ref={(el) => (sectionRefs.current[0] = el)} className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 rounded-3xl -z-10 opacity-30"></div>

            {/* Step 1: Sign Up - Phone on left, text on right */}
            <div className="flex flex-col md:flex-row items-center mb-32 relative">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-[40px] blur-xl opacity-30 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Image
                      src="/images/welcome.png"
                      alt="LETSTOP Sign Up Screen"
                      width={320}
                      height={640}
                      className={`w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto h-auto object-contain relative z-10 rounded-[32px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 ${!imagesLoaded ? "opacity-0" : "opacity-100"}`}
                      style={{
                        transform: `perspective(1000px) rotateY(${scrollY * 0.005}deg)`,
                      }}
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Sign Up
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Join LETSTOP with a quick registration. Use a referral code to unlock bonuses from day one.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Simple registration process</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Use referral codes for extra rewards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Start earning immediately</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2: Drive Safely - Text on left, phone on right */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-32 relative">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-[40px] blur-xl opacity-30 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Image
                      src="/images/ride2.png"
                      alt="LETSTOP Driving Screen"
                      width={320}
                      height={640}
                      className={`w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto h-auto object-contain relative z-10 rounded-[32px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 ${!imagesLoaded ? "opacity-0" : "opacity-100"}`}
                      style={{
                        transform: `perspective(1000px) rotateY(${-scrollY * 0.005}deg)`,
                      }}
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 md:pr-12">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Drive Safely with Real-Time Feedback
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    LETSTOP works in the background while you navigate, analyzing your driving. Every drive counts:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Drive Scores: based on performance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">XP: shows long-term safe driving habits</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Credits: rewards you can use</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3: STOP Store - Phone on left, text on right */}
            <div className="flex flex-col md:flex-row items-center mb-32 relative">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-[40px] blur-xl opacity-30 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Image
                      src="/images/store.png"
                      alt="LETSTOP Store Screen"
                      width={320}
                      height={640}
                      className={`w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto h-auto object-contain relative z-10 rounded-[32px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 ${!imagesLoaded ? "opacity-0" : "opacity-100"}`}
                      style={{
                        transform: `perspective(1000px) rotateY(${scrollY * 0.005}deg)`,
                      }}
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    STOP Store
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Use your credits to upgrade vehicles, open mystery boxes, and unlock in-app boosts to earn even
                    more.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Upgrade your vehicles for better rewards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Open mystery boxes for surprise bonuses</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Unlock special boosters to maximize earnings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4: Subscriptions - Text on left, phone on right */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-32 relative">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-[40px] blur-xl opacity-30 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Image
                      src="/images/subscription.png"
                      alt="LETSTOP Subscription Screen"
                      width={320}
                      height={640}
                      className={`w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto h-auto object-contain relative z-10 rounded-[32px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 ${!imagesLoaded ? "opacity-0" : "opacity-100"}`}
                      style={{
                        transform: `perspective(1000px) rotateY(${-scrollY * 0.005}deg)`,
                      }}
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 md:pr-12">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Subscriptions
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Upgrade your plan to earn more credits, remove ads, and unlock exclusive rewards like premium
                    vehicles and vouchers.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Ad-free experience with premium plans</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Higher credit earning potential</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Exclusive rewards and premium vehicles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5: Claim Rewards - Phone on left, text on right */}
            <div className="flex flex-col md:flex-row items-center mb-32 relative">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-[40px] blur-xl opacity-30 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Image
                      src="/images/profile.png"
                      alt="LETSTOP Profile Screen"
                      width={320}
                      height={640}
                      className={`w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto h-auto object-contain relative z-10 rounded-[32px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 ${!imagesLoaded ? "opacity-0" : "opacity-100"}`}
                      style={{
                        transform: `perspective(1000px) rotateY(${scrollY * 0.005}deg)`,
                      }}
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Claim Real-World Rewards
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Trade your credits for vouchers, meals, gift cards, and other exclusive prizes in the STOP Store.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Exchange credits for real-world rewards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Get gift cards from popular retailers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Unlock exclusive partner offers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 6: Invite & Earn - Text on left, phone on right */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-32 relative">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-[40px] blur-xl opacity-30 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Image
                      src="/images/referral.png"
                      alt="LETSTOP Referral Screen"
                      width={320}
                      height={640}
                      className={`w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto h-auto object-contain relative z-10 rounded-[32px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 ${!imagesLoaded ? "opacity-0" : "opacity-100"}`}
                      style={{
                        transform: `perspective(1000px) rotateY(${-scrollY * 0.005}deg)`,
                      }}
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 md:pr-12">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Invite & Earn More
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Refer friends and earn extra credits. They get a mystery box, you get bonus rewards.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Share your unique referral code</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Earn bonuses when friends join</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Build your network of safe drivers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 7: Convert Tokens - Phone on left, text on right */}
            <div className="flex flex-col md:flex-row items-center relative">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-[40px] blur-xl opacity-30 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Image
                      src="/images/wallet.png"
                      alt="LETSTOP Wallet Screen"
                      width={320}
                      height={640}
                      className={`w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto h-auto object-contain relative z-10 rounded-[32px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 ${!imagesLoaded ? "opacity-0" : "opacity-100"}`}
                      style={{
                        transform: `perspective(1000px) rotateY(${scrollY * 0.005}deg)`,
                      }}
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Convert Tokens & Grow
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Turn your credits into STOP tokens using your personal in-app wallet. Manage your crypto easily and
                    securely.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Convert credits to STOP tokens</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Manage your crypto portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300">Trade tokens on supported exchanges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-md mx-auto my-8 border-b border-primary/10"></div>

      {/* LETSTOP Rewards and */}
      <section ref={(el) => (sectionRefs.current[1] = el)} className="py-10 px-4 relative bg-black/80">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[150px] opacity-70 animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[150px] opacity-70 animate-float-medium"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="relative">
                LETSTOP Rewards and Features
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Drive Scores */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Drive Scores</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Get a score after every drive based on how safely you drive</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Your average score shows your driving habits over time</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Higher scores = more LETSTOP credits</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Points */}
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
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Experience Points (XP)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Track your safe driving progress</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Earn XP by driving consistently and without distractions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Level up to unlock bigger rewards</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* LETSTOP Credits */}
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
                <h3 className="text-xl font-bold mb-4">LETSTOP Credits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Get credits for safe driving</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Convert credits into STOP Tokens</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">More credits = better rewards</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* STOP Store */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <Store className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">STOP Store</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Use credits to upgrade your vehicle</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Win rewards through mystery boxes</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Redeem credits for partner vouchers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-md mx-auto my-8 border-b border-primary/10"></div>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] opacity-70"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-70"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="bg-gradient-to-br from-black/90 via-black/80 to-primary/30 backdrop-blur-md rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_50px_rgba(255,19,42,0.15)] p-8 md:p-12 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 opacity-70"></div>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
                Be the first to earn with LETSTOP!
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg">
                LETSTOP is more than just a driving app, it bridges the gap between responsible driving and the exciting
                world of cryptocurrency, making every journey both safe and rewarding. Here's to safe travels and smart
                trades!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                <a
                  href="https://play.google.com/store/apps/details?id=com.letstop.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300 relative"
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl -z-10"></div>
                  <div className="absolute inset-0 bg-primary/30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10 shadow-[0_0_30px_rgba(255,19,42,0.6)]"></div>
                  <Image
                    src="/images/google-play-light.svg"
                    alt="Get it on Google Play"
                    width={256}
                    height={76}
                    className="relative z-10"
                    style={{ filter: "drop-shadow(0 0 10px rgba(255, 19, 42, 0.3))" }}
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://apps.apple.com/il/app/letstop/id6477782403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300 relative"
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl -z-10"></div>
                  <div className="absolute inset-0 bg-primary/30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10 shadow-[0_0_30px_rgba(255,19,42,0.6)]"></div>
                  <Image
                    src="/images/apple-store-light.svg"
                    alt="Download on the App Store"
                    width={256}
                    height={76}
                    className="relative z-10"
                    style={{ filter: "drop-shadow(0 0 10px rgba(255, 19, 42, 0.3))" }}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
