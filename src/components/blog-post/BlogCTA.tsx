import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { BlogCustomCta } from "@/data/blogs/types";
import { trackEvent } from "@/lib/analytics";

interface BlogCTAProps {
  /** Optional per-blog override. When present, replaces heading + body text. */
  cta?: BlogCustomCta;
}

const DEFAULT_HEADING = "Ready to enhance your telehealth services?";
const DEFAULT_BODY =
  "Discover how DocGenie Global can help you deliver superior virtual care experiences to your patients.";

const BlogCTA = ({ cta }: BlogCTAProps) => {
  const heading = cta?.heading ?? DEFAULT_HEADING;

  return (
    <section className="bg-brand-blue/10 rounded-3xl p-8 md:p-12 text-center reveal animate-fade-in">
      <h2 className="heading-3 mb-4">{heading}</h2>

      {cta?.body ? (
        // Custom body — supports inline HTML (<b>, <strong>, <em>, <a>, etc.)
        // Safe because blog data is hardcoded in our repo, not user-submitted.
        <div
          className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: cta.body }}
        />
      ) : (
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          {DEFAULT_BODY}
        </p>
      )}

      <div className="flex flex-wrap justify-center gap-4">
        {/* Where the article has a clear commercial counterpart, that page
            leads. A reader who has just finished an explainer is mid-funnel:
            sending them to the page that answers what they read is a smaller
            ask than "Contact Us", which over 90 days drew no clicks at all
            from blog traffic. Articles without a counterpart keep the previous
            two buttons exactly as they were.

            Tracking uses one new cta_location, blog_contextual_cta. The
            destination and the article are already carried by cta_text and
            page_path, so a single new value keeps every existing
            cta_location untouched while still allowing per-article analysis. */}
        {cta?.primaryLink && (
          <Button className="primary-button">
            <Link
              href={cta.primaryLink.href}
              onClick={() =>
                trackEvent({
                  event: "cta_click",
                  cta_text: cta.primaryLink!.label,
                  cta_location: "blog_contextual_cta",
                  page_path: window.location.pathname,
                })
              }
            >
              {cta.primaryLink.label}
            </Link>
          </Button>
        )}
        <Button className={cta?.primaryLink ? "border-brand-blue text-brand-blue hover:bg-brand-blue/10" : "primary-button"} variant={cta?.primaryLink ? "outline" : "default"}>
          <Link href="/contact" onClick={() => trackEvent({ event: "cta_click", cta_text: "Contact Us", cta_location: "blog_cta", page_path: window.location.pathname })}>Contact Us</Link>
        </Button>
        <Button
          variant="outline"
          className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
        >
          <Link href="/pricing" onClick={() => trackEvent({ event: "cta_click", cta_text: "View Pricing", cta_location: "blog_cta", page_path: window.location.pathname })}>View Pricing</Link>
        </Button>
      </div>
    </section>
  );
};

export default BlogCTA;