import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChevronDown,
  Monitor,
  ShieldCheck,
  MessageCircle,
  HeartPulse,
  Brain,
  Hospital,
  Building,
  Users,
  ChevronRight,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getButtonA11yProps } from "@/utils/accessibilityUtils";

interface MobileMenuProps {
  isOpen: boolean;
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
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({
  isOpen,
  navLinks,
  currentPath,
  isSolutionsDropdownOpen,
  setSolutionsDropdownOpen,
  isIndustriesDropdownOpen,
  setIndustriesDropdownOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) => {
  const router = useRouter();

  const solutionsDropdownItems = [
    {
      name: "White Label Telemedicine Platform",
      path: "/solutions/white-label-telemedicine",
      icon: <Monitor className="h-5 w-5 mr-2" />,
    },
    {
      name: "HIPAA Compliant Healthcare",
      path: "/solutions/hipaa-compliant-healthcare",
      icon: <ShieldCheck className="h-5 w-5 mr-2" />,
    },
    {
      name: "Comprehensive Virtual Care Features",
      path: "/solutions/virtual-care-features",
      icon: <MessageCircle className="h-5 w-5 mr-2" />,
    },
    {
      name: "Chronic Care Management Solution",
      path: "/solutions/chronic-care-management",
      icon: <HeartPulse className="h-5 w-5 mr-2" />,
    },
    {
      name: "AI-Powered Capabilities",
      path: "/solutions/ai-capabilities",
      icon: <Brain className="h-5 w-5 mr-2" />,
    },
  ];

  const industriesDropdownItems = [
    {
      name: "Healthcare Providers",
      path: "/industries/healthcare-providers",
      icon: <Hospital className="h-5 w-5 mr-2" />
    },
    {
      name: "Third-Party Vendors",
      path: "/industries/third-party-vendors",
      icon: <Building className="h-5 w-5 mr-2" />
    },
    {
      name: "Public Health Sector",
      path: "/industries/public-health",
      icon: <Users className="h-5 w-5 mr-2" />
    }
  ];

  const handleDropdownItemClick = (path: string) => {
    // Force close both menus immediately
    setIsMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    
    // Use a short timeout to ensure state updates before navigation
    setTimeout(() => {
      router.push(path);
    }, 10);
  };

  return (
    <div
      id="mobile-menu"
      className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
        {navLinks.map((link) =>
          link.hasDropdown ? (
            <div key={link.name} className="py-2 text-left">
              <div className="flex items-center justify-between">
                <Link
                  href={link.path}
                  className={`flex-1 text-base py-2 font-medium ${
                    currentPath === link.path ? "text-brand-blue" : "text-gray-800"
                  }`}>
                  {/* onClick={() => {
                    setIsMobileMenuOpen(false);
                    setSolutionsDropdownOpen(false);
                  }}
                > */}
                  {link.name}
                </Link>
                <button
                  className="p-2"
                  onClick={() => {
                    if (link.name === "Solutions") {
                      setSolutionsDropdownOpen(!isSolutionsDropdownOpen);
                    } else if (link.name === "Industries") {
                      setIndustriesDropdownOpen(!isIndustriesDropdownOpen);
                    }
                  }}
                  {...getButtonA11yProps({
                    type: "expanded",
                    label: `${(link.name === "Solutions" ? isSolutionsDropdownOpen : isIndustriesDropdownOpen) ? 'Hide' : 'Show'} ${link.name} options`,
                    isExpanded: link.name === "Solutions" ? isSolutionsDropdownOpen : isIndustriesDropdownOpen,
                    controls: `${link.name.toLowerCase()}-dropdown-menu`
                  })}
                >
                  <ChevronDown className={`h-5 w-5 transition-transform ${(link.name === "Solutions" ? isSolutionsDropdownOpen : isIndustriesDropdownOpen)
                    ? "rotate-180" : ""}`}/>
                </button>
              </div>
              <div id={`${link.name.toLowerCase()}-dropdown-menu`} className={`pl-4 space-y-2 mt-2 transition-all overflow-hidden text-left ${(link.name === "Solutions" ? isSolutionsDropdownOpen : isIndustriesDropdownOpen) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              {(link.name === "Solutions" ? solutionsDropdownItems : industriesDropdownItems).map(item => (
                  <button 
                    key={item.name}
                    className={`flex items-center py-2 w-full text-left ${
                      currentPath === item.path ? "text-brand-blue" : "text-gray-700 hover:text-brand-blue"
                    } transition-colors`}
                    onClick={() => handleDropdownItemClick(item.path)}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.name}
              href={link.path}
              className={`text-base py-2 font-medium text-left ${
                currentPath === link.path ? "text-brand-blue" : "text-gray-800"
              }`}
              // onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          )
        )}

        <a
          href="https://admindemo.docgenieglobal.com"
          className="block text-base py-2 font-medium text-left"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full justify-start">
            <LogIn className="h-5 w-5 mr-2" />
            Login
          </Button>
        </a>

        <div className="pt-2">
          <Button className="primary-button w-full" asChild>
            <Link href="/contact">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
