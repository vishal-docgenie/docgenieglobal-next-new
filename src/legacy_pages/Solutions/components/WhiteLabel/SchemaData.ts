
export const whiteLabelSchemaData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "White Label Telemedicine Platform",
  "description": "Fully customizable white label telemedicine solution that maintains your brand identity while delivering exceptional virtual care experiences for clinics, doctors, and hospitals.",
  "brand": {
    "@type": "Brand",
    "name": "DocGenie Global"
  },
  "logo": "https://www.docgenieglobal.com/lovable-uploads/docgenie-logo.png",
  "image": "https://www.docgenieglobal.com/lovable-uploads/9e6e81c2-be85-41ae-9ba0-dfbb95ee96f3.png",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "100",
    "pricingType": "https://schema.org/InvoicePrice",
    "availability": "https://schema.org/InStock"
  },
  "category": "Healthcare Software",
  "applicationCategory": "Telemedicine Platform",
  "features": [
    "Complete Brand Customization",
    "Custom Domain Integration",
    "Branded Patient Experience",
    "EHR/EMR Integration",
    "High-Performance Architecture",
    "Enterprise-Grade Security",
    "Multi-Platform Access",
    "Mobile-Friendly Experience",
    "Geographic Expansion Capabilities",
    "Patient Retention Strategies"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Healthcare Providers",
    "description": "Clinics, hospitals, private practices, and healthcare organizations looking to implement branded telemedicine solutions"
  },
  "hasMerchantReturnPolicy": {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": "US",
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "merchantReturnDays": 30,
    "returnMethod": "https://schema.org/ReturnByMail"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.8",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Healthcare Professionals"
    },
    "reviewBody": "Our white label telemedicine platform consistently receives top ratings from healthcare providers for its customization flexibility and enterprise-grade performance."
  },
  "potentialAction": {
    "@type": "ViewAction",
    "target": "https://www.docgenieglobal.com/contact"
  }
};

export const whiteLabelFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What exactly is a white label telemedicine platform?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A white label telemedicine platform is a fully-featured virtual care solution that can be customized with your healthcare organization's branding, colors, and logo. It allows you to offer telehealth services under your own brand identity rather than a third-party vendor's branding, creating a seamless experience for your patients."
    }
  },{
    "@type": "Question",
    "name": "How long does it take to implement a white label telemedicine solution?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Implementation timelines vary based on the complexity of your requirements, but our typical implementation takes 4-6 weeks from initial discovery to launch. This includes branding customization, system integration, staff training, and testing. We offer accelerated deployment options for organizations that need to launch more quickly."
    }
  },{
    "@type": "Question",
    "name": "Can the platform integrate with our existing EHR/EMR system?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, our white label telemedicine platform supports integration with all major EHR/EMR systems including Epic, Cerner, Allscripts, athenahealth, and many others. We provide both standard API connections and custom integration solutions to ensure seamless data flow between systems."
    }
  },{
    "@type": "Question",
    "name": "What types of healthcare providers typically use your white label solution?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our white label telemedicine platform is used by a diverse range of healthcare providers including independent physician practices, multi-specialty clinics, hospital systems, urgent care networks, behavioral health providers, and specialty care organizations. The solution is scalable to accommodate providers of all sizes."
    }
  },{
    "@type": "Question",
    "name": "How does white labeling impact patient trust compared to third-party platforms?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "White labeling significantly enhances patient trust by maintaining brand continuity across all touchpoints. Research shows that patients are more likely to engage with and trust telehealth services when they're offered under a familiar healthcare brand. This leads to higher adoption rates, better patient satisfaction, and improved clinical outcomes."
    }
  },{
    "@type": "Question",
    "name": "What level of technical support is provided after implementation?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide comprehensive technical support after implementation, including 24/7 technical assistance, regular platform updates, security patches, and ongoing optimization. Our support team includes dedicated account managers who understand your specific implementation and can provide tailored assistance."
    }
  }]
};
