import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { Hospital, Users, Clock, DollarSign, Shield, TrendingUp, CheckCircle, ChevronRight, HelpCircle, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/common/LazyImage";
// import heroImage from "@/assets/images/healthcare-providers-dashboard.png";
// import multiSpecialtyClinicImage from "@/assets/images/multi-specialty-clinic.png";

const HealthcareProviders = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Market tested product",
      description: "Proven, compliant telemedicine platform with 5 years of live data to back it up"
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-blue" />,
      title: "Scalable Architecture",
      description: "Secure auto-scaling setup designed to handle millions of transactions at no additional cost"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-brand-blue" />,
      title: "Long-term Partnership",
      description: "Ongoing support and ready access to new features & upgrades"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-blue" />,
      title: "Increase Revenue Streams",
      description: "Generate additional income through virtual consultations and remote monitoring services."
    }
  ];

  const features = [
    "Integration with your existing EMRs or use our proprietary EMR",
    "Robust Security with HIPAA and ISO-27001 certifications",
    "Automated appointment scheduling and reminders",
    "Digital prescription management",
    "Dedicated patient portal for medical records access",
    "Integration with all major payment gateways for smooth billing processes",
    "Responsive platform accessible across all Android and iOS devices",
    "Custom branding with your practice identity"
  ];

  const useCases = [
    {
      title: "Independent Practitioners",
      description: "Solo doctors and small practices can expand their services without additional overhead costs.",
      image: "/lovable-uploads/29dbbc69-0894-4506-9d64-b2d8773ebbc2.png"
    },
    {
      title: "Multi-Specialty Clinics",
      description: "Coordinate care across different specialties with integrated telemedicine workflows.",
      image: '/images/multi-specialty-clinic.png'
    },
    {
      title: "Hospital Systems",
      description: "Extend hospital services to remote locations and provide post-discharge monitoring.",
      image: "/lovable-uploads/464747bc-524d-4fa0-aade-3da37a7e71a3.png"
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Telemedicine for Healthcare Providers - Doctors, Clinics & Hospitals",
    "description": "Comprehensive telemedicine solutions for independent doctors, clinics, and hospitals. Expand patient reach, reduce costs, and improve care quality with our white-label platform.",
    "url": "https://www.docgenieglobal.com/industries/healthcare-providers",
    "publisher": {
      "@type": "Organization",
      "name": "DocGenie Global",
      "logo": "https://www.docgenieglobal.com/lovable-uploads/docgenie-logo.png"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.docgenieglobal.com"
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
          "name": "Healthcare Providers",
          "item": "https://www.docgenieglobal.com/industries/healthcare-providers"
        }
      ]
    }
  };

  return (
    <Layout>
      <Head>
        <title>Telemedicine & Virtual Care for Healthcare Providers | DocGenie Global</title>
        <meta 
          name="description" 
          content="Empower healthcare providers with scalable, secure telemedicine solutions. Our platform offers virtual care, EMR integration, and HIPAA compliance customized for providers." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/industries/healthcare-providers" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Telemedicine & Virtual Care for Healthcare Providers | DocGenie Global" />
        <meta property="og:description" content="Empower healthcare providers with scalable, secure telemedicine solutions. Our platform offers virtual care, EMR integration, and HIPAA compliance customized for providers." />
        <meta property="og:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/industries/healthcare-providers" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telemedicine & Virtual Care for Healthcare Providers | DocGenie Global" />
        <meta name="twitter:description" content="Empower healthcare providers with scalable, secure telemedicine solutions. Our platform offers virtual care, EMR integration, and HIPAA compliance customized for providers." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta name="twitter:url" content="https://www.docgenieglobal.com/industries/healthcare-providers" />
        
        <meta name="keywords" content="telemedicine for doctors, clinic telemedicine software, hospital telehealth platform, healthcare provider telemedicine, medical practice telemedicine" />
        
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
                "name": "How can telemedicine improve access for healthcare providers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Telemedicine overcomes physical distance barriers, allowing providers to consult patients remotely and reach underserved populations, improving overall access to care."
                }
              },
              {
                "@type": "Question",
                "name": "Is DocGenie's platform compatible with existing EHR systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the platform supports seamless integration with popular EHR systems to maintain accurate and continuous patient records."
                }
              },
              {
                "@type": "Question",
                "name": "How does telemedicine reduce costs for clinics and hospitals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "By automating administrative tasks, reducing in-person visits, and enabling efficient patient monitoring, telemedicine helps lower operational expenses."
                }
              },
              {
                "@type": "Question",
                "name": "Can small clinics scale their services with DocGenie Global?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Our flexible platform is designed to support small and independent practices, empowering them to expand services without significant capital investment."
                }
              }
            ]
          })}
        </script>
      </Head>
      
      {/* Hero Section */}
      <section className="blue-white-gradient-br-50 py-20 sm:py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center justify-center sm:justify-start mb-4">
                <Hospital className="h-8 w-8 text-brand-blue mr-3" />
                <span className="text-brand-blue font-semibold">Healthcare Providers</span>
              </div>
              <h1 className="heading-1 mb-6">
                Telemedicine Solution for
                <span className="text-brand-blue"> Healthcare Providers</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                Empower your practice with comprehensive telemedicine capabilities. From independent practitioners to large hospital systems, expand your reach and improve patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="primary-button">
                    Schedule Demo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline">View Pricing</Button>
                </Link>
              </div>
            </div>
            <div>
              <img 
                src={'/images/healthcare-providers-dashboard.png'} 
                alt="Healthcare provider using telemedicine platform" 
                className="rounded-2xl shadow-lg w-full h-auto" 
                width={600}
                height={400}
                // componentName="HealthcareProviders"
                // imagePurpose="hero"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Comprehensive Platform Features</h2>
              <p className="text-lg text-gray-600 mb-8">
                Everything you need to deliver world-class telemedicine services, integrated seamlessly with your existing workflows.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/solutions">
                <Button className="primary-button">
                  Explore Our Platform
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="/lovable-uploads/b7dc5536-65af-4491-b947-6b6066db97e4.png" 
                alt="Telemedicine platform features for healthcare providers" 
                className="rounded-2xl shadow-lg w-full h-auto" 
                width={600}
                height={400}
                // componentName="HealthcareProviders"
                // imagePurpose="features"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Why Healthcare Providers Choose Our Platform</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our telemedicine solution is used by over 380 senior doctors and 14 clinics across 37 specialties serving 70,000+ patients in over 50 countries. They trust us because our platform has been designed by a team of healthcare delivery experts with one clear mission - to empower care providers to offer high quality virtual care to their patients.
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

      {/* Use Cases Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Tailored for Every Type of Practice</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're a solo practitioner or part of a large healthcare system, our platform adapts to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src={useCase.image} 
                  alt={useCase.title} 
                  className="w-full h-48 object-cover" 
                  width={400}
                  height={200}
                  // componentName="HealthcareProviders"
                  // imagePurpose="use-case"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Hear from Our Customers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Healthcare professionals across specialties trust our platform to deliver exceptional patient care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dr. Kaushal Madan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center mr-4">
                  <span className="font-bold text-white">KM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dr. Kaushal Madan</h4>
                  <p className="text-brand-blue text-sm">Gastroenterologist</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "With secure communication tools and AI-driven insights, managing chronic digestive conditions has become more streamlined. The platform's data analytics help me make informed decisions in real time."
              </p>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>

            {/* Dr. Yogesh Jain */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center mr-4">
                  <span className="font-bold text-white">YJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dr. Yogesh Jain</h4>
                  <p className="text-brand-blue text-sm">ENT</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "DocGenie's telemedicine platform has revolutionized how I interact with my patients. The seamless video consultations and integrated EMR system have made remote care effortless and efficient."
              </p>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>

            {/* Dr. Sandip Agnihotri */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center mr-4">
                  <span className="font-bold text-white">SA</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dr. Sandip Agnihotri</h4>
                  <p className="text-brand-blue text-sm">Dermatologist</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "The ease of scheduling and patient management has significantly improved my clinic's efficiency. Patients find it incredibly convenient to consult online without compromising on quality care."
              </p>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
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
              Get answers to common questions about how our telemedicine platform benefits healthcare providers.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <HelpCircle className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                How can telemedicine improve access for healthcare providers?
              </h3>
              <p className="text-gray-600 ml-8">
                Telemedicine overcomes physical distance barriers, allowing providers to consult patients remotely and reach underserved populations, improving overall access to care.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <Settings className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                Is DocGenie's platform compatible with existing EHR systems?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes, the platform supports seamless integration with popular EHR systems to maintain accurate and continuous patient records.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <DollarSign className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                How does telemedicine reduce costs for clinics and hospitals?
              </h3>
              <p className="text-gray-600 ml-8">
                By automating administrative tasks, reducing in-person visits, and enabling efficient patient monitoring, telemedicine helps lower operational expenses.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <TrendingUp className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                Can small clinics scale their services with DocGenie Global?
              </h3>
              <p className="text-gray-600 ml-8">
                Absolutely. Our flexible platform is designed to support small and independent practices, empowering them to expand services without significant capital investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue/10 py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-2 text-brand-gray-dark mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our global network of healthcare providers who have already enhanced their practice with our telemedicine platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="primary-button">
                Get Started Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HealthcareProviders;