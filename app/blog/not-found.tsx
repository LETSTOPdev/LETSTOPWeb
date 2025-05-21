import Link from "next/link"
import { PremiumBackground } from "@/components/premium-background"

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <PremiumBackground />
      <div className="text-center p-8 max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-gray-400 text-lg mb-8">
          The blog post you're looking for doesn't exist or has been moved to a different location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Back to Blog
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
