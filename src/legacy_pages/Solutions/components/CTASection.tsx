
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-brand-blue/10 rounded-3xl p-12 md:p-20 text-center reveal animate-fade-in">
          <h2 className="heading-2 mb-6">Ready to transform your practice?</h2>
          <p className="subtitle mb-8 max-w-2xl mx-auto text-gray-700">
            Join hundreds of healthcare providers who have revolutionized their patient care delivery with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="primary-button">Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-brand-blue/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
