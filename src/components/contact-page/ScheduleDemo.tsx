import React, { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const CALENDLY_BASE_URL = "https://calendly.com/adityavj-docgenie/30min";
const CALENDLY_SCRIPT_ID = "calendly-widget-script";

/** Pass UTM params from the current page URL into the Calendly embed URL
 *  so every booking records the traffic source inside Calendly's dashboard. */
function buildCalendlyUrl(): string {
  if (typeof window === "undefined") return CALENDLY_BASE_URL;
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const utmPairs = utmKeys
    .filter((k) => params.has(k))
    .map((k) => `${k}=${encodeURIComponent(params.get(k) ?? "")}`);
  return utmPairs.length > 0
    ? `${CALENDLY_BASE_URL}?${utmPairs.join("&")}`
    : CALENDLY_BASE_URL;
}

const ScheduleDemo = () => {
  useEffect(() => {
    // Load Calendly widget script
    if (!document.getElementById(CALENDLY_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = CALENDLY_SCRIPT_ID;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Track Calendly booking as a GA4 conversion event
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      if (e.data?.event === "calendly.event_scheduled") {
        trackEvent({
          event: "book_demo",
          method: "calendly_inline",
          page_path: window.location.pathname,
        });
        // LinkedIn conversion tracking
        window.lintrk?.("track", { conversion_id: 22311258 });
      }
    };

    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-5 h-full hover:shadow-xl transition-shadow duration-300">
      <div className="text-center mb-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Talk to Us</h3>
        <p className="text-sm text-gray-600">Schedule a call to explore our solution</p>
      </div>
      <div
        className="calendly-inline-widget rounded-lg overflow-hidden"
        data-url={buildCalendlyUrl()}
        style={{ minWidth: "300px", height: "480px" }}
      ></div>
    </div>
  );
};

export default ScheduleDemo;
