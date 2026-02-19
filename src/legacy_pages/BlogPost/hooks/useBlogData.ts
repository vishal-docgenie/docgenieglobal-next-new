
import { useState, useEffect } from 'react';
import { BlogPost } from '../../Blogs/types';
import { blogData } from '../../Blogs/data/blogData';
import { generateSections } from '../utils/sectionUtils';

// Function to convert title to URL-friendly slug
const generateSlug = (title: string): string => {
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
  
  console.log('Generated slug from title:', { title, slug });
  return slug;
};

export const useBlogData = (urlParam: string | undefined, onNotFound: () => void) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [sections, setSections] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    console.log('========== useBlogData STARTED ==========');
    console.log('💡 URL parameter received:', urlParam);
    setIsLoading(true);
    
    if (!urlParam) {
      console.log('❌ No URL parameter provided');
      onNotFound();
      return;
    }
    
    // Log all blog slugs for debugging
    console.log('All available blogs with slugs:');
    blogData.forEach(blog => {
      const generatedSlug = generateSlug(blog.title);
      console.log(`Blog ID: ${blog.id}, Title: "${blog.title.substring(0, 30)}...", Custom Slug: ${blog.slug || 'none'}, Generated Slug: ${generatedSlug}`);
    });
    
    // Find the blog based on slug matching
    // IMPORTANT: First try to match by custom slug, then by generated slug
    const foundBlog = blogData.find(blog => {
      // First check if blog has a custom slug and if it matches
      if (blog.slug && blog.slug === urlParam) {
        console.log(`✅ MATCHED BY CUSTOM SLUG: "${blog.title}" (ID: ${blog.id})`);
        return true;
      }
      
      // If no custom slug or no match, try the generated slug
      const generatedSlug = generateSlug(blog.title);
      if (generatedSlug === urlParam) {
        console.log(`✅ MATCHED BY GENERATED SLUG: "${blog.title}" (ID: ${blog.id})`);
        return true;
      }
      
      return false;
    });
    
    console.log('Found blog:', foundBlog);
    
    if (foundBlog) {
      console.log(`✅ FINAL BLOG FOUND: "${foundBlog.title}" (ID: ${foundBlog.id})`);
      setBlog(foundBlog);
      
      try {
        console.log('🔍 About to generate sections from content');
        console.log('Content for section generation (first 100 chars):', foundBlog.content.substring(0, 100) + '...');
        
        const generatedSections = generateSections(foundBlog.content, foundBlog.id);
        
        if (!generatedSections || !Array.isArray(generatedSections)) {
          console.error('❌ Generated sections is not an array:', generatedSections);
          throw new Error('Generated sections is not an array');
        }
        
        console.log('✅ Sections generated successfully, count:', generatedSections.length);
        console.log('Generated section titles:', generatedSections.map(s => s.title));
        
        setSections(generatedSections);
        setTimeout(() => {
          setIsLoading(false);
          console.log('Loading state set to false, blog ready to display');
        }, 300);
      } catch (error) {
        console.error('❌ ERROR generating sections:', error);
        console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace available');
        console.error('Blog content that caused the error (first 200 chars):', foundBlog.content.substring(0, 200) + '...');
        onNotFound();
      }
    } else {
      console.log('❌ Blog not found, calling onNotFound');
      onNotFound();
    }
    
    console.log('========== useBlogData COMPLETED ==========');
  }, [urlParam, onNotFound]);
  
  return { blog, sections, isLoading };
};

// Export the slug generator for use in other components
export { generateSlug };
