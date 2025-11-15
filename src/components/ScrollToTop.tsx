"use client";

import React, { useEffect, useState } from "react";

interface ScrollToTopProps {
  /** how many pixels scrolled before showing the button */
  showAfter?: number;
  /** optional className for the button wrapper */
  className?: string;
  /** optional aria-label */
  ariaLabel?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  showAfter = 200,
  className = "",
  ariaLabel = "Scroll to top",
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Guard: ensure this effect runs only in the browser
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    // Use passive for better performance
    window.addEventListener("scroll", onScroll, { passive: true });

    // Initialize visibility on mount
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [showAfter]);

  const handleClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (typeof window === "undefined") return;
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    >
      {/* Simple chevron-up icon (SVG) */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default ScrollToTop;
