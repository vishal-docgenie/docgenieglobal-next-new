import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { User, Users, Heart, MapPin, TrendingDown, Shield, Globe, ChevronRight, CheckCircle, HelpCircle, Languages, Hospital, HouseHeart, Cross, MapPinHouseIcon, BuildingIcon } from "lucide-react";
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
        "@id": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-hospitals/#webpage",
        "url": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-hospitals",
        "name": "Telemedicine Platform for Hospitals",
        "description": "A scalable telemedicine platform for hospitals and growing healthcare organizations with branded digital care, doctor modules, referrals, integrations, payments, and secure workflows.",
        "isPartOf": {
          "@id": "https://www.docgenieglobal.com/#website"
        },
        "about": {
          "@id": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-hospitals/#service"
        },
        "publisher": {
          "@id": "https://www.docgenieglobal.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-hospitals/#breadcrumb",
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
            "name": "Telemedicine Platform for Hospitals",
            "item": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-hospitals"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-hospitals/#service",
        "name": "Telemedicine Platform for Hospitals",
        "serviceType": "Scalable telemedicine platform for hospitals and enterprise healthcare organizations",
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
            "audienceType": "Small and mid-sized hospitals"
          },
          {
            "@type": "Audience",
            "audienceType": "Large clinics"
          },
          {
            "@type": "Audience",
            "audienceType": "Multi-location clinics"
          },
          {
            "@type": "Audience",
            "audienceType": "Enterprise healthcare groups"
          },
          {
            "@type": "Audience",
            "audienceType": "Multi-specialty healthcare organizations"
          }
        ],
        "description": "A scalable and customizable telemedicine platform for hospitals, enterprise clinics, multi-location healthcare groups, and growing healthcare organizations. The platform supports branded digital care, doctor modules, admin workflows, internal referrals, integrations, payments, prescriptions, alerts, and secure patient management.",
        "offers": {
          "@type": "Offer",
          "name": "Enterprise Telemedicine Platform Setup for Hospitals",
          "description": "A scalable digital care platform for hospitals and growing healthcare organizations that need branded virtual care, multi-doctor workflows, referrals, integrations, and payment support.",
          "availability": "https://schema.org/InStock"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Hospital Telemedicine Platform Features",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Branded digital clinic setup"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Multi-doctor and multi-specialty workflows"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Multi-location support"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Role-based access modules"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Built-in referral workflows"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lab, pharmacy, insurance, and billing integrations"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Flexible payment provider integration"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital prescription and patient alert workflows"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.docgenieglobal.com/industries/telemedicine-platform-for-hospitals/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a telemedicine platform for hospitals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A telemedicine platform for hospitals is a digital care system that helps hospitals manage online consultations, doctors, departments, patients, prescriptions, payments, referrals, integrations, and operational workflows through one platform."
            }
          },
          {
            "@type": "Question",
            "name": "How is a hospital telemedicine platform different from a basic video consultation tool?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A basic video tool only supports virtual meetings. A hospital telemedicine platform supports complete care workflows such as appointment scheduling, doctor access, patient management, prescriptions, payments, referrals, integrations, and administrative coordination."
            }
          },
          {
            "@type": "Question",
            "name": "Can the platform support multiple doctors and specialties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The platform is designed to support multi-doctor and multi-specialty workflows with unique doctor access, admin control, department-level coordination, and patient management."
            }
          },
          {
            "@type": "Question",
            "name": "Can doctors refer patients to other specialists within the organization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Built-in referral workflows can help doctors refer patients to other doctors or specialties within the same hospital, clinic, or healthcare group."
            }
          },
          {
            "@type": "Question",
            "name": "Can the platform integrate with labs, pharmacies, and insurance providers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The platform can support integrations with selected lab partners, pharmacies, insurance providers, billing systems, and payment providers based on the organization's requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can we use our own payment provider?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The platform can be configured to support major payment methods and can also be integrated with your preferred payment provider where applicable."
            }
          },
          {
            "@type": "Question",
            "name": "Is this suitable for multi-location clinics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Multi-location clinics and healthcare groups can use the platform to manage digital care across branches while maintaining centralized visibility, workflow control, and brand consistency."
            }
          },
          {
            "@type": "Question",
            "name": "Can the platform scale as our organization grows?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The platform is designed to scale as the organization adds more doctors, specialties, branches, integrations, payment workflows, and patient journeys."
            }
          }
        ]
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Telemedicine Platform for Hospitals | Scalable Digital Care</title>
        <meta 
          name="description" 
          content="A scalable telemedicine platform for hospitals and growing healthcare organisations with branded digital care, doctor modules, referrals, integrations, payments, and secure workflows." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/industries/telemedicine-platform-for-hospitals" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Telemedicine Platform for Hospitals | Scalable Digital Care" />
        <meta property="og:description" content="A scalable telemedicine platform for hospitals and growing healthcare organisations with branded digital care, doctor modules, referrals, integrations, payments, and secure workflows." />
        <meta property="og:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/industries/telemedicine-platform-for-hospitals" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telemedicine Platform for Hospitals | Scalable Digital Care" />
        <meta name="twitter:description" content="A scalable telemedicine platform for hospitals and growing healthcare organisations with branded digital care, doctor modules, referrals, integrations, payments, and secure workflows." />
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
                Telemedicine Platform for Hospitals
                <span className="text-brand-blue"> Growing Healthcare Organisations</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                Launch a scalable digital care platform that connects patients, doctors, departments, branches, and operational teams through one secure system. Designed for hospitals, growing clinics, multi-location healthcare groups, and enterprise care units, the platform helps you deliver branded virtual care while supporting complex workflows across specialties and locations.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                From online consultations and doctor access to referrals, integrations, payments, prescriptions, and patient communication, the platform is built to scale with your organisation.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/contact" data-hero-cta>
                  <Button className="primary-button">
                    Book a Free Demo <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                    Discuss Enterprise Requirements
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

            {/* Digital Clinic for Multi-Doctor */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="lg:col-start-2">
                <h3 className="heading-3 mb-4">Build a Branded Digital Clinic for Multi-Doctor and Multi-Location Care</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Hospitals and established healthcare organisations need more than a basic video consultation tool. They need a digital clinic that can support multiple doctors, departments, locations, patient journeys, and operational teams.
                </p>
                <p className="text-lg text-gray-600 mb-6">This platform helps you create a branded digital care environment where your patients can access care online while your internal teams manage workflows more efficiently.</p>
                <p className="text-lg mb-6"><strong>It is suitable for:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Small to mid-sized hospitals</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Large clinics with 10–50 doctors</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multi-location clinics</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Clinics with multiple branches</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Enterprise healthcare groups</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multi-specialty healthcare organisations</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hospitals expanding into virtual care</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <img 
                  src="/lovable-uploads/588df964-312d-4467-a9cb-2ec984d2931c.png" 
                  alt="Build a Branded Digital Clinic for Multi-Doctor and Multi-Location Care" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Designed to Scale */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="heading-3 mb-4">Designed to Scale as Your Operations Grow</h3>
                <p className="text-lg text-gray-600 mb-6">
                  As your organisation grows, your digital care platform should not become a limitation. The platform is built to support expanding doctor teams, specialty departments, patient volumes, branch-level workflows, and integrations with third-party healthcare services.
                </p>
                <p className="text-lg text-gray-600 mb-6">You can start with core virtual care workflows and scale into more advanced operational needs over time.</p>
                <p className="text-lg mb-6"><strong>Scalable capabilities may include:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multi-doctor management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multi-specialty workflows</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multi-branch support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Department-level coordination</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Doctor-specific access</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Admin and operations access</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Patient management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Appointment scheduling</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Online consultation workflows</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Prescription support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Notifications and alerts</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Payments and billing workflows</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Third-party integrations</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png" 
                  alt="Designed to Scale as Your Operations Grow" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Centralise Workflows */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="lg:col-start-2">
                <h3 className="heading-3 mb-4">Centralised Workflows for Better Digital Care Delivery</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Hospitals and larger healthcare units often work with multiple departments, teams, and systems. A centralised telemedicine platform helps reduce operational fragmentation and gives staff, doctors, and patients a more connected experience.
                </p>
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
                    <span className="text-gray-700">Specialty-wise consultation routing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Online consultation management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Digital Prescriptions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Patient notifications and alerts</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Payment collection</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Department and branch-level workflows</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Internal referral support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integration with external healthcare partners</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mt-6">This helps your organisation offer virtual care without compromising operational control.</p>
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <img 
                  src="/lovable-uploads/588df964-312d-4467-a9cb-2ec984d2931c.png" 
                  alt="Centralised Workflows for Better Digital Care Delivery" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Built-in Referral System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="heading-3 mb-4">Built-In Referral System for Multi-Specialty Care</h3>
                <p className="text-lg text-gray-600 mb-6">
                  For hospitals and larger clinics, patients often need care across multiple specialties. The platform can support built-in referral workflows that allow doctors to refer patients to other doctors or specialties within your organisation.
                </p>
                <p className="text-lg text-gray-600 mb-6">This helps keep patients within your care network while improving continuity of care.</p>
                <p className="text-lg mb-6"><strong>Referral workflows can support:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Doctor-to-doctor referrals</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Specialty-based referrals</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Internal patient routing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multi-specialty care coordination</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Follow-up consultation journeys</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Better patient retention within your organisation</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mt-6">This is especially useful for hospitals, specialty centres, and large clinics with multiple departments.</p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png" 
                  alt="Built-In Referral System for Multi-Specialty Care" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Integration with Labs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="lg:col-start-2">
                <h3 className="heading-3 mb-4">Integration With Labs, Pharmacies, Insurance, and Payment Providers</h3>
                <p className="text-lg text-gray-600 mb-6">
                  A hospital telemedicine platform should connect with the wider healthcare ecosystem. The platform can be configured to support integrations with selected third-party services based on your business needs.
                </p>
                <p className="text-lg mb-6"><strong>Possible integrations include:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Lab partners</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pharmacy partners</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Insurance providers</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Billing and reimbursement systems</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Payment gateways</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Existing payment provider of choice</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Internal operational tools</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">EHR or EMR systems where applicable</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mt-6">These integrations help your organisation deliver a more complete digital care experience.</p>
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <img 
                  src="/lovable-uploads/588df964-312d-4467-a9cb-2ec984d2931c.png" 
                  alt="Integration With Labs, Pharmacies, Insurance, and Payment Providers" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Flexible Payment Support */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="heading-3 mb-4">Flexible Payment Support</h3>
                <p className="text-lg text-gray-600 mb-6">
                  The platform can support a wide range of payment workflows depending on your market, patient needs, and provider preferences.
                </p>
                <p className="text-lg mb-6"><strong>Payment capabilities may include:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Major credit card support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Bank transfer support</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Neo-bank payment options</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Billing workflow support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integration with your preferred payment provider</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Payment collection for consultations</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integration with leading payment providers</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mt-6">This gives your organisation flexibility while making the payment experience easier for patients.</p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png" 
                  alt="Flexible Payment Support" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Enterprise-Level Control With Role-Based Access */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="lg:col-start-2">
                <h3 className="heading-3 mb-4">Enterprise-Level Control With Role-Based Access</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Hospitals and larger clinics need clear access control across admin teams, doctors, operations staff, and management users. The platform can support role-based access modules so different users can access the tools and information relevant to their responsibilities.
                </p>
                <p className="text-lg mb-6"><strong>Role-based modules may include:</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Admin access for hospital or clinic staff</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Doctor access with unique login credentials</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Department or specialty-level access</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Controlled access to patient and appointment workflows</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Operations team access</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Management visibility</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mt-6">This helps protect sensitive information while improving team coordination.</p>
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <img 
                  src="/lovable-uploads/588df964-312d-4467-a9cb-2ec984d2931c.png" 
                  alt="Enterprise-Level Control With Role-Based Access" 
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

      {/* Branded Patient Experience */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Branded Patient Experience</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Your digital care platform should strengthen your hospital or clinic brand. The platform can be customised with your brand identity, logo, colours, and workflow preferences, allowing patients to experience online care under your organisation’s name.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This helps improve brand trust, patient recall, and continuity between offline and online care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strong Price-for-Value */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Strong Price-for-Value for Growing Healthcare Organisations</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Large healthcare systems often face high costs when building custom technology from scratch. This platform offers a faster and more practical way to launch a branded digital clinic while still allowing room for scale, integrations, and customisation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                It is built for organisations that want strong functionality, reliable support, and long-term scalability without unnecessary technical complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Side Align Sections */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">

            {/* Why Hospitals and Growing Healthcare Groups Choose This Platform */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="heading-3 mb-4">Why Hospitals and Growing Healthcare Groups Choose This Platform</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Branded digital clinic setup</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Scalable for multiple doctors, branches, and specialties</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Built-in referral workflows</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Role-based access for teams</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Doctor modules with unique logins</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Admin and operations workflows</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Digital prescriptions and alerts</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Lab, pharmacy, insurance, and payment integrations</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flexible payment provider support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Secure patient and consultation management</span>
                  </div>
                  <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Designed to scale as operations grow</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Strong price-for-value compared to building from scratch</span>
                  </div>
                </div>

              </div>
              <div>
                <img 
                  src="/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png" 
                  alt="Why Hospitals and Growing Healthcare Groups Choose This Platform" 
                  className="rounded-2xl shadow-lg w-full h-auto" 
                  width={600}
                  height={400}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div> */}
            <div>
              <h3 className="heading-3 text-center mb-8">Why Hospitals and Growing Healthcare Groups Choose This Platform</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 items-center">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Branded digital clinic setup</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Scalable for multiple doctors, branches, and specialties</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Built-in referral workflows</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Role-based access for teams</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Doctor modules with unique logins</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Admin and operations workflows</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Digital prescriptions and alerts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lab, pharmacy, insurance, and payment integrations</span>
                </div>
                <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexible payment provider support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Secure patient and consultation management</span>
                </div>
                <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Designed to scale as operations grow</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Strong price-for-value compared to building from scratch</span>
                </div>
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
            {/* Small and Mid-Sized Hospitals */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <HouseHeart className="h-8 w-8 text-brand-blue mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">For Small and Mid-Sized Hospitals</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base text-gray-700">
                  Launch a secure digital care channel for online consultations, follow-ups, prescriptions, and patient communication.
                </li>
              </ul>
            </div>

            {/* Large Clinics */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <Hospital className="h-8 w-8 text-brand-blue mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">For Large Clinics With 10–50 Doctors</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base text-gray-700">
                  Manage multi-doctor workflows, patient appointments, internal referrals, and specialty care in one centralised platform.
                </li>
              </ul>
            </div>

            {/* Multi-Location Clinics */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPinHouseIcon className="h-8 w-8 text-brand-blue mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">For Multi-Location Clinics</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base text-gray-700">
                  Offer consistent digital care across multiple branches while maintaining central control and brand consistency.
                </li>
              </ul>
            </div>

            {/* Enterprise Healthcare Groups */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <BuildingIcon className="h-8 w-8 text-brand-blue mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">For Enterprise Healthcare Groups</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base text-gray-700">
                  Build a scalable digital clinic with integrations, role-based access, internal referral workflows, and advanced operational support.
                </li>
              </ul>
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
                What is a telemedicine platform for hospitals?
              </h3>
              <p className="text-gray-600 ml-8">
                A telemedicine platform for hospitals is a digital care system that helps hospitals manage online consultations, doctors, departments, patients, prescriptions, payments, referrals, and integrations through one platform.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Languages className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                How is a hospital telemedicine platform different from a basic video consultation tool?
              </h3>
              <p className="text-gray-600 ml-8">
                A basic video tool only supports virtual meetings. A hospital telemedicine platform supports complete care workflows such as appointment scheduling, doctor access, patient management, prescriptions, payments, referrals, integrations, and operational coordination.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Globe className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                Can the platform support multiple doctors and specialties?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes. The platform is designed to support multi-doctor and multi-specialty workflows with unique doctor access and centralised administrative control.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                Can doctors refer patients to other specialists within the organisation?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes. Built-in referral workflows can help doctors refer patients to other doctors or specialties within the same hospital, clinic, or healthcare group.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                Can the platform integrate with labs, pharmacies, and insurance providers?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes. The platform can support integrations with selected lab partners, pharmacies, insurance providers, billing systems, and payment providers based on your requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                Can we use our own payment provider?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes. The platform can be configured to support major payment methods and can also be integrated with your preferred payment provider where applicable.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                Is this suitable for multi-location clinics?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes. Multi-location clinics and healthcare groups can use the platform to manage digital care across branches while maintaining centralised visibility and brand consistency.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 ml-8 text-brand-gray-dark">
                {/* <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" /> */}
                Can the platform scale as our organisation grows?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes. The platform is designed to scale with your organisation as you add more doctors, specialties, branches, integrations, and patient workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue/10 py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-2 text-brand-gray-dark mb-6">
            Ready to Build a Scalable Digital Care Platform?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Launch a branded digital clinic that supports your doctors, patients, departments, integrations, payments, and long-term growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" data-hero-cta>
              <Button className="primary-button">
                Book a Free Demo <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                Discuss Enterprise Requirements
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PublicHealth;