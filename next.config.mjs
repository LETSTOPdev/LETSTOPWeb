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
            value: 'max-age=63072000; includeSubDomains; preload'
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
              // Allow resources from same origin by default
              "default-src 'self'",
              
              // Scripts - Allow all the analytics and tracking scripts
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com *.analytics.google.com *.googleapis.com *.gstatic.com *.doubleclick.net *.facebook.net *.facebook.com *.connect.facebook.net *.fbcdn.net cdn.jsdelivr.net cdn.enable.co.il web-sdk.smartlook.com amplify.outbrain.com cdn.taboola.com",
              
              // Styles - Allow inline styles and external style sources
              "style-src 'self' 'unsafe-inline' *.googleapis.com cdn.jsdelivr.net",
              
              // Fonts - Allow common font sources
              "font-src 'self' data: *.gstatic.com cdn.jsdelivr.net",
              
              // Images - Very permissive to allow all tracking pixels
              "img-src 'self' data: blob: https: http:",
              
              // Connect (XHR/fetch) - Allow analytics endpoints
              "connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com *.doubleclick.net *.facebook.com *.fbcdn.net web-sdk.smartlook.com amplify.outbrain.com cdn.taboola.com",
              
              // Frames - Allow embedding from trusted sources
              "frame-src 'self' *.googletagmanager.com *.doubleclick.net *.facebook.com",
              
              // Object/embed - Restrict for security
              "object-src 'none'",
              
              // Base URI - Restrict to same origin
              "base-uri 'self'",
              
              // Form submission - Restrict to same origin
              "form-action 'self'",
              
              // Frame ancestors - Prevent clickjacking
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
