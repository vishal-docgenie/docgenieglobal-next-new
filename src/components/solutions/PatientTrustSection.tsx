
import React from "react";
import { Shield, HeartPulse, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const PatientTrustSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-3 mb-6">Build Patient Trust with Your Brand</h2>
          <p className="text-lg text-gray-700">
            Our platform helps healthcare providers strengthen their relationship with patients through trust-building features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Shield className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Security & Privacy</h3>
            <p className="text-gray-600">
              Robust security measures and HIPAA-compliant features that protect patient data while displaying your commitment to privacy.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <HeartPulse className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Care Continuity</h3>
            <p className="text-gray-600">
              Tools that enable seamless care transitions between virtual and in-person visits, maintaining the patient-provider relationship.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Patient Engagement</h3>
            <p className="text-gray-600">
              Interactive features that keep patients engaged with your practice through reminders, educational content, and follow-ups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientTrustSection;
