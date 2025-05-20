import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800/50 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="/images/letstop-logo.png" alt="LETSTOP Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                LETSTOP
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Innovating road safety by rewarding safer, smarter driving through advanced AI technology.
            </p>
            <div className="flex space-x-4">
              {/* Telegram Icon */}
              <a
                href="https://t.me/LETST0P"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 800 800"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0V800H800V0H0ZM676.596 177.02L582.604 629.127C580.39 639.801 567.873 644.638 559.042 638.221L430.734 545.067C422.945 539.411 412.324 539.712 404.867 545.792L333.728 603.78C325.473 610.532 313.032 606.769 309.871 596.601L260.475 437.742L132.856 390.113C119.893 385.257 119.782 366.956 132.709 361.976L656.457 159.928C667.56 155.634 679.015 165.361 676.596 177.02Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M551.327 258.776L301.913 412.389C292.353 418.287 287.854 429.832 290.938 440.64L317.904 535.393C319.822 542.106 329.563 541.421 330.497 534.484L337.505 482.523C338.829 472.74 343.494 463.722 350.731 456.99L556.566 265.655C560.42 262.085 555.807 256.025 551.327 258.776Z"
                  />
                </svg>
              </a>

              {/* X (Twitter) Icon */}
              <a
                href="https://x.com/LETST0P"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M-2.09808e-05 -6.10352e-05C-1.90735e-05 43.5 -3.05176e-05 32.7999 -3.05176e-05 73.1428V438.857C-3.05176e-05 479.2 -1.83336e-08 473.5 -9.53674e-06 512H438.857C479.2 512 479.5 512 512 512V-1.14441e-05C479.5 0 479.2 -6.10352e-05 438.857 -6.10352e-05H-2.09808e-05ZM412.686 95.9999L294.057 231.543L433.6 416H324.343L238.857 304.114L140.914 416H86.6285L213.486 270.971L79.6571 95.9999H191.657L269.029 198.286L358.4 95.9999H412.686ZM369.486 383.543L175.314 126.743H142.971L339.314 383.543H369.371H369.486Z" />
                </svg>
              </a>

              {/* Medium Icon */}
              <a
                href="https://letstop.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                aria-label="Medium"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 456 456"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M0 0V456H456V0H0ZM378.83 108.04L354.37 131.49C352.26 133.1 351.22 135.74 351.65 138.35V310.63C351.21 313.24 352.26 315.89 354.37 317.49L378.25 340.94V346.09H258.13V340.94L282.87 316.92C285.3 314.49 285.3 313.77 285.3 310.06V170.81L216.51 345.52H207.21L127.12 170.81V287.91C126.45 292.83 128.09 297.79 131.55 301.35L163.73 340.38V345.53H72.49V340.38L104.67 301.35C108.11 297.78 109.65 292.79 108.82 287.91V152.5C109.2 148.74 107.77 145.02 104.96 142.49L76.36 108.03V102.88H165.17L233.82 253.43L294.17 102.88H378.83V108.04Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 transition-colors duration-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  App
                </Link>
              </li>
              <li>
                <Link href="/token" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Token
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://whitepaper.letstop.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 transition-colors duration-300">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/token-terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Token Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/wallet-terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Wallet Terms
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 transition-colors duration-300">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <a
                  href="mailto:support@letstop.io"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Support@letstop.io
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <a
                  href="mailto:Partnerships@letstop.io"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Partnerships@letstop.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800/50 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LETSTOP. All rights reserved.
          </p>
        </div>
      </div>
      {/* Cookie Settings Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const cookieSettingsBtn = document.getElementById('cookie-settings-btn');
              if (cookieSettingsBtn) {
                cookieSettingsBtn.addEventListener('click', function() {
                  // Show cookie settings by setting the consent to shown again
                  const savedConsent = localStorage.getItem('cookie-consent');
                  if (savedConsent) {
                    try {
                      const parsedConsent = JSON.parse(savedConsent);
                      parsedConsent.shown = true;
                      localStorage.setItem('cookie-consent', JSON.stringify(parsedConsent));
                      window.location.reload();
                    } catch (e) {
                      console.error('Error parsing cookie consent', e);
                    }
                  } else {
                    // If no consent exists, create a new one with default values
                    const defaultConsent = {
                      necessary: true,
                      functional: false,
                      analytics: false,
                      advertising: false,
                      social: false,
                      accepted: false,
                      shown: true
                    };
                    localStorage.setItem('cookie-consent', JSON.stringify(defaultConsent));
                    window.location.reload();
                  }
                });
              }
            });
          `,
        }}
      />
    </footer>
  )
}
