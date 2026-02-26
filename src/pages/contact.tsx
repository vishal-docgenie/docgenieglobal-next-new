import Head from "next/head";
import Layout from "@/components/Layout";
import ContactInfo from "@/components/contact/ContactInfo";
import HeroSection from "./contact/components/HeroSection";
import ContactFormSection from "./contact/components/ContactFormSection";
import ScheduleDemo from "./contact/components/ScheduleDemo";
import ContactFAQ from "./contact/components/ContactFAQ";
// import ContactTestimonials from "./contact/components/ContactTestimonials";
// import ContactCTA from "./contact/components/ContactCTA";

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