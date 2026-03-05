
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";

const HeroSection = () => {
  const keyPoints = [
    "White Label Telemedicine Platform",
    "HIPAA Compliant & Secure",
    "Comprehensive Virtual Care"
  ];

  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="heading-2 mb-6">Comprehensive <span className="text-brand-blue">Telemedicine Solutions</span> for Healthcare Providers</h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Empower your healthcare practice with <Link href="/" className="anchor-hide">our</Link> customizable, secure, and feature-rich telemedicine platform designed to enhance patient care and streamline your operations.
            </p>
            
            <div className="flex flex-col items-start mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue mr-2" />
                  <span className="text-gray-800">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <Button className="primary-button">
                  Request Demo <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:justify-self-end reveal">
            <LazyImage
              src="/lovable-uploads/d3501c49-eb5e-437a-830e-127319059048.png"
              alt="Healthcare provider using DocGenie's white label telemedicine platform for virtual consultation with patient, showing custom branding capabilities"
              className="rounded-2xl shadow-xl max-w-full h-auto"
              width={600}
              height={400}
              componentName="HeroSection"
              imagePurpose="primary"
              forceEager={true}
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={(e) => {
                console.error("Image failed to load");
                e.currentTarget.src = "/lovable-uploads/7eea6038-175c-4722-aa75-a6aaeba42a54.png";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
