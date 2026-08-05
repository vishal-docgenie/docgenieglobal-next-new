import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
            "@id": "https://www.docgenieglobal.com/za/white-label-telemedicine-platform/#webpage",
            "url": "https://www.docgenieglobal.com/za/white-label-telemedicine-platform/",
            "name": "White Label Telemedicine Platform South Africa | POPIA-Aligned Virtual Care",
            "description": "Launch a white label telemedicine platform for healthcare providers in South Africa. Branded virtual care with POPIA-aligned data workflows, medical-aid billing workflow support assessed during implementation, connectivity-resilient design, and secure online consultations for private clinics, hospitals, and digital health companies.",
            "inLanguage": "en-ZA",
            "datePublished": "2025-06-12",
            "dateModified": "2026-07-31",
            "isPartOf": {
                "@id": "https://www.docgenieglobal.com/#website"
            },
            "about": {
                "@id": "https://www.docgenieglobal.com/za/white-label-telemedicine-platform/#service"
            },
            "mainEntity": {
                "@id": "https://www.docgenieglobal.com/za/white-label-telemedicine-platform/#service"
            }
        },
        {
            "@type": "Service",
            "@id": "https://www.docgenieglobal.com/za/white-label-telemedicine-platform/#service",
            "name": "White Label Telemedicine Platform for Healthcare Providers in South Africa",
            "serviceType": "White Label Telemedicine Platform",
            "category": "Virtual Care Platform",
            "description": "DocGenie Global helps private clinics, hospitals, and digital health companies in South Africa launch branded telemedicine platforms with POPIA-aligned data workflows, medical-aid billing workflow requirements assessed during implementation, connectivity-resilient design, and secure online consultations.",
            "provider": {
                "@id": "https://www.docgenieglobal.com/#organization"
            },
            "areaServed": {
                "@type": "Country",
                "name": "South Africa"
            },
            "audience": [
                { "@type": "Audience", "audienceType": "Private clinics and GP practices" },
                { "@type": "Audience", "audienceType": "Private hospitals and hospital groups" },
                { "@type": "Audience", "audienceType": "Specialist practices" },
                { "@type": "Audience", "audienceType": "HPCSA-registered practitioners" },
                { "@type": "Audience", "audienceType": "Digital health startups" },
                { "@type": "Audience", "audienceType": "Occupational health providers" },
                { "@type": "Audience", "audienceType": "Mental health and wellness providers" },
                { "@type": "Audience", "audienceType": "Multi-location clinic networks" }
            ],
            "offers": {
                "@type": "Offer",
                "url": "https://www.docgenieglobal.com/za/white-label-telemedicine-platform/",
                "availability": "https://schema.org/InStock",
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "description": "Custom pricing available on request"
                }
            }
        },
        {
            "@type": "HowTo",
            "@id": "https://www.docgenieglobal.com/za/white-label-telemedicine-platform/#howto",
            "name": "How to Launch a White Label Telemedicine Platform in South Africa",
            "description": "The implementation process DocGenie Global follows to configure and launch a branded virtual care platform for South African healthcare providers.",
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Discovery and Workflow Planning",
                    "text": "We understand your South African healthcare model, patient journey, service lines, medical aid billing setup, provider configuration, and branding requirements."
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Platform Configuration",
                    "text": "We configure your branded interface, appointment flows, billing workflow configuration, POPIA-aligned consent workflows, provider dashboard, and patient communication channels."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Testing and Staff Training",
                    "text": "Your clinical and admin team validates the end-to-end patient and provider journey before launch, including payment and billing flows, and receives platform training."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Launch and Ongoing Support",
                    "text": "We help you launch your branded telemedicine platform in South Africa and provide continuous support as your virtual care services grow across providers, locations, and specialties."
                }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.docgenieglobal.com/za/white-label-telemedicine-platform/#breadcrumb",
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
                    "name": "South Africa",
                    "item": "https://www.docgenieglobal.com/za/"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "White Label Telemedicine Platform",
                    "item": "https://www.docgenieglobal.com/za/white-label-telemedicine-platform/"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.docgenieglobal.com/za/white-label-telemedicine-platform/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is a white label telemedicine platform for South Africa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A white label telemedicine platform for South Africa is a ready-configured virtual care solution that allows healthcare providers to offer online consultations, patient booking, medical aid billing, and follow-up workflows under their own brand name and domain. It replaces generic third-party telehealth apps with a fully branded patient experience that your clinic or hospital controls. Private GP practices, specialist clinics, hospital groups, occupational health providers, and digital health companies all use white label platforms to deliver virtual care without building technology from scratch."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is the platform aligned with POPIA (Protection of Personal Information Act)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DocGenie Global is designed to support POPIA-aligned patient data workflows including role-based access, secure communication, encrypted data handling, consent-based workflows, and controlled patient record visibility. Final POPIA compliance depends on each organisation's specific implementation, Information Officer designation, PAIA manual, data processing agreements, and operational setup. Providers should confirm alignment with their own compliance and legal teams."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does the platform support medical aid billing for South African patients?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Medical-aid billing workflow requirements, including connection with a provider's existing billing or practice-management systems, can be assessed during implementation. Requirements for ICD-10, procedure-code capture and medical-aid billing workflows should be confirmed during product discovery."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does the platform work during load shedding?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Connectivity, fallback communication and continuity requirements are reviewed during technical discovery. Availability of reconnection, messaging fallback, asynchronous workflows and offline functionality depends on the selected configuration and implementation scope."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is the platform suitable for HPCSA-registered practitioners?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DocGenie Global can be used by HPCSA-registered practitioners including GPs, specialists, psychologists, physiotherapists, and allied health professionals to deliver branded virtual consultations. Identity, referral and consultation-record requirements can be evaluated as part of workflow discovery. Practitioners remain responsible for ensuring their telehealth practice aligns with current HPCSA guidelines on telemedicine."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can we use our own brand and domain?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, the platform can be fully customised with your logo, colours, communication templates, patient interface, and your own custom domain or subdomain. Patients interact with your branded environment throughout their entire care journey — from booking confirmation through to the consultation interface and post-visit follow-up — without seeing third-party platform branding."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does implementation take for a South African clinic?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most South African deployments launch within weeks, depending on branding scope, medical aid billing integration requirements, and workflow complexity. Simpler configurations with standard appointment types launch faster than multi-location or multi-specialty deployments with full billing integration. DocGenie Global provides a structured four-step implementation process from discovery through to launch and ongoing support."
                    }
                }
            ]
        }
    ]
};

const faqs = [
    {
        question: "What is a white label telemedicine platform for South Africa?",
        answer: "A white label telemedicine platform for South Africa is a ready-configured virtual care solution that allows healthcare providers to offer online consultations, patient booking, medical aid billing, and follow-up workflows under their own brand name and domain. It replaces generic third-party telehealth apps with a fully branded patient experience that your clinic or hospital controls. Private GP practices, specialist clinics, hospital groups, occupational health providers, and digital health companies all use white label platforms to deliver virtual care without building technology from scratch."
    },
    {
        question: "Is the platform aligned with POPIA (Protection of Personal Information Act)?",
        answer: "DocGenie Global is designed to support POPIA-aligned patient data workflows including role-based access, secure communication, encrypted data handling, consent-based workflows, and controlled patient record visibility. Final POPIA compliance depends on each organisation's specific implementation, Information Officer designation, PAIA manual, data processing agreements, and operational setup. Providers should confirm alignment with their own compliance and legal teams."
    },
    {
        question: "Does the platform support medical aid billing for South African patients?",
        answer: "Medical-aid billing workflow requirements, including connection with a provider's existing billing or practice-management systems, can be assessed during implementation. Requirements for ICD-10, procedure-code capture and medical-aid billing workflows should be confirmed during product discovery."
    },
    {
        question: "Does the platform work during load shedding?",
        answer: "Connectivity, fallback communication and continuity requirements are reviewed during technical discovery. Availability of reconnection, messaging fallback, asynchronous workflows and offline functionality depends on the selected configuration and implementation scope."
    },
    {
        question: "Is the platform suitable for HPCSA-registered practitioners?",
        answer: "DocGenie Global can be used by HPCSA-registered practitioners including GPs, specialists, psychologists, physiotherapists, and allied health professionals to deliver branded virtual consultations. Identity, referral and consultation-record requirements can be evaluated as part of workflow discovery. Practitioners remain responsible for ensuring their telehealth practice aligns with current HPCSA guidelines on telemedicine."
    },
    {
        question: "Can we use our own brand and domain?",
        answer: "Yes, the platform can be fully customised with your logo, colours, communication templates, patient interface, and your own custom domain or subdomain. Patients interact with your branded environment throughout their entire care journey — from booking confirmation through to the consultation interface and post-visit follow-up — without seeing third-party platform branding."
    },
    {
        question: "How long does implementation take for a South African clinic?",
        answer: "Most South African deployments launch within weeks, depending on branding scope, medical aid billing integration requirements, and workflow complexity. Simpler configurations with standard appointment types launch faster than multi-location or multi-specialty deployments with full billing integration. DocGenie Global provides a structured four-step implementation process from discovery through to launch and ongoing support."
    }
];

const SouthAfricaWhiteLabelPage = () => (
    <Layout>
        <Head>
            <title>White Label Telemedicine Platform South Africa | POPIA-Aligned Virtual Care</title>
            <meta name="description" content="Launch a branded telemedicine platform for healthcare providers in South Africa. POPIA-aligned data workflows, medical-aid billing workflows assessed during implementation, connectivity-resilient design, and secure online consultations for private clinics, hospitals, and digital health companies." />
            <link rel="canonical" href="https://www.docgenieglobal.com/za/white-label-telemedicine-platform/" />
            <link rel="preload" as="image" href="/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />

            {/* hreflang for regional targeting */}
            <link rel="alternate" hrefLang="en-GB" href="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en-US" href="https://www.docgenieglobal.com/us/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en-ZA" href="https://www.docgenieglobal.com/za/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en-GH" href="https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine/" />
            <link rel="alternate" hrefLang="x-default" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine/" />

            {/* OpenGraph Tags */}
            <meta property="og:title" content="White Label Telemedicine Platform South Africa | POPIA-Aligned Virtual Care" />
            <meta property="og:description" content="Branded telehealth for South Africa — your logo, your domain, your patients. POPIA-aligned data workflows, medical-aid billing workflows assessed during implementation, and connectivity-resilient design for the South African healthcare market." />
            <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:url" content="https://www.docgenieglobal.com/za/white-label-telemedicine-platform/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="DocGenie Global" />
            <meta property="og:locale" content="en_ZA" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@DocGenieGlobal" />
            <meta name="twitter:title" content="White Label Telemedicine Platform South Africa | POPIA-Aligned Virtual Care" />
            <meta name="twitter:description" content="Branded telehealth for South Africa — your logo, your domain, your patients. POPIA-aligned data workflows, medical-aid billing workflows assessed during implementation, and connectivity-resilient design for the South African healthcare market." />
            <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
            <meta name="twitter:url" content="https://www.docgenieglobal.com/za/white-label-telemedicine-platform/" />
            <meta name="author" content="DocGenie Global" />

            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Head>

        {/* Hero */}
        <ErrorBoundary>
            <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="reveal flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h1 className="heading-2 mb-6">White Label Telemedicine Platform for Healthcare Providers in South Africa</h1>
                            <p className="text-lg text-gray-700 mb-8 max-w-2xl prose">
                                <a href="/">DocGenie Global</a> helps private clinics, hospitals, specialist practices, and digital health companies in South Africa launch their own branded virtual care platform. Our <a href="/solutions/white-label-telemedicine">white label telemedicine solution</a> delivers secure online consultations, medical aid billing support, POPIA-aligned data workflows, and a fully branded patient experience across web and mobile.<br /><br />
                                Whether you run a GP practice in Johannesburg, a specialist clinic in Cape Town, a multi-location hospital group, an occupational health service, or a digital health startup — DocGenie Global gives you the technology foundation to launch quickly, serve patients under your own brand, and scale with confidence.
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
                                alt="South African healthcare provider using a white-label branded telemedicine platform for virtual patient consultation on mobile and desktop"
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

        {/* Quick Answer Block */}
        <ErrorBoundary>
            <section className="py-10 bg-white border-b border-gray-100" aria-labelledby="za-quick-answer-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-brand-blue/20 border border-brand-blue/20 rounded-xl p-6 md:p-8">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                            <h2 id="za-quick-answer-heading" className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Quick Answer</h2>
                            <span className="text-xs text-gray-500">Last updated: August 01, 2026</span>
                        </div>
                        <p className="text-gray-800 leading-relaxed">
                            A <strong>white label telemedicine platform for South African healthcare providers</strong> is a ready-configured virtual care solution that lets private clinics, specialist practices, hospitals, and digital health companies offer online consultations, patient booking, medical aid billing, and secure follow-up workflows under their own brand — without building the technology from scratch.
                        </p>
                        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            {[
                                "Launch under your own brand with custom domain, logo, and colour palette",
                                "POPIA-aligned patient data workflows with privacy-by-design architecture",
                                "Medical-aid billing workflow requirements assessed during implementation",
                                "Connectivity and continuity requirements reviewed during technical discovery"
                            ].map((point) => (
                                <li key={point} className="flex items-start text-gray-700">
                                    <svg className="h-5 w-5 text-brand-blue mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Built for SA */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Built for South Africa's Private Healthcare Market</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                South Africa has an established medical-scheme market alongside private-pay and employer-supported healthcare services — yet private healthcare providers face mounting pressure to offer digital access to care, complex billing requirements, and infrastructure challenges including load shedding and uneven connectivity that generic telehealth platforms were not designed to solve.<br /><br />
                                DocGenie Global's white label telemedicine platform is built to address South Africa's specific market realities. The platform can support:
                            </p>
                            <ul>
                                <li>Private GP and family medicine practices</li>
                                <li>Specialist practices (dermatology, cardiology, psychiatry, gynaecology, and more)</li>
                                <li>Private hospitals and day clinics</li>
                                <li>Multi-location clinic networks and hospital groups</li>
                                <li>Occupational health and employee wellness providers</li>
                                <li>Mental health, psychology, and counselling practices</li>
                                <li>Chronic disease management programmes</li>
                                <li>Digital health startups and healthtech companies</li>
                            </ul>
                            <p className="text-lg text-gray-700">Your patients book, consult, pay — and receive follow-up care — all under your brand, not a third-party app's interface. Learn more about <Link href="/blogs/telemedicine-platform-branding-patient-trust">how branded telemedicine builds more patient trust</Link> than generic platforms.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* POPIA */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">POPIA-Aligned Patient Data Workflows</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                The Protection of Personal Information Act (POPIA, Act 4 of 2013) governs how South African organisations collect, store, process, and share personal information — including sensitive patient health data. Healthcare providers operating telemedicine services in South Africa must ensure their digital platforms handle patient data in accordance with POPIA's eight conditions for lawful processing.<br /><br />
                                DocGenie Global is designed to support POPIA-aligned data workflows:
                            </p>
                            <ul>
                                <li>Role-based access controls for providers, admin staff, and patients</li>
                                <li>Secure, encrypted consultation sessions and messaging</li>
                                <li>Controlled visibility and access to patient health records</li>
                                <li>Structured, auditable patient data handling</li>
                                <li>Consent-based patient communication workflows</li>
                                <li>Secure data storage with defined retention workflows</li>
                                <li>Privacy-by-design architecture</li>
                            </ul>
                            <p className="text-lg text-gray-700">
                                Final POPIA compliance is each organisation's responsibility and depends on their specific implementation, Information Officer designation, PAIA manual, data processing agreements, and operational setup. DocGenie Global supports the technical foundation — your legal and compliance team should confirm alignment with your obligations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Medical Aid */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Medical Aid Billing Support for South African Providers</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                Medical-aid billing is central to South Africa's private healthcare sector, and patients expect to use their scheme benefits for virtual consultations just as they would for in-person visits. Medical-aid billing workflow requirements can be assessed during implementation, based on your existing systems and configuration:
                            </p>
                            <ul>
                                <li>Connection with a provider's existing billing or practice-management systems, assessed during implementation</li>
                                <li>Requirements for ICD-10 and procedure-code capture confirmed during product discovery</li>
                                <li>Medical-aid billing workflow requirements evaluated against your scheme and configuration needs</li>
                                <li>Payment integration requirements assessed based on your preferred gateway, banking arrangements and implementation scope</li>
                                <li>Consultation records to support billing and claim workflows</li>
                                <li>Invoice generation requirements evaluated during workflow discovery</li>
                            </ul>
                            <p className="text-lg text-gray-700">Specific medical-aid billing and payment-provider availability is confirmed during technical discovery, based on your practice-management software, scheme requirements, and billing configuration.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Load Shedding */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Load-Shedding Resilience and Connectivity Reliability</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                Load shedding remains a daily operational reality for South African healthcare providers and patients. Power outages disrupt broadband routers, affect clinic infrastructure, and interrupt video calls mid-consultation. A telemedicine platform for this market should account for South Africa's energy and connectivity landscape.<br /><br />
                                Connectivity, fallback communication and continuity requirements are reviewed during technical discovery. Availability of the following depends on the selected configuration and implementation scope:
                            </p>
                            <ul>
                                <li>Adaptive video quality on reduced bandwidth, including mobile-data scenarios</li>
                                <li>Progressive Web App (PWA) access designed for mobile data</li>
                                <li>Reconnection handling if a call drops</li>
                                <li>SMS and WhatsApp notification fallbacks</li>
                                <li>Mobile-first design for lower-end Android devices used on mobile data</li>
                                <li>Asynchronous consultation tools (secure messaging, file uploads)</li>
                            </ul>
                            <p className="text-lg text-gray-700">These connectivity and continuity options are scoped so that power outages are planned for as part of your virtual-care configuration.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* HPCSA */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Built for HPCSA-Registered Practitioners</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                The Health Professions Council of South Africa (HPCSA) has issued guidelines for telemedicine practice — including requirements for informed consent, patient identification, clinical documentation, and referral workflows in virtual consultations. These guidelines apply to all HPCSA-registered practitioners delivering care via telemedicine, regardless of the platform used. Identity, referral and consultation-record requirements can be evaluated as part of workflow discovery, and availability of the following depends on the selected configuration:
                            </p>
                            <ul>
                                <li>Informed consent capture before consultations</li>
                                <li>Patient identity verification workflows</li>
                                <li>Digital consultation notes and clinical record keeping</li>
                                <li>Referral letter generation and secure sharing</li>
                                <li>Clinical documentation support within the consultation workflow</li>
                                <li>Audit trail for consultation events</li>
                                <li>Provider availability and scheduling management</li>
                            </ul>
                            <p className="text-lg text-gray-700">
                                Registered practitioners — GPs, specialists, psychologists, physiotherapists, and allied health professionals — remain responsible for ensuring their individual telehealth practice complies with current HPCSA guidelines and their professional registration requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* SA Use Cases */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">South Africa Telemedicine Use Cases</h2>
                        </div>
                        <div className="prose my-8">
                            <h3>Private GP and Family Medicine Practices</h3>
                            <p className="text-lg text-gray-700">Offer convenient online consultations for script renewals, follow-ups, and non-emergency care — reducing in-clinic demand and improving patient access for members on medical aid and self-pay patients.</p>

                            <h3>Specialist Consultations</h3>
                            <p className="text-lg text-gray-700">Support dermatology, psychiatry, cardiology, endocrinology, women's health, and other specialties with branded online consultation workflows, reducing patient travel time and improving specialist capacity. See our <Link href="/blogs/white-label-telemedicine-specialty-care">guide to white label telemedicine for specialty care</Link> for specialty-specific platform requirements.</p>

                            <h3>Mental Health and Psychology</h3>
                            <p className="text-lg text-gray-700">Create a private, accessible virtual environment for therapy, counselling, psychiatric consultations, and ongoing mental health support — reducing the stigma associated with in-person visits. Learn more in our <Link href="/blogs/white-label-telemedicine-mental-health-practices">guide to white label telemedicine for mental health practices</Link>.</p>

                            <h3>Occupational Health and Employee Wellness</h3>
                            <p className="text-lg text-gray-700">Provide employers and employees with branded virtual occupational health services — fitness-to-work assessments, chronic medication management, mental health check-ins, and sick notes.</p>

                            <h3>Chronic Disease Management</h3>
                            <p className="text-lg text-gray-700">Support patients managing diabetes, hypertension, asthma, HIV, and other long-term conditions with regular virtual check-ins, medication reviews, and care plan updates — without requiring every visit to be in-person. <Link href="/blogs/patient-retention-branded-telemedicine">Branded telemedicine platforms improve patient retention</Link> in chronic care programmes by keeping patients engaged between visits.</p>

                            <h3>Rural and Peri-Urban Healthcare Access</h3>
                            <p className="text-lg text-gray-700">Extend specialist access to patients in the Eastern Cape, Limpopo, Northern Cape, and other underserved regions using a mobile-first platform that performs on 4G mobile data without requiring full broadband.</p>

                            <h3>Multi-Location Hospital and Clinic Groups</h3>
                            <p className="text-lg text-gray-700">Manage providers, specialties, appointment types, and patient workflows across multiple hospitals or clinic locations from a single branded platform with unified admin reporting.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Comparison Table */}
        <ErrorBoundary>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="heading-3 mb-6">Why South African Healthcare Providers Choose DocGenie Global</h2>
                    </div>
                    <div className="prose my-8">
                        <p className="text-lg text-gray-700">
                            Generic telehealth apps were not built for the South African healthcare market. They often lack medical aid billing support, perform poorly during load shedding, and offer no brand ownership. DocGenie Global gives South African healthcare businesses a white label platform designed for local clinical, regulatory, and infrastructure realities.
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
                                    <td className="p-4 text-center bg-brand-blue/30">Your clinic's brand experience</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium">Medical Aid Billing</td>
                                    <td className="p-4 text-center">Rarely supported locally</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Billing workflow requirements assessed during implementation</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Load Shedding</td>
                                    <td className="p-4 text-center">Drops on power loss</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Connectivity and continuity options reviewed at discovery</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium">POPIA Alignment</td>
                                    <td className="p-4 text-center">Jurisdiction unclear</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Privacy-by-design workflows</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">HPCSA Workflows</td>
                                    <td className="p-4 text-center">Generic consent and notes</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Consent, notes, referral and audit requirements scoped at discovery</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Scalability</td>
                                    <td className="p-4 text-center">Limited customisation</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Multi-provider, multi-location ready</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Implementation */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Implementation Process for South African Healthcare Providers</h2>
                        </div>
                        <div className="prose my-8">
                            <h3>1. Discovery and Workflow Planning</h3>
                            <p className="text-lg text-gray-700">We understand your South African healthcare model, patient journey, service lines, medical aid billing setup, provider configuration, and branding requirements.</p>

                            <h3>2. Platform Configuration</h3>
                            <p className="text-lg text-gray-700">We configure your branded interface, appointment flows, billing workflow configuration, POPIA-aligned consent workflows, provider dashboard, and patient communication channels.</p>

                            <h3>3. Testing and Staff Training</h3>
                            <p className="text-lg text-gray-700">Your clinical and admin team validates the end-to-end patient and provider journey — including payment and billing flows — before launch, and receives platform training.</p>

                            <h3>4. Launch and Ongoing Support</h3>
                            <p className="text-lg text-gray-700">We help you launch your branded telemedicine platform in South Africa and provide continuous support as your virtual care services grow across providers, locations, and specialties. Most deployments launch within weeks, depending on configuration scope and billing integration requirements.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* FAQ */}
        <ErrorBoundary>
            <section id="faq">
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="heading-3 mb-6">Frequently Asked Questions</h2>
                            <p className="text-lg text-gray-700">
                                Common questions about our white label telemedicine platform for healthcare providers in South Africa.
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
            </section>
        </ErrorBoundary>

        {/* Related Articles */}
        <ErrorBoundary>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-10">
                        <h2 className="heading-3 mb-3">Related Articles</h2>
                        <p className="text-gray-600">Further reading for South African healthcare providers evaluating virtual care platforms.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                href: "/blogs/telemedicine-platform-branding-patient-trust",
                                title: "How Branded Telemedicine Platforms Build More Patient Trust Than Generic Apps",
                                label: "Branding & Trust"
                            },
                            {
                                href: "/blogs/patient-retention-branded-telemedicine",
                                title: "How Branded Virtual Care Platforms Improve Patient Retention",
                                label: "Patient Retention"
                            },
                            {
                                href: "/blogs/white-label-telemedicine-specialty-care",
                                title: "White Label Telemedicine for Specialty Care",
                                label: "Specialty Care"
                            },
                            {
                                href: "/blogs/white-label-telemedicine-mental-health-practices",
                                title: "White Label Telemedicine for Mental Health Practices",
                                label: "Mental Health"
                            }
                        ].map((article) => (
                            <Link key={article.href} href={article.href} className="block group border border-gray-200 rounded-xl p-5 hover:border-brand-blue/40 hover:shadow-sm transition-all">
                                <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue mb-2 block">{article.label}</span>
                                <span className="text-gray-800 text-sm font-medium group-hover:text-brand-blue leading-snug">{article.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* CTA */}
        <ErrorBoundary>
            <section className="py-16 bg-brand-blue/10 rounded-3xl my-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto reveal">
                        <h2 className="heading-3 mb-6">Launch Your Branded Telemedicine Platform in South Africa</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Build a secure, load-shedding resilient, and fully branded virtual care platform for your South African healthcare business. DocGenie Global helps you launch online consultations, support medical aid billing, align with POPIA requirements, and grow your digital health services under your own brand.
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

export default SouthAfricaWhiteLabelPage;
