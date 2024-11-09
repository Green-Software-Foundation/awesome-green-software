import React from 'react';
import { ClearRefinements } from 'react-instantsearch';
import Dropdown from './Dropdown';

interface FiltersProps {
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
  sidebarRef: React.RefObject<HTMLDivElement>;
}

const Filters: React.FC<FiltersProps> = ({ isFilterOpen, setIsFilterOpen, sidebarRef }) => {
  console.log('Filters component rendering');
  
  // Place to add filters
  const filters = [
    {
      attribute: "Name",
      label: "Name"
    }
  ];

  console.log('Current filters:', filters);

  return (
    <div ref={sidebarRef} className="p-4">
      <div className='mb-8'>
        <h2 className="text-2xl text-gray-800 font-bold text-left mb-4">Filters</h2>
        <ClearRefinements 
          className='text-green-700 hover:text-green-800 transition-colors font-medium text-sm'
          translations={{
            resetButtonText: 'Clear all filters',
          }} 
        />
      </div>

      <div className="space-y-2">
        {filters.map((filter) => {
          console.log('Rendering filter:', filter);
          return (
            <Dropdown 
              key={filter.attribute}
              attribute={filter.attribute}
              label={filter.label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
