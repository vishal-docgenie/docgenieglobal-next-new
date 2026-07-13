
import React from "react";
import { CheckCircle2 } from "lucide-react";

const QuickAnswerSection = () => {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="py-10 bg-white border-b border-gray-100" aria-labelledby="quick-answer-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-brand-blue/20 border border-brand-blue/20 rounded-xl p-6 md:p-8">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <h2 id="quick-answer-heading" className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Quick Answer
            </h2>
            <span className="text-xs text-gray-500">Last updated: {lastUpdated}</span>
          </div>
          <p className="text-gray-800 leading-relaxed">
            A white label telemedicine platform is a ready-made, HIPAA-compliant virtual care solution that clinics,
            hospitals, healthcare providers, care groups, and healthcare ecosystem partners license and rebrand as
            their own — your logo, your colours, your domain, and your patient portal — instead of building telehealth
            software from scratch. The platform supports the complete care journey: patient registration, appointment
            scheduling, secure video consultations, EHR/EMR workflow support, billing/payment integrations where
            required, and patient communication — all under your brand.
          </p>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {[
              "Launch in weeks under your own brand",
              "HIPAA-compliant virtual care with secure, encrypted data transmission",
              "EHR/EMR workflow support, billing/payment integrations, and patient communication",
              "Mobile-responsive — accessible on web, tablet, and phone",
            ].map((point) => (
              <li key={point} className="flex items-start text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuickAnswerSection;
