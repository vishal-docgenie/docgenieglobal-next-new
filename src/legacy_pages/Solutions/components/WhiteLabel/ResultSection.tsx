
import { TrendingDown, Settings2, Globe } from "lucide-react";
// UserCheck, ClipboardCheck, Expand Icons
import { useIsMobile } from "@/hooks/use-mobile";

const ResultSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-3 mb-6">Real-World Results for Healthcare Vendors</h2>
            <p className="text-lg text-gray-700 mb-8">
              Don't just take our word for it. Our white-label partners have seen measurable growth:
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <TrendingDown className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">40% Decrease in Patient No-Shows</h3>
                  <p className="text-gray-600 text-left">
                    Patient no-shows are a huge drain on a care provider’s resources and revenues. Swapping just 50% of follow-up visits to video pushes the aggregate no-show rate down by ~13 percentage points.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <Settings2 className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">Reduction in Admin Overhead</h3>
                  <p className="text-gray-600 text-left">
                    Save 200+ monthly hours of operational and manual workloads by digitising and automating workflows.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                  <Globe className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-left">Global Scalability</h3>
                  <p className="text-gray-600 text-left">
                    Deploy localized versions with multi-currency and multi-language support in days, not months.
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
