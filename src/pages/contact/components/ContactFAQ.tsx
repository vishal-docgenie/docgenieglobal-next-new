import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactFAQ = () => {
  return (
    <div className="max-w-4xl mx-auto my-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions About Our Virtual Care Platform
      </h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium text-left">
            What makes DocGenie the best telemedicine platform for my clinic?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            DocGenie combines white label capabilities, HIPAA compliance, and a comprehensive feature set designed specifically for healthcare providers. Our platform is fully customizable to match your clinic's branding while providing reliable virtual care services that your patients will love.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium text-left">
            How does your white label telemedicine solution work for doctors?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Our white label solution allows doctors to offer telemedicine services under their own brand. You get a fully customized platform with your logo, colors, and branding elements. Patients will experience seamless virtual care that feels like an extension of your practice, enhancing trust and continuity of care.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium text-left">
            Is DocGenie a HIPAA-compliant telemedicine platform?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Absolutely. DocGenie is built from the ground up with HIPAA compliance as a core principle. Our virtual care platform employs end-to-end encryption, secure data storage, strict access controls, and follows all required protocols to ensure patient information remains protected and confidential.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium text-left">
            What benefits will my practice gain from implementing a telemedicine solution?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Implementing DocGenie's telemedicine solution provides numerous benefits: increased patient satisfaction, expanded geographic reach, reduced no-shows, improved workflow efficiency, new revenue opportunities, and competitive advantage in the healthcare market. Our platform helps you deliver care to more patients while maintaining quality and reducing operational costs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-medium text-left">
            How quickly can I implement DocGenie's virtual healthcare platform?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Most healthcare providers can implement our virtual care platform in just 2-4 weeks. Our team provides comprehensive onboarding support, including staff training, integration with your existing systems, and customization of the platform to match your workflow. We're committed to ensuring a smooth and efficient transition to telemedicine.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ContactFAQ;
