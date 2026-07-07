import React from "react";

const stats = [
  { value: "4–6", unit: "weeks", label: "Average deployment time" },
  { value: "40%", unit: "", label: "Reduction in patient no-shows" },
  { value: "200+", unit: "hrs/mo", label: "Admin hours saved" },
  { value: "99.9%", unit: "", label: "Platform uptime SLA" },
];

const ROIStatsSection = () => {
  return (
    <section className="py-12 bg-brand-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="px-4">
              <div className="text-4xl font-bold mb-1">
                {stat.value}
                {stat.unit && (
                  <span className="text-xl font-medium ml-1 opacity-80">{stat.unit}</span>
                )}
              </div>
              <div className="text-sm text-white/75 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROIStatsSection;
