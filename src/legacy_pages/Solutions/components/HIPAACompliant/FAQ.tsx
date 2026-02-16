
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
      answer: "DocGenie Global implements a multi-layered security strategy to ensure HIPAA compliance. This includes robust data encryption, secure access controls, regular audits, and continuous system updates to address emerging security threats. These measures are integral to safeguarding patient information and maintaining a compliant telemedicine environment."
    },
    {
      question: "What security features are built into the platform to protect patient information?",
      answer: "The platform is equipped with several advanced security features:\n\n- End-to-end encryption: Ensures data is protected during transmission.\n- Multi-factor authentication: Adds an extra layer of security for user access.\n- Secure cloud storage: Protects stored data from unauthorized access.\n- Comprehensive logging and monitoring: Helps detect and respond to any suspicious activity.\n\nTogether, these features create a secure environment that minimizes the risk of data breaches."
    },
    {
      question: "Can DocGenie Global's solution integrate with existing electronic health record (EHR) systems?",
      answer: "Yes, the solution is designed to integrate seamlessly with various EHR systems. This interoperability ensures that healthcare providers can efficiently exchange data, access real-time patient information during teleconsultations, and maintain continuity in patient care—all while keeping data secure and compliant with regulatory standards."
    },
    {
      question: "What benefits can healthcare organizations expect from using a HIPAA-compliant telemedicine solution?",
      answer: "Healthcare organizations benefit in several key ways:\n\n- Enhanced patient privacy and data security: Reduces the risk of breaches and builds trust.\n- Streamlined workflows: Improved operational efficiency through seamless integration with existing systems.\n- Regulatory compliance: Minimizes legal risks associated with handling sensitive patient data.\n- Improved patient access: Facilitates remote consultations and enhances overall care delivery.\n\nThese advantages combine to create a more efficient and secure healthcare service."
    },
    {
      question: "What training and support are available during and after the implementation of the solution?",
      answer: "DocGenie Global offers comprehensive onboarding that includes detailed training sessions to help healthcare professionals quickly become proficient with the platform. Additionally, ongoing support is provided through dedicated customer service channels, regular system updates, and technical assistance to ensure smooth operation and address any issues that arise post-implementation."
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
