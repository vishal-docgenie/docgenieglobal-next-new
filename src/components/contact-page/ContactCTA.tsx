import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <div className="mt-20 text-center reveal animate-fade-in">
      <h2 className="heading-3 mb-4">Ready to get started?</h2>
      <p className="subtitle mb-8 max-w-2xl mx-auto">
        Contact us today to learn more about how DocGenie Global can transform your healthcare practice.
      </p>
      <Link href="/contact">
        <Button className="primary-button">Schedule a Consultation</Button>
      </Link>
    </div>
  );
};

export default ContactCTA;
