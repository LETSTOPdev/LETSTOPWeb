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
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' data:",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://web-sdk.smartlook.com https://amplify.outbrain.com https://cdn.taboola.com https://cdn.enable.co.il https://cdn.jsdelivr.net https://ajax.googleapis.com https://www.facebook.com;",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;",
              "font-src 'self' data: https://fonts.gstatic.com https://cdn.jsdelivr.net;",
              "img-src 'self' data: blob: https: http:;",
              "connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://connect.facebook.net https://web-sdk.smartlook.com https://amplify.outbrain.com https://cdn.taboola.com https://*.outbrain.com https://*.taboola.com https://www.facebook.com https://*.facebook.com https://cdn.enable.co.il https://api.smartlook.com https://*.smartlook.com https://region1.google-analytics.com https://analytics.google.com;",
              "frame-src 'self' https://www.googletagmanager.com https://www.facebook.com https://*.facebook.com https://*.taboola.com https://cdn.taboola.com;",
              "media-src 'self' data: blob:;",
              "worker-src 'self' blob:;",
              "child-src 'self' blob:;",
              "object-src 'none';",
              "base-uri 'self';",
              "form-action 'self' https://www.google-analytics.com https://facebook.com https://*.facebook.com;",
              "frame-ancestors 'self';",
              "manifest-src 'self';"
            ].join(' ')
          }
        ]
      }
    ];
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
     },
     {
      source: '/terms-of-use',
      destination: '/terms',
      permanent: true,
     }     
   ]
 },
}

export default nextConfig
