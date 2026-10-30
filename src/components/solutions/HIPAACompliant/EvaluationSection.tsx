import React from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

/**
 * The commercial decision layer for this page.
 *
 * A buyer comparing HIPAA-compliant virtual care platforms has to leave this
 * page to find out what evaluating one involves and what happens after they ask
 * for a demo: the page previously ran from security sections straight into a
 * closing CTA. Over 90 days the page produced no organic clicks at all, so there
 * is no conversion data for it yet — this section exists to give it a path to
 * produce some.
 *
 * The steps below describe only what this site already states: that an
 * implementation plan and timeline follow discovery, that integration scope is
 * assessed against the customer's own systems and APIs, and that the company
 * holds ISO/IEC 27001:2022 certification alongside HIPAA-compliant data
 * handling. No timeline figure, uptime number, customer count, audit outcome or
 * Business Associate Agreement commitment is introduced here.
 */
const EvaluationSection = () => {
  const steps = [
    {
      step: "1",
      title: "Tell us how you deliver care today",
      body: "Which specialties and locations, how many clinicians, what your patients book today, and which EHR/EMR, billing and identity systems are already in place.",
    },
    {
      step: "2",
      title: "We scope the integration and the branding",
      body: "Integration requirements are assessed against your existing systems, available APIs and implementation scope, alongside the branding, domain and patient-facing messaging you want to apply.",
    },
    {
      step: "3",
      title: "You receive a proposed plan and timeline",
      body: "A proposed implementation plan and timeline are provided after that discovery, so the schedule reflects your integrations and readiness rather than a generic estimate.",
    },
    {
      step: "4",
      title: "Configuration, testing and launch",
      body: "Branding and workflow configuration, testing of the integrations, training for your teams, then a coordinated launch with ongoing technical support.",
    },
  ];

  return (
    <section className="py-16 bg-white" aria-labelledby="evaluation-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="evaluation-heading" className="heading-3 mb-6">
            Evaluating the platform: what a demo covers
          </h2>
          <p className="text-lg text-gray-700">
            Compliance posture is only half of the decision. These are the steps between a first
            conversation and running virtual care on the platform, so you know what you are agreeing
            to before you ask for a demo.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 list-none">
          {steps.map(({ step, title, body }) => (
            <li
              key={step}
              className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/20 p-6 lg:p-8 rounded-xl border border-brand-blue/20 text-left"
            >
              <div className="h-10 w-10 bg-brand-blue/30 rounded-full flex items-center justify-center mb-4 font-bold text-brand-blue">
                {step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{body}</p>
            </li>
          ))}
        </ol>

        <div className="max-w-3xl mx-auto mt-12 bg-gray-50 border border-gray-100 rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-3">What you can check about us before you commit</h3>
          <p className="text-gray-700">
            DocGenie Global delivers virtual care on a HIPAA-compliant platform and holds ISO/IEC
            27001:2022 certification for its information security management. Integration scope,
            configuration detail and timelines are confirmed during discovery rather than promised
            in advance, and the{" "}
            <Link href="/integration-guide/" className="text-brand-blue underline">
              integration guide
            </Link>{" "}
            and{" "}
            <Link href="/pricing/" className="text-brand-blue underline">
              pricing page
            </Link>{" "}
            set out how both are approached.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="primary-button inline-flex items-center justify-center"
            onClick={() =>
              trackEvent({
                event: "cta_click",
                cta_text: "Request a HIPAA-compliant platform demo",
                cta_location: "hipaa_evaluation",
                page_path: window.location.pathname,
              })
            }
          >
            Request a HIPAA-compliant platform demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EvaluationSection;
