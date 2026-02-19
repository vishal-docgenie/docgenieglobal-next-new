
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Head from "next/head";

const TermsOfService = () => {
  return (
    <Layout>
      <Head>
        <title>Terms of Service | DocGenie Global</title>
        <meta 
          name="description" 
          content="Read DocGenie Global's terms of service, detailing the terms and conditions governing the use of our telemedicine platform and services." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/terms-of-service" />
      </Head>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Welcome to DocGenie Global. These Terms of Service ("Terms") govern your use of our website and telemedicine platform provided by DocGenie Global Pte Ltd ("we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using the DocGenie Global platform, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to all the terms and conditions, you may not use our services.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Service Description</h2>
              <p className="mb-4">
                DocGenie Global provides a white-label telemedicine platform for healthcare providers, clinics, and hospitals to deliver virtual care services to their patients. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Video consultation tools</li>
                <li>Secure messaging features</li>
                <li>Electronic health record management</li>
                <li>Appointment scheduling</li>
                <li>Prescription management</li>
                <li>Administrative dashboard and analytics</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. User Registration and Accounts</h2>
              <p className="mb-4">
                3.1. To use certain features of our platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process.
              </p>
              <p className="mb-4">
                3.2. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
              <p className="mb-4">
                3.3. We reserve the right to suspend or terminate your account at our discretion if we believe you have violated these Terms or if your use poses a security risk.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. Subscription and Payments</h2>
              <p className="mb-4">
                4.1. Use of our platform may require a subscription plan. Pricing details are available on our website or through direct communication with our sales team.
              </p>
              <p className="mb-4">
                4.2. You agree to pay all fees associated with your selected plan. All payments are non-refundable unless otherwise specified in a separate agreement.
              </p>
              <p className="mb-4">
                4.3. We may change our fees upon reasonable notice. Your continued use of the services after such changes constitutes your acceptance of the new fees.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Healthcare Provider Obligations</h2>
              <p className="mb-4">
                5.1. If you are a healthcare provider using our platform, you acknowledge that you are solely responsible for the medical care provided through our platform.
              </p>
              <p className="mb-4">
                5.2. You agree to comply with all applicable laws, regulations, and professional standards related to healthcare delivery, including licensure requirements, scope of practice limitations, and patient privacy laws.
              </p>
              <p className="mb-4">
                5.3. You represent that you hold all necessary licenses, certifications, and credentials required to provide healthcare services in the jurisdictions where you practice.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Intellectual Property Rights</h2>
              <p className="mb-4">
                6.1. All content, features, and functionality of our platform, including but not limited to text, graphics, logos, and software, are owned by DocGenie Global and are protected by intellectual property laws.
              </p>
              <p className="mb-4">
                6.2. We grant you a limited, non-exclusive, non-transferable license to use our platform for its intended purposes as outlined in these Terms.
              </p>
              <p className="mb-4">
                6.3. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use our intellectual property without our prior written consent.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Privacy and Data Protection</h2>
              <p className="mb-4">
                7.1. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="mb-4">
                7.2. For healthcare providers and organizations using our platform, a Business Associate Agreement (BAA) may be required to ensure HIPAA compliance.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                8.1. To the maximum extent permitted by law, DocGenie Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our platform.
              </p>
              <p className="mb-4">
                8.2. Our total liability for any claims arising from these Terms shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">9. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold harmless DocGenie Global, its affiliates, officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses arising from your use of our platform or violation of these Terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">10. Modifications to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes through our website or direct communication. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="mb-4">
                These Terms shall be governed by the laws of Singapore. Any disputes arising from these Terms shall be resolved through arbitration in Singapore in accordance with the rules of the Singapore International Arbitration Centre.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">12. Contact Information</h2>
              <p className="mb-4">
                If you have questions or concerns about these Terms, please contact us at:
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

export default TermsOfService;
