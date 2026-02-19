
import React from 'react';
import { ThumbsUp } from 'lucide-react';

interface ConclusionBoxProps {
  conclusion: string;
}

const ConclusionBox = ({ conclusion }: ConclusionBoxProps) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
      <div className="flex items-center gap-3 mb-4">
        <ThumbsUp className="h-6 w-6 text-brand-blue" />
        <h3 className="text-xl font-bold text-gray-900">Key Takeaways</h3>
      </div>
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed">{conclusion}</p>
      </div>
    </div>
  );
};

export default ConclusionBox;
