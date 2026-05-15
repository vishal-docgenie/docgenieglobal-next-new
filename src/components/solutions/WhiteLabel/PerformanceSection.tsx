
import React from "react";
import { Gauge, Shield, PieChart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const PerformanceSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-16 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-3 mb-6">Performance That Matches Your Standards</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our white label telemedicine platform delivers enterprise-grade performance and reliability to ensure your virtual care services meet the expectations of both providers and patients.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <Gauge className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">High-Performance Architecture</h3>
                  <p className="text-gray-600 text-left">
                    Built on a scalable cloud infrastructure that ensures smooth video consultations even in low-bandwidth environments.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <Shield className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">Enterprise-Grade Security</h3>
                  <p className="text-gray-600 text-left">
                    HIPAA-compliant infrastructure with end-to-end encryption for all patient data and communications.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <PieChart className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">Comprehensive Analytics</h3>
                  <p className="text-gray-600 text-left">
                    Detailed insights into platform usage, patient engagement, and provider performance to optimize your virtual care offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:justify-self-end">
            <img src="/lovable-uploads/794e360c-82f8-4d27-b0d1-998ed35e52c3.png" 
                 alt="Enterprise-grade telemedicine platform dashboard showing performance metrics, security controls, and analytics for virtual healthcare delivery"
                 className="rounded-2xl shadow-xl max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
