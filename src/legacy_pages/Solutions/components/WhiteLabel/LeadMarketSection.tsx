import { useIsMobile } from "@/hooks/use-mobile";

const LeadMarketSection = () => {
    const isMobile = useIsMobile();

    return (
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-3 mb-6">Why DocGenie Leads the White Label Market</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-3/4 border-collapse sm:table-text-xs mx-auto">
              <thead>
                <tr className="bg-brand-blue text-white">
                  <th className="p-4 text-left w-1/5">Feature</th>
                  <th className="p-4 text-center w-1/3">Generic Telehealth Apps</th>
                  <th className="p-4 text-center w-1/3">DocGenie White Label</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Brand Identity</td>
                  <td className="p-4 text-center">Third-party branding visible</td>
                  <td className="p-4 text-center bg-brand-blue/30">100% Brand Sovereignty (Logo, URL, Mail)</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-medium">Data Architecture</td>
                  <td className="p-4 text-center">Shared database models</td>
                  <td className="p-4 text-center bg-brand-blue/30">Siloed & Secure Architecture in compliance with healthcare regulations</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Integration Speed</td>
                  <td className="p-4 text-center">3 – 6 Months</td>
                  <td className="p-4 text-center bg-brand-blue/30">4 – 6 Weeks (Rapid Deployment)</td>
                </tr>
                {/* <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-medium">Interoperability</td>
                  <td className="p-4 text-center">Limited API Access</td>
                  <td className="p-4 text-center bg-brand-blue/30">Full HL7 FHIR & API Ecosystem</td>
                </tr> */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Customization</td>
                  <td className="p-4 text-center">Color & Logo only</td>
                  <td className="p-4 text-center bg-brand-blue/30">Full CSS Control & Custom Workflows</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
};

export default LeadMarketSection;