import React from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  "HD Video Consultations",
  "EHR/EMR Integration (Epic, Cerner, athenahealth)",
  "HIPAA-Compliant Data Storage",
  "AES-256 End-to-End Encryption",
  "Custom Domain & SSL",
  "iOS + Android Apps (your brand)",
  "Online Appointment Scheduling",
  "E-Prescriptions",
  "Billing & Payment Gateway",
  "AI-Powered Clinical Notes",
  "Patient Chat & Secure Messaging",
  "Multi-Provider Scheduling",
  "Analytics & Reporting Dashboard",
  "Multi-Language & Multi-Currency Support",
  "Remote Patient Monitoring (RPM)",
  "White-Label Patient Portal",
];

const FeatureChecklist = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-4">Everything You Need, Under Your Brand</h2>
          <p className="text-lg text-gray-700">
            A fully-featured telemedicine platform — white-labeled and ready to launch in 4–6 weeks.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg border border-gray-100 bg-gray-50 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-colors"
            >
              <CheckCircle2 className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureChecklist;
