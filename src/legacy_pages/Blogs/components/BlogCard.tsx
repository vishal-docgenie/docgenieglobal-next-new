import React, { useState, useEffect, memo } from 'react';
import { CalendarIcon, Clock } from 'lucide-react';
import Link from "next/link";
import { BlogPost } from '../types';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { generateSlug } from '../../BlogPost/hooks/useBlogData';

interface BlogCardProps {
  blog: BlogPost;
}

// Default image size used during server-side rendering and as the initial
// client value. Picks the largest size so SSR-rendered cards still look
// reasonable on every breakpoint until the client effect runs.
const DEFAULT_IMAGE_SIZE = '800';

// Resolve image size based on viewport width. Browser-only.
const computeImageSize = (): string => {
  if (window.innerWidth >= 1024) return '400'; // lg screens (3 columns)
  if (window.innerWidth >= 768) return '600';  // md screens (2 columns)
  return '800';                                 // sm screens (1 column)
};

const BlogCard = memo(({ blog }: BlogCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  // SSR-safe: start with a sensible default that works without `window`.
  // After mount, swap to the actual viewport-based size.
  const [imageSize, setImageSize] = useState<string>(DEFAULT_IMAGE_SIZE);

  useEffect(() => {
    const updateSize = () => setImageSize(computeImageSize());
    updateSize();                                // run once on mount
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const blogSlug = blog.slug || generateSlug(blog.title);

  // Create responsive image URL using the current size
  const getResponsiveImageUrl = (url: string) => {
    if (url.includes('unsplash.com')) {
      return url.includes('?')
        ? `${url}&w=${imageSize}&q=75`
        : `${url}?w=${imageSize}&q=75`;
    }
    return url;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        {!imageLoaded && <Skeleton className="absolute inset-0" />}
        <img
          src={getResponsiveImageUrl(blog.image)}
          alt={blog.imageAlt || blog.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            "transform hover:scale-105"
          )}
          width={parseInt(imageSize)}
          height={Math.floor(parseInt(imageSize) * 0.6)}
          loading="eager"
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
        >
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-brand-blue transition-colors duration-300">
            {blog.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {blog.content.intro}
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