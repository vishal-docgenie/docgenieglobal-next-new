
import React, { useEffect } from 'react';
import { TableOfContents as TOCIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { debugComponent } from '@/utils/debugUtils';
import ErrorBoundary from '@/components/ErrorBoundary';

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
  activeSection?: string | null;
}

const TableOfContents = ({ sections, activeSection }: TableOfContentsProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  // Debug logging
  useEffect(() => {
    debugComponent('TableOfContents', { 
      sections, 
      activeSection, 
      sectionsCount: sections?.length || 0 
    });
  }, [sections, activeSection]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use a more refined approach for scrolling to elements
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      // Use smooth scrolling with better timing
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });

      // Update the URL hash without triggering a jump
      if (window.history && typeof window.history.replaceState === 'function') {
        const base = window.location.pathname + window.location.search;
        window.history.replaceState(null, '', `${base}#${sectionId}`);
      } else {
        window.location.hash = sectionId;
      }
    } else {
      console.warn(`Section element with ID "${sectionId}" not found in DOM`);
    }
  };

  // Validate sections data before rendering
  if (!sections || !Array.isArray(sections) || sections.length === 0) {
    console.warn('TableOfContents: No sections provided or sections is not an array');
    return null;
  }

  return (
    <ErrorBoundary>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm sticky top-24">
        <div 
          className="flex items-center justify-between p-4 cursor-pointer border-b border-gray-100"
          onClick={toggleCollapse}
        >
          <div className="flex items-center gap-2">
            <TOCIcon className="h-5 w-5 text-brand-blue" />
            <h3 className="font-semibold text-gray-800">Table of Contents</h3>
          </div>
          {isCollapsed ? (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          )}
        </div>
        
        {!isCollapsed && (
          <nav className="p-4">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(section.id); }}
                    className={`block text-sm py-1 pl-2 border-l-2 transition-colors ${
                      activeSection === section.id
                        ? 'border-brand-blue text-brand-blue font-medium'
                        : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400'
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default TableOfContents;
