
import React from "react";
import { CreditCard, FileText, ClipboardList, ShieldCheck } from "lucide-react";

const BillingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">HIPAA-Compliant Telemedicine Billing Solutions</h2>
          <p className="text-lg text-gray-700">
            Our platform integrates secure billing features that maintain HIPAA compliance throughout the entire revenue cycle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="HIPAA-compliant medical billing interface with secure payment processing showing encrypted patient financial data and compliance indicators"
              className="rounded-2xl shadow-xl"
            />
          </div>
          
          <div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <CreditCard className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-semibold mb-2">Secure Payment Processing</h3>
                  <p className="text-gray-600">
                    Process patient payments securely with PCI-compliant payment gateways that integrate seamlessly with our telemedicine platform.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <FileText className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-semibold mb-2">Automated Insurance Verification</h3>
                  <p className="text-gray-600">
                    Verify patient insurance eligibility in real-time while maintaining full HIPAA compliance throughout the verification process.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <ClipboardList className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-semibold mb-2">Compliant Claims Management</h3>
                  <p className="text-gray-600">
                    Generate, submit, and track insurance claims while maintaining full compliance with HIPAA privacy and security requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <ShieldCheck className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-semibold mb-2">Secure Patient Statements</h3>
                  <p className="text-gray-600">
                    Generate and deliver secure electronic patient statements that protect sensitive health information while providing billing transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingSection;
