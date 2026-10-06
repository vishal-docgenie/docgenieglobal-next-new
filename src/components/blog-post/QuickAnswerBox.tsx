import React from 'react';

interface QuickAnswerBoxProps {
  answer: string;
}

// Mirrors the Quick Answer block on /solutions/white-label-telemedicine/ (QuickAnswerSection).
const QuickAnswerBox = ({ answer }: QuickAnswerBoxProps) => {
  return (
    <aside
      id="quick-answer"
      className="mb-12 scroll-mt-24 bg-brand-blue/20 border border-brand-blue/20 rounded-xl p-6 md:p-8 text-left"
      aria-labelledby="quick-answer-heading"
    >
      <h2 id="quick-answer-heading" className="text-sm font-semibold uppercase tracking-wide text-brand-blue mb-3">
        Quick Answer
      </h2>
      <p
        className="text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </aside>
  );
};

export default QuickAnswerBox;
