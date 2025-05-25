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
            <div className="relative aspect-[3/2] rounded-xl overflow-hidden">
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
                      <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
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
                {/* X (formerly Twitter) */}
                <button 
                  onClick={() => {
                    const shareUrl = encodeURIComponent(window.location.href);
                    const shareTitle = encodeURIComponent(document.title);
                    const xUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}&via=LETST0P`;
                    window.open(xUrl, '_blank', 'width=600,height=400');
                  }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Share on X"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </button>

                {/* Facebook */}
                <button 
                  onClick={() => {
                    const shareUrl = encodeURIComponent(window.location.href);
                    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
                    window.open(facebookUrl, '_blank', 'width=600,height=400');
                  }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Share on Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </button>

                {/* LinkedIn */}
                <button 
                  onClick={() => {
                    const shareUrl = encodeURIComponent(window.location.href);
                    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
                    window.open(linkedInUrl, '_blank', 'width=600,height=400');
                  }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Share on LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                  </svg>
                </button>

                {/* Telegram */}
                <button 
                  onClick={() => {
                    const shareUrl = encodeURIComponent(window.location.href);
                    const shareTitle = encodeURIComponent(document.title);
                    const telegramUrl = `https://t.me/share/url?url=${shareUrl}&text=${shareTitle}`;
                    window.open(telegramUrl, '_blank', 'width=600,height=400');
                  }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Share on Telegram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
                  </svg>
                </button>

                {/* Copy Link */}
                <button 
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(window.location.href);
                      // You can replace this alert with a toast notification if you have one
                      alert('Link copied to clipboard!');
                    } catch (err) {
                      // Fallback for older browsers
                      const textArea = document.createElement('textarea');
                      textArea.value = window.location.href;
                      document.body.appendChild(textArea);
                      textArea.select();
                      document.execCommand('copy');
                      document.body.removeChild(textArea);
                      alert('Link copied to clipboard!');
                    }
                  }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Copy link"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
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
