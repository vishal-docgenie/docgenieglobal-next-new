
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-brand-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-3 mb-4">Join Us in Transforming Healthcare</h2>
          <p className="subtitle mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner with us, join our team, or learn more about our mission, we'd love to hear from you.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="primary-button">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
