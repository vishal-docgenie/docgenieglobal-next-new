
import React from "react";
import { Paintbrush, Link as LinkIcon, Smartphone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const BrandTrustSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-3 mb-6">Build Patient Trust with Your Branded Telemedicine Solution</h2>
          <p className="text-lg text-gray-700">
            Our white label platform allows healthcare providers to deliver virtual care services under their own trusted brand, creating a seamless experience that reinforces patient relationships and practice loyalty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Paintbrush className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Complete Brand Customization</h3>
            <p className="text-gray-600">
              Fully customize colors, logos, typography, and interface elements to match your healthcare organization's visual identity.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <LinkIcon className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Custom Domain Integration</h3>
            <p className="text-gray-600">
              Deploy on your own domain, creating a cohesive digital experience aligned with your existing web presence.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Smartphone className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Branded Patient Experience</h3>
            <p className="text-gray-600">
              Deliver consistent branding across emails, notifications, patient portals, and mobile applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandTrustSection;
