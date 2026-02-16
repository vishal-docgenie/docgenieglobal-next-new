import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "./components/HeroSection";
import PlatformOverviewSection from "./components/PlatformOverviewSection";
import CoreFeaturesSection from "./components/CoreFeaturesSection";
import MultiDeviceSection from "./components/MultiDeviceSection";
import TechnicalFeaturesSection from "./components/TechnicalFeaturesSection";
import GetStartedSection from "./components/GetStartedSection";
import CTASection from "./components/CTASection";
import Head from "next/head";

const Solutions = () => {
  // Schema.org JSON-LD structured data for the solutions page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "DocGenie Telemedicine Platform",
    "description": "White-label telemedicine platform for healthcare providers with HIPAA compliance, virtual care capabilities, and seamless integration with existing systems.",
    "brand": {
      "@type": "Brand",
      "name": "DocGenie Global"
    },
    "logo": "https://www.docgenieglobal.com/lovable-uploads/docgenie-logo.png",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "description": "Starting price for the telemedicine platform",
        "minPrice": "100"
      },
      "availability": "https://schema.org/InStock"
    },
    "category": "Healthcare Software",
    "applicationCategory": "Healthcare",
    "features": [
      "White Label Customization",
      "HIPAA Compliance",
      "Virtual Care Capabilities",
      "EHR Integration",
      "Multi-Device Support",
      "AI-Powered Diagnostics",
      "Patient Management"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Healthcare Providers",
      "description": "Clinics, hospitals, private practices, and healthcare organizations"
    },
    "potentialAction": {
      "@type": "ViewAction",
      "target": "https://www.docgenieglobal.com/contact"
    }
  };

  return (
    <Layout>
      <Head>
        <title>Telemedicine Solutions for Healthcare | Customizable Virtual Care Platform - DocGenie Global</title>
        <meta name="description" content="Discover DocGenie Global’s customizable telemedicine solutions for clinics and hospitals. Our platform offers white-label virtual care, HIPAA-compliant security, advanced AI capabilities, chronic care management, and comprehensive virtual healthcare features tailored to your needs." />
        <link rel="canonical" href="https://www.docgenieglobal.com/solutions" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Telemedicine Solutions for Healthcare | Customizable Virtual Care Platform - DocGenie Global" />
        <meta property="og:description" content="Discover DocGenie Global’s customizable telemedicine solutions for clinics and hospitals. Our platform offers white-label virtual care, HIPAA-compliant security, advanced AI capabilities, chronic care management, and comprehensive virtual healthcare features tailored to your needs." />
        <meta property="og:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telemedicine Solutions for Healthcare | Customizable Virtual Care Platform - DocGenie Global" />
        <meta name="twitter:description" content="Discover DocGenie Global’s customizable telemedicine solutions for clinics and hospitals. Our platform offers white-label virtual care, HIPAA-compliant security, advanced AI capabilities, chronic care management, and comprehensive virtual healthcare features tailored to your needs." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/og-image.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="telemedicine platform, white label telehealth, virtual care, healthcare software, HIPAA-compliant telemedicine, online doctor consultation, clinic management software, telehealth solutions" />
        <meta name="author" content="DocGenie Global" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Head>
      <div className="overflow-x-hidden w-full">
        <HeroSection />
        <PlatformOverviewSection />
        <CoreFeaturesSection />
        <MultiDeviceSection />
        <TechnicalFeaturesSection />
        <GetStartedSection />
        <CTASection />
      </div>
    </Layout>
  );
};

export default Solutions;
