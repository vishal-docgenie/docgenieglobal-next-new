
// JSON-LD structured data for HIPAA-compliant healthcare solutions
export const hipaaSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare#software",
      "name": "HIPAA Compliant Telemedicine Platform",
      "applicationCategory": "HealthApplication",
      "applicationSubCategory": "Telehealth Compliance Software",
      "operatingSystem": "Web",
      "url": "https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare",
      "applicationSuite": "Telemedicine Platform",
      "provider": {
        "@type": "Organization",
        "name": "DocGenie Global",
        "url": "https://www.docgenieglobal.com/"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare#service",
      "serviceType": "HIPAA Compliant Telehealth Platform",
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
        "audienceType": "Hospitals, Clinics, Healthcare Providers"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "MedicalOrganization",
      "@id": "https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare#medical",
      "name": "DocGenie Global",
      "medicalSpecialty": "Telemedicine"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is DocGenie Global HIPAA compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, DocGenie Global follows HIPAA compliance standards to ensure patient data security, encryption, and privacy protection."
          }
        },
        {
          "@type": "Question",
          "name": "What security measures are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The platform includes data encryption, secure access controls, and compliance-ready infrastructure for healthcare providers."
          }
        },
        {
          "@type": "Question",
          "name": "Who can use this platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hospitals, clinics, and healthcare organizations can use this HIPAA compliant telemedicine platform."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare#webpage",
      "url": "https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare",
      "name": "HIPAA Compliant Telemedicine Platform",
      "about": {
        "@id": "https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare#software"
      }
    },
    {
      "@type": "ContactAction",
      "target": "https://www.docgenieglobal.com/contact"
    }
  ]
};
