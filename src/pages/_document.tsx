import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

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

        {/* gtag command queue only — no measurement ID, no config, no network.
            Phase 2A: this file used to call gtag('config', '<ID>') directly,
            which (a) hardcoded the production ID a second time, (b) ran on every
            host including localhost, and (c) sent an automatic page_view that
            could not be coordinated with route changes.

            The stub still lives here so that calls queued before the GA library
            finishes loading are not lost. Configuration, the host/consent gate
            and all page_view sends are now owned by _app.tsx. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
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
