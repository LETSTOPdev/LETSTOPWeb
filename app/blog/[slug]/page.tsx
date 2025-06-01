import { notFound } from "next/navigation"
import { articles } from "@/lib/blog-data"
import type { Metadata } from "next"
import BlogPostClient from "./BlogPostClient"

type Props = {
  params: { slug: string }
}

// ✅ Metadata
export function generateMetadata({ params }: Props): Metadata {
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

// ✅ Static paths (optional for pre-rendering)
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

// ✅ Renders client logic
export default function BlogPost({ params }: Props) {
  const article = articles.find((article) => article.slug === params.slug)
  if (!article) return notFound()

  return <BlogPostClient params={params} />
}