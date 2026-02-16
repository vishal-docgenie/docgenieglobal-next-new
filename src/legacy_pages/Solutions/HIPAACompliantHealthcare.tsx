
import React from "react";
import Layout from "@/components/Layout";
import SolutionHero from "./components/SolutionHero";
import FeatureSection from "./components/FeatureSection";
import SolutionCTA from "./components/SolutionCTA";
import RelatedSolutions from "./components/RelatedSolutions";
import Head from "next/head";
import ErrorBoundary from "@/components/ErrorBoundary";

// Import the refactored components
import DataSecuritySection from "./components/HIPAACompliant/DataSecuritySection";
import ComplianceChecklist from "./components/HIPAACompliant/ComplianceChecklist";
import ImportanceSection from "./components/HIPAACompliant/ImportanceSection";
import HealthRecordsSection from "./components/HIPAACompliant/HealthRecordsSection";
import SecurePlatformSection from "./components/HIPAACompliant/SecurePlatformSection";
import BillingSection from "./components/HIPAACompliant/BillingSection";
import FAQ from "./components/HIPAACompliant/FAQ";
import { hipaaSchemaData, hipaaFAQSchema } from "./components/HIPAACompliant/SchemaData";

const HIPAACompliantHealthcare = () => {
  return (
    <Layout>
      <Head>
        <title>HIPAA-Compliant Telemedicine Platform | Secure Virtual Healthcare Solutions</title>
        <meta 
          name="description" 
          content="Deliver virtual care with confidence using DocGenie Global’s HIPAA-compliant telemedicine platform. Enjoy enterprise-grade security, end-to-end encryption, comprehensive audit trails, seamless EMR integration, and AI-powered features — all designed to protect patient data and enhance clinical workflows." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="HIPAA-Compliant Telemedicine Platform | Secure Virtual Healthcare Solutions" />
        <meta property="og:description" content="Deliver virtual care with confidence using DocGenie Global’s HIPAA-compliant telemedicine platform. Enjoy enterprise-grade security, end-to-end encryption, comprehensive audit trails, seamless EMR integration, and AI-powered features — all designed to protect patient data and enhance clinical workflows." />
        <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/24334ddb-7ed2-4c58-b7ca-2088b1cb7638.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HIPAA-Compliant Telemedicine Platform | Secure Virtual Healthcare Solutions" />
        <meta name="twitter:description" content="Deliver virtual care with confidence using DocGenie Global’s HIPAA-compliant telemedicine platform. Enjoy enterprise-grade security, end-to-end encryption, comprehensive audit trails, seamless EMR integration, and AI-powered features — all designed to protect patient data and enhance clinical workflows." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/24334ddb-7ed2-4c58-b7ca-2088b1cb7638.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="HIPAA compliance, secure telemedicine, healthcare data security, protected health information, patient privacy, telemedicine security, virtual care compliance" />
        <meta name="author" content="DocGenie Global" />
        
        {/* JSON-LD Structured Data - Product */}
        <script type="application/ld+json">
          {JSON.stringify(hipaaSchemaData)}
        </script>
        
        {/* JSON-LD Structured Data - FAQ */}
        <script type="application/ld+json">
          {JSON.stringify(hipaaFAQSchema)}
        </script>
      </Head>
      
      <ErrorBoundary>
        <SolutionHero 
          title="HIPAA-Compliant Telemedicine Platform" 
          description="Deliver virtual care with complete confidence using our fully HIPAA-compliant telemedicine solution, featuring enterprise-grade security, comprehensive audit trails, and secure digital health records management."
          image="/lovable-uploads/24334ddb-7ed2-4c58-b7ca-2088b1cb7638.png"
          altText="Secure HIPAA-compliant telemedicine consultation with medical data protection visualization showing encrypted patient information and security protocols"
        />
      </ErrorBoundary>
      
      <DataSecuritySection />
      
      <ComplianceChecklist />
      
      <ImportanceSection />
      
      <HealthRecordsSection />
      
      <FeatureSection 
        title="Comprehensive Security Measures"
        description="Our platform employs a multi-layered security approach to protect patient data and ensure compliance with HIPAA regulations."
        features={[
          {
            title: "Secure Data Storage",
            description: "Redundant data storage in HIPAA-compliant data centers with regular backups and disaster recovery protocols."
          },
          {
            title: "Network Security",
            description: "Firewalls, intrusion detection systems, and regular security audits to protect against unauthorized access."
          },
          {
            title: "Physical Security",
            description: "Strict physical access controls to data centers, including biometric identification and 24/7 monitoring."
          }
        ]}
        image="/lovable-uploads/f7bb3e21-5027-4f43-937b-454a5140ad6f.png"
        altText="Healthcare IT professional monitoring HIPAA security measures for electronic health records with multiple secure servers and encryption visualizations"
      />
      
      <SecurePlatformSection />
      
      <BillingSection />
      
      <FeatureSection 
        title="Ensure Compliance with Our Comprehensive Solution"
        description="Our HIPAA-compliant telemedicine platform provides the tools and resources you need to meet regulatory requirements and protect patient data."
        features={[
          {
            title: "Business Associate Agreement (BAA)",
            description: "We provide a BAA to all clients, ensuring our commitment to HIPAA compliance and data protection."
          },
          {
            title: "Security Risk Assessments",
            description: "Regular security risk assessments to identify and address potential vulnerabilities in our platform."
          },
          {
            title: "Employee Training",
            description: "Ongoing employee training on HIPAA regulations and best practices for data security."
          }
        ]}
        image="/lovable-uploads/0d52e95d-09fc-40f0-a772-a1ecd765215a.png"
        altText="Healthcare compliance officer reviewing HIPAA security documentation and conducting risk assessment on secure telemedicine platform"
        reversed={true}
      />
      
      <ErrorBoundary>
        <FAQ />
      </ErrorBoundary>
      
      <RelatedSolutions currentSolutionPath="/solutions/hipaa-compliant-healthcare" />
      
      <SolutionCTA 
        title="Ensure Complete HIPAA Compliance for Your Virtual Care Services" 
        description="Join healthcare organizations that trust our platform to maintain the highest standards of security and compliance. Our HIPAA-compliant telemedicine solution provides peace of mind while enabling you to focus on what matters most – delivering exceptional patient care."
      />
    </Layout>
  );
};

export default HIPAACompliantHealthcare;
