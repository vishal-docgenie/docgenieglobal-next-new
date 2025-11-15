
import React from "react";
import { Check, Star, Award, Clock, Headset, Zap } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Star className="h-10 w-10 text-brand-orange" />,
      title: "Best-in-Class Telehealth Platform",
      description: "Ranked as the top telemedicine solution for clinics and doctors by industry experts."
    },
    {
      icon: <Check className="h-10 w-10 text-green-500" />,
      title: "Clinician-Approved Workflows",
      description: "Designed with direct input from healthcare providers to streamline virtual consultations."
    },
    {
      icon: <Award className="h-10 w-10 text-brand-blue" />,
      title: "Highest Patient Satisfaction",
      description: "Patients consistently rate our platform's ease-of-use as excellent, increasing engagement."
    },
    {
      icon: <Clock className="h-10 w-10 text-purple-500" />,
      title: "Rapid Implementation",
      description: "Get your branded telehealth platform running in weeks, not months, with our dedicated support team."
    },
    {
      icon: <Headset className="h-10 w-10 text-rose-500" />,
      title: "Robust Technical Support",
      description: "Round-the-clock assistance ensures your virtual care services never experience downtime."
    },
    {
      icon: <Zap className="h-10 w-10 text-amber-500" />,
      title: "Continuous Innovation",
      description: "Regular updates with cutting-edge telehealth features keep your practice ahead of the curve."
    }
  ];

  return (
    <section className="py-16 blue-orange-gradient-r-5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-blue/20 text-base font-medium text-brand-gray-dark reveal animate-fade-in">
            Industry Recognition
          </div>
          <h2 className="heading-2 mb-4 reveal animate-fade-in">
            Why Clinics & Doctors Choose Our <span className="text-brand-blue">Telemedicine Platform</span>
          </h2>
          <p className="subtitle max-w-3xl mx-auto reveal animate-fade-in reveal-delay-100">
            The most trusted end-to-end telehealth solution, designed specifically for healthcare providers who demand excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal animate-fade-in reveal-delay-200">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{reason.title}</h3>
              <p className="text-base text-gray-600 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
