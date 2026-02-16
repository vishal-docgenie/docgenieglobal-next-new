
import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { debugComponent } from "@/utils/debugUtils";
import ErrorBoundary from "@/components/ErrorBoundary";

interface FeatureTabContentProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  iconComponent: React.ReactNode;
  iconLabel: string;
  primaryColor: "blue" | "orange";
}

const FeatureTabContent = ({
  title,
  description,
  features,
  image,
  iconComponent,
  iconLabel,
  primaryColor
}: FeatureTabContentProps) => {
  // Debug logging
  useEffect(() => {
    debugComponent('FeatureTabContent', {
      title,
      description,
      features,
      image,
      iconLabel,
      primaryColor
    });
  }, [title, description, features, image, iconLabel, primaryColor]);

  const buttonClass = primaryColor === "blue" ? "primary-button" : "secondary-button";
  const iconColorClass = primaryColor === "blue" ? "text-brand-blue" : "text-brand-orange";
  const bgColorClass = primaryColor === "blue" ? "bg-brand-blue-light/30" : "bg-brand-orange-light/30";
  
  return (
    <ErrorBoundary>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-700 mb-6">{description}</p>
            <ul className="space-y-3 mb-6">
              {features.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className={`h-5 w-5 ${iconColorClass} mr-3 mt-0.5 flex-shrink-0`} />
                  <span className="text-gray-700 text-left">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button className={buttonClass}>Learn More</Button>
            </Link>
          </div>
          <div className={`w-full md:w-1/2 ${bgColorClass} p-8 flex items-center justify-center`}>
            <div className="relative w-full max-w-md">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image}`);
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card rounded-lg p-3 shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  {iconComponent}
                  <span className="text-sm font-medium text-gray-700">{iconLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default FeatureTabContent;
