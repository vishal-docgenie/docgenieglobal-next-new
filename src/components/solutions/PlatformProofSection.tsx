import React from "react";
import Link from "next/link";
import { Palette, Stethoscope, CalendarCheck, LayoutDashboard } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export interface PlatformProofSectionProps {
  /**
   * The GA4 cta_location for this page's proof CTA. Passed in as an explicit
   * literal rather than built from a slug, so every attribution value this
   * component can emit is greppable in the source and in the built bundle.
   */
  ctaLocation:
    | "us_wlt_proof"
    | "uk_wlt_proof"
    | "za_wlt_proof"
    | "gh_wlt_proof";
  /** The data-protection regime this page already speaks to, e.g. "HIPAA". */
  complianceLabel: string;
}

/**
 * Capability walkthrough for the four country pages, which previously carried no
 * proof section of any kind — a prospect had to take the hero copy on trust and
 * go straight to the CTA.
 *
 * Every statement here is a capability already published elsewhere on this site
 * (/solutions/white-label-telemedicine, /integration-guide, /pricing). Nothing
 * asserts a customer, a deployment count, an outcome figure or a certification,
 * because no evidence for those exists in this repository. The layout leaves a
 * deliberate slot for real product screenshots: when those are supplied and
 * redacted, each step below takes an accompanying image without restructuring.
 */
const PlatformProofSection = ({ ctaLocation, complianceLabel }: PlatformProofSectionProps) => {
  const steps = [
    {
      icon: Palette,
      title: "It carries your brand, not ours",
      body: "Your logo, colour scheme, custom domain and patient-facing messages apply across web and mobile. Patients book, consult and follow up inside your own care experience — DocGenie Global does not appear in it.",
    },
    {
      icon: CalendarCheck,
      title: "Patients book and join without an app store",
      body: "Registration, scheduling, reminders and the consultation itself run in the browser on desktop and mobile, so a patient joins from a link rather than installing anything first.",
    },
    {
      icon: Stethoscope,
      title: "Clinicians work from one consultation view",
      body: "The clinician sees their day's appointments, opens a consultation, and records notes, medical records and e-prescriptions in the same place, with secure patient messaging alongside.",
    },
    {
      icon: LayoutDashboard,
      title: "Your operations team keeps oversight",
      body: `Admin and finance views cover appointments, clinician onboarding, payments and role-based access, with activity trails supporting your ${complianceLabel} obligations.`,
    },
  ];

  return (
    <section className="py-16 bg-brand-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-3 mb-4">What you are actually buying</h2>
          <p className="text-lg text-gray-700">
            A walkthrough of how a branded virtual-care platform works in practice — for your
            patients, your clinicians and the team running it day to day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="bg-white p-6 lg:p-8 rounded-xl shadow-md text-left">
                <div className="h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.body}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="primary-button inline-flex items-center justify-center"
            onClick={() =>
              trackEvent({
                event: "cta_click",
                cta_text: "Walk through the platform with us",
                cta_location: ctaLocation,
                page_path: window.location.pathname,
              })
            }
          >
            Walk through the platform with us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatformProofSection;
