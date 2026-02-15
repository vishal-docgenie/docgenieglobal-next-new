
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center reveal animate-fade-in">
          <h2 className="heading-2 mb-6">Ready to explore our comprehensive telemedicine solutions?</h2>
          <p className="subtitle mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare providers who have revolutionized their patient care with our comprehensive telemedicine platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="primary-button text-wrap">
              <Link href="/solutions">
                Explore Telemedicine Solutions
              </Link>
            </Button>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 text-wrap">
                <Link href="/pricing">
                    View Virtual Care Pricing Options
                </Link>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
