
import React from "react";
import { Zap, Lock, Activity, Layers, RefreshCw, GitMerge } from "lucide-react";

const TechnicalFeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-brand-blue mb-4" />,
      title: "High-Performance",
      description: "Optimized for speed and reliability even with thousands of concurrent users"
    },
    {
      icon: <Lock className="h-10 w-10 text-brand-blue mb-4" />,
      title: "HIPAA Compliant",
      description: "End-to-end encryption and secure data storage to protect patient information"
    },
    {
      icon: <Activity className="h-10 w-10 text-brand-blue mb-4" />,
      title: "Real-Time Communication",
      description: "High-quality video and audio with minimal latency for effective consultations"
    },
    {
      icon: <Layers className="h-10 w-10 text-brand-blue mb-4" />,
      title: "Scalable Architecture",
      description: "Built to scale with your practice from single providers to enterprise healthcare"
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-brand-blue mb-4" />,
      title: "Seamless Integrations",
      description: "Connect with your existing EHR systems and healthcare workflows"
    },
    {
      icon: <GitMerge className="h-10 w-10 text-brand-blue mb-4" />,
      title: "API-First Design",
      description: "Extensive API documentation for custom integration with your systems"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Technical Excellence</h2>
          <p className="text-lg text-gray-700">
            Built with cutting-edge technology to ensure the highest levels of performance, security, and reliability for your healthcare practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <img 
            src="/lovable-uploads/38daadaa-d8f9-4b53-8636-d2c3c6f37cca.png" 
            alt="Technical architecture diagram of DocGenie telemedicine platform showing secure cloud infrastructure, HIPAA compliance layers, and integration capabilities" 
            className="mx-auto max-w-full rounded-xl shadow-lg"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnicalFeaturesSection;
