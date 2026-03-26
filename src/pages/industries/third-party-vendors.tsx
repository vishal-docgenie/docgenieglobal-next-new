import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { Building, Palette, Zap, Users, DollarSign, Shield, Globe, ChevronRight, CheckCircle, HelpCircle, Settings, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/common/LazyImage";
// import heroImage from "@/assets/images/third-party-vendors-office.jpg";

const ThirdPartyVendors = () => {
  const benefits = [
    {
      icon: <Palette className="h-8 w-8 text-brand-blue" />,
      title: "Complete White-Label Solution",
      description: "Fully customizable platform with your branding, colors, and domain name."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-blue" />,
      title: "Rapid Deployment",
      description: "Launch your telemedicine service in weeks, not months, with minimal technical overhead."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-brand-blue" />,
      title: "Revenue Sharing Models",
      description: "Flexible pricing structures including revenue sharing and licensing options."
    },
    {
      icon: <Globe className="h-8 w-8 text-brand-blue" />,
      title: "Scalable Infrastructure",
      description: "Cloud-based platform that scales automatically with your growing customer base."
    }
  ];

  const vendorTypes = [
    {
      title: "Insurance Companies",
      description: "Enhance member benefits with telemedicine services while reducing claims costs.",
      features: ["Member portal integration", "Claims processing integration", "Cost analysis dashboards", "Network provider management"],
      image: "/lovable-uploads/588df964-312d-4467-a9cb-2ec984d2931c.png"
    },
    {
      title: "Technology Providers",
      description: "Add telemedicine capabilities to your existing healthcare technology portfolio.",
      features: ["API-first architecture", "SDK and developer tools", "Custom integrations", "Technical support"],
      image: "/lovable-uploads/63ea607b-5a55-428d-b7c6-d6949d524efe.png"
    },
    {
      title: "Third-Party Administrators",
      description: "Offer comprehensive telehealth benefits to your employer groups and members.",
      features: ["Multi-tenant architecture", "Employer dashboards", "Utilization reporting", "Cost management tools"],
      image: "/lovable-uploads/69e8d276-bdc6-4d11-81d5-71aaeb7bd2da.png"
    }
  ];

  const partnerBenefits = [
    "Technical documentation and APIs",
    "Comprehensive onboarding and training program",
    "Ongoing technical support and maintenance",
    "Access to regular platform updates and new features",
    "Compliance and security certifications",
    "Performance analytics and reporting tools"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "SoftwareApplication",
        "@id": "https://www.docgenieglobal.com/industries/third-party-vendors#software",
        "name": "Telemedicine Platform for Third Party Vendors",
        "applicationCategory": "HealthApplication",
        "applicationSubCategory": "Telemedicine SaaS",
        "operatingSystem": "Web",
        "url": "https://www.docgenieglobal.com/industries/third-party-vendors",
        "applicationSuite": "Telemedicine Platform",
        "provider": {
          "@type": "Organization",
          "name": "DocGenie Global",
          "url": "https://www.docgenieglobal.com/"
        }
      },

      {
        "@type": "Service",
        "@id": "https://www.docgenieglobal.com/industries/third-party-vendors#service",
        "serviceType": "Telemedicine SaaS for Third Party Vendors and Integrations",
        "provider": {
          "@type": "Organization",
          "name": "DocGenie Global"
        },
        "areaServed": [
          "United States",
          "United Kingdom",
          "India",
          "Singapore"
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceLocation": {
            "@type": "Place",
            "name": "Global"
          }
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Healthcare Vendors, SaaS Companies, API Partners, Integration Providers"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "0",
          "availability": "https://schema.org/InStock"
        }
      },

      {
        "@type": "SoftwareApplication",
        "@id": "https://www.docgenieglobal.com/industries/third-party-vendors#api",
        "name": "DocGenie API",
        "applicationCategory": "DeveloperApplication",
        "applicationSubCategory": "Healthcare API Integration",
        "operatingSystem": "Web",
        "url": "https://www.docgenieglobal.com/industries/third-party-vendors",
        "provider": {
          "@type": "Organization",
          "name": "DocGenie Global"
        }
      },

      {
        "@type": "FAQPage",
        "@id": "https://www.docgenieglobal.com/industries/third-party-vendors#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can third party vendors integrate with DocGenie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, DocGenie Global supports integrations with third party healthcare vendors and SaaS platforms through APIs."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of integrations are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The platform supports integrations such as EMR systems, payment gateways, analytics tools, and healthcare software solutions."
            }
          },
          {
            "@type": "Question",
            "name": "Is the platform scalable for partners?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the platform is designed to scale with partners and supports enterprise-level integrations."
            }
          }
        ]
      },

      {
        "@type": "WebPage",
        "@id": "https://www.docgenieglobal.com/industries/third-party-vendors#webpage",
        "url": "https://www.docgenieglobal.com/industries/third-party-vendors",
        "name": "Telemedicine Platform for Third Party Vendors",
        "about": {
          "@id": "https://www.docgenieglobal.com/industries/third-party-vendors#software"
        }
      },

      {
        "@type": "ContactAction",
        "target": "https://www.docgenieglobal.com/contact"
      }

    ]
  };

  return (
    <Layout>
      <Head>
        <title>Telehealth Platform for Third-Party Vendors | DocGenie Global</title>
        <meta 
          name="description" 
          content="Empower your offerings with DocGenie's white-label telehealth solutions. Seamlessly integrate secure, scalable virtual care into your services." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/industries/third-party-vendors" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Telehealth Platform for Third-Party Vendors | DocGenie Global" />
        <meta property="og:description" content="Empower your offerings with DocGenie's white-label telehealth solutions. Seamlessly integrate secure, scalable virtual care into your services." />
        <meta property="og:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/industries/third-party-vendors" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telehealth Platform for Third-Party Vendors | DocGenie Global" />
        <meta name="twitter:description" content="Empower your offerings with DocGenie's white-label telehealth solutions. Seamlessly integrate secure, scalable virtual care into your services." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta name="twitter:url" content="https://www.docgenieglobal.com/industries/third-party-vendors" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="white label telemedicine, telemedicine reseller, healthcare technology partnerships, insurance telemedicine, TPA telehealth solutions" />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center justify-center sm:justify-start mb-4">
                <Building className="h-8 w-8 text-brand-blue mr-3" />
                <span className="text-brand-blue font-semibold">Ecosystem Vendors</span>
              </div>
              <h1 className="heading-1 mb-6">
                White-Label Solutions for
                <span className="text-brand-blue"> Healthcare Vendors & Resellers</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                Partner with us to offer comprehensive, personalised telemedicine solutions under your brand name. Perfect for healthcare technology providers, insurance firms, and related service organisations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#why-partner">
                  <Button className="primary-button">
                    Explore Partner Benefits
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </div>
            <div>
              <LazyImage 
                src={ '/images/third-party-vendors-office.jpg' } 
                alt="Modern corporate office environment for third-party vendors"
                className="rounded-2xl shadow-lg w-full h-auto" 
                width={600}
                height={400}
                componentName="ThirdPartyVendors"
                imagePurpose="hero"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="why-partner" className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Why Partner with DocGenie</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leverage our proven telemedicine platform to expand your service offerings and create new revenue streams without the complexity of building from scratch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Types Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Perfect for Various Vendor Types</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our white-label platform is designed to meet the unique needs of different types of service providers and technology companies.
            </p>
          </div>
          
          <div className="space-y-16">
            {vendorTypes.map((vendor, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="heading-3 mb-4">{vendor.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{vendor.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {vendor.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <LazyImage 
                    src={vendor.image} 
                    alt={vendor.title} 
                    className="rounded-2xl shadow-lg w-full h-auto" 
                    width={600}
                    height={400}
                    componentName="ThirdPartyVendors"
                    imagePurpose="vendor-type"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <LazyImage 
                src="/lovable-uploads/ae06b433-da1b-4356-810a-119494b3568c.png" 
                alt="Partner benefits and support" 
                className="rounded-2xl shadow-lg w-full h-auto" 
                width={600}
                height={400}
                componentName="ThirdPartyVendors"
                imagePurpose="partner-benefits"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="heading-2 mb-6">Complete Partner Support</h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide everything you need to successfully launch and grow your telemedicine offering, from technical implementation to ongoing support.
              </p>
              
              <div className="space-y-4">
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
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
              Get answers to common questions about our white-label telemedicine platform and partnership opportunities.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <HelpCircle className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                What is a white-label telemedicine platform?
              </h3>
              <p className="text-gray-600 ml-8">
                It is a fully customisable telehealth platform that allows vendors to brand and market virtual care solutions under their own brand name, enabling quicker launch and greater brand recognition.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <Clock className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                How quickly can we deploy the platform?
              </h3>
              <p className="text-gray-600 ml-8">
                The exact time to deploy will depend on the complexity of the project and expected usage. However, the modular structure of the platform typically allows deployment of standard projects in less than 30 days, thereby significantly reducing time-to-market.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <Settings className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                Can the platform integrate with our existing systems?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes, DocGenie supports extensive API and data integration with insurance claims, healthcare databases, and third-party applications.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <DollarSign className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                What business models do you support?
              </h3>
              <p className="text-gray-600 ml-8">
                We offer flexible subscription, licensing, and revenue sharing models tailored to vendor partnerships and business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue/10 py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-2 text-brand-gray-dark mb-6">
            Ready to Become a Partner?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our growing network of successful partners and start offering telemedicine services to your customers today.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button size="lg" className="primary-button">
                Start Partnership Discussion
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThirdPartyVendors;