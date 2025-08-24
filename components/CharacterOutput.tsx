import React, { useState, useRef, useEffect } from 'react';
import { CopyButton } from './CopyButton';
import { ViewToggle } from './ViewToggle';
import type { CharacterName } from '../hooks/useUnicodeNames';

interface CharacterOutputProps {
  data: CharacterName[];
  isProcessing: boolean;
}

export const CharacterOutput: React.FC<CharacterOutputProps> = ({ data, isProcessing }) => {
  const [viewMode, setViewMode] = useState<'list' | 'text'>('list');
  const outputContainerRef = useRef<HTMLDivElement>(null);

  const textToCopy = viewMode === 'list'
    ? data.map(item => item.name).join('\n')
    : data.map(item => item.name).join(' ');

  useEffect(() => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  }, [data, viewMode]);

  const hasOutput = data.length > 0;

  const renderContent = () => {
    if (isProcessing && !hasOutput) {
       return (
         <div className="flex items-center justify-center h-full text-gray-400 p-4">
           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#357ABD]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Loading names...</span>
         </div>
       );
    }

    if (!hasOutput) {
      return (
        <div className="flex items-center justify-center h-full text-gray-400 p-4">
          <span>Characters names will appear here.</span>
        </div>
      );
    }

    if (viewMode === 'list') {
      return (
        <ul className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <li key={index} className="flex items-center space-x-4 p-3">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg border border-gray-300 flex items-center justify-center text-xl font-mono shadow-sm">
                {item.char === ' ' ? '␣' : item.char}
              </div>
              <span className="text-base text-gray-700 break-words flex-1">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      );
    }

    // Text view
    return (
      <p className="p-4 text-base text-gray-700 break-words">
        {data.map(item => item.name).join(' ')}
      </p>
    );
  };

  return (
    <div className="relative flex flex-col h-[450px]">
      {hasOutput && (
        <div className="absolute top-3 right-3 z-10">
          <ViewToggle view={viewMode} onViewChange={setViewMode} />
        </div>
      )}
      <div
        ref={outputContainerRef}
        className="relative flex-grow bg-[#F7FAFC] rounded-xl shadow-lg border-2 border-[#357ABD] overflow-y-auto scroll-smooth"
      >
        {renderContent()}
      </div>
       <div className="absolute bottom-4 right-4 z-10">
         <CopyButton textToCopy={textToCopy} />
       </div>
    </div>
  );
};