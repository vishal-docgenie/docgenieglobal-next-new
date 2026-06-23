// Central analytics helper — all GA4 events fired from here.
// Add new event types to the GtagEvent union as needed.
// Window.gtag / lintrk / dataLayer types are declared once in types/global.d.ts.

type GtagEvent =
  | { event: "page_view"; page_path: string; page_title?: string; page_location?: string }
  | { event: "generate_lead"; form_name: string; page_path?: string }
  | { event: "book_demo"; method: string; page_path?: string }
  | { event: "cta_click"; cta_text: string; cta_location: string; page_path?: string }
  | { event: "outbound_click"; link_url: string; link_text?: string };

export function trackEvent({ event, ...params }: GtagEvent) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}