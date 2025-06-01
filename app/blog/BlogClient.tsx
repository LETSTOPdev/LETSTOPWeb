"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ArrowRight } from "lucide-react"
import { PremiumBackground } from "@/components/premium-background"
import { articles } from "@/lib/blog-data"

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [animatedElements, setAnimatedElements] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
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
  // const categories = ["All", ...new Set(articles.map((article) => article.category))] -- This line can be used to dynamically generate categories based on the articles data
  // You can uncomment the above line to dynamically generate categories based on the articles data
  // Static categories for filtering
  const categories = ["All", "Road Safety", "Technology", "Token Updates", "Community"]

  const featuredArticle = articles.find((article) => article.featured)

  const filteredArticles = articles
    .slice() // Prevent mutating original array
    .sort((a, b) => b.id - a.id) // Sort by ID descending
    .filter((article) => !article.featured || activeFilter !== "All")
    .filter((article) => activeFilter === "All" || article.category === activeFilter)
    .filter(
      (article) =>
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  return (
    <div className="min-h-screen bg-black text-white">
      <PremiumBackground />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 pt-12 pb-0 overflow-hidden">
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
              <span className="text-white">LETSTOP</span> <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Insights, updates and stories about road safety, technology, and the future of driving
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <div
              id="featured-article"
              ref={(el) => registerAnimationRef("featured-article", el)}
              className={`transition-all duration-1000 transform ${
                animatedElements.includes("featured-article") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="ml-3 text-gray-400 text-sm">{featuredArticle.category}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-300 mb-6">{featuredArticle.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-gray-400 text-sm">{featuredArticle.date}</div>
                      <Link
                        href={`/blog/${featuredArticle.slug}`}
                        className="flex items-center text-primary hover:text-white group/btn"
                      >
                        <span className="mr-2 font-medium">Read Article</span>
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover/btn:bg-primary transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div
            id="filters"
            ref={(el) => registerAnimationRef("filters", el)}
            className={`transition-all duration-1000 transform ${
              animatedElements.includes("filters") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === category
                        ? "bg-primary text-white"
                        : "bg-black/60 backdrop-blur-md border border-white/10 text-gray-300 hover:border-primary/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search articles"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/60 backdrop-blur-md border border-white/10 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-8 px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div
            id="articles-title"
            ref={(el) => registerAnimationRef("articles-title", el)}
            className={`transition-all duration-1000 transform ${
              animatedElements.includes("articles-title") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              <span className="relative">
                Latest Articles
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <div
                  key={article.id}
                  id={`article-${article.id}`}
                  ref={(el) => registerAnimationRef(`article-${article.id}`, el)}
                  className={`transition-all duration-1000 transform ${
                    animatedElements.includes(`article-${article.id}`)
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link href={`/blog/${article.slug}`} className="group">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(255,19,42,0.3)] h-full flex flex-col">
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded">
                          {article.category}
                        </div>
                      </div>
                      <div className="flex flex-col flex-grow p-6">
                        <div className="text-xs text-gray-400 mb-2">{article.date}</div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{article.excerpt}</p>
                        <div className="flex items-center text-primary mt-auto">
                          <span className="text-sm font-medium">Read more</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">No articles found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setActiveFilter("All")
                    setSearchQuery("")
                  }}
                  className="px-6 py-2 bg-primary text-white rounded-full"
                >
                  View All Articles
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section 
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div
            id="newsletter"
            ref={(el) => registerAnimationRef("newsletter", el)}
            className={`transition-all duration-1000 transform ${
              animatedElements.includes("newsletter") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

              <div className="relative text-center">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get the latest updates, news, and insights delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-white/10 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      */}

      {/* Animation styles */}
      <style jsx global>{`
        .text-glow {
          text-shadow: 0 0 10px rgba(255, 19, 42, 0.5), 0 0 20px rgba(255, 19, 42, 0.3);
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
