
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="blue-white-gradient-b-30 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-blue/20 text-sm font-medium text-brand-gray-dark reveal animate-slide-down">
            About Us
          </div>
          <h1 className="heading-1 mb-6 reveal animate-slide-down">
            Revolutionizing <span className="text-brand-blue">Healthcare</span> Through Technology
          </h1>
          <p className="subtitle mb-8 max-w-2xl mx-auto reveal animate-slide-down reveal-delay-100 text-center">
            Our end-to-end telehealth solution delivers everything clinics and doctors need to provide exceptional virtual care experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal animate-slide-down reveal-delay-200">
            <Button className="primary-button">Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              <Link href="/contact"></Link>
            </Button>
            <Button variant="outline" className="bg-white">
              <Link href="/solutions">
                Explore Our Solutions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
