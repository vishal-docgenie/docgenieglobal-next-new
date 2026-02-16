
import React from "react";
import FeatureSection from "./FeatureSection";

const CoreFeaturesSection = () => {
  const whitelabelFeatures = {
    title: "White Label Solutions",
    description: "Customize our telemedicine platform with your branding for a seamless patient experience that builds trust and reinforces your healthcare brand.",
    features: [
      {
        title: "Custom Branding",
        description: "Add your logo, colors, and brand elements to create a consistent patient experience."
      },
      {
        title: "Branded Mobile App",
        description: "Offer patients your own branded mobile application with full telemedicine capabilities."
      },
      {
        title: "Custom Domain",
        description: "Use your own domain name to maintain brand consistency across all patient touchpoints."
      }
    ],
    image: "/lovable-uploads/29dbbc69-0894-4506-9d64-b2d8773ebbc2.png",
    altText: "Customizable white label telemedicine platform with branding options showing clinic logo integration, color scheme customization, and branded mobile app"
  };

  const virtualCareFeatures = {
    title: "Comprehensive Virtual Care",
    description: "Provide complete healthcare services remotely with our feature-rich virtual care solution, designed for effective patient engagement and clinical outcomes.",
    features: [
      {
        title: "HD Video Consultations",
        description: "High-definition video with adaptive quality for optimal telemedicine experiences."
      },
      {
        title: "Secure Messaging",
        description: "HIPAA-compliant messaging between providers and patients for ongoing care."
      },
      {
        title: "Digital Prescription",
        description: "Integrated e-prescription capabilities for streamlined medication management."
      }
    ],
    image: "/lovable-uploads/c33da91e-4560-433e-972c-b805d2d55ded.png",
    altText: "Healthcare provider conducting HD video consultation with patient using DocGenie virtual care platform, showing secure messaging and digital prescription features",
    reversed: true
  };

  return (
    <div>
      <FeatureSection {...whitelabelFeatures} />
      <FeatureSection {...virtualCareFeatures} />
    </div>
  );
};

export default CoreFeaturesSection;
