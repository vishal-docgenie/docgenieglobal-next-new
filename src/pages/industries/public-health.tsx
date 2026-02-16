import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { Users, Heart, MapPin, TrendingDown, Shield, Globe, ChevronRight, CheckCircle, HelpCircle, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/common/LazyImage";
// import heroImage from "@/assets/images/public-health-community.jpg";
// import telemedicineConsultationImage from "@/assets/images/telemedicine-consultation.jpg";

const PublicHealth = () => {
  const benefits = [
    {
      icon: <MapPin className="h-8 w-8 text-brand-blue" />,
      title: "Reach Underserved Communities",
      description: "Extend healthcare access to remote and underserved populations regardless of location."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-brand-blue" />,
      title: "Reduce Healthcare Costs",
      description: "Lower operational costs while maintaining quality care delivery at scale."
    },
    {
      icon: <Heart className="h-8 w-8 text-brand-blue" />,
      title: "Improve Health Outcomes",
      description: "Enable early intervention and continuous monitoring for better population health."
    },
    {
      icon: <Globe className="h-8 w-8 text-brand-blue" />,
      title: "Scalable Infrastructure",
      description: "Deploy across multiple regions and communities with centralized management."
    }
  ];

  const sectors = [
    {
      title: "Government Health Departments",
      description: "Enable state and local health departments to provide accessible healthcare services to constituents.",
      features: ["Multi-language support", "Population health analytics", "Emergency response capabilities", "Integration with public health systems"],
      image: "/lovable-uploads/0ce55f94-e4dd-469d-9285-c94bef0a4ee6.png"
    },
    {
      title: "Non-Profit Organizations",
      description: "Empower NGOs to deliver healthcare services to vulnerable populations worldwide.",
      features: ["Grant-friendly pricing", "Volunteer provider management", "Mobile-optimized platform", "Offline capabilities"],
      image: "/lovable-uploads/0d52e95d-09fc-40f0-a772-a1ecd765215a.png"
    },
    {
      title: "Community Health Centers",
      description: "Support FQHCs and community clinics in expanding their reach and impact.",
      features: ["HRSA compliance", "Sliding fee scale integration", "Community outreach tools", "Care coordination"],
      image: "/lovable-uploads/0f21084b-83f6-4656-a125-78c04baa7310.png"
    }
  ];

  const publicHealthFeatures = [
    "Multi-language support for diverse populations",
    "Population health management tools",
    "Social determinants of health tracking",
    "Community health worker integration",
    "Emergency response and triage capabilities",
    "Public health reporting and analytics",
    "Grant compliance and documentation",
    "Mobile-first design for field workers"
  ];

  const useCases = [
    {
      title: "Rural Health Programs",
      description: "Bridge the healthcare gap in rural communities with specialist consultations and primary care services."
    },
    {
      title: "Disaster Response",
      description: "Rapidly deploy telemedicine services during natural disasters or public health emergencies."
    },
    {
      title: "Preventive Care Initiatives",
      description: "Implement population-wide screening programs and preventive health interventions."
    },
    {
      title: "Mental Health Support",
      description: "Provide mental health services to communities with limited access to behavioral health providers."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Telemedicine for Public Health - Government, NGOs & Non-Profits",
    "description": "Affordable telemedicine solutions for government organizations, NGOs, and non-profits. Improve healthcare access and outcomes for underserved populations with scalable telehealth technology.",
    "url": "https://www.docgenieglobal.com/industries/public-health",
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
          "name": "Public Health",
          "item": "https://www.docgenieglobal.com/industries/public-health"
        }
      ]
    }
  };

  return (
    <Layout>
      <Head>
        <title>Telehealth Solutions for Public Health | DocGenie Global</title>
        <meta 
          name="description" 
          content="Enhance public health initiatives with DocGenie's secure, scalable telehealth platform. Support community health, disease prevention, and remote patient monitoring." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/industries/public-health" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Telehealth Solutions for Public Health | DocGenie Global" />
        <meta property="og:description" content="Enhance public health initiatives with DocGenie's secure, scalable telehealth platform. Support community health, disease prevention, and remote patient monitoring." />
        <meta property="og:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/industries/public-health" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telehealth Solutions for Public Health | DocGenie Global" />
        <meta name="twitter:description" content="Enhance public health initiatives with DocGenie's secure, scalable telehealth platform. Support community health, disease prevention, and remote patient monitoring." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta name="twitter:url" content="https://www.docgenieglobal.com/industries/public-health" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="public health telemedicine, government telehealth, NGO telemedicine, non-profit healthcare technology, community health telemedicine" />
        
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
                "name": "How does telemedicine improve healthcare access for underserved populations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Telemedicine bridges distance by enabling virtual consultations and remote monitoring, ensuring healthcare delivery to areas with limited medical facilities."
                }
              },
              {
                "@type": "Question",
                "name": "Does the platform support multi-language communication?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely, it offers multi-language interfaces to serve diverse community needs effectively."
                }
              },
              {
                "@type": "Question",
                "name": "Is DocGenie's platform suitable for large-scale public health programs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our platform is scalable and designed to support wide-reaching initiatives with advanced analytics, multilingual support and dashboards to closely monitor patient health outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "How secure is the telemedicine platform for public health data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "DocGenie Global adheres to stringent HIPAA compliance and employs robust security protocols to protect sensitive health information."
                }
              }
            ]
          })}
        </script>
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center justify-center sm:justify-start mb-4">
                <Users className="h-8 w-8 text-brand-blue mr-3" />
                <span className="text-brand-blue font-semibold">Public Health Sector</span>
              </div>
              <h1 className="heading-1 mb-6">
                Impact Partnerships
                <span className="text-brand-blue"> for Scale</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                Building sustainable healthcare access through strategic collaboration with social impact entities including governmental organisations, non-profits and public health organisations.
              </p>
              <div className="flex justify-center">
                <a href="#partnership-approach">
                  <Button className="primary-button">
                    Learn More
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <LazyImage 
                src={ '/images/public-health-community.jpg' } 
                alt="Community health gathering and education session"
                className="rounded-2xl shadow-lg w-full h-auto" 
                width={600}
                height={400}
                componentName="PublicHealth"
                imagePurpose="hero"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Collaboration Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Expanding Healthcare Access Through Strategic Collaboration</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                DocGenie Global partners with community-based organisations, international NGOs, and government ministries to advance Universal Health Coverage goals through innovative telemedicine solutions. We work with partners at every level, from grassroots organisations with deep community trust to government ministries designing national health policy, ensuring our solutions are both locally relevant and scalable. Our hybrid cross-subsidisation model demonstrates that market-driven sustainability can complement rather than compete with public health initiatives, while ensuring people-centred impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach Section */}
      <section id="partnership-approach" className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Our Partnership Approach</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Community-Led Health Delivery */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-brand-blue mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">Community-Led Health Delivery</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base text-gray-700">
                  <strong className="text-gray-900">Virtual consultations and ongoing care:</strong> Facilitated video consultations (on-site or virtual) with our health professionals, plus remote monitoring, follow-ups, and chronic disease management through community health workers
                </li>
                <li className="text-sm sm:text-base text-gray-700">
                  <strong className="text-gray-900">Health camps:</strong> Periodic in-person health camps leveraging our local network of health professionals
                </li>
                <li className="text-sm sm:text-base text-gray-700">
                  <strong className="text-gray-900">Clinical data collection:</strong> Digital health record systems enabling continuity of care and population health insights for partner organizations
                </li>
              </ul>
            </div>

            {/* Health System Integration */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-brand-blue mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">Health System Integration</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base text-gray-700">
                  <strong className="text-gray-900">Government platform complementarity:</strong> Adding specialist layers to existing public digital health initiatives
                </li>
                <li className="text-sm sm:text-base text-gray-700">
                  <strong className="text-gray-900">Clinical decision support:</strong> AI-powered tools designed for low-resource, low-bandwidth settings
                </li>
                <li className="text-sm sm:text-base text-gray-700">
                  <strong className="text-gray-900">Referral network strengthening:</strong> Connecting community health workers with our network of 375+ health professionals
                </li>
              </ul>
            </div>

            {/* Workforce Development & Capacity Building */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-brand-blue mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">Workforce Development & Capacity Building</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base text-gray-700">
                  <strong className="text-gray-900">Remote training programs:</strong> Virtual education for health workers on clinical protocols and decision-making
                </li>
                <li className="text-sm sm:text-base text-gray-700">
                  <strong className="text-gray-900">Knowledge transfer:</strong> Best practices sharing from our extensive specialist network
                </li>
                <li className="text-sm sm:text-base text-gray-700">
                  <strong className="text-gray-900">Quality assurance systems:</strong> Standardized care protocols adapted to local contexts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Success Stories Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Partnership Success Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Content Column */}
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Jeevana NGO</h3>
                    <p className="text-sm sm:text-base text-gray-700">Rural health camps in eastern Uttar Pradesh, bringing specialist care to subsistence farming communities</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Chintan</h3>
                    <p className="text-sm sm:text-base text-gray-700">Healthcare access for Delhi's waste collection workers and families through trusted community networks</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Navjeevana</h3>
                    <p className="text-sm sm:text-base text-gray-700">Enhanced specialist capabilities at rural hospital in Darjeeling through remote consultation support</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-blue/10 p-4 sm:p-6 rounded-xl border border-brand-blue/20">
                <div className="flex items-start">
                  <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6 text-brand-blue mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-brand-blue mb-2">Partnership Impact</h3>
                    <p className="text-sm sm:text-base text-gray-700"><strong>413 consultations</strong> delivered across these partnerships, serving populations that previously traveled 3-8 hours for specialist care.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Images Column */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {/* Partnership Image 1 */}
              <LazyImage 
                src={ '/images/telemedicine-consultation.jpg' } 
                alt="Community telemedicine consultation session with healthcare education"
                className="rounded-xl shadow-lg w-full h-auto" 
                width={500}
                height={300}
                componentName="PublicHealth"
                imagePurpose="partnership"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Partnership Image 2 */}
              <LazyImage 
                src="/images/partnership-health-camp.jpg" 
                alt="Health camp partnership with Jeevana NGO providing healthcare services in rural communities" 
                className="rounded-xl shadow-lg w-full h-auto" 
                width={500}
                height={300}
                componentName="PublicHealth"
                imagePurpose="partnership"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Partnership Image 3 */}
              <LazyImage 
                src="/images/partnership-community-health.jpg" 
                alt="Community health partnership showing healthcare workers serving local population" 
                className="rounded-xl shadow-lg w-full h-auto" 
                width={500}
                height={300}
                componentName="PublicHealth"
                imagePurpose="partnership"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <HelpCircle className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                How does telemedicine improve healthcare access for underserved populations?
              </h3>
              <p className="text-gray-600 ml-8">
                Telemedicine bridges distance by enabling virtual consultations and remote monitoring, ensuring healthcare delivery to areas with limited medical facilities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <Languages className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                Does the platform support multi-language communication?
              </h3>
              <p className="text-gray-600 ml-8">
                Absolutely, it offers multi-language interfaces to serve diverse community needs effectively.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <Globe className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                Is DocGenie's platform suitable for large-scale public health programs?
              </h3>
              <p className="text-gray-600 ml-8">
                Yes, our platform is scalable and designed to support wide-reaching initiatives with advanced analytics, multilingual support and dashboards to closely monitor patient health outcomes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-start text-brand-gray-dark">
                <Shield className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                How secure is the telemedicine platform for public health data?
              </h3>
              <p className="text-gray-600 ml-8">
                DocGenie Global adheres to stringent HIPAA compliance and employs robust security protocols to protect sensitive health information.
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
            Building on these proven community models, we're scaling partnerships with government ministries and international NGOs for national health system integration and virtual training programs for frontline health workers. We also collaborate with community organizations working on complementary services like climate adaptation and mitigation.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our Global Health team to explore partnership opportunities.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button size="lg" className="primary-button">
                Contact Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PublicHealth;