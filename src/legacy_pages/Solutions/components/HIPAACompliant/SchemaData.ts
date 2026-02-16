
// JSON-LD structured data for HIPAA-compliant healthcare solutions
export const hipaaSchemaData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "HIPAA-Compliant Telemedicine Platform",
  "description": "Secure virtual care services with end-to-end encryption and comprehensive data protection, fully compliant with HIPAA regulations for healthcare providers.",
  "brand": {
    "@type": "Brand",
    "name": "DocGenie Global"
  },
  "logo": "https://www.docgenieglobal.com/lovable-uploads/docgenie-logo.png",
  "image": "https://www.docgenieglobal.com/lovable-uploads/24334ddb-7ed2-4c58-b7ca-2088b1cb7638.png",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "100",
    "pricingType": "https://schema.org/InvoicePrice",
    "availability": "https://schema.org/InStock"
  },
  "category": "Healthcare Software",
  "applicationCategory": "HIPAA-Compliant Telemedicine",
  "features": [
    "End-to-End Encryption",
    "Access Controls & Audit Trails",
    "Compliance Documentation",
    "Secure Cloud Storage",
    "Structured Documentation",
    "Granular Access Controls",
    "Secure Data Storage",
    "Network Security",
    "Physical Security",
    "Secure Payment Processing"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Healthcare Providers",
    "description": "Hospitals, clinics, medical practices, and healthcare organizations requiring HIPAA-compliant virtual care solutions"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "Healthcare Security Association"
    },
    "reviewBody": "DocGenie's HIPAA-compliant platform delivers exceptional security measures while maintaining seamless usability for both providers and patients."
  },
  "potentialAction": {
    "@type": "ViewAction",
    "target": "https://www.docgenieglobal.com/contact"
  }
};

export const hipaaFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What does HIPAA compliance mean, and why is it crucial for healthcare providers?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "HIPAA (Health Insurance Portability and Accountability Act) compliance means adhering to strict standards designed to protect the privacy and security of patient health information. For healthcare providers, maintaining HIPAA compliance is essential to prevent unauthorized access to sensitive data, reduce the risk of data breaches, avoid legal penalties, and foster trust with patients."
    }
  },{
    "@type": "Question",
    "name": "How does DocGenie Global ensure its telemedicine platform meets HIPAA requirements?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DocGenie Global implements a multi-layered security strategy to ensure HIPAA compliance. This includes robust data encryption, secure access controls, regular audits, and continuous system updates to address emerging security threats. These measures are integral to safeguarding patient information and maintaining a compliant telemedicine environment."
    }
  },{
    "@type": "Question",
    "name": "What security features are built into the platform to protect patient information?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The platform is equipped with several advanced security features: End-to-end encryption: Ensures data is protected during transmission. Multi-factor authentication: Adds an extra layer of security for user access. Secure cloud storage: Protects stored data from unauthorized access. Comprehensive logging and monitoring: Helps detect and respond to any suspicious activity. Together, these features create a secure environment that minimizes the risk of data breaches."
    }
  },{
    "@type": "Question",
    "name": "Can DocGenie Global's solution integrate with existing electronic health record (EHR) systems?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, the solution is designed to integrate seamlessly with various EHR systems. This interoperability ensures that healthcare providers can efficiently exchange data, access real-time patient information during teleconsultations, and maintain continuity in patient care—all while keeping data secure and compliant with regulatory standards."
    }
  },{
    "@type": "Question",
    "name": "What benefits can healthcare organizations expect from using a HIPAA-compliant telemedicine solution?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Healthcare organizations benefit in several key ways: Enhanced patient privacy and data security: Reduces the risk of breaches and builds trust. Streamlined workflows: Improved operational efficiency through seamless integration with existing systems. Regulatory compliance: Minimizes legal risks associated with handling sensitive patient data. Improved patient access: Facilitates remote consultations and enhances overall care delivery. These advantages combine to create a more efficient and secure healthcare service."
    }
  },{
    "@type": "Question",
    "name": "What training and support are available during and after the implementation of the solution?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DocGenie Global offers comprehensive onboarding that includes detailed training sessions to help healthcare professionals quickly become proficient with the platform. Additionally, ongoing support is provided through dedicated customer service channels, regular system updates, and technical assistance to ensure smooth operation and address any issues that arise post-implementation."
    }
  }]
};
