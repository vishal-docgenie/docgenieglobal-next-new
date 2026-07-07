
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ImplementationSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Go Live in 4–6 Weeks</h2>
          <p className="text-lg text-gray-700">
            Our structured implementation process gets your branded telemedicine platform live with minimal disruption to your existing operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-8 rounded-xl border border-brand-blue/20">
            <div className="text-xs font-semibold text-brand-blue uppercase tracking-wide mb-3 text-center">Week 1</div>
            <div className="h-12 w-12 bg-brand-blue/30 rounded-full flex items-center justify-center mb-4 text-white font-bold mx-auto">1</div>
            <h3 className="text-xl font-semibold mb-3">Discovery & Design</h3>
            <p className="text-gray-700">
              We map your brand guidelines, workflows, and EHR integrations — and deliver a signed-off design spec before any build begins.
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-8 rounded-xl border border-brand-blue/20">
            <div className="text-xs font-semibold text-brand-blue uppercase tracking-wide mb-3 text-center">Week 2–3</div>
            <div className="h-12 w-12 bg-brand-blue/30 rounded-full flex items-center justify-center mb-4 text-white font-bold mx-auto">2</div>
            <h3 className="text-xl font-semibold mb-3">Configuration</h3>
            <p className="text-gray-700">
              Platform is configured with your branding, custom workflows, payment gateway, and EHR/EMR integration.
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-8 rounded-xl border border-brand-blue/20">
            <div className="text-xs font-semibold text-brand-blue uppercase tracking-wide mb-3 text-center">Week 4–5</div>
            <div className="h-12 w-12 bg-brand-blue/30 rounded-full flex items-center justify-center mb-4 text-white font-bold mx-auto">3</div>
            <h3 className="text-xl font-semibold mb-3">Training & Testing</h3>
            <p className="text-gray-700">
              Staff onboarding, UAT testing, and security review. We don't go live until your team is confident.
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-8 rounded-xl border border-brand-blue/20">
            <div className="text-xs font-semibold text-brand-blue uppercase tracking-wide mb-3 text-center">Week 6</div>
            <div className="h-12 w-12 bg-brand-blue/30 rounded-full flex items-center justify-center mb-4 text-white font-bold mx-auto">4</div>
            <h3 className="text-xl font-semibold mb-3">Launch & Support</h3>
            <p className="text-gray-700">
              Coordinated go-live with your dedicated account manager. 24/7 support and regular platform updates included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSection;
