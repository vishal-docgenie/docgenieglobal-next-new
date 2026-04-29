"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

/**
 * Floating "Request Demo" CTA — sticks to the bottom-right of every page
 * via Layout.tsx.
 *
 * On pages whose hero contains a CTA marked with `data-hero-cta`, the sticky
 * button stays hidden while that hero CTA is on screen, then fades in once
 * it's scrolled out of view. On pages with no `data-hero-cta` element, the
 * button just shows immediately (current behavior).
 */
const StickyDemoButton = () => {
  const { pathname } = useRouter();
  // Start hidden to avoid a flash on pages that have a hero CTA
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Re-query on every route change (Layout persists across pages in Pages Router)
    const heroCta = document.querySelector("[data-hero-cta]");

    // No hero CTA on this page → just show the sticky button
    if (!heroCta) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide while hero CTA is visible, show once it's scrolled out
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <Link
      href="/contact"
      aria-label="Request a demo"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 group transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button className="primary-button h-12 md:h-14 px-5 md:px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
        Request Demo
        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Button>
    </Link>
  );
};

export default StickyDemoButton;
