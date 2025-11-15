
import React from "react";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const TestimonialSection = () => {
  return (
    <section className="py-20 relative overflow-hidden scroll-smooth">
      {/* Enhanced background with smooth gradients */}
      <div className="absolute inset-0 blue-orange-gradient-br-5"></div>
      
      {/* Animated decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal animate-fade-in">
          {/* Enhanced badge with smooth hover effects */}
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-gray-100 hover:shadow-lg hover:bg-white transition-all duration-300 hover:scale-105">
            <div className="w-2 h-2 bg-brand-blue rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-brand-gray-dark tracking-wide uppercase">
              Customer Testimonials
            </span>
          </div>
          
          {/* Enhanced typography with smooth animations */}
          <h2 className="heading-3 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent transition-all duration-500 hover:scale-105">
            What Healthcare Professionals Say
          </h2>
          <p className="subtitle max-w-3xl mx-auto text-lg leading-relaxed transition-all duration-300 hover:text-gray-800">
            Discover how healthcare providers are transforming their practice with our 
            <span className="text-brand-blue font-medium hover:text-brand-blue/80 transition-colors duration-200"> trusted telemedicine platform</span>
          </p>
        </div>
        
        {/* Enhanced carousel container with smooth scroll behavior */}
        <div className="relative">
          {/* Enhanced background card with smooth transitions */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 -m-4 transition-all duration-500 hover:shadow-2xl hover:bg-white/70"></div>
          <div className="relative z-10 p-8">
            <TestimonialCarousel />
          </div>
        </div>
        
        {/* Enhanced trust indicators with smooth animations */}
        <div className="mt-16 text-center reveal animate-fade-in">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
            <div className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-all duration-200 hover:scale-105">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-all duration-200 hover:scale-105">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-all duration-200 hover:scale-105">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
