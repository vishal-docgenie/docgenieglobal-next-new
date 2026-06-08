import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { BlogCustomCta } from "@/data/blogs/types";

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
        <Button className="primary-button">
          <Link href="/contact">Contact Us</Link>
        </Button>
        <Button
          variant="outline"
          className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
        >
          <Link href="/pricing">View Pricing</Link>
        </Button>
      </div>
    </section>
  );
};

export default BlogCTA;