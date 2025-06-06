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
            value: "default-src 'self' data: blob:; " +
                   "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.googleapis.com https://*.gstatic.com https://*.doubleclick.net https://*.facebook.net https://*.facebook.com https://*.connect.facebook.net https://*.fbcdn.net https://cdn.jsdelivr.net https://cdn.enable.co.il https://web-sdk.smartlook.com https://amplify.outbrain.com https://cdn.taboola.com https://ajax.googleapis.com https://unpkg.com https://*.unpkg.com https://*.tradingview.com https://*.spline.design https://*.splinetool.com https://*.taboola.com https://*.outbrain.com https://*.smartlook.cloud https://prod.spline.design https://tr.outbrain.com https://trc.taboola.com https://wave.outbrain.com https://cdn.spline.design https://my.spline.design; " +
                   "script-src-elem 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.googleapis.com https://*.gstatic.com https://*.doubleclick.net https://*.facebook.net https://*.facebook.com https://*.connect.facebook.net https://*.fbcdn.net https://cdn.jsdelivr.net https://cdn.enable.co.il https://web-sdk.smartlook.com https://amplify.outbrain.com https://cdn.taboola.com https://ajax.googleapis.com https://unpkg.com https://*.unpkg.com https://*.tradingview.com https://*.spline.design https://*.splinetool.com https://*.taboola.com https://*.outbrain.com https://*.smartlook.cloud https://prod.spline.design https://tr.outbrain.com https://trc.taboola.com https://wave.outbrain.com https://cdn.spline.design https://my.spline.design; " +
                   "style-src 'self' 'unsafe-inline' https://*.googleapis.com https://cdn.jsdelivr.net https://*.spline.design https://cdn.spline.design; " +
                   "font-src 'self' data: https://*.gstatic.com https://cdn.jsdelivr.net https://*.spline.design https://cdn.spline.design; " +
                   "img-src 'self' data: blob: https: http:; " +
                   "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.doubleclick.net https://*.facebook.com https://*.fbcdn.net https://web-sdk.smartlook.com https://amplify.outbrain.com https://cdn.taboola.com https://*.outbrain.com https://*.taboola.com https://*.smartlook.cloud https://*.spline.design https://*.splinetool.com https://prod.spline.design https://region1.google-analytics.com https://analytics.google.com https://tr.outbrain.com https://trc.taboola.com https://manager.eu.smartlook.cloud https://wave.outbrain.com https://cdn.spline.design https://my.spline.design https://engine.spline.design wss://*.spline.design wss://prod.spline.design; " +
                   "frame-src 'self' https://*.googletagmanager.com https://*.doubleclick.net https://*.facebook.com https://*.tradingview.com https://*.taboola.com https://cdn.taboola.com https://*.spline.design https://my.spline.design; " +
                   "media-src 'self' data: blob: https://*.spline.design https://cdn.spline.design https://prod.spline.design; " +
                   "worker-src 'self' blob: data: https://*.spline.design https://cdn.spline.design https://prod.spline.design; " +
                   "child-src 'self' blob: https://*.spline.design https://my.spline.design https://cdn.spline.design https://prod.spline.design; " +
                   "object-src 'none'; " +
                   "base-uri 'self'; " +
                   "form-action 'self' https://*.google-analytics.com https://*.facebook.com; " +
                   "frame-ancestors 'self'; " +
                   "manifest-src 'self';"
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