import { Skeleton } from "@/components/ui/skeleton"
import { PremiumBackground } from "@/components/premium-background"

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PremiumBackground />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <Skeleton className="h-16 w-64 mx-auto mb-6 bg-gray-700" />
            <Skeleton className="h-8 w-full max-w-3xl mx-auto bg-gray-700" />
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Skeleton className="h-8 w-24 rounded-full bg-gray-700 mr-3" />
                  <Skeleton className="h-6 w-32 bg-gray-700" />
                </div>
                <Skeleton className="h-10 w-full bg-gray-700 mb-4" />
                <Skeleton className="h-10 w-3/4 bg-gray-700 mb-4" />
                <Skeleton className="h-4 w-full bg-gray-700 mb-2" />
                <Skeleton className="h-4 w-full bg-gray-700 mb-2" />
                <Skeleton className="h-4 w-2/3 bg-gray-700 mb-6" />
                <div className="flex items-center justify-between mt-auto">
                  <Skeleton className="h-4 w-32 bg-gray-700" />
                  <Skeleton className="h-10 w-32 bg-gray-700 rounded-full" />
                </div>
              </div>
              <Skeleton className="h-64 md:h-auto bg-gray-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-full bg-gray-700" />
              ))}
            </div>
            <Skeleton className="h-10 w-full md:w-64 rounded-full bg-gray-700" />
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-8 px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <Skeleton className="h-12 w-48 mx-auto mb-12 bg-gray-700" />

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                <Skeleton className="h-48 w-full bg-gray-700" />
                <div className="p-6">
                  <Skeleton className="h-4 w-32 bg-gray-700 mb-2" />
                  <Skeleton className="h-6 w-full bg-gray-700 mb-3" />
                  <Skeleton className="h-4 w-full bg-gray-700 mb-2" />
                  <Skeleton className="h-4 w-full bg-gray-700 mb-2" />
                  <Skeleton className="h-4 w-2/3 bg-gray-700 mb-4" />
                  <Skeleton className="h-4 w-32 bg-gray-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
