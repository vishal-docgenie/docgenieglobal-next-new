
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What exactly is a white label telemedicine platform?",
      answer: "A white label telemedicine platform is a fully-featured virtual care solution that can be customized with your healthcare organization's branding, colors, and logo. It allows you to offer telehealth services under your own brand identity rather than a third-party vendor's branding, creating a seamless experience for your patients."
    },
    {
      question: "How long does it take to implement a white label telemedicine solution?",
      answer: "Implementation timelines depend on branding requirements, workflows, integrations, mobile applications, data migration and customer readiness. A proposed implementation plan and timeline are provided after discovery."
    },
    {
      question: "Can the platform integrate with our existing EHR/EMR system?",
      answer: "EHR and EMR integration requirements can be assessed based on the organisation's existing systems, available APIs and implementation scope. Specific integration availability is confirmed during technical discovery."
    },
    {
      question: "What types of healthcare providers typically use your white label solution?",
      answer: "Our white label telemedicine platform is used by a diverse range of healthcare providers including independent physician practices, multi-specialty clinics, hospital systems, urgent care networks, behavioral health providers, and specialty care organizations. The solution is scalable to accommodate providers of all sizes."
    },
    {
      question: "How does white labeling improve patient trust compared to third-party platforms?",
      answer: "White labeling helps maintain brand continuity across all touchpoints. When patients see your logo, domain, and emails rather than a third-party vendor’s, they remain within your care ecosystem, which can support a more consistent patient experience and reinforce the doctor-patient relationship."
    },
    {
      question: "What level of technical support is provided after implementation?",
      answer: "Support, maintenance and account-management arrangements are confirmed according to the selected service plan and implementation scope."
    },
    {
      question: "Is the mobile experience a \"Wrapper\" or Native?",
      answer: "We provide high-performance native-style Progressive Web Apps (PWAs) that deliver a fast, app-like experience on any smartphone or tablet, with support for push notifications and mobile-optimised workflows."
    },
    {
      question: "How much does white label telemedicine cost?",
      answer: "White label telemedicine is typically priced as a subscription or per-provider license fee rather than a flat rate — cost depends on provider count, branding depth, EHR/EMR integration needs, compliance scope, and support tier. DocGenie Global offers custom pricing based on your organization's size and requirements; contact us for a tailored quote."
    },
    {
      question: "Is it better to buy a white label telemedicine platform or build one in-house?",
      answer: "For most healthcare organizations, licensing a white label platform is faster and more cost-effective than building in-house. In-house development requires sustained investment in HIPAA compliance, security audits, and infrastructure, while a white label platform like DocGenie Global can launch substantially faster, with security and compliance capabilities already built into the HIPAA-compliant platform. Implementation timelines depend on branding, integrations, workflows and customer readiness."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Get answers to common questions about our white label telemedicine platform and how it can benefit your healthcare organization.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-700 text-left">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
