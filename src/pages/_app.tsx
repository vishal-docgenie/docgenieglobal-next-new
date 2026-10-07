import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { useCallback, useEffect, useSyncExternalStore } from "react";
import { hasAnalyticsConsent, hasMarketingConsent } from "@/lib/consent";
import {
    GA_MEASUREMENT_ID,
    isAnalyticsAllowedHost,
    isLinkedInConfigured,
    LINKEDIN_PARTNER_ID,
} from "@/lib/gaConfig";
import { useGaPageViews } from "@/hooks/use-ga-pageviews";
import {
    getGaReadySnapshot,
    getGaReadyServerSnapshot,
    markGaReady,
    subscribeGaReady,
} from "@/lib/gaState";

const CLARITY_ID = "s2t1cyev98";
const APOLLO_APP_ID = "66d5ce5034d2cd02d2f50891";

const GA_SCRIPT_ID = "ga-lib";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

/* ---- Script loaders (each guarded to run at most once) ---- */

/**
 * Loads the GA4 library and configures the property.
 *
 * Phase 2A: this is now the ONLY path that loads gtag.js. _app.tsx previously
 * also rendered an unconditional <Script src=".../gtag/js"> which (a) bypassed
 * consent entirely and (b) was not matched by this function's #ga-lib guard, so
 * the library was fetched twice whenever analytics consent was granted.
 *
 * Marks GA ready in the gaState store once configured.
 */
function loadGA(): void {
    // Host gate: never configure or send on localhost/dev/staging.
    if (!isAnalyticsAllowedHost()) return;

    if (document.getElementById(GA_SCRIPT_ID)) {
        markGaReady();
        return;
    }

    const s = document.createElement("script");
    s.id = GA_SCRIPT_ID;
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s);

    // send_page_view:false hands page_view ownership to useGaPageViews, which
    // emits exactly one per entry and one per client-side route change.
    // Without this, gtag would also auto-send on config and double-count entry.
    window.gtag?.("config", GA_MEASUREMENT_ID, { send_page_view: false });

    markGaReady();
}

function loadClarity() {
    if (!isAnalyticsAllowedHost()) return;

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

/**
 * LinkedIn Insight Tag.
 *
 * Phase 2A: disabled. The repository value was the unreplaced placeholder
 * "YOUR_LINKEDIN_PARTNER_ID", so this tag has never recorded a conversion since
 * it was added on 22 Jun 2026. Rather than continue registering a bogus partner
 * ID, the loader now no-ops until NEXT_PUBLIC_LINKEDIN_PARTNER_ID supplies a
 * verified ID. No ID has been invented or inserted.
 *
 * The window.lintrk?.(...) calls in ContactForm and ScheduleDemo are left in
 * place and remain inert; they will start working once the ID is configured.
 */
function loadLinkedIn() {
    if (!isAnalyticsAllowedHost()) return;
    if (!isLinkedInConfigured()) return;
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
    if (!isAnalyticsAllowedHost()) return;
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

export default function App({ Component, pageProps }: AppProps) {
    // True once GA4 is loaded, configured, consented and on a production host.
    // Drives page_view emission in useGaPageViews. Read from an external store
    // so the consent effects never call setState synchronously.
    const gaReady = useSyncExternalStore(
        subscribeGaReady,
        getGaReadySnapshot,
        getGaReadyServerSnapshot
    );

    const loadScriptsForConsent = useCallback((accepted: string[]) => {
        if (accepted.includes("analytics") || accepted.includes("performance")) {
            loadGA();
            loadClarity();
        }
        if (accepted.includes("advertisement")) {
            loadLinkedIn();
            loadApollo();
        }
    }, []);

    // On mount: honour the choice already stored in the CookieYes cookie.
    // This is what makes returning, already-consented users load correctly.
    useEffect(() => {
        const accepted: string[] = [];
        if (hasAnalyticsConsent()) accepted.push("analytics");
        if (hasMarketingConsent()) accepted.push("advertisement");
        loadScriptsForConsent(accepted);
    }, [loadScriptsForConsent]);

    // Live changes via the banner or the revisit-consent widget.
    useEffect(() => {
        function handleConsentUpdate(e: any) {
            const accepted: string[] = e?.detail?.accepted || [];

            const analyticsLoaded =
                document.getElementById(GA_SCRIPT_ID) ||
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
    }, [loadScriptsForConsent]);

    // Single emitter of GA4 page_view: one on entry, one per route change.
    useGaPageViews(gaReady);

    return (
        <div className={poppins.className}>
            <Head>
                <link rel="stylesheet" href="/assets/original.css" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}
