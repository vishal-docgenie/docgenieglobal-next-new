import type { BlogContent } from '@/data/blogs/types';

export const whiteLabelSpecialtyCareContent: BlogContent = {
  intro: "Specialty care telemedicine has different requirements from primary care. The consultation model, the patient journey, and the workflow integration needs vary significantly by specialty — and the platform powering that experience needs to flex accordingly. Here is how a white label telemedicine platform serves the most common US specialty use cases.",

  sections: [
    {
      id: 'dermatology',
      title: "Dermatology",
      content: `Dermatology is one of the highest-volume telemedicine specialties because many consultations are visual in nature — rash assessment, follow-up on a treatment response, chronic skin condition monitoring. A white label platform for dermatology needs:

* High-quality video for clear visual assessment during live consultations
* Patient intake forms that capture skin concern details before the consultation
* Consultation notes workflow connecting to the provider's existing records
* Branded patient communication for follow-up and treatment reminders
`
    },
    {
      id: 'cardiology',
      title: "Cardiology Follow-Up",
      content: `Cardiology telemedicine is primarily follow-up focused — medication reviews, post-procedure monitoring, chronic condition management. Requirements include:

* Appointment scheduling tied to provider-specific availability
* Consultation notes with structured fields for cardiovascular assessment
* Referral communication back to the patient's primary care provider
* Patient engagement for long-term condition monitoring programmes
`
    },
    {
      id: 'mental-health',
      title: "Mental Health and Behavioural Health",
      content: "Mental health virtual care places particular emphasis on consultation privacy, continuity of the therapeutic relationship, and secure patient communication between sessions. A branded platform is especially important in this specialty — patients are more likely to engage consistently when their virtual sessions feel like a direct extension of their trusted provider's environment, rather than a generic third-party app."
    },
    {
      id: 'chronic-care',
      title: "Chronic Care Management",
      content: `Chronic care management programmes under virtual care need recurring appointment structures, patient engagement between visits, and care coordination workflows. Key platform requirements:

* Recurring appointment scheduling for registered patients
* Follow-up reminder automation
* Care plan communication via branded patient portal
* Provider notes connected to the patient's longitudinal record
`
    },
    {
      id: 'womens-health',
      title: "Women's Health",
      content: "Women's health telemedicine covers a broad range of consultation types, from routine follow-ups to specialist referrals. Branding matters especially in this specialty — patients are more likely to engage consistently with a platform that feels like an extension of their trusted women's health provider rather than a generic telehealth service."
    },
    {
      id: 'multi-specialty',
      title: "Multi-Specialty Practices",
      content: "For multi-specialty groups and hospital outpatient departments, the platform needs to support multiple specialties with distinct scheduling, workflow, and communication configurations — all under a single branded interface that the patient experiences as one coherent service. This is where white label scalability matters most: the ability to add specialties and providers without rebuilding the patient-facing experience from scratch."
    },
    {
      id: 'shared-foundation',
      title: "What All Specialty Use Cases Share",
      content: `Regardless of specialty, white label telemedicine for specialty care requires the same foundation:

* Full brand customisation under your practice identity
* Workflow flexibility to match your specific consultation model
* EHR/EMR connectivity to avoid duplicate data entry
* Secure, private consultation infrastructure
* Patient communication that reinforces your brand across the care journey
`
    }
  ],

  conclusion: "The best white label telemedicine platform for specialty care is one that can be configured to fit your clinical model — not one that forces your clinical model to fit the platform. DocGenie Global's white label platform is designed to support a range of US specialty care workflows, from single-specialty practices to multi-specialty groups, with the branding, integration, and workflow flexibility that specialty virtual care requires."
};
