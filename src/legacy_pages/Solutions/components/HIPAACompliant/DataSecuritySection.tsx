
import React from "react";
import { ShieldCheck, LockKeyhole, ClipboardList } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const DataSecuritySection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-3 mb-6">
            Ensure Data Security with Our HIPAA-Compliant Platform
          </h2>
          <p className="text-lg text-gray-700">
            Our platform is engineered to meet the stringent requirements of HIPAA, providing a secure environment for virtual care delivery and patient data management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <ShieldCheck className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              End-to-End Encryption
            </h3>
            <p className="text-gray-600">
              Protect patient data in transit and at rest with advanced encryption protocols and secure data centers.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <LockKeyhole className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Access Controls & Audit Trails
            </h3>
            <p className="text-gray-600">
              Implement role-based access controls and maintain comprehensive audit trails for all data access and modifications.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <ClipboardList className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Compliance Documentation
            </h3>
            <p className="text-gray-600">
              Access a complete library of compliance documentation, including policies, procedures, and risk assessments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSecuritySection;
