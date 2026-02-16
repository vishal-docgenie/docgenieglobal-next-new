
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface SolutionCTAProps {
  title: string;
  description: string;
}

const SolutionCTA = ({
  title,
  description
}: SolutionCTAProps) => {
  return (
    <section className="py-16 bg-brand-blue/10 rounded-3xl my-8">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="heading-3 mb-6">{title}</h2>
          <p className="text-lg text-gray-700 mb-8">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="primary-button">
                Get Started Today <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                Explore All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCTA;
