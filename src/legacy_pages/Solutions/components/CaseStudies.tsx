
import React from "react";
import { ArrowRight, Check } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Regional Hospital Network Increases Virtual Appointments by 250%",
      description: "A 12-hospital network implemented our white label telemedicine platform and saw patient engagement rise dramatically within 6 months, with 92% patient satisfaction ratings.",
      results: ["250% increase in virtual appointments", "92% patient satisfaction", "Reduced no-show rates by 35%", "ROI achieved within 9 months"],
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Multi-specialty Clinic Group Streamlines Patient Flow",
      description: "A group of 25 specialty clinics unified their virtual care experience under one branded platform, improving operational efficiency and patient experience.",
      results: ["42% reduction in administrative workload", "Unified patient experience across specialties", "Seamless integration with existing EHR", "Increased cross-referrals between specialties"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Implementation Success Stories</h2>
          <p className="text-lg text-gray-700">
            See how healthcare providers have successfully implemented our white label telemedicine solution to transform their practice and improve patient care.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-semibold mb-4 text-brand-blue">{study.title}</h3>
                <p className="text-gray-700 mb-6">{study.description}</p>
                
                <h4 className="font-semibold mb-3 text-gray-800">Key Results:</h4>
                <ul className="space-y-2 mb-6">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-5 w-5 bg-brand-blue/20 rounded-full flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-3 w-3 text-brand-blue" />
                      </div>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-brand-blue font-medium hover:underline">
                  Read full case study <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="h-64 lg:h-auto">
                <img 
                  src={study.image} 
                  alt={index === 0 ? 
                    "Regional hospital network medical staff using DocGenie telemedicine platform for virtual patient consultations" : 
                    "Multi-specialty clinic group using branded DocGenie platform for streamlined virtual care delivery across departments"
                  } 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
