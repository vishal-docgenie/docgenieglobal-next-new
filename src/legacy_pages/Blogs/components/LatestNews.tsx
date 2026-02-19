
import React, { useState } from 'react';
import { CalendarIcon, Clock, Globe } from 'lucide-react';
import { BlogPost } from '../types';
import Link from "next/link";
import { cn } from '@/lib/utils';
import { generateSlug } from '../../BlogPost/hooks/useBlogData';
import { Skeleton } from '@/components/ui/skeleton';

interface LatestNewsProps {
  latestBlog: BlogPost;
}

const LatestNews = ({ latestBlog }: LatestNewsProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // For the DocGenie global announcement article
  const announcementArticle = {
    title: "DocGenie's state of the art platform now available globally for clinics and hospitals",
    date: "October 12, 2024",
    readTime: "4 min",
    content: "DocGenie Global has announced the worldwide availability of its state-of-the-art telemedicine platform designed specifically for clinics and hospitals. The platform offers a comprehensive suite of virtual care tools including white-label branding, HIPAA-compliant video consultations, secure messaging, and seamless EHR integration. Healthcare providers worldwide can now leverage DocGenie's technology to expand their reach and improve patient outcomes through accessible virtual care.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    tags: ["announcement", "global launch", "telemedicine", "healthcare technology", "virtual care"],
    externalUrl: "https://world.einnews.com/pr_news/uk/790287413/docgenie-s-state-of-the-art-platform-now-available-globally-for-clinics-and-hospitals"
  };
  
  // Function to get appropriate image size based on screen width
  const getImageSize = () => {
    return window.innerWidth < 768 ? '800' : '600';
  };

  // Create responsive image URL with sizing
  const getResponsiveImageUrl = (url: string) => {
    // If the URL is already optimized or from an external source that doesn't support our params,
    // just return it as is
    if (url.includes('unsplash.com')) {
      // For Unsplash images, we can use their sizing parameters
      return url.includes('?') 
        ? `${url}&w=${getImageSize()}&q=80` 
        : `${url}?w=${getImageSize()}&q=80`;
    }
    
    // For other images, return as is (can't modify external URLs)
    return url;
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="mr-2 text-brand-blue">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-xl font-medium text-brand-blue">Latest News</h2>
      </div>

      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="md:flex">
          <div className="md:w-1/3 relative">
            {!imageLoaded && (
              <Skeleton className="w-full h-64 md:h-full" />
            )}
            <img
              src={getResponsiveImageUrl(announcementArticle.image)}
              alt={announcementArticle.title}
              className={cn(
                "w-full h-64 md:h-full object-cover transition-opacity duration-500",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              width={getImageSize()}
              height={getImageSize()}
            />
          </div>
          <div className="md:w-2/3 p-6 md:p-8">
            <div className="flex flex-wrap items-center space-x-2 space-y-2 sm:space-y-0 mb-3">
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>{announcementArticle.date}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm ml-0 sm:ml-4">
                <Clock className="w-4 h-4 mr-1" />
                <span>{announcementArticle.readTime} read</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm ml-0 sm:ml-4">
                <Globe className="w-4 h-4 mr-1" />
                <span>Global Release</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {announcementArticle.title}
            </h3>
            
            <p className="text-gray-600 mb-6 line-clamp-3 md:line-clamp-4">
              {announcementArticle.content}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {announcementArticle.tags.map((tag, index) => (
                <span key={index} className="inline-block bg-brand-blue rounded-full px-3 py-1 text-sm font-semibold text-white">
                  {tag}
                </span>
              ))}
            </div>
            
            <a 
              href={announcementArticle.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue/90 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
              )}
            >
              Read Full Announcement
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
