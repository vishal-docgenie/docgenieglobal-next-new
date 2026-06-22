// Central analytics helper — all GA4 events fired from here.
// Add new event types to the GtagEvent union as needed.

type GtagEvent =
  | { event: "page_view"; page_path: string; page_title?: string }
  | { event: "generate_lead"; form_name: string; page_path?: string }
  | { event: "book_demo"; method: string; page_path?: string }
  | { event: "cta_click"; cta_text: string; cta_location: string; page_path?: string }
  | { event: "outbound_click"; link_url: string; link_text?: string };

export function trackEvent({ event, ...params }: GtagEvent) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}

// Declare gtag and lintrk on window so TypeScript is happy
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    lintrk?: (action: string, params: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}
