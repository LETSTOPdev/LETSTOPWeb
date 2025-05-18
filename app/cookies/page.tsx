import Link from "next/link"

export const metadata = {
  title: "Cookie Policy | LETSTOP",
  description: "Learn about how LETSTOP uses cookies and similar technologies to operate and improve our services.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Cookie Policy</h1>
        <div className="text-gray-300 space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
            <p>
              Thank you for visiting letstop.io (the "Site") and using the LETSTOP mobile application (the "App"),
              operated by LETSTOP Ltd. ("LETSTOP," "we," "our," or "us").
            </p>
            <p>
              We use cookies and similar technologies—including SDK storage, local storage, pixels, beacons, tags, and
              device identifiers (collectively, "cookies")—to operate and improve our services and to help protect both
              you and LETSTOP. This Cookie Policy explains what cookies are, why we use them, the types we use
              (including those from trusted partners), and how you can manage or disable them.
            </p>
            <p>
              When cookies involve data that identifies or can identify you ("Personal Data"), we process it in
              accordance with our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Notice
              </Link>
              , applying protections under the EU GDPR, UK GDPR, California CCPA/CPRA, and other relevant laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. What Are Cookies?</h2>
            <p>
              Cookies are small text files or code snippets stored on your device when you visit a website or use a
              mobile app. They allow the service to recognize your device, remember your preferences, authenticate
              sessions, and collect analytics.
            </p>
            <p className="font-medium text-white">Categories of cookies:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Criterion</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Options</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">Purpose</td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      Strictly-Necessary & Security, Functional, Analytics & Performance, Advertising & Targeting,
                      Social-Media Integration
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">Based on functionality</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">Duration</td>
                    <td className="py-2 px-4 border-b border-gray-700">Session, Persistent</td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      Session: temporary; Persistent: remain until expired or deleted
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">Provenance</td>
                    <td className="py-2 px-4 border-b border-gray-700">First-Party, Third-Party</td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      Set by LETSTOP or by integrated third parties
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Why We Use Cookies</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Category</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Purpose (examples)</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">Strictly-Necessary & Security</td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      Authenticate sessions, enable APIs, load balance, block bots
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">Legitimate interest; contract performance</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">Functional</td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      Store preferences, language, in-App states, cookie choices
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">Legitimate interest; consent where required</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">Analytics & Performance</td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      Understand usage, A/B testing, feature adoption
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">Consent</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">Advertising & Targeting</td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      Measure campaigns, limit frequency, personalize (Web only)
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">Consent</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">Social-Media Integration</td>
                    <td className="py-2 px-4 border-b border-gray-700">Enable login/sharing with platforms</td>
                    <td className="py-2 px-4 border-b border-gray-700">Consent; contract performance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm italic">
              Note: We do not serve behavior-based ads in the mobile App. In the EU/UK, Advertising cookies are disabled
              by default.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Detailed Cookie & SDK List</h2>

            <h3 className="text-xl font-medium text-white">4.1 Strictly-Necessary & Security</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Name / ID</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Domain / SDK</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Purpose</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Expiry</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">ls_session_id</td>
                    <td className="py-2 px-4 border-b border-gray-700">letstop.io</td>
                    <td className="py-2 px-4 border-b border-gray-700">Maintains logged-in session</td>
                    <td className="py-2 px-4 border-b border-gray-700">Session</td>
                    <td className="py-2 px-4 border-b border-gray-700">First-party</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">XSRF-TOKEN</td>
                    <td className="py-2 px-4 border-b border-gray-700">letstop.io</td>
                    <td className="py-2 px-4 border-b border-gray-700">CSRF protection</td>
                    <td className="py-2 px-4 border-b border-gray-700">Session</td>
                    <td className="py-2 px-4 border-b border-gray-700">First-party</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">cf_clearance</td>
                    <td className="py-2 px-4 border-b border-gray-700">cloudflare.com</td>
                    <td className="py-2 px-4 border-b border-gray-700">Security check passed</td>
                    <td className="py-2 px-4 border-b border-gray-700">1 year</td>
                    <td className="py-2 px-4 border-b border-gray-700">Third-party</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">__cf_bm</td>
                    <td className="py-2 px-4 border-b border-gray-700">cloudflare.com</td>
                    <td className="py-2 px-4 border-b border-gray-700">Bot management</td>
                    <td className="py-2 px-4 border-b border-gray-700">30 min</td>
                    <td className="py-2 px-4 border-b border-gray-700">Third-party</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">firebase_instance_id</td>
                    <td className="py-2 px-4 border-b border-gray-700">Firebase SDK (App)</td>
                    <td className="py-2 px-4 border-b border-gray-700">Push routing ID</td>
                    <td className="py-2 px-4 border-b border-gray-700">Persistent</td>
                    <td className="py-2 px-4 border-b border-gray-700">First-party</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-white">4.2 Functional</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Name / ID</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Domain / SDK</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Purpose</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Expiry</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">ls_language</td>
                    <td className="py-2 px-4 border-b border-gray-700">letstop.io</td>
                    <td className="py-2 px-4 border-b border-gray-700">Language setting</td>
                    <td className="py-2 px-4 border-b border-gray-700">6 months</td>
                    <td className="py-2 px-4 border-b border-gray-700">First-party</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">ls_theme</td>
                    <td className="py-2 px-4 border-b border-gray-700">letstop.io</td>
                    <td className="py-2 px-4 border-b border-gray-700">UI theme preference</td>
                    <td className="py-2 px-4 border-b border-gray-700">6 months</td>
                    <td className="py-2 px-4 border-b border-gray-700">First-party</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">adjust_session</td>
                    <td className="py-2 px-4 border-b border-gray-700">Adjust SDK (App)</td>
                    <td className="py-2 px-4 border-b border-gray-700">Attribution tracking</td>
                    <td className="py-2 px-4 border-b border-gray-700">14 days</td>
                    <td className="py-2 px-4 border-b border-gray-700">Third-party</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-white">4.3 Analytics & Performance</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Name / ID</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Domain / SDK</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Purpose</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Expiry</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">_ga, _ga_&lt;ID&gt;</td>
                    <td className="py-2 px-4 border-b border-gray-700">letstop.io</td>
                    <td className="py-2 px-4 border-b border-gray-700">Google Analytics user ID</td>
                    <td className="py-2 px-4 border-b border-gray-700">13 months</td>
                    <td className="py-2 px-4 border-b border-gray-700">Third-party</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">_gid</td>
                    <td className="py-2 px-4 border-b border-gray-700">letstop.io</td>
                    <td className="py-2 px-4 border-b border-gray-700">Google Analytics daily ID</td>
                    <td className="py-2 px-4 border-b border-gray-700">24 hours</td>
                    <td className="py-2 px-4 border-b border-gray-700">Third-party</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">_gat</td>
                    <td className="py-2 px-4 border-b border-gray-700">letstop.io</td>
                    <td className="py-2 px-4 border-b border-gray-700">Throttles GA requests</td>
                    <td className="py-2 px-4 border-b border-gray-700">1 min</td>
                    <td className="py-2 px-4 border-b border-gray-700">Third-party</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">_hjSessionUser_&lt;ID&gt;</td>
                    <td className="py-2 px-4 border-b border-gray-700">Hotjar</td>
                    <td className="py-2 px-4 border-b border-gray-700">UX heatmaps (anonymized)</td>
                    <td className="py-2 px-4 border-b border-gray-700">365 days</td>
                    <td className="py-2 px-4 border-b border-gray-700">Third-party</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">amplitude_id_&lt;APIKEY&gt;</td>
                    <td className="py-2 px-4 border-b border-gray-700">Amplitude SDK (App)</td>
                    <td className="py-2 px-4 border-b border-gray-700">Funnel & usage tracking</td>
                    <td className="py-2 px-4 border-b border-gray-700">13 months</td>
                    <td className="py-2 px-4 border-b border-gray-700">Third-party</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-white">4.4 Advertising & Targeting (Web only)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Name</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Domain / Provider</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Purpose</th>
                    <th className="py-2 px-4 border-b border-gray-700 text-left">Expiry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">_fbp</td>
                    <td className="py-2 px-4 border-b border-gray-700">Facebook Pixel</td>
                    <td className="py-2 px-4 border-b border-gray-700">Paid campaign measurement</td>
                    <td className="py-2 px-4 border-b border-gray-700">90 days</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">li_fat_id</td>
                    <td className="py-2 px-4 border-b border-gray-700">LinkedIn</td>
                    <td className="py-2 px-4 border-b border-gray-700">B2B ad attribution</td>
                    <td className="py-2 px-4 border-b border-gray-700">30 days</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">tt_pixel_id</td>
                    <td className="py-2 px-4 border-b border-gray-700">TikTok</td>
                    <td className="py-2 px-4 border-b border-gray-700">Influencer campaign tracking</td>
                    <td className="py-2 px-4 border-b border-gray-700">13 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Mobile App Identifiers</h2>
            <p>The App may access:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>IDFA (iOS): Only if you opt-in via App Tracking Transparency</li>
              <li>AAID (Android): Subject to your system-level consent</li>
            </ul>
            <p>If you deny access, we use fallback identifiers that do not track you personally.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Managing Cookies & Mobile Identifiers</h2>

            <h3 className="text-xl font-medium text-white">6.1 Web</h3>
            <p>On first visit, you'll see a cookie banner where you can:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize preferences per category</li>
            </ul>
            <p>Change settings anytime via "Cookie Settings" in the footer. To manage cookies manually:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Edge
                </a>
              </li>
            </ul>
            <p className="text-sm italic">
              Note: Blocking Strictly-Necessary cookies may break login and core features.
            </p>

            <h3 className="text-xl font-medium text-white">6.2 Mobile</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>iOS: Settings → Privacy & Security → Tracking → Toggle LETSTOP</li>
              <li>Android: Settings → Privacy → Ads → Delete Advertising ID</li>
            </ul>
            <p>Clear App data in OS settings to reset SDK storage.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Legal Bases & Transfers</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Strictly-Necessary: Legitimate interest; contract performance</li>
              <li>Functional, Analytics, Advertising, Social-Media: Consent (Art. 6(1)(a) GDPR), revocable anytime</li>
            </ul>
            <p>
              For international data transfers, we use Standard Contractual Clauses, adequacy decisions, and certified
              vendors (e.g., ISO 27001, SOC 2).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">8. Third-Party Links & Embeds</h2>
            <p>
              The Site and App may embed third-party content (e.g., X posts, YouTube). Those providers may set their own
              cookies. Please review their respective cookie policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">9. Updates</h2>
            <p>
              We may update this Cookie Policy for legal, technical, or business reasons. When we do, we update the
              "Last updated" date and may ask for renewed consent if required.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">10. Contact Us</h2>
            <p>For any questions about our cookie practices, contact:</p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@letstop.io" className="text-primary hover:underline">
                privacy@letstop.io
              </a>
            </p>
            <p>
              Mail: LETSTOP Ltd.,
              <br />
              Quijano Chambers
              <br />
              P.O. Box 3159
              <br />
              Road Town, Tortola
              <br />
              British Virgin Islands
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
