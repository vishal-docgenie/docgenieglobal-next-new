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
            "@type": "WebPage",
            "@id": "https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/#webpage",
            "url": "https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/",
            "name": "White Label Telemedicine Platform for Healthcare Providers in the UK",
            "description": "Build a white label telemedicine platform for healthcare providers in the UK. Launch secure online consultations, branded patient journeys, appointment workflows, provider dashboards, and privacy-focused virtual care experiences.",
            "inLanguage": "en-GB",
            "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.docgenieglobal.com/#website",
            "name": "DocGenie Global",
            "url": "https://www.docgenieglobal.com/"
            },
            "about": {
            "@id": "https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/#service"
            },
            "mainEntity": {
            "@id": "https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/#service"
            }
        },
        {
            "@type": "Service",
            "@id": "https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/#service",
            "name": "White Label Telemedicine Platform for Healthcare Providers in the UK",
            "serviceType": "White Label Telemedicine Platform",
            "category": "Virtual Care Platform",
            "description": "DocGenie Global helps healthcare providers in the UK launch branded virtual care platforms for online consultations, patient booking, provider workflows, follow-ups, and digital care delivery.",
            "provider": {
            "@id": "https://www.docgenieglobal.com/#organization"
            },
            "areaServed": {
            "@type": "Country",
            "name": "United Kingdom"
            },
            "audience": [
            {
                "@type": "Audience",
                "audienceType": "Private clinics"
            },
            {
                "@type": "Audience",
                "audienceType": "Specialist healthcare providers"
            },
            {
                "@type": "Audience",
                "audienceType": "Digital healthcare companies"
            },
            {
                "@type": "Audience",
                "audienceType": "Multi-location clinic groups"
            }
            ],
            "offers": {
            "@type": "Offer",
            "url": "https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Custom pricing available on request"
            }
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/#breadcrumb",
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
                "name": "UK",
                "item": "https://www.docgenieglobal.com/uk/"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "White Label Telemedicine Platform",
                "item": "https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/"
            }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/#faq",
            "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a white label telemedicine platform for UK clinics?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is a branded virtual care platform that allows healthcare providers in the UK to offer online consultations, appointment booking, patient communication, provider workflows, and digital care services under their own brand."
                }
            },
            {
                "@type": "Question",
                "name": "Is this suitable for UK private clinics?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, DocGenie Global can support private clinics, specialist practices, mental health providers, digital healthcare companies, and multi-location healthcare groups."
                }
            },
            {
                "@type": "Question",
                "name": "Does the platform support secure patient data workflows?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, DocGenie Global supports privacy-focused patient data workflows, controlled access, secure communication, and structured digital records. Final compliance requirements should be reviewed based on each provider’s legal, operational, and data protection obligations."
                }
            },
            {
                "@type": "Question",
                "name": "Can we use our own clinic brand?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the platform can be customized with your logo, colors, communication templates, patient interface, and custom domain or subdomain."
                }
            },
            {
                "@type": "Question",
                "name": "Can this support online and in-clinic care together?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, DocGenie Global can support hybrid care workflows where patients can access both online consultations and in-clinic services."
                }
            },
            {
                "@type": "Question",
                "name": "Does the platform support multiple providers?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the platform can support multiple doctors, specialists, locations, services, and appointment types."
                }
            }
            ]
        }
    ]
};

const faqs = [
    {
        question: "What is a white label telemedicine platform for UK clinics?",
        answer: "It is a branded virtual care platform that allows UK healthcare providers to offer online consultations, appointment booking, patient communication, provider workflows, and digital care services under their own brand."
    },
    {
        question: "Is this suitable for UK private clinics?",
        answer: "Yes, DocGenie Global can support private clinics, specialist practices, mental health providers, digital healthcare companies, and multi-location healthcare groups."
    },
    {
        question: "Does the platform support GDPR-aware workflows?",
        answer: "DocGenie Global is designed to support privacy-focused and GDPR-aware patient data workflows. Final compliance depends on your organizational policies, data processing setup, and legal requirements."
    },
    {
        question: "Can we use our own clinic brand?",
        answer: "Yes, the platform can be customized with your logo, colors, communication templates, patient interface, and custom domain or subdomain."
    },
    {
        question: "Can this support online and in-clinic care together?",
        answer: "Yes, DocGenie Global can support hybrid care workflows where patients can access both online consultations and in-clinic services."
    },
    {
        question: "Does the platform support multiple providers?",
        answer: "Yes, the platform can support multiple doctors, specialists, locations, services, and appointment types."
    }
];

const ukWhiteLabelPage = () => (
    <Layout>
        <Head>
            <title>White Label Telemedicine Platform UK | Branded Virtual Care Solution</title>
            <meta name="description" content="Build a white label telemedicine platform for UK private clinics, healthcare providers, and digital health companies. Launch secure online consultations, branded patient journeys, appointment workflows, and GDPR-aware virtual care experiences." />
            <link rel="canonical" href="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform" />

            {/* hreflang for regional targeting */}
            <link rel="alternate" hrefLang="en-GB" href="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform" />
            <link rel="alternate" hrefLang="en-US" href="https://www.docgenieglobal.com/us/white-label-telemedicine-platform" />
            <link rel="alternate" hrefLang="en" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine" />
            <link rel="alternate" hrefLang="x-default" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine" />

            {/* OpenGraph Tags */}
            <meta property="og:title" content="White Label Telemedicine Platform UK | Branded Virtual Care Solution" />
            <meta property="og:description" content="Build a white label telemedicine platform for UK private clinics, healthcare providers, and digital health companies. Launch secure online consultations, branded patient journeys, appointment workflows, and GDPR-aware virtual care experiences." />
            <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
            <meta property="og:url" content="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="DocGenie Global" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="White Label Telemedicine Platform UK | Branded Virtual Care Solution" />
            <meta name="twitter:description" content="Build a white label telemedicine platform for UK private clinics, healthcare providers, and digital health companies. Launch secure online consultations, branded patient journeys, appointment workflows, and GDPR-aware virtual care experiences." />
            <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />

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
                            <h1 className="heading-2 mb-6">White Label Telemedicine Platform for Healthcare Providers in the UK</h1>
                            <p className="text-lg text-gray-700 mb-8 max-w-2xl prose"><a href="https://www.docgenieglobal.com/">DocGenie Global</a> helps healthcare providers in the UK launch branded virtual care platforms for online consultations, patient booking, provider workflows, follow-ups, and digital care delivery. Our <a href="https://www.docgenieglobal.com/solutions/white-label-telemedicine">white label telemedicine solution</a> allows private clinics, specialist practices, and healthcare companies to create their own branded patient experience across web and mobile.<br /><br />Whether you are building a private GP consultation service, specialist follow-up model, mental health consultation platform, or hybrid care offering, DocGenie Global gives you the foundation to launch and manage virtual care under your own brand.
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
                            <h2 className="heading-3 mb-6">Built for UK Private Clinics and Healthcare Providers</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">Patients across the UK expect convenient access, clear communication, and trustworthy digital healthcare experiences. DocGenie Global helps healthcare providers create a branded online consultation journey that supports both patient convenience and operational efficiency.<br /><br />The platform can support:
                            </p>
                            <ul>
                                <li>Private GP-style clinics</li>
                                <li>Specialist clinics</li>
                                <li>Mental health providers</li>
                                <li>Physiotherapy and allied health providers</li>
                                <li>Multi-location clinic groups</li>
                                <li>Digital healthcare companies</li>
                                <li>Hybrid online and in-clinic care models</li>
                                <li>Remote consultation services</li>
                            </ul>
                            <p className="text-lg text-gray-700">Your patients can discover services, book appointments, consult online, receive follow-ups, and stay connected with your clinic through a branded digital experience.</p>
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
                            <h2 className="heading-3 mb-6">Privacy-Focused Patient Data Workflows</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                Patient data protection is a major trust factor for healthcare providers. DocGenie Global supports privacy-focused digital care workflows that help healthcare organizations manage patient information responsibly across the virtual consultation journey.<br /><br />Key capabilities include:
                            </p>
                            <ul>
                                <li>Secure patient registration workflows</li>
                                <li>Role-based access for providers and admin teams</li>
                                <li>Controlled patient data visibility</li>
                                <li>Secure consultation communication</li>
                                <li>Structured digital records</li>
                                <li>Follow-up and reminder workflows</li>
                                <li>Privacy-focused patient experience</li>
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
                            <h2 className="heading-3 mb-6">Structured Digital Care Workflows</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                DocGenie Global helps UK healthcare providers create structured digital consultation workflows that support consistent patient communication, documentation, follow-up, and operational oversight.<br /><br />The platform can help support:
                            </p>
                            <ul>
                                <li>Appointment booking workflows</li>
                                <li>Provider consultation notes</li>
                                <li>Follow-up reminders</li>
                                <li>Patient communication</li>
                                <li>Admin visibility</li>
                                <li>Care continuity between online and in-clinic visits</li>
                                <li>Structured digital patient journeys</li>
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
                            <h2 className="heading-3 mb-6">Branded Digital Front Door for Clinics in the UK</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                Your website and virtual care platform are often the first digital touchpoints for patients. A white label telemedicine platform helps your clinic create a branded “digital front door” instead of depending on a generic third-party app.<br /><br />With DocGenie Global, your clinic can offer:
                            </p>
                            <ul>
                                <li>Branded appointment booking</li>
                                <li>Online consultation access</li>
                                <li>Patient dashboard</li>
                                <li>Provider dashboard</li>
                                <li>Clinic-branded communication</li>
                                <li>Secure follow-up workflows</li>
                                <li>Custom domain or subdomain</li>
                                <li>Consistent visual identity</li>
                            </ul>
                            <p className="text-lg text-gray-700">This helps UK healthcare providers build patient trust while improving digital access to care.</p>
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
                                DocGenie Global helps healthcare teams manage the complete virtual consultation journey.<br />The platform can support:
                            </p>
                            <ul>
                                <li>Patient registration</li>
                                <li>Service or specialty selection</li>
                                <li>Doctor/provider selection</li>
                                <li>Appointment slot booking</li>
                                <li>Online payment, if required</li>
                                <li>Secure video consultation</li>
                                <li>Digital consultation notes</li>
                                <li>Follow-up communication</li>
                                <li>Patient reminders</li>
                                <li>Admin reporting</li>
                            </ul>
                            <p className="text-lg text-gray-700">This gives healthcare businesses one connected workflow for online consultations, instead of managing multiple disconnected tools.</p>
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
                            <h2 className="heading-3 mb-6">UK Use Cases</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                <b>Private GP-Style Consultations</b><br />
                                Offer convenient online consultations for patients looking for private access to healthcare support.<br /><br />
                                <b>Specialist Follow-Ups</b><br />
                                Support dermatology, women’s health, mental health, cardiology, endocrinology, and other specialist follow-up consultations.<br /><br />
                                <b>Mental Health and Therapy</b><br />
                                Enable secure virtual consultations for therapy, counselling, psychiatry, and ongoing mental health support.<br /><br />
                                <b>Hybrid Clinic Model</b><br />
                                Combine in-clinic appointments with online consultations to improve access, reduce operational friction, and improve patient convenience.<br /><br />
                                <b>Multi-Location Clinic Groups</b><br />
                                Manage providers, appointment types, patient journeys, and digital care workflows across multiple locations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        <ErrorBoundary>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="heading-3 mb-6">Why UK Healthcare Providers Choose DocGenie Global</h2>
                    </div>

                    <div className="prose my-8">
                        <p className="text-lg text-gray-700">
                            Generic telehealth tools may not offer the branding, workflow flexibility, and patient journey control that private healthcare businesses need. DocGenie Global helps UK providers build a branded digital care platform that can be adapted to their services, care model, and patient expectations.
                        </p>
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
                                    <td className="p-4 text-center">Third-party interface</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Your clinic’s brand experience</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium">Patient Journey</td>
                                    <td className="p-4 text-center">Standardized flow</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Configurable booking and care workflow</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Data Workflows</td>
                                    <td className="p-4 text-center">Limited Control</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Privacy-focused structured workflows</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium">Provider Dashboard</td>
                                    <td className="p-4 text-center">Basic functionality</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Care-team-friendly dashboard</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Growth</td>
                                    <td className="p-4 text-center">Limited customization</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Multi-service and multi-location ready</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Patient trust</td>
                                    <td className="p-4 text-center">Platform-led</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Clinic-brand-led</td>
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
                                <b>1. Discovery and Workflow Planning</b><br />
                                We understand your UK healthcare model, patient journey, services, provider setup, and branding requirements.<br /><br />
                                <b>2. Platform Configuration</b><br />
                                We configure your branded interface, appointment flows, patient communication, provider dashboard, and care workflows.<br /><br />
                                <b>3. Testing and Staff Training</b><br />
                                Your team validates patient and provider journeys before launch and receives platform training.<br /><br />
                                <b>4. Launch and Ongoing Support</b><br />
                                We help you launch your branded telemedicine platform and support future improvements as your virtual care services grow.<br /><br />
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
                        <h2 className="heading-3 mb-6">Build Your Branded Virtual Care Platform for the UK Market</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Create a secure, branded, and patient-friendly telemedicine platform for your healthcare business in the UK. DocGenie Global helps you launch online consultations, improve patient access, and manage digital care workflows under your own brand.
                        </p>
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