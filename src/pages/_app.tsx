import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { trackEvent } from "@/lib/analytics";
import { Poppins } from "next/font/google";

const GA_ID = "G-KSEB3D0KZ0";
const CLARITY_ID = "s2t1cyev98";
const APOLLO_APP_ID = "66d5ce5034d2cd02d2f50891";
// LinkedIn Partner ID — get from LinkedIn Campaign Manager → Insight Tag
const LINKEDIN_PARTNER_ID = "YOUR_LINKEDIN_PARTNER_ID";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
    // const router = useRouter();

    // Manual Page Tracking
    // useEffect(() => {
    //     trackEvent({
    //         event: "page_view",
    //         page_path: router.asPath,
    //         page_title: document.title,
    //         page_location: window.location.href,
    //     });
    // }, [router.asPath]);

    return (
        <div className={poppins.className}>
            {/* Google Analytics 4 library. The gtag stub + config are initialized in
                _document.tsx; this just loads the heavy library that processes the queue. */}
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />

            {/* LinkedIn Insight Tag — required for conversion tracking & retargeting */}
            <Script id="linkedin-insight" strategy="afterInteractive">{`
                _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                (function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];
                var b=document.createElement("script");b.type="text/javascript";b.async=true;
                b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b,s)})(window.lintrk);
            `}</Script>

            {/* Microsoft Clarity — session recordings & heatmaps */}
            <Script id="ms-clarity" strategy="afterInteractive">{`
                (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}</Script>

            {/* Apollo — B2B visitor identification */}
            <Script id="apollo" strategy="afterInteractive">{`
                (function(){var s=document.createElement("script");
                s.async=1; s.defer=1;
                s.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+Math.random().toString(36).slice(2);
                s.onload=function(){window.trackingFunctions.onLoad({appId:"${APOLLO_APP_ID}"})};
                document.head.appendChild(s);
                })();
            `}</Script>

            <Head>
                <link rel="stylesheet" href="/assets/original.css" />
                
                {/* Start cookieyes banner */}
                <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/90179d5b5383aeb23117b3100435fe53/script.js"></script>
            </Head>
            <Component {...pageProps} />
        </div>
    );
}