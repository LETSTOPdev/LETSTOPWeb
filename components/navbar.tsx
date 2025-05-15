"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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

          {/* Empty div to maintain spacing */}
          <div className="hidden md:block w-[50px]"></div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
    </header>
  )
}
