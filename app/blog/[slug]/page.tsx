import { notFound } from "next/navigation"
import { articles } from "@/lib/blog-data"
import BlogPostClient from "./BlogPostClient"
import type { Metadata } from "next"

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) {
    return {
      title: "Article Not Found | LETSTOP Blog",
      description: "The article you're looking for doesn't exist or has been moved.",
    }
  }

  return {
    title: `${article.title} | LETSTOP Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: ["LETSTOP Team"],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

// 👇 Instead of passing just `params`, pass the `article` itself
export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) return notFound()

  return <BlogPostClient article={article} />
}
