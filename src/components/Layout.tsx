import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import ErrorBoundary from "./ErrorBoundary";
import { Toaster } from "@/components/ui/toaster";
import StickyDemoButton from "./StickyDemoButton";

interface LayoutProps {
  children: React.ReactNode;
}

// Routes where the floating "Request Demo" CTA should NOT appear.
// Two categories:
//   - HIDDEN_EXACT     → hide only on the exact path (children of these routes still show the button)
//   - HIDDEN_AND_CHILDREN → hide on the route AND all of its child routes
const HIDDEN_EXACT = [
  "/blogs",     // blogs index hides the button; individual /blogs/<slug> posts still show it
];

const HIDDEN_AND_CHILDREN = [
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/integration-guide",
  "/sla-support-policy",
  "/sitemap",
];

const Layout = ({ children }: LayoutProps) => {
  console.log("Layout rendering with children:", children);
  const { pathname } = useRouter();
  const isHiddenRoute =
    HIDDEN_EXACT.includes(pathname) ||
    HIDDEN_AND_CHILDREN.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    );
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24">{children}</main>
      <Footer />

      {/* Site-wide floating "Request Demo" CTA */}
      {!isHiddenRoute && (
        <ErrorBoundary>
          <StickyDemoButton />
        </ErrorBoundary>
      )}

      <Toaster />
    </div>
  );
};

export default Layout;