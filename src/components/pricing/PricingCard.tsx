
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  isPopular?: boolean;
  isAnnual?: boolean;
  isCustomPricing?: boolean;
  features: string[];
}

const PricingCard = ({ 
  title, 
  description, 
  price, 
  isPopular = false,
  isAnnual = false,
  isCustomPricing = false,
  features 
}: PricingCardProps) => {
  const isPremium = title === "Premium Plan";
  const isEnterprise = title === "Enterprise";
  
  const gradientClass = isPremium
    ? "bg-gradient-to-br from-white to-brand-orange/5 border-2 border-brand-blue" 
    : isEnterprise
    ? "bg-gradient-to-br from-white to-brand-blue/5 border-2 border-brand-orange" 
    : "bg-gradient-to-br from-white to-brand-blue/5 border border-brand-orange";
  
  const buttonClass = isPremium 
    ? "w-full orange-blue-gradient-r text-white hover:opacity-90 shadow-md shadow-brand-blue/20 group-hover:shadow-lg group-hover:shadow-brand-blue/30 transition-all duration-300" 
    : "w-full bg-brand-blue hover:bg-brand-blue/90 shadow-md shadow-brand-blue/20 group-hover:shadow-lg group-hover:shadow-brand-blue/30 transition-all duration-300";
  
  const checkIconClass = isPremium ? "text-brand-orange" : "text-brand-blue";
  
  const filteredFeatures = features;
  
  return (
    <div className={`pricing-card group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${gradientClass} h-full ${isPopular ? 'reveal-delay-200' : 'reveal-delay-100'} flex flex-col`}>
      {isAnnual && !isCustomPricing && (
        <div className="absolute top-0 left-0">
          <div className="bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-br-lg shadow-sm">
            SAVE 20%
          </div>
        </div>
      )}
      
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-brand-blue text-white text-xs font-semibold px-4 py-1 transform rotate-45 translate-x-[30%] translate-y-[40%] transform-rotate-[8%] shadow-sm">
            POPULAR
          </div>
        </div>
      )}
      
      {/* Card header */}
      <div className="p-8 pb-4">
        <div className="flex justify-between items-start mb-4 min-h-[3.5rem]">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{title}</h3>
          </div>
          <div className={isPremium ? "bg-brand-orange/10 p-2 rounded-full" : isEnterprise ? "bg-brand-orange/10 p-2 rounded-full" : "bg-brand-blue/10 p-2 rounded-full"}>
            {isEnterprise ? (
              <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            ) : isPremium ? (
              <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            )}
          </div>
        </div>
        
        <div className={isPremium ? "pb-8 min-h-[100px]" : "pb-8 min-h-[110px]"}>
            <p className="text-gray-700 text-sm">{description}</p>
        </div>
        
        <div className={`flex items-baseline gap-2 mb-1 justify-center`}>
          {isCustomPricing ? (
            <span className="text-4xl font-bold text-gray-900">Contact Us</span>
          ) : (
            <>
              <span className="text-4xl font-bold text-gray-900">${price}</span>
              <span className="text-gray-700">/doctor{isAnnual ? '/year' : '/month'}</span>
            </>
          )}
        </div>
        <p className="text-xs text-gray-700 mb-6 text-center">
          {isCustomPricing ? 'Tailored to your needs' : isAnnual ? 'Billed annually' : 'Billed monthly'}
        </p>
      </div>
      
      {/* Feature list - flex-grow to push button to bottom */}
      <div className="px-8 pb-8 flex-grow flex flex-col">
        <h4 className="font-medium text-gray-800 mb-4 flex items-center gap-2">
          <Check className={`h-5 w-5 ${checkIconClass}`} />
          What's included:
        </h4>
        <ul className="space-y-3 mb-8 flex-grow">
          {filteredFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`h-5 w-5 ${checkIconClass} mr-2 flex-shrink-0 mt-0.5`} />
              <span className="text-sm text-gray-700 text-left">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Button container - stays at bottom */}
        <div className="mt-auto">
          <Link href="/contact">
            <Button className={buttonClass}>
              Talk to Our Team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
