
import React from "react";
import { ShieldCheck, LockKeyhole, ClipboardList } from "lucide-react";

const SecurePlatformSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-3 mb-6">
              Maintain Patient Trust with a Secure Telemedicine Platform
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our HIPAA-compliant telemedicine platform delivers enterprise-grade security and reliability to ensure your virtual care services meet the highest standards of data protection.
            </p>
            
            <ul className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <ShieldCheck className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">
                    HIPAA Compliance
                  </h3>
                  <p className="text-gray-600 text-left">
                    Our platform is fully compliant with HIPAA regulations, ensuring the privacy and security of patient data.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <LockKeyhole className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">
                    Data Encryption
                  </h3>
                  <p className="text-gray-600 text-left">
                    End-to-end encryption for all patient data and communications, protecting sensitive information from unauthorized access.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <ClipboardList className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">
                    Audit Trails
                  </h3>
                  <p className="text-gray-600 text-left">
                    Comprehensive audit trails to track all data access and modifications, ensuring accountability and transparency.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="lg:justify-self-end">
            <img
              src="/lovable-uploads/6cf94fc6-58cb-4c05-b124-1078a8267482.png"
              alt="Doctor reviewing secure patient data on HIPAA-compliant telemedicine dashboard with encryption indicators and privacy controls"
              className="rounded-2xl shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurePlatformSection;
