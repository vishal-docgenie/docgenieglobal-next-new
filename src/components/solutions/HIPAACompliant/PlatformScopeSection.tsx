import React from "react";
import Link from "next/link";
import { Building2, Hospital, Rocket, Palette, Workflow, PlugZap } from "lucide-react";

/**
 * Who this page is for, and what the platform actually is.
 *
 * GSC, last 28 days: this page drew 273 impressions and no clicks at an average
 * position of 58.7, and the queries it ranked for were mostly the wrong HIPAA
 * intent — "is pandadoc hipaa compliant for healthcare?" (52 impressions),
 * "hipaa compliant vpn" (9), "hipaa-compliant it support for medical offices"
 * (9), "hipaa compliant document management" (4). Its existing sections are all
 * about HIPAA and security in the abstract (DataSecuritySection,
 * ComplianceChecklist, ImportanceSection, "Comprehensive Security Measures"),
 * with nothing that says what the product is, who buys it, or what it does, so
 * Google reasonably matched it to generic HIPAA-IT queries rather than to the
 * platform queries it should own: "hipaa compliant platform" (17 impressions at
 * position 50.1), "hipaa-compliant platform" (19 at 48.2), "hipaa compliant
 * telemedicine software" (15).
 *
 * Every capability named below is already published elsewhere on this site —
 * /solutions/white-label-telemedicine, /solutions/virtual-care-features and
 * /integration-guide. Nothing here asserts a certification, an uptime figure, a
 * customer count, an audit result or a security control that this repository
 * does not already state, because no evidence for anything further exists here.
 */
const PlatformScopeSection = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Clinics and multi-provider practices",
      body: "Run follow-ups, chronic care check-ins and new patient consultations virtually under your own name, without asking patients to trust an unfamiliar third-party service.",
    },
    {
      icon: Hospital,
      title: "Hospitals and care groups",
      body: "Extend outpatient and specialist consultations across a wider geography while patient records stay inside your existing EHR/EMR and one brand stays consistent across departments.",
    },
    {
      icon: Rocket,
      title: "Digital health and healthcare ecosystem partners",
      body: "Launch a market-ready virtual care product under your own brand instead of building the compliance, security and clinical workflow layers from scratch.",
    },
  ];

  const capabilities = [
    {
      icon: Workflow,
      title: "The workflows a consultation actually needs",
      body: "Patient registration, appointment scheduling, secure video consultations, patient dashboards, clinician workflows, e-prescriptions, payments, patient communication and analytics — the full care journey rather than video alone.",
    },
    {
      icon: Palette,
      title: "Your brand, your domain",
      body: "Your logo, colour scheme, custom domain and patient-facing messaging apply across web, tablet and phone, so patients stay inside your branded experience from booking to follow-up.",
    },
    {
      icon: PlugZap,
      title: "Works with the systems you already run",
      body: "EHR and EMR integration requirements are assessed against your existing systems, available APIs and implementation scope, so records and workflows connect to what your teams already use.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="platform-scope-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="platform-scope-heading" className="heading-3 mb-6">
            A HIPAA-compliant virtual care platform, not a compliance service
          </h2>
          <p className="text-lg text-gray-700">
            DocGenie Global is a telemedicine and telehealth platform that healthcare organisations
            license and run under their own brand. HIPAA-compliant handling of patient data is part
            of the platform rather than a separate product — so the question this page answers is
            not just &ldquo;is it compliant?&rdquo; but &ldquo;can my organisation deliver virtual
            care on it?&rdquo;
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-6 text-center">Who it is for</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {audiences.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white p-6 lg:p-8 rounded-xl shadow-md text-left">
              <div className="h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-brand-blue" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{title}</h4>
              <p className="text-gray-700">{body}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 text-center">What the platform provides</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white p-6 lg:p-8 rounded-xl shadow-md text-left">
              <div className="h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-brand-blue" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{title}</h4>
              <p className="text-gray-700">{body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-700 mt-10 max-w-3xl mx-auto">
          If branding and ownership of the patient relationship is the deciding factor for you, the{" "}
          <Link href="/solutions/white-label-telemedicine/" className="text-brand-blue underline">
            white label telemedicine platform
          </Link>{" "}
          page covers that side in full, including what can be rebranded and how build-versus-buy
          compares.
        </p>
      </div>
    </section>
  );
};

export default PlatformScopeSection;
