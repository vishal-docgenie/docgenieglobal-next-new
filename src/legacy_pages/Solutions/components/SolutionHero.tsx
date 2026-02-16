
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import LazyImage from "@/components/common/LazyImage";

interface SolutionHeroProps {
  title: string;
  description: string;
  image: string;
  altText: string;
}

const SolutionHero = ({ title, description, image, altText }: SolutionHeroProps) => {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="heading-2 mb-6">{title}</h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <Button className="primary-button">
                  Request Demo <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:justify-self-end reveal">
            <LazyImage
              src={image}
              alt={altText}
              className="rounded-2xl shadow-xl max-w-full h-auto animate-float"
              width={800}
              height={500}
              componentName="SolutionHero"
              imagePurpose="hero"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={(e) => {
                console.error("Image failed to load");
                e.currentTarget.src = "/lovable-uploads/7eea6038-175c-4722-aa75-a6aaeba42a54.png";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;
