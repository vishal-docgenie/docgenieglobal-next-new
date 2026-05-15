
import React from "react";
import { Linkedin } from "lucide-react";
import { getButtonA11yProps } from "@/utils/accessibilityUtils";

const TeamSection = () => {
  const team = [
    {
      name: "Vijay Raghunathan",
      role: "Founder & CEO",
      image: "/lovable-uploads/83b99976-98a3-4c17-8745-ff1c33e50bee.png",
      linkedin: "https://www.linkedin.com/in/vijayraghunthan/"
    }, 
    {
      name: "Dr. Rachna Kucheria",
      role: "Founder & Medical Director",
      image: "/lovable-uploads/6e901f07-75f1-463f-a9e0-6e35158e6d01.png",
      linkedin: "https://www.linkedin.com/in/dr-rachna-kucheria-76b8b46/"
    }, 
    {
      name: "Aditya Vijay",
      role: "COO",
      image: "/lovable-uploads/ccbcf5c8-c4bb-45ba-b7dc-2224a8325887.png",
      linkedin: "https://www.linkedin.com/in/adityavijay94/"
    }, 
    {
      name: "Ramya Kalyanasundaram",
      role: "CTO",
      image: "/lovable-uploads/c6885092-26a1-4c68-bca0-a96ea73cf5b2.png",
      linkedin: "https://www.linkedin.com/company/docgenie-global/"
    },
    {
      name: "Dr. Anitha Moorthy",
      role: "Global Health Strategist",
      image: "/lovable-uploads/0f21084b-83f6-4656-a125-78c04baa7310.png",
      linkedin: "https://www.linkedin.com/in/anithamoorthy/"
    }
  ];

  return (
    <section className="py-20 bg-brand-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-3 mb-4">Meet Our Leadership Team</h2>
          <p className="subtitle">
            Experts in healthcare, technology, and business working together to transform telemedicine
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role} at DocGenie Global, healthcare technology leadership team member with expertise in telemedicine solutions`} 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-brand-blue font-medium mb-3">{member.role}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-brand-blue hover:text-brand-orange transition-colors"
                  {...getButtonA11yProps({
                    type: 'icon-only',
                    label: `View ${member.name}'s LinkedIn profile`
                  })}
                >
                  <Linkedin className="h-5 w-5 mr-1" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
