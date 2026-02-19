
import React, { useState, memo } from 'react';
import { CalendarIcon, Clock } from 'lucide-react';
import Link from "next/link";
import { BlogPost } from '../types';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { generateSlug } from '../../BlogPost/hooks/useBlogData';
import LazyImage from '@/components/common/LazyImage';

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard = memo(({ blog }: BlogCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const blogSlug = blog.slug || generateSlug(blog.title);
  
  console.log(`BlogCard rendering: "${blog.title}" → slug: "${blogSlug}"`);

  // Function to determine image size based on screen width
  const getImageSize = () => {
    // These sizes correspond to our grid breakpoints
    if (window.innerWidth >= 1024) {
      return '400'; // lg screens (3 columns)
    } else if (window.innerWidth >= 768) {
      return '600'; // md screens (2 columns)
    }
    return '800'; // sm screens (1 column)
  };

  // Create responsive image URLs with sizing
  const getResponsiveImageUrl = (url: string) => {
    // If the URL is already optimized or from an external source that doesn't support our params,
    // just return it as is
    if (url.includes('unsplash.com')) {
      // For Unsplash images, we can use their sizing parameters
      return url.includes('?') 
        ? `${url}&w=${getImageSize()}&q=75` 
        : `${url}?w=${getImageSize()}&q=75`;
    }
    
    // For other images, return as is (can't modify external URLs)
    return url;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        {!imageLoaded && <Skeleton className="absolute inset-0" />}
        <LazyImage
          src={getResponsiveImageUrl(blog.image)}
          alt={blog.imageAlt || blog.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            "transform hover:scale-105"
          )}
          width={parseInt(getImageSize())}
          height={Math.floor(parseInt(getImageSize()) * 0.6)}
          componentName="BlogCard"
          imagePurpose="thumbnail"
          forceLazy={true}
          sizes={`(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute top-0 right-0 bg-brand-blue text-white px-2 py-1 text-xs font-medium m-2 rounded">
          {blog.category}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <div className="flex items-center text-gray-500 text-xs">
            <CalendarIcon className="w-3 h-3 text-gray-400 mr-1" />
            <span>{blog.date}</span>
          </div>
          <span className="text-gray-300 text-xs">•</span>
          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="w-3 h-3 text-gray-400 mr-1" />
            <span>{blog.readTime}</span>
          </div>
        </div>
        
        <Link 
          href={`/blogs/${blogSlug}`} 
          className="group flex-1"
          onClick={() => console.log(`BlogCard CLICKED: 📣 Navigating to /blogs/${blogSlug} for blog "${blog.title}"`)}
        >
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-300">
            {blog.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {blog.content}
        </p>
        
        <div className="flex flex-wrap gap-1 mt-auto">
          {blog.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-brand-blue text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

BlogCard.displayName = 'BlogCard';

export default BlogCard;
