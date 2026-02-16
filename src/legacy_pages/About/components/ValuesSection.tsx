
import React from "react";
import { Heart, Globe, Award, Sparkles, Target, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ValuesSection = () => {
  const isMobile = useIsMobile();
  
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-brand-orange" />,
      title: "Patient-Centered",
      description: "We put patients' needs at the center of all our product decisions, ensuring our platform enhances the healthcare experience."
    },
    {
      icon: <Globe className="h-8 w-8 text-brand-blue" />,
      title: "Accessibility",
      description: "We believe quality healthcare should be available to everyone, regardless of location, mobility, or socioeconomic status."
    },
    {
      icon: <Award className="h-8 w-8 text-brand-orange" />,
      title: "Clinical Excellence",
      description: "We uphold the highest standards of medical practice and ensure our platform enhances, rather than replaces, the physician-patient relationship."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-brand-blue" />,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in virtual care, investing heavily in research and development."
    },
    {
      icon: <Target className="h-8 w-8 text-brand-orange" />,
      title: "Privacy & Security",
      description: "We are committed to protecting patient data with industry-leading security practices and full HIPAA compliance."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Partnership",
      description: "We see ourselves as partners to healthcare providers, working together to improve outcomes and expand access to care."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-3 mb-4">Our Core Values</h2>
          <p className="subtitle">
            These principles guide everything we do at DocGenie Global
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
