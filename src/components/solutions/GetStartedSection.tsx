
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Palette, GitMerge, Rocket } from "lucide-react";

const GetStartedSection = () => {
  const steps = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Consultation",
      description: "Start with a detailed assessment of your specific needs and goals. We work closely with you to identify the best way to enhance your telemedicine offerings.",
      step: "01",
      color: "bg-brand-blue"
    },
    {
      icon: <Palette className="h-8 w-8 text-white" />,
      title: "Customization",
      description: "Tailor our telemedicine platform to reflect your brand identity, ensuring it aligns perfectly with your operational requirements and aesthetic preferences.",
      step: "02",
      color: "bg-brand-orange"
    },
    {
      icon: <GitMerge className="h-8 w-8 text-white" />,
      title: "Integration",
      description: "Effortlessly integrate with your existing EMRs, payment systems, and workflows, enabling a smooth transition without disruptions.",
      step: "03",
      color: "bg-brand-blue"
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Launch & Support",
      description: "Once live, our dedicated support team ensures a smooth launch. We provide ongoing technical support, upgrades, and troubleshooting to keep your platform running at peak performance.",
      step: "04",
      color: "bg-brand-orange"
    }
  ];

  return (
    <section className="py-20 bg-white" id="get-started">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal animate-fade-in">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-blue/20 text-sm font-medium text-brand-gray-dark">
            Implementation Process
          </div>
          <h2 className="heading-2 mb-4">Get started in 4 easy steps</h2>
          <p className="subtitle">
            From concept to launch, we make implementing telemedicine simple and streamlined
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal animate-fade-in reveal-delay-100">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group reveal animate-slide-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={`absolute top-0 right-0 w-16 h-16 flex items-center justify-center ${step.color} text-white font-bold text-xl`}>
                {step.step}
              </div>
              <div className="p-8 pt-16">
                <div className={`w-16 h-16 rounded-xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              <div className={`h-2 w-full absolute bottom-0 ${step.color}`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal animate-fade-in reveal-delay-200">
          <div className="relative inline-block">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Implementation timeline" 
              className="rounded-xl shadow-xl max-w-full mx-auto md:max-w-2xl lg:max-w-3xl"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Launch Quickly</p>
                  <p className="text-sm text-gray-600">Deploy in weeks, not months</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/contact">
            <Button className="primary-button">
              Begin Your Journey <Rocket className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
