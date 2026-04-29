
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

// Routes (and their child routes) where the floating "Request Demo" CTA should NOT appear
const HIDDEN_ON_ROUTES = [
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/integration-guide",
  "/sla-support-policy",
  "/blogs",
];

const Layout = ({ children }: LayoutProps) => {
  console.log("Layout rendering with children:", children);
  const { pathname } = useRouter();
  const isHiddenRoute = HIDDEN_ON_ROUTES.some(
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
