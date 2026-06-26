
import React from "react";
import Layout from "@/components/Layout";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureSection from "@/components/solutions/FeatureSection";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import ErrorBoundary from "@/components/ErrorBoundary";
import Head from "next/head";
import FAQ from "@/components/solutions/FAQ";
import PatientTrustSection from "@/components/solutions/PatientTrustSection";
import RelatedSolutions from "@/components/solutions/RelatedSolutions";
import BrandTrustSection from "@/components/solutions/WhiteLabel/BrandTrustSection";
import PerformanceSection from "@/components/solutions/WhiteLabel/PerformanceSection";
import ResultSection from "@/components/solutions/WhiteLabel/ResultSection";
import LeadMarketSection from "@/components/solutions/WhiteLabel/LeadMarketSection";
import ImplementationSection from "@/components/solutions/WhiteLabel/ImplementationSection";
import TechnicalStandardsSection from "@/components/solutions/WhiteLabel/TechnicalStandardsSection";
import { whiteLabelSchemaData } from "@/components/solutions/WhiteLabel/SchemaData";

const WhiteLabelTelemedicine = () => {
  return (
    <Layout>
      <Head>
        <title>White Label Telemedicine Platform | HIPAA-Compliant Solution</title>
        <meta name="description" content="Launch your branded telemedicine platform with DocGenie Global. HIPAA-compliant, AI-powered virtual care with EMR integration and 100% UI customization." />
        <link rel="canonical" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine/" />
        <link rel="preload" as="image" href="/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />

        {/* hreflang for regional targeting */}
        <link rel="alternate" hrefLang="en-GB" href="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/" />
        <link rel="alternate" hrefLang="en-US" href="https://www.docgenieglobal.com/us/white-label-telemedicine-platform/" />
        <link rel="alternate" hrefLang="en-ZA" href="https://www.docgenieglobal.com/za/white-label-telemedicine-platform/" />
        <link rel="alternate" hrefLang="en-GH" href="https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/" />
        <link rel="alternate" hrefLang="en" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine/" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="White Label Telemedicine Platform | HIPAA-Compliant Solution" />
        <meta property="og:description" content="Branded telehealth in weeks. HIPAA-compliant, AI-powered, full white-label — your logo, your domain, your patients." />
        <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/solutions/white-label-telemedicine/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DocGenieGlobal" />
        <meta name="twitter:title" content="White Label Telemedicine Platform | HIPAA-Compliant Solution" />
        <meta name="twitter:description" content="Branded telehealth in weeks. HIPAA-compliant, AI-powered, full white-label — your logo, your domain, your patients." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
        <meta name="twitter:url" content="https://www.docgenieglobal.com/solutions/white-label-telemedicine/" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="DocGenie Global" />

        {/* JSON-LD Structured Data - Product */}
        <script type="application/ld+json">
          {JSON.stringify(whiteLabelSchemaData)}
        </script>
      </Head>
      
      <ErrorBoundary>
        <SolutionHero 
          title="White Label Telemedicine Platform"
          description="DocGenie Global provides a HIPAA-compliant, white-label telemedicine platform that allows healthcare organizations to quickly launch their own branded virtual care practice in weeks. It features AES-128-CTR encryption, session tokens and server-side identifier encryption for EHR/EMR syncing, and 100% UI customization across web, iOS, and Android."
          image="/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png"
          altText="Medical professional using white-labeled DocGenie telemedicine platform with customized branding for virtual consultation with patient"
        />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <BrandTrustSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <FeatureSection 
          title="Seamless Integration with Your Systems"
          description="Our platform adapts to your existing healthcare infrastructure, enabling a smooth transition to virtual care without disrupting established workflows."
          features={[
            {
              title: "EHR/EMR Integration",
              description: "Connect with leading electronic health record systems for streamlined documentation and data exchange."
            },
            {
              title: "Multiple Payment Options",
              description: "Integrate with your preferred payment processors and billing systems for flexible patient payments."
            },
            {
              title: "Comprehensive API Ecosystem",
              description: "Leverage our extensive API architecture to connect with third-party applications and services."
            }
          ]}
          image="/lovable-uploads/beaa9887-15a9-4526-ad87-2edcd6ec20c1.png"
          altText="Healthcare professional integrating DocGenie white label telemedicine platform with existing EHR systems on multiple screens showing seamless workflow"
        />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <PerformanceSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <FeatureSection 
          title="Multi-Platform Access"
          description="Provide patients and providers with access to your virtual care platform across all devices and platforms for maximum convenience and engagement."
          features={[
            {
              title: "Responsive Web Applications",
              description: "Browser-based platform that adapts to any screen size from desktop workstations to tablets and smartphones."
            },
            {
              title: "Mobile-friendly experience",
              description: "Designed with features for convenient mobile use, it works seamless with iOS and Android devices with push notification capabilities."
            },
            {
              title: "Offline Functionality",
              description: "Select features available offline, ensuring continuity of care even when internet connectivity is limited."
            }
          ]}
          image="/lovable-uploads/1f93ec14-f910-4b12-8ff8-c1520b2b72bf.png"
          altText="Patient and doctor using white label telemedicine platform on mobile, tablet, and desktop devices"
          reversed={true}
        />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <ResultSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <LeadMarketSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <ImplementationSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <TechnicalStandardsSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <FeatureSection 
          title="Growth and Engagement Opportunities"
          description="Leverage your branded telemedicine platform to expand your practice reach and deepen patient relationships."
          features={[
            {
              title: "Geographic Expansion",
              description: "Extend your services beyond physical locations to reach patients in new markets without establishing physical facilities."
            },
            {
              title: "Service Line Diversification",
              description: "Introduce new virtual service offerings to complement your in-person care and create additional revenue streams."
            },
            {
              title: "Patient Retention Strategies",
              description: "Utilize the platform's engagement tools to maintain ongoing relationships with patients between visits."
            }
          ]}
          image="/lovable-uploads/cfd677f7-161c-43c3-ba5f-2ce373ddf739.png"
          altText="Healthcare provider expanding virtual care practice using white label telemedicine for geographic growth and patient retention"
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <PatientTrustSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <FAQ />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <RelatedSolutions currentSolutionPath="/solutions/white-label-telemedicine" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <SolutionCTA 
          title="Launch Your Branded Telemedicine Platform"
          description="Join healthcare providers who have successfully implemented our white label solution to deliver exceptional virtual care experiences under their trusted brand. Our platform provides the perfect balance of customization flexibility and enterprise-grade performance for clinics, doctors, and hospitals."
        />
      </ErrorBoundary>
    </Layout>
  );
};

export default WhiteLabelTelemedicine;
