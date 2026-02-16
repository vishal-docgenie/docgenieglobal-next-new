
import React from "react";
import Link from "next/link";

interface Solution {
  title: string;
  path: string;
}

interface RelatedSolutionsProps {
  currentSolutionPath: string;
}

const RelatedSolutions = ({ currentSolutionPath }: RelatedSolutionsProps) => {
  // All available solutions
  const allSolutions: Solution[] = [
    {
      title: "White Label Telemedicine",
      path: "/solutions/white-label-telemedicine"
    },
    {
      title: "HIPAA Compliant Healthcare",
      path: "/solutions/hipaa-compliant-healthcare"
    },
    {
      title: "Virtual Care Features",
      path: "/solutions/virtual-care-features"
    },
    {
      title: "Chronic Care Management",
      path: "/solutions/chronic-care-management"
    },
    {
      title: "AI-Powered Capabilities",
      path: "/solutions/ai-capabilities"
    }
  ];

  // Filter out the current solution
  const relatedSolutions = allSolutions.filter(solution => solution.path !== currentSolutionPath);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-3 mb-6 text-center">Explore Our Other Telemedicine Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {relatedSolutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.path}
                className="p-4 border border-gray-200 rounded-lg hover:border-brand-blue hover:bg-brand-blue/5 transition-all flex items-center"
              >
                <span className="text-brand-blue font-medium">{solution.title}</span>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/solutions" className="text-brand-blue hover:underline font-medium inline-flex items-center">
              View All Telemedicine Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedSolutions;
