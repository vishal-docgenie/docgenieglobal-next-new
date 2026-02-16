
import React from "react";
import Layout from "@/components/Layout";
import SolutionHero from "./components/SolutionHero";
import FeatureSection from "./components/FeatureSection";
import SolutionCTA from "./components/SolutionCTA";
import { Brain, Bot, Sparkles, Zap, FileSearch } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Head from "next/head";
import RelatedSolutions from "./components/RelatedSolutions";
import FAQ from "./components/AICapabilities/FAQ";
import { aiCapabilitiesFAQSchema } from "./components/AICapabilities/SchemaData";

const AICapabilities = () => {
  const isMobile = useIsMobile();
  
  // Schema.org JSON-LD structured data for AI Capabilities
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI-Powered Healthcare Platform",
    "description": "Advanced artificial intelligence capabilities for healthcare providers to enhance clinical decision-making, optimize workflows, and improve patient outcomes with intelligent features.",
    "brand": {
      "@type": "Brand",
      "name": "DocGenie Global"
    },
    "logo": "https://www.docgenieglobal.com/lovable-uploads/docgenie-logo.png",
    "image": "https://www.docgenieglobal.com/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png",
    "category": "Healthcare Software",
    "applicationCategory": "AI Healthcare Platform",
    "features": [
      "Clinical Decision Support",
      "Conversational AI",
      "Predictive Analytics",
      "Automated Documentation",
      "Smart Documentation Assistance",
      "Quality Review",
      "Smart Follow-ups",
      "Personalized Health Content",
      "Conversational Health Assistants",
      "Intelligent Triage",
      "Operational Analytics",
      "Smart Scheduling"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Healthcare Providers",
      "description": "Physicians, clinics, hospitals, and healthcare organizations seeking to enhance clinical workflows with artificial intelligence"
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
        "name": "Healthcare AI Alliance"
      },
      "reviewBody": "DocGenie's AI-powered platform significantly enhances clinical decision-making while reducing administrative burden through intelligent automation."
    },
    "potentialAction": {
      "@type": "ViewAction",
      "target": "https://www.docgenieglobal.com/contact"
    }
  };
  
  return (
    <Layout>
      <Head>
        <title>AI-Powered Telemedicine Platform | Advanced Healthcare AI Capabilities - DocGenie Global</title>
        <meta 
          name="description" 
          content="Experience the future of healthcare with DocGenie Global’s AI-powered telemedicine platform. Leverage advanced AI for seamless workflows, intelligent EMR management, automated prescription fulfillment, remote patient monitoring, and enhanced virtual care security." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/solutions/ai-capabilities" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="AI-Powered Telemedicine Platform | Advanced Healthcare AI Capabilities - DocGenie Global" />
        <meta property="og:description" content="Experience the future of healthcare with DocGenie Global’s AI-powered telemedicine platform. Leverage advanced AI for seamless workflows, intelligent EMR management, automated prescription fulfillment, remote patient monitoring, and enhanced virtual care security." />
        <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/solutions/ai-capabilities" />
        <meta property="og:og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Telemedicine Platform | Advanced Healthcare AI Capabilities - DocGenie Global" />
        <meta name="twitter:description" content="Experience the future of healthcare with DocGenie Global’s AI-powered telemedicine platform. Leverage advanced AI for seamless workflows, intelligent EMR management, automated prescription fulfillment, remote patient monitoring, and enhanced virtual care security." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="artificial intelligence healthcare, AI clinical decision support, predictive analytics, automated documentation, AI healthcare platform, intelligent medical solutions, virtual healthcare assistants" />
        <meta name="author" content="DocGenie Global" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        
        {/* FAQ Schema Data */}
        <script type="application/ld+json">
          {JSON.stringify(aiCapabilitiesFAQSchema)}
        </script>
      </Head>
      
      <SolutionHero 
        title="AI-Powered Healthcare Capabilities" 
        description="Harness the power of artificial intelligence to enhance clinical decision-making, optimize workflows, and improve patient outcomes with our advanced AI-driven telemedicine platform." 
        image="/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png" 
        altText="AI-powered healthcare technology showing neural network visualization integrated with medical diagnostics and clinical decision support system" 
      />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-3 mb-6">Intelligent Healthcare Solutions</h2>
            <p className="text-lg text-gray-700">
              Our platform incorporates cutting-edge AI technologies to augment healthcare delivery across multiple dimensions, creating a more efficient and effective care system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-brand-blue/10">
              <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Brain className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Clinical Decision Support</h3>
              <p className="text-gray-600">
                AI-powered assistance for providers with evidence-based recommendations, risk stratification, and treatment guidance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-brand-blue/10">
              <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Bot className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Conversational AI</h3>
              <p className="text-gray-600">
                Intelligent virtual assistants for patient intake, symptom assessment, and preliminary triage before provider consultations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-brand-blue/10">
              <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">
                Advanced algorithms that identify patterns and predict potential health issues before they become critical.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <FeatureSection 
        title="AI-Powered Clinical Documentation" 
        description="Reduce administrative burden and improve documentation quality with our intelligent documentation solutions." 
        features={[
          {
            title: "Automated Transcription",
            description: "Real-time conversion of provider-patient conversations into structured clinical notes with high accuracy."
          }, 
          {
            title: "Smart Documentation Assistance",
            description: "AI-driven suggestions for clinical documentation, coding, and billing based on conversation context."
          }, 
          {
            title: "Quality Review",
            description: "Automated review of clinical documentation for completeness, consistency, and compliance with regulatory requirements."
          }
        ]} 
        image="/lovable-uploads/148ad39e-f5e2-40f2-9b06-9f9ee71f00fc.png" 
        altText="AI-powered clinical documentation system automatically converting medical conversations into structured notes with natural language processing technology" 
      />
      
      <div className="py-16 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-3 mb-6">Intelligent Patient Engagement</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our AI-driven patient engagement tools create personalized interactions that improve adherence, satisfaction, and outcomes.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                    <Zap className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2 text-left">Smart Follow-ups</h3>
                    <p className="text-gray-600 text-left">
                      AI determines optimal timing and content for patient follow-ups based on condition, risk level, and engagement patterns.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                    <FileSearch className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2 text-left">Personalized Health Content</h3>
                    <p className="text-gray-600 text-left">
                      Automatically curated educational resources tailored to each patient's specific conditions, literacy level, and learning preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                    <Bot className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2 text-left">Conversational Health Assistants</h3>
                    <p className="text-gray-600 text-left">
                      24/7 AI-powered virtual assistants that can answer patient questions, provide guidance, and escalate to human providers when necessary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:justify-self-end">
              <img src="/lovable-uploads/b137beac-05c7-4919-936b-ea3bbfa7fca7.png" alt="AI-powered intelligent patient engagement platform with personalized health content and virtual assistants on multiple devices" className="rounded-2xl shadow-xl max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      
      <FeatureSection 
        title="Intelligent Practice Operations" 
        description="Optimize your healthcare practice with AI tools that enhance operational efficiency and resource utilization." 
        features={[
          {
            title: "Smart Scheduling",
            description: "AI algorithms that optimize provider schedules, reducing wait times and improving resource utilization."
          }, 
          {
            title: "Intelligent Triage",
            description: "Automated patient prioritization based on symptom severity, medical history, and available resources."
          }, 
          {
            title: "Operational Analytics",
            description: "Advanced insights into practice performance with AI-driven recommendations for process improvements."
          }
        ]} 
        image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
        altText="AI-powered healthcare operations dashboard showing intelligent scheduling, automated triage system, and operational analytics for medical practice optimization" 
        reversed={true} 
      />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-3 mb-6">The DocGenie AI Advantage</h2>
            <p className="text-lg text-gray-700">
              Our approach to healthcare AI is built on three key principles that ensure our technology enhances rather than replaces the human elements of care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-8 rounded-xl border border-brand-blue/20">
              <h3 className="text-xl font-semibold mb-4">Human-Centered Design</h3>
              <p className="text-gray-700">
                Our AI technologies are designed to augment human capabilities, not replace them. We focus on creating tools that enhance the provider-patient relationship by removing friction and administrative burden.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-8 rounded-xl border border-brand-blue/20">
              <h3 className="text-xl font-semibold mb-4">Transparent & Explainable</h3>
              <p className="text-gray-700">
                We believe healthcare AI should never be a black box. Our systems provide clear explanations for recommendations and insights, allowing providers to understand and validate AI-generated content.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-8 rounded-xl border border-brand-blue/20">
              <h3 className="text-xl font-semibold mb-4">Privacy-First Architecture</h3>
              <p className="text-gray-700">
                All our AI capabilities are built with privacy and security as foundational principles, ensuring patient data is protected while still enabling powerful AI applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add the FAQ component here */}
      <FAQ />
      
      <RelatedSolutions currentSolutionPath="/solutions/ai-capabilities" />
      
      <SolutionCTA 
        title="Transform Your Practice with AI-Powered Healthcare" 
        description="Join forward-thinking healthcare organizations that are leveraging the power of artificial intelligence to enhance clinical decision-making, streamline operations, and improve patient outcomes. Our AI capabilities integrate seamlessly with our telemedicine platform, providing a comprehensive solution for modern healthcare delivery." 
      />
    </Layout>
  );
};

export default AICapabilities;
