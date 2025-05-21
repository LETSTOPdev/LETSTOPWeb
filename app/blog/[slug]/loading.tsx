import { Skeleton } from "@/components/ui/skeleton"
import { PremiumBackground } from "@/components/premium-background"

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PremiumBackground />

      {/* Hero Section */}
      <section className="relative pt-20 pb-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <Skeleton className="h-6 w-32 bg-gray-700" />

            <div className="flex items-center gap-4 mb-4">
              <Skeleton className="h-8 w-24 rounded-full bg-gray-700" />
              <Skeleton className="h-6 w-32 bg-gray-700" />
            </div>

            <Skeleton className="h-12 w-full bg-gray-700" />
            <Skeleton className="h-12 w-3/4 bg-gray-700" />

            <div className="flex items-center mb-8">
              <Skeleton className="w-10 h-10 rounded-full bg-gray-700 mr-3" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32 bg-gray-700" />
                <Skeleton className="h-3 w-24 bg-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <Skeleton className="w-full h-[400px] rounded-xl bg-gray-700" />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-6">
            <Skeleton className="h-8 w-2/3 bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
            <Skeleton className="h-4 w-5/6 bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />

            <Skeleton className="h-[200px] w-full rounded-lg bg-gray-700" />

            <Skeleton className="h-8 w-1/2 bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
            <Skeleton className="h-4 w-4/5 bg-gray-700" />
          </div>
        </div>
      </section>
    </div>
  )
}
