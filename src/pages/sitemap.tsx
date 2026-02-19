
import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { ExternalLink, ChevronRight } from "lucide-react";
import Head from "next/head";
import { navLinks, solutionsDropdownItems } from "@/components/header/navData";

const Sitemap = () => {
  return (
    <Layout>
      <Head>
        <title>Sitemap | DocGenie Global</title>
        <meta 
          name="description" 
          content="View a complete sitemap of the DocGenie Global website to easily find and navigate to all our telemedicine platform pages and resources." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/sitemap" />
      </Head>
      
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Sitemap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use this page to navigate to any section of our website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Pages Section */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 border-b pb-2">
                Main Pages
              </h2>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path} className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-brand-blue mr-2" />
                    <Link 
                      href={link.path} 
                      className="text-gray-700 hover:text-brand-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Section */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 border-b pb-2">
                Solutions
              </h2>
              <ul className="space-y-3">
                {solutionsDropdownItems.map((item) => (
                  <li key={item.path} className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-brand-blue mr-2 mt-1" />
                    <Link 
                      href={item.path} 
                      className="text-gray-700 hover:text-brand-blue transition-colors text-left"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 border-b pb-2">
                Resources
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-brand-blue mr-2" />
                  <Link 
                    href="/blogs" 
                    className="text-gray-700 hover:text-brand-blue transition-colors"
                  >
                    Blog Articles
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-brand-blue mr-2" />
                  <Link 
                    href="/privacy-policy" 
                    className="text-gray-700 hover:text-brand-blue transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-brand-blue mr-2" />
                  <Link 
                    href="/terms-of-service" 
                    className="text-gray-700 hover:text-brand-blue transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-brand-blue mr-2" />
                  <Link 
                    href="/sitemap" 
                    className="text-gray-700 hover:text-brand-blue transition-colors"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Login & Demo */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 border-b pb-2">
                Platform Access
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 text-brand-blue mr-2" />
                  <a 
                    href="https://admindemo.docgenieglobal.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-brand-blue transition-colors"
                  >
                    Login to Platform
                  </a>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-brand-blue mr-2" />
                  <Link 
                    href="/contact" 
                    className="text-gray-700 hover:text-brand-blue transition-colors"
                  >
                    Request a Demo
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Extra Info Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">Need help finding something?</h2>
            <p className="text-gray-700 mb-4">
              If you can't find what you're looking for, please contact our support team for assistance.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 font-medium"
            >
              Contact Us <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
