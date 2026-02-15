import React, { useState, useRef, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [{
  name: "Dr. Kaushal Madan",
  role: "Gastroenterologist",
  rating: 5,
  review: "With secure communication tools and AI-driven insights, managing chronic digestive conditions has become more streamlined. The platform's data analytics help me make informed decisions in real time.",
  avatar: "KM"
}, {
  name: "Dr. Yogesh Jain",
  role: "ENT",
  rating: 5,
  review: "DocGenie's telemedicine platform has revolutionized how I interact with my patients. The seamless video consultations and integrated EMR system have made remote care effortless and efficient.",
  avatar: "YJ"
}, {
  name: "Dr. Geeta K",
  role: "Oncologist",
  rating: 4,
  review: "Remote patient monitoring through DocGenie has enhanced treatment adherence among my patients. The intuitive platform allows me to track progress and adjust treatment plans seamlessly.",
  avatar: "GK"
}, {
  name: "Dr. Sandip Agnihotri",
  role: "Dermatologist",
  rating: 5,
  review: "The ease of scheduling and patient management has significantly improved my clinic's efficiency. Patients find it incredibly convenient to consult online without compromising on quality care.",
  avatar: "SA"
}, {
  name: "Dr. Meenakshi Jain",
  role: "ENT",
  rating: 5,
  review: "This platform has completely transformed the quality of experience I provide to my patients. The high-definition video consultations and seamless follow-up tools have made remote ENT care more personal and effective than I ever imagined possible.",
  avatar: "MJ"
}];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisible(3);
      } else if (window.innerWidth >= 768) {
        setVisible(2);
      } else {
        setVisible(1);
      }
    };
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const itemWidth = containerRef.current.offsetWidth / visible;
      setTranslateX(-activeIndex * itemWidth);
    }
  }, [activeIndex, visible]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setActiveIndex(prev => {
      if (prev <= 0) {
        return testimonials.length - visible;
      }
      return prev - 1;
    });
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setActiveIndex(prev => {
      if (prev >= testimonials.length - visible) {
        return 0;
      }
      return prev + 1;
    });
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main carousel container with smooth scrolling */}
      <div className="overflow-hidden" ref={containerRef}>
        <div 
          className="flex transition-all duration-500 ease-out" 
          style={{ 
            transform: `translateX(${translateX}px)`,
            scrollBehavior: 'smooth'
          }}
        >
          {testimonials.map((review, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 reveal animate-slide-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out h-full flex flex-col border border-white/20 hover:border-brand-blue/20 hover:-translate-y-2 hover:scale-[1.02]">
                {/* Quote icon with smooth animation */}
                <div className="mb-6 transition-all duration-300">
                  <Quote className="w-8 h-8 text-brand-blue/30 group-hover:text-brand-blue/50 group-hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* Review text with smooth transitions */}
                <p className="text-gray-700 leading-relaxed flex-grow mb-6 text-base transition-colors duration-300 group-hover:text-gray-800 text-center">
                  "{review.review}"
                </p>
                
                {/* Rating with smooth hover effects */}
                <div className="flex mb-6 transition-all duration-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 transition-all duration-200 hover:scale-110 ${
                        i < review.rating 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
                
                {/* Profile section with enhanced hover effects */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-14 h-14 min-w-[3.5rem] min-h-[3.5rem] rounded-2xl blue-gradient-br flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="font-bold text-white text-lg transition-all duration-300">{review.avatar}</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-brand-blue truncate">{review.name}</h4>
                    <p className="text-sm text-brand-blue font-medium transition-all duration-300 truncate">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced navigation controls with smooth interactions */}
      <div className="flex justify-center mt-10 gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handlePrev} 
          disabled={isTransitioning}
          className="w-12 h-12 rounded-2xl border-2 border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleNext} 
          disabled={isTransitioning}
          className="w-12 h-12 rounded-2xl border-2 border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
      
      {/* Enhanced pagination dots with smooth animations */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.max(1, testimonials.length - visible + 1) }).map((_, i) => (
          <button
            key={i}
            onClick={() => !isTransitioning && setActiveIndex(i)}
            disabled={isTransitioning}
            className={`h-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 disabled:cursor-not-allowed ${
              i === activeIndex 
                ? 'w-8 bg-brand-blue shadow-lg scale-125' 
                : 'w-3 bg-gray-300 hover:bg-gray-400 hover:w-4'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
