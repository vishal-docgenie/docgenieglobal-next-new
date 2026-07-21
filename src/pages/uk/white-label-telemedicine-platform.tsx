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
            "dateModified": "2026-07-20",
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
            "description": "DocGenie Global helps healthcare providers in the UK launch branded virtual care platforms for online consultations, patient booking, provider workflows, follow-ups, and digital care delivery. Designed with UK GDPR and Data Protection Act 2018 considerations in mind, the platform supports privacy-focused patient data workflows for private clinics, CQC-registered providers, and digital health companies.",
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
                    "audienceType": "CQC-registered providers"
                },
                {
                    "@type": "Audience",
                    "audienceType": "Independent mental health practitioners"
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
                    "priceCurrency": "GBP",
                    "description": "Custom pricing available on request"
                }
            }
        },
        {
            "@type": "HowTo",
            "@id": "https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/#howto",
            "name": "How to Launch a White Label Telemedicine Platform in the UK",
            "description": "The process DocGenie Global follows to configure and launch a branded virtual care platform for UK healthcare providers.",
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Discovery and Workflow Planning",
                    "text": "We understand your UK healthcare model, patient journey, services, provider setup, and branding requirements."
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Platform Configuration",
                    "text": "We configure your branded interface, appointment flows, patient communication, provider dashboard, and care workflows."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Testing and Staff Training",
                    "text": "Your team validates patient and provider journeys before launch and receives platform training."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Launch and Ongoing Support",
                    "text": "We help you launch your branded telemedicine platform and support future improvements as your virtual care services grow."
                }
            ]
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
                        "text": "A white label telemedicine platform for UK clinics is a ready-configured virtual care solution that allows healthcare providers to offer online consultations, patient booking, provider dashboards, and follow-up workflows under their own brand name and domain. It replaces generic third-party telehealth apps with a fully branded patient experience that your clinic controls. Private GP services, specialist practices, mental health providers, and multi-location clinic groups all use white label platforms to deliver virtual care without building technology from scratch."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is this suitable for UK private clinics?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, DocGenie Global can support private clinics, specialist practices, mental health providers, digital healthcare companies, and multi-location healthcare groups operating in the UK. The platform is designed for private healthcare providers who want to offer branded online consultations independently of NHS infrastructure. It can also support hybrid models where private and NHS-referral pathways are managed within the same branded platform."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does the platform support GDPR-aware workflows?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DocGenie Global supports privacy-focused patient data workflows designed with UK GDPR and Data Protection Act 2018 considerations in mind, including secure data handling, role-based access controls, and structured patient records. Each provider remains responsible for their own data protection compliance, ICO registration, and data processing agreements relevant to their services."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can we use our own clinic brand?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, the platform can be customised with your logo, colours, communication templates, patient interface, and custom domain or subdomain. Patients interact with your branded environment throughout the entire care journey — from booking confirmation to the consultation interface and post-visit follow-up — without seeing third-party branding."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can this support online and in-clinic care together?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, DocGenie Global can support hybrid care workflows where patients can access both online consultations and in-clinic services through the same branded platform. This is particularly useful for UK private clinics that want to offer flexible access without managing separate digital tools for each care setting."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does the platform support multiple providers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, the platform can support multiple doctors, specialists, locations, services, and appointment types under a single branded interface. Multi-location clinic groups and specialist networks can manage separate provider schedules, patient panels, and appointment types while presenting a unified patient experience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is this suitable for CQC-registered healthcare providers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DocGenie Global can be configured for services provided by CQC-registered healthcare organisations. Each provider remains responsible for meeting their own CQC registration, inspection, and quality standards requirements. The platform supports the workflow and documentation infrastructure that CQC-registered services typically need for virtual care delivery."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How quickly can a UK clinic launch a branded telemedicine platform?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most UK deployments launch within weeks, depending on branding scope, workflow complexity, and integration requirements. Simple configurations with standard appointment types launch faster than complex multi-specialty or multi-location deployments. DocGenie Global provides a structured implementation process from discovery through to launch and ongoing support."
                    }
                }
            ]
        }
    ]
};

const faqs = [
    {
        question: "What is a white label telemedicine platform for UK clinics?",
        answer: "A white label telemedicine platform for UK clinics is a ready-configured virtual care solution that allows healthcare providers to offer online consultations, patient booking, provider dashboards, and follow-up workflows under their own brand name and domain. It replaces generic third-party telehealth apps with a fully branded patient experience that your clinic controls. Private GP services, specialist practices, mental health providers, and multi-location clinic groups all use white label platforms to deliver virtual care without building technology from scratch."
    },
    {
        question: "Is this suitable for UK private clinics?",
        answer: "Yes, DocGenie Global can support private clinics, specialist practices, mental health providers, digital healthcare companies, and multi-location healthcare groups operating in the UK. The platform is designed for private healthcare providers who want to offer branded online consultations independently of NHS infrastructure. It can also support hybrid models where private and NHS-referral pathways are managed within the same branded platform."
    },
    {
        question: "Does the platform support GDPR-aware workflows?",
        answer: "DocGenie Global supports privacy-focused patient data workflows designed with UK GDPR and Data Protection Act 2018 considerations in mind, including secure data handling, role-based access controls, and structured patient records. Each provider remains responsible for their own data protection compliance, ICO registration, and data processing agreements relevant to their services."
    },
    {
        question: "Can we use our own clinic brand?",
        answer: "Yes, the platform can be customised with your logo, colours, communication templates, patient interface, and custom domain or subdomain. Patients interact with your branded environment throughout the entire care journey — from booking confirmation to the consultation interface and post-visit follow-up — without seeing third-party branding."
    },
    {
        question: "Can this support online and in-clinic care together?",
        answer: "Yes, DocGenie Global can support hybrid care workflows where patients can access both online consultations and in-clinic services through the same branded platform. This is particularly useful for UK private clinics that want to offer flexible access without managing separate digital tools for each care setting."
    },
    {
        question: "Does the platform support multiple providers?",
        answer: "Yes, the platform can support multiple doctors, specialists, locations, services, and appointment types under a single branded interface. Multi-location clinic groups and specialist networks can manage separate provider schedules, patient panels, and appointment types while presenting a unified patient experience."
    },
    {
        question: "Is this suitable for CQC-registered healthcare providers?",
        answer: "DocGenie Global can be configured for services provided by CQC-registered healthcare organisations. Each provider remains responsible for meeting their own CQC registration, inspection, and quality standards requirements. The platform supports the workflow and documentation infrastructure that CQC-registered services typically need for virtual care delivery."
    },
    {
        question: "How quickly can a UK clinic launch a branded telemedicine platform?",
        answer: "Most UK deployments launch within weeks, depending on branding scope, workflow complexity, and integration requirements. Simple configurations with standard appointment types launch faster than complex multi-specialty or multi-location deployments. DocGenie Global provides a structured implementation process from discovery through to launch and ongoing support."
    }
];

const ukWhiteLabelPage = () => (
    <Layout>
        <Head>
            <title>White Label Telemedicine Platform UK | Branded Virtual Care Solution</title>
            <meta name="description" content="Build a white label telemedicine platform for UK private clinics, healthcare providers, and digital health companies. Launch secure online consultations, branded patient journeys, appointment workflows, and GDPR-aware virtual care experiences." />
            <link rel="canonical" href="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/" />

            {/* hreflang for regional targeting */}
            <link rel="alternate" hrefLang="en-GB" href="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en-US" href="https://www.docgenieglobal.com/us/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en-ZA" href="https://www.docgenieglobal.com/za/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en-GH" href="https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/" />
            <link rel="alternate" hrefLang="en" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine/" />
            <link rel="alternate" hrefLang="x-default" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine/" />

            {/* OpenGraph Tags */}
            <meta property="og:title" content="White Label Telemedicine Platform UK | Branded Virtual Care Solution" />
            <meta property="og:description" content="Build a white label telemedicine platform for UK private clinics, healthcare providers, and digital health companies. Launch secure online consultations, branded patient journeys, appointment workflows, and GDPR-aware virtual care experiences." />
            <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
            <meta property="og:url" content="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="DocGenie Global" />
            <meta property="og:locale" content="en_GB" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="White Label Telemedicine Platform UK | Branded Virtual Care Solution" />
            <meta name="twitter:description" content="Build a white label telemedicine platform for UK private clinics, healthcare providers, and digital health companies. Launch secure online consultations, branded patient journeys, appointment workflows, and GDPR-aware virtual care experiences." />
            <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
            <meta name="twitter:url" content="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform/" />
            <meta name="author" content="DocGenie Global" />

            {/* JSON-LD Structured Data */}
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

        {/* Quick Answer Block */}
        <ErrorBoundary>
            <section className="py-10 bg-white border-b border-gray-100" aria-labelledby="uk-quick-answer-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-brand-blue/20 border border-brand-blue/20 rounded-xl p-6 md:p-8">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                            <h2 id="uk-quick-answer-heading" className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Quick Answer</h2>
                            <span className="text-xs text-gray-500">Last updated: July 20, 2026</span>
                        </div>
                        <p className="text-gray-800 leading-relaxed">
                            A <strong>white label telemedicine platform for UK healthcare providers</strong> is a ready-configured virtual care solution that lets private clinics, specialist practices, and digital health companies offer online consultations, patient booking, provider dashboards, and secure follow-up workflows under their own brand — without building the technology from scratch.
                        </p>
                        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            {[
                                "Launch under your own brand with custom domain, logo, and colour palette",
                                "Privacy-focused workflows designed with UK GDPR and DPA 2018 in mind",
                                "EHR/EMR workflow support and billing integrations where required",
                                "Mobile-responsive — accessible on web, tablet, and phone"
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

        {/* Built for UK Private Clinics */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Built for UK Private Clinics and Healthcare Providers</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">The majority of UK healthcare activity occurs through the NHS, but private healthcare is a substantial and growing market. UK private patients — including those with private health insurance, self-pay patients, and those seeking faster access to specialist care — increasingly expect digital-first access to healthcare services. DocGenie Global helps private healthcare providers create a branded online consultation journey that supports both patient convenience and operational efficiency.</p>
                            <p className="text-lg text-gray-700">The platform can support:</p>
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
                            <p className="text-lg text-gray-700">Your patients can discover services, book appointments, consult online, receive follow-ups, and stay connected with your clinic through a branded digital experience — accessible on web, tablet, and phone.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Patient Data Privacy and UK GDPR */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Patient Data Privacy and UK GDPR Considerations</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                Patient data protection is a legal and trust requirement for UK healthcare providers. The UK GDPR and Data Protection Act 2018 (DPA 2018) set the framework for how patient data must be handled, stored, and accessed. DocGenie Global supports privacy-focused digital care workflows designed with these requirements in mind — though each provider remains responsible for their own compliance obligations, ICO registration, and data processing agreements relevant to their services.
                            </p>
                            <p className="text-lg text-gray-700">Key capabilities include:</p>
                            <ul>
                                <li>Secure patient registration workflows</li>
                                <li>Role-based access controls for providers and admin teams</li>
                                <li>Controlled patient data visibility</li>
                                <li>Secure, encrypted consultation communication</li>
                                <li>Structured digital patient records</li>
                                <li>Follow-up and reminder workflows</li>
                                <li>Privacy-focused patient experience throughout the care journey</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Complete Virtual Consultation Workflow */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Complete Virtual Consultation Workflow</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                DocGenie Global helps UK healthcare teams manage the complete virtual consultation journey in one connected platform — from first patient contact through to post-visit follow-up. The platform can support:
                            </p>
                            <ul>
                                <li>Patient registration</li>
                                <li>Service or specialty selection</li>
                                <li>Doctor or provider selection</li>
                                <li>Appointment slot booking</li>
                                <li>Online payment, if required</li>
                                <li>Secure video consultation</li>
                                <li>Digital consultation notes</li>
                                <li>Follow-up communication</li>
                                <li>Patient reminders</li>
                                <li>Admin reporting</li>
                            </ul>
                            <p className="text-lg text-gray-700">This connected workflow replaces multiple disconnected tools with a single branded platform. The same workflow scales across multiple locations and provider teams, giving multi-location clinic groups a consistent patient experience regardless of which site or specialist a patient accesses.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Branded Digital Front Door */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Branded Digital Front Door for Clinics in the UK</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                Your website and virtual care platform are often the first digital touchpoints for patients. A white label telemedicine platform helps your clinic create a branded &quot;digital front door&quot; instead of depending on a generic third-party app. Read more about <Link href="/blogs/telemedicine-branding-patient-trust">how branded telemedicine platforms build patient trust</Link> compared to generic alternatives.
                            </p>
                            <p className="text-lg text-gray-700">With DocGenie Global, your clinic can offer:</p>
                            <ul>
                                <li>Branded appointment booking</li>
                                <li>Online consultation access</li>
                                <li>Patient dashboard</li>
                                <li>Provider dashboard</li>
                                <li>Clinic-branded communication</li>
                                <li>Secure follow-up workflows</li>
                                <li>Custom domain or subdomain</li>
                                <li>Consistent visual identity across every patient touchpoint</li>
                            </ul>
                            <p className="text-lg text-gray-700">This helps UK healthcare providers <Link href="/blogs/patient-retention-virtual-care">improve patient retention</Link> while delivering a professional and trustworthy digital access to care.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* UK Use Cases */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">UK Use Cases</h2>
                        </div>
                        <div className="prose my-8">
                            <h3>Private GP-Style Consultations</h3>
                            <p className="text-lg text-gray-700">Offer convenient online consultations for patients looking for private access to healthcare support, including same-day or next-day appointment availability that NHS waiting times may not allow.</p>

                            <h3>Specialist Follow-Ups</h3>
                            <p className="text-lg text-gray-700">Support dermatology, women's health, cardiology, endocrinology, and other specialist follow-up consultations under your clinic's brand. See our <Link href="/blogs/white-label-telemedicine-specialty-care">guide to white label telemedicine for specialty care</Link> for specialty-specific platform requirements.</p>

                            <h3>Mental Health and Therapy</h3>
                            <p className="text-lg text-gray-700">Enable secure virtual consultations for therapy, counselling, psychiatry, and ongoing mental health support. Learn more in our <Link href="/blogs/white-label-telemedicine-mental-health-practices">guide to white label telemedicine for mental health practices</Link> about the specific platform requirements for this care setting.</p>

                            <h3>Hybrid Clinic Model</h3>
                            <p className="text-lg text-gray-700">Combine in-clinic appointments with online consultations to improve patient access, reduce operational friction, and give patients the flexibility to choose how they engage with their care team.</p>

                            <h3>Multi-Location Clinic Groups</h3>
                            <p className="text-lg text-gray-700">Manage providers, appointment types, patient journeys, and digital care workflows across multiple UK locations — all under a single branded patient experience and unified admin interface.</p>
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
                                    <td className="p-4 text-center bg-brand-blue/30">Your clinic's brand experience</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium">Patient Journey</td>
                                    <td className="p-4 text-center">Standardised flow</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Configurable booking and care workflow</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Data Workflows</td>
                                    <td className="p-4 text-center">Limited control</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Privacy-focused, UK GDPR-aware workflows</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium">Provider Dashboard</td>
                                    <td className="p-4 text-center">Basic functionality</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Care-team-friendly dashboard</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Growth</td>
                                    <td className="p-4 text-center">Limited customisation</td>
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

        {/* Implementation Process */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Implementation Process</h2>
                        </div>
                        <div className="prose my-8">
                            <h3>1. Discovery and Workflow Planning</h3>
                            <p className="text-lg text-gray-700">We understand your UK healthcare model, patient journey, services, provider setup, and branding requirements.</p>

                            <h3>2. Platform Configuration</h3>
                            <p className="text-lg text-gray-700">We configure your branded interface, appointment flows, patient communication, provider dashboard, and care workflows to match how your clinic operates.</p>

                            <h3>3. Testing and Staff Training</h3>
                            <p className="text-lg text-gray-700">Your team validates patient and provider journeys before launch and receives platform training to ensure a smooth go-live.</p>

                            <h3>4. Launch and Ongoing Support</h3>
                            <p className="text-lg text-gray-700">We help you launch your branded telemedicine platform and support future improvements as your virtual care services grow. Most UK deployments launch within weeks, depending on configuration scope and integration requirements.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* FAQ */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white" id="faq">
                    <div className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h2 className="heading-3 mb-6">Frequently Asked Questions</h2>
                                <p className="text-lg text-gray-700">
                                    Get answers to common questions about our white label telemedicine platform and how it can benefit your healthcare organisation.
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

        {/* CTA */}
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
