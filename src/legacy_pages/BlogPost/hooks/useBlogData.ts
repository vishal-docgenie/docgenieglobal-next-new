import { useState, useEffect } from 'react';
import { BlogPost } from '../../Blogs/types';
import { blogData } from '../../Blogs/data/blogData';
import { generateSections } from '../utils/sectionUtils';

// Function to convert title to URL-friendly slug
const generateSlug = (title: string): string => {
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
    .trim();

  return slug;
};

export const useBlogData = (urlParam: string | undefined, onNotFound: () => void) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [sections, setSections] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (!urlParam) {
      onNotFound();
      return;
    }

    // Find the blog by custom slug first, then fall back to generated slug
    const foundBlog = blogData.find(blog => {
      if (blog.slug && blog.slug === urlParam) return true;
      const generatedSlug = generateSlug(blog.title);
      return generatedSlug === urlParam;
    });

    if (foundBlog) {
      setBlog(foundBlog);
      try {
        const generatedSections = generateSections(foundBlog.content);
        if (!generatedSections || !Array.isArray(generatedSections)) {
          throw new Error('Generated sections is not an array');
        }
        setSections(generatedSections);
        setTimeout(() => setIsLoading(false), 300);
      } catch (error) {
        console.error('Error generating sections:', error);
        onNotFound();
      }
    } else {
      onNotFound();
    }
  }, [urlParam, onNotFound]);

  return { blog, sections, isLoading };
};

// Export the slug generator for use in other components
export { generateSlug };