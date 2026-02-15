
import React, { useState } from "react";
import Layout from "@/components/Layout";
import PricingTabs from "./components/PricingTabs";
import ComparisonTable from "./components/ComparisonTable";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Head from "next/head";
import { pricingFAQSchema } from "./components/PricingSchemaData";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  
  return (
    <Layout>
      <Head>
        <title>Telemedicine Platform Pricing | DocGenie Global</title>
        <meta 
          name="description" 
          content="Explore DocGenie's transparent pricing for our white-label telemedicine solutions. Affordable plans tailored for healthcare providers, clinics, and hospitals." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/pricing" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Telemedicine Platform Pricing | DocGenie Global" />
        <meta property="og:description" content="Explore DocGenie's transparent pricing for our white-label telemedicine solutions. Affordable plans tailored for healthcare providers, clinics, and hospitals." />
        <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/6cf94fc6-58cb-4c05-b124-1078a8267482.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telemedicine Platform Pricing | DocGenie Global" />
        <meta name="twitter:description" content="Explore DocGenie's transparent pricing for our white-label telemedicine solutions. Affordable plans tailored for healthcare providers, clinics, and hospitals." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/6cf94fc6-58cb-4c05-b124-1078a8267482.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="telemedicine pricing, healthcare software cost, virtual care platform pricing, doctor telemedicine cost, medical telehealth pricing, transparent pricing telemedicine" />
        <meta name="author" content="DocGenie Global" />
        
        {/* JSON-LD Structured Data - FAQ */}
        <script type="application/ld+json">
          {JSON.stringify(pricingFAQSchema)}
        </script>
      </Head>
      
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-blue/20 text-sm font-medium text-brand-gray-dark reveal animate-slide-down">
              Pricing Plans
            </div>
            <h1 className="heading-1 mb-6 reveal animate-slide-down">
              Simple, <span className="text-brand-blue">Transparent</span> Pricing
            </h1>
            <p className="subtitle mb-8 max-w-2xl mx-auto reveal animate-slide-down reveal-delay-100">
              Choose the plan that works best for your healthcare practice's size and needs
            </p>
            
            {/* Pricing Tabs */}
            <PricingTabs 
              billingCycle={billingCycle} 
              setBillingCycle={setBillingCycle} 
            />
          </div>
          
          {/* Comparison Table */}
          <ComparisonTable />
          
          {/* FAQ Section */}
          <FaqSection />
          
          {/* CTA Section */}
          <CtaSection />
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
