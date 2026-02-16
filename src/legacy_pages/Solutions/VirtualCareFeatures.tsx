import React from "react";
import Layout from "@/components/Layout";
import SolutionHero from "./components/SolutionHero";
import FeatureSection from "./components/FeatureSection";
import SolutionCTA from "./components/SolutionCTA";
import Head from "next/head";
import { CheckCircle, Calendar, Video, Activity, Shield, MessageSquare, Clock } from "lucide-react";
import RelatedSolutions from "./components/RelatedSolutions";
import ErrorBoundary from "@/components/ErrorBoundary";
import FAQ from "./components/VirtualCare/FAQ";
import { virtualCareFAQSchema } from "./components/VirtualCare/SchemaData";

const VirtualCareFeatures = () => {
  // Schema.org JSON-LD structured data for Virtual Care Features
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Virtual Healthcare Platform for Doctors and Clinics",
    "description": "A comprehensive virtual care platform with HD telehealth consultations, advanced appointment scheduling, and HIPAA-compliant security for healthcare providers.",
    "brand": {
      "@type": "Brand",
      "name": "DocGenie Global"
    },
    "logo": "https://www.docgenieglobal.com/lovable-uploads/docgenie-logo.png",
    "image": "https://www.docgenieglobal.com/lovable-uploads/a3b087bc-54d6-41e8-8111-32cd33c8dbf0.png",
    "category": "Healthcare Software",
    "applicationCategory": "Virtual Care Platform",
    "features": [
      "HD Telehealth Consultations",
      "Advanced Appointment Scheduling",
      "HIPAA-Compliant Security",
      "White Label Customization",
      "Remote Patient Monitoring",
      "Integrated Billing & Reimbursement",
      "Complete Patient Journey Management",
      "Integrated Clinical Documentation",
      "Seamless EHR Integration",
      "Multi-Provider Support",
      "Patient Engagement Tools"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Healthcare Providers",
      "description": "Doctors, clinics, medical practices, and healthcare organizations requiring comprehensive virtual care solutions"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Healthcare Technology Association"
      },
      "reviewBody": "DocGenie's virtual care platform offers an exceptional suite of features for healthcare providers while maintaining ease of use for both providers and patients."
    },
    "potentialAction": {
      "@type": "ViewAction",
      "target": "https://www.docgenieglobal.com/contact"
    }
  };

  return (
    <Layout>
      <Head>
        <title>Virtual Care Platform Features | AI-Powered HIPAA-Compliant Telemedicine Solutions</title>
        <meta 
          name="description" 
          content="Explore the advanced virtual care features of DocGenie Global’s HIPAA-compliant telemedicine platform. Benefit from AI-driven video consultations, secure patient management, EMR integration, remote monitoring, and specialty referral systems designed for clinics and hospitals." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/solutions/virtual-care-features" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Virtual Care Platform Features | AI-Powered HIPAA-Compliant Telemedicine Solutions" />
        <meta property="og:description" content="Explore the advanced virtual care features of DocGenie Global’s HIPAA-compliant telemedicine platform. Benefit from AI-driven video consultations, secure patient management, EMR integration, remote monitoring, and specialty referral systems designed for clinics and hospitals." />
        <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/a3b087bc-54d6-41e8-8111-32cd33c8dbf0.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/solutions/virtual-care-features" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Virtual Care Platform Features | AI-Powered HIPAA-Compliant Telemedicine Solutions" />
        <meta name="twitter:description" content="Explore the advanced virtual care features of DocGenie Global’s HIPAA-compliant telemedicine platform. Benefit from AI-driven video consultations, secure patient management, EMR integration, remote monitoring, and specialty referral systems designed for clinics and hospitals." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/a3b087bc-54d6-41e8-8111-32cd33c8dbf0.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="virtual care platform, telehealth features, telemedicine technology, healthcare video consultations, patient management system, virtual healthcare solution, doctor telemedicine platform" />
        <meta name="author" content="DocGenie Global" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(virtualCareFAQSchema)}
        </script>
      </Head>
      
      <ErrorBoundary>
        <SolutionHero 
          title="Comprehensive Virtual Healthcare Platform" 
          description="Discover the most advanced features of our end-to-end telehealth solution designed specifically for healthcare providers. Our virtual care platform offers everything doctors and clinics need for efficient and effective remote patient care."
          image="/lovable-uploads/a3b087bc-54d6-41e8-8111-32cd33c8dbf0.png"
          altText="Comprehensive virtual care platform interface showing telehealth features with HD video consultation, scheduling tools, and secure patient communications for healthcare providers"
        />
      </ErrorBoundary>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-3 mb-6">Key Features of Our Virtual Healthcare Platform</h2>
            <p className="text-lg text-gray-700">
              Explore the comprehensive features of our telemedicine platform, designed to enhance patient care and streamline healthcare operations for doctors and clinics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Video className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">HD Telehealth Consultations</h3>
              <p className="text-gray-600">
                Deliver crystal-clear video consultations that adapt to any connection speed, ensuring professional patient interactions every time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Calendar className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Advanced Appointment Scheduling</h3>
              <p className="text-gray-600">
                Streamline your practice with intelligent scheduling tools that reduce no-shows and maximize provider availability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">HIPAA-Compliant Security</h3>
              <p className="text-gray-600">
                Protect patient data with enterprise-grade security features including end-to-end encryption and secure access controls.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Comparison Section - Why DocGenie is the Best Virtual Care Platform */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-3 mb-6">Why DocGenie is the Best Virtual Care Platform for Doctors and Clinics</h2>
            <p className="text-lg text-gray-700">
              See how our end-to-end telehealth solution compares to other virtual healthcare platforms on the market.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-blue text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">DocGenie</th>
                  <th className="p-4 text-center">Other Platforms</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">White Label Customization</td>
                  <td className="p-4 text-center text-green-600"><CheckCircle className="h-5 w-5 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-400">Limited</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-medium">Full Telehealth Appointment Suite</td>
                  <td className="p-4 text-center text-green-600"><CheckCircle className="h-5 w-5 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-400">Basic</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Remote Patient Monitoring</td>
                  <td className="p-4 text-center text-green-600"><CheckCircle className="h-5 w-5 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-400">Additional Cost</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-medium">Integrated Billing & Reimbursement</td>
                  <td className="p-4 text-center text-green-600"><CheckCircle className="h-5 w-5 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-400">Limited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">HIPAA Compliance</td>
                  <td className="p-4 text-center text-green-600"><CheckCircle className="h-5 w-5 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-400">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Detailed Appointment Scheduling Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="heading-3 mb-6">Advanced Telehealth Appointment Scheduling</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our virtual healthcare platform features powerful appointment scheduling tools designed specifically for medical practices.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Calendar className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Smart Scheduling Logic</h3>
                    <p className="text-gray-600">Automatically suggests optimal appointment times based on provider availability and patient history.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MessageSquare className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Automated Reminders</h3>
                    <p className="text-gray-600">Reduce no-shows with customizable SMS and email reminders at intervals you define.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Clock className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Real-Time Availability</h3>
                    <p className="text-gray-600">Allow patients to book appointments based on actual provider availability, synchronizing with your existing calendars.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Activity className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Pre-Visit Workflows</h3>
                    <p className="text-gray-600">Collect patient information, insurance details, and consent forms before the appointment begins.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/588df964-312d-4467-a9cb-2ec984d2931c.png" 
                alt="Telehealth appointment scheduling dashboard showing calendar integration, automated reminders, and patient booking interface for medical practices" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <FeatureSection 
        title="End-to-End Virtual Healthcare Platform" 
        description="Our comprehensive telehealth solution covers every aspect of virtual care delivery, from patient acquisition to follow-up care and reimbursement." 
        features={[
          {
            title: "Complete Patient Journey Management",
            description: "Guide patients seamlessly from initial contact through treatment and follow-up with integrated tools for each stage of care."
          },
          {
            title: "Integrated Clinical Documentation",
            description: "Document patient encounters efficiently with specialty-specific templates, voice-to-text capabilities, and structured data entry."
          },
          {
            title: "Seamless EHR Integration",
            description: "Integrate with all major electronic health record systems to ensure continuity of care and complete patient records."
          },
          {
            title: "Comprehensive Billing Solutions",
            description: "Maximize reimbursement with built-in coding assistance, insurance verification, and claims management tools."
          },
          {
            title: "Multi-Provider Support",
            description: "Scale your virtual care offering with tools designed for practices of all sizes, from solo practitioners to large healthcare systems."
          },
          {
            title: "Patient Engagement Tools",
            description: "Maintain ongoing relationships with secure messaging, follow-up scheduling, and educational resource distribution."
          }
        ]}
        image="/lovable-uploads/3f51f33f-59a6-4abd-bd67-9595023e307a.png"
        altText="End-to-end telehealth platform showing complete patient journey management with clinical documentation, EHR integration, and billing modules for healthcare providers"
      />
      
      {/* FAQ Section */}
      <FAQ />
      
      <RelatedSolutions currentSolutionPath="/solutions/virtual-care-features" />
      
      <SolutionCTA 
        title="Experience the Best Virtual Care Platform for Your Practice" 
        description="Join thousands of healthcare providers who have transformed their practice with our comprehensive virtual healthcare platform. Our end-to-end telehealth solution provides doctors and clinics with everything needed to deliver exceptional virtual care experiences."
      />
    </Layout>
  );
};

export default VirtualCareFeatures;
