
import React from "react";
import { CheckCircle } from "lucide-react";

const ComplianceChecklist = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">What the Platform Covers</h2>
          <p className="text-lg text-gray-700 mb-8">
            DocGenie Global delivers virtual care on a HIPAA-compliant platform. HIPAA compliance is a
            shared responsibility between your organisation and your technology partners, so the list
            below is what the platform provides — not a guarantee that your practice is compliant on
            its own. Arrangements that depend on your deployment are confirmed during discovery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-brand-blue border-b pb-3">Technical Safeguards</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span>End-to-end encryption for all data in transit and at rest</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span>Unique user identification and authentication</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span>Role-based access controls over patient records</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-brand-blue border-b pb-3">Organisational Safeguards</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span>ISO/IEC 27001:2022 certified information security management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span>Audit logs covering access to patient records</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span>
                  Contractual, data-processing and security documentation reviewed with your team
                  during discovery
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceChecklist;
