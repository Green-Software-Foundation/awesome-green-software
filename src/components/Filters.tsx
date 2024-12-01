import React from 'react';
import { ClearRefinements, RefinementList } from 'react-instantsearch';

interface FiltersProps {
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
  sidebarRef: React.RefObject<HTMLDivElement>;
}

const Filters: React.FC<FiltersProps> = ({ isFilterOpen, setIsFilterOpen, sidebarRef }) => {
  //bg-white shadow-lg
  return (
    <aside 
      ref={sidebarRef} 
      className={`fixed mt-8 rounded-xl md:static top-0 left-0 h-screen w-64  z-10  transition-transform transform ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    > 
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">Filters</h3>

        <div className="mb-4">
          <ClearRefinements 
            className="text-green-700 hover:text-green-800 transition-colors font-medium text-sm cursor-pointer"
            translations={{ resetButtonText: 'Clear all filters' }} 
          />
        </div>

        <RefinementList attribute="Name" />
        {/* Add more RefinementLists or other filter widgets as needed */}
        <RefinementList attribute="Topics" />
        {/* Example: RefinementList for 'by' attribute */}
        <RefinementList attribute="by" /> 
      </div>

      <button 
        className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700" 
        onClick={() => setIsFilterOpen(false)}
      >
        {/* Add an icon to close the sidebar (e.g., from react-icons) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button> 
    </aside>
  );
};

export default Filters;