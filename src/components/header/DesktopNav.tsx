import React from "react";
import Link from "next/link";
import { ChevronRight, LogIn } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SolutionsDropdown from "./SolutionsDropdown";
import IndustriesDropdown from "./IndustriesDropdown";

interface DesktopNavProps {
  navLinks: Array<{
    name: string;
    path: string;
    hasDropdown?: boolean;
  }>;
  currentPath: string;
  isSolutionsDropdownOpen: boolean;
  setSolutionsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isIndustriesDropdownOpen: boolean;
  setIndustriesDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Helper to compare current path (ignores query/hash)
// const isActivePath = (currentPath: string, target: string) => {
//   const clean = currentPath.split("#")[0].split("?")[0];
//   return clean === target;
// };

const DesktopNav = ({
  navLinks,
  currentPath,
  isSolutionsDropdownOpen,
  setSolutionsDropdownOpen,
  isIndustriesDropdownOpen,
  setIndustriesDropdownOpen
}: DesktopNavProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) =>
        link.hasDropdown ? (
          link.name === "Solutions" ? (
            <SolutionsDropdown 
              key={link.name}
              isOpen={isSolutionsDropdownOpen}
              setIsOpen={setSolutionsDropdownOpen}
              isCurrentPage={currentPath === link.path}
            />
          ) : link.name === "Industries" ? (
            <IndustriesDropdown 
              key={link.name}
              isOpen={isIndustriesDropdownOpen}
              setIsOpen={setIndustriesDropdownOpen}
              isCurrentPage={currentPath === link.path}
            />
          ) : null
        ) : (
          <Link
            key={link.name}
            href={link.path}
            className={`text-sm font-medium transition-all duration-300 hover:text-brand-blue relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full ${
              currentPath === link.path ? "text-brand-blue after:w-full" : "text-gray-800"
            }`}
          >
            {link.name}
          </Link>
        )
      )}

      {/* External login stays a normal <a>. The button styling is applied to
          the anchor itself via buttonVariants rather than nesting a <Button>
          inside it: <a><button> is invalid HTML and gives keyboard and screen
          reader users two interactive elements for one control. Classes,
          variant, href, target and rel are unchanged, so the rendering is
          identical. */}
      <a
        href="https://admindemo.docgenieglobal.com"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "outline", className: "flex items-center gap-2" }))}
      >
        <LogIn className="h-4 w-4" />
        Login
      </a>

      {/* For Next.js + shadcn, use asChild so the Button renders an <a> under Link */}
      <Button className="primary-button" asChild>
        <Link href="/contact">
          Get Started <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </nav>
  );
};

export default DesktopNav;
