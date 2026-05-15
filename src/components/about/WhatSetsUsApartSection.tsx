
import React from "react";
import { CheckCircle } from "lucide-react";

const WhatSetsUsApartSection = () => {
  const advantages = [
    {
      title: "Expertise You Can Trust",
      description: "Our team combines seasoned healthcare professionals with technology innovators. With deep insights into the challenges you face—whether it's patient access, operational efficiency, or regulatory demands—we design solutions that are practical, reliable, and tailored to your practice."
    },
    {
      title: "A Legacy of Impact",
      description: "From our roots, we've grown to support over healthcare providers worldwide, enabling thousands of virtual consultations. Recognized as a leader in telemedicine, we're proud to help practices like yours deliver exceptional care while simplifying the day-to-day."
    },
    {
      title: "Built for You",
      description: "We're more than a platform—we're your partner. Offering HIPAA-compliant security, effortless EMR integration, and personalized support, we ensure telemedicine enhances your practice without adding complexity."
    }
  ];

  return (
    <div>
      <h2 className="heading-3 mb-6 sm:mb-8 text-center">What Sets Us Apart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {advantages.map((advantage, index) => (
          <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center mb-3 sm:mb-4 justify-center">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-brand-blue flex-shrink-0 mr-2" />
              <h3 className="font-semibold text-base sm:text-lg text-center">{advantage.title}</h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base text-center">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatSetsUsApartSection;
