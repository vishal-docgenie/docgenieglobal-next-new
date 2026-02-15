"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import DesktopNav from "./header/DesktopNav";
import MobileMenu from "./header/MobileMenu";
import { navLinks } from "./header/navData";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  // Next.js router replaces react-router's useLocation
  const router = useRouter();
  const currentPath = router.asPath; // use asPath for real URL (e.g. /blogs/my-post)

  useEffect(() => {
    // Only run client-side
    if (typeof window === "undefined") return;

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    // passive listener for performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // initialize state once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // close menus when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
        >
          {/* Keep as <img> if you don't need next/image optimizations here */}
          <img
            src="/lovable-uploads/9f8cf5b9-0b09-4cc4-a771-e2e187f0618a.png"
            alt="DocGenie Global Logo"
            className="h-[120px] md:h-[130px] object-contain"
          />
        </Link>

        <DesktopNav
          navLinks={navLinks}
          currentPath={currentPath}
          isSolutionsDropdownOpen={isSolutionsDropdownOpen}
          setSolutionsDropdownOpen={setSolutionsDropdownOpen}
          isIndustriesDropdownOpen={isIndustriesDropdownOpen}
          setIndustriesDropdownOpen={setIndustriesDropdownOpen}
        />

        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen((s) => !s)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        navLinks={navLinks}
        currentPath={currentPath}
        isSolutionsDropdownOpen={isSolutionsDropdownOpen}
        setSolutionsDropdownOpen={setSolutionsDropdownOpen}
        isIndustriesDropdownOpen={isIndustriesDropdownOpen}
        setIndustriesDropdownOpen={setIndustriesDropdownOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
