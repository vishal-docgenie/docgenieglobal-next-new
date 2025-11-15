
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

/**
 * CTA component for booking a demo via Calendly
 * Contains a card with description and a button that opens Calendly
 */
const ContactCta = () => {
  const openCalendly = () => {
    // Open Calendly with your specific URL
    window.open("https://calendly.com/adityavj-docgenie/30min", "_blank");
  };

  return (
    <div className="reveal animate-slide-right w-full md:w-5/12">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
        <h3 className="text-xl font-semibold mb-4 md:mb-6">Ready to transform your healthcare practice?</h3>
        <p className="text-gray-600 mb-6">
          Book a personalized demo with our team to see how DocGenie can help your clinic streamline operations,
          improve patient care, and boost revenue.
        </p>
        <Button 
          onClick={openCalendly}
          className="primary-button w-full flex items-center justify-center"
        >
          <Calendar className="h-4 w-4 md:mr-2" /> 
          <span>Book a Demo</span>
        </Button>
      </div>
    </div>
  );
};

export default ContactCta;
