
import React from "react";
import { MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Testimonials = () => {
  const isMobile = useIsMobile();
  
  const testimonials = [
    {
      quote: "The white label telemedicine platform allowed us to expand our reach by 40% while maintaining our established brand identity. Patients trust our virtual services because they recognize our brand.",
      author: "Dr. Sarah Johnson",
      role: "Medical Director",
      organization: "Westside Family Clinic"
    },
    {
      quote: "Implementing DocGenie's white label solution was seamless. Our patients appreciate the consistent experience between in-person and virtual visits, which has been crucial for building trust.",
      author: "Dr. Michael Chen",
      role: "Chief Medical Officer",
      organization: "Integrated Health Partners"
    },
    {
      quote: "As a hospital network, brand consistency is vital. This platform allowed us to offer telemedicine services under our trusted brand name, resulting in 30% higher adoption rates compared to generic solutions.",
      author: "Amanda Rodriguez",
      role: "VP of Digital Transformation",
      organization: "Central Regional Medical Center"
    }
  ];

  return (
    <div className="py-16 bg-brand-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">What Healthcare Providers Are Saying</h2>
          <p className="text-lg text-gray-700">
            Discover how clinics, doctors, and hospitals have transformed their practice with our white label telemedicine solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md relative">
              <div className={`absolute -top-4 ${isMobile ? 'left-1/2 -translate-x-1/2' : 'left-8'} h-8 w-8 bg-brand-blue rounded-full flex items-center justify-center`}>
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-brand-blue">{testimonial.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
