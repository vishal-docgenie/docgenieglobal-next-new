
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogPost } from '../types';
import BlogCard from './BlogCard';

interface FeaturedArticlesProps {
  featuredBlogs: BlogPost[];
}

const FeaturedArticles = ({ featuredBlogs }: FeaturedArticlesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Determine number of visible slides based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 1, featuredBlogs.length - visibleSlides)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      Math.max(prevIndex - 1, 0)
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Featured Articles
        </h2>
        <a 
          href="#all-articles" 
          className="text-brand-blue hover:text-brand-blue/80 flex items-center text-sm font-medium transition-colors duration-300"
        >
          View all articles
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
          >
            {featuredBlogs.map((blog) => (
              <div 
                key={blog.id} 
                className={`flex-shrink-0 px-2`}
                style={{ width: `${100 / visibleSlides}%` }}
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Only show if we have more blogs than visible slides */}
        {featuredBlogs.length > visibleSlides && (
          <>
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute top-1/2 left-0 -ml-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex >= featuredBlogs.length - visibleSlides}
              className="absolute top-1/2 right-0 -mr-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedArticles;
