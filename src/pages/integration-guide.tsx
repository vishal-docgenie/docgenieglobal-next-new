import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";

const IntegrationGuide = () => {
  return (
    <Layout>
      <Head>
        <title>Integration Guide | DocGenie Global</title>
        <meta 
          name="description" 
          content="Comprehensive integration guide for DocGenie Global's telemedicine platform. Learn about our APIs, deployment options, and integration patterns for healthcare providers." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/integration-guide" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Integration Guide | DocGenie Global" />
        <meta property="og:description" content="Comprehensive integration guide for DocGenie Global's telemedicine platform. Learn about our APIs, deployment options, and integration patterns for healthcare providers." />
        <meta property="og:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/integration-guide" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Integration Guide | DocGenie Global" />
        <meta name="twitter:description" content="Comprehensive integration guide for DocGenie Global's telemedicine platform. Learn about our APIs, deployment options, and integration patterns for healthcare providers." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/og-image.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="integration guide, telemedicine API, healthcare integration, EHR integration, white-label platform, healthcare technology, API documentation, DocGenie Global" />
        <meta name="author" content="DocGenie Global" />
      </Head>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Integration Guide</h1>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="prose max-w-none text-gray-700">
              <p className="text-gray-700 mb-6">
                Welcome to the DocGenie Global Integration Guide.
              </p>
              
              <p className="text-gray-700 mb-6">
                Whether you're a healthcare provider, public health organization, or ecosystem partner, this page explains how we connect DocGenie's end-to-end telemedicine platform to your systems, brand, and workflows.
              </p>

              <p className="text-gray-700 mb-4"><strong>Who this is for:</strong></p>
              <ul className="mb-6">
                <li>Healthcare Providers: hospitals, clinics, group practices, and virtual-first care teams</li>
                <li>Ecosystem Partners: insurance/payors, TPAs, health IT vendors, admins, and integrators</li>
                <li>Public Health: government agencies, NGOs, social impact programs</li>
              </ul>

              <p className="text-gray-700 mb-4"><strong>At a glance:</strong></p>
              <ul className="mb-8">
                <li>White-label and fully customizable</li>
                <li>Secure, compliant data handling aligned to healthcare regulations</li>
                <li>APIs and integration patterns that meet you where you are</li>
                <li>Guided onboarding from discovery to go-live (and beyond)</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">1) Engagement Flow</h2>
              <p className="text-gray-700 mb-4">
                Our standard integration journey is collaborative and iterative:
              </p>
              <p className="text-gray-700 mb-2"><strong>Exploratory Call</strong> – Align on goals, use-cases, and success criteria.</p>
              <p className="text-gray-700 mb-2"><strong>NDA & Contract</strong> – Define scope, responsibilities, and data protection requirements.</p>
              <p className="text-gray-700 mb-2"><strong>Technical Overview Call</strong> – Review architecture, interfaces, and environment strategy.</p>
              <p className="text-gray-700 mb-2"><strong>Customization & Integration</strong> – Configure branding, modules, APIs, and data flows.</p>
              <p className="text-gray-700 mb-2"><strong>Demo Environment Testing</strong> – Validate functions, security, and user journeys.</p>
              <p className="text-gray-700 mb-2"><strong>Go-Live Readiness</strong> – Training, runbooks, and launch checklist.</p>
              <p className="text-gray-700 mb-6"><strong>Post-Launch Support</strong> – Monitoring, optimization, and roadmap alignment.</p>
              <p className="text-gray-700 mb-6 italic">
                Note: Timelines vary with deployment scale, integration complexity, and customer priorities. Specific milestones are set in your Statement of Work (SOW).
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2) Deployment & Architecture Options</h2>
              <p className="text-gray-700 mb-2"><strong>White-Label Solution:</strong> End-to-end patient and provider modules fully customised with your branding and content.</p>
              <p className="text-gray-700 mb-2"><strong>Modular Features:</strong> E-triage, scheduling, e-prescriptions, video consults, notes, billing, analytics—adopt all or some.</p>
              <p className="text-gray-700 mb-2"><strong>Hosting Models:</strong> Cloud (preferred), hybrid, or customer-managed infrastructure (by agreement).</p>
              <p className="text-gray-700 mb-2"><strong>Multi-Tenant vs Single-Tenant:</strong> Determined by security/compliance requirements and scale.</p>
              <p className="text-gray-700 mb-6"><strong>Regionalization:</strong> Data residency and localization supported subject to platform regions, contracts and local healthcare regulations.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">3) Integration Surfaces</h2>
              <p className="text-gray-700 mb-4">
                We support multiple ways to connect, so you can choose what fits your stack:
              </p>
              
              <h3 className="text-lg font-medium mt-6 mb-3">APIs (REST/JSON):</h3>
              <ul className="mb-4">
                <li>Patient & provider profiles</li>
                <li>Appointments & availability</li>
                <li>Clinical encounters, notes, attachments</li>
                <li>Orders, e-prescriptions (subject to jurisdictional rules)</li>
                <li>Claims, coverage checks, and billing metadata</li>
                <li>Audit events and operational logs</li>
              </ul>

              <p className="text-gray-700 mb-2"><strong>Webhooks:</strong> Event-driven notifications (e.g., appointment booked, consult started/ended, prescription issued, claim status changed).</p>
              <p className="text-gray-700 mb-2"><strong>SSO / Identity:</strong> SAML 2.0, OpenID Connect (OIDC), and JWT-based session handoff. Role-based access controls (RBAC) configurable per tenant.</p>
              <p className="text-gray-700 mb-2"><strong>Embeds:</strong> Secure iFrames and deep links for launching specific flows (e.g., "Start Consult", "Schedule Visit") from your portal.</p>
              <p className="text-gray-700 mb-6"><strong>Data Exchange:</strong> Batch imports/exports (CSV/NDJSON) and scheduled SFTP for migration or reporting.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">4) Common Integration Patterns</h2>
              <p className="text-gray-700 mb-2"><strong>EHR/EMR:</strong> Sync patients, providers, encounters, and documentation; write-back of clinical notes and attachments.</p>
              <p className="text-gray-700 mb-2"><strong>Scheduling:</strong> Two-way sync for slots, reschedules, no-shows, and reminders.</p>
              <p className="text-gray-700 mb-2"><strong>Payments & Billing:</strong> Tokenized payments, reconciliations, and financial reporting; claims/coverage verification with payors.</p>
              <p className="text-gray-700 mb-2"><strong>Insurance / Payors / TPAs:</strong> Eligibility checks, prior auth metadata, claim lifecycle events via APIs or webhooks.</p>
              <p className="text-gray-700 mb-2"><strong>Identity & Access:</strong> Enterprise SSO for staff; OTP/OIDC for patients; delegated admin controls.</p>
              <p className="text-gray-700 mb-2"><strong>Telehealth & Communications:</strong> HD video consults, chat, e-prescriptions, and secure messaging with audit trails.</p>
              <p className="text-gray-700 mb-6"><strong>Public Health Reporting:</strong> Program-specific forms, anonymized/aggregated exports, registry submissions (where applicable).</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5) Security, Privacy & Compliance</h2>
              <p className="text-gray-700 mb-2"><strong>Data Protection:</strong> Encryption in transit and at rest, key management, and strict tenant isolation.</p>
              <p className="text-gray-700 mb-2"><strong>Access Controls:</strong> RBAC, principle of least privilege, session management, IP allow-listing (optional).</p>
              <p className="text-gray-700 mb-2"><strong>Auditing:</strong> Immutable audit logs for clinical and administrative actions.</p>
              <p className="text-gray-700 mb-2"><strong>Compliance Alignment:</strong> Healthcare privacy frameworks (e.g., HIPAA, GDPR, CCPA and local equivalents) aligned per contract and region.</p>
              <p className="text-gray-700 mb-4"><strong>Business Continuity:</strong> Backups, disaster recovery objectives, and incident response runbooks reviewed during onboarding.</p>
              <p className="text-gray-700 mb-6">
                We tailor privacy and security controls to your jurisdictional and organizational requirements during contracting.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6) Environments & Release Management</h2>
              <p className="text-gray-700 mb-2"><strong>Sandbox / Demo:</strong> Safe space to explore APIs, validate workflows, and run UAT.</p>
              <p className="text-gray-700 mb-2"><strong>Staging:</strong> Pre-production validation of integrations, data mappings, and SSO.</p>
              <p className="text-gray-700 mb-2"><strong>Production:</strong> Controlled releases with change windows and rollback plans.</p>
              <p className="text-gray-700 mb-6"><strong>Versioning:</strong> Backwards-compatible API evolution whenever feasible; deprecations are announced with reasonable notice and migration guidance.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7) Roles & Responsibilities</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3">DocGenie Global</h3>
              <ul className="mb-4">
                <li>Solution architecture and technical design reviews</li>
                <li>API enablement, integration guides, and environment provisioning</li>
                <li>White-label branding and configuration</li>
                <li>Security controls, monitoring, and observability</li>
                <li>Go-live orchestration and post-launch optimization</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3">Customer / Partner</h3>
              <ul className="mb-6">
                <li>Business requirements, regulatory constraints, and success metrics</li>
                <li>Source system access, test data, and dedicated technical contacts</li>
                <li>Identity/SSO configuration and endpoint whitelisting</li>
                <li>Data mappings and acceptance criteria</li>
                <li>Change management, internal training, and first-line comms to end-users</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">8) Onboarding Readiness Checklist</h2>
              <ul className="mb-6">
                <li>✅ Defined use-cases and user roles (patient, clinician, admin)</li>
                <li>✅ Confirmed identity strategy (SSO, patient login, MFA/OTP)</li>
                <li>✅ Data sources and targets identified (EHR, CRM, billing, payor)</li>
                <li>✅ Branding assets: logos, colors, tone, translations (if needed)</li>
                <li>✅ Regulatory requirements documented (consents, retention, residency)</li>
                <li>✅ Test accounts and representative sample data available</li>
                <li>✅ Named project owner and technical points of contact</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">9) Testing & Validation</h2>
              <p className="text-gray-700 mb-2"><strong>Unit & Integration Tests:</strong> Validate endpoints, payloads, and error handling.</p>
              <p className="text-gray-700 mb-2"><strong>UAT Sessions:</strong> Scenario-based validation against real clinical/admin workflows.</p>
              <p className="text-gray-700 mb-2"><strong>Security Testing:</strong> Access controls, data permissions, and audit verification.</p>
              <p className="text-gray-700 mb-2"><strong>Performance & Scale:</strong> Load scenarios appropriate to your expected volumes.</p>
              <p className="text-gray-700 mb-4"><strong>Accessibility & Localization:</strong> WCAG-aligned UX checks; language and content review where required.</p>
              <p className="text-gray-700 mb-6">
                Deliverables typically include test plans, traceability to requirements, and sign-off criteria agreed in your SOW.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">10) Go-Live Checklist</h2>
              <ul className="mb-6">
                <li>Admin users configured; roles and permissions reviewed</li>
                <li>SSO and session handoff validated across devices</li>
                <li>Operational runbooks: incident, escalation, and contact matrix</li>
                <li>Monitoring dashboards and alerts enabled</li>
                <li>Training completed (clinicians, admins, support)</li>
                <li>Backup & DR posture confirmed; support hours communicated</li>
                <li>Communications plan prepared for staff and patients (as applicable)</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">11) Post-Launch & Continuous Improvement</h2>
              <p className="text-gray-700 mb-2"><strong>Hypercare Window:</strong> Enhanced monitoring and rapid response immediately after launch.</p>
              <p className="text-gray-700 mb-2"><strong>Feedback Loops:</strong> Product roadmap discussions and quarterly reviews (or as contracted).</p>
              <p className="text-gray-700 mb-2"><strong>Analytics:</strong> Usage, adoption, and outcome metrics to inform optimization.</p>
              <p className="text-gray-700 mb-6"><strong>Change Management:</strong> Coordinated releases with clear notes and impact assessments.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">12) Support & Escalations</h2>
              <p className="text-gray-700 mb-4">
                For how we triage, communicate, and resolve issues, see our <Link href="/sla-support-policy" className="text-blue-600 hover:text-blue-800 underline">SLA & Support Policy</Link>.
              </p>
              <p className="text-gray-700 mb-6">
                Support channels typically include email/ticketing, a dedicated account manager for larger deployments, and an emergency line for critical incidents affecting patient care.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">13) FAQs</h2>
              
              <p className="text-gray-700 mb-2"><strong>Q: Can we start small and expand later?</strong></p>
              <p className="text-gray-700 mb-4">Yes. You can launch with a focused scope (e.g., scheduling + video visits) and add features over time.</p>

              <p className="text-gray-700 mb-2"><strong>Q: Do you support our existing identity provider?</strong></p>
              <p className="text-gray-700 mb-4">We integrate with most enterprise IdPs via SAML/OIDC. We'll review details during the Technical Overview Call.</p>

              <p className="text-gray-700 mb-2"><strong>Q: How do you handle data residency?</strong></p>
              <p className="text-gray-700 mb-4">Our standard policy is to ensure data residency and compliance with the hosting regions as well as the specific requirements of our customers as part of the contracting and architectural design.</p>

              <p className="text-gray-700 mb-2"><strong>Q: What if our systems are legacy or partially offline?</strong></p>
              <p className="text-gray-700 mb-4">We can combine batch jobs, SFTP, or brokered interfaces with modern APIs/webhooks to bridge constraints.</p>

              <p className="text-gray-700 mb-2"><strong>Q: Can NGOs/government programs run custom forms and reporting?</strong></p>
              <p className="text-gray-700 mb-6">Yes. We support program-specific forms, workflows, and aggregated reporting where required.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">14) Getting Started</h2>
              <p className="text-gray-700 mb-2">Contact us to schedule an exploratory call.</p>
              <p className="text-gray-700 mb-2">Share your integration priorities (systems, identity, data flows, compliance).</p>
              <p className="text-gray-700 mb-4">We'll propose a solution architecture and onboarding plan tailored to your context.</p>
              <p className="text-gray-700 mb-6 italic">
                If you'd like, I can also create a shorter, marketing-friendly version for your homepage or a PDF handout that mirrors this structure.
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

export default IntegrationGuide;