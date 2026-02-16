
import React from "react";
import { Check } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";

interface Feature {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  features: Feature[];
  image: string;
  altText: string;
  reversed?: boolean;
}

const FeatureSection = ({
  title,
  description,
  features,
  image,
  altText,
  reversed = false
}: FeatureSectionProps) => {
  return (
    <section className="py-10 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Section */}
          <div className={`reveal ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="heading-3 mb-4 sm:mb-6">{title}</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              {description}
            </p>
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-brand-blue" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 text-left">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 text-left">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className={`reveal mb-6 sm:mb-0 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <LazyImage 
              src={image} 
              alt={altText} 
              className="rounded-2xl shadow-lg max-w-full h-auto" 
              width={600}
              height={400}
              componentName="FeatureSection"
              imagePurpose="feature"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
