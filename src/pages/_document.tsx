import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const GA_ID = "G-KSEB3D0KZ0";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />

        {/* CookieYes must load first so it can auto-block cookies. */}
        <Script
            id="cookieyes"
            src="https://cdn-cookieyes.com/client_data/90179d5b5383aeb23117b3100435fe53/script.js"
            strategy="beforeInteractive"
        />

        {/* Automatic Page Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
