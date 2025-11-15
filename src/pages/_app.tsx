import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";

const GA_ID = "G-KSEB3D0KZ0";
const CLARITY_ID = "s2t1cyev98";
const APOLLO_APP_ID = "66d5ce5034d2cd02d2f50891";

function RouteChangeTracker() {
    const router = useRouter();
    useEffect(() => {
        const handler = (url: string) => {
            // @ts-ignore
            window.gtag?.("event", "page_view", { page_path: url });
        };
        router.events.on("routeChangeComplete", handler);
        return () => router.events.off("routeChangeComplete", handler);
    }, [router.events]);
    return null;
}

const poppins = Poppins({
    subsets: ["latin"],
    // include all weights used on the original site
    weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={poppins.className}>
            {/* Google Analytics */}
            {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
            `}</Script> */}

            {/* Microsoft Clarity */}
            {/* <Script id="ms-clarity" strategy="afterInteractive">{`
                (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}</Script> */}

            {/* Apollo website tracker */}
            {/* <Script id="apollo" strategy="afterInteractive">{`
                (function(){var s=document.createElement("script");
                s.async=1; s.defer=1;
                s.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+Math.random().toString(36).slice(2);
                s.onload=function(){window.trackingFunctions.onLoad({appId:"${APOLLO_APP_ID}"})};
                document.head.appendChild(s);
                })();
            `}</Script> */}

            {/* <RouteChangeTracker /> */}
            <Head>
                {/* <script type="module" src="/assets/original.js"></script> */}
                <link rel="stylesheet" href="/assets/original.css" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}
