import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FeatureSection from "@/components/home/FeatureSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import PracticeBenefitsSection from "@/components/home/PracticeBenefitsSection";
import CtaSection from "@/components/home/CtaSection";
import { debugComponent, LifecycleLogger } from "@/utils/debugUtils";
import ErrorBoundary from "@/components/ErrorBoundary";
import Head from "next/head";

const Index = () => {
  const logger = new LifecycleLogger("IndexPage");
  
  // Log component lifecycle
  useEffect(() => {
    logger.mount();
    return () => logger.unmount();
  }, []);
  
  // Debug component props (empty in this case)
  debugComponent("Index", {});
  
  // Schema.org JSON-LD structured data for the home page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DocGenie Global",
    "url": "https://www.docgenieglobal.com",
    "logo": "https://www.docgenieglobal.com/lovable-uploads/docgenie-logo.png",
    "description": "White Label Telemedicine Platform for Clinics & Healthcare Providers. HIPAA-compliant virtual care solution.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "143 Cecil Street, #03-01, GB Building",
      "addressLocality": "Singapore",
      "postalCode": "069542",
      "addressCountry": "Singapore"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-DOC-GENIE",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/docgenie",
      "https://www.linkedin.com/company/docgenie-global",
      "https://www.facebook.com/docgenieglobal"
    ],
    "offers": {
      "@type": "Offer",
      "name": "White Label Telemedicine Platform",
      "description": "HIPAA-compliant virtual care solutions for healthcare providers",
      "url": "https://www.docgenieglobal.com/solutions"
    }
  };
  
  return (
    <Layout>
      <Head>
        <title>DocGenie Global – Complete AI-Powered Telemedicine Platform | HIPAA-Compliant Virtual Care Solutions</title>
        <meta name="description" content="Empower your healthcare practice with our HIPAA-compliant virtual care platform. The best telemedicine solution for clinics and doctors with white label capabilities." />
        <link rel="canonical" href="https://www.docgenieglobal.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="DocGenie | White Label Telemedicine Platform" />
        <meta property="og:description" content="Discover DocGenie Global’s industry-leading telemedicine platform offering secure, customizable, and AI-driven virtual care solutions for clinics and hospitals worldwide." />
        <meta property="og:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DocGenie | White Label Telemedicine Platform" />
        <meta name="twitter:description" content="Discover DocGenie Global’s industry-leading telemedicine platform offering secure, customizable, and AI-driven virtual care solutions for clinics and hospitals worldwide." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/og-image.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="telemedicine platform, white label telehealth, virtual care, healthcare software, HIPAA-compliant telemedicine, online doctor consultation, clinic management software" />
        <meta name="author" content="DocGenie Global" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Head>
      
      <div className="overflow-x-hidden w-full">
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <FeatureSection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <PracticeBenefitsSection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <WhyChooseSection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <TestimonialSection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <CtaSection />
        </ErrorBoundary>
      </div>
    </Layout>
  );
};

export default Index;
