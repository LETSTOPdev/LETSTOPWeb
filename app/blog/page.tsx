import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              LETSTOP Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Stay updated with the latest news, insights, and developments from the LETSTOP ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-colors duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-full">
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <p className="text-lg font-medium">Featured article image will appear here</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="ml-4 text-gray-500 dark:text-gray-400 text-sm">Coming Soon</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  Blog content coming soon
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
                  We're working on bringing you insightful articles about road safety, blockchain technology, and the
                  future of driving. Stay tuned for updates!
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">LT</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">
                      LETSTOP Team
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      Coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center transition-colors duration-300">
            Blog Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Road Safety",
                description: "Articles about improving road safety and reducing accidents",
                icon: "🛣️",
              },
              {
                title: "Technology",
                description: "Insights into our AI technology and how it works",
                icon: "🤖",
              },
              {
                title: "Token Updates",
                description: "Latest news and updates about the STOP token",
                icon: "🪙",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                  {category.description}
                </p>
                <div className="text-primary font-medium flex items-center">
                  <span>Coming soon</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
                Get the latest updates, news, and insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
