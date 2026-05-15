
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PlatformOverviewSection = () => {
  // Solution links with descriptions for the overview section
  const solutionLinks = [
    {
      title: "White Label Telemedicine",
      description: "DocGenie provides a comprehensive telemedicine solution that can be fully customized to match your brand identity and specific healthcare needs.",
      path: "/solutions/white-label-telemedicine"
    },
    {
      title: "HIPAA Compliant Healthcare",
      description: "Our platform ensures complete data security and regulatory compliance, giving you and your patients peace of mind with every virtual interaction.",
      path: "/solutions/hipaa-compliant-healthcare"
    },
    {
      title: "Virtual Care Features",
      description: "From video consultations to secure messaging and digital prescriptions, our platform offers all the tools needed for comprehensive virtual care.",
      path: "/solutions/virtual-care-features"
    },
    {
      title: "Chronic Care Management",
      description: "Specialized tools and features designed to help providers effectively manage patients with chronic conditions through ongoing virtual care.",
      path: "/solutions/chronic-care-management"
    },
    {
      title: "AI-Powered Capabilities",
      description: "Advanced artificial intelligence features that enhance diagnostic capabilities, streamline workflows, and improve patient outcomes.",
      path: "/solutions/ai-capabilities"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/lovable-uploads/0ce55f94-e4dd-469d-9285-c94bef0a4ee6.png"
              alt="Comprehensive telemedicine platform dashboard showing patient management, virtual consultations, and appointment scheduling modules for healthcare providers"
              className="rounded-2xl shadow-lg w-full h-auto"
              width={600}
              height={400}
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="heading-3 mb-6">Complete Telemedicine Platform Solution</h2>
            <p className="text-lg text-gray-700 mb-6">
              DocGenie provides a comprehensive telemedicine solution that can be fully customized to match your brand identity and specific healthcare needs. From virtual consultations to patient management, we offer all the tools required for modern healthcare delivery.
            </p>
            
            <div className="space-y-4 mb-6">
              {solutionLinks.map((solution, index) => (
                <Link 
                  key={index} 
                  href={solution.path}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-brand-blue hover:bg-brand-blue/5 transition-all"
                >
                  <h3 className="font-semibold text-brand-blue mb-1">{solution.title}</h3>
                  <p className="text-sm text-gray-600">{solution.description}</p>
                </Link>
              ))}
            </div>
            
            <Link href="/solutions/white-label-telemedicine">
              <Button className="primary-button">Learn More About White Label Solutions</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverviewSection;
