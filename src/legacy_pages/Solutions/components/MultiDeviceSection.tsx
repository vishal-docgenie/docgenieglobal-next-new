
import React from "react";

const MultiDeviceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="heading-3 mb-6">Available Across All Devices</h2>
          <p className="text-lg text-gray-700">
            Provide seamless healthcare experiences across all platforms. Our telemedicine solution works perfectly on desktop, tablet, and mobile devices, ensuring accessibility for all patients and providers.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/10 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/3a19478a-4a42-4f4e-9feb-2d61eec53579.png" 
                  alt="Desktop version of DocGenie telemedicine platform showing doctor-patient video consultation interface"
                  className="mx-auto h-56 object-contain" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desktop</h3>
              <p className="text-gray-600">Full-featured experience for healthcare providers with comprehensive dashboard and patient management tools.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/a4fc4722-9d73-48ab-9cba-5b95e4e6344c.png" 
                  alt="Tablet version of DocGenie telemedicine platform showing healthcare provider scheduling virtual appointments"
                  className="mx-auto h-56 object-contain" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tablet</h3>
              <p className="text-gray-600">Optimized for clinical settings with intuitive touch controls and easy access to patient records during consultations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/69e8d276-bdc6-4d11-81d5-71aaeb7bd2da.png" 
                  alt="Mobile version of DocGenie telemedicine app showing patient connecting with doctor through secure virtual care platform"
                  className="mx-auto h-56 object-contain" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile</h3>
              <p className="text-gray-600">Convenient access for patients on-the-go with streamlined telehealth consultation features and appointment management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiDeviceSection;
