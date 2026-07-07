import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const included = [
  "Full implementation support",
  "HIPAA compliance infrastructure",
  "Dedicated account manager",
  "Staff training & onboarding",
  "Regular platform updates",
  "24/7 technical SLA",
];

const PricingTeaser = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 border border-brand-blue/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-3 mb-4">Transparent, Scalable Pricing</h2>
              <p className="text-gray-700 mb-6">
                We don't believe in one-size-fits-all pricing. DocGenie Global's white-label plans
                are scoped to your organization's size, required features, and deployment region.
              </p>
              <Link
                href="/contact?inquiry=pricing"
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue/90 transition-colors"
              >
                Get a Custom Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                All plans include
              </p>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
