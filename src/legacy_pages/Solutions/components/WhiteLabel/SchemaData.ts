
export const whiteLabelSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.docgenieglobal.com/solutions/white-label-telemedicine#software",
      "name": "White Label Telemedicine Platform",
      "applicationCategory": "HealthApplication",
      "applicationSubCategory": "Telemedicine SaaS",
      "operatingSystem": "Web",
      "url": "https://www.docgenieglobal.com/solutions/white-label-telemedicine",
      "applicationSuite": "Telemedicine Platform",
      "provider": {
        "@type": "Organization",
        "name": "DocGenie Global",
        "url": "https://www.docgenieglobal.com/"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.docgenieglobal.com/solutions/white-label-telemedicine#service",
      "serviceType": "White Label Telemedicine Platform",
      "provider": {
        "@type": "Organization",
        "name": "DocGenie Global"
      },
      "areaServed": ["US","UK","IN","SG"],
      "audience": {
        "@type": "Audience",
        "audienceType": "Hospitals, Clinics, Healthcare Providers, Startups"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://www.docgenieglobal.com/solutions/white-label-telemedicine#howto",
      "name": "How to Launch a White Label Telemedicine Platform",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Requirement Analysis"
        },
        {
          "@type": "HowToStep",
          "name": "Platform Customization"
        },
        {
          "@type": "HowToStep",
          "name": "Integration Setup"
        },
        {
          "@type": "HowToStep",
          "name": "Launch"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.docgenieglobal.com/solutions/white-label-telemedicine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a white label telemedicine platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A white label telemedicine platform allows healthcare providers to offer virtual care services under their own brand."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can launch within 2 to 3 weeks depending on customization."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.docgenieglobal.com/solutions/white-label-telemedicine#webpage",
      "url": "https://www.docgenieglobal.com/solutions/white-label-telemedicine",
      "name": "White Label Telemedicine Platform",
      "about": {
        "@id": "https://www.docgenieglobal.com/solutions/white-label-telemedicine#software"
      }
    },
    {
      "@type": "ContactAction",
      "target": "https://www.docgenieglobal.com/contact"
    }
  ]
};
