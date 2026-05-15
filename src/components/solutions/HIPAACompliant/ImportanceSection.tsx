
import React from "react";
import { ShieldCheck, LockKeyhole, ClipboardList } from "lucide-react";

const ImportanceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-3 mb-6">Why HIPAA Compliance is Critical in Telemedicine</h2>
            <p className="text-lg text-gray-700 mb-6">
              As healthcare increasingly moves into virtual environments, HIPAA compliance has become more important than ever. A secure telemedicine platform ensures:
            </p>
            
            <ul className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <ShieldCheck className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">Patient Trust & Confidence</h3>
                  <p className="text-gray-600 text-left">
                    Patients are more likely to engage with telehealth services when they know their sensitive health information is protected.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <LockKeyhole className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">Legal Protection</h3>
                  <p className="text-gray-600 text-left">
                    Avoid costly penalties and legal issues by ensuring your virtual care services meet all regulatory requirements.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <ClipboardList className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">Operational Excellence</h3>
                  <p className="text-gray-600 text-left">
                    HIPAA-compliant processes improve overall security practices and create more efficient healthcare operations.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="lg:justify-self-end">
            <img
              src="/lovable-uploads/464747bc-524d-4fa0-aade-3da37a7e71a3.png"
              alt="HIPAA-compliant security dashboard showing encryption protocols, audit logs, and access controls for healthcare data protection in telemedicine"
              className="rounded-2xl shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
