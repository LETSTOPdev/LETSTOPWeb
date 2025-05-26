"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { type SearchResultItem, coreSearchIndex, searchIndex as performSearch } from "@/lib/search-index"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([])
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

  // Search function that runs on each keystroke
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      // Use the imported search function with the core index
      const results = performSearch(searchQuery, coreSearchIndex)
      setSearchResults(results)
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
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-sm border-b border-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center z-[101] relative">
            <Image src="/images/letstop-logo.png" alt="LETSTOP Logo" width={50} height={50} className="mr-2" />
            <span className="text-2xl font-bold text-white transition-colors duration-300">LETSTOP</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-6 ml-16">
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
            <Link href="/blog" className="text-white hover:text-primary transition-colors relative group py-2">
              <span>Blog</span>
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

          {/* Desktop Search Button */}
          <button
            onClick={toggleSearch}
            className="text-white hover:text-primary transition-colors ml-6 hidden md:block"
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
        <div className="md:hidden bg-black/95 backdrop-blur-md transition-colors duration-300 relative z-[150]">
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
              <Link
                href="/blog"
                className="text-white hover:text-primary transition-colors py-2 border-b border-gray-800/50"
                onClick={toggleMenu}
              >
                Blog
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
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[200] flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-2xl bg-[#121212] rounded-lg shadow-xl border border-gray-800 overflow-hidden">
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
              <div className="p-4 max-h-[60vh] overflow-y-auto relative z-[210]">
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
                            {result.excerpt.substring(0, result.matchStart!)}
                            <span className="bg-primary/20 text-primary font-medium px-1 rounded">
                              {result.excerpt.substring(result.matchStart!, result.matchEnd!)}
                            </span>
                            {result.excerpt.substring(result.matchEnd!)}
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
