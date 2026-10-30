
import React from "react";
import Layout from "@/components/Layout";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureSection from "@/components/solutions/FeatureSection";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import RelatedSolutions from "@/components/solutions/RelatedSolutions";
import Head from "next/head";
import ErrorBoundary from "@/components/ErrorBoundary";

// Import the refactored components
import DataSecuritySection from "@/components/solutions/HIPAACompliant/DataSecuritySection";
import ComplianceChecklist from "@/components/solutions/HIPAACompliant/ComplianceChecklist";
import ImportanceSection from "@/components/solutions/HIPAACompliant/ImportanceSection";
import HealthRecordsSection from "@/components/solutions/HIPAACompliant/HealthRecordsSection";
import SecurePlatformSection from "@/components/solutions/HIPAACompliant/SecurePlatformSection";
import BillingSection from "@/components/solutions/HIPAACompliant/BillingSection";
import FAQ from "@/components/solutions/HIPAACompliant/FAQ";
import PlatformScopeSection from "@/components/solutions/HIPAACompliant/PlatformScopeSection";
import EvaluationSection from "@/components/solutions/HIPAACompliant/EvaluationSection";
import { hipaaSchemaData } from "@/components/solutions/HIPAACompliant/SchemaData";

const HIPAACompliantHealthcare = () => {
  return (
    <Layout>
      <Head>
        <title>HIPAA-Compliant Telemedicine Platform & Software | DocGenie Global</title>
        <meta 
          name="description" 
          content="A HIPAA-compliant telemedicine and telehealth platform for clinics, hospitals and healthcare providers. Branded virtual care, EHR/EMR integration and secure patient data handling. Request a demo." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare/" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="HIPAA-Compliant Telemedicine Platform & Software | DocGenie Global" />
        <meta property="og:description" content="A HIPAA-compliant telemedicine and telehealth platform for clinics, hospitals and healthcare providers. Branded virtual care, EHR/EMR integration and secure patient data handling. Request a demo." />
        <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/24334ddb-7ed2-4c58-b7ca-2088b1cb7638.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HIPAA-Compliant Telemedicine Platform & Software | DocGenie Global" />
        <meta name="twitter:description" content="A HIPAA-compliant telemedicine and telehealth platform for clinics, hospitals and healthcare providers. Branded virtual care, EHR/EMR integration and secure patient data handling. Request a demo." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/24334ddb-7ed2-4c58-b7ca-2088b1cb7638.png" />
        <meta name="twitter:url" content="https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare/" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="DocGenie Global" />
        
        {/* JSON-LD Structured Data - Product */}
        <script type="application/ld+json">
          {JSON.stringify(hipaaSchemaData)}
        </script>
      </Head>
      
      <ErrorBoundary>
        <SolutionHero 
          title="HIPAA-Compliant Telemedicine Platform" 
          description="A HIPAA-compliant telemedicine and telehealth platform that clinics, hospitals and healthcare providers run under their own brand — secure virtual consultations, EHR/EMR workflow support and protected patient data handling."
          image="/lovable-uploads/24334ddb-7ed2-4c58-b7ca-2088b1cb7638.png"
          altText="Secure HIPAA-compliant telemedicine consultation with medical data protection visualization showing encrypted patient information and security protocols"
        />
      </ErrorBoundary>
      
      <PlatformScopeSection />

      <DataSecuritySection />
      
      <ComplianceChecklist />
      
      <ImportanceSection />
      
      <HealthRecordsSection />
      
      <FeatureSection 
        title="How Patient Data Is Handled"
        description="Patient data handling on the platform is built around HIPAA-compliant workflows, with the specifics of any deployment confirmed during discovery."
        features={[
          {
            title: "Encrypted in transit and at rest",
            description: "Patient data is encrypted in transit and at rest, so consultations, records and messages are protected as they move through the platform."
          },
          {
            title: "Role-based access",
            description: "Clinicians, administrators, finance teams and patients each see only what their role requires, so access to patient records is scoped rather than shared."
          },
          {
            title: "Access logging",
            description: "Access to patient records is logged, which is what lets your own compliance team review who viewed or changed a record and when."
          }
        ]}
        image="/lovable-uploads/f7bb3e21-5027-4f43-937b-454a5140ad6f.png"
        altText="Healthcare IT professional monitoring HIPAA security measures for electronic health records with multiple secure servers and encryption visualizations"
      />
      
      <SecurePlatformSection />
      
      <BillingSection />
      
      <FeatureSection 
        title="What You Can Verify Before You Commit"
        description="Compliance is a shared responsibility between your organisation and your technology partners, so these are the things worth establishing in writing rather than taking on trust."
        features={[
          {
            title: "HIPAA-compliant platform",
            description: "DocGenie Global delivers virtual care on a HIPAA-compliant platform, with patient data handling designed around HIPAA workflows."
          },
          {
            title: "ISO/IEC 27001:2022 certified",
            description: "The company holds ISO/IEC 27001:2022 certification for its information security management system — an independently audited standard you can ask to see evidence of."
          },
          {
            title: "Agreements confirmed in discovery",
            description: "Contractual and data-processing arrangements, integration scope and security documentation are reviewed with your team during discovery, so what applies to your deployment is set out before you commit."
          }
        ]}
        image="/lovable-uploads/0d52e95d-09fc-40f0-a772-a1ecd765215a.png"
        altText="Healthcare compliance officer reviewing security and data-processing documentation for a telemedicine platform"
        reversed={true}
      />
      
      <EvaluationSection />

      <ErrorBoundary>
        <FAQ />
      </ErrorBoundary>
      
      <RelatedSolutions currentSolutionPath="/solutions/hipaa-compliant-healthcare" />
      
      <SolutionCTA 
        title="Run Your Virtual Care on a HIPAA-Compliant Platform" 
        description="Tell us how you deliver care today and which systems you already run. We will set out what the platform covers, what integration would involve, and what applies to your deployment — before you commit to anything."
      />
    </Layout>
  );
};

export default HIPAACompliantHealthcare;
