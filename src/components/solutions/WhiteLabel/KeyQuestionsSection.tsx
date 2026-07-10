
import React from "react";
import Link from "next/link";
import { Building2, Hospital, Rocket } from "lucide-react";

const KeyQuestionsSection = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="key-questions-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="key-questions-heading" className="heading-3 mb-10 text-center">
            White Label Telemedicine Platform: What You Need to Know
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-3">What is white label telemedicine?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A white label telemedicine platform, also referred to as a white label telehealth platform, is a
                fully-built, HIPAA-compliant virtual care solution — covering patient registration, appointment
                scheduling, secure video consultations, EHR/EMR workflow support, billing/payment integrations where
                required, and patient communication — that a healthcare organisation licenses and rebrands as its own
                product. Unlike generic third-party consumer telehealth applications, patients never see the
                vendor&apos;s name; they see your logo, your domain, and your clinical team, which keeps the entire
                care journey inside your brand.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">Who should use white label telemedicine?</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A white label telemedicine platform fits any organisation that wants to offer virtual care without
                building software in-house: independent practices, multi-specialty clinics, hospital systems, care
                groups, and healthcare ecosystem partners. Each uses it differently:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <Building2 className="h-6 w-6 text-brand-blue mb-3" />
                  <h4 className="font-semibold mb-2">For clinic owners</h4>
                  <p className="text-sm text-gray-600">
                    If you run a clinic or multi-provider practice, a white label telemedicine platform lets you
                    offer follow-ups, chronic care check-ins, and new patient consultations virtually — under your
                    practice&apos;s name — without asking patients to trust an unfamiliar third-party service.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <Hospital className="h-6 w-6 text-brand-blue mb-3" />
                  <h4 className="font-semibold mb-2">For hospitals</h4>
                  <p className="text-sm text-gray-600">
                    For hospital networks and care groups, this means extending virtual care access for outpatient
                    and specialist consultations across a wider geography, while keeping patient records inside your
                    existing EHR/EMR and preserving one consistent brand across every department and care team.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <Rocket className="h-6 w-6 text-brand-blue mb-3" />
                  <h4 className="font-semibold mb-2">For startups &amp; digital health brands</h4>
                  <p className="text-sm text-gray-600">
                    If you&apos;re building a digital health product or entering the virtual care market, white
                    labeling means you can launch a market-ready, HIPAA-compliant white label telemedicine platform
                    in weeks — instead of spending 12+ months and significant engineering budget building one from
                    scratch.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-brand-blue font-medium hover:underline"
                >
                  Want to see how DocGenie Global can fit your care model? Request a demo &rarr;
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">How much does white label telemedicine cost?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                White label telemedicine is typically priced as a subscription or per-provider licence fee that
                varies with user volume, branding depth, and integration complexity — rather than a flat rate.
                Building the same platform in-house usually costs significantly more upfront and takes considerably
                longer to reach compliance and go live.
              </p>
              <p className="text-gray-700 mb-2 font-medium">Key factors that affect the final price:</p>
              <ul className="list-disc ml-4 list-inside text-gray-700 space-y-1">
                <li>Number of providers and patient volume</li>
                <li>Branding depth — logo, colours, domain, and patient portal configuration</li>
                <li>EHR/EMR and payment integration requirements</li>
                <li>Compliance scope and applicable regional regulations</li>
                <li>Support tier and account management requirements (standard vs. dedicated)</li>
                <li>Launch timeline, which depends on branding, integrations, and workflow complexity</li>
              </ul>
              <p className="text-gray-700 mt-4">
                DocGenie Global provides custom pricing based on your organisation&apos;s size and requirements —{" "}
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
