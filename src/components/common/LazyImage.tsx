
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  forceLazy?: boolean;
  onLoad?: () => void;
  priority?: 'high' | 'low' | 'auto';
  componentName?: string;
  imagePurpose?: string;
  sizes?: string;
  srcSet?: string;
  placeholderSrc?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  forceEager?: boolean;
}

/**
 * A responsive image component that supports both eager and lazy loading
 * based on whether the image is critical (above the fold) or not
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  forceLazy = false,
  onLoad,
  priority = 'auto',
  componentName,
  imagePurpose,
  sizes,
  srcSet,
  placeholderSrc,
  onError,
  forceEager,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    console.log(`Image loaded: ${src}`);
    if (onLoad) {
      onLoad();
    }
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true);
    console.error(`Failed to load image: ${src}`);
    if (onError) {
      onError(e);
    }
  };

  // Create props object with React's built-in ImgHTMLAttributes (now including fetchpriority)
  const imgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
    src,
    alt,
    className: cn(
      "transition-opacity duration-300 max-w-full h-auto",
      isLoaded ? "opacity-100" : "opacity-0"
    ),
    loading: forceLazy ? 'lazy' : 'eager',
    onLoad: handleLoad,
    onError: handleError,
    width,
    height,
    sizes,
    srcSet,
    ...props
  };

  // Only add fetchpriority if it's not the default value
  if (priority !== 'auto') {
    imgProps.fetchPriority = priority;
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" 
             style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }} />
      )}
      
      {/* Spread the props to the img element */}
      <img {...imgProps} />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-red-500 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default LazyImage;
