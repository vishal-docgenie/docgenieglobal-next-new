
import React from "react";
import Link from "next/link";
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
import QuickAnswerSection from "@/components/solutions/WhiteLabel/QuickAnswerSection";
import KeyQuestionsSection from "@/components/solutions/WhiteLabel/KeyQuestionsSection";
import BuildVsBuySection from "@/components/solutions/WhiteLabel/BuildVsBuySection";
import Testimonials from "@/components/solutions/Testimonials";
import { whiteLabelSchemaData } from "@/components/solutions/WhiteLabel/SchemaData";

const WhiteLabelTelemedicine = () => {
  return (
    <Layout>
      <Head>
        <title>White Label Telemedicine Platform | HIPAA-Compliant | DocGenie Global</title>
        <meta name="description" content="Launch a HIPAA-compliant white label telemedicine platform for clinics, hospitals, and healthcare providers. Your brand, domain, patient portal, and care workflows. Request a demo." />
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
        <meta property="og:title" content="White Label Telemedicine Platform | HIPAA-Compliant Virtual Care Solution" />
        <meta property="og:description" content="Branded virtual care in weeks. HIPAA-compliant, fully white-label — your logo, your domain, your patient portal. Built for clinics, hospitals, and healthcare providers." />
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
        <meta name="twitter:title" content="White Label Telemedicine Platform | HIPAA-Compliant Virtual Care Solution" />
        <meta name="twitter:description" content="Branded virtual care in weeks. HIPAA-compliant, fully white-label — your logo, your domain, your patient portal. Built for clinics, hospitals, and healthcare providers." />
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
          description="Fully branded virtual care experience across web, tablet, and phone — with your logo, colours, domain, and patient portal."
          image="/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png"
          altText="Medical professional using white-labeled DocGenie telemedicine platform with customized branding for virtual consultation with patient"
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <section className="py-6 bg-white border-b border-gray-100" aria-label="Regional editions">
          <div className="container mx-auto px-8">
            <p className="text-gray-700 text-center">
              Serving healthcare providers worldwide. For region-specific guidance, see our{" "}
              <Link href="/us/white-label-telemedicine-platform/" className="text-brand-blue underline">United States edition</Link>,{" "}
              <Link href="/uk/white-label-telemedicine-platform/" className="text-brand-blue underline">UK edition</Link>,{" "}
              <Link href="/za/white-label-telemedicine-platform/" className="text-brand-blue underline">South Africa edition</Link>, and{" "}
              <Link href="/gh/white-label-telemedicine-platform/" className="text-brand-blue underline">Ghana edition</Link>.
            </p>
          </div>
        </section>
      </ErrorBoundary>

      <ErrorBoundary>
        <QuickAnswerSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <BrandTrustSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <KeyQuestionsSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <FeatureSection
          title="Integration with Your Systems"
          description="The platform is designed to work alongside your existing healthcare infrastructure. Integration requirements are reviewed during technical discovery based on your systems, available APIs and implementation scope."
          features={[
            {
              title: "EHR/EMR Integration",
              description: "EHR and EMR integration requirements can be assessed based on your existing systems, available APIs and implementation scope."
            },
            {
              title: "Payment Options",
              description: "Payment integration requirements can be assessed based on your preferred payment providers, billing systems and implementation scope."
            },
            {
              title: "API and Integration Options",
              description: "API and integration options are reviewed during technical discovery based on the required workflows and available systems."
            }
          ]}
          image="/lovable-uploads/beaa9887-15a9-4526-ad87-2edcd6ec20c1.png"
          altText="Healthcare professional integrating DocGenie white label telemedicine platform with existing EHR systems on multiple screens showing connected workflow"
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
              description: "Designed for convenient mobile use on smartphones and tablets, with support for push notifications."
            },
            {
              title: "Connectivity Options",
              description: "Availability of offline or connectivity-related functionality depends on the selected configuration and implementation scope."
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
        <BuildVsBuySection />
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
        <Testimonials />
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
          description="Explore how DocGenie can support your branded virtual-care requirements for clinics, doctors, and hospitals — combining customization flexibility with a HIPAA-compliant platform. A proposed implementation plan and timeline are provided after discovery."
        />
      </ErrorBoundary>
    </Layout>
  );
};

export default WhiteLabelTelemedicine;
