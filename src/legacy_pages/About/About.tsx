
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";
import Head from "next/head";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>White-Label Telemedicine Platform for Clinics & Hospitals | About Us</title>
        <meta name="description" content="Learn how our white-label telemedicine platform empowers clinics and hospitals with HIPAA-compliant virtual care, EMR integrations, and enterprise support." />
        <link rel="canonical" href="https://www.docgenieglobal.com/about" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="White-Label Telemedicine Platform for Clinics & Hospitals | About Us" />
        <meta property="og:description" content="Learn how our white-label telemedicine platform empowers clinics and hospitals with HIPAA-compliant virtual care, EMR integrations, and enterprise support." />
        <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/b7dc5536-65af-4491-b947-6b6066db97e4.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White-Label Telemedicine Platform for Clinics & Hospitals | About Us" />
        <meta name="twitter:description" content="Learn how our white-label telemedicine platform empowers clinics and hospitals with HIPAA-compliant virtual care, EMR integrations, and enterprise support." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/b7dc5536-65af-4491-b947-6b6066db97e4.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="telemedicine company, healthcare technology team, virtual care platform, DocGenie team, telemedicine mission, healthcare innovation, medical software company" />
        <meta name="author" content="DocGenie Global" />
      </Head>
      
      <HeroSection />
      <div className="container mx-auto px-4">
        <FeatureSection />
      </div>
      <ValuesSection />
      <TeamSection />
      <StatsSection />
      <CTASection />
    </Layout>
  );
};

export default About;
