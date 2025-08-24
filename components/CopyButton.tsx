
import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

interface CopyButtonProps {
  textToCopy: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (!textToCopy || isCopied) return;
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
      // You could add user feedback for the error here
    }
  };

  return (
    <button
      onClick={handleCopy}
      disabled={!textToCopy || isCopied}
      className={`
        flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-white 
        shadow-md transition-all duration-300 ease-in-out transform
        ${isCopied 
          ? 'bg-green-500' 
          : 'bg-gradient-to-r from-[#5B9DF9] to-[#357ABD] hover:from-[#357ABD] hover:to-[#5B9DF9] hover:scale-105'
        }
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
      `}
      title="Copy names to clipboard"
    >
      {isCopied ? (
        <>
          <CheckIcon className="w-5 h-5 mr-2" /> Copied!
        </>
      ) : (
        <>
          <CopyIcon className="w-5 h-5 mr-2" /> Copy
        </>
      )}
    </button>
  );
};
