
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
      question: "How does white labeling impact patient trust compared to third-party platforms?",
      answer: "White labeling significantly enhances patient trust by maintaining brand continuity across all touchpoints. Research shows that patients are more likely to engage with and trust telehealth services when they're offered under a familiar healthcare brand. This leads to higher adoption rates, better patient satisfaction, and improved clinical outcomes."
    },
    {
      question: "What level of technical support is provided after implementation?",
      answer: "We provide comprehensive technical support after implementation, including 24/7 technical assistance, regular platform updates, security patches, and ongoing optimization. Our support team includes dedicated account managers who understand your specific implementation and can provide tailored assistance."
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
