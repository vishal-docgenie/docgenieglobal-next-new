import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="blue-orange-gradient-r-20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 text-left">
            {/* Logo positioned to align with other headers */}
            <div className="h-9 flex items-center mb-4">
              <img
                src="/lovable-uploads/9f8cf5b9-0b09-4cc4-a771-e2e187f0618a.png"
                alt="DocGenie Global Logo"
                className="h-24"
              />
            </div>
            <p className="text-gray-600 mb-6 text-left mt-4">
              Revolutionizing healthcare delivery with our white-label
              telemedicine platform for clinics, hospitals, and doctors.
            </p>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm text-left mb-4">
                © {currentYear} DocGenie Global. All rights reserved.
              </p>
              <div className="mb-4">
                <img
                  src="/lovable-uploads/4d823c9e-ea36-438b-9eba-b322cfc20bb2.png"
                  alt="ISO/IEC 27001:2022 Certified"
                  className="h-40"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-2 text-left">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Blogs & News
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 text-left">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#integrations"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 text-left">
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p className="text-gray-600 mb-6">
              DocGenie Global Pte Ltd
              <br />
              143 Cecil Street, #03-01,
              <br />
              GB Building
              <br />
              Singapore (069542)
            </p>

            {/* Button with Next Link using shadcn's asChild pattern */}
            <Button asChild className="w-full primary-button">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="md:col-span-2 text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-1 justify-start mb-6">
              <a
                href="https://m.facebook.com/docgenieindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-600 hover:text-[#FAC0A1] transition-colors p-1 h-8 w-8 flex items-center justify-center"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://x.com/docgenieindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-gray-600 hover:text-[#FAC0A1] transition-colors p-1 h-8 w-8 flex items-center justify-center"
              >
                <X size={16} />
              </a>
              <a
                href="https://www.instagram.com/docgenieindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-[#FAC0A1] transition-colors p-1 h-8 w-8 flex items-center justify-center"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/docgenie-global/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-[#FAC0A1] transition-colors p-1 h-8 w-8 flex items-center justify-center"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.youtube.com/@docgenieofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-600 hover:text-[#FAC0A1] transition-colors p-1 h-8 w-8 flex items-center justify-center"
              >
                <Youtube size={16} />
              </a>
            </div>

            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/integration-guide"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Integration Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/sla-support-policy"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  SLA/Support Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/hipaa-compliant-healthcare"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  HIPAA Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
