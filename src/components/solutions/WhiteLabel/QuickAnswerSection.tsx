
import React from "react";
import { CheckCircle2 } from "lucide-react";

const QuickAnswerSection = () => {
  return (
    <section className="py-10 bg-white border-b border-gray-100" aria-labelledby="quick-answer-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-brand-blue/20 border border-brand-blue/20 rounded-xl p-6 md:p-8">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <h2 id="quick-answer-heading" className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Quick Answer
            </h2>
            <span className="text-xs text-gray-500">Last updated: July 7, 2026</span>
          </div>
          <p className="text-gray-800 leading-relaxed">
            White label telemedicine is a ready-made, HIPAA-compliant virtual care platform that healthcare
            organizations rebrand as their own — logo, domain, and patient app — instead of building telehealth
            software from scratch. Providers launch in weeks, keep 100% of the patient relationship, and connect
            it to their existing EHR/EMR, billing, and staff workflows.
          </p>
          <br />
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {[
              "Launch in 4–6 weeks under your own brand",
              "HIPAA-compliant with end-to-end encryption",
              "Integrates with major EHR/EMR systems",
              "Web, iOS, and Android — fully white-labeled",
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
