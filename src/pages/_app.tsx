import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import { hasAnalyticsConsent, hasMarketingConsent } from "@/lib/consent";

const GA_ID = "G-KSEB3D0KZ0";
const CLARITY_ID = "s2t1cyev98";
const APOLLO_APP_ID = "66d5ce5034d2cd02d2f50891";
const LINKEDIN_PARTNER_ID = "YOUR_LINKEDIN_PARTNER_ID";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

/* ---- Script loaders (each guarded to run at most once) ---- */

function loadGA() {
    if (document.getElementById("ga-lib")) return;
    const s = document.createElement("script");
    s.id = "ga-lib";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
}

function loadClarity() {
    const w = window as any;
    if (window.clarity || document.getElementById("clarity-loaded")) return;

    w.clarity = function (...args: any[]) {
        (w.clarity.q = w.clarity.q || []).push(args);
    };

    const s = document.createElement("script");
    s.id = "clarity-loaded";
    s.async = true;
    s.src = "https://www.clarity.ms/tag/" + CLARITY_ID;
    document.head.appendChild(s);
}

function loadLinkedIn() {
    if (document.getElementById("linkedin-loaded")) return;
    const w = window as any;

    w._linkedin_partner_id = LINKEDIN_PARTNER_ID;
    w._linkedin_data_partner_ids = w._linkedin_data_partner_ids || [];
    w._linkedin_data_partner_ids.push(w._linkedin_partner_id);

    if (!w.lintrk) {
        w.lintrk = function (a: any, b: any) {
            (w.lintrk.q = w.lintrk.q || []).push([a, b]);
        };
        w.lintrk.q = [];
    }

    const s = document.createElement("script");
    s.id = "linkedin-loaded";
    s.async = true;
    s.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    document.body.appendChild(s);
}

function loadApollo() {
    if (document.getElementById("apollo-loaded")) return;
    const s = document.createElement("script");
    s.id = "apollo-loaded";
    s.async = true;
    s.defer = true;
    s.src =
        "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" +
        Math.random().toString(36).slice(2);
    s.onload = function () {
        window.trackingFunctions?.onLoad({ appId: APOLLO_APP_ID });
    };
    document.head.appendChild(s);
}

function loadScriptsForConsent(accepted: string[]) {
    if (accepted.includes("analytics") || accepted.includes("performance")) {
        loadGA();
        loadClarity();
    }
    if (accepted.includes("advertisement")) {
        loadLinkedIn();
        loadApollo();
    }
}

export default function App({ Component, pageProps }: AppProps) {
    // Previous CookieYes Implementation
    // function loadLinkedIn() {
    //     if (document.getElementById("linkedin-loaded")) return;
    
    //     const w = window as any;
    
    //     w._linkedin_partner_id = LINKEDIN_PARTNER_ID;
    
    //     w._linkedin_data_partner_ids =
    //         w._linkedin_data_partner_ids || [];
    
    //     w._linkedin_data_partner_ids.push(
    //         w._linkedin_partner_id
    //     );
    
    //     if (!w.lintrk) {
    //         w.lintrk = function (a: any, b: any) {
    //             (w.lintrk.q = w.lintrk.q || []).push([a, b]);
    //         };
    //         w.lintrk.q = [];
    //     }
    
    //     const s = document.createElement("script");
    
    //     s.id = "linkedin-loaded";
    //     s.async = true;
    //     s.src =
    //         "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    
    //     document.body.appendChild(s);
    // }

    // function loadClarity() {
    //     const w = window as any;
    
    //     // Already initialized
    //     if (window.clarity || document.getElementById("clarity-loaded"))
    //         return;
    
    //     w.clarity = function (...args: any[]) {
    //         (w.clarity.q = w.clarity.q || []).push(args);
    //     };
    
    //     const script = document.createElement("script");
    
    //     script.id = "clarity-loaded";
    //     script.async = true;
    //     script.src =
    //         "https://www.clarity.ms/tag/" + CLARITY_ID;
    
    //     document.head.appendChild(script);
    // }

    // function loadApollo() {
    //     if (document.getElementById("apollo-loaded")) return;
    
    //     const s = document.createElement("script");
    
    //     s.id = "apollo-loaded";
    //     s.async = true;
    //     s.defer = true;
    
    //     s.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+Math.random().toString(36).slice(2);

    //     s.onload = function() {
    //         window.trackingFunctions?.onLoad({
    //             appId: APOLLO_APP_ID,
    //         });
    //     };
    
    //     document.head.appendChild(s);
    // }

    // useEffect(() => {
    //     if (hasMarketingConsent()) {
    //         loadLinkedIn();
    //         loadClarity();
    //         loadApollo();
    //     }
    // }, []);

    // useEffect(() => {
    //     function handleConsentUpdate(e: any) {
    //         const accepted = e?.detail?.accepted || [];
    
    //         if (accepted.includes("advertisement")) {
    //             loadLinkedIn();
    //             loadClarity();
    //             loadApollo();
    //         }
    //     }
    
    //     document.addEventListener(
    //         "cookieyes_consent_update",
    //         handleConsentUpdate
    //     );
    
    //     return () => {
    //         document.removeEventListener(
    //             "cookieyes_consent_update",
    //             handleConsentUpdate
    //         );
    //     };
    // }, []);

    // New CookieYes Implementation
    // On mount: honour the choice already stored in the CookieYes cookie.
    // This is what makes returning, already-consented users load correctly.
    useEffect(() => {
        const accepted: string[] = [];
        if (hasAnalyticsConsent()) accepted.push("analytics");
        if (hasMarketingConsent()) accepted.push("advertisement");
        loadScriptsForConsent(accepted);
    }, []);

    // Live changes via the banner or the revisit-consent widget.
    useEffect(() => {
        function handleConsentUpdate(e: any) {
            const accepted: string[] = e?.detail?.accepted || [];

            const analyticsLoaded =
                document.getElementById("ga-lib") ||
                document.getElementById("clarity-loaded");
            const adsLoaded =
                document.getElementById("linkedin-loaded") ||
                document.getElementById("apollo-loaded");

            // Withdrawal: a previously-loaded category is now rejected.
            // Scripts can't be cleanly unloaded, so reload for a hard reset.
            if (
                (analyticsLoaded && !accepted.includes("analytics")) ||
                (adsLoaded && !accepted.includes("advertisement"))
            ) {
                window.location.reload();
                return;
            }

            loadScriptsForConsent(accepted);
        }

        document.addEventListener("cookieyes_consent_update", handleConsentUpdate);
        return () =>
            document.removeEventListener(
                "cookieyes_consent_update",
                handleConsentUpdate
            );
    }, []);
    
    return (
        <div className={poppins.className}>
            {/* Google Analytics 4 library. The gtag stub + config are initialized in
                _document.tsx; this just loads the heavy library that processes the queue. */}
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />

            {/* Start cookieyes banner */}
            {/* <Script id="cookieyes" src="https://cdn-cookieyes.com/client_data/90179d5b5383aeb23117b3100435fe53/script.js" strategy="beforeInteractive"/> */}

            {/* Below scripts are now handled in CookieYes marketing consents */}
            {/* LinkedIn Insight Tag — required for conversion tracking & retargeting */}
            {/* <Script id="linkedin-insight" strategy="afterInteractive">{`
                _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                (function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];
                var b=document.createElement("script");b.type="text/javascript";b.async=true;
                b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b,s)})(window.lintrk);
            `}</Script> */}

            {/* Microsoft Clarity — session recordings & heatmaps */}
            {/* <Script id="ms-clarity" strategy="afterInteractive">{`
                (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}</Script> */}

            {/* Apollo — B2B visitor identification */}
            {/* <Script id="apollo" strategy="afterInteractive">{`
                (function(){var s=document.createElement("script");
                s.async=1; s.defer=1;
                s.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+Math.random().toString(36).slice(2);
                s.onload=function(){window.trackingFunctions.onLoad({appId:"${APOLLO_APP_ID}"})};
                document.head.appendChild(s);
                })();
            `}</Script> */}

            <Head>
                <link rel="stylesheet" href="/assets/original.css" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}