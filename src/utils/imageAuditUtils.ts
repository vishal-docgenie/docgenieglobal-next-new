
/**
 * Utility functions for auditing images and determining their loading priority
 */

export interface ImageAuditEntry {
  src: string;
  alt: string;
  component: string;
  filePath: string;
  isCritical: boolean;
  loadingStrategy: 'eager' | 'lazy';
  approximateSize?: string;
  notes?: string;
}

/**
 * Determines if an image should be considered critical (above-the-fold)
 * based on its location and purpose
 */
export function isCriticalImage(componentName: string, imagePurpose?: string): boolean {
  // Hero images are almost always critical
  if (componentName.toLowerCase().includes('hero')) {
    return true;
  }

  // Main product images in the header are critical
  if (componentName.toLowerCase().includes('header') || 
      componentName.toLowerCase().includes('navbar')) {
    return true;
  }

  // Logo images are critical
  if (imagePurpose?.toLowerCase().includes('logo')) {
    return true;
  }

  // Primary feature image in first section may be critical
  if (componentName.toLowerCase().includes('feature') && 
      imagePurpose?.toLowerCase().includes('primary')) {
    return true;
  }

  // Default to non-critical
  return false;
}

/**
 * Get recommended loading strategy based on whether image is critical
 */
export function getLoadingStrategy(isCritical: boolean): 'eager' | 'lazy' {
  return isCritical ? 'eager' : 'lazy';
}

/**
 * Critical paths that likely contain above-the-fold images
 */
export const criticalImagePaths = [
  '/pages/Solutions/components/SolutionHero.tsx',
  '/pages/Solutions/components/HeroSection.tsx',
  '/components/home/HeroSection.tsx',
  '/components/Header.tsx',
  '/pages/BlogPost/components/BlogHeader.tsx',
  '/pages/Blogs/components/BlogsHero.tsx',
  '/pages/About/components/HeroSection.tsx',
  '/pages/Contact/components/HeroSection.tsx',
  '/pages/Pricing/components/PricingCard.tsx',
];

/**
 * Default image audit for common components
 */
export const defaultImageAudit: ImageAuditEntry[] = [
  // Heroes - Critical
  {
    src: "hero-image",
    alt: "Hero image",
    component: "HeroSection",
    filePath: "/components/home/HeroSection.tsx",
    isCritical: true,
    loadingStrategy: "eager",
    notes: "Main hero image visible immediately on page load"
  },
  {
    src: "solution-hero", 
    alt: "Solution hero image",
    component: "SolutionHero",
    filePath: "/pages/Solutions/components/SolutionHero.tsx",
    isCritical: true,
    loadingStrategy: "eager",
    notes: "Main solution page hero image"
  },
  
  // Feature Sections - Non-critical
  {
    src: "feature-image",
    alt: "Feature image",
    component: "FeatureSection",
    filePath: "/pages/Solutions/components/FeatureSection.tsx",
    isCritical: false,
    loadingStrategy: "lazy",
    notes: "Feature images are typically below the fold"
  },
  {
    src: "blog-card-image",
    alt: "Blog thumbnail",
    component: "BlogCard",
    filePath: "/pages/Blogs/components/BlogCard.tsx",
    isCritical: false,
    loadingStrategy: "lazy",
    notes: "Blog card images can be lazy loaded as they're often below the fold"
  },
  {
    src: "team-member-image",
    alt: "Team member",
    component: "TeamSection",
    filePath: "/pages/About/components/TeamSection.tsx",
    isCritical: false,
    loadingStrategy: "lazy",
    notes: "Team images are typically below the fold"
  }
];
