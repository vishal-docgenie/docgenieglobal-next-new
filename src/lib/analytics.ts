// Central analytics helper — all GA4 events fired from here.
// Add new event types to the GtagEvent union as needed.
// Window.gtag / lintrk / dataLayer types are declared once in types/global.d.ts.

type GtagEvent =
  | { event: "page_view"; page_path: string; page_title?: string; page_location?: string }
  | { event: "generate_lead"; form_name: string; page_path?: string }
  | { event: "book_demo"; method: string; page_path?: string }
  | { event: "cta_click"; cta_text: string; cta_location: string; page_path?: string }
  | { event: "outbound_click"; link_url: string; link_text?: string }
  /**
   * An editorial link inside blog prose that points at a commercial page.
   *
   * Deliberately NOT cta_click. cta_click is configured as a GA4 Key Event, so
   * routing ~86 in-article prose links through it would inflate reported
   * conversions several times over and wipe out the existing baseline (15
   * organic cta_click in 90 days). A reader following a link mid-sentence is
   * navigating, not converting. The Phase 7 end-of-article CTA stays on
   * cta_click / blog_contextual_cta and is explicitly out of this listener's
   * scope.
   */
  | {
      event: "blog_link_click";
      source_path: string;
      link_text: string;
      destination_path: string;
      link_type: "inline_content" | "faq";
    };

export function trackEvent({ event, ...params }: GtagEvent) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}