// Server-only: verifies a Cloudflare Turnstile token. Do not import from client code.

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/**
 * Cloudflare's documented always-pass test secret, used only outside
 * production. In production TURNSTILE_SECRET_KEY must be set, otherwise every
 * submission is rejected: failing closed is deliberate, so a missing key can
 * never quietly turn the bot check off.
 */
const SECRET_KEY =
    process.env.TURNSTILE_SECRET_KEY ||
    (process.env.NODE_ENV === "production"
        ? ""
        : "1x0000000000000000000000000000000AA");

type SiteverifyResponse = {
    success: boolean;
    action?: string;
    "error-codes"?: string[];
};

/**
 * Asks Cloudflare whether the token came from a real visitor.
 *
 * Tokens are single-use and expire after 5 minutes, so the form resets the
 * widget after every submit attempt.
 *
 * @param token          The token the widget handed the browser.
 * @param expectedAction The action the widget was rendered with.
 * @param remoteIp       The visitor's IP, if known (optional extra signal).
 */
export async function verifyTurnstile(
    token: string,
    expectedAction: string,
    remoteIp?: string
): Promise<boolean> {
    if (!SECRET_KEY) {
        console.error("Turnstile: TURNSTILE_SECRET_KEY is not set; rejecting submission.");
        return false;
    }
    if (!token) return false;

    const body = new URLSearchParams({ secret: SECRET_KEY, response: token });
    if (remoteIp) body.set("remoteip", remoteIp);

    try {
        const res = await fetch(VERIFY_URL, {
            method: "POST",
            body,
            signal: AbortSignal.timeout(10_000),
        });
        const data = (await res.json()) as SiteverifyResponse;

        if (!data.success) return false;
        // Real keys echo the action the widget used; the test keys don't
        // reliably, so only enforce it when a real secret is configured.
        if (process.env.TURNSTILE_SECRET_KEY && data.action !== expectedAction) return false;
        return true;
    } catch (err) {
        console.error("Turnstile: verification request failed:", err);
        return false;
    }
}
