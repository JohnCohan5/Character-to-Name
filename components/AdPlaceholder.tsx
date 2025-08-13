
import React from 'react';

interface AdPlaceholderProps {
  position: 'left' | 'right';
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ position }) => {
  const positionClasses = position === 'left' ? 'left-4' : 'right-4';

  return (
    <aside
      className={`fixed top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-[#1E2A38]/15 rounded-lg flex items-center justify-center select-none hidden xl:flex ${positionClasses}`}
    >
      <span className="text-xl font-medium text-[#A3CEF1]">Ad Space</span>
    </aside>
  );
};
