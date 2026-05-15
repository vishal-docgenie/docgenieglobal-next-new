
import React from "react";

const StatsSection = () => {
  const stats = [
    {
      number: "400+",
      label: "Healthcare Providers"
    }, 
    {
      number: "55,000+",
      label: "Patient Consultations"
    }, 
    {
      number: "50",
      label: "Countries Covered"
    }, 
    {
      number: "99.9%",
      label: "Platform Uptime"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="blue-orange-gradient-r-20 rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-blue-orange-gradient-r-20">{stat.number}</div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
