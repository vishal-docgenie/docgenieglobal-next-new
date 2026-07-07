
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
      answer: "Implementation timelines vary based on the complexity of your requirements, but our typical implementation takes 4-6 weeks from initial discovery to launch. This includes branding customization, system integration, staff training, and testing. We offer accelerated deployment options for organizations that need to launch more quickly."
    },
    {
      question: "Can the platform integrate with our existing EHR/EMR system?",
      answer: "Yes, our white label telemedicine platform supports integration with all major EHR/EMR systems including Epic, Cerner, Allscripts, athenahealth, and many others. We provide both standard API connections and custom integration solutions to ensure seamless data flow between systems."
    },
    {
      question: "What types of healthcare providers typically use your white label solution?",
      answer: "Our white label telemedicine platform is used by a diverse range of healthcare providers including independent physician practices, multi-specialty clinics, hospital systems, urgent care networks, behavioral health providers, and specialty care organizations. The solution is scalable to accommodate providers of all sizes."
    },
    {
      question: "How does white labeling improve patient trust compared to third-party platforms?",
      answer: "White labeling significantly enhances patient trust by maintaining brand continuity across all touchpoints. When patients see your logo, domain, and emails rather than a third-party vendor’s, they feel they remain within your care ecosystem — reducing \"platform friction\" and reinforcing the doctor-patient bond. This leads to higher adoption rates, better patient satisfaction, and improved clinical outcomes."
    },
    {
      question: "What level of technical support is provided after implementation?",
      answer: "We provide comprehensive technical support after implementation, including 24/7 technical assistance, regular platform updates, security patches, and ongoing optimization. Our support team includes dedicated account managers who understand your specific implementation and can provide tailored assistance."
    },
    {
      question: "Is the mobile experience a \"Wrapper\" or Native?",
      answer: "We provide High-Performance Native-style Progressive Web Apps (PWAs) and optional Native iOS/Android wrappers that support Push Notifications and biometric login (FaceID/Fingerprint)."
    },
    {
      question: "How much does a white label telemedicine platform cost?",
      answer: "Pricing is scoped to your organization's size, required features, and deployment region — there is no one-size-fits-all rate card. Factors that influence cost include number of providers, volume of consultations, EHR integrations required, and mobile app publishing. We offer transparent, milestone-based pricing with no hidden fees. Contact us for a custom quote tailored to your use case."
    },
    {
      question: "Do we own the patient data, or does DocGenie?",
      answer: "You own 100% of your patient data. DocGenie Global operates as a Business Associate (BAA) under HIPAA, meaning we process data on your behalf but never retain ownership or use it for any other purpose. Your patient records are stored in a fully siloed, isolated environment — never shared across clients."
    },
    {
      question: "Can we add our own features or custom workflows?",
      answer: "Yes. Beyond the standard feature set, we support custom workflow development — specialty-specific intake forms, custom scheduling rules, specialized clinical note templates, and third-party tool integrations. Our RESTful API and webhook infrastructure let your own dev team extend the platform further."
    },
    {
      question: "Is there a minimum number of providers or patients required?",
      answer: "No minimum. We work with solo practices launching their first virtual clinic as well as large hospital networks handling thousands of consultations monthly. The platform is built to scale with you — you only pay for what you use."
    },
    {
      question: "What countries is the platform available in?",
      answer: "DocGenie Global is deployed across the United States, United Kingdom, South Africa, and Ghana, with compliance infrastructure tailored to each region (HIPAA for the US, CQC/NHS alignment for the UK, HPCSA guidelines for South Africa, and GHS standards for Ghana). We support multi-currency billing and multi-language patient interfaces for international deployments."
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
