
import React from 'react';
import { CalendarIcon, Clock } from 'lucide-react';
import { BlogPost } from '../../Blogs/types';

interface BlogHeaderProps {
  blog: BlogPost;
}

const BlogHeader = ({ blog }: BlogHeaderProps) => {
  return (
    <div className="relative">
      <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 relative">
        <img 
          src={blog.image} 
          alt={blog.imageAlt || blog.title}
          className="w-full h-full object-cover" 
          loading="eager" // Important for LCP (Largest Contentful Paint)
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="relative -mt-32 bg-white rounded-t-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto text-left">
          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-left">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 text-gray-400 mr-1" />
              <span className="text-gray-500">{blog.date}</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-gray-400 mr-1" />
              <span className="text-gray-500">{blog.readTime}</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <span className="text-brand-blue font-medium">{blog.category}</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug tracking-tight text-left">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.tags.map((tag, index) => (
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
    </div>
  );
};

export default BlogHeader;
