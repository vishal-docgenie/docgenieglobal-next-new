
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ImplementationSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Implementation Process</h2>
          <p className="text-lg text-gray-700">
            Our structured approach ensures a smooth transition to your branded telemedicine platform with minimal disruption to your operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-8 rounded-xl border border-brand-blue/20">
            <div className="h-12 w-12 bg-brand-blue/30 rounded-full flex items-center justify-center mb-4 text-white font-bold mx-auto">1</div>
            <h3 className="text-xl font-semibold mb-3">Discovery & Design</h3>
            <p className="text-gray-700">
              We collaborate with your team to understand your brand guidelines and specific requirements for the platform.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-8 rounded-xl border border-brand-blue/20">
            <div className="h-12 w-12 bg-brand-blue/30 rounded-full flex items-center justify-center mb-4 text-white font-bold mx-auto">2</div>
            <h3 className="text-xl font-semibold mb-3">Configuration</h3>
            <p className="text-gray-700">
              Platform customization including branding, workflow optimization, and integration with your existing systems.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-8 rounded-xl border border-brand-blue/20">
            <div className="h-12 w-12 bg-brand-blue/30 rounded-full flex items-center justify-center mb-4 text-white font-bold mx-auto">3</div>
            <h3 className="text-xl font-semibold mb-3">Training & Testing</h3>
            <p className="text-gray-700">
              Comprehensive training for staff and thorough testing of all platform features and integrations.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-8 rounded-xl border border-brand-blue/20">
            <div className="h-12 w-12 bg-brand-blue/30 rounded-full flex items-center justify-center mb-4 text-white font-bold mx-auto">4</div>
            <h3 className="text-xl font-semibold mb-3">Launch & Support</h3>
            <p className="text-gray-700">
              Coordinated launch with ongoing technical support and regular platform updates and enhancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSection;
