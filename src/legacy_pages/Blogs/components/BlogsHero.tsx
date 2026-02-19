
import React from 'react';
import { Search } from 'lucide-react';

interface BlogsHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const BlogsHero = ({ searchQuery, setSearchQuery }: BlogsHeroProps) => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
          Blogs & News
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in">
          Latest insights, updates, and stories from the world of telemedicine and healthcare technology.
        </p>
        
        <div className="relative max-w-xl mx-auto animate-fade-in">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200 sm:text-sm"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
