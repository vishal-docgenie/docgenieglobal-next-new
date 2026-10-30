
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
      question: "What does HIPAA compliance mean, and why is it crucial for healthcare providers?",
      answer: "HIPAA (Health Insurance Portability and Accountability Act) compliance means adhering to strict standards designed to protect the privacy and security of patient health information. For healthcare providers, maintaining HIPAA compliance is essential to prevent unauthorized access to sensitive data, reduce the risk of data breaches, avoid legal penalties, and foster trust with patients."
    },
    {
      question: "How does DocGenie Global ensure its telemedicine platform meets HIPAA requirements?",
      answer: "DocGenie Global delivers virtual care on a HIPAA-compliant platform. Patient data is encrypted in transit and at rest, access to patient records is role-based and logged, and the company holds ISO/IEC 27001:2022 certification for its information security management system. Arrangements specific to your deployment, including contractual and data-processing documentation, are confirmed during discovery."
    },
    {
      question: "What security features are built into the platform to protect patient information?",
      answer: "The platform protects patient information through:\n\n- Encryption of patient data in transit and at rest.\n- Role-based access controls, so clinicians, administrators, finance teams and patients each see only what their role requires.\n- Access logging over patient records, so your compliance team can review who viewed or changed a record and when.\n\nControls that depend on how your organisation deploys the platform are confirmed during discovery."
    },
    {
      question: "Can DocGenie Global's solution integrate with existing electronic health record (EHR) systems?",
      answer: "EHR and EMR integration is supported, and the requirements for it are assessed against your existing systems, available APIs and implementation scope. What can be connected, and how, is established for your environment during discovery rather than assumed in advance — so integration scope is confirmed before implementation begins."
    },
    {
      question: "What benefits can healthcare organizations expect from using a HIPAA-compliant telemedicine solution?",
      answer: "Healthcare organizations benefit in several key ways:\n\n- Enhanced patient privacy and data security: Reduces the risk of breaches and builds trust.\n- Streamlined workflows: Consultations, records, prescriptions and payments handled in one place rather than across disconnected tools.\n- Regulatory compliance: Minimizes legal risks associated with handling sensitive patient data.\n- Improved patient access: Facilitates remote consultations and enhances overall care delivery.\n\nThese advantages combine to create a more efficient and secure healthcare service."
    },
    {
      question: "What training and support arrangements apply after implementation?",
      answer: "Support, maintenance, training and account-management arrangements are confirmed according to your implementation and service scope, so what applies to your organisation is set out as part of the agreement rather than assumed from a standard package."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Get answers to common questions about our HIPAA-compliant telemedicine platform and how it can benefit your healthcare organization.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                {/* Same page-specific fix as the white-label FAQ: forceMount keeps
                    every answer in the server-rendered HTML instead of only
                    appearing once the client-side accordion opens. Radix drops its
                    own hidden attribute when the content is force-mounted, and this
                    project emits no accordion CSS (the animate-accordion-* classes
                    on AccordionContent compile to nothing under Tailwind v4), so the
                    ancestor-state variant restores the previous behaviour exactly:
                    display:none while the item is closed, which keeps the panel out
                    of the tab order and the accessibility tree, and shows it the
                    moment the item opens. The shared ui/accordion.tsx is untouched. */}
                <AccordionContent forceMount className="text-gray-700 whitespace-pre-line text-left [[data-state=closed]_&]:hidden">
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
