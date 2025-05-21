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
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
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
