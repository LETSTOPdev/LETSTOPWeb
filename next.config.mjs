/** @type {import('next').NextConfig} */
const nextConfig = {
 eslint: {
   ignoreDuringBuilds: true,
 },
 typescript: {
   ignoreBuildErrors: true,
 },
 images: {
   unoptimized: true,
 },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ajax.googleapis.com https://cdn.jsdelivr.net https://cdn.enable.co.il https://web-sdk.smartlook.com https://connect.facebook.net https://amplify.outbrain.com https://cdn.taboola.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net",
              "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net",
              "img-src 'self' data: blob: https: http:",
              "connect-src 'self' https://www.google-analytics.com https://web-sdk.smartlook.com https://www.facebook.com https://amplify.outbrain.com https://cdn.taboola.com",
              "frame-src 'self' https://www.googletagmanager.com https://www.facebook.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'"
            ].join('; ')
          }
        ],
      },
    ]
  },
 async redirects() {
   return [
     {
       source: '/welcome-screen',
       destination: '/',
       permanent: true,
     },
     {
       source: '/MasterSankerGift',
       destination: 'https://letstop.page.link/Kjmvdb3AKSt7vpT39',
       permanent: true,
     },
     {
       source: '/understanding-the-letstop-app-page',
       destination: '/app',
       permanent: true,
     },
     {
       source: '/privacy-and-policy',
       destination: '/privacy-policy',
       permanent: true,
     },
     {
       source: '/about',
       destination: '/about-us',
       permanent: true,
     },
     {
       source: '/contacts',
       destination: '/contact',
       permanent: true,
     },
     {
       source: '/terms-and-conditions',
       destination: '/terms',
       permanent: true,
     },
         {
      source: '/he/privacy-policy',
      destination: '/privacy-policy',
      permanent: true,
    },
    {
      source: '/he/terms',
      destination: '/terms',
      permanent: true,
    },
    {
      source: '/he/terms-of-use',
      destination: '/terms',
      permanent: true,
    }
   ]
 },
}

export default nextConfig
