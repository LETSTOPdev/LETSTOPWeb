"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Phone, MessageSquare, ChevronRight } from "lucide-react"

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("partnerships")
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen text-gray-800 dark:text-white relative overflow-hidden pt-20">
      {/* Interactive glow effect that follows mouse */}
      <div
        className="fixed w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          opacity: 0.6,
        }}
      />

      {/* Contact Hero Section */}
      <section className="pt-20 pb-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
              <span className="text-white">Contact</span> <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 relative">
              <span className="relative z-10">
                We're here to help with your automotive technology needs. Reach out to our team for support,
                partnerships, or inquiries.
              </span>
              <span className="absolute -inset-4 bg-primary/5 rounded-lg blur-md -z-10"></span>
            </p>
          </div>

          {/* Interactive Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Partnerships Card */}
            <div
              className={`relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ${
                activeTab === "partnerships"
                  ? "bg-gradient-to-br from-white/90 to-primary/10 dark:from-black/80 dark:to-primary/20 border-2 border-primary/50 shadow-[0_0_30px_rgba(255,19,42,0.2)]"
                  : "bg-white/40 dark:bg-black/40 border border-gray-200 dark:border-gray-800/50 hover:border-primary/30"
              }`}
              onClick={() => setActiveTab("partnerships")}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl transform translate-x-16 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-xl transform -translate-x-12 translate-y-6"></div>

              <div className="p-8 relative z-10">
                <div className="absolute top-4 right-4 text-primary">
                  <div className="relative">
                    <MessageSquare size={48} className="relative z-10" />
                    <div
                      className={`absolute inset-0 bg-primary/20 rounded-full blur-md transition-opacity duration-300 ${activeTab === "partnerships" ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
                    ></div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4 flex flex-col text-gray-800 dark:text-white">
                  <span>Talk To Our</span>
                  <span
                    className={`${activeTab === "partnerships" ? "text-primary" : ""} transition-colors duration-300`}
                  >
                    Partnerships Team
                  </span>
                </h2>

                <div className="flex flex-col h-[120px] justify-between">
                  <p className="text-gray-600 dark:text-gray-400">
                    Want to collaborate with AUTOTECH? Our partnerships team would love to connect and explore
                    opportunities together.
                  </p>

                  <a
                    href="mailto:Partnerships@letstop.io"
                    className={`flex items-center text-sm font-medium ${activeTab === "partnerships" ? "text-primary" : "text-gray-500 dark:text-gray-400"} transition-colors duration-300 hover:underline`}
                  >
                    <span>Partnerships@letstop.io</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-500 ${activeTab === "partnerships" ? "scale-x-100" : "group-hover:scale-x-100 group-hover:opacity-50"}`}
              ></div>
            </div>

            {/* Support Card */}
            <div
              className={`relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ${
                activeTab === "support"
                  ? "bg-gradient-to-br from-white/90 to-primary/10 dark:from-black/80 dark:to-primary/20 border-2 border-primary/50 shadow-[0_0_30px_rgba(255,19,42,0.2)]"
                  : "bg-white/40 dark:bg-black/40 border border-gray-200 dark:border-gray-800/50 hover:border-primary/30"
              }`}
              onClick={() => setActiveTab("support")}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl transform translate-x-16 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-xl transform -translate-x-12 translate-y-6"></div>

              <div className="p-8 relative z-10">
                <div className="absolute top-4 right-4 text-primary">
                  <div className="relative">
                    <Phone size={48} className="relative z-10" />
                    <div
                      className={`absolute inset-0 bg-primary/20 rounded-full blur-md transition-opacity duration-300 ${activeTab === "support" ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
                    ></div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4 flex flex-col text-gray-800 dark:text-white">
                  <span>Need Help With</span>
                  <span className={`${activeTab === "support" ? "text-primary" : ""} transition-colors duration-300`}>
                    Your Vehicle?
                  </span>
                </h2>

                <div className="flex flex-col h-[120px] justify-between">
                  <p className="text-gray-600 dark:text-gray-400">
                    Our support team is here to help you every step of the way with your automotive technology needs.
                  </p>

                  <a
                    href="mailto:support@letstop.io"
                    className={`flex items-center text-sm font-medium ${activeTab === "support" ? "text-primary" : "text-gray-500 dark:text-gray-400"} transition-colors duration-300 hover:underline`}
                  >
                    <span>support@letstop.io</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-500 ${activeTab === "support" ? "scale-x-100" : "group-hover:scale-x-100 group-hover:opacity-50"}`}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form */}
      {/*
<section className="py-20 px-4 relative">
  <div className="container mx-auto max-w-4xl relative z-10">
    <div className="bg-gradient-to-br from-white/90 to-gray-100/80 dark:from-black/80 dark:via-black/60 dark:to-black/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800/50 shadow-[0_10px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
      <div className="p-2">
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent h-1 w-full rounded-full"></div>
      </div>

      <div className="p-8 md:p-12">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <Mail className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            {activeTab === "partnerships" ? "Contact Our Partnerships Team" : "Get Support"}
          </h2>
        </div>

        {isSubmitted ? (
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Send className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Message Sent!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-800 focus:border-primary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-gray-800 dark:text-white"
                    placeholder="John Doe"
                  />
                  <div className="absolute inset-0 border border-primary/0 rounded-lg pointer-events-none transition-all duration-300 peer-focus:border-primary/50 peer-focus:shadow-[0_0_10px_rgba(255,19,42,0.2)]"></div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-800 focus:border-primary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-gray-800 dark:text-white"
                    placeholder="your@email.com"
                  />
                  <div className="absolute inset-0 border border-primary/0 rounded-lg pointer-events-none transition-all duration-300 peer-focus:border-primary/50 peer-focus:shadow-[0_0_10px_rgba(255,19,42,0.2)]"></div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Your Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-800 focus:border-primary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-gray-800 dark:text-white"
                  placeholder="How can we help you?"
                ></textarea>
                <div className="absolute inset-0 border border-primary/0 rounded-lg pointer-events-none transition-all duration-300 peer-focus:border-primary/50 peer-focus:shadow-[0_0_10px_rgba(255,19,42,0.2)]"></div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  </div>
</section>
*/}

      {/* Newsletter Section with Animation */}
      {/*
<section className="py-20 px-4 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

  <div className="container mx-auto max-w-4xl relative z-10">
    <div className="bg-gradient-to-br from-white/90 to-white/40 dark:from-black/80 dark:to-black/40 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800/50 p-12 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Stay updated with the latest automotive technology news, product releases, and exclusive offers.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1 relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-800 focus:border-primary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-gray-800 dark:text-white"
            />
            <div className="absolute inset-0 border border-primary/0 rounded-lg pointer-events-none transition-all duration-300 peer-focus:border-primary/50 peer-focus:shadow-[0_0_10px_rgba(255,19,42,0.2)]"></div>
          </div>

          <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10 flex items-center justify-center">
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
*/}
    </main>
  )
}
