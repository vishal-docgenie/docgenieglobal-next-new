
import React, { useEffect, useState } from 'react';
import { ImageAuditEntry, criticalImagePaths } from './imageAuditUtils';

/**
 * Component to help audit images on a page
 * For development use only
 */
export const ImageAuditTool: React.FC = () => {
  const [images, setImages] = useState<ImageAuditEntry[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Find all images on the page
    const imgElements = document.querySelectorAll('img');
    
    // Create audit entries
    const imageEntries: ImageAuditEntry[] = Array.from(imgElements).map(img => {
      const rect = img.getBoundingClientRect();
      const componentName = findClosestComponentName(img);
      const filePath = guessFilePath(componentName);
      
      // Check if image is above the fold (visible in viewport on load)
      const isCritical = rect.top < window.innerHeight;
      
      return {
        src: img.src,
        alt: img.alt || 'No alt text',
        component: componentName,
        filePath,
        isCritical,
        loadingStrategy: isCritical ? 'eager' : 'lazy',
        approximateSize: `${Math.round(rect.width)} x ${Math.round(rect.height)}`,
        notes: isCritical ? 'Above the fold' : 'Below the fold'
      };
    });
    
    setImages(imageEntries);
  }, []);

  // Attempt to find parent component name based on class names or data attributes
  const findClosestComponentName = (element: HTMLElement): string => {
    let current: HTMLElement | null = element;
    
    while (current && current !== document.body) {
      // Check for component name in class
      const classList = Array.from(current.classList || []);
      for (const className of classList) {
        if (className.includes('component-') || 
            /[A-Z]/.test(className[0]) || 
            className.includes('Section') || 
            className.includes('Container')) {
          return className.replace('component-', '');
        }
      }
      
      // Check data-component attribute if exists
      if (current.dataset.component) {
        return current.dataset.component;
      }
      
      current = current.parentElement;
    }
    
    return 'Unknown';
  };

  // Guess the file path based on component name
  const guessFilePath = (componentName: string): string => {
    // Check if it matches any known critical paths
    const matchedPath = criticalImagePaths.find(path => 
      path.includes(componentName) || componentName.includes(path.split('/').pop()?.replace('.tsx', '') || '')
    );
    
    if (matchedPath) {
      return matchedPath;
    }
    
    // Make a best guess based on component name
    if (componentName.includes('Hero')) {
      return `/components/home/${componentName}.tsx`;
    } else if (componentName.includes('Blog')) {
      return `/pages/Blogs/components/${componentName}.tsx`;
    } else if (componentName.includes('Feature')) {
      return `/components/${componentName}.tsx`;
    }
    
    return 'Unknown path';
  };

  // Toggle visibility of the audit tool
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={toggleVisibility}
        className="bg-brand-blue text-white px-4 py-2 rounded-full shadow-lg"
      >
        {isVisible ? 'Hide' : 'Show'} Image Audit
      </button>
      
      {isVisible && (
        <div className="fixed inset-0 bg-white/95 overflow-auto p-4 z-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Image Audit Results</h2>
              <button 
                onClick={toggleVisibility}
                className="bg-gray-200 px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
            
            <div className="mb-4">
              <p>Found {images.length} images on this page.</p>
              <p>
                <span className="font-bold text-green-600">
                  {images.filter(img => img.isCritical).length} critical
                </span>
                {' / '}
                <span className="font-bold text-blue-600">
                  {images.filter(img => !img.isCritical).length} non-critical
                </span>
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Image</th>
                    <th className="border border-gray-300 p-2">Source</th>
                    <th className="border border-gray-300 p-2">Alt Text</th>
                    <th className="border border-gray-300 p-2">Component</th>
                    <th className="border border-gray-300 p-2">Path</th>
                    <th className="border border-gray-300 p-2">Critical</th>
                    <th className="border border-gray-300 p-2">Strategy</th>
                    <th className="border border-gray-300 p-2">Size</th>
                    <th className="border border-gray-300 p-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {images.map((img, index) => (
                    <tr key={index} className={img.isCritical ? 'bg-green-50' : 'bg-blue-50'}>
                      <td className="border border-gray-300 p-2">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-16 h-16 object-cover"
                        />
                      </td>
                      <td className="border border-gray-300 p-2 text-xs break-all">
                        {img.src.substring(0, 50)}
                        {img.src.length > 50 ? '...' : ''}
                      </td>
                      <td className="border border-gray-300 p-2">{img.alt}</td>
                      <td className="border border-gray-300 p-2">{img.component}</td>
                      <td className="border border-gray-300 p-2 text-xs">{img.filePath}</td>
                      <td className={`border border-gray-300 p-2 font-bold ${img.isCritical ? 'text-green-600' : 'text-blue-600'}`}>
                        {img.isCritical ? 'Yes' : 'No'}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {img.loadingStrategy}
                      </td>
                      <td className="border border-gray-300 p-2">{img.approximateSize}</td>
                      <td className="border border-gray-300 p-2">{img.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Next Steps</h3>
              <ol className="list-decimal pl-5">
                <li>Review the images marked as critical and confirm they should load eagerly</li>
                <li>Apply lazy loading to all non-critical images</li>
                <li>Create a reusable component that handles both loading strategies</li>
              </ol>
              
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                <h4 className="font-bold">Export as JSON</h4>
                <p className="mb-2">Copy this data to create your image audit file:</p>
                <pre className="bg-gray-100 p-2 overflow-auto text-xs">
                  {JSON.stringify(images, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageAuditTool;
