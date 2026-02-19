
import React from "react";
import { HelpCircle } from "lucide-react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "What's the difference between Basic and Premium?",
      answer: "Both plans include the core platform features like Appointment Scheduling, Calendar Management, EMR, ePrescription, Admin Module, and HIPAA & ISO compliance, plus SMS alerts.\n\nPremium adds capabilities designed for growing practices, including:\n• Advanced customisation, branding & colour scheme changes\n• WhatsApp + SMS reminders\n• CIMS drug database access\n• AI enablement"
    },
    {
      question: "When should I choose the Enterprise plan?",
      answer: "Choose Enterprise if you're a clinic/hospital/organisation that needs more sophisticated integrations, custom workflows, or you have 20+ doctors. Enterprise includes everything in Premium, with implementation and configuration tailored to your needs (and pricing provided via a custom quote)."
    },
    {
      question: "Can I upgrade from Basic to Premium (or switch plans later)?",
      answer: "Yes — you can move between plans as your needs change."
    },
    {
      question: "Do you offer a free trial or a pilot program?",
      answer: "We only offer a 15-day pilot program for customers on the Enterprise plan."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (e.g., Visa, Mastercard, American Express) and forms of payment including bank transfers, payment by invoice and digital payment methods."
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
            <p className="text-gray-600 ml-8 text-left whitespace-pre-line">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
