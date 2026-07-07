import React from "react";
import { Building2, Hospital, Code2, HeartPulse } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    buyer: "Multi-Specialty Clinics",
    problem: "Patients juggling 3 different apps for different departments, eroding brand trust.",
    solution:
      "One branded platform across all specialties — single login for patients, unified records for providers.",
  },
  {
    icon: Hospital,
    buyer: "Hospital Systems",
    problem: "Building in-house costs $500K+ and takes 18+ months with an internal dev team.",
    solution:
      "Launch a fully branded telehealth system in 6 weeks at a fraction of the build cost.",
  },
  {
    icon: Code2,
    buyer: "Healthcare SaaS Vendors",
    problem: "Need to offer telehealth as a feature inside their existing product or platform.",
    solution:
      "API-first integration — embed video, scheduling, and e-prescriptions directly into your app.",
  },
  {
    icon: HeartPulse,
    buyer: "Insurance & TPA Companies",
    problem: "Offering telehealth benefits through a third-party that shows their brand, not yours.",
    solution:
      "White-label member portal under your brand with custom eligibility rules and claims integration.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-4">Built for Healthcare Organizations Like Yours</h2>
          <p className="text-lg text-gray-700">
            Whether you run a clinic, a hospital network, or a healthcare SaaS platform — DocGenie
            adapts to your model.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.buyer}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-red-500 mb-1 block">
                      The Problem
                    </span>
                    <p className="text-sm text-gray-600">{item.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue mb-1 block">
                      DocGenie Solution
                    </span>
                    <p className="text-sm text-gray-700 font-medium">{item.solution}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
