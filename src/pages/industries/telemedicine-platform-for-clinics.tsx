import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { User, Users, Heart, MapPin, TrendingDown, Shield, Globe, ChevronRight, CheckCircle, HelpCircle, Languages, Hospital, HouseHeart, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";

const PublicHealth = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.docgenieglobal.com/#organization",
        "name": "DocGenie Global",
        "url": "https://www.docgenieglobal.com/",
        "description": "DocGenie Global provides secure, white-label telemedicine and virtual care platform solutions for healthcare providers, clinics, hospitals, and healthcare organizations."
      },
      {
        "@type": "WebPage",
        "@id": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-clinics/#webpage",
        "url": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-clinics",
        "name": "Telemedicine Platform for Clinics",
        "description": "Launch a branded telemedicine platform for your clinic with appointment scheduling, doctor logins, admin workflows, prescriptions, payments, alerts, and secure patient management.",
        "isPartOf": {
          "@id": "https://www.docgenieglobal.com/#website"
        },
        "about": {
          "@id": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-clinics/#service"
        },
        "publisher": {
          "@id": "https://www.docgenieglobal.com/#organization"
        }
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
        "@type": "BreadcrumbList",
        "@id": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-clinics/#breadcrumb",
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
            "name": "Industries",
            "item": "https://www.docgenieglobal.com/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Telemedicine Platform for Clinics",
            "item": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-clinics"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-clinics/#service",
        "name": "Telemedicine Platform for Clinics",
        "serviceType": "White-label telemedicine platform for clinics",
        "provider": {
          "@id": "https://www.docgenieglobal.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Global"
        },
        "audience": [
          {
            "@type": "Audience",
            "audienceType": "Independent practitioners"
          },
          {
            "@type": "Audience",
            "audienceType": "Single doctor clinics"
          },
          {
            "@type": "Audience",
            "audienceType": "Small clinics"
          },
          {
            "@type": "Audience",
            "audienceType": "Family practices"
          },
          {
            "@type": "Audience",
            "audienceType": "Multi-specialty care centres"
          }
        ],
        "description": "A secure and customizable telemedicine platform that helps independent practitioners, small clinics, family practices, and multi-specialty care centres launch branded virtual care with appointment scheduling, doctor modules, admin workflows, prescriptions, payments, alerts, and patient management.",
        "offers": {
          "@type": "Offer",
          "name": "Branded Telemedicine Platform Setup for Clinics",
          "description": "A transparent platform setup for clinics looking to launch online consultations and centralize virtual care workflows.",
          "availability": "https://schema.org/InStock"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Clinic Telemedicine Platform Features",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Clinic branding and customization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Appointment scheduling"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Admin module for clinic staff"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Doctor module with unique login access"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital prescription workflow"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Patient alerts and notifications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Payment support"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-clinics/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a telemedicine platform for clinics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A telemedicine platform for clinics is a digital system that helps clinics manage online consultations, appointments, doctors, patients, prescriptions, payments, alerts, and communication from one place."
            }
          },
          {
            "@type": "Question",
            "name": "Can a small clinic launch its own branded telemedicine platform?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Small clinics, family practices, and independent practitioners can launch their own branded virtual care platform with custom branding, doctor access, admin workflows, and patient-facing features."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can my clinic launch the platform?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depending on customization requirements, clinics can typically launch their virtual care platform in around 2 to 3 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do we need a technical team to manage the platform?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The platform is designed to reduce technical complexity. Setup, maintenance, and essential platform support can be managed for the clinic."
            }
          },
          {
            "@type": "Question",
            "name": "Can each doctor have a separate login?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Multi-doctor clinics can provide unique login credentials for each doctor, allowing them to manage their own appointments, patient details, consultation workflows, and prescriptions."
            }
          },
          {
            "@type": "Question",
            "name": "Can the platform include our clinic branding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The platform can be customized with your clinic name, logo, branding, and selected workflow preferences."
            }
          },
          {
            "@type": "Question",
            "name": "Is this suitable for multi-specialty clinics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The platform supports multi-doctor and multi-specialty clinic workflows, including admin coordination, doctor access, appointments, prescriptions, alerts, and patient management."
            }
          }
        ]
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Telemedicine Platform for Clinics | Launch Branded Virtual Care</title>
        <meta 
          name="description" 
          content="Launch a branded telemedicine platform for your clinic with appointment scheduling, doctor logins, admin workflows, prescriptions, payments, alerts, and secure patient management." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/industries/telemedicine-platform-for-clinics" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Telemedicine Platform for Clinics | Launch Branded Virtual Care" />
        <meta property="og:description" content="Launch a branded telemedicine platform for your clinic with appointment scheduling, doctor logins, admin workflows, prescriptions, payments, alerts, and secure patient management." />
        <meta property="og:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/industries/telemedicine-platform-for-clinics" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telemedicine Platform for Clinics | Launch Branded Virtual Care" />
        <meta name="twitter:description" content="Launch a branded telemedicine platform for your clinic with appointment scheduling, doctor logins, admin workflows, prescriptions, payments, alerts, and secure patient management." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta name="twitter:url" content="https://www.docgenieglobal.com/industries/public-health" />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* <div className="flex items-center justify-center sm:justify-start mb-4">
                <Users className="h-8 w-8 text-brand-blue mr-3" />
                <span className="text-brand-blue font-semibold">Public Health Sector</span>
              </div> */}
              <h1 className="heading-1 mb-6">
                Telemedicine Platform for Clinics That Want to
                <span className="text-brand-blue"> Launch Branded Virtual Care Faster</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                Build your own branded virtual care practice without managing complex technology, compliance, maintenance, or multiple disconnected tools. Our telemedicine platform helps independent practitioners, single-doctor clinics, family practices, small clinics, and multi-specialty care centres launch secure online care in as little as 2–3 weeks.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                Whether you are starting your first online consultation service or centralising your clinic’s digital operations, the platform gives you the tools to manage doctors, patients, appointments, prescriptions, payments, alerts, and daily workflows from one place.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/contact" data-hero-cta>
                  <Button className="primary-button">
                    Book a Free Demo <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                    Get Platform Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img 
                src={ '/images/public-health-community.jpg' } 
                alt="Community health gathering and education session"
                className="rounded-2xl shadow-lg w-full h-auto" 
                width={600}
                height={400}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Side Align Sections */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">

            {/* Built for Independent Doctors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="lg:col-start-2">
                <h3 className="heading-3 mb-4">Built for Independent Doctors, Small Clinics, and Multi-Specialty Practices</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Modern patients expect convenient access to care, digital communication, and simple booking options. But for many clinics, launching telemedicine can feel complicated because of technology setup, compliance checks, maintenance, staff workflows, and cost uncertainty.
                </p>
                <p className="text-lg mb-6"><strong>This platform is designed to make virtual care simple for:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Independent practitioners</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Single-doctor clinics</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Family practices</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Small clinics with 3–10 doctors</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multi-specialty care centres</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Small to mid-sized healthcare units</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mt-6">You get a ready-made, secure, and customisable virtual care solution that can be launched quickly with your clinic’s branding, logo, and preferred workflows.</p>
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <img 
                  src="/lovable-uploads/588df964-312d-4467-a9cb-2ec984d2931c.png" 
                  alt="Built for Independent Doctors, Small Clinics, and Multi-Specialty Practices" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Launch Your Online Clinic */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
              <div>
                <h3 className="heading-3 mb-4">Launch Your Online Clinic in Just 2–3 Weeks</h3>
                <p className="text-lg text-gray-600 mb-6">
                  You do not need to build a telemedicine system from scratch or manage a large technical team. The platform is already designed with the core workflows clinics need to start offering online care.
                </p>
                <p className="text-lg text-gray-600 mb-6">From consultation booking to doctor access, patient communication, prescriptions, alerts, and payments, the setup is built to help your clinic go live faster.</p>
                <p className="text-lg mb-6"><strong>What you get:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quick platform setup</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Alerts and notifications</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Patient and doctor access modules</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Appointment scheduling</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Secure online consultations</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Digital prescriptions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Payment support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ongoing maintenance and support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Clinic branding and logo customisation</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png" 
                  alt="Launch Your Online Clinic in Just 2–3 Weeks" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Centralise Your Clinic */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="lg:col-start-2">
                <h3 className="heading-3 mb-4">One Platform to Centralise Your Clinic Operations</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Many clinics use separate tools for bookings, patient details, doctor coordination, prescriptions, payment follow-ups, and communication. This creates operational gaps and increases the workload for clinic staff.
                </p>
                <p className="text-lg text-gray-600 mb-6">With a centralised telemedicine platform, your clinic can manage key workflows from one place.</p>
                <p className="text-lg mb-6"><strong>Core workflows supported:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Patient registration and profile management</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Appointment booking and scheduling</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Doctor availability management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Online consultation workflow</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Prescription generation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Notifications and alerts</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Payment collection</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Admin coordination</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Patient follow-up support</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mt-6">This helps clinics improve operational efficiency while delivering a smoother patient experience.</p>
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <img 
                  src="/lovable-uploads/588df964-312d-4467-a9cb-2ec984d2931c.png" 
                  alt="One Platform to Centralise Your Clinic Operations" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Clinic Admin Module */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
              <div>
                <h3 className="heading-3 mb-4">Clinic Admin Module for Day-to-Day Operations</h3>
                <p className="text-lg text-gray-600 mb-6">
                  The admin module is designed for clinic staff who manage daily operations. Your team can handle patient bookings, doctor schedules, appointment coordination, and administrative workflows through a dedicated clinic-facing system.
                </p>
                <p className="text-lg mb-6"><strong>Admin module can help with:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Managing patient records</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Handling appointment requests</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Coordinating doctor schedules</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Viewing booking status</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Managing consultation workflows</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Supporting patient communication</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tracking operational activities</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mt-6">This reduces manual dependency and helps your clinic team manage virtual care more efficiently.</p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png" 
                  alt="Clinic Admin Module for Day-to-Day Operations" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Dedicated Doctor Module */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="lg:col-start-2">
                <h3 className="heading-3 mb-4">Dedicated Doctor Module With Unique Login Access</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Each doctor can have unique login credentials to manage their own consultation workflow. This allows doctors to access their appointments, patient details, consultation history, and prescriptions in a structured way.
                </p>
                <p className="text-lg mb-6"><strong>Doctor module features may include:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Unique doctor login</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Appointment dashboard</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Patient details</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Consultation notes</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Digital prescription support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Alerts and reminders</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Secure consultation access</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Specialty-wise workflow support</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mt-6">This is especially useful for multi-doctor clinics and small multi-specialty practices.</p>
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <img 
                  src="/lovable-uploads/588df964-312d-4467-a9cb-2ec984d2931c.png" 
                  alt="Dedicated Doctor Module With Unique Login Access" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Transparent Pricing With No Hidden Costs</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                For independent practitioners and small clinics, cost clarity is important. The platform is designed to offer a simple and transparent pricing model, so you know what you are paying for before you launch.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You pay one clear fee that covers the agreed platform setup and essential components. No hidden charges, no confusing add-ons, and no unexpected technical maintenance burden.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Side Align Sections */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">

            {/* Why Clinics Choose This Platform */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
              <div>
                <h3 className="heading-3 mb-4">Why Clinics Choose This Platform</h3>
                <p className="text-lg text-gray-600 mb-6">
                    Clinics choose this telemedicine platform because it helps them launch faster, operate better, and offer patients a more convenient care experience.
                </p>
                <p className="text-lg mb-6"><strong>Key advantages:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Launch virtual care in 2–3 weeks</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reduce manual coordination</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Offer secure online consultations</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Centralise clinic operations</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Avoid compliance and maintenance complexity</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Get transparent pricing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Support digital prescriptions and alerts</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Start without building technology from scratch</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Use your own clinic branding and logo</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Manage doctors and patients from one platform</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mt-6">This reduces manual dependency and helps your clinic team manage virtual care more efficiently.</p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png" 
                  alt="Why Clinics Choose This Platform" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="partnership-approach" className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Use Cases</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Independent Practitioners */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <User className="h-8 w-8 text-brand-blue mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">For Independent Practitioners</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base text-gray-700">
                  Start offering online consultations under your own name or clinic brand without investing months in platform development.
                </li>
              </ul>
            </div>

            {/* Single Doctor Clinic */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <HouseHeart className="h-8 w-8 text-brand-blue mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">For Single-Doctor Clinic</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base text-gray-700">
                  Give patients a simple way to book consultations, receive prescriptions, and connect with you digitally.
                </li>
              </ul>
            </div>

            {/* Small Clinic */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <Cross className="h-8 w-8 text-brand-blue mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">For Small Clinic</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base text-gray-700">
                  Manage patient appointments, doctor availability, prescriptions, and payments through one integrated system.
                </li>
              </ul>
            </div>

            {/* Multi-Specialty Care Centres */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <Hospital className="h-8 w-8 text-brand-blue mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">For Multi-Specialty Care Centres</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base text-gray-700">
                  Give each doctor dedicated access while allowing the clinic admin team to manage central operations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Branded Platform Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">A Branded Platform That Feels Like Your Own</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Your patients should experience your clinic’s brand, not a third-party marketplace. The platform can be customised with your clinic name, logo, colours, and workflow preferences, helping you build stronger patient trust and brand recognition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This is ideal for clinics that want to grow their digital presence while maintaining ownership of the patient experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our telemedicine solutions for public health organizations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <HelpCircle className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                What is a telemedicine platform for clinics?
              </h3>
              <p className="text-gray-600 ml-8">
                A telemedicine platform for clinics is a digital system that helps clinics manage online consultations, appointments, doctors, patients, prescriptions, payments, and communication from one place.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Languages className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                Can a small clinic launch its own branded telemedicine platform?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes. Small clinics, family practices, and independent practitioners can launch their own branded virtual care platform with custom branding, doctor access, admin workflows, and patient-facing features.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Globe className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                How quickly can my clinic launch the platform?
              </h3>
              <p className="text-gray-600 ml-8">
                Depending on customisation needs, clinics can typically launch their virtual care practice in around 2–3 weeks.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                Do we need a technical team to manage the platform?
              </h3>
              <p className="text-gray-600 ml-8">
                No. The platform is designed to reduce technical complexity. Setup, maintenance, and essential platform support can be handled for you.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                Can each doctor have a separate login?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes. Multi-doctor clinics can provide unique login credentials for each doctor, allowing them to manage their own appointments and consultation workflows.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                Can the platform include our clinic branding?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes. The platform can be customised with your clinic name, logo, branding, and selected workflow preferences.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                Is this suitable for multi-specialty clinics?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes. The platform supports multi-doctor and multi-specialty clinic workflows, including admin coordination, doctor access, appointments, prescriptions, and patient management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue/10 py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-2 text-brand-gray-dark mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Bring your clinic online with a secure, branded, and easy-to-manage telemedicine platform built for real clinic workflows.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" data-hero-cta>
              <Button className="primary-button">
                Book a Free Demo <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                Get Platform Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PublicHealth;