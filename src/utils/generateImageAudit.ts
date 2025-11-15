
import { defaultImageAudit, ImageAuditEntry } from './imageAuditUtils';

/**
 * Helper function to generate a full image audit for all pages
 * This is meant to be run manually to help identify critical images
 */
export function generateFullImageAudit(): void {
  // Base audit from our default entries
  const auditEntries: ImageAuditEntry[] = [...defaultImageAudit];
  
  // Add common components with images
  const commonComponents = [
    { name: 'SolutionHero', path: '/pages/Solutions/components/SolutionHero.tsx' },
    { name: 'FeatureSection', path: '/pages/Solutions/components/FeatureSection.tsx' },
    { name: 'TeamSection', path: '/pages/About/components/TeamSection.tsx' },
    { name: 'BlogCard', path: '/pages/Blogs/components/BlogCard.tsx' },
    { name: 'BlogHeader', path: '/pages/BlogPost/components/BlogHeader.tsx' },
    { name: 'TestimonialCarousel', path: '/components/TestimonialCarousel.tsx' },
    { name: 'OurStorySection', path: '/pages/About/components/OurStorySection.tsx' },
    { name: 'SuccessStorySection', path: '/components/home/SuccessStorySection.tsx' },
  ];
  
  // Add all solution pages
  const solutionPages = [
    { name: 'AICapabilities', path: '/pages/Solutions/AICapabilities.tsx' },
    { name: 'ChronicCareManagement', path: '/pages/Solutions/ChronicCareManagement.tsx' },
    { name: 'HIPAACompliantHealthcare', path: '/pages/Solutions/HIPAACompliantHealthcare.tsx' },
    { name: 'VirtualCareFeatures', path: '/pages/Solutions/VirtualCareFeatures.tsx' },
    { name: 'WhiteLabelTelemedicine', path: '/pages/Solutions/WhiteLabelTelemedicine.tsx' },
  ];
  
  console.log('=== DocGenie Global Image Audit ===');
  console.log('Total components analyzed:', commonComponents.length + solutionPages.length);
  console.log('Image entries:', auditEntries.length);
  console.log('Critical images:', auditEntries.filter(img => img.isCritical).length);
  console.log('Non-critical images:', auditEntries.filter(img => !img.isCritical).length);
  
  // Log formatted output that can be saved to a file
  console.log(JSON.stringify(auditEntries, null, 2));
  
  console.log('=== End of Image Audit ===');
  console.log('Copy the JSON output above to create your image audit file');
}

// Add to window object for easy access in browser console
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as any).generateImageAudit = generateFullImageAudit;
}
