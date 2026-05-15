
import { ShieldCheck, Code2, Network } from "lucide-react";
// UserCheck, ClipboardCheck, Expand Icons
import { useIsMobile } from "@/hooks/use-mobile";

const TechnicalStandardsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-10 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <div className="lg:justify-self-end">
            <img src="/lovable-uploads/technical-standards.png" 
            alt="Enterprise-grade telemedicine platform dashboard showing performance metrics, security controls, and analytics for virtual healthcare delivery"
            className="rounded-2xl shadow-xl max-w-full h-auto" />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="heading-3 mb-4 sm:mb-6">Advanced Technical Standards</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 text-brand-blue" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold mb-1 text-left">Security & Compliance</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-left">Beyond HIPAA, we offer SOC2 Type II readiness, utilizing End-to-End Encryption (E2EE) for all video consultations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <Code2 className="h-3 w-3 sm:h-4 sm:w-4 text-brand-blue" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold mb-1 text-left">Dev-Friendly API</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-left">Our documentation is built for developers, supporting RESTful APIs and Webhooks for real-time data syncing.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <Network className="h-3 w-3 sm:h-4 sm:w-4 text-brand-blue" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold mb-1 text-left">Global Edge Network</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-left">Low-latency video powered by a global CDN, ensuring 99.9% Uptime even in low-bandwidth regions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalStandardsSection;