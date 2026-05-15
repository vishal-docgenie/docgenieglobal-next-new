import React from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <div className="reveal animate-slide-right">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Our Office</h4>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-5 w-5 mr-2 text-brand-blue" />
            <span>123 Tech Park, San Francisco, CA 94107, US</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <Mail className="h-5 w-5 mr-2 text-brand-blue" />
            <a href="mailto:info@docgenieglobal.com">info@docgenieglobal.com</a>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="h-5 w-5 mr-2 text-brand-blue" />
            <a href="tel:+15551234567">+1 (555) 123-4567</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Business Hours</h4>
          <div className="flex items-center text-gray-600 mb-2">
            <Clock className="h-5 w-5 mr-2 text-brand-blue" />
            <span>Monday - Friday: 9am to 5pm PST</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2 text-brand-blue" />
            <span>Saturday &amp; Sunday: Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
