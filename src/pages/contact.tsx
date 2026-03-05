import Head from "next/head";
import Layout from "@/components/Layout";
import ContactInfo from "@/components/contact/ContactInfo";
import HeroSection from "./contact/components/HeroSection";
import ContactFormSection from "./contact/components/ContactFormSection";
import ScheduleDemo from "./contact/components/ScheduleDemo";
import ContactFAQ from "./contact/components/ContactFAQ";
// import ContactTestimonials from "./contact/components/ContactTestimonials";
// import ContactCTA from "./contact/components/ContactCTA";

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What makes DocGenie the best telemedicine platform for my clinic?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DocGenie combines white label capabilities, HIPAA compliance, and a comprehensive feature set designed specifically for healthcare providers. Our platform is fully customizable to match your clinic's branding while providing reliable virtual care services that your patients will love."
    }
  },{
    "@type": "Question",
    "name": "How does your white label telemedicine solution work for doctors?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our white label solution allows doctors to offer telemedicine services under their own brand. You get a fully customized platform with your logo, colors, and branding elements. Patients will experience seamless virtual care that feels like an extension of your practice, enhancing trust and continuity of care."
    }
  },{
    "@type": "Question",
    "name": "Is DocGenie a HIPAA-compliant telemedicine platform?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Absolutely. DocGenie is built from the ground up with HIPAA compliance as a core principle. Our virtual care platform employs end-to-end encryption, secure data storage, strict access controls, and follows all required protocols to ensure patient information remains protected and confidential."
    }
  },{
    "@type": "Question",
    "name": "What benefits will my practice gain from implementing a telemedicine solution?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Implementing DocGenie's telemedicine solution provides numerous benefits: increased patient satisfaction, expanded geographic reach, reduced no-shows, improved workflow efficiency, new revenue opportunities, and competitive advantage in the healthcare market. Our platform helps you deliver care to more patients while maintaining quality and reducing operational costs."
    }
  },{
    "@type": "Question",
    "name": "How quickly can I implement DocGenie's virtual healthcare platform?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Most healthcare providers can implement our virtual care platform in just 2-4 weeks. Our team provides comprehensive onboarding support, including staff training, integration with your existing systems, and customization of the platform to match your workflow. We're committed to ensuring a smooth and efficient transition to telemedicine."
    }
  }]
};

const ContactPage = () => (
  <Layout>
    <Head>
      {/* OpenGraph Tags */}
      <title>Contact DocGenie Global — White-Label Telemedicine Provider</title>
      <meta name="description" content="Reach out to DocGenie Global for enterprise telehealth, white-label virtual care, or demo enquiries. We're here to help you launch your telemedicine solution." />
      <link rel="canonical" href="https://www.docgenieglobal.com/contact" />

      {/* OpenGraph Tags */}
      <meta property="og:title" content=" Contact DocGenie Global — White-Label Telemedicine Provider" />
      <meta property="og:description" content="Reach out to DocGenie Global for enterprise telehealth, white-label virtual care, or demo enquiries. We're here to help you launch your telemedicine solution." />
      <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/og-image.webp" />
      <meta property="og:url" content="https://www.docgenieglobal.com/contact" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DocGenie Global" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content=" Contact DocGenie Global — White-Label Telemedicine Provider" />
      <meta name="twitter:description" content="Reach out to DocGenie Global for enterprise telehealth, white-label virtual care, or demo enquiries. We're here to help you launch your telemedicine solution." />
      <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/og-image.webp" />

      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="contact telemedicine platform, healthcare software support, virtual care solutions, telemedicine demo, healthcare technology contact, HIPAA-compliant support" />
      <meta name="author" content="DocGenie Global" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchemaData)}
      </script>
    </Head>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <HeroSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <ContactFormSection />
          <ScheduleDemo />
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <ContactInfo />
        </div>

        <ContactFAQ />
        {/* <ContactTestimonials />
        <ContactCTA /> */}
      </div>
    </section>
  </Layout>
);

export default ContactPage;