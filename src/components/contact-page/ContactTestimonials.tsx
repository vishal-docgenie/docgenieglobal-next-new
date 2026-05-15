import React from "react";

const testimonials = [
  {
    initials: "JM",
    name: "Dr. James Miller",
    role: "Primary Care Physician",
    quote:
      "DocGenie's white label telemedicine platform has completely transformed how we deliver care. Our patients love the convenience and our staff appreciates the intuitive interface.",
  },
  {
    initials: "SR",
    name: "Sarah Richardson",
    role: "Clinic Director",
    quote:
      "The implementation process was seamless, and the support team has been incredible. Having a virtual care platform that aligns with our brand has strengthened our patient relationships.",
  },
  {
    initials: "TP",
    name: "Dr. Thomas Park",
    role: "Pediatric Specialist",
    quote:
      "As a HIPAA-compliant telemedicine solution, DocGenie gives us peace of mind while providing a superior experience for our young patients and their families.",
  },
];

const ContactTestimonials = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        What Healthcare Providers Say About Our Telemedicine Platform
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.initials} className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.initials}
              </div>
              <div className="ml-4">
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700">“{testimonial.quote}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactTestimonials;
