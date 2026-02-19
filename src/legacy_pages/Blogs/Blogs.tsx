import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import BlogsHero from './components/BlogsHero';
import FeaturedArticles from './components/FeaturedArticles';
import LatestNews from './components/LatestNews';
import AllArticles from './components/AllArticles';
import BlogCardSkeleton from './components/BlogCardSkeleton';
import { blogData } from './data/blogData';
import Head from "next/head";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Filter blogs based on search query
  const filteredBlogs = blogData.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter blogs based on category (for All Articles section)
  const categoryFilteredBlogs = activeCategory === 'All' 
    ? filteredBlogs 
    : filteredBlogs.filter(blog => blog.category === activeCategory);
  
  // Debug logs
  useEffect(() => {
    console.log('Total blogs in data:', blogData.length);
    console.log('Filtered by search:', filteredBlogs.length);
    console.log('Filtered by category:', categoryFilteredBlogs.length);
    console.log('Active category:', activeCategory);
  }, [filteredBlogs.length, categoryFilteredBlogs.length, activeCategory]);
  
  // Featured blogs (top 3)
  const featuredBlogs = blogData.filter(blog => blog.featured).slice(0, 3);
  
  // Latest blog (most recent by date)
  const latestBlog = [...blogData].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];

  return (
    <Layout>
      <Head>
        <title>DocGenie Blog | Insights on Telemedicine & Virtual Care</title>
        <meta 
          name="description" 
          content="Stay updated with the latest trends and insights in telemedicine, virtual care, and healthcare technology through DocGenie's expert blog articles." 
        />
        <link rel="canonical" href="https://www.docgenieglobal.com/blogs" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="DocGenie Blog | Insights on Telemedicine & Virtual Care" />
        <meta property="og:description" content="Stay updated with the latest trends and insights in telemedicine, virtual care, and healthcare technology through DocGenie's expert blog articles." />
        <meta property="og:image" content="https://www.docgenieglobal.com/lovable-uploads/31596225-1867-422e-b5bf-01644392c0fb.png" />
        <meta property="og:url" content="https://www.docgenieglobal.com/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DocGenie Global" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DocGenie Blog | Insights on Telemedicine & Virtual Care" />
        <meta name="twitter:description" content="Stay updated with the latest trends and insights in telemedicine, virtual care, and healthcare technology through DocGenie's expert blog articles." />
        <meta name="twitter:image" content="https://www.docgenieglobal.com/lovable-uploads/31596225-1867-422e-b5bf-01644392c0fb.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="telemedicine blog, healthcare technology, virtual care insights, digital health articles, telehealth trends, medical technology blog" />
        <meta name="author" content="DocGenie Global" />
      </Head>
      
      <BlogsHero 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="space-y-12">
            {/* Loading skeleton */}
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <BlogCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <FeaturedArticles featuredBlogs={featuredBlogs} />
            
            <div className="mt-16">
              <LatestNews latestBlog={latestBlog} />
            </div>
            
            <div id="all-articles" className="mt-16">
              <AllArticles 
                blogs={categoryFilteredBlogs} 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Blogs;
