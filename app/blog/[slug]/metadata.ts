import { articles } from "@/lib/blog-data"
import type { Metadata } from "next"

type Props = {
  params: { slug: string }
}

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