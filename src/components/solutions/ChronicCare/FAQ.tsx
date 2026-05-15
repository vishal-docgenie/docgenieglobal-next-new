
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
      question: "What is Chronic Care Management (CCM) and why is it important?",
      answer: "Chronic Care Management refers to the coordinated care process designed to support patients with long-term conditions such as diabetes, heart disease, or asthma. It involves proactive monitoring, personalized care planning, and regular follow-ups. By implementing CCM, healthcare providers can improve patient outcomes, reduce emergency visits, and lower overall healthcare costs."
    },
    {
      question: "How does DocGenie Global's CCM solution work?",
      answer: "The solution integrates advanced remote monitoring tools, real-time data analytics, and secure communication channels. Healthcare teams can track vital patient health metrics, receive alerts when conditions change, and adjust care plans promptly. This coordinated approach enables proactive intervention and continuous support for patients managing chronic conditions."
    },
    {
      question: "Can the CCM platform integrate with existing Electronic Health Record (EHR) systems?",
      answer: "Yes, interoperability is a key feature of the platform. It seamlessly integrates with existing EHR systems, ensuring that patient data is consolidated and easily accessible. This integration reduces administrative burdens and helps providers maintain a comprehensive view of each patient's health status for better-informed care decisions."
    },
    {
      question: "What patient engagement features are included in the CCM solution?",
      answer: "The solution offers several tools to empower patients in managing their chronic conditions:\n\n- Patient Portals: Secure access to personal health records, care plans, and educational materials.\n- Remote Monitoring: Devices and apps that allow patients to record and share their health data.\n- Automated Reminders: Notifications for medication, appointments, and self-care tasks.\n\nThese features encourage active patient participation and enhance adherence to care plans."
    },
    {
      question: "How is patient data security ensured in the Chronic Care Management platform?",
      answer: "Patient security is a top priority. The platform employs robust data encryption, multi-factor authentication, and secure cloud storage. It adheres to HIPAA standards and industry best practices, ensuring that all sensitive health information remains confidential and is protected against unauthorized access."
    },
    {
      question: "What benefits can healthcare organizations expect from using this CCM solution?",
      answer: "Healthcare organizations can see a range of benefits, including:\n\n- Improved Patient Outcomes: Early detection of issues and timely interventions lead to better health management.\n- Reduced Hospitalizations: Proactive care helps prevent complications and avoid costly hospital admissions.\n- Enhanced Efficiency: Streamlined workflows and integrated data systems reduce administrative tasks.\n- Cost Savings: Better chronic care management can lower overall treatment expenses while improving quality of care."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Get answers to common questions about our Chronic Care Management platform and how it can benefit your healthcare organization.
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
