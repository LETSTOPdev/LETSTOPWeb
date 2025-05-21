import { articles } from "@/lib/blog-data"

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
