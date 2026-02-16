import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { Hospital, Building, Users, Clock, DollarSign, Shield, Globe, Palette, TrendingUp, MapPin, Heart, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import LazyImage from "@/components/common/LazyImage";
// import healthcareProvidersImage from "@/assets/images/healthcare-providers.jpg";
// import thirdPartyVendorsImage from "@/assets/images/third-party-vendors.jpg";
// import publicHealthImage from "@/assets/images/public-health.jpg";
const Industries = () => {
  const industries = [{
    title: "Healthcare Providers",
    subtitle: "Doctors, Clinics & Hospitals",
    description: "Comprehensive telemedicine solutions for independent practitioners, multi-specialty clinics, and hospital systems looking to expand patient reach and reduce operational costs.",
    icon: <Hospital className="h-12 w-12 text-brand-blue" />,
    path: "/industries/healthcare-providers",
    keyBenefits: ["Expand patient reach beyond geographical limitations", "24/7 availability with flexible scheduling", "Reduce overhead costs while maintaining quality care", "Seamless EHR integration with existing systems"],
    image: '/images/healthcare-providers.jpg'
  }, {
    title: "Third-Party Vendors",
    subtitle: "Insurance, Technology & Service Providers",
    description: "White-label telemedicine platform for insurance companies, technology providers, and third-party administrators to enhance their healthcare offerings.",
    icon: <Building className="h-12 w-12 text-brand-blue" />,
    path: "/industries/third-party-vendors",
    keyBenefits: ["Complete white-label solution with custom branding", "Rapid deployment in weeks, not months", "Flexible revenue sharing and licensing models", "Scalable cloud-based infrastructure"],
    image: '/images/third-party-vendors.jpg'
  }, {
    title: "Public Health Sector",
    subtitle: "Government, NGOs & Non-Profits",
    description: "Affordable, scalable telemedicine solutions for government organizations, NGOs, and non-profits serving underserved populations.",
    icon: <Users className="h-12 w-12 text-brand-blue" />,
    path: "/industries/public-health",
    keyBenefits: ["Reach underserved communities regardless of location", "Reduce healthcare costs while maintaining quality", "Improve population health outcomes at scale", "Multi-language support for diverse populations"],
    image: '/images/public-health.jpg'
  }];
  const overviewStats = [{
    number: "300+",
    label: "Healthcare Providers",
    icon: <Hospital className="h-8 w-8 text-brand-blue" />
  }, {
    number: "70,000+",
    label: "Patients Served",
    icon: <Users className="h-8 w-8 text-brand-blue" />
  }, {
    number: "50+",
    label: "Countries Covered",
    icon: <Globe className="h-8 w-8 text-brand-blue" />
  }, {
    number: "99.9%",
    label: "Platform Uptime",
    icon: <Shield className="h-8 w-8 text-brand-blue" />
  }];
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Industries We Serve - Telemedicine Solutions for Healthcare Stakeholders",
    "description": "Discover how DocGenie's white-label telemedicine platform serves healthcare providers, third-party vendors, and public health organizations with customized solutions.",
    "url": "https://www.docgenieglobal.com/industries",
    "publisher": {
      "@type": "Organization",
      "name": "DocGenie Global",
      "logo": "https://www.docgenieglobal.com/lovable-uploads/docgenie-logo.png"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.docgenieglobal.com"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": "https://www.docgenieglobal.com/industries"
      }]
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [{
        "@type": "Service",
        "name": "Healthcare Provider Solutions",
        "description": "Telemedicine platform for doctors, clinics, and hospitals"
      }, {
        "@type": "Service",
        "name": "Third-Party Vendor Solutions",
        "description": "White-label telemedicine for insurance and technology companies"
      }, {
        "@type": "Service",
        "name": "Public Health Solutions",
        "description": "Affordable telemedicine for government and non-profit organizations"
      }]
    }
  };
  return <Layout>
      <Head>
        <title>Telemedicine Solutions for Hospitals, Clinics & More | Industries</title>
        <meta name="description" content="See how DocGenie Global supports hospitals, clinics, pharmacies and more with tailored virtual care, white-label telehealth, and enterprise-grade integrations." />
        <link rel="canonical" href="https://www.docgenieglobal.com/industries" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Telemedicine Solutions for Hospitals, Clinics & More | Industries" />
        <meta property="og:description" content="See how DocGenie Global supports hospitals, clinics, pharmacies and more with tailored virtual care, white-label telehealth, and enterprise-grade integrations." />
        <meta property="og:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/industries" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telemedicine Solutions for Hospitals, Clinics & More | Industries" />
        <meta name="twitter:description" content="See how DocGenie Global supports hospitals, clinics, pharmacies and more with tailored virtual care, white-label telehealth, and enterprise-grade integrations." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/og-image.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="telemedicine industries, healthcare providers, insurance telemedicine, public health telehealth, white label healthcare, medical technology partners, healthcare software solutions" />
        <meta name="author" content="DocGenie Global" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can healthcare providers integrate DocGenie with their existing EHR systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, DocGenie's platform supports seamless EHR integration to maintain continuity of care and streamline clinical workflows."
                }
              },
              {
                "@type": "Question",
                "name": "Is the platform compliant with healthcare regulations like HIPAA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "DocGenie Global ensures top-level compliance with HIPAA and other relevant healthcare regulations to protect patient data privacy and security."
                }
              },
              {
                "@type": "Question",
                "name": "How does DocGenie help NGOs and governments reach underserved populations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "DocGenie helps NGOs and governments by offering low-cost virtual care with offline-enabled multi-language support and real-time population health monitoring tools."
                }
              },
              {
                "@type": "Question",
                "name": "How does a white-label telemedicine platform benefit third-party vendors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A white-label telemedicine platform allows vendors to deploy a branded solution quickly, control user experience, and integrate telehealth seamlessly into their existing service portfolio."
                }
              }
            ]
          })}
        </script>
      </Head>
      
      {/* Hero Section */}
      <section className="blue-gradient-br-5-10 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">
              Telemedicine Solutions for Every <span className="text-brand-blue">Healthcare Stakeholder</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">Our telemedicine solution is designed to meet the unique needs of healthcare providers, technology partners, and public health organizations, delivering customized solutions that drive results.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#healthcare-providers">
                <Button size="lg" className="primary-button">
                  Explore Your Use Case
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/solutions">
                <Button variant="outline" size="lg">
                  Explore Our Solution
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Trusted by Healthcare Organizations Worldwide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform powers telemedicine solutions across diverse healthcare environments
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {overviewStats.map((stat, index) => <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-brand-blue mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From independent practitioners to large healthcare systems, our platform adapts to your specific industry needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <div className="mb-4 sm:mb-0 sm:mr-4 flex justify-center sm:justify-start">
                    {industry.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-brand-gray-dark break-words">{industry.title}</h3>
                    <p className="text-brand-blue font-medium text-sm sm:text-base break-words">{industry.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  {industry.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-brand-gray-dark mb-3 text-sm sm:text-base">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {industry.keyBenefits.slice(0, 2).map((benefit, idx) => <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-xs sm:text-sm break-words">{benefit}</span>
                      </li>)}
                  </ul>
                </div>
                
                <Link href={industry.path}>
                  <Button variant="outline" className="w-full group text-sm sm:text-base">
                    <span className="hidden sm:inline">Learn More About {industry.title}</span>
                    <span className="sm:hidden">Learn More</span>
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>)}
          </div>
        </div>
      </section>

      {/* Individual Industry Sections */}
      {industries.map((industry, index) => <section key={index} id={index === 0 ? "healthcare-providers" : undefined} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <div className="mb-4 sm:mb-0 sm:mr-4 flex justify-center sm:justify-start">
                    {industry.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="heading-2 break-words">{industry.title}</h2>
                    <p className="text-brand-blue text-base sm:text-lg font-medium break-words">{industry.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-brand-gray-dark mb-4">Why Choose Our Platform:</h3>
                  <ul className="space-y-3">
                    {industry.keyBenefits.map((benefit, idx) => <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>)}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={industry.path}>
                    <Button size="lg" className="primary-button text-sm sm:text-base">
                      <span className="hidden sm:inline">Explore {industry.title} Solutions</span>
                      <span className="sm:hidden">Explore Solutions</span>
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="text-sm sm:text-base">
                      Reach Out to Us
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img src={industry.image} alt={`${industry.title} telemedicine solutions`} className="w-full h-96 object-cover rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </section>)}

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our telemedicine platform and how it serves different healthcare stakeholders.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                Can healthcare providers integrate DocGenie with their existing EHR systems?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes, our platform supports seamless EHR integration to maintain continuity of care and streamline clinical workflows.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                Is the platform compliant with healthcare regulations like HIPAA?
              </h3>
              <p className="text-gray-600 ml-8">
                DocGenie Global ensures top-level compliance with HIPAA and other relevant healthcare regulations to protect patient data privacy and security.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <Heart className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                How does DocGenie help NGOs and governments reach underserved populations?
              </h3>
              <p className="text-gray-600 ml-8">
                By offering low-cost virtual care with offline-enabled multi-language support and real-time population health monitoring tools.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <Palette className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                How does a white-label telemedicine platform benefit third-party vendors?
              </h3>
              <p className="text-gray-600 ml-8">
                It allows vendors to deploy a branded solution quickly, control user experience, and integrate telehealth seamlessly into their existing service portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue/10 py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-2 text-brand-gray-dark mb-6">
            Ready to Transform Healthcare in Your Industry?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Let's discuss how our telemedicine solution can be customised for your specific industry needs and use cases.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="primary-button">
                Schedule a Demo
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                View Pricing Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Industries;