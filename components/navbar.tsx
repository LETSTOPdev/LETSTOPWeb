"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (isSearchOpen) {
      setSearchQuery("")
      setSearchResults([])
    }
  }

  // Enhanced searchable content with more detailed home page content
  const searchableContent = [
    // Home page content - expanded with more detailed sections
    {
      title: "LETSTOP - Drive Safe, Earn Crypto",
      path: "/",
      section: "Home",
      content:
        "LETSTOP is a revolutionary road safety app that rewards safe driving with cryptocurrency tokens. Our mission is to make roads safer worldwide through incentivized safe driving behavior.",
    },
    {
      title: "Welcome to LETSTOP",
      path: "/",
      section: "Home",
      content:
        "LETSTOP is the world's first app that rewards safe driving with cryptocurrency. Drive safely, earn STOP tokens, and join our global community of safe drivers.",
    },
    {
      title: "How LETSTOP Works",
      path: "/",
      section: "Home",
      content:
        "The LETSTOP app tracks your driving behavior using advanced AI technology. Safe driving earns you STOP tokens that can be exchanged for real-world rewards or traded on cryptocurrency exchanges.",
    },
    {
      title: "STOP Token Utility",
      path: "/",
      section: "Home",
      content:
        "STOP tokens can be used for in-app purchases, exchanged for rewards, or traded on cryptocurrency exchanges. The token is built on the Solana blockchain for fast and low-cost transactions.",
    },
    {
      title: "LETSTOP Partners",
      path: "/",
      section: "Home",
      content:
        "LETSTOP has partnered with leading organizations including Solana, VeChain, Beitar Jerusalem FC, NVIDIA, TEN, Airalo, and IBC Group to expand our ecosystem and provide more value to our users.",
    },
    {
      title: "Download LETSTOP App",
      path: "/",
      section: "Home",
      content:
        "Download the LETSTOP app from the App Store or Google Play Store and start earning rewards for safe driving today.",
    },
    {
      title: "LETSTOP Global Impact",
      path: "/",
      section: "Home",
      content:
        "LETSTOP is making a global impact on road safety by incentivizing safe driving behavior through cryptocurrency rewards. Join our mission to make roads safer worldwide.",
    },
    {
      title: "LETSTOP Community",
      path: "/",
      section: "Home",
      content:
        "Join the LETSTOP community of safe drivers and cryptocurrency enthusiasts. Connect with us on social media and participate in our community events.",
    },

    // App page content
    {
      title: "App Features",
      path: "/app",
      section: "App",
      content: "The LETSTOP app tracks your driving behavior and rewards you with STOP tokens for safe driving habits.",
    },
    {
      title: "LETSTOP Mobile Application",
      path: "/app",
      section: "App",
      content:
        "Our mobile app uses advanced technology to monitor driving behavior and reward safe drivers with cryptocurrency.",
    },
    {
      title: "LETSTOP Rewards and Features",
      path: "/app",
      section: "App",
      content:
        "Discover the features and rewards available in the LETSTOP app, including cryptocurrency earnings, experience points, and more.",
    },
    {
      title: "Mobile App Download",
      path: "/app",
      section: "App",
      content: "Download the LETSTOP app from the App Store or Google Play Store.",
    },
    {
      title: "Rewards System",
      path: "/app",
      section: "App",
      content: "Learn how the LETSTOP rewards system works and how you can maximize your earnings.",
    },

    // Token page content
    {
      title: "STOP Token",
      path: "/token",
      section: "Token",
      content: "The STOP token is the native cryptocurrency of the LETSTOP ecosystem, built on Solana blockchain.",
    },
    {
      title: "Solana Blockchain",
      path: "/token",
      section: "Token",
      content: "LETSTOP is built on the Solana blockchain, offering fast and low-cost transactions.",
    },
    {
      title: "VeChain Integration",
      path: "/token",
      section: "Token",
      content: "LETSTOP leverages VeChain technology for supply chain transparency and verification.",
    },
    {
      title: "STOP Token Utility and Economics",
      path: "/token",
      section: "Token",
      content:
        "Learn about the utility and economics of the STOP token, including its use cases, supply, and distribution.",
    },
    {
      title: "How to Buy STOP Tokens",
      path: "/token",
      section: "Token",
      content: "Instructions on how to purchase STOP tokens through exchanges and other platforms.",
    },

    // Insights page content
    {
      title: "Road Safety Insights",
      path: "/insights",
      section: "Insights",
      content: "Explore global road safety statistics and how LETSTOP is making a difference.",
    },
    {
      title: "Global Road Safety Statistics",
      path: "/insights",
      section: "Insights",
      content: "Learn about road safety statistics from around the world and how LETSTOP is working to improve them.",
    },
    {
      title: "LETSTOP Impact Data",
      path: "/insights",
      section: "Insights",
      content: "Data and statistics showing the impact of LETSTOP on road safety in various regions.",
    },

    // About page content
    {
      title: "About LETSTOP",
      path: "/about",
      section: "About",
      content: "Learn about our mission, vision, and the team behind LETSTOP.",
    },
    {
      title: "Team Members",
      path: "/about",
      section: "About",
      content: "Meet our dedicated team of professionals working to make roads safer.",
    },
    {
      title: "LETSTOP Mission and Vision",
      path: "/about",
      section: "About",
      content:
        "Our mission is to make roads safer worldwide through incentivized safe driving behavior. Our vision is a world where road accidents are minimized through technology and incentives.",
    },
    {
      title: "LETSTOP History",
      path: "/about",
      section: "About",
      content: "The story of how LETSTOP was founded and has evolved to become a leader in road safety technology.",
    },

    // FAQ page content
    {
      title: "Frequently Asked Questions",
      path: "/faq",
      section: "FAQ",
      content: "Find answers to common questions about LETSTOP, the app, and the STOP token.",
    },
    {
      title: "LETSTOP Credits",
      path: "/faq",
      section: "FAQ",
      content: "Learn how LETSTOP credits work and how you can earn them through safe driving.",
    },
    {
      title: "Experience Points",
      path: "/faq",
      section: "FAQ",
      content: "Understand how experience points are calculated and what they mean for your rewards.",
    },
    {
      title: "App Features FAQ",
      path: "/faq",
      section: "FAQ",
      content: "Discover all the features available in the LETSTOP mobile application.",
    },
    {
      title: "Cryptocurrency FAQ",
      path: "/faq",
      section: "FAQ",
      content: "Learn about how cryptocurrency works within the LETSTOP ecosystem.",
    },
    {
      title: "Referral System",
      path: "/faq",
      section: "FAQ",
      content: "Find out how to refer friends and earn additional rewards through our referral program.",
    },
    {
      title: "Wallet FAQ",
      path: "/faq",
      section: "FAQ",
      content: "Learn about the LETSTOP wallet and how to manage your STOP tokens.",
    },

    // Contact page content
    {
      title: "Contact Us",
      path: "/contact",
      section: "Contact",
      content: "Get in touch with the LETSTOP team for support, partnerships, or general inquiries.",
    },
    {
      title: "Support and Help",
      path: "/contact",
      section: "Contact",
      content: "Need help with the LETSTOP app or have questions about our services? Contact our support team.",
    },
    {
      title: "Partnership Opportunities",
      path: "/contact",
      section: "Contact",
      content: "Interested in partnering with LETSTOP? Contact us to discuss potential collaboration opportunities.",
    },

    // Documentation
    {
      title: "Whitepaper",
      path: "https://whitepaper.letstop.io",
      section: "Documentation",
      external: true,
      content: "Read our comprehensive whitepaper detailing the LETSTOP ecosystem, tokenomics, and roadmap.",
    },

    // Legal pages
    {
      title: "Privacy Policy",
      path: "/privacy-policy",
      section: "Legal",
      content: "Our privacy policy explains how we collect, use, and protect your personal information.",
    },
    {
      title: "Terms of Service",
      path: "/terms",
      section: "Legal",
      content: "Our terms of service outline the rules and guidelines for using the LETSTOP platform.",
    },
    {
      title: "Wallet Terms",
      path: "/wallet-terms",
      section: "Legal",
      content: "Specific terms related to the use of the LETSTOP wallet and cryptocurrency features.",
    },
    {
      title: "Token Terms",
      path: "/token-terms",
      section: "Legal",
      content: "Terms and conditions specific to the STOP token and its usage within our ecosystem.",
    },
    {
      title: "Cookie Policy",
      path: "/cookies",
      section: "Legal",
      content: "Information about how LETSTOP uses cookies and similar technologies on our website and app.",
    },
  ]

  // Search function that runs on each keystroke
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const query = searchQuery.toLowerCase()

      // Score-based search results
      const scoredResults = searchableContent.map((item) => {
        let score = 0

        // Title match (highest priority)
        if (item.title.toLowerCase().includes(query)) {
          score += 10
          // Exact title match or starts with query
          if (item.title.toLowerCase() === query) {
            score += 5
          } else if (item.title.toLowerCase().startsWith(query)) {
            score += 3
          }
        }

        // Content match
        if (item.content.toLowerCase().includes(query)) {
          score += 5

          // Find the position of the query in the content for excerpt
          const position = item.content.toLowerCase().indexOf(query)
          const start = Math.max(0, position - 30)
          const end = Math.min(item.content.length, position + query.length + 30)

          // Create excerpt with highlighted query
          const before = item.content.substring(start, position)
          const match = item.content.substring(position, position + query.length)
          const after = item.content.substring(position + query.length, end)

          item.excerpt = start > 0 ? "..." : ""
          item.excerpt += before
          item.excerpt += match // This will be highlighted in the UI
          item.excerpt += after
          item.excerpt += end < item.content.length ? "..." : ""

          // Store match position for highlighting
          item.matchStart = before.length + (start > 0 ? 3 : 0)
          item.matchEnd = before.length + match.length + (start > 0 ? 3 : 0)
        }

        // Section match
        if (item.section.toLowerCase().includes(query)) {
          score += 3
        }

        // Path match (for direct URL searches)
        if (item.path.toLowerCase().includes(query)) {
          score += 2
        }

        return { ...item, score }
      })

      // Filter out zero scores and sort by score (descending)
      const filteredResults = scoredResults
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8) // Limit to top 8 results

      setSearchResults(filteredResults)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const navigateToResult = (path: string, external = false) => {
    toggleSearch()
    if (external) {
      window.open(path, "_blank", "noopener,noreferrer")
    } else {
      router.push(path)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/letstop-logo.png" alt="LETSTOP Logo" width={50} height={50} className="mr-2" />
            <span className="text-2xl font-bold text-white transition-colors duration-300">LETSTOP</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-6">
            <Link href="/" className="text-white hover:text-primary transition-colors relative group py-2">
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/app" className="text-white hover:text-primary transition-colors relative group py-2">
              <span>App</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/token" className="text-white hover:text-primary transition-colors relative group py-2">
              <span>Token</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/insights" className="text-white hover:text-primary transition-colors relative group py-2">
              <span>Insights</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-white hover:text-primary transition-colors relative group py-2">
              <span>About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/faq" className="text-white hover:text-primary transition-colors relative group py-2">
              <span>FAQ</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-white hover:text-primary transition-colors relative group py-2">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a
              href="https://whitepaper.letstop.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors relative group py-2"
            >
              <span>Whitepaper</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <button
            onClick={toggleSearch}
            className="text-white hover:text-primary transition-colors ml-6"
            aria-label="Search website"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Empty div to maintain spacing */}
          <div className="hidden md:block w-[50px]"></div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button className="text-white" onClick={toggleSearch} aria-label="Search website">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md transition-colors duration-300">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-primary transition-colors py-2 border-b border-gray-800/50"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/app"
                className="text-white hover:text-primary transition-colors py-2 border-b border-gray-800/50"
                onClick={toggleMenu}
              >
                App
              </Link>
              <Link
                href="/token"
                className="text-white hover:text-primary transition-colors py-2 border-b border-gray-800/50"
                onClick={toggleMenu}
              >
                Token
              </Link>
              <Link
                href="/insights"
                className="text-white hover:text-primary transition-colors py-2 border-b border-gray-800/50"
                onClick={toggleMenu}
              >
                Insights
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-primary transition-colors py-2 border-b border-gray-800/50"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/faq"
                className="text-white hover:text-primary transition-colors py-2 border-b border-gray-800/50"
                onClick={toggleMenu}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-primary transition-colors py-2 border-b border-gray-800/50"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <a
                href="https://whitepaper.letstop.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors py-2 border-b border-gray-800/50"
                onClick={toggleMenu}
              >
                Whitepaper
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-2xl bg-[#121212] rounded-lg shadow-xl border border-gray-800">
            <div className="p-4 flex justify-between items-center border-b border-gray-800">
              <h2 className="text-xl font-bold text-white">Search</h2>
              <button onClick={toggleSearch} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for content..."
                  className="w-full bg-[#1a1a1a] text-white px-4 py-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary border border-gray-700"
                  autoFocus
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="w-5 h-5" />
                </div>
              </div>
            </div>

            {searchResults.length > 0 ? (
              <div className="p-4 max-h-[60vh] overflow-y-auto">
                <ul className="space-y-2">
                  {searchResults.map((result, index) => (
                    <li key={index}>
                      <button
                        onClick={() => navigateToResult(result.path, result.external)}
                        className="w-full text-left p-4 rounded-md hover:bg-[#1a1a1a] text-white flex flex-col border border-transparent hover:border-gray-700"
                      >
                        <div className="flex items-center text-sm text-gray-400 mb-1">
                          <span>{result.section}</span>
                          {result.section && (
                            <>
                              <ChevronRight className="w-3 h-3 mx-1" />
                              <span>{result.title}</span>
                            </>
                          )}
                        </div>
                        <div className="text-lg font-medium">{result.title}</div>
                        {result.excerpt && (
                          <p className="text-sm text-gray-300 mt-1">
                            {result.excerpt.substring(0, result.matchStart)}
                            <span className="bg-primary/20 text-primary font-medium px-1 rounded">
                              {result.excerpt.substring(result.matchStart, result.matchEnd)}
                            </span>
                            {result.excerpt.substring(result.matchEnd)}
                          </p>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : searchQuery.trim() !== "" && searchQuery.trim().length > 1 ? (
              <div className="p-8 text-center text-gray-400">No results found for "{searchQuery}"</div>
            ) : searchQuery.trim().length === 1 ? (
              <div className="p-8 text-center text-gray-400">Please enter at least 2 characters to search</div>
            ) : null}
          </div>
        </div>
      )}
    </header>
  )
}
