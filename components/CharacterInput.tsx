
import React from 'react';
import { TrashIcon } from './Icons';

interface CharacterInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClear: () => void;
}

export const CharacterInput: React.FC<CharacterInputProps> = ({ value, onChange, onClear }) => {
  const hasValue = value.length > 0;

  return (
    <div className="grid grid-rows-[1fr_auto] h-[450px] gap-y-2">
      <div className="relative bg-[#F7FAFC] rounded-xl shadow-lg border-2 border-[#357ABD] transition-all duration-300 focus-within:ring-4 focus-within:ring-[#4A90E2]/50">
        <textarea
          value={value}
          onChange={onChange}
          placeholder="Type or paste characters here..."
          className="w-full h-full p-4 bg-transparent resize-none focus:outline-none text-lg leading-relaxed placeholder:text-gray-400"
          spellCheck="false"
          autoFocus
        />
      </div>
      <div className="flex justify-between items-center text-sm font-medium text-[#357ABD] px-1">
        <div>
          {hasValue && (
            <button
              onClick={onClear}
              className="flex items-center justify-center rounded-full font-semibold text-white text-sm shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500"
              title="Clear input"
            >
              <TrashIcon className="w-4 h-4 mr-1.5" />
              <span>Clear</span>
            </button>
          )}
        </div>
        <div className="text-right">
          {value.length} Character{value.length !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
};
