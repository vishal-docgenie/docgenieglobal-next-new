
import React from "react";
import { ShieldCheck, Palette, Plug } from "lucide-react";

// Factual product-capability section. Replaces previously unverified
// testimonials — no client names, quotes, or performance figures are asserted.
const Testimonials = () => {
  const capabilities = [
    {
      icon: Palette,
      title: "Your brand, end to end",
      description:
        "Your logo, colours, custom domain, and branded patient communications appear consistently across web and mobile, so virtual visits stay within your own care experience.",
    },
    {
      icon: Plug,
      title: "Fits your existing systems",
      description:
        "The platform is designed to connect with your EHR/EMR, payment processors, and third-party services through a comprehensive API ecosystem, adapting to established clinical workflows.",
    },
    {
      icon: ShieldCheck,
      title: "Built for secure virtual care",
      description:
        "Configurable role-based access, secure consultation workflows, and branded patient portals are designed to support providers delivering telehealth under their own identity.",
    },
  ];

  return (
    <div className="py-16 bg-brand-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Why Healthcare Providers Choose White Label</h2>
          <p className="text-lg text-gray-700">
            Deliver branded virtual care that fits your organisation — from patient experience to
            integrations — without building a telemedicine platform from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 h-8 w-8 bg-brand-blue rounded-full flex items-center justify-center">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-semibold text-lg mt-2 mb-3">{capability.title}</h3>
                <p className="text-gray-700">{capability.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
