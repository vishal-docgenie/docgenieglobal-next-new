
import { TrendingDown, Settings2, Globe } from "lucide-react";

const ResultSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-3 mb-6">Operational Benefits for Healthcare Vendors</h2>
            <p className="text-lg text-gray-700 mb-8">
              A branded, configurable virtual-care platform is designed to help healthcare organisations streamline how they deliver and coordinate care:
            </p>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <TrendingDown className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">Support Consistent Patient Communication</h3>
                  <p className="text-gray-600 text-left">
                    Move suitable follow-up and routine visits to video and use branded reminders to support consistent patient communication and reduce missed appointments.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <Settings2 className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">Streamline Administrative Workflows</h3>
                  <p className="text-gray-600 text-left">
                    Digitise and automate scheduling, intake, and documentation workflows to reduce manual coordination for clinical and admin teams.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <Globe className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">Improve Access to Branded Virtual Care</h3>
                  <p className="text-gray-600 text-left">
                    Deploy localised versions with multi-currency and multi-language support to extend branded virtual care to new patient populations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:justify-self-end">
            <img src="/lovable-uploads/healthcare-results.png" 
            alt="Enterprise-grade telemedicine platform dashboard showing performance metrics, security controls, and analytics for virtual healthcare delivery"
            className="rounded-2xl shadow-xl max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
