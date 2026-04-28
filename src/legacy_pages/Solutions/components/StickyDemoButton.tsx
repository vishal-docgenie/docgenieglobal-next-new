import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

/**
 * Floating "Request Demo" CTA — sticks to the bottom-right of the viewport.
 * Mirrors the hero's primary CTA (text, icon, destination) so users see one
 * consistent action no matter where they are on the page.
 */
const StickyDemoButton = () => {
  return (
    <Link
      href="/contact"
      aria-label="Request a demo"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 group"
    >
      <Button
        className="primary-button h-12 md:h-14 px-5 md:px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
      >
        Request Demo
        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Button>
    </Link>
  );
};

export default StickyDemoButton;
