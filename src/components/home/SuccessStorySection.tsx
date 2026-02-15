
import React from "react";

const SuccessStorySection = () => {
  return (
    <section className="py-20 bg-brand-blue/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 reveal animate-slide-right">
            <div className="rounded-2xl overflow-hidden shadow-xl relative">
              <img 
                src="/lovable-uploads/53f555e4-b40f-4d9d-947d-bcee6add2868.png" 
                alt="Dr. Sophia Müller, a telemedicine physician from Germany, using DocGenie platform for international virtual healthcare consultations" 
                className="w-full h-[400px] object-cover"
                width={800}
                height={400}
                loading="eager"
                onError={(e) => {
                  console.error("Image failed to load");
                  e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1974&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 reveal animate-slide-left">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-blue/20 text-sm font-medium text-brand-gray-dark">
              Success Story
            </div>
            <h2 className="heading-2 mb-6">Hear from our customers</h2>
            <div className="mb-6 text-xl italic text-gray-700 border-l-4 border-brand-blue pl-4">
              "I appreciate the security and compliance measures taken by DocGenie Global. The platform ensures data privacy while allowing smooth doctor-patient interactions across borders."
            </div>
            <div className="flex items-center md:justify-start justify-center">
              <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
                <div className="w-full h-full bg-brand-blue flex items-center justify-center text-white font-bold">
                  SM
                </div>
              </div>
              <div>
                <p className="font-medium">Dr. Sophia Müller</p>
                <p className="text-gray-600 text-sm">General Physician, Germany</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;
