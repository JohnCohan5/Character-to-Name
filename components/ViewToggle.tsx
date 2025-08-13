import React from 'react';
import { ListBulletIcon, DocumentTextIcon } from './Icons';

type ViewMode = 'list' | 'text';

interface ViewToggleProps {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ view, onViewChange }) => {
  const baseClasses = 'p-1.5 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F7FAFC] focus:ring-[#357ABD]';
  const activeClasses = 'bg-[#357ABD] text-white';
  const inactiveClasses = 'text-gray-400 hover:bg-gray-200 hover:text-gray-600';

  return (
    <div className="flex items-center p-0.5 bg-gray-100/80 backdrop-blur-sm rounded-lg border border-gray-200/80 shadow-sm">
      <button
        onClick={() => onViewChange('list')}
        className={`${baseClasses} ${view === 'list' ? activeClasses : inactiveClasses}`}
        aria-pressed={view === 'list'}
        title="List View"
      >
        <ListBulletIcon className="w-5 h-5" />
        <span className="sr-only">List View</span>
      </button>
      <button
        onClick={() => onViewChange('text')}
        className={`${baseClasses} ${view === 'text' ? activeClasses : inactiveClasses}`}
        aria-pressed={view === 'text'}
        title="Plain Text View"
      >
        <DocumentTextIcon className="w-5 h-5" />
        <span className="sr-only">Plain Text View</span>
      </button>
    </div>
  );
};
