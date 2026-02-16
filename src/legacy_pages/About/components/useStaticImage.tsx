
import { useState, useEffect } from 'react';

/**
 * Hook to handle image loading with a fallback
 * @param src Primary image source
 * @param fallbackSrc Fallback image source
 * @returns The appropriate image source
 */
export const useStaticImage = (src: string, fallbackSrc: string) => {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
    };
    
    img.onerror = () => {
      console.warn(`Failed to load image: ${src}, using fallback`);
      setImageSrc(fallbackSrc);
    };
  }, [src, fallbackSrc]);

  return imageSrc;
};
