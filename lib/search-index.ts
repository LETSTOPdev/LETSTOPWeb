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

// Comprehensive search index covering all website content
export const coreSearchIndex: SearchResultItem[] = [
  // HOME PAGE CONTENT
  {
    title: "LETSTOP - Drive Safe, Earn Crypto",
    path: "/",
    section: "Home",
    content:
      "LETSTOP is a revolutionary road safety app that rewards safe driving with cryptocurrency tokens. Our mission is to make roads safer worldwide through incentivized safe driving behavior.",
  },
  {
    title: "Welcome to LETSTOP",
    path: "/",
    section: "Home",
    content:
      "LETSTOP is the world's first app that rewards safe driving with cryptocurrency. Drive safely, earn STOP tokens, and join our global community of safe drivers.",
  },
  {
    title: "How LETSTOP Works",
    path: "/",
    section: "Home",
    content:
      "The LETSTOP app tracks your driving behavior using advanced AI technology. Safe driving earns you STOP tokens that can be exchanged for real-world rewards or traded on cryptocurrency exchanges.",
  },
  {
    title: "STOP Token Utility",
    path: "/",
    section: "Home",
    content:
      "STOP tokens can be used for in-app purchases, exchanged for rewards, or traded on cryptocurrency exchanges. The token is built on the Solana blockchain for fast and low-cost transactions.",
  },
  {
    title: "LETSTOP Partners",
    path: "/",
    section: "Home",
    content:
      "LETSTOP has partnered with leading organizations including Solana, VeChain, Beitar Jerusalem FC, NVIDIA, TEN, Airalo, and IBC Group to expand our ecosystem and provide more value to our users.",
  },
  {
    title: "Download LETSTOP App",
    path: "/",
    section: "Home",
    content:
      "Download the LETSTOP app from the App Store or Google Play Store and start earning rewards for safe driving today.",
  },

  // APP PAGE CONTENT
  {
    title: "LETSTOP Mobile App",
    path: "/app",
    section: "App",
    content:
      "The LETSTOP app tracks your driving behavior and rewards you with STOP tokens for safe driving habits. Download now from App Store or Google Play.",
  },
  {
    title: "App Features",
    path: "/app",
    section: "App",
    content:
      "Discover the features of the LETSTOP app including real-time tracking, rewards system, social features, and more.",
  },
  {
    title: "LETSTOP Rewards and Features",
    path: "/app",
    section: "App",
    content: "Earn rewards for safe driving, compete with friends, and track your progress with the LETSTOP app.",
  },
  {
    title: "Mobile App Download",
    path: "/app",
    section: "App",
    content:
      "Download the LETSTOP app from the App Store or Google Play Store and start earning cryptocurrency for safe driving.",
  },

  // TOKEN PAGE CONTENT
  {
    title: "STOP Token",
    path: "/token",
    section: "Token",
    content:
      "The STOP token is the native cryptocurrency of the LETSTOP ecosystem, built on Solana blockchain for fast and low-cost transactions.",
  },
  {
    title: "Solana Blockchain",
    path: "/token",
    section: "Token",
    content:
      "LETSTOP is built on the Solana blockchain, offering fast and low-cost transactions for STOP token holders.",
  },
  {
    title: "VeChain Integration",
    path: "/token",
    section: "Token",
    content: "LETSTOP leverages VeChain technology for supply chain transparency and verification in our ecosystem.",
  },
  {
    title: "Token Utility",
    path: "/token",
    section: "Token",
    content:
      "STOP tokens can be used for in-app purchases, exchanged for rewards, or traded on cryptocurrency exchanges.",
  },
  {
    title: "Token Economics",
    path: "/token",
    section: "Token",
    content: "Learn about the supply, distribution, and economic model of the STOP token ecosystem.",
  },

  // INSIGHTS PAGE CONTENT
  {
    title: "Road Safety Insights",
    path: "/insights",
    section: "Insights",
    content:
      "Explore global road safety statistics and how LETSTOP is making a difference in reducing accidents worldwide.",
  },
  {
    title: "Global Road Safety Statistics",
    path: "/insights",
    section: "Insights",
    content:
      "Learn about road safety statistics from around the world and how LETSTOP is working to improve them through incentivized safe driving.",
  },
  {
    title: "LETSTOP Impact Data",
    path: "/insights",
    section: "Insights",
    content: "Data and statistics showing the impact of LETSTOP on road safety in various regions around the world.",
  },

  // ABOUT PAGE CONTENT
  {
    title: "About LETSTOP",
    path: "/about",
    section: "About",
    content:
      "Learn about our mission, vision, and the team behind LETSTOP. We're dedicated to making roads safer worldwide through innovative technology.",
  },
  {
    title: "Our Mission",
    path: "/about",
    section: "About",
    content:
      "Our mission is to make roads safer worldwide through incentivized safe driving behavior and innovative technology solutions.",
  },
  {
    title: "Our Vision",
    path: "/about",
    section: "About",
    content:
      "Our vision is a world where road accidents are minimized through technology and incentives for safe driving practices.",
  },

  // TEAM MEMBERS
  {
    title: "Team Members",
    path: "/about",
    section: "Team",
    content:
      "Meet our dedicated team of professionals working to make roads safer, including Itay, Cfir, Dor, Almog, Nikita, Ore, Tomer, Tom, and Yakir.",
  },
  {
    title: "Itay - LETSTOP Team",
    path: "/about",
    section: "Team",
    content: "Itay is a key member of the LETSTOP team, contributing to our mission of making roads safer worldwide.",
  },
  {
    title: "Cfir - LETSTOP Team",
    path: "/about",
    section: "Team",
    content: "Cfir is a valued member of the LETSTOP team, working to revolutionize road safety through technology.",
  },
  {
    title: "Dor - LETSTOP Team",
    path: "/about",
    section: "Team",
    content: "Dor is an essential part of the LETSTOP team, contributing to our technology and vision for safer roads.",
  },
  {
    title: "Almog - LETSTOP Team",
    path: "/about",
    section: "Team",
    content: "Almog plays a crucial role in the LETSTOP team, helping to build our platform and expand our reach.",
  },
  {
    title: "Nikita - LETSTOP Team",
    path: "/about",
    section: "Team",
    content:
      "Nikita brings valuable skills to the LETSTOP team, contributing to our mission of incentivizing safe driving.",
  },
  {
    title: "Ore - LETSTOP Team",
    path: "/about",
    section: "Team",
    content: "Ore is a dedicated member of the LETSTOP team, working to make our vision of safer roads a reality.",
  },
  {
    title: "Tomer - LETSTOP Team",
    path: "/about",
    section: "Team",
    content: "Tomer contributes expertise to the LETSTOP team, helping to develop our innovative road safety platform.",
  },
  {
    title: "Tom - LETSTOP Team",
    path: "/about",
    section: "Team",
    content: "Tom is a valued member of the LETSTOP team, working on solutions to improve road safety worldwide.",
  },
  {
    title: "Yakir - LETSTOP Team",
    path: "/about",
    section: "Team",
    content:
      "Yakir brings passion and skills to the LETSTOP team, contributing to our mission of safer roads through technology.",
  },

  // FAQ PAGE CONTENT
  {
    title: "Frequently Asked Questions",
    path: "/faq",
    section: "FAQ",
    content: "Find answers to common questions about LETSTOP, the app, and the STOP token.",
  },
  {
    title: "LETSTOP Credits",
    path: "/faq",
    section: "FAQ",
    content:
      "LETSTOP credits are earned through safe driving and can be converted to STOP tokens. Learn how to earn and use credits in the app.",
  },
  {
    title: "Experience Points",
    path: "/faq",
    section: "FAQ",
    content:
      "Experience points track your progress in the LETSTOP app. Earn XP through consistent safe driving and unlock new features and rewards.",
  },
  {
    title: "App Features FAQ",
    path: "/faq",
    section: "FAQ",
    content: "Learn about the features of the LETSTOP app including tracking, rewards, social elements, and more.",
  },
  {
    title: "Cryptocurrency FAQ",
    path: "/faq",
    section: "FAQ",
    content:
      "Answers to common questions about cryptocurrency in the LETSTOP ecosystem, including how to earn, store, and use STOP tokens.",
  },
  {
    title: "Referral System",
    path: "/faq",
    section: "FAQ",
    content:
      "Learn how to refer friends to LETSTOP and earn rewards for each successful referral. Our referral program helps grow the community while rewarding existing users.",
  },
  {
    title: "Wallet FAQ",
    path: "/faq",
    section: "FAQ",
    content:
      "Information about the LETSTOP wallet, including how to set up, secure, and use it for managing your STOP tokens.",
  },

  // CONTACT PAGE CONTENT
  {
    title: "Contact Us",
    path: "/contact",
    section: "Contact",
    content:
      "Get in touch with the LETSTOP team for support, partnerships, or general inquiries. We're here to help with any questions about our app or ecosystem.",
  },
  {
    title: "Support and Help",
    path: "/contact",
    section: "Contact",
    content:
      "Need help with the LETSTOP app or have questions about our services? Contact our support team for assistance.",
  },
  {
    title: "Partnership Opportunities",
    path: "/contact",
    section: "Contact",
    content:
      "Interested in partnering with LETSTOP? Contact us to discuss potential collaboration opportunities and how we can work together.",
  },
   // Blog Page
  {
    title: "LETSTOP Blog",
    path: "/blog",
    section: "Blog",
    content:
      "Stay updated with the latest news, partnerships, product updates, and insights from LETSTOP. Discover how we're shaping the future of safe driving.",
  },
  // LEGAL PAGES
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
    section: "Legal",
    content:
      "Our privacy policy explains how we collect, use, and protect your personal information when you use the LETSTOP app and website.",
  },
  {
    title: "Terms of Service",
    path: "/terms",
    section: "Legal",
    content: "Our terms of service outline the rules and guidelines for using the LETSTOP platform, app, and website.",
  },
  {
    title: "Wallet Terms",
    path: "/wallet-terms",
    section: "Legal",
    content:
      "Specific terms related to the use of the LETSTOP wallet and cryptocurrency features within our ecosystem.",
  },
  {
    title: "Token Terms",
    path: "/token-terms",
    section: "Legal",
    content: "Terms and conditions specific to the STOP token and its usage within the LETSTOP ecosystem.",
  },
  {
    title: "Cookie Policy",
    path: "/cookies",
    section: "Legal",
    content:
      "Information about how LETSTOP uses cookies and similar technologies on our website and app to improve user experience.",
  },

  // WHITEPAPER
  {
    title: "Whitepaper",
    path: "https://whitepaper.letstop.io",
    section: "Documentation",
    external: true,
    content:
      "Read our comprehensive whitepaper detailing the LETSTOP ecosystem, tokenomics, and roadmap for the future.",
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
