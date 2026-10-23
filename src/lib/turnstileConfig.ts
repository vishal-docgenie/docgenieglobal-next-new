/**
 * Cloudflare Turnstile site key (public; safe to ship to the browser).
 *
 * Set NEXT_PUBLIC_TURNSTILE_SITE_KEY in production. Outside production we fall
 * back to Cloudflare's documented always-pass test key so the contact form
 * works on localhost without a real key. In production there is no fallback:
 * a missing key shows an error on the form instead of silently skipping the
 * check.
 */
export const TURNSTILE_SITE_KEY =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
    (process.env.NODE_ENV === "production" ? "" : "1x00000000000000000000AA");

/** Action name sent with the token and checked on the server. */
export const TURNSTILE_CONTACT_ACTION = "contact_form";
