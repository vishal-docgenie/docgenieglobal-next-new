
import React from "react";
import Layout from "@/components/Layout";
import SolutionHero from "./components/SolutionHero";
import FeatureSection from "./components/FeatureSection";
import SolutionCTA from "./components/SolutionCTA";
import FAQ from "./components/ChronicCare/FAQ";
import RelatedSolutions from "./components/RelatedSolutions";
import Head from "next/head";
import { useIsMobile } from "@/hooks/use-mobile";
import { Stethoscope, ClipboardList, Activity, BarChart3, Shield, Users, ArrowRight } from "lucide-react";
import ErrorBoundary from "@/components/ErrorBoundary";

const ChronicCareManagement = () => {
  const isMobile = useIsMobile();
  
  // Schema.org JSON-LD structured data for Chronic Care Management
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Remote Chronic Care Management Platform",
    "description": "Comprehensive platform for healthcare providers to effectively manage patients with chronic conditions through remote monitoring, personalized care plans, and risk stratification.",
    "brand": {
      "@type": "Brand",
      "name": "DocGenie Global"
    },
    "logo": "https://www.docgenieglobal.com/lovable-uploads/docgenie-logo.png",
    "image": "https://www.docgenieglobal.com/lovable-uploads/1adee902-8f64-47fe-9e3c-367901c293a8.png",
    "category": "Healthcare Software",
    "applicationCategory": "Chronic Care Management Platform",
    "features": [
      "Continuous Remote Monitoring",
      "Personalized Care Plans",
      "Risk Stratification",
      "Automated Patient Outreach",
      "Care Team Collaboration",
      "Documentation Assistance",
      "Time Tracking & Reporting",
      "Compliance Safeguards",
      "Patient Eligibility Management",
      "Patient-Reported Outcomes",
      "Educational Resources",
      "Goal Setting & Progress Tracking"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Healthcare Providers",
      "description": "Physicians, clinics, hospitals, and care managers who provide services to patients with chronic conditions"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Chronic Care Association"
      },
      "reviewBody": "DocGenie's chronic care management platform streamlines workflows and improves patient outcomes while maximizing reimbursement opportunities."
    },
    "potentialAction": {
      "@type": "ViewAction",
      "target": "https://www.docgenieglobal.com/contact"
    }
  };
  
  return (
    <Layout>
      <Head>
        <title>Chronic Care Management Solution | AI-Driven Telemedicine for Long-Term Patient Care</title>
        <meta 
          name="description" 
          content="Streamline chronic disease management with DocGenie Global’s AI-powered telemedicine platform. Enhance patient engagement, automate workflows, integrate EMR, and enable remote monitoring to deliver personalized, continuous care for chronic conditions." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/solutions/chronic-care-management" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Chronic Care Management Solution | AI-Driven Telemedicine for Long-Term Patient Care" />
        <meta property="og:description" content="Streamline chronic disease management with DocGenie Global’s AI-powered telemedicine platform. Enhance patient engagement, automate workflows, integrate EMR, and enable remote monitoring to deliver personalized, continuous care for chronic conditions." />
        <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/1adee902-8f64-47fe-9e3c-367901c293a8.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/solutions/chronic-care-management" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chronic Care Management Solution | AI-Driven Telemedicine for Long-Term Patient Care" />
        <meta name="twitter:description" content="Streamline chronic disease management with DocGenie Global’s AI-powered telemedicine platform. Enhance patient engagement, automate workflows, integrate EMR, and enable remote monitoring to deliver personalized, continuous care for chronic conditions." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/1adee902-8f64-47fe-9e3c-367901c293a8.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="chronic care management, remote patient monitoring, CCM, healthcare management, chronic conditions, telehealth, virtual care, patient outcomes" />
        <meta name="author" content="DocGenie Global" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Head>
      
      <ErrorBoundary>
        <SolutionHero 
          title="Remote Chronic Care Management"
          description="Empower your healthcare team to effectively manage patients with chronic conditions through our comprehensive remote care platform. Improve patient outcomes while optimizing staff resources and maximizing reimbursement opportunities."
          image="/lovable-uploads/1adee902-8f64-47fe-9e3c-367901c293a8.png"
          altText="Healthcare professional monitoring patient vitals remotely on tablet device showing DocGenie chronic care management dashboard"
        />
      </ErrorBoundary>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-3 mb-6">Comprehensive Chronic Care Solution</h2>
            <p className="text-lg text-gray-700">
              Our platform provides the tools healthcare providers need to deliver effective remote management for patients with chronic conditions, ensuring continuous care beyond office visits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className={`h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 ${isMobile ? 'mx-auto' : 'mx-auto'}`}>
                <Stethoscope className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Remote Monitoring</h3>
              <p className="text-gray-600">
                Connect with patients' health metrics in real-time through integrated devices and patient-reported outcomes to proactively address health changes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className={`h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 ${isMobile ? 'mx-auto' : 'mx-auto'}`}>
                <ClipboardList className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Care Plans</h3>
              <p className="text-gray-600">
                Create and manage customized care plans that adjust to each patient's unique needs, conditions, and progress over time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className={`h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 ${isMobile ? 'mx-auto' : 'mx-auto'}`}>
                <Activity className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Risk Stratification</h3>
              <p className="text-gray-600">
                Identify high-risk patients through advanced analytics and prioritize interventions where they will have the greatest impact on outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <ErrorBoundary>
        <FeatureSection 
          title="Streamlined Chronic Care Workflows"
          description="Our platform optimizes your team's efficiency with purpose-built tools that reduce administrative burden and maximize the time spent on direct patient care."
          features={[
            {
              title: "Automated Patient Outreach",
              description: "Schedule regular check-ins, medication reminders, and educational content tailored to each patient's conditions and needs."
            },
            {
              title: "Care Team Collaboration",
              description: "Enable seamless communication among physicians, nurses, and care managers with shared dashboards and notification systems."
            },
            {
              title: "Documentation Assistance",
              description: "Streamline required documentation for chronic care management billing with templates and time-tracking features."
            }
          ]}
          image="/lovable-uploads/70187849-1e04-4dd9-b0f3-31ec5096cf1c.png"
          altText="Healthcare team collaborating on chronic care management platform showing patient data and care plans"
        />
      </ErrorBoundary>
      
      <div className="py-16 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-3 mb-6">Maximize CCM Reimbursements</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our platform helps healthcare providers accurately track, document, and bill for chronic care management services, ensuring you capture all eligible reimbursements.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                    <BarChart3 className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2 text-left">Time Tracking & Reporting</h3>
                    <p className="text-gray-600 text-left">
                      Automatically log and categorize non-face-to-face care time to support CPT code requirements for chronic care management.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                    <Shield className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2 text-left">Compliance Safeguards</h3>
                    <p className="text-gray-600 text-left">
                      Built-in verification tools ensure all CCM billing requirements are met before claim submission, reducing denial risks.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                    <Users className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2 text-left">Patient Eligibility Management</h3>
                    <p className="text-gray-600 text-left">
                      Quickly identify eligible patients and track enrollment status to maximize program participation and revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:justify-self-end">
              <img src="/lovable-uploads/bf340c3b-15df-4252-a307-5db9934462fa.png" 
                   alt="Dashboard showing chronic care management billing metrics, time tracking, and reimbursement analytics"
                   className="rounded-2xl shadow-xl max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      
      <ErrorBoundary>
        <FeatureSection 
          title="Improved Patient Engagement & Outcomes"
          description="Enhance the quality of care for patients with chronic conditions through continuous engagement and monitoring tools that drive better health outcomes."
          features={[
            {
              title: "Patient-Reported Outcomes",
              description: "Gather regular symptom updates, medication adherence data, and quality of life measures through easy-to-use patient interfaces."
            },
            {
              title: "Educational Resources",
              description: "Deliver condition-specific education and self-management guidance to empower patients in their healthcare journey."
            },
            {
              title: "Goal Setting & Progress Tracking",
              description: "Collaborate with patients to establish achievable health goals and visualize progress over time to boost motivation."
            }
          ]}
          image="/lovable-uploads/56534aae-fe9c-49ca-98a2-0bf0cddcbab3.png"
          altText="Patient using mobile app to track chronic condition metrics and communicate with care team"
          reversed={true}
        />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <FAQ />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <RelatedSolutions currentSolutionPath="/solutions/chronic-care-management" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <SolutionCTA 
          title="Transform Your Chronic Care Management"
          description="Join healthcare providers who have improved patient outcomes, increased efficiency, and maximized reimbursements with our comprehensive chronic care management platform. Our team is ready to help you implement a tailored solution for your practice."
        />
      </ErrorBoundary>
    </Layout>
  );
};

export default ChronicCareManagement;
