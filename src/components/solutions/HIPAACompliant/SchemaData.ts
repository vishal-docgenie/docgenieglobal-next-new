
// JSON-LD structured data for HIPAA-compliant healthcare solutions
//
// The FAQPage entries below mirror the visible accordion in
// HIPAACompliant/FAQ.tsx one-for-one, in the same order. They previously
// described three questions that appeared nowhere on the page. If the visible
// FAQ changes, change these with it.
//
// No Offer is declared. The previous schema carried priceCurrency USD with
// price "0", which states that the platform is free; pricing is custom and no
// public zero-price offer exists.
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
      "url": "https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare/",
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
          "name": "What does HIPAA compliance mean, and why is it crucial for healthcare providers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HIPAA (Health Insurance Portability and Accountability Act) compliance means adhering to strict standards designed to protect the privacy and security of patient health information. For healthcare providers, maintaining HIPAA compliance is essential to prevent unauthorized access to sensitive data, reduce the risk of data breaches, avoid legal penalties, and foster trust with patients."
          }
        },
        {
          "@type": "Question",
          "name": "How does DocGenie Global ensure its telemedicine platform meets HIPAA requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DocGenie Global delivers virtual care on a HIPAA-compliant platform. Patient data is encrypted in transit and at rest, access to patient records is role-based and logged, and the company holds ISO/IEC 27001:2022 certification for its information security management system. Arrangements specific to your deployment, including contractual and data-processing documentation, are confirmed during discovery."
          }
        },
        {
          "@type": "Question",
          "name": "What security features are built into the platform to protect patient information?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The platform protects patient information through:\n\n- Encryption of patient data in transit and at rest.\n- Role-based access controls, so clinicians, administrators, finance teams and patients each see only what their role requires.\n- Access logging over patient records, so your compliance team can review who viewed or changed a record and when.\n\nControls that depend on how your organisation deploys the platform are confirmed during discovery."
          }
        },
        {
          "@type": "Question",
          "name": "Can DocGenie Global's solution integrate with existing electronic health record (EHR) systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EHR and EMR integration is supported, and the requirements for it are assessed against your existing systems, available APIs and implementation scope. What can be connected, and how, is established for your environment during discovery rather than assumed in advance — so integration scope is confirmed before implementation begins."
          }
        },
        {
          "@type": "Question",
          "name": "What benefits can healthcare organizations expect from using a HIPAA-compliant telemedicine solution?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Healthcare organizations benefit in several key ways:\n\n- Enhanced patient privacy and data security: Reduces the risk of breaches and builds trust.\n- Streamlined workflows: Consultations, records, prescriptions and payments handled in one place rather than across disconnected tools.\n- Regulatory compliance: Minimizes legal risks associated with handling sensitive patient data.\n- Improved patient access: Facilitates remote consultations and enhances overall care delivery.\n\nThese advantages combine to create a more efficient and secure healthcare service."
          }
        },
        {
          "@type": "Question",
          "name": "What training and support arrangements apply after implementation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Support, maintenance, training and account-management arrangements are confirmed according to your implementation and service scope, so what applies to your organisation is set out as part of the agreement rather than assumed from a standard package."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare#webpage",
      "url": "https://www.docgenieglobal.com/solutions/hipaa-compliant-healthcare/",
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
