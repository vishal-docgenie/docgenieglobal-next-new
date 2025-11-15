
import React from "react";
import { MapPin, Mail } from "lucide-react";

/**
 * Contact information component displaying office address and email
 * Appears at the bottom of the contact page
 */
const ContactInfo = () => {
  return (
    <div className="mx-auto reveal animate-fade-in">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h3 className="text-xl font-semibold mb-6 md:mb-8 text-center">Contact Information</h3>

        <div className="space-y-6 mx-auto">
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-3 md:mb-4">Our Office</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center text-gray-600">
              <MapPin className="h-5 w-5 mb-2 sm:mb-0 sm:mr-3 text-brand-blue flex-shrink-0" />
              <span className="leading-relaxed text-center sm:text-left">
                DocGenie Global Pte Ltd,<br />
                143 Cecil Street,<br />
                #03-01, GB Building<br />
                Singapore (069542)
              </span>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-semibold text-lg mb-3 md:mb-4">Email Us</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center text-gray-600">
              <Mail className="h-5 w-5 mb-2 sm:mb-0 sm:mr-3 text-brand-blue flex-shrink-0" />
              <a href="mailto:globalsupport@docgenie.in" className="hover:text-brand-blue transition-colors break-all">
                globalsupport@docgenie.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
