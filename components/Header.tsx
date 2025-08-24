
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
        Character to Name
      </h1>
      <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
        Instantly convert any character into its official Unicode name. A simple tool for developers, designers, and the curious.
      </p>
    </header>
  );
};
