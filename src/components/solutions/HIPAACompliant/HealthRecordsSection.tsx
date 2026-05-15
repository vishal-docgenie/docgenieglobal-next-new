
import React from "react";
import { Server, FileText, LockKeyhole } from "lucide-react";

const HealthRecordsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Secure Digital Health Records Management</h2>
          <p className="text-lg text-gray-700">
            Our HIPAA-compliant telemedicine platform ensures that all electronic health records are protected with industry-leading security measures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Server className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Secure Cloud Storage</h3>
            <p className="text-gray-600">
              Patient records are stored in HIPAA-compliant cloud environments with multiple layers of security and redundancy.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FileText className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Structured Documentation</h3>
            <p className="text-gray-600">
              Our platform provides compliant templates for clinical documentation that streamline workflows while maintaining security.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <LockKeyhole className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Granular Access Controls</h3>
            <p className="text-gray-600">
              Define precisely who can access specific parts of patient records, ensuring information is available only to authorized personnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthRecordsSection;
