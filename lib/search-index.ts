// This file contains the search index data structure and helper functions

// Define the search result item type
export interface SearchResultItem {
  title: string
  path: string
  section: string
  content: string
  external?: boolean
  excerpt?: string
  matchStart?: number
  matchEnd?: number
  score?: number
}

// Core search index - this is a smaller set of key pages and sections
// The dynamic search will supplement this with content from the actual pages
export const coreSearchIndex: SearchResultItem[] = [
  // Main sections
  {
    title: "Home",
    path: "/",
    section: "Main",
    content: "LETSTOP is a revolutionary road safety app that rewards safe driving with cryptocurrency tokens.",
  },
  {
    title: "App",
    path: "/app",
    section: "Main",
    content: "The LETSTOP app tracks your driving behavior and rewards you with STOP tokens for safe driving habits.",
  },
  {
    title: "Token",
    path: "/token",
    section: "Main",
    content: "The STOP token is the native cryptocurrency of the LETSTOP ecosystem, built on Solana blockchain.",
  },
  {
    title: "Insights",
    path: "/insights",
    section: "Main",
    content: "Explore global road safety statistics and how LETSTOP is making a difference.",
  },
  {
    title: "About Us",
    path: "/about",
    section: "Main",
    content: "Learn about our mission, vision, and the team behind LETSTOP.",
  },
  {
    title: "FAQ",
    path: "/faq",
    section: "Main",
    content: "Find answers to common questions about LETSTOP, the app, and the STOP token.",
  },
  {
    title: "Contact",
    path: "/contact",
    section: "Main",
    content: "Get in touch with the LETSTOP team for support, partnerships, or general inquiries.",
  },
  {
    title: "Whitepaper",
    path: "https://whitepaper.letstop.io",
    section: "Documentation",
    external: true,
    content: "Read our comprehensive whitepaper detailing the LETSTOP ecosystem, tokenomics, and roadmap.",
  },

  // Team members
  {
    title: "Team Members",
    path: "/about",
    section: "Team",
    content:
      "Meet our dedicated team of professionals working to make roads safer, including Itay, Cfir, Itamar, Dor, Almog, Nikita, Ore, Tomer, Tom, and Yakir.",
  },

  // Legal pages
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
    section: "Legal",
    content: "Our privacy policy explains how we collect, use, and protect your personal information.",
  },
  {
    title: "Terms of Service",
    path: "/terms",
    section: "Legal",
    content: "Our terms of service outline the rules and guidelines for using the LETSTOP platform.",
  },
  {
    title: "Wallet Terms",
    path: "/wallet-terms",
    section: "Legal",
    content: "Specific terms related to the use of the LETSTOP wallet and cryptocurrency features.",
  },
  {
    title: "Token Terms",
    path: "/token-terms",
    section: "Legal",
    content: "Terms and conditions specific to the STOP token and its usage within our ecosystem.",
  },
  {
    title: "Cookie Policy",
    path: "/cookies",
    section: "Legal",
    content: "Information about how LETSTOP uses cookies and similar technologies on our website and app.",
  },
]

// Function to search the index
export function searchIndex(query: string, index: SearchResultItem[]): SearchResultItem[] {
  if (query.trim().length <= 1) {
    return []
  }

  const normalizedQuery = query.toLowerCase().trim()

  // Score-based search results
  const scoredResults = index.map((item) => {
    let score = 0
    let excerpt = ""
    let matchStart = 0
    let matchEnd = 0

    // Title match (highest priority)
    if (item.title.toLowerCase().includes(normalizedQuery)) {
      score += 10
      // Exact title match or starts with query
      if (item.title.toLowerCase() === normalizedQuery) {
        score += 5
      } else if (item.title.toLowerCase().startsWith(normalizedQuery)) {
        score += 3
      }
    }

    // Content match
    if (item.content.toLowerCase().includes(normalizedQuery)) {
      score += 5

      // Find the position of the query in the content for excerpt
      const position = item.content.toLowerCase().indexOf(normalizedQuery)
      const start = Math.max(0, position - 30)
      const end = Math.min(item.content.length, position + normalizedQuery.length + 30)

      // Create excerpt with highlighted query
      const before = item.content.substring(start, position)
      const match = item.content.substring(position, position + normalizedQuery.length)
      const after = item.content.substring(position + normalizedQuery.length, end)

      excerpt = (start > 0 ? "..." : "") + before + match + after + (end < item.content.length ? "..." : "")
      matchStart = before.length + (start > 0 ? 3 : 0)
      matchEnd = before.length + match.length + (start > 0 ? 3 : 0)
    }

    // Section match
    if (item.section.toLowerCase().includes(normalizedQuery)) {
      score += 3
    }

    // Path match (for direct URL searches)
    if (item.path.toLowerCase().includes(normalizedQuery)) {
      score += 2
    }

    return {
      ...item,
      score,
      excerpt: excerpt || undefined,
      matchStart: matchStart || undefined,
      matchEnd: matchEnd || undefined,
    }
  })

  // Filter out zero scores and sort by score (descending)
  return scoredResults
    .filter((item) => item.score! > 0)
    .sort((a, b) => b.score! - a.score!)
    .slice(0, 8) // Limit to top 8 results
}

// Function to dynamically extract content from HTML elements
export function extractContentFromDOM(): SearchResultItem[] {
  if (typeof document === "undefined") {
    return [] // Return empty array if running on server
  }

  const extractedItems: SearchResultItem[] = []

  try {
    // Extract headings and their content
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    headings.forEach((heading) => {
      const title = heading.textContent?.trim() || ""
      if (title) {
        // Get the next paragraph or div for content
        let content = ""
        const nextElement = heading.nextElementSibling
        if (nextElement && (nextElement.tagName === "P" || nextElement.tagName === "DIV")) {
          content = nextElement.textContent?.trim() || ""
        }

        // Determine section from page or parent elements
        let section = document.title.split("-")[0]?.trim() || "Page"

        // Try to get section from parent elements with IDs or data attributes
        let parent = heading.parentElement
        while (parent && !section) {
          if (parent.id || parent.dataset.section) {
            section = parent.id || parent.dataset.section || section
            break
          }
          parent = parent.parentElement
        }

        extractedItems.push({
          title,
          path: window.location.pathname,
          section,
          content: content || title, // Use title as content if no content found
        })
      }
    })

    // Extract team member names if on about page
    if (window.location.pathname.includes("/about")) {
      const teamMembers = document.querySelectorAll("[data-team-member], .team-member, .team-card")
      teamMembers.forEach((member) => {
        const name = member.querySelector("h3, h4, .name")?.textContent?.trim() || ""
        const role = member.querySelector("p, .role, .position")?.textContent?.trim() || ""

        if (name) {
          extractedItems.push({
            title: `${name} - LETSTOP Team`,
            path: "/about",
            section: "Team",
            content: `${name} is a member of the LETSTOP team. ${role}`,
          })
        }
      })
    }

    // Extract FAQ items if on FAQ page
    if (window.location.pathname.includes("/faq")) {
      const faqItems = document.querySelectorAll(".faq-item, .accordion-item, [data-faq]")
      faqItems.forEach((item) => {
        const question = item.querySelector(".question, h3, summary")?.textContent?.trim() || ""
        const answer = item.querySelector(".answer, p, .content")?.textContent?.trim() || ""

        if (question && answer) {
          extractedItems.push({
            title: question,
            path: "/faq",
            section: "FAQ",
            content: answer,
          })
        }
      })
    }

    return extractedItems
  } catch (error) {
    console.error("Error extracting content from DOM:", error)
    return []
  }
}

// Combine core index with dynamically extracted content
export function getFullSearchIndex(): SearchResultItem[] {
  const dynamicContent = extractContentFromDOM()
  return [...coreSearchIndex, ...dynamicContent]
}
