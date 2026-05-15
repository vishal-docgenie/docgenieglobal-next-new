
import React from 'react';
import Link from "next/link";

const ContactCta = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Have Questions About Our Services?
      </h2>
      
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Our team of healthcare technology experts is ready to help you implement the perfect telemedicine solution for your organization.
      </p>
      
      <Link 
        href="/contact" 
        className="inline-block bg-brand-blue hover:bg-brand-blue/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
      >
        Contact Us Today
      </Link>
    </div>
  );
};

export default ContactCta;
