
import React from "react";
import Layout from "@/components/Layout";
import SolutionHero from "./components/SolutionHero";
import FeatureSection from "./components/FeatureSection";
import SolutionCTA from "./components/SolutionCTA";
import ErrorBoundary from "@/components/ErrorBoundary";
import Head from "next/head";
import FAQ from "./components/FAQ";
import PatientTrustSection from "./components/PatientTrustSection";
import RelatedSolutions from "./components/RelatedSolutions";
import BrandTrustSection from "./components/WhiteLabel/BrandTrustSection";
import PerformanceSection from "./components/WhiteLabel/PerformanceSection";
import ImplementationSection from "./components/WhiteLabel/ImplementationSection";
import { whiteLabelSchemaData, whiteLabelFAQSchema } from "./components/WhiteLabel/SchemaData";

const WhiteLabelTelemedicine = () => {
  return (
    <Layout>
      <Head>
        <title>White Label Telemedicine Platform | Custom & HIPAA-Compliant Solutions for Clinics & Hospitals</title>
        <meta name="description" content="Launch your own branded telemedicine platform with DocGenie Global. Our customizable, HIPAA-compliant solution offers AI-powered virtual care, secure EMR integration, remote monitoring, and seamless patient-doctor communication for clinics, hospitals, and providers." />
        <link rel="canonical" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="White Label Telemedicine Platform | Custom & HIPAA-Compliant Solutions for Clinics & Hospitals" />
        <meta property="og:description" content="Launch your own branded telemedicine platform with DocGenie Global. Our customizable, HIPAA-compliant solution offers AI-powered virtual care, secure EMR integration, remote monitoring, and seamless patient-doctor communication for clinics, hospitals, and providers." />
        <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/solutions/white-label-telemedicine" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White Label Telemedicine Platform | Custom & HIPAA-Compliant Solutions for Clinics & Hospitals" />
        <meta name="twitter:description" content="Launch your own branded telemedicine platform with DocGenie Global. Our customizable, HIPAA-compliant solution offers AI-powered virtual care, secure EMR integration, remote monitoring, and seamless patient-doctor communication for clinics, hospitals, and providers." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="white label telemedicine, branded telehealth, custom telemedicine platform, virtual care branding, healthcare brand identity, clinic telemedicine solution, doctor virtual care platform" />
        <meta name="author" content="DocGenie Global" />
        
        {/* JSON-LD Structured Data - Product */}
        <script type="application/ld+json">
          {JSON.stringify(whiteLabelSchemaData)}
        </script>
        
        {/* JSON-LD Structured Data - FAQ */}
        <script type="application/ld+json">
          {JSON.stringify(whiteLabelFAQSchema)}
        </script>
      </Head>
      
      <ErrorBoundary>
        <SolutionHero 
          title="White Label Telemedicine Platform"
          description="Transform your healthcare practice with our fully customizable white label telemedicine solution that maintains your brand identity while delivering exceptional virtual care experiences. The best telemedicine platform for clinics, doctors, and hospitals."
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
          altText="Multi-device access"
          reversed={true}
        />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <ImplementationSection />
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
          altText="Healthcare business growth"
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
