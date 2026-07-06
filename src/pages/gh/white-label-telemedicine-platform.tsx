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
            "@id": "https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/#webpage",
            "url": "https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/",
            "name": "White Label Telemedicine Platform Ghana | Branded Virtual Care Solution",
            "description": "Launch a white label telemedicine platform for healthcare providers in Ghana. Build a branded virtual care experience with secure online consultations, mobile money payments, low-bandwidth support, and patient engagement workflows for clinics, hospitals, and digital health companies.",
            "inLanguage": "en-GH",
            "isPartOf": {
                "@id": "https://www.docgenieglobal.com/#website"
            },
            "about": {
                "@id": "https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/#service"
            },
            "mainEntity": {
                "@id": "https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/#service"
            },
            "datePublished": "2025-06-12",
            "dateModified": "2025-06-12"
        },
        {
            "@type": "Service",
            "@id": "https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/#service",
            "name": "White Label Telemedicine Platform for Healthcare Providers in Ghana",
            "serviceType": "White Label Telemedicine Platform",
            "category": "Virtual Care Platform",
            "description": "DocGenie Global helps clinics, hospitals, and digital health companies in Ghana launch branded telemedicine platforms with secure online consultations, mobile money integration, low-bandwidth resilience, and patient engagement workflows.",
            "provider": {
                "@id": "https://www.docgenieglobal.com/#organization"
            },
            "areaServed": {
                "@type": "Country",
                "name": "Ghana"
            },
            "audience": [
                { "@type": "Audience", "audienceType": "Private clinics in Ghana" },
                { "@type": "Audience", "audienceType": "Hospitals and health systems" },
                { "@type": "Audience", "audienceType": "Digital health startups" },
                { "@type": "Audience", "audienceType": "Diaspora telehealth providers" },
                { "@type": "Audience", "audienceType": "Maternal and child health programmes" },
                { "@type": "Audience", "audienceType": "Multi-location healthcare groups" }
            ],
            "offers": {
                "@type": "Offer",
                "url": "https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/",
                "availability": "https://schema.org/InStock",
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "description": "Custom pricing available on request"
                }
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/#breadcrumb",
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
                    "name": "Ghana",
                    "item": "https://www.docgenieglobal.com/gh/"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "White Label Telemedicine Platform",
                    "item": "https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is a white label telemedicine platform for Ghana?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It is a branded virtual care platform that allows healthcare providers in Ghana to offer online consultations, appointment booking, patient communication, and digital care services under their own brand — without building technology from scratch."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does the platform support mobile money payments used in Ghana?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, DocGenie Global supports integration with mobile money payment providers including MTN Mobile Money, Vodafone Cash, and AirtelTigo Money, so patients can pay for consultations through familiar local payment methods."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does the platform work on low-bandwidth or slow internet connections?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, DocGenie Global is designed to function effectively in low-bandwidth environments. The platform supports adaptive video quality, lightweight mobile interfaces, and select offline functionality to ensure care continuity across Ghana's diverse connectivity landscape."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is the platform compliant with Ghana's Data Protection Act 2012?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DocGenie Global is designed to support privacy-focused data workflows including role-based access, secure communication, and controlled patient data handling. Final compliance with Ghana's Data Protection Act 2012 (Act 843) and any Ghana Health Service guidelines depends on your organisation's specific implementation and legal obligations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can the platform support diaspora consultations — patients abroad consulting Ghanaian doctors?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, DocGenie Global supports cross-border virtual consultations, enabling Ghanaian healthcare providers to serve patients in the diaspora as well as patients within Ghana."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can we use our own clinic brand and domain?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, the platform can be fully customized with your logo, colors, communication templates, patient interface, and your own custom domain or subdomain."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does implementation take for a Ghana-based clinic?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A standard branded deployment typically takes 4–6 weeks from discovery to launch. Timelines depend on the level of customization, integrations, and workflow complexity required."
                    }
                }
            ]
        }
    ]
};

const faqs = [
    {
        question: "What is a white label telemedicine platform for Ghana?",
        answer: "It is a branded virtual care platform that allows healthcare providers in Ghana to offer online consultations, appointment booking, patient communication, and digital care services under their own brand — without building technology from scratch."
    },
    {
        question: "Does the platform support mobile money payments used in Ghana?",
        answer: "Yes, DocGenie Global supports integration with mobile money payment providers including MTN Mobile Money, Vodafone Cash, and AirtelTigo Money, so patients can pay for consultations through familiar local payment methods."
    },
    {
        question: "Does the platform work on low-bandwidth or slow internet connections?",
        answer: "Yes, DocGenie Global is designed to function effectively in low-bandwidth environments. The platform supports adaptive video quality, lightweight mobile interfaces, and select offline functionality to ensure care continuity across Ghana's diverse connectivity landscape."
    },
    {
        question: "Is the platform compliant with Ghana's Data Protection Act 2012?",
        answer: "DocGenie Global is designed to support privacy-focused data workflows including role-based access, secure communication, and controlled patient data handling. Final compliance with Ghana's Data Protection Act 2012 (Act 843) and any Ghana Health Service guidelines depends on your organisation's specific implementation and legal obligations."
    },
    {
        question: "Can the platform support diaspora consultations — patients abroad consulting Ghanaian doctors?",
        answer: "Yes, DocGenie Global supports cross-border virtual consultations, enabling Ghanaian healthcare providers to serve patients in the diaspora as well as patients within Ghana."
    },
    {
        question: "Can we use our own clinic brand and domain?",
        answer: "Yes, the platform can be fully customized with your logo, colors, communication templates, patient interface, and your own custom domain or subdomain."
    },
    {
        question: "How long does implementation take for a Ghana-based clinic?",
        answer: "A standard branded deployment typically takes 4–6 weeks from discovery to launch. Timelines depend on the level of customization, integrations, and workflow complexity required."
    }
];

const GhanaWhiteLabelPage = () => (
    <Layout>
        <Head>
            <title>White Label Telemedicine Platform Ghana | Branded Virtual Care</title>
            <meta name="description" content="Launch a branded telemedicine platform for healthcare providers in Ghana. Secure online consultations, mobile money payments, low-bandwidth support, and full white-label customization for clinics, hospitals, and digital health companies." />
            <link rel="canonical" href="https://www.docgenieglobal.com/gh/white-label-telemedicine-platform" />
            <link rel="preload" as="image" href="/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />

            {/* hreflang for regional targeting */}
            <link rel="alternate" hrefLang="en-GH" href="https://www.docgenieglobal.com/gh/white-label-telemedicine-platform" />
            <link rel="alternate" hrefLang="en-ZA" href="https://www.docgenieglobal.com/za/white-label-telemedicine-platform" />
            <link rel="alternate" hrefLang="en-US" href="https://www.docgenieglobal.com/us/white-label-telemedicine-platform" />
            <link rel="alternate" hrefLang="en-GB" href="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform" />
            <link rel="alternate" hrefLang="en" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine" />
            <link rel="alternate" hrefLang="x-default" href="https://www.docgenieglobal.com/solutions/white-label-telemedicine" />

            {/* OpenGraph Tags */}
            <meta property="og:title" content="White Label Telemedicine Platform Ghana | Branded Virtual Care" />
            <meta property="og:description" content="Branded telehealth for Ghana — your logo, your domain, your patients. Mobile money payments, low-bandwidth support, and secure virtual consultations built for the Ghanaian healthcare market." />
            <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:url" content="https://www.docgenieglobal.com/gh/white-label-telemedicine-platform/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="DocGenie Global" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@DocGenieGlobal" />
            <meta name="twitter:title" content="White Label Telemedicine Platform Ghana | Branded Virtual Care" />
            <meta name="twitter:description" content="Branded telehealth for Ghana — your logo, your domain, your patients. Mobile money payments, low-bandwidth support, and secure virtual consultations built for the Ghanaian healthcare market." />
            <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png" />

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
                            <h1 className="heading-2 mb-6">White Label Telemedicine Platform for Healthcare Providers in Ghana</h1>
                            <p className="text-lg text-gray-700 mb-8 max-w-2xl prose">
                                <a href="https://www.docgenieglobal.com/">DocGenie Global</a> helps clinics, hospitals, and digital health companies in Ghana launch their own branded virtual care platform — without building technology from scratch. Our <a href="https://www.docgenieglobal.com/solutions/white-label-telemedicine">white label telemedicine solution</a> delivers secure online consultations, mobile money payment integration, low-bandwidth resilience, and a fully branded patient experience across web and mobile.<br /><br />
                                Whether you are building a private clinic consultation service in Accra, extending specialist access to patients in Kumasi, Tamale, or rural Ghana, offering diaspora health access, or launching a digital health company — DocGenie Global gives you the foundation to launch quickly and grow with confidence.
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
                                alt="Healthcare provider in Ghana using a white-label branded telemedicine platform for virtual patient consultation on mobile and desktop"
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

        {/* Built for Ghana */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Built for Ghana's Healthcare Providers and Digital Health Companies</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                Ghana's healthcare sector is evolving rapidly. Patients in urban centres like Accra and Kumasi expect digital access to care. Patients in peri-urban and rural areas need healthcare services that work on mobile phones with modest data connectivity. Ghanaians in the diaspora want trusted access to healthcare providers back home.<br /><br />
                                DocGenie Global's white label telemedicine platform helps healthcare providers meet all of these needs under their own brand. The platform can support:
                            </p>
                            <ul>
                                <li>Private clinics and specialist practices</li>
                                <li>Teaching hospitals and healthcare groups</li>
                                <li>Maternal and child health programmes</li>
                                <li>Mental health and counselling providers</li>
                                <li>Chronic disease management programmes</li>
                                <li>Diaspora-focused telehealth services</li>
                                <li>Digital health startups and healthtech companies</li>
                                <li>Multi-location clinic networks</li>
                            </ul>
                            <p className="text-lg text-gray-700">Your patients book, consult, pay, and receive follow-ups — all under your brand, not a third-party app's.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Mobile Money */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Mobile Money Payment Integration for Ghanaian Patients</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                Mobile money is the dominant payment method in Ghana. A telemedicine platform for Ghana must make it simple for patients to pay for consultations without friction. DocGenie Global supports integration with Ghana's leading mobile money providers:
                            </p>
                            <ul>
                                <li>MTN Mobile Money (MoMo)</li>
                                <li>Vodafone Cash</li>
                                <li>AirtelTigo Money</li>
                                <li>Card payments (Visa/Mastercard) for urban and diaspora patients</li>
                            </ul>
                            <p className="text-lg text-gray-700">
                                Patients can pay for their consultation before or after booking — in the payment method they already use daily. This removes a major barrier to virtual care adoption in the Ghanaian market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Low Bandwidth */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Low-Bandwidth and Mobile-First Design for Ghana</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                Internet connectivity across Ghana varies significantly — from reliable 4G in Accra and other urban centres to slower 2G/3G connections in rural and peri-urban areas. A telemedicine platform that only works well on high-speed connections will exclude a significant portion of Ghanaian patients.<br /><br />
                                DocGenie Global is designed with connectivity resilience in mind:
                            </p>
                            <ul>
                                <li>Adaptive video quality that adjusts to available bandwidth</li>
                                <li>Lightweight mobile-first interface optimised for lower-end Android devices</li>
                                <li>Progressive Web App (PWA) support — no app store download required</li>
                                <li>Select offline functionality for care continuity</li>
                                <li>SMS and WhatsApp notification support as communication fallbacks</li>
                                <li>Fast page load optimisation for 3G networks</li>
                            </ul>
                            <p className="text-lg text-gray-700">This ensures your branded telemedicine platform is accessible to patients across Greater Accra, Ashanti, Northern, and all other regions of Ghana.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Data Privacy */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Patient Data Privacy and Ghana's Data Protection Act 2012</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                Ghana's Data Protection Act 2012 (Act 843) governs the collection, storage, and processing of personal data — including patient health information. Healthcare providers operating digital health services in Ghana must handle patient data responsibly and in accordance with these obligations.<br /><br />
                                DocGenie Global is designed to support privacy-focused patient data workflows:
                            </p>
                            <ul>
                                <li>Role-based access controls for providers, admin staff, and patients</li>
                                <li>Secure end-to-end encrypted consultation sessions</li>
                                <li>Controlled visibility of patient health records</li>
                                <li>Structured patient data handling and storage workflows</li>
                                <li>Secure patient communication (video, messaging, and notifications)</li>
                                <li>Audit-ready digital records</li>
                            </ul>
                            <p className="text-lg text-gray-700">
                                Final compliance with Ghana's Data Protection Act 2012 and any guidance from the Ghana Health Service or the Data Protection Commission depends on each provider's organisational setup, legal agreements, and implementation configuration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Branded Patient Experience */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Branded Digital Front Door for Ghanaian Healthcare Providers</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                When patients in Ghana look for healthcare online, they trust the clinics and hospitals they already know. A white label telemedicine platform means your patients interact with your brand — not a generic third-party app — at every digital touchpoint.<br /><br />
                                With DocGenie Global, your healthcare organisation can provide:
                            </p>
                            <ul>
                                <li>Branded appointment booking on your own domain or subdomain</li>
                                <li>Online consultation access with your clinic's visual identity</li>
                                <li>Branded patient dashboard</li>
                                <li>Branded provider dashboard</li>
                                <li>Clinic-branded email, SMS, and WhatsApp communications</li>
                                <li>Secure follow-up workflows</li>
                                <li>Custom logo, colours, and interface elements</li>
                            </ul>
                            <p className="text-lg text-gray-700">This helps Ghanaian healthcare providers build patient trust and improve digital access to care across web and mobile.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>

        {/* Ghana Use Cases */}
        <ErrorBoundary>
            <section>
                <div className="py-10 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <h2 className="heading-3 mb-6">Ghana Telemedicine Use Cases</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                <b>Private Clinic Consultations in Accra and Kumasi</b><br />
                                Offer convenient online consultations for patients in urban areas who prefer to avoid travel and waiting room queues. Reduce no-shows and improve patient scheduling efficiency.<br /><br />

                                <b>Rural and Peri-Urban Healthcare Access</b><br />
                                Extend specialist access to patients in regions with limited healthcare infrastructure — Northern Ghana, Upper East, Volta Region, and beyond — using a mobile-first, low-bandwidth platform.<br /><br />

                                <b>Diaspora Health Services</b><br />
                                Connect Ghanaians living in the UK, US, Europe, or elsewhere with trusted Ghanaian doctors and specialists for consultations, follow-ups, and ongoing health management.<br /><br />

                                <b>Maternal and Child Health Programmes</b><br />
                                Support antenatal consultations, postnatal follow-ups, and child health check-ins via virtual care to improve access and continuity for mothers and infants.<br /><br />

                                <b>Mental Health and Counselling</b><br />
                                Provide private, stigma-reducing access to mental health consultations, therapy, and counselling services through a secure branded platform.<br /><br />

                                <b>Chronic Disease Management</b><br />
                                Support recurring consultations and monitoring for patients managing diabetes, hypertension, cardiovascular conditions, and other long-term health conditions.<br /><br />

                                <b>Specialist Follow-Up Consultations</b><br />
                                Enable dermatologists, cardiologists, gynaecologists, and other specialists to conduct follow-up consultations virtually, freeing capacity and improving access.
                            </p>
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
                        <h2 className="heading-3 mb-6">Why Ghana's Healthcare Providers Choose DocGenie Global</h2>
                    </div>
                    <div className="prose my-8">
                        <p className="text-lg text-gray-700">
                            Generic telehealth apps were not designed for the Ghanaian market. They often lack mobile money support, perform poorly on low-bandwidth connections, and offer no brand ownership. DocGenie Global gives Ghanaian healthcare businesses a white label platform built for local realities.
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
                                    <td className="p-4 font-medium">Mobile Money</td>
                                    <td className="p-4 text-center">Rarely supported</td>
                                    <td className="p-4 text-center bg-brand-blue/30">MTN MoMo, Vodafone Cash, AirtelTigo</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Low Bandwidth</td>
                                    <td className="p-4 text-center">Optimised for high-speed only</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Adaptive, mobile-first design</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium">Diaspora Access</td>
                                    <td className="p-4 text-center">Not built for cross-border</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Cross-border consultation support</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Patient Trust</td>
                                    <td className="p-4 text-center">Platform-led</td>
                                    <td className="p-4 text-center bg-brand-blue/30">Clinic-brand-led</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Scalability</td>
                                    <td className="p-4 text-center">Limited customization</td>
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
                            <h2 className="heading-3 mb-6">Implementation Process for Ghana-Based Healthcare Providers</h2>
                        </div>
                        <div className="prose my-8">
                            <p className="text-lg text-gray-700">
                                <b>1. Discovery and Workflow Planning</b><br />
                                We understand your Ghana healthcare model, patient journey, service lines, provider setup, mobile money preferences, and branding requirements.<br /><br />

                                <b>2. Platform Configuration</b><br />
                                We configure your branded interface, appointment flows, mobile money payment integration, patient communication (including WhatsApp and SMS), and provider dashboard.<br /><br />

                                <b>3. Testing and Staff Training</b><br />
                                Your team validates the end-to-end patient and provider journey — including local payment flows — before launch and receives platform training.<br /><br />

                                <b>4. Launch and Ongoing Support</b><br />
                                We help you launch your branded telemedicine platform in Ghana and provide continuous support as your virtual care services grow across regions and patient segments.
                            </p>
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
                                Common questions about our white label telemedicine platform for healthcare providers in Ghana.
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

        {/* CTA */}
        <ErrorBoundary>
            <section className="py-16 bg-brand-blue/10 rounded-3xl my-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto reveal">
                        <h2 className="heading-3 mb-6">Launch Your Branded Telemedicine Platform in Ghana</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Build a secure, mobile-first, and branded virtual care platform for your healthcare business in Ghana. DocGenie Global helps you launch online consultations, integrate mobile money payments, improve patient access, and grow your digital health services under your own brand.
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

export default GhanaWhiteLabelPage;
