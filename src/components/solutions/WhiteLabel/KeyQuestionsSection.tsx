
import React from "react";
import Link from "next/link";
import { Building2, Hospital, Rocket } from "lucide-react";

const KeyQuestionsSection = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="key-questions-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="key-questions-heading" className="heading-3 mb-10 text-center">
            White Label Telemedicine: What You Need to Know
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-3">What is white label telemedicine?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                White label telemedicine is a fully-built virtual care platform — video visits, secure messaging,
                e-prescribing, and scheduling — that a healthcare organization licenses and rebrands as its own
                product. Unlike generic third-party consumer telehealth apps, patients never see the vendor&apos;s
                name; they see your logo, your domain, and your clinical team, which keeps the entire care
                journey inside your brand.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">Who should use white label telemedicine?</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                White label telemedicine fits any organization that wants to offer virtual care without building
                software in-house: independent practices, multi-specialty clinics, hospital systems, urgent care
                networks, behavioral health providers, and digital health startups. Each uses it differently:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <Building2 className="h-6 w-6 text-brand-blue mb-3" />
                  <h4 className="font-semibold mb-2">For clinic owners</h4>
                  <p className="text-sm text-gray-600">
                    If you run a clinic, white label telemedicine lets you offer follow-ups and chronic care
                    check-ins virtually — under your practice&apos;s name — reducing no-shows without asking
                    patients to trust an unfamiliar third-party app.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <Hospital className="h-6 w-6 text-brand-blue mb-3" />
                  <h4 className="font-semibold mb-2">For hospitals</h4>
                  <p className="text-sm text-gray-600">
                    For hospital networks, this means extending specialty and urgent care access across a wider
                    geography while keeping records inside your existing EHR/EMR and preserving one consistent
                    brand across every department.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <Rocket className="h-6 w-6 text-brand-blue mb-3" />
                  <h4 className="font-semibold mb-2">For startups &amp; digital health brands</h4>
                  <p className="text-sm text-gray-600">
                    If you&apos;re building a digital health product, white labeling means you can launch a
                    market-ready, HIPAA-compliant telehealth app in weeks instead of spending 12+ months and a
                    multi-million-dollar budget building one from scratch.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">How much does white label telemedicine cost?</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                White label telemedicine pricing is typically a subscription or per-provider license fee that
                varies with user volume, branding depth, and integration complexity — rather than a flat rate.
                Building the same platform in-house usually costs significantly more upfront and takes months
                longer to reach compliance and launch.
              </p>
              <p className="text-gray-700 mb-2 font-medium">Key factors that affect the final price:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Number of providers and patient volume</li>
                <li>Depth of branding (web only vs. native iOS/Android apps)</li>
                <li>EHR/EMR and payment integration requirements</li>
                <li>Compliance scope (HIPAA, SOC 2, regional regulations)</li>
                <li>Support tier and SLA (standard vs. dedicated account management)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                DocGenie Global provides custom pricing based on your organization&apos;s size and requirements —{" "}
                <Link href="/contact" className="text-brand-blue underline">request a quote</Link> for an exact
                figure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyQuestionsSection;
