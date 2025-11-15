import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Monitor, ShieldCheck, MessageCircle, HeartPulse, Brain } from "lucide-react";
import { getButtonA11yProps } from "@/utils/accessibilityUtils";

interface SolutionsDropdownProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCurrentPage: boolean;
}

const SolutionsDropdown = ({ isOpen, setIsOpen, isCurrentPage }: SolutionsDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownId = "solutions-dropdown-menu";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  const solutionsDropdownItems = [
    {
      name: "White Label Telemedicine Platform",
      path: "/solutions/white-label-telemedicine",
      icon: <Monitor className="h-5 w-5 mr-2" />
    },
    {
      name: "HIPAA Compliant Healthcare",
      path: "/solutions/hipaa-compliant-healthcare",
      icon: <ShieldCheck className="h-5 w-5 mr-2" />
    },
    {
      name: "Comprehensive Virtual Care Features",
      path: "/solutions/virtual-care-features",
      icon: <MessageCircle className="h-5 w-5 mr-2" />
    },
    {
      name: "Chronic Care Management Solution",
      path: "/solutions/chronic-care-management",
      icon: <HeartPulse className="h-5 w-5 mr-2" />
    },
    {
      name: "AI-Powered Capabilities",
      path: "/solutions/ai-capabilities",
      icon: <Brain className="h-5 w-5 mr-2" />
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center">
        <Link
          href="/solutions"
          className={`text-sm font-medium transition-all duration-300 hover:text-brand-blue relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full ${
            isCurrentPage ? "text-brand-blue after:w-full" : "text-gray-800"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Solutions
        </Link>
        <button
          className="ml-1 text-gray-800 hover:text-brand-blue"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          {...getButtonA11yProps({
            type: "expanded",
            label: `${isOpen ? "Hide" : "Show"} Solutions menu`,
            isExpanded: isOpen,
            controls: dropdownId
          })}
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {isOpen && (
        <div
          id={dropdownId}
          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 z-50 text-left"
          onMouseLeave={() => setIsOpen(false)}
          role="menu"
          aria-orientation="vertical"
        >
          {solutionsDropdownItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
              onClick={() => setIsOpen(false)}
              role="menuitem"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SolutionsDropdown;
