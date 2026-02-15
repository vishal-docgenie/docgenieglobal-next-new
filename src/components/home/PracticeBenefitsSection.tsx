
import React from "react";
import { TrendingDown, Clock, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import BenefitsChart from "./BenefitsChart";
import dynamic from "next/dynamic";

const BenefitsChart = dynamic(() => import("./BenefitsChart"), { ssr: false });

const PracticeBenefitsSection = () => {
  const benefits = [{
    icon: <TrendingDown className="h-6 w-6 sm:h-8 sm:w-8 text-brand-blue" />,
    title: "Reduce No-Shows by 40%",
    description: "Patient no-shows are one of the biggest drains for a healthcare provider. Swapping just 50% of follow-up visits to video pushes the aggregate no-show rate down by ~13 percentage points.",
    chartType: "noshow" as const
  }, {
    icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-brand-blue" />,
    title: "Save 200+ Hours Monthly",
    description: "Free up 10-12 minutes of staff time per consult, totalling 200+ hours in time & effort saved per month on operational tasks that can be used to focus on healthcare delivery.",
    chartType: "time" as const
  }, {
    icon: <ThumbsUp className="h-6 w-6 sm:h-8 sm:w-8 text-brand-blue" />,
    title: "Boost Patient Satisfaction & Retention",
    description: "Studies consistently indicate that around 83% of patients were more likely to return to providers offering telehealth services.",
    chartType: "satisfaction" as const
  }];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-orange/20 text-sm sm:text-base font-medium text-brand-gray-dark reveal animate-fade-in">
            Practice Growth
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-3 sm:mb-4 reveal animate-fade-in">
            Benefits of Having a <span className="text-brand-blue">Telemedicine Solution</span> for Your Practice
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto reveal animate-fade-in reveal-delay-100">
            Discover measurable ROI and operational improvements that transform your healthcare practice.
          </p>
        </div>
        
        <div className="space-y-20 sm:space-y-16 md:space-y-20 mb-8 sm:mb-12 lg:mb-20 xl:mb-24 reveal animate-fade-in">
          {benefits.map((benefit, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center reveal animate-fade-in ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`} style={{
              animationDelay: `${index * 0.2}s`
            }}>
              {/* Mobile Layout */}
              <div className="lg:hidden">
                {/* Title with Icon - Mobile */}
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-brand-blue leading-tight mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
                
                {/* Chart - Mobile */}
                <div className="bg-gray-50 rounded-xl p-4 mt-6">
                  <BenefitsChart type={benefit.chartType} />
                </div>
              </div>

              {/* Desktop Layout - Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} hidden lg:block`}>
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-14 w-14 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-semibold mb-3 text-brand-blue leading-tight">{benefit.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Desktop Layout - Chart */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} hidden lg:block`}>
                <div className="bg-gray-50 rounded-xl p-6">
                  <BenefitsChart type={benefit.chartType} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center reveal animate-fade-in">
          <Button size="lg" className="primary-button text-wrap max-w-full px-4 py-3 sm:px-6 text-sm sm:text-base">
            <Link href="/solutions/white-label-telemedicine">
                See How Telemedicine Can Transform Your Practice
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeBenefitsSection;
