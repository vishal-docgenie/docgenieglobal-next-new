
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy | DocGenie Global</title>
        <meta 
          name="description" 
          content="Learn about DocGenie Global's data privacy practices, including how we collect, use, and protect your personal and health information in compliance with healthcare regulations." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/privacy-policy" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Privacy Policy | DocGenie Global" />
        <meta property="og:description" content="Learn about DocGenie Global's data privacy practices, including how we collect, use, and protect your personal and health information in compliance with healthcare regulations." />
        <meta property="og:image" content="https://www.docgenieglobal.com/og-image.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | DocGenie Global" />
        <meta name="twitter:description" content="Learn about DocGenie Global's data privacy practices, including how we collect, use, and protect your personal and health information in compliance with healthcare regulations." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/og-image.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="privacy policy, healthcare data privacy, HIPAA compliance, telemedicine privacy, patient data protection, healthcare data security, medical information privacy" />
        <meta name="author" content="DocGenie Global" />
      </Head>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                DocGenie Global values the privacy of our customers and users of our website and telemedicine platform. This Privacy Policy outlines our practices regarding the collection, use, and protection of your personal information.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3">Personal Information</h3>
              <p className="mb-4">
                We may collect personal information including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, and contact details</li>
                <li>Professional credentials for healthcare providers</li>
                <li>Login credentials and authentication information</li>
                <li>Billing and payment information</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3">Health Information</h3>
              <p className="mb-4">
                For users of our telemedicine platform, we may process health-related information as part of providing our services, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Medical history and health records</li>
                <li>Consultation notes and treatment plans</li>
                <li>Prescription information</li>
                <li>Lab results and diagnostic information</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3">Technical Information</h3>
              <p className="mb-4">
                We automatically collect certain technical information when you use our services:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
              <p className="mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing and improving our telemedicine services</li>
                <li>Processing transactions and managing accounts</li>
                <li>Communicating with you about our services</li>
                <li>Ensuring the security and functionality of our platform</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Analyzing usage patterns to enhance user experience</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">Data Protection and Security</h2>
              <p className="mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>End-to-end encryption for data transmission</li>
                <li>Secure data storage with regular backups</li>
                <li>Access controls and authentication protocols</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>HIPAA-compliant infrastructure and processes</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">Sharing of Information</h2>
              <p className="mb-4">
                We may share your information with the following parties:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Healthcare providers using our platform to deliver care</li>
                <li>Third-party service providers that support our operations</li>
                <li>Payment processors and financial institutions</li>
                <li>Regulatory authorities and government agencies when required by law</li>
              </ul>
              <p className="mb-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Your Rights and Choices</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Accessing and obtaining a copy of your data</li>
                <li>Correcting inaccurate or incomplete information</li>
                <li>Requesting deletion of your information</li>
                <li>Restricting or objecting to certain processing activities</li>
                <li>Data portability to other service providers</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us at globalsupport@docgenie.in.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                Our website uses cookies and similar technologies to enhance user experience, analyze usage patterns, and personalize content. You can manage your cookie preferences through your browser settings.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes through our website or direct communication.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mb-4">
                DocGenie Global Pte Ltd<br />
                143 Cecil Street, #03-01,<br />
                GB Building<br />
                Singapore (069542)<br />
                Email: globalsupport@docgenie.in
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

export default PrivacyPolicy;
