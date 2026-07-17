import type { BlogContent } from '@/data/blogs/types';

export const whiteLabelPricingGuideContent: BlogContent = {
  intro: "White label telemedicine platform pricing is structured around what your organisation actually needs — provider count, integration depth, branding scope, and support tier — rather than a single flat rate. For US healthcare providers, understanding how vendors structure pricing, what drives cost up or down, and how to compare the total cost against in-house alternatives is the starting point for a useful vendor conversation. This guide explains how pricing works and what to expect.",

  sections: [
    {
      id: 'common-pricing-models',
      title: "How White Label Telemedicine Vendors Structure Pricing",
      content: `White label telemedicine platforms typically price in one of four ways:

**Per-provider subscription:** A monthly or annual fee per clinician using the platform — commonly $100–$500+ per provider per month, depending on the platform and feature tier. Predictable at small scale; can become expensive for large provider networks.

**Platform licence fee:** A fixed monthly or annual fee for the platform itself, regardless of provider count. More common for larger organisations. Can be significantly more cost-effective when you have many providers who would each trigger per-seat charges.

**Revenue share:** A percentage of each consultation fee goes to the platform vendor — typically 5–20% of consultation revenue. Common in consumer telehealth marketplaces, less standard for white label enterprise deals where the organisation wants full commercial control.

**Custom enterprise pricing:** For health systems, large multi-specialty groups, and digital health companies with complex requirements, pricing is typically negotiated based on scale, integration scope, branding requirements, and support model. Ranges vary widely — from tens of thousands annually for smaller organisations to hundreds of thousands for large systems.

See [DocGenie Global's pricing](/pricing) for indicative ranges relevant to your organisation size.`
    },
    {
      id: 'what-drives-cost',
      title: "What Drives the Cost Up or Down",
      content: `Several factors determine where your organisation falls in the pricing range:

* **Provider count:** The single biggest cost driver on per-provider models. A solo physician costs far less than a 50-provider group. At sufficient scale, enterprise licensing becomes more cost-effective.

* **EHR/EMR integration depth:** No integration is the lowest cost configuration. A basic patient demographic lookup adds cost. Deep bi-directional integration with custom field mapping is the highest-cost integration scenario, often requiring a one-time integration fee plus ongoing maintenance.

* **Branding depth:** Logo and colour application only costs less to configure than a fully custom domain, patient portal, provider dashboard, and branded communication template suite.

* **Compliance and security requirements:** Standard HIPAA-aligned architecture is included in most enterprise platforms. Additional compliance requirements — specific audit frameworks, BAA documentation complexity, state-specific regulatory support — may add cost.

* **Support tier:** Self-serve documentation and ticket-based support is the lowest cost tier. Dedicated account management, prioritised support, and custom SLAs are priced higher.

* **Launch complexity:** A single-specialty clinic with one appointment type configures faster than a multi-specialty, multi-location organisation with a complex provider hierarchy.`
    },
    {
      id: 'comparison-to-inhouse',
      title: "How White Label Pricing Compares to Building In-House",
      content: `Organisations evaluating whether to license a white label platform or build their own consistently underestimate the true cost of in-house development.

Building a HIPAA-aligned telemedicine platform from scratch typically involves:

* Engineering team salaries for 12–18+ months of development ($500K–$2M+ depending on team size and location)
* Security audit costs (penetration testing, vulnerability assessments) — $20,000–$100,000+ annually
* Infrastructure and hosting costs ongoing
* Ongoing engineering for maintenance, compliance updates, API maintenance as EHR vendors update their interfaces, and feature development

A white label platform consolidates those costs into a predictable subscription. Most US healthcare organisations find that a white label platform is less expensive than in-house development over a 3-year comparison — and significantly faster to go live, typically in weeks rather than 12–18 months.`
    },
    {
      id: 'total-cost-of-ownership',
      title: "How to Think About Total Cost of Ownership",
      content: `The right comparison is not "monthly platform fee versus nothing." It is "platform fee plus implementation versus in-house development plus ongoing engineering plus compliance plus infrastructure."

Framed that way, white label solutions are typically more cost-effective for organisations that are not primarily software companies. The hidden costs of in-house development — security patches, API maintenance, compliance updates, infrastructure scaling, staff turnover on the engineering team — accumulate over time and are routinely underestimated in initial business cases.

For white label platforms, the total cost of ownership calculation includes:

* **Implementation fee** (if charged separately from the subscription)
* **Monthly or annual subscription** at your provider count
* **Integration costs** if your EHR requires custom integration work
* **Ongoing support tier costs**

These are typically knowable upfront — which makes budgeting significantly more predictable than in-house development, where scope and timeline changes are the norm.`
    },
    {
      id: 'questions-before-getting-a-quote',
      title: "What to Define Before Requesting a Pricing Quote",
      content: `Having clear answers to these questions before speaking with vendors will make pricing conversations faster and more accurate:

* **How many providers will use the platform at launch?** In 12 months? In 3 years?
* **Do you need EHR/EMR integration, and if so, which system?** Is it a standard EHR or a custom system?
* **What level of branding customisation do you need?** Logo only, or full domain, patient portal, and communication templates?
* **What is your target launch timeline?** Accelerated deployments with dedicated implementation support may carry premium pricing.
* **What support model do you need post-launch?** Self-serve, standard ticketed support, or dedicated account management?
* **Do you have existing infrastructure** (domain, patient communication tools, payment gateway) that needs to be integrated?

Vendors who give you a meaningful quote without these details are not quoting your actual requirements — they are giving you a range that may not reflect your situation.`
    },
    {
      id: 'negotiation-and-contracts',
      title: "What to Look for in a Telemedicine Platform Contract",
      content: `Before signing a white label telemedicine contract, review these terms specifically:

* **Minimum term:** Most enterprise contracts are annual or multi-year. Understand what the early termination obligations are.
* **Price escalation:** Does the subscription price increase annually? At what rate, and tied to what index?
* **Data ownership and portability:** Who owns the patient data in the platform? What happens to your data if you end the relationship?
* **Uptime and support commitments:** What are the vendor's commitments on platform availability and response times for support issues?
* **BAA terms:** Review the Business Associate Agreement carefully — it defines how your patient data is protected and what happens in the event of a breach.`
    }
  ],

  conclusion: "White label telemedicine pricing is designed to reflect the genuine variation in what different healthcare organisations need. A three-provider mental health practice and a 200-provider hospital network have meaningfully different requirements, and pricing should reflect that. The most effective approach is to define your requirements clearly, compare the total cost of ownership against the true cost of in-house alternatives, and request tailored quotes from vendors who can scope their pricing to your specific situation — not a generic rate card."
};
