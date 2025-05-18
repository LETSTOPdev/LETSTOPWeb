import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"
import Script from "next/script"

export const metadata: Metadata = {
  title: "LETSTOP - Earn While Driving Safely",
  description:
    "Explore LETSTOP: Revolutionize Your Driving Experience. LETSTOP is the gateway to safer, smarter driving, utilizing advanced AI to reward responsible driving behavior. Engage with our dynamic platform to improve road safety and earn rewards. Learn more about how LETSTOP is transforming the journey towards safer roads through innovative technology and community engagement.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/favicon.png", sizes: "192x192", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://letstop.io/",
    title: "LETSTOP - Earn While Driving Safely",
    description:
      "Explore LETSTOP: Revolutionize Your Driving Experience. LETSTOP is the gateway to safer, smarter driving, utilizing advanced AI to reward responsible driving behavior. Engage with our dynamic platform to improve road safety and earn rewards. Learn more about how LETSTOP is transforming the journey towards safer roads through innovative technology and community engagement.",
    siteName: "LETSTOP",
    images: [
      {
        url: "/images/preload.png",
        width: 1200,
        height: 630,
        alt: "LETSTOP - Drive. Earn. Repeat.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LETSTOP - Earn While Driving Safely",
    description:
      "Explore LETSTOP: Revolutionize Your Driving Experience. LETSTOP is the gateway to safer, smarter driving, utilizing advanced AI to reward responsible driving behavior. Engage with our dynamic platform to improve road safety and earn rewards. Learn more about how LETSTOP is transforming the journey towards safer roads through innovative technology and community engagement.",
    images: ["/images/preload.png"],
  },
  verification: {
    other: {
      "facebook-domain-verification": "yfrttc8h0vv3vw7nbe1xaqa0d7rp73",
      coinzilla: "8671ca76f3b8ac847657cc14c0e09d85",
    },
  },
  other: {
    "apple-itunes-app": "app-id=6477782403, app-argument=https://apps.apple.com/app/letstop/id6477782403",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/network-sphere.png" as="image" type="image/png" fetchpriority="high" />
        <link rel="preload" href="/images/letstop-logo.png" as="image" type="image/png" fetchpriority="high" />
      </head>
      <body>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WQ7WJF8V');`}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQ7WJF8V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Finsweet Cookie Consent */}
        <Script src="https://cdn.enable.co.il/licenses/enable-L34345hl12wck5f3-1224-66126/init.js" />
        <Script
          async
          src="https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js"
          data-fs-cc-mode="informational"
        />

        {/* jQuery - Load with beforeInteractive to ensure it's available early */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          strategy="beforeInteractive"
          id="jquery"
        />

        {/* Custom Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .no-scroll {
            overflow: hidden;
          }
          
          body {
            overflow-x: hidden !important;
          }
          
          html {
            overflow-x: hidden !important;
          }
          
          .samsung-internet .title-5,
          .samsung-internet .typewriter-effect span,
          .samsung-internet .subtitle1,
          .samsung-internet .title-2,
          .samsung-internet .Plan-Heading .Plan-Text .Plan-Title, 
          .samsung-internet .Rewards text, 
          .samsung-internet .title,
          .samsung-internet .bold-text-10,
          .samsung-internet .plan-title{
            text-transform: none;
            -webkit-text-stroke-color: none;
            -webkit-text-fill-color: initial;
            -webkit-background-clip: initial;
            background-image: none;
            background:none ;
            background-clip: none;
            color: #dddddd;
          }
        `,
          }}
        />

        {/* Menu Toggle Script */}
        <Script id="jquery-menu-toggle" strategy="lazyOnload">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              // Check if jQuery is loaded
              if (typeof jQuery !== 'undefined') {
                jQuery(document).ready(function($) {
                  $('.menu').on('click', function(){
                    $('body').toggleClass('no-scroll');
                  });
                });
              } else {
                // Fallback to vanilla JS if jQuery is not available
                const menuButtons = document.querySelectorAll('.menu');
                if (menuButtons.length > 0) {
                  menuButtons.forEach(button => {
                    button.addEventListener('click', function() {
                      document.body.classList.toggle('no-scroll');
                    });
                  });
                }
              }
            });
          `}
        </Script>

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-K2EENPQ3DF" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K2EENPQ3DF');
          `}
        </Script>

        {/* Samsung Browser Detection */}
        <Script id="samsung-detection" strategy="lazyOnload">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              if (navigator.userAgent.includes('SamsungBrowser')) {
                document.body.classList.add('samsung-internet');
              }
            });
          `}
        </Script>

        {/* Smartlook - Fixed to properly initialize */}
        <Script id="smartlook" strategy="lazyOnload">
          {`
            (function(d) {
              var o = function() {};
              window.smartlook = o;
              o.api = [];
              o.api.push = function() { o.api[o.api.length] = arguments; };
              var h = d.getElementsByTagName('head')[0];
              var c = d.createElement('script');
              c.async = true;
              c.type = 'text/javascript';
              c.charset = 'utf-8';
              c.src = 'https://web-sdk.smartlook.com/recorder.js';
              h.appendChild(c);
            })(document);
            
            // Initialize after script is loaded
            setTimeout(function() {
              if (typeof window.smartlook === 'function') {
                window.smartlook('init', 'dacd4b0fbdbb04a087f09ebf74e16a021a627a5f', { region: 'eu' });
              }
            }, 1000);
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1182264549422469');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1182264549422469&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>

        {/* Outbrain */}
        <Script id="outbrain" strategy="lazyOnload" data-obct type="text/javascript">
          {`
            /* DO NOT MODIFY THIS CODE*/
            !function(_window, _document) {
              var OB_ADV_ID = '00d949d2e64e617fd5fed2316a582abf4b';
              if (_window.obApi) {
                var toArray = function(object) {
                  return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];
                };
                _window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));
                return;
              }
              var api = _window.obApi = function() {
                api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);
              };
              api.version = '1.1';
              api.loaded = true;
              api.marketerId = OB_ADV_ID;
              api.queue = [];
              var tag = _document.createElement('script');
              tag.async = true;
              tag.src = '//amplify.outbrain.com/cp/obtp.js';
              tag.type = 'text/javascript';
              var script = _document.getElementsByTagName('script')[0];
              script.parentNode.insertBefore(tag, script);
            }(window, document);
            obApi('track', 'PAGE_VIEW');
          `}
        </Script>

        {/* Taboola Pixel Code */}
        <Script id="taboola" strategy="lazyOnload">
          {`
            window._tfa = window._tfa || [];
            window._tfa.push({notify: 'event', name: 'page_view', id: 1663936});
            !function (t, f, a, x) {
                   if (!document.getElementById(x)) {
                      t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
                   }
            }(document.createElement('script'),
            document.getElementsByTagName('script')[0],
            '//cdn.taboola.com/libtrc/unip/1663936/tfa.js',
            'tb_tfa_script');
          `}
        </Script>

        <ClientLayout>{children}</ClientLayout>

        {/* Footer Script */}
        <Script id="notification-script" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const meuBotao = document.getElementById("meuBotao");
              if (meuBotao) {
                meuBotao.addEventListener("click", function() {
                  if (Notification.permission === "granted") {
                    new Notification("Not available yet! But is coming soon");
                  } else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(permission => {
                      if (permission === "granted") {
                        new Notification("Aqui está sua notificação!");
                      }
                    });
                  }
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  )
}
