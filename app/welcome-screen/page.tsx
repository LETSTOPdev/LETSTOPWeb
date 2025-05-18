import { Twitter } from "lucide-react"
import NetworkSphereAnimation from "@/components/network-sphere-animation"
import TypingAnimation from "@/components/typing-animation"
import Image from "next/image"
import { PremiumBackground } from "@/components/premium-background"

export const dynamic = "force-static"
export const revalidate = false

export default function Home() {
  return (
    <>
      <PremiumBackground />
      <div className="relative min-h-screen z-10">
        {/* Single continuous container for all content */}
        <div className="relative min-h-screen w-full overflow-hidden">
          <div className="container mx-auto px-4 py-20 relative z-10">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center mb-32">
              {/* Network Sphere Animation */}
              <div className="relative w-full max-w-6xl mx-auto mb-16">
                <NetworkSphereAnimation />

                {/* Text overlay positioned absolutely on top of the sphere */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
                  <div className="p-4 md:p-6 max-w-[90%] md:max-w-[80%]">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-6">
                      <span className="text-white">
                        <TypingAnimation />
                      </span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-12">
                      The first app that turns daily rides into profitable rewards
                    </p>

                    {/* App Store Badges - moved inside the sphere */}
                    <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 relative z-10 mt-8 pointer-events-auto">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.letstop.android"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group transform hover:scale-105 transition-transform duration-300"
                      >
                        {/* Glow effect behind the badge */}
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl -z-10 group-hover:bg-primary/30 transition-colors duration-300"></div>
                        <Image
                          src="/images/google-play-badge.png"
                          alt="Get it on Google Play"
                          width={138}
                          height={41}
                          className="h-14 w-auto relative z-10"
                          style={{ filter: "drop-shadow(0 0 10px rgba(255, 19, 42, 0.3))" }}
                          priority={true}
                        />
                      </a>
                      <a
                        href="https://apps.apple.com/il/app/letstop/id6477782403"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group transform hover:scale-105 transition-transform duration-300"
                      >
                        {/* Glow effect behind the badge */}
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl -z-10 group-hover:bg-primary/30 transition-colors duration-300"></div>
                        <Image
                          src="/images/app-store-badge.png"
                          alt="Download on the App Store"
                          width={115}
                          height={41}
                          className="h-14 w-auto relative z-10"
                          style={{ filter: "drop-shadow(0 0 10px rgba(255, 19, 42, 0.3))" }}
                          priority={true}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Listed On Section */}
            <div className="mb-32">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Listed On</h2>

              {/* Mobile scrollable container */}
              <div className="relative md:hidden w-full">
                {/* Left shadow indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

                {/* Right shadow indicator */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory px-4 scrollbar-hide">
                  <a
                    href="https://www.bybit.com/en/trade/spot/STOP/USDT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 rounded-xl p-4 flex items-center justify-center hover:border-primary/30 transition-all duration-300 h-24 min-w-[250px] mx-2 snap-center flex-shrink-0"
                  >
                    <Image
                      src="/images/bybit-logo.png"
                      alt="Bybit"
                      width={150}
                      height={40}
                      className="h-auto w-auto object-contain max-h-16 transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                  <a
                    href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=STOP&fixed=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 rounded-xl p-4 flex items-center justify-center hover:border-primary/30 transition-all duration-300 h-24 min-w-[250px] mx-2 snap-center flex-shrink-0"
                  >
                    <Image
                      src="/images/raydium-logo.png"
                      alt="Raydium"
                      width={180}
                      height={40}
                      className="h-auto w-auto object-contain max-h-16 transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                  <a
                    href="https://bingx.com/en/spot/STOPUSDT/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 rounded-xl p-4 flex items-center justify-center hover:border-primary/30 transition-all duration-300 h-24 min-w-[250px] mx-2 snap-center flex-shrink-0"
                  >
                    <Image
                      src="/images/bingx-logo.png"
                      alt="BingX"
                      width={150}
                      height={40}
                      className="h-auto w-auto object-contain max-h-16 transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                </div>
              </div>

              {/* Desktop grid layout (unchanged) */}
              <div className="hidden md:grid grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
                <a
                  href="https://www.bybit.com/en/trade/spot/STOP/USDT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 rounded-xl p-4 flex items-center justify-center hover:border-primary/30 transition-all duration-300 h-24"
                >
                  <Image
                    src="/images/bybit-logo.png"
                    alt="Bybit"
                    width={150}
                    height={40}
                    className="h-auto w-auto object-contain max-h-16 transition-transform duration-300 hover:scale-110"
                  />
                </a>
                <a
                  href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=STOP&fixed=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 rounded-xl p-4 flex items-center justify-center hover:border-primary/30 transition-all duration-300 h-24"
                >
                  <Image
                    src="/images/raydium-logo.png"
                    alt="Raydium"
                    width={180}
                    height={40}
                    className="h-auto w-auto object-contain max-h-16 transition-transform duration-300 hover:scale-110"
                  />
                </a>
                <a
                  href="https://bingx.com/en/spot/STOPUSDT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 rounded-xl p-4 flex items-center justify-center hover:border-primary/30 transition-all duration-300 h-24"
                >
                  <Image
                    src="/images/bingx-logo.png"
                    alt="BingX"
                    width={150}
                    height={40}
                    className="h-auto w-auto object-contain max-h-16 transition-transform duration-300 hover:scale-110"
                  />
                </a>
              </div>
            </div>

            {/* Partnerships Section */}
            <div className="mb-32">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <span className="relative">
                    Strategic Partnerships
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  </span>
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                  LETSTOP is actively forging partnerships globally under its community-based road safety initiative,
                  integrating automotive safety technology across various sectors to bring enhanced value and diverse
                  benefits to its community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Solana Foundation */}
                <a
                  href="https://x.com/solana/status/1900239740244549993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9945FF] to-[#14F195] opacity-50 blur-xl rounded-xl group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative h-full flex flex-col items-center justify-center group-hover:border-white/30 transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="bg-black/40 rounded-xl p-6 mb-6 w-full flex items-center justify-center h-32 transition-transform group-hover:scale-105">
                      <Image
                        src="/images/solana-logo.png"
                        alt="Solana Foundation"
                        width={180}
                        height={60}
                        className="h-auto max-h-20 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Solana Foundation</h3>
                    <p className="text-gray-300 text-sm text-center">
                      Leveraging Solana's high-performance blockchain for fast, secure token transactions.
                    </p>
                  </div>
                </a>

                {/* VeChain */}
                <a
                  href="https://x.com/vechainofficial/status/1868675260301689053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1976D2] to-[#4CAF50] opacity-50 blur-xl rounded-xl group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative h-full flex flex-col items-center justify-center group-hover:border-white/30 transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="bg-black/40 rounded-xl p-6 mb-6 w-full flex items-center justify-center h-32 transition-transform group-hover:scale-105">
                      <Image
                        src="/images/vechain-logo.png"
                        alt="VeChain"
                        width={180}
                        height={60}
                        className="h-auto max-h-20 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">VeChain</h3>
                    <p className="text-gray-300 text-sm text-center">
                      Utilizing VeChain's supply chain expertise to enhance vehicle data tracking and verification.
                    </p>
                  </div>
                </a>

                {/* Beitar Jerusalem */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#000000] opacity-50 blur-xl rounded-xl group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative h-full flex flex-col items-center justify-center group-hover:border-white/30 transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="bg-black/40 rounded-xl p-6 mb-6 w-full flex items-center justify-center h-32">
                      <Image
                        src="/images/beitar-logo-updated.png"
                        alt="Beitar Jerusalem"
                        width={180}
                        height={60}
                        className="h-auto max-h-20 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Beitar Jerusalem</h3>
                    <p className="text-gray-300 text-sm text-center">
                      Partnering with Beitar Jerusalem FC to promote road safety awareness through sports.
                    </p>
                  </div>
                </div>

                {/* Nvidia */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#76B900] to-[#333333] opacity-50 blur-xl rounded-xl group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative h-full flex flex-col items-center justify-center group-hover:border-white/30 transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="bg-black/40 rounded-xl p-6 mb-6 w-full flex items-center justify-center h-32">
                      <Image
                        src="/images/nvidia-logo.png"
                        alt="Nvidia"
                        width={180}
                        height={60}
                        className="h-auto max-h-20 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">NVIDIA</h3>
                    <p className="text-gray-300 text-sm text-center">
                      Collaborating with NVIDIA to power our AI-driven safety monitoring and analytics systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Clients Section */}
            <div className="mb-32">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <span className="relative">
                    Our Clients
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  </span>
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                  LETSTOP works with a diverse range of clients across industries who believe in innovation, impact, and
                  community-driven value. These collaborations help us extend real-world benefits to our users while
                  strengthening the ecosystem around safer mobility. By working together, we create meaningful
                  experiences that connect technology with everyday life.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Ten */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#4D9FFF] opacity-50 blur-xl rounded-xl group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative h-full flex flex-col items-center justify-center group-hover:border-white/30 transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-6 mb-6 w-full flex items-center justify-center h-32">
                      <Image
                        src="/images/ten-logo-updated.png"
                        alt="Ten"
                        width={180}
                        height={60}
                        className="h-auto max-h-20 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Ten</h3>
                    <p className="text-gray-300 text-sm text-center">
                      Partnering with Ten to enhance road safety awareness and provide exclusive rewards for safe
                      drivers.
                    </p>
                  </div>
                </div>

                {/* AirAlo */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107] to-[#E91E63] opacity-50 blur-xl rounded-xl group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 relative h-full flex flex-col items-center justify-center group-hover:border-white/30 transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-6 mb-6 w-full flex items-center justify-center h-32">
                      <Image
                        src="/images/airalo-logo.png"
                        alt="AirAlo"
                        width={180}
                        height={60}
                        className="h-auto max-h-20 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Airalo</h3>
                    <p className="text-gray-300 text-sm text-center">
                      Collaborating with Airalo to offer global connectivity solutions for LETSTOP users while
                      traveling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Incubation Section */}
            <div className="mb-32">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <span className="relative">
                    Incubation
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  </span>
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                  LETSTOP is proud to be incubated by IBC Group, a global leader in blockchain investment and
                  acceleration, led by Mario Nawfal. Together, we're making driving safer and more rewarding through
                  innovative technology and strategic partnerships.
                </p>
              </div>

              <div className="group relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5AFF15] to-[#00AA00] opacity-40 blur-xl rounded-xl group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col items-center md:items-start">
                      <div className="bg-white rounded-xl p-6 mb-6 w-full max-w-xs flex items-center justify-center">
                        <Image
                          src="/images/ibc-group-logo.png"
                          alt="IBC Group"
                          width={240}
                          height={80}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">Backed by IBC Group</h3>
                      <p className="text-gray-300 mb-6 text-center md:text-left">
                        IBC Group is a leading investment firm focused on incubating and accelerating innovative
                        projects in the blockchain and technology space.
                      </p>
                      <a
                        href="https://x.com/MarioNawfal/status/1896294453310308757"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 text-white px-4 py-2 rounded-md transition-all duration-300"
                      >
                        <Twitter className="mr-2 h-5 w-5" />
                        <span>View Announcement</span>
                      </a>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                      <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
                        <Image
                          src="/images/mario-nawfal-letstop.png"
                          alt="LETSTOP Team with Mario Nawfal"
                          width={600}
                          height={400}
                          className="w-full h-auto"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <p className="text-white text-sm">LETSTOP team with Mario Nawfal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Strategic Guidance</h4>
                          <p className="text-gray-300 text-sm">Expert mentorship and strategic direction</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Venture Support</h4>
                          <p className="text-gray-300 text-sm">Strategic insights to navigate growth</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Network Access</h4>
                          <p className="text-gray-300 text-sm">Connections to global industry leaders</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovating Road Safety Section */}
            <div className="mb-32">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Innovating Road Safety</h2>
              <p className="text-gray-300 text-center max-w-4xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
                In a world full of digital distractions, staying focused on the road is crucial. LETSTOP innovates in
                road safety by rewarding safer, smarter driving through advanced AI. This AI driving safety application
                focuses on rewarding positive driving behavior, uniting a global community for safer roads.
              </p>

              {/* Road safety icons/illustrations */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {/* Drive & Earn */}
                <div className="bg-white/10 dark:bg-black/40 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                    Drive & Earn
                  </h3>
                  <p className="text-gray-300">Rewards for responsible driving habits</p>
                </div>

                {/* Unique Features */}
                <div className="bg-white/10 dark:bg-black/40 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                    Unique Features
                  </h3>
                  <p className="text-gray-300">Premium perks, levels, referrals, algorithms</p>
                </div>

                {/* Web 3 Integration */}
                <div className="bg-white/10 dark:bg-black/40 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                    Web 3 Integration
                  </h3>
                  <p className="text-gray-300">Direct rewards for positive driving actions</p>
                </div>

                {/* Safety First */}
                <div className="bg-white/10 dark:bg-black/40 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                    Safety First
                  </h3>
                  <p className="text-gray-300">Monitors phone use for safer drives</p>
                </div>

                {/* Global Community */}
                <div className="bg-white/10 dark:bg-black/40 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                    Global Community
                  </h3>
                  <p className="text-gray-300">Uniting for safer roads worldwide</p>
                </div>
              </div>
            </div>

            {/* CTA Section with Newsletter - Commented out */}
            {/* 
            <div className="mb-20">
              <div className="bg-gradient-to-br from-black/90 via-black/80 to-primary/30 backdrop-blur-md rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_50px_rgba(255,19,42,0.15)] p-8 md:p-12 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 opacity-70"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="text-center md:text-left relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl hidden md:block"></div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white relative">
                      Join LETSTOP and be part of a movement that's bigger than an app – it's a commitment to safer
                      roads for everyone.
                    </h2>
                    <Link
                      href="/app"
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 inline-flex items-center relative overflow-hidden group shadow-[0_5px_15px_rgba(255,19,42,0.3)]"
                    >
                      <span className="relative z-10">Get Started Today</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                  </div>

                  <div className="border-t md:border-t-0 md:border-l border-primary/30 pt-8 md:pt-0 md:pl-10 relative">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl hidden md:block"></div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">Subscribe to our newsletter!</h3>
                    <form className="space-y-5">
                      <div className="relative group">
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-5 py-4 bg-black/50 border border-gray-700/50 group-hover:border-primary/50 focus:border-primary/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-white text-lg"
                        />
                        <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgba(255,19,42,0.0)] group-hover:shadow-[0_0_15px_rgba(255,19,42,0.2)] pointer-events-none transition-all duration-300"></div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-primary/90 hover:bg-primary text-white px-5 py-4 rounded-lg transition-all duration-300 flex items-center justify-center text-lg font-medium shadow-[0_5px_15px_rgba(255,19,42,0.2)] hover:shadow-[0_5px_25px_rgba(255,19,42,0.4)] relative overflow-hidden group"
                      >
                        <span className="relative z-10">Sign Up</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </button>
                    </form>
                    <div className="mt-4 text-gray-400 text-sm text-center md:text-left">
                      Join our community and stay updated with the latest news and features.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </>
  )
}
