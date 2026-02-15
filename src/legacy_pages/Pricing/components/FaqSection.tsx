
import React from "react";
import { HelpCircle } from "lucide-react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How does the pricing and implementation work?",
      answer: "We offer two plans - the Individual Provider Plan for independent doctors, care providers and smaller clinics who need a ready-to-use telemedicine solution, and the Enterprise Plan for clinics and hospitals requiring more complex workflows and customizations. Our team will work in close consultation with yours and take care of all implementation and integration processes."
    }, 
    {
      question: "Do you offer a pilot program?",
      answer: "Yes we offer 15-day pilot programs for both the Individual Provider and Enterprise plans. This allows our partners to fully test out the platform and assess if it fits with their needs."
    }, 
    {
      question: "Do you offer customized pricing?",
      answer: "The Enterprise Plan offers customized pricing based on specific needs, integrations, and additional features. The Individual Provider Plan has a fixed monthly fee, with optional add-on services."
    }, 
    {
      question: "Do you provide customer support, and is it included in the pricing?",
      answer: "Enterprise Plan customers are eligible to receive ongoing priority support. Individual Provider Plan users can have access to regular tech support. They can opt for premium tech support for an additional fee."
    }, 
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express). Enterprise customers can also pay by invoice."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h2 className="heading-3 text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqItems.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 flex items-start">
              <HelpCircle className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" />
              {faq.question}
            </h3>
            <p className="text-gray-600 ml-8 text-left">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
