
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return <section className="blue-white-gradient-b-30 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pr-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-blue/20 text-sm font-medium text-brand-gray-dark reveal animate-slide-down">
              The Complete Virtual Care Solution
            </div>
            <h1 className="heading-1 mb-6 reveal animate-slide-down text-center md:text-left">
              <span className="text-black">Cutting-Edge</span> <span className="text-brand-blue">Telemedicine Platform</span> for Care Providers
            </h1>
            <p className="subtitle mb-8 max-w-lg reveal animate-slide-down reveal-delay-100 text-center md:text-left mx-auto md:mx-0">
              The most comprehensive virtual care platform for clinics and doctors. HIPAA-compliant, fully customizable, and designed to enhance patient engagement.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start reveal animate-slide-down reveal-delay-200">
              <Button className="primary-button">Start Your Virtual Care Journey <ArrowRight className="ml-2 h-4 w-4" />
                <Link href="/contact"></Link>
              </Button>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                <Link href="/solutions">
                    Explore Telemedicine Features
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative reveal animate-slide-left">
            <div className={`w-full ${isMobile ? 'h-[450px]' : 'h-[400px]'} md:h-[500px] rounded-2xl overflow-hidden shadow-2xl relative glass-card`}>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-light opacity-10 rounded-lg"></div>
              <LazyImage 
                src="/lovable-uploads/ad2d91b3-b21a-459a-abd0-7a78c4e7a382.png" 
                alt="Doctor conducting telemedicine consultation on smartphone with a patient, demonstrating the DocGenie white label platform interface" 
                className={`w-full h-full object-cover ${isMobile ? 'scale-180' : ''}`}
                width={1200}
                height={800}
                componentName="HeroSection"
                imagePurpose="primary"
                forceEager={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  console.error("Image failed to load");
                  e.currentTarget.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop";
                }}
              />
              <div className="absolute top-6 right-6 glass-card rounded-lg p-3 shadow-lg animate-float max-w-full">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">HD</span>
                </div>
              </div>
              <div className={`absolute ${isMobile ? 'top-1/2' : 'top-1/4'} left-6 glass-card rounded-lg p-3 shadow-lg animate-float max-w-[90%]`} style={{
              animationDelay: "1s"
            }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Secure Connection</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card rounded-lg p-4 shadow-lg animate-float max-w-[90%]" style={{
            animationDelay: "0.5s"
          }}>
              <div className="flex items-center space-x-3">
                <Clock className="text-brand-blue h-5 w-5" />
                <div>
                  <p className="text-xs text-gray-600">Launch in</p>
                  <p className="text-sm font-medium">2-3 weeks</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 glass-card rounded-lg p-4 shadow-lg animate-float max-w-[90%]" style={{
            animationDelay: "1.5s"
          }}>
              <div className="flex items-center space-x-3">
                <Shield className="text-brand-blue h-5 w-5" />
                <div>
                  <p className="text-xs text-gray-600">HIPAA Compliant</p>
                  <p className="text-sm font-medium">End-to-end secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
