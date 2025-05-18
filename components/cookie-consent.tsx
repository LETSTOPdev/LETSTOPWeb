"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

type CookieConsent = {
  necessary: boolean
  functional: boolean
  analytics: boolean
  advertising: boolean
  social: boolean
  accepted: boolean
  shown: boolean
}

const defaultConsent: CookieConsent = {
  necessary: true, // Always required
  functional: false,
  analytics: false,
  advertising: false,
  social: false,
  accepted: false,
  shown: false,
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent)
  const [showCustomize, setShowCustomize] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("cookie-consent")
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent)
        setConsent(parsedConsent)
      } catch (e) {
        console.error("Error parsing cookie consent", e)
      }
    } else {
      // If no choice has been made, show the banner
      setConsent({ ...defaultConsent, shown: true })
    }
  }, [])

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem("cookie-consent", JSON.stringify(newConsent))
    setConsent(newConsent)

    // Here you would typically trigger the appropriate cookie loading based on consent
    // For example, load Google Analytics only if analytics is true
  }

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
      social: true,
      accepted: true,
      shown: false,
    })
  }

  const handleRejectNonEssential = () => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      advertising: false,
      social: false,
      accepted: true,
      shown: false,
    })
  }

  const handleSavePreferences = () => {
    saveConsent({
      ...consent,
      accepted: true,
      shown: false,
    })
  }

  // Don't render anything on server or if user has already made a choice
  if (!mounted || !consent.shown) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/90 backdrop-blur-md border-t border-gray-800 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold mb-2">We Value Your Privacy</h3>
              <p className="text-sm text-gray-300 mb-2">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                By clicking "Accept All", you consent to our use of cookies as described in our{" "}
                <Link href="/cookies" className="text-primary underline hover:text-primary/80">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
            <button
              onClick={() => saveConsent({ ...consent, shown: false })}
              className="text-gray-400 hover:text-white"
              aria-label="Close cookie consent"
            >
              <X size={24} />
            </button>
          </div>

          {showCustomize ? (
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Customize Cookie Preferences</h4>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Strictly Necessary</p>
                    <p className="text-xs text-gray-400">Required for the website to function properly</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={consent.necessary}
                      disabled={true}
                      className="sr-only peer"
                      id="necessary-cookies"
                    />
                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-primary peer-disabled:cursor-not-allowed"></div>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Functional</p>
                    <p className="text-xs text-gray-400">Remember your preferences and settings</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={consent.functional}
                      onChange={() => setConsent({ ...consent, functional: !consent.functional })}
                      className="sr-only peer"
                      id="functional-cookies"
                    />
                    <label
                      htmlFor="functional-cookies"
                      className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-primary block cursor-pointer"
                    ></label>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5 pointer-events-none"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Analytics & Performance</p>
                    <p className="text-xs text-gray-400">Help us improve our website by collecting anonymous data</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={() => setConsent({ ...consent, analytics: !consent.analytics })}
                      className="sr-only peer"
                      id="analytics-cookies"
                    />
                    <label
                      htmlFor="analytics-cookies"
                      className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-primary block cursor-pointer"
                    ></label>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5 pointer-events-none"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Advertising & Targeting</p>
                    <p className="text-xs text-gray-400">Show you relevant ads based on your interests</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={consent.advertising}
                      onChange={() => setConsent({ ...consent, advertising: !consent.advertising })}
                      className="sr-only peer"
                      id="advertising-cookies"
                    />
                    <label
                      htmlFor="advertising-cookies"
                      className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-primary block cursor-pointer"
                    ></label>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5 pointer-events-none"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Social Media</p>
                    <p className="text-xs text-gray-400">Enable sharing and integration with social platforms</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={consent.social}
                      onChange={() => setConsent({ ...consent, social: !consent.social })}
                      className="sr-only peer"
                      id="social-cookies"
                    />
                    <label
                      htmlFor="social-cookies"
                      className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-primary block cursor-pointer"
                    ></label>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowCustomize(false)}
                  className="px-4 py-2 text-sm border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-3 justify-end">
              <button
                onClick={() => setShowCustomize(true)}
                className="px-4 py-2 text-sm border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
              >
                Customize
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="px-4 py-2 text-sm border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Accept All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
