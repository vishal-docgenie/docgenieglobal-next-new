// Single source of truth for GA4 configuration and the production-host gate.
//
// Phase 2A: previously the Measurement ID was a hardcoded literal in BOTH
// _app.tsx and _document.tsx with no environment or hostname guard, so
// `next dev` on localhost reported into the production GA4 property.
// Everything analytics-related now reads from here.

/**
 * GA4 Measurement ID.
 *
 * Reads NEXT_PUBLIC_GA_ID when provided. The literal fallback is deliberate:
 * the production host does not currently define this variable, and defaulting
 * to it keeps production measurement working unchanged. The host gate below —
 * not the ID — is what prevents non-production traffic being recorded.
 */
export const GA_MEASUREMENT_ID =
    process.env.NEXT_PUBLIC_GA_ID ?? "G-KSEB3D0KZ0";

/**
 * Hosts allowed to send analytics. Anything else (localhost, 127.0.0.1, LAN
 * IPs, preview/staging hostnames, Lovable preview domains) is excluded.
 *
 * An explicit allowlist is used rather than a NODE_ENV check because a staging
 * deployment also runs a production build and would otherwise pass.
 */
export const ANALYTICS_ALLOWED_HOSTS: readonly string[] = [
    "www.docgenieglobal.com",
    "docgenieglobal.com",
];

/** True only when the current browser host is a production host. */
export function isAnalyticsAllowedHost(): boolean {
    if (typeof window === "undefined") return false;
    return ANALYTICS_ALLOWED_HOSTS.includes(window.location.hostname);
}

/**
 * LinkedIn Insight partner ID.
 *
 * Phase 1E confirmed the repository value was the unreplaced placeholder
 * "YOUR_LINKEDIN_PARTNER_ID", so LinkedIn conversion tracking has never
 * functioned. No ID is invented here: the integration stays disabled until a
 * verified production ID is supplied via NEXT_PUBLIC_LINKEDIN_PARTNER_ID.
 */
export const LINKEDIN_PARTNER_ID =
    process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? "";

/** True only when a real LinkedIn partner ID has been configured. */
export function isLinkedInConfigured(): boolean {
    const id = LINKEDIN_PARTNER_ID.trim();
    return id !== "" && id !== "YOUR_LINKEDIN_PARTNER_ID";
}
