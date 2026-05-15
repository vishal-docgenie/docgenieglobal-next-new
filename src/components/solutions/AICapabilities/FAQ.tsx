
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
      question: "What AI capabilities does DocGenie Global's platform offer?",
      answer: "The platform leverages advanced AI technologies to enhance various aspects of healthcare delivery. This includes natural language processing for automated documentation, machine learning for predictive analytics, and intelligent data processing to support clinical decision-making and streamline workflows."
    },
    {
      question: "How does AI improve the efficiency of healthcare delivery on the platform?",
      answer: "AI automates routine administrative and clinical tasks, which helps reduce manual workloads and minimizes errors. By analyzing large volumes of patient data in real time, the platform can quickly identify trends and potential risks, enabling healthcare providers to prioritize care and improve overall operational efficiency."
    },
    {
      question: "Can the AI tools integrate with existing healthcare systems and Electronic Health Records (EHRs)?",
      answer: "Yes, DocGenie Global's AI capabilities are designed for seamless integration with existing healthcare infrastructures, including EHR systems. This interoperability ensures that AI-generated insights can be incorporated directly into clinical workflows, enhancing data accessibility and continuity of care."
    },
    {
      question: "How is patient data privacy maintained when using AI-driven features?",
      answer: "Patient data security is a top priority. The platform adheres to strict industry standards and regulatory requirements by implementing robust encryption, anonymizing data used in AI analyses, and enforcing rigorous access controls. These measures ensure that sensitive patient information is protected throughout every step of the AI processing cycle."
    },
    {
      question: "What kind of insights can healthcare providers gain from the AI capabilities?",
      answer: "Healthcare providers can benefit from actionable insights such as predictive risk assessments, personalized treatment recommendations, and real-time alerts about patient status changes. These insights support more informed clinical decisions, enable proactive interventions, and ultimately lead to improved patient outcomes."
    },
    {
      question: "How does DocGenie Global support ongoing improvements to its AI features?",
      answer: "The platform continuously refines its AI algorithms by leveraging real-world data and incorporating user feedback. Regular updates, ongoing machine learning training, and a commitment to innovation ensure that the AI capabilities remain accurate, relevant, and aligned with the evolving needs of the healthcare industry."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Get answers to common questions about our AI capabilities and how they can benefit your healthcare organization.
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
