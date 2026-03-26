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
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.docgenieglobal.com/#organization",
        "name": "DocGenie Global",
        "url": "https://www.docgenieglobal.com/",
        "logo": "https://www.docgenieglobal.com/lovable-uploads/9f8cf5b9-0b09-4cc4-a771-e2e187f0618a.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "globalsupport@docgenie.in",
          "areaServed": ["US","UK","IN","SG"],
          "availableLanguage": ["English"]
        },
        "areaServed": [
          "United States",
          "United Kingdom",
          "India",
          "Singapore"
        ],
        "knowsAbout": [
          "Telemedicine Software",
          "White Label Telemedicine",
          "HIPAA Compliant Telehealth",
          "Remote Patient Monitoring",
          "Virtual Care Platforms",
          "Healthcare SaaS"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Telemedicine Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "White Label Telemedicine Platform"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "HIPAA Compliant Telehealth Platform"
              }
            }
          ]
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.docgenieglobal.com/#software",
        "name": "DocGenie Telemedicine Platform",
        "applicationCategory": "HealthApplication",
        "applicationSubCategory": "Telemedicine SaaS",
        "operatingSystem": "Web",
        "url": "https://www.docgenieglobal.com/",
        "applicationSuite": "White Label Telemedicine Platform",
        "provider": {
          "@id": "https://www.docgenieglobal.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "0",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "0",
            "eligibleTransactionVolume": {
              "@type": "PriceSpecification",
              "price": "Custom"
            }
          },
          "availability": "https://schema.org/InStock"
        },
        "potentialAction": {
          "@type": "ContactAction",
          "target": "https://www.docgenieglobal.com/contact"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.docgenieglobal.com/#website",
        "url": "https://www.docgenieglobal.com/",
        "name": "DocGenie Global",
        "publisher": {
          "@id": "https://www.docgenieglobal.com/#organization"
        },
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.docgenieglobal.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.docgenieglobal.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is DocGenie Global?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DocGenie Global is a white label telemedicine platform that enables healthcare providers to launch virtual care services under their own brand."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can I launch a telemedicine platform?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can launch your telemedicine platform within 2 to 3 weeks depending on customization and integrations."
            }
          },
          {
            "@type": "Question",
            "name": "Is DocGenie Global HIPAA compliant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, DocGenie Global follows HIPAA compliance standards to ensure patient data security and privacy."
            }
          }
        ]
      }
    ]
  };
  
  return (
    <Layout>
      <Head>
        <title>DocGenie Global – Complete AI-Powered Telemedicine Platform | HIPAA-Compliant Virtual Care Solutions</title>
        <meta name="description" content="Discover DocGenie Global’s industry-leading telemedicine platform offering secure, customizable, and AI-driven virtual care solutions for clinics and hospitals worldwide." />
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
