
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
      question: "What are the key features of DocGenie Global's virtual care platform?",
      answer: "DocGenie Global's virtual care solution is built to streamline remote healthcare delivery. Key features include high-definition video consultations, real-time chat functionality, seamless EHR integration, secure data exchange, and user-friendly interfaces designed to facilitate efficient doctor-patient interactions."
    },
    {
      question: "How does the platform ensure a seamless virtual consultation experience?",
      answer: "The platform is designed with a robust, intuitive interface that minimizes technical disruptions. It supports high-quality video and audio, real-time messaging, and offers tools such as screen sharing and digital documentation, ensuring that both healthcare providers and patients experience smooth and effective consultations."
    },
    {
      question: "Can the virtual care solution integrate with existing healthcare systems?",
      answer: "Yes, integration is a core feature. The platform is compatible with various Electronic Health Record (EHR) systems and other healthcare software, enabling providers to access patient data in real time, streamline workflows, and maintain continuity of care without the need for redundant data entry."
    },
    {
      question: "What security measures are implemented to protect patient information during virtual visits?",
      answer: "Patient security is a top priority. The platform utilizes end-to-end encryption, multi-factor authentication, and secure cloud storage to protect sensitive information. Additionally, regular audits and compliance with industry standards ensure that data remains secure throughout every virtual interaction."
    },
    {
      question: "How does the platform support both providers and patients in managing virtual care appointments?",
      answer: "The solution offers a comprehensive scheduling system that allows providers to manage their appointments and patients to book, reschedule, or cancel sessions with ease. Automated reminders, easy access to digital health records, and integrated payment processing further enhance the virtual care experience for both parties."
    },
    {
      question: "What benefits can healthcare organizations expect from adopting DocGenie Global's virtual care features?",
      answer: "By implementing the virtual care solution, healthcare organizations can expect improved patient access, reduced wait times, and enhanced operational efficiency. The platform also enables providers to offer continuous care remotely, leading to better patient outcomes, increased satisfaction, and a competitive edge in today's evolving healthcare landscape."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Get answers to common questions about our virtual care platform and how it can benefit your healthcare organization.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-700 whitespace-pre-line text-left">
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
