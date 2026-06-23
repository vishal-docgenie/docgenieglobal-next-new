import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.docgenieglobal.com/#organization",
      "name": "DocGenie Global",
      "legalName": "DOCGENIE GLOBAL PTE. LTD.",
      "url": "https://www.docgenieglobal.com/",
      "logo": "https://www.docgenieglobal.com/lovable-uploads/9f8cf5b9-0b09-4cc4-a771-e2e187f0618a.png",
      "description": "DocGenie Global provides white label telemedicine and virtual care platform solutions for clinics, hospitals, healthcare providers, and digital health companies."
    },
    {
      "@type": "WebSite",
      "@id": "https://www.docgenieglobal.com/#website",
      "url": "https://www.docgenieglobal.com/",
      "name": "DocGenie Global",
      "publisher": {
        "@id": "https://www.docgenieglobal.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.docgenieglobal.com/us/white-label-telemedicine-platform/#webpage",
      "url": "https://www.docgenieglobal.com/us/white-label-telemedicine-platform/",
      "name": "White Label Telemedicine Platform for US Healthcare Providers",
      "description": "Launch a white label telemedicine platform for US clinics, hospitals, and digital health companies. Build a branded, HIPAA-aligned virtual care experience with secure consultations, EHR/EMR integration, payments, and patient engagement workflows.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.docgenieglobal.com/#website"
      },
      "about": {
        "@id": "https://www.docgenieglobal.com/us/white-label-telemedicine-platform/#service"
      },
      "mainEntity": {
        "@id": "https://www.docgenieglobal.com/us/white-label-telemedicine-platform/#service"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.docgenieglobal.com/us/white-label-telemedicine-platform/#service",
      "name": "White Label Telemedicine Platform for US Healthcare Providers",
      "serviceType": "White Label Telemedicine Platform",
      "category": "Virtual Care Platform",
      "description": "DocGenie Global helps US clinics, hospitals, specialty practices, and digital health companies launch branded telemedicine platforms with secure online consultations, patient booking, provider workflows, EHR/EMR integration, payments, and follow-up communication.",
      "provider": {
        "@id": "https://www.docgenieglobal.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "audience": [
        {
          "@type": "Audience",
          "audienceType": "US clinics"
        },
        {
          "@type": "Audience",
          "audienceType": "Hospitals"
        },
        {
          "@type": "Audience",
          "audienceType": "Specialty care groups"
        },
        {
          "@type": "Audience",
          "audienceType": "Behavioral health providers"
        },
        {
          "@type": "Audience",
          "audienceType": "Digital health companies"
        },
        {
          "@type": "Audience",
          "audienceType": "Employer healthcare and virtual care companies"
        }
      ],
      "url": "https://www.docgenieglobal.com/us/white-label-telemedicine-platform/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.docgenieglobal.com/us/white-label-telemedicine-platform/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.docgenieglobal.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "US",
          "item": "https://www.docgenieglobal.com/us/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "White Label Telemedicine Platform",
          "item": "https://www.docgenieglobal.com/us/white-label-telemedicine-platform/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.docgenieglobal.com/us/white-label-telemedicine-platform/#faq",
      "mainEntity": [{
          "@type": "Question",
          "name": "What is a white label telemedicine platform for US healthcare providers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is a branded virtual care platform that allows US healthcare organizations to offer online consultations, appointment booking, provider workflows, patient engagement, and secure care delivery under their own brand."
          }
        },
        {
          "@type": "Question",
          "name": "Is DocGenie Global HIPAA-compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DocGenie Global is designed to support secure and HIPAA-aligned virtual care workflows. Final compliance depends on implementation, organizational processes, agreements, and how the platform is configured for your use case."
          }
        },
        {
          "@type": "Question",
          "name": "Can the platform integrate with our EHR or EMR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, EHR/EMR integration can be supported depending on your existing system, technical requirements, and workflow needs."
          }
        },
        {
          "@type": "Question",
          "name": "Who can use this platform in the US?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Private practices, clinics, hospitals, specialty groups, behavioral health providers, chronic care programs, and digital health companies can use a white label telemedicine platform."
          }
        },
        {
          "@type": "Question",
          "name": "Can we use our own brand and domain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the platform can be customized with your logo, colors, interface elements, communication templates, and domain/subdomain."
          }
        },
        {
          "@type": "Question",
          "name": "How long does implementation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timeline depends on customization, integrations, payment setup, and workflow complexity. A basic branded deployment can be faster, while advanced integrations may take longer."
          }
        }
      ]}
]};

// const faqSchemaData = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [{
//         "@type": "Question",
//         "name": "What makes DocGenie the best telemedicine platform for my clinic?",
//         "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "DocGenie combines white label capabilities, HIPAA compliance, and a comprehensive feature set designed specifically for healthcare providers. Our platform is fully customizable to match your clinic's branding while providing reliable virtual care services that your patients will love."
//         }
//     }, {
//         "@type": "Question",
//         "name": "How does your white label telemedicine solution work for doctors?",
//         "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Our white label solution allows doctors to offer telemedicine services under their own brand. You get a fully customized platform with your logo, colors, and branding elements. Patients will experience seamless virtual care that feels like an extension of your practice, enhancing trust and continuity of care."
//         }
//     }, {
//         "@type": "Question",
//         "name": "Is DocGenie a HIPAA-compliant telemedicine platform?",
//         "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Absolutely. DocGenie is built from the ground up with HIPAA compliance as a core principle. Our virtual care platform employs end-to-end encryption, secure data storage, strict access controls, and follows all required protocols to ensure patient information remains protected and confidential."
//         }
//     }, {
//         "@type": "Question",
//         "name": "What benefits will my practice gain from implementing a telemedicine solution?",
//         "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Implementing DocGenie's telemedicine solution provides numerous benefits: increased patient satisfaction, expanded geographic reach, reduced no-shows, improved workflow efficiency, new revenue opportunities, and competitive advantage in the healthcare market. Our platform helps you deliver care to more patients while maintaining quality and reducing operational costs."
//         }
//     }, {
//         "@type": "Question",
//         "name": "How quickly can I implement DocGenie's virtual healthcare platform?",
//         "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Most healthcare providers can implement our virtual care platform in just 2-4 weeks. Our team provides comprehensive onboarding support, including staff training, integration with your existing systems, and customization of the platform to match your workflow. We're committed to ensuring a smooth and efficient transition to telemedicine."
//         }
//     }]
// };

const faqs = [
    {
        question: "What is a white label telemedicine platform for US healthcare providers?",
        answer: "It is a branded virtual care platform that allows US healthcare organizations to offer online consultations, appointment booking, provider workflows, patient engagement, and secure care delivery under their own brand."
    },
    {
        question: "Is DocGenie Global HIPAA-compliant?",
        answer: "DocGenie Global is designed to support secure and HIPAA-aligned virtual care workflows. Final compliance depends on implementation, organizational processes, agreements, and how the platform is configured for your use case."
    },
    {
        question: "Can the platform integrate with our EHR or EMR?",
        answer: "Yes, EHR/EMR integration can be supported depending on your existing system, technical requirements, and workflow needs."
    },
    {
        question: "Who can use this platform in the US?",
        answer: "Private practices, clinics, hospitals, specialty groups, behavioral health providers, chronic care programs, and digital health companies can use a white label telemedicine platform."
    },
    {
        question: "Can we use our own brand and domain?",
        answer: "Yes, the platform can be customized with your logo, colors, interface elements, communication templates, and domain/subdomain."
    },
    {
        question: "How long does implementation take?",
        answer: "Timeline depends on customization, integrations, payment setup, and workflow complexity. A basic branded deployment can be faster, while advanced integrations may take longer."
    }
];

const ukWhiteLabelPage = () => (
    <Layout>
        <Head>
            <title>White Label Telemedicine Platform USA | HIPAA-Aligned Virtual Care</title>
            <meta name="description" content="Launch a white label telemedicine platform for US clinics, hospitals, and digital health companies. Build a branded, HIPAA-aligned virtual care experience with secure consultations, EHR/EMR integration, payments, and patient engagement workflows." />
            <link rel="canonical" href="https://www.docgenieglobal.com/us/white-label-telemedicine-platform/" />

            {/* hreflang for regional targeting */}
            <link rel="alternate" hrefLang="en-US" href="https://www.docgenieglobal.com/us/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en-GB" href="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en-ZA" href="https://www.docgenieglobal.com/za/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en-GH" href="https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine/" />
            <link rel="alternate" hrefLang="x-default" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine/" />

            {/* OpenGraph Tags */}
            <meta property="og:title" content="White Label Telemedicine Platform USA | HIPAA-Aligned Virtual Care" />
            <meta property="og:description" content="Launch a white label telemedicine platform for US clinics, hospitals, and digital health companies. Build a branded, HIPAA-aligned virtual care experience with secure consultations, EHR/EMR integration, payments, and patient engagement workflows." />
            <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
            <meta property="og:url" content="https://www.docgenieglobal.com/us/white-label-telemedicine-platform/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="DocGenie Global" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="White Label Telemedicine Platform USA | HIPAA-Aligned Virtual Care" />
            <meta name="twitter:description" content="Launch a white label telemedicine platform for US clinics, hospitals, and digital health companies. Build a branded, HIPAA-aligned virtual care experience with secure consultations, EHR/EMR integration, payments, and patient engagement workflows." />
            <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
            <meta name="twitter:url" content="https://www.docgenieglobal.com/us/white-label-telemedicine-platform/" />
            <meta name="author" content="DocGenie Global" />

            {/* JSON-LD Structured Data*/}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>

            {/* <script type="application/ld+json">
                {JSON.stringify(faqSchemaData)}
            </script> */}
        </Head>

        <ErrorBoundary>
            <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="reveal flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h1 className="heading-2 mb-6">White Label Telemedicine Platform for US Healthcare Providers</h1>
                            <p className="text-lg text-gray-700 mb-8 max-w-2xl prose">
                                Launch your own branded telemedicine platform for the US healthcare market with DocGenie Global. Our <a href="https://www.docgenieglobal.com/solutions/white-label-telemedicine">white label virtual care solution</a> helps clinics, hospitals, specialty practices, and digital health companies deliver secure online consultations, patient booking, provider workflows, EHR/EMR integration, payments, and follow-up communication under their own brand.<br />Whether you are building a virtual primary care service, specialty consultation model, behavioral health platform, chronic care program, or hybrid clinic experience, DocGenie Global gives you the technology foundation to launch faster and scale with confidence.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link href="/contact" data-hero-cta>
                                    <Button className="primary-button">
                                        Request Demo <ChevronRight className="ml-1 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="/pricing">
                                    <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                                        View Pricing
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:justify-self-end reveal">
                            <img
                                src="/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png"
                                alt="Medical professional using white-labeled DocGenie telemedicine platform with customized branding for virtual consultation with patient"
                                className="rounded-2xl shadow-xl max-w-full h-auto animate-float"
                                width={800}
                                height={500}
                                loading="eager"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                onError={(e) => {
                                    console.error("Image failed to load");
                                    e.currentTarget.src = "/lovable-uploads/7eea6038-175c-4722-aa75-a6aaeba42a54.png";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Built for US Clinics, Hospitals, and Digital Health Companies</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                US healthcare providers need virtual care technology that fits their care model, patient expectations, and operational workflows. DocGenie Global helps healthcare organizations create a branded digital care experience without depending on generic third-party telehealth apps.<br />Our platform can support:
                            </p>
                            <ul>
                                <li>Private practices</li>
                                <li>Multi-location clinics</li>
                                <li>Specialty care groups</li>
                                <li>Hospitals and outpatient departments</li>
                                <li>Behavioral health providers</li>
                                <li>Chronic care management programs</li>
                                <li>Digital health startups</li>
                                <li>Employer healthcare and virtual care companies</li>
                            </ul>
                            <p className="text-lg text-gray-700">From appointment booking to provider consultation and post-visit follow-up, your patients stay connected with your brand throughout the complete care journey.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">HIPAA-Compliant Virtual Care Workflows</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                For US healthcare organizations, patient privacy and healthcare data protection are critical. The HIPAA Security Rule sets standards to protect electronic protected health information through administrative, physical, and technical safeguards.<br /><a href="/">DocGenie Global</a> is designed to support secure virtual care workflows with privacy-focused architecture, role-based access, encrypted data handling, and structured patient-provider communication.<br />Key capabilities include:
                            </p>
                            <ul>
                                <li>Secure video consultation workflows</li>
                                <li>Patient data protection</li>
                                <li>Role-based provider and admin access</li>
                                <li>Secure patient communication</li>
                                <li>EHR/EMR data syncing support</li>
                                <li>Controlled access to patient records</li>
                                <li>Audit-friendly healthcare workflows</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Branded Patient Experience for US Healthcare Businesses</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                Patients trust the healthcare provider they choose. Your telemedicine platform should strengthen that trust instead of sending patients to a generic third-party interface.<br />With DocGenie Global, you can create a branded digital care experience across:
                            </p>
                            <ul>
                                <li>Patient registration</li>
                                <li>Appointment booking</li>
                                <li>Provider selection</li>
                                <li>Online consultation</li>
                                <li>Payment flow</li>
                                <li>Email and WhatsApp/SMS communication</li>
                                <li>Follow-up reminders</li>
                                <li>Patient dashboard</li>
                                <li>Provider dashboard</li>
                            </ul>
                            <p className="text-lg text-gray-700">Your brand remains visible across the entire patient journey, helping improve recognition, trust, and patient retention.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">EHR/EMR and Healthcare Workflow Integration</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                A telemedicine platform should not operate separately from your existing healthcare systems. DocGenie Global supports integration-ready workflows that help connect virtual care with your existing operations.<br />The platform can support:
                            </p>
                            <ul>
                                <li>EHR/EMR integration</li>
                                <li>Patient intake workflows</li>
                                <li>Appointment management</li>
                                <li>Provider scheduling</li>
                                <li>Digital consultation notes</li>
                                <li>Payment and billing workflows</li>
                                <li>Follow-up reminders</li>
                                <li>API-based system connectivity</li>
                            </ul>
                            <p className="text-lg text-gray-700">This helps healthcare teams reduce manual work, improve care coordination, and manage patient journeys more efficiently.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Use Cases for the US Market</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                DocGenie Global can be adapted for different US healthcare business models.<br /><br />
                                <b>Virtual Primary Care</b><br />
                                Offer online consultations, follow-ups, preventive care, and patient communication under your own brand.<br /><br />
                                <b>Specialty Care Consultations</b><br />
                                Support dermatology, mental health, chronic care, women’s health, cardiology follow-ups, and other specialty workflows.<br /><br />
                                <b>Behavioral Health and Therapy</b><br />
                                Create a secure online consultation experience for therapy, counseling, psychiatry, and mental health follow-ups.<br /><br />
                                <b>Chronic Care Management</b><br />
                                Support recurring patient engagement, follow-ups, reminders, vitals tracking, and long-term care coordination.<br /><br />
                                <b>Employer and Member-Based Virtual Care</b><br />
                                Build branded virtual care access for employees, members, or specific patient communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Multi-State and Multi-Provider Scalability</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                As your virtual care business grows, your platform should support multiple providers, locations, specialties, and patient segments.<br />DocGenie Global helps healthcare organizations manage:
                            </p>
                            <ul>
                                <li>Multiple doctors and providers</li>
                                <li>Multiple specialties</li>
                                <li>Multiple clinic locations</li>
                                <li>Different appointment types</li>
                                <li>Online and hybrid consultation models</li>
                                <li>Admin-level controls</li>
                                <li>Provider-wise dashboards</li>
                                <li>Patient engagement workflows</li>
                            </ul>
                            <p className="text-lg text-gray-700">This makes the platform suitable for both focused practices and larger healthcare networks.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        <ErrorBoundary>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="heading-3 mb-6">Why US Healthcare Providers Choose DocGenie Global</h2>
                    </div>

                    <div className="prose my-8">
                        <p className="text-lg text-gray-700">Generic telehealth tools may be quick to start, but they often limit brand ownership, workflow control, and long-term scalability. DocGenie Global gives US healthcare businesses a flexible white label platform that can be configured around their brand and care model.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-3/4 border-collapse sm:table-text-xs mx-auto">
                            <thead>
                                <tr className="bg-brand-blue text-white">
                                    <th className="p-4 text-left w-1/5">Requirement</th>
                                    <th className="p-4 text-center w-1/3">Generic Telehealth Apps</th>
                                    <th className="p-4 text-center w-1/3">DocGenie White Label</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Branding</td>
                                    <td className="p-4 text-center">Third-party experience</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Fully branded patient journey</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium">Domain</td>
                                    <td className="p-4 text-center">App-owned or shared</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Your own domain/subdomain</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Workflows</td>
                                    <td className="p-4 text-center">Standardized</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Configurable care workflows</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium">Integration</td>
                                    <td className="p-4 text-center">Limited</td>
                                    <td className="p-4 text-center bg-brand-blue/30">API and EHR/EMR support</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Patient Relationship</td>
                                    <td className="p-4 text-center">Platform-led</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Provider-brand-led</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Scalability</td>
                                    <td className="p-4 text-center">Limited customization</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Multi-provider, multi-specialty ready</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Implementation Process</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                <b>1. Discovery and Planning</b><br />
                                We understand your US healthcare model, virtual care goals, branding needs, workflows, and integration requirements.<br /><br />
                                <b>2. Platform Configuration</b><br />
                                We configure your branding, appointment flows, provider dashboard, patient experience, payments, and communication workflows.<br /><br />
                                <b>3. Integration and Testing</b><br />
                                We support required integrations, test key user journeys, and validate patient/provider workflows before launch.<br /><br />
                                <b>4. Launch and Support</b><br />
                                We help you launch your branded telemedicine platform and provide ongoing support for improvements and scaling.<br /><br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white" id="faq">
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
                </div>
            </section>
        </ErrorBoundary>

        <ErrorBoundary>
            <section className="py-16 bg-brand-blue/10 rounded-3xl my-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto reveal">
                        <h2 className="heading-3 mb-6">Launch Your Branded Telemedicine Platform in the US</h2>
                        <p className="text-lg text-gray-700 mb-8">Build a secure, scalable, and branded virtual care platform for your healthcare business. DocGenie Global helps you move faster from idea to implementation with customizable telemedicine technology and expert support.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact">
                                <Button className="primary-button">
                                    Request Demo <ChevronRight className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                                    View Pricing
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

    </Layout>
);

export default ukWhiteLabelPage;