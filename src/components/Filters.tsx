import React, { useState } from 'react';
import { ClearRefinements, RefinementList } from 'react-instantsearch';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FiltersProps {
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
  sidebarRef: React.RefObject<HTMLDivElement>;
}

const Filters: React.FC<FiltersProps> = ({ isFilterOpen, setIsFilterOpen, sidebarRef }) => {

  const [isNameListOpen, setIsNameListOpen] = useState(false);
  const [isTopicsListOpen, setIsTopicsListOpen] = useState(false);
  const [isByListOpen, setIsByListOpen] = useState(false);
  // Toggle functions
  const toggleNameList = () => setIsNameListOpen(!isNameListOpen);
  const toggleTopicsList = () => setIsTopicsListOpen(!isTopicsListOpen);
  const toggleByList = () => setIsByListOpen(!isByListOpen);
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

        <div className="mb-4">
          <button 
            onClick={toggleNameList} 
            className="flex justify-between items-center w-full text-left font-medium text-gray-700"
          >
            <span>Name</span>
            <span>{isNameListOpen ?<FaChevronUp /> : <FaChevronDown />}</span>
          </button>
          {isNameListOpen && <RefinementList attribute="Name" />}
        </div>
        {/* Add more RefinementLists or other filter widgets as needed */}
        <div className="mb-4">
          <button 
            onClick={toggleTopicsList} 
            className="flex justify-between items-center w-full text-left font-medium text-gray-700"
          >
            <span>Topics</span>
            <span>{isTopicsListOpen ?<FaChevronUp /> : <FaChevronDown />}</span>
          </button>
          {isTopicsListOpen && <RefinementList attribute="Topics" />}
        </div>
        
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