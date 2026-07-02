export type ConsentCategory =
    | "necessary"
    | "functional"
    | "analytics"
    | "performance"
    | "advertisement"
    | "other";

function readCookieYesConsent(): Record<string, string> {
    if (typeof document === "undefined") return {};

    const row = document.cookie
        .split("; ")
        .find((c) => c.startsWith("cookieyes-consent="));

    if (!row) return {};

    // CookieYes stores a comma-delimited string that may be URL-encoded.
    // e.g. "consentid:abc,consent:yes,...,analytics:yes,advertisement:no"
    const raw = decodeURIComponent(row.split("=").slice(1).join("="));

    return raw.split(",").reduce<Record<string, string>>((acc, pair) => {
        const [key, value] = pair.split(":");
        if (key) acc[key.trim()] = (value ?? "").trim();
        return acc;
    }, {});
}

// export function hasConsent(category: ConsentCategory): boolean {
//     return readCookieYesConsent()[category] === "yes";
// }
export function hasConsent(category: ConsentCategory): boolean {
    try {
        return (readCookieYesConsent()[category] === "yes");
    } catch {
        return false;
    }
}

export function hasMarketingConsent(): boolean {
    return hasConsent("advertisement");
}

export function hasAnalyticsConsent(): boolean {
    return hasConsent("analytics");
}