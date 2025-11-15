
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { getButtonA11yProps } from "@/utils/accessibilityUtils";

interface BookDemoButtonProps {
  className?: string;
  text?: string;
}

const BookDemoButton = ({ className, text = "Book a Demo" }: BookDemoButtonProps) => {
  const handleCalendlyClick = () => {
    window.open('https://calendly.com/adityavj-docgenie/30min', '_blank');
  };

  return (
    <Button 
      onClick={handleCalendlyClick}
      className={`primary-button flex items-center gap-2 text-sm sm:text-base whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 ${className || ''}`}
      {...getButtonA11yProps({
        type: 'standard',
        label: "Schedule a 30-minute product demonstration"
      })}
    >
      <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
      {text}
    </Button>
  );
};

export default BookDemoButton;
