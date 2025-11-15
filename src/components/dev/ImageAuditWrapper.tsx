
import React from 'react';
import ImageAuditTool from '@/utils/imageAuditTool';

/**
 * A wrapper component that adds the image audit tool to any page
 * Only active in development environment
 */
const ImageAuditWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      {children}
      {process.env.NODE_ENV === 'development' && <ImageAuditTool />}
    </>
  );
};

export default ImageAuditWrapper;
