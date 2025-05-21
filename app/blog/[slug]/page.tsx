"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react"
import { PremiumBackground } from "@/components/premium-background"
import { articles } from "@/lib/blog-data"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [animatedElements, setAnimatedElements] = useState<string[]>([])
  const { slug } = params

  // Find the article that matches the slug
  const article = articles.find((article) => article.slug === slug)

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

    const elements = document.querySelectorAll("[id]")
    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [animatedElements])

  // If article not found
  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <PremiumBackground />
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/blog"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Related articles (excluding current one)
  const relatedArticles = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-black text-white">
      <PremiumBackground />

      {/* Hero Section */}
      <section className="relative pt-20 pb-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <div
            id="blog-header"
            className={`transition-all duration-1000 transform ${
              animatedElements.includes("blog-header") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-400 hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back to all articles</span>
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="text-gray-400 text-sm flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {article.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>

            <div className="flex items-center mb-8">
              {article.author?.avatar ? (
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
              )}
              <div>
                <div className="text-sm font-medium">{article.author?.name || "Unknown Author"}</div>
                <div className="text-xs text-gray-400">{article.readTime || "Read time not available"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div
            id="featured-image"
            className={`transition-all duration-1000 transform ${
              animatedElements.includes("featured-image") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-3xl">
          <div
            id="article-content"
            className={`transition-all duration-1000 transform ${
              animatedElements.includes("article-content") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="prose prose-invert prose-lg max-w-none [&_a]:text-primary [&_a:hover]:underline [&_a:hover]:text-white transition-colors">
              {article.content.map((paragraph, index) => (
                <div key={index}>
                  {paragraph.type === "heading" && <h2 className="text-2xl font-bold mt-8 mb-4">{paragraph.text}</h2>}
                  {paragraph.type === "paragraph" && (
                    <p
                      className="mb-6 text-gray-300"
                      dangerouslySetInnerHTML={{ __html: paragraph.text }}
                    />
                  )}
                  {paragraph.type === "image" && (
                    <div className="my-8">
                      <div className="relative h-[250px] rounded-lg overflow-hidden">
                        <Image
                          src={paragraph.src || "/placeholder.svg"}
                          alt={paragraph.alt || "Article image"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {paragraph.caption && (
                        <p className="text-sm text-gray-400 text-center mt-2">{paragraph.caption}</p>
                      )}
                    </div>
                  )}
                  {paragraph.type === "quote" && (
                    <blockquote className="border-l-4 border-primary pl-4 italic my-6">{paragraph.text}</blockquote>
                  )}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 mb-8">
              <div className="flex items-center text-gray-400 mr-2">
                <Tag className="w-4 h-4 mr-1" />
                <span>Tags:</span>
              </div>
              {article.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center mt-8 pt-8 border-t border-white/10">
              <span className="text-gray-400 mr-4 flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                Share this article:
              </span>
              <div className="flex gap-3">
                {/* Twitter / X */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
                    article.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.543 2.467a1.66 1.66 0 00-1.72-.163L3.87 9.14c-.812.34-.85 1.35-.064 1.736l3.528 1.693 1.482 4.66c.197.61.946.805 1.44.382l2.025-1.704 3.585 2.645c.634.47 1.54.11 1.674-.653l2.39-13.01a1.18 1.18 0 00-.387-1.422z"></path>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${article.title} ${currentUrl}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M16.001 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.82.8 5.53 2.32 7.89L2 30l6.292-2.013A13.238 13.238 0 0016 29.333c7.36 0 13.334-5.973 13.334-13.333S23.36 2.667 16 2.667zm0 24.001c-2.307 0-4.536-.64-6.471-1.854l-.463-.287-3.732 1.194 1.22-3.64-.3-.47A10.606 10.606 0 015.334 16c0-5.893 4.773-10.667 10.667-10.667S26.667 10.107 26.667 16c0 5.894-4.774 10.668-10.667 10.668zm5.861-7.448c-.297-.15-1.758-.867-2.03-.967-.273-.1-.472-.148-.671.15s-.767.966-.94 1.164c-.173.199-.347.223-.644.075-.297-.15-1.253-.462-2.387-1.475-.883-.787-1.48-1.756-1.652-2.053-.173-.298-.018-.458.13-.606.133-.132.298-.347.446-.52.15-.174.199-.298.298-.497.1-.199.05-.373-.025-.521-.075-.149-.671-1.611-.92-2.208-.243-.58-.49-.5-.671-.51l-.573-.01c-.198 0-.52.075-.792.373s-1.04 1.016-1.04 2.48 1.065 2.875 1.214 3.074c.15.199 2.095 3.2 5.08 4.486.71.306 1.262.488 1.692.625.71.227 1.355.195 1.865.119.57-.085 1.758-.718 2.006-1.41.248-.694.248-1.29.173-1.41-.074-.12-.272-.198-.57-.347z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div
              id="related-articles"
              className={`transition-all duration-1000 transform ${
                animatedElements.includes("related-articles") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Articles</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`} className="group">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="text-xs text-gray-400 mb-2">{relatedArticle.date}</div>
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{relatedArticle.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
