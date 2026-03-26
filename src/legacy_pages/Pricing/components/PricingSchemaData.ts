
export const pricingFAQSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.docgenieglobal.com/pricing#software",
      "name": "DocGenie Telemedicine Platform",
      "applicationCategory": "HealthApplication",
      "applicationSubCategory": "Telemedicine SaaS",
      "operatingSystem": "Web",
      "url": "https://www.docgenieglobal.com/pricing",
      "applicationSuite": "Telemedicine Platform",
      "provider": {
        "@type": "Organization",
        "name": "DocGenie Global",
        "url": "https://www.docgenieglobal.com/"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.docgenieglobal.com/pricing#service",
      "serviceType": "Telemedicine Platform Pricing",
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
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": "0",
          "price": "Custom"
        }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.docgenieglobal.com/pricing#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does DocGenie cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on features, customization, and scale. Contact the team for a personalized quote."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a free trial available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Demo and trial options may be available based on requirements. Contact the sales team for details."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect pricing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on integrations, number of users, features, and customization level."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.docgenieglobal.com/pricing#webpage",
      "url": "https://www.docgenieglobal.com/pricing",
      "name": "Telemedicine Platform Pricing",
      "about": {
        "@id": "https://www.docgenieglobal.com/pricing#software"
      }
    },
    {
      "@type": "ContactAction",
      "target": "https://www.docgenieglobal.com/contact"
    }
  ]
};
