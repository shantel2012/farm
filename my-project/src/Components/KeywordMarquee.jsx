import React from 'react';
import '../index.css'; // for animation

const keywords = [
  'Agriculture', 'Farming', 'Organic', 'Vegetables',
  'Harvest', 'Fresh', 'Healthy', 'Natural'
];

const KeywordMarquee = () => {
  return (
    <div className="overflow-hidden bg-[#f9f8ef] py-6 border-y border-gray-200">
      <div className="whitespace-nowrap animate-marquee text-[60px] font-extrabold text-gray-300 tracking-widest uppercase">
        {keywords.map((word, i) => (
          <span key={i} className="mx-16 text-outline relative">
            <span className="text-green-700 text-[70px]">*</span> {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordMarquee;