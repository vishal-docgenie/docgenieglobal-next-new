
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaSection = () => (
  <div className="max-w-4xl mx-auto mt-20 blue-orange-gradient-r-20 p-10 rounded-2xl text-center">
    <h2 className="heading-3 mb-4">Ready to transform your healthcare practice?</h2>
    <p className="subtitle mb-8 max-w-2xl mx-auto">
      Get started with DocGenie Global today and provide your patients with the modern telehealth experience they expect.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link href="/contact">
        <Button className="primary-button">Talk to Our Team</Button>
      </Link>
      <Link href="/contact">
        <Button variant="outline" className="bg-white">
          Schedule a Demo
        </Button>
      </Link>
    </div>
  </div>
);

export default CtaSection;
