
import React, { Suspense, useEffect, useState } from 'react';
import { BlogPost } from '../types';
import BlogCard from './BlogCard';
import BlogCardSkeleton from './BlogCardSkeleton';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AllArticlesProps {
  blogs: BlogPost[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = ['All', 'Telemedicine', 'Healthcare', 'Technology', 'Patient Care', 'Mental Health'];

const AllArticles = ({ blogs, activeCategory, setActiveCategory }: AllArticlesProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  
  // Calculate pagination values
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  
  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Add debug logging to verify data
  useEffect(() => {
    console.log('AllArticles - blogs:', blogs);
    console.log('AllArticles - activeCategory:', activeCategory);
    console.log('AllArticles - currentPage:', currentPage);
    console.log('AllArticles - displayingBlogs:', currentBlogs);
  }, [blogs, activeCategory, currentPage, currentBlogs]);

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        All Articles
      </h2>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
              activeCategory === category
                ? 'bg-brand-blue text-white shadow-sm'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="min-h-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Suspense fallback={Array(6).fill(0).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}>
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12 text-gray-500">
                No articles found for this category.
              </div>
            )}
          </Suspense>
        </div>
        
        {/* Pagination controls */}
        {blogs.length > blogsPerPage && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={cn(
                "p-2 rounded-full",
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              )}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="text-sm text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </div>
            
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={cn(
                "p-2 rounded-full",
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              )}
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllArticles;
