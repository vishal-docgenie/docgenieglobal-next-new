
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Shield, 
  Globe, 
  Smartphone, 
  Zap, 
  Users, 
  BarChart 
} from "lucide-react";
import LazyImage from "@/components/common/LazyImage";

const FeatureSection = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-brand-blue" />,
      title: "HIPAA-Compliant Virtual Care",
      description: "Our secure telehealth platform protects patient data with enterprise-grade encryption and comprehensive security measures that exceed compliance requirements."
    },
    {
      icon: <Globe className="h-12 w-12 text-brand-blue" />,
      title: "White Label Telemedicine Solution",
      description: "Deliver virtual care under your trusted brand with full customization of the platform's appearance, including your clinic's logo, colors, and branding elements."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-brand-blue" />,
      title: "Multi-Device Virtual Consultations",
      description: "Enable patients to access telehealth services through any device with our responsive platform that works seamlessly on desktops, tablets, and mobile phones."
    },
    {
      icon: <Zap className="h-12 w-12 text-brand-blue" />,
      title: "Seamless EHR/EMR Integration",
      description: "Connect our telehealth platform with your existing electronic health records system for unified documentation and complete patient care histories."
    },
    {
      icon: <Users className="h-12 w-12 text-brand-blue" />,
      title: "Comprehensive Chronic Care Management",
      description: "Specialized telehealth tools for continuous remote monitoring and virtual care coordination for patients with multiple chronic conditions."
    },
    {
      icon: <BarChart className="h-12 w-12 text-brand-blue" />,
      title: "Telehealth Analytics Dashboard",
      description: "Gain actionable insights into your virtual care performance, patient engagement patterns, and clinical outcomes through comprehensive reporting."
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6 reveal animate-fade-in">
            Complete <span className="text-brand-blue">Telemedicine Platform</span> for Healthcare Providers
          </h2>
          <p className="subtitle max-w-3xl mx-auto reveal animate-fade-in reveal-delay-100 text-left">
            Our end-to-end telehealth solution delivers everything clinics and doctors need to provide exceptional virtual care experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow reveal animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
              <p className="text-base text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center reveal animate-fade-in">
          <Button size="lg" className="primary-button text-wrap max-w-full px-4 py-3 sm:px-6">
            <Link href="/solutions">
                Explore Our Complete Virtual Care Platform
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
