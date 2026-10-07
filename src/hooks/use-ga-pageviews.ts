import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { trackEvent } from "@/lib/analytics";

/**
 * GA4 page_view tracking for Next.js Pages Router client-side navigation.
 *
 * Phase 2A restoration. History of this code path:
 *   - pre-22 Jun 2026: a RouteChangeTracker fired page_view on
 *     routeChangeComplete, but gtag('config', {send_page_view:false}) meant the
 *     *entry* page view was never recorded.
 *   - 22 Jun (ba61c8f): replaced with a gtag('config') call keyed on
 *     router.asPath, which correctly covered entry + route changes.
 *   - 26 Jun (28a6438): _app.tsx was recreated from scratch and this effect was
 *     left commented out as an undocumented side-effect of an unrelated commit.
 *     From then until this change, ONLY the initial document load produced a
 *     page_view; every <Link> navigation produced none.
 *
 * Design: GA is configured with send_page_view:false (see loadGA in _app.tsx),
 * so this hook is the single emitter of page_view. Two non-overlapping effects:
 *   1. the entry page view, fired once, as soon as GA is ready;
 *   2. one page view per routeChangeComplete.
 * routeChangeComplete does not fire on initial load, so the two never collide
 * and A -> B -> A navigation is counted correctly (no path-equality dedupe).
 *
 * @param gaReady true once GA is loaded, consented, and on an allowed host.
 */
export function useGaPageViews(gaReady: boolean) {
    const router = useRouter();

    // Guards the entry page view. A ref, not state, so it never re-renders and
    // never resets on consent changes mid-session.
    const entrySentRef = useRef(false);

    // next/head commits asynchronously, so document.title can still hold the
    // previous page's title at routeChangeComplete. Two animation frames puts
    // the send after the commit+paint that applies the new <title>.
    const sendPageView = (asPath: string) => {
        requestAnimationFrame(() =>
            requestAnimationFrame(() => {
                trackEvent({
                    event: "page_view",
                    page_path: asPath,
                    page_title: document.title,
                    page_location: window.location.href,
                });
            })
        );
    };

    // 1. Entry page view. Deferred until gaReady so a consent grant that lands
    //    after mount still records the page the visitor actually arrived on.
    useEffect(() => {
        if (!gaReady || entrySentRef.current) return;
        entrySentRef.current = true;
        sendPageView(router.asPath);
    }, [gaReady, router.asPath]);

    // 2. One page view per completed client-side navigation.
    useEffect(() => {
        if (!gaReady) return;
        const handleRouteChange = (url: string) => sendPageView(url);
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => router.events.off("routeChangeComplete", handleRouteChange);
    }, [gaReady, router.events]);
}
