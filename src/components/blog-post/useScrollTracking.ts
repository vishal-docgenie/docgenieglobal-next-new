
import { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
}

export const useScrollTracking = (sections: Section[], isLoading: boolean) => {
  const [activeSection, setActiveSection] = useState<string | null>(
    sections.length > 0 ? sections[0].id : null
  );

  useEffect(() => {
    if (isLoading || sections.length === 0) return;
    
    // Initialize with the first section
    if (sections.length > 0 && !activeSection) {
      setActiveSection(sections[0].id);
    }

    const handleScroll = () => {
      if (isLoading) return;
      
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean) as HTMLElement[];

      if (sectionElements.length === 0) return;

      // Find the section that's currently in view
      // Start from the bottom to find the first section that's in view
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        const rect = section.getBoundingClientRect();
        
        // Consider a section in view if its top is within 150px of the viewport top
        if (rect.top <= 150) {
          setActiveSection(section.id);
          break;
        }
      }
      
      // If we're at the top and no section is in view, activate the first section
      if (window.scrollY < 150 && sections.length > 0) {
        setActiveSection(sections[0].id);
      }
    };

    // Run once on mount to set initial active section
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, isLoading, activeSection]);

  return activeSection;
};
