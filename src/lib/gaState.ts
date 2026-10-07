// Tiny external store for "is GA4 loaded, consented and safe to send to?".
//
// GA readiness is genuinely external state: it is decided by the CookieYes
// cookie, the current hostname and whether the gtag library has been injected —
// none of which React owns. Modelling it as an external store (rather than
// useState written from inside an effect) lets components subscribe via
// useSyncExternalStore without cascading renders.
//
// Module-level state is the correct scope: GA loads at most once per document
// load, and a full page reload resets it.

let gaReady = false;
const listeners = new Set<() => void>();

/** Called by loadGA() once gtag.js is injected and the property configured. */
export function markGaReady(): void {
    if (gaReady) return;
    gaReady = true;
    listeners.forEach((listener) => listener());
}

export function subscribeGaReady(listener: () => void): () => void {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

export function getGaReadySnapshot(): boolean {
    return gaReady;
}

/** Always false during SSR: there is no window, so nothing can have loaded. */
export function getGaReadyServerSnapshot(): boolean {
    return false;
}
