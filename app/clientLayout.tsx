"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isWelcomeScreen = pathname === "/"

  return (
    <html lang="en" suppressHydrationWarning className="bg-black">
      <head>
        <style>{`
          :root {
            color-scheme: dark;
          }
          body {
            background-color: black;
          }
        `}</style>
      </head>
      <body className={`${inter.className} text-white`}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <div className="flex flex-col min-h-screen">
            {!isWelcomeScreen && <Navbar />}
            <main className="flex-grow">{children}</main>
            {!isWelcomeScreen && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
