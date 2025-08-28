
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
        Character to Name
      </h1>
      <p className="text-xl text-white/90 max-w-3xl mx-auto mb-4 leading-relaxed">
        The comprehensive Unicode character name converter and educational resource
      </p>
      <p className="text-lg text-white/80 max-w-4xl mx-auto">
        Instantly convert any character into its official Unicode name. Perfect for developers, designers, linguists, 
        and anyone working with international text, symbols, or special characters.
      </p>
      
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/70">
        <span className="bg-white/20 px-3 py-1 rounded-full">✨ Real-time conversion</span>
        <span className="bg-white/20 px-3 py-1 rounded-full">🌍 All languages supported</span>
        <span className="bg-white/20 px-3 py-1 rounded-full">🔧 Developer-friendly</span>
        <span className="bg-white/20 px-3 py-1 rounded-full">♿ Accessibility focused</span>
      </div>
    </header>
  );
};
