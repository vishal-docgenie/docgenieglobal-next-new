
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogCTA = () => {
  return (
    <section className="bg-brand-blue/10 rounded-3xl p-8 md:p-12 text-center reveal animate-fade-in">
      <h2 className="heading-3 mb-4">Ready to enhance your telehealth services?</h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Discover how DocGenie Global can help you deliver superior virtual care experiences to your patients.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="primary-button">
          <Link href="/contact">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
          <Link href="/pricing">
            View Pricing
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default BlogCTA;
