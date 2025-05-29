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
    }
   ]
 },
}

export default nextConfig
