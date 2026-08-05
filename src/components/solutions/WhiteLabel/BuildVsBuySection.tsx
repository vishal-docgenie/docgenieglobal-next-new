import React from "react";

// Machine-readable build-vs-buy comparison. Targets commercial "white label vs
// custom development" / build-vs-buy intent that the existing generic-apps table
// does not cover. No cost figures or launch-time guarantees are asserted.
const comparisonRows: { dimension: string; whiteLabel: string; custom: string }[] = [
  {
    dimension: "Time to launch",
    whiteLabel: "Weeks — configure branding, workflows, and integrations on an existing platform",
    custom: "Many months to over a year of design, development, and compliance work before go-live",
  },
  {
    dimension: "Development effort",
    whiteLabel: "Configuration rather than ground-up engineering",
    custom: "Full software build, testing, and security hardening from scratch",
  },
  {
    dimension: "Branding control",
    whiteLabel: "Your logo, colours, custom domain, and branded patient communications",
    custom: "Full control, but every branded element must be designed and built",
  },
  {
    dimension: "Workflow configuration",
    whiteLabel: "Configurable clinical and admin workflows out of the box",
    custom: "Workflows defined and coded to your specification",
  },
  {
    dimension: "Maintenance",
    whiteLabel: "Handled by the platform provider as part of the service",
    custom: "Your responsibility — ongoing bug fixes, patches, and upkeep",
  },
  {
    dimension: "Infrastructure responsibility",
    whiteLabel: "Hosting, scaling, and uptime managed by the provider",
    custom: "You provision, secure, and operate the infrastructure",
  },
  {
    dimension: "Integration effort",
    whiteLabel: "EHR/EMR, payment, and third-party integrations via an existing API ecosystem",
    custom: "Each integration designed, built, and maintained in-house",
  },
  {
    dimension: "Product updates",
    whiteLabel: "Delivered continuously by the provider",
    custom: "Planned, built, and released by your own team",
  },
  {
    dimension: "Internal technical resource needs",
    whiteLabel: "Minimal — no dedicated engineering team required to operate",
    custom: "Sustained engineering, QA, security, and DevOps capacity",
  },
  {
    dimension: "Scalability",
    whiteLabel: "Scales with provider, location, and patient volume on managed infrastructure",
    custom: "Scales only as far as your architecture and team can support",
  },
];

const BuildVsBuySection = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="build-vs-buy-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 id="build-vs-buy-heading" className="heading-3 mb-4">
            White Label vs Custom Development
          </h2>
          <p className="text-lg text-gray-700">
            How licensing a white label telemedicine platform compares with building one in-house,
            so you can weigh the build-vs-buy decision for your organisation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="p-4 text-left w-1/4">Consideration</th>
                <th className="p-4 text-left w-2/5">White Label Platform</th>
                <th className="p-4 text-left w-2/5">Custom In-House Development</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.dimension}
                  className={`border-b border-gray-200 ${index % 2 === 1 ? "bg-gray-50" : ""}`}
                >
                  <td className="p-4 font-medium align-top">{row.dimension}</td>
                  <td className="p-4 align-top bg-brand-blue/10">{row.whiteLabel}</td>
                  <td className="p-4 align-top text-gray-600">{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BuildVsBuySection;
