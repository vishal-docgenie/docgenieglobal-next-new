import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";

const SLASupport = () => {
  return (
    <Layout>
      <Head>
        <title>Service Level Agreement (SLA) & Support Policy | DocGenie Global</title>
        <meta 
          name="description" 
          content="Learn about DocGenie Global's service level agreements, support commitments, and technical assistance policies for our telemedicine platform users." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/sla-support-policy" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Service Level Agreement (SLA) & Support Policy | DocGenie Global" />
        <meta property="og:description" content="Learn about DocGenie Global's service level agreements, support commitments, and technical assistance policies for our telemedicine platform users." />
        <meta property="og:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/sla-support-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Level Agreement (SLA) & Support Policy | DocGenie Global" />
        <meta name="twitter:description" content="Learn about DocGenie Global's service level agreements, support commitments, and technical assistance policies for our telemedicine platform users." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/og-image.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="SLA, service level agreement, support policy, telemedicine support, healthcare platform support, technical assistance, customer service, DocGenie Global" />
        <meta name="author" content="DocGenie Global" />
      </Head>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Level Agreement (SLA) & Support Policy</h1>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                At DocGenie Global, we recognize that reliable and timely support is critical for healthcare providers, administrators, and partners who rely on our telemedicine platform. This SLA & Support Policy outlines the principles, processes, and commitments that guide how we deliver technical assistance, platform reliability, and ongoing customer care.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Scope of Coverage</h2>
              <p className="mb-4">
                This policy applies to all customers using the DocGenie Global telemedicine platform under a signed agreement. Specific service levels, timelines, and escalation procedures may vary depending on the size of deployment, customization requirements, and contractual terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Service Availability</h2>
              <p className="mb-4">
                <strong>Platform Uptime:</strong> DocGenie Global strives to ensure continuous platform availability, with downtime limited to scheduled maintenance or unavoidable disruptions.
              </p>
              <p className="mb-4">
                <strong>Maintenance Windows:</strong> Customers will be notified in advance of planned maintenance that may impact availability.
              </p>
              <p className="mb-4">
                <strong>Hosting & Security:</strong> All services are hosted in secure, compliant environments with safeguards aligned to healthcare data privacy regulations (such as HIPAA, GDPR, or local equivalents).
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. Support Channels</h2>
              <p className="mb-4">
                Customers can reach our support team through the following channels:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Email Support</strong> – available for all customers during business hours.</li>
                <li><strong>Dedicated Account Manager</strong> – assigned for enterprise clients and large-scale deployments.</li>
                <li><strong>Emergency Hotline</strong> – available for critical issues affecting live patient care workflows.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. Incident Classification & Response</h2>
              <p className="mb-4">
                All reported issues are triaged according to severity:
              </p>
              
              <p className="mb-2">
                <strong>Critical (P1)</strong> – Platform outage or severe disruption to clinical workflows.
              </p>
              <p className="mb-4 pl-4">
                Response Goal: Immediate acknowledgement, with rapid escalation to the technical team.
              </p>

              <p className="mb-2">
                <strong>High (P2)</strong> – Major functionality impaired, but partial workarounds available.
              </p>
              <p className="mb-4 pl-4">
                Response Goal: Acknowledgement within standard business hours and prioritization for resolution.
              </p>

              <p className="mb-2">
                <strong>Medium (P3)</strong> – Non-critical issues, feature requests, or cosmetic bugs.
              </p>
              <p className="mb-4 pl-4">
                Response Goal: Logged, tracked, and addressed in the product roadmap or next update cycle.
              </p>

              <p className="mb-2">
                <strong>Low (P4)</strong> – Informational queries, training requests, or minor enhancements.
              </p>
              <p className="mb-4 pl-4">
                Response Goal: Addressed as part of standard support.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Customization & Integration Support</h2>
              <p className="mb-4">
                Our standard implementation process includes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Exploratory Call</strong> – Understanding customer needs and solution fit.</li>
                <li><strong>NDA & Contract</strong> – Formal agreement outlining scope and responsibilities.</li>
                <li><strong>Technical Overview Call</strong> – Deep-dive into requirements and integration planning.</li>
                <li><strong>Customization & Integration</strong> – Platform tailored to customer workflows.</li>
                <li><strong>Demo Environment Testing</strong> – Joint validation with customer stakeholders.</li>
                <li><strong>Go-Live Readiness</strong> – Transition to production and handover with documentation.</li>
              </ul>
              <p className="mb-4">
                Support continues post go-live to ensure adoption, stability, and long-term success.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Escalation Management</h2>
              <p className="mb-4">
                If an issue is not resolved within the expected timeframe, customers may escalate via their Account Manager or through our dedicated support channels. Each escalation is reviewed by senior technical leadership to ensure timely resolution.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Customer Responsibilities</h2>
              <p className="mb-4">
                To ensure smooth support delivery, customers are expected to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate and complete information when raising support requests.</li>
                <li>Designate authorized points of contact for technical communications.</li>
                <li>Maintain their own local IT infrastructure (devices, internet connectivity, internal networks).</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Continuous Improvement</h2>
              <p className="mb-4">
                We regularly review incidents, customer feedback, and support metrics to improve our SLA commitments. Updates to this policy will be communicated to customers proactively.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">9. Tailored SLAs</h2>
              <p className="mb-4">
                Because every customer engagement is unique, specific SLA commitments are defined in each contract. This document provides a framework, but final service levels (including response times, resolution targets, and uptime guarantees) will be customized based on:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Scale of deployment</li>
                <li>Complexity of integrations</li>
                <li>Regulatory compliance needs</li>
                <li>Customer workload and usage patterns</li>
              </ul>

              <p className="mb-4">
                <strong>Final Note:</strong> Our commitment goes beyond resolving issues. We aim to be a long-term partner in digital healthcare transformation, ensuring reliability, compliance, and peace of mind for all stakeholders.
              </p>
            </div>

            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="mt-6">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SLASupport;