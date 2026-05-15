
import React from 'react';
import { HelpCircle } from 'lucide-react';

type Faq = {
  question: string;
  answer: string;
};

interface FaqSectionProps {
  faqs: Faq[];
}

const FaqSection = ({ faqs }: FaqSectionProps) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 reveal animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 flex items-start">
              <HelpCircle className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" />
              {faq.question}
            </h3>
            <p className="text-gray-600 ml-8">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
