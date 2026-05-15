
import React, { useState, useEffect } from "react";

const OurStorySection = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // Set the new image path to the uploaded image
    setImageSrc("/lovable-uploads/ae06b433-da1b-4356-810a-119494b3568c.png");
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 items-center">
      <div className="order-2 md:order-1 text-center">
        <h2 className="heading-3 mb-4 md:mb-6">Our Story</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Founded with a passion for bridging healthcare gaps, DocGenie Global has evolved
          into a trusted name in telemedicine. Our milestones reflect our commitment:
          countless successful integrations, a growing network of satisfied providers, and a
          platform that adapts to the ever-changing needs of healthcare. Every step forward
          is fueled by our dedication to you—our partners in care.
        </p>
      </div>
      <div className="order-1 md:order-2 mb-6 md:mb-0">
        <div className="aspect-video bg-white rounded-xl shadow-lg overflow-hidden relative h-full">
          <img 
            src={imageSrc || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"} 
            alt="DocGenie Global's telemedicine evolution timeline showing virtual healthcare technology transformation and integration milestones" 
            className="object-cover w-full h-full" 
            width={1200} 
            height={675} 
            loading="eager"
            onError={(e) => {
              console.error("Image failed to load");
              e.currentTarget.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="absolute inset-0 black-gradient-t-90 flex items-end">
            <div className="p-4 sm:p-6 text-white">
              <p className="font-medium mb-1 text-sm sm:text-base">DocGenie Global Healthcare</p>
              <p className="text-xs sm:text-sm text-white/80">Worldwide Telemedicine Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
