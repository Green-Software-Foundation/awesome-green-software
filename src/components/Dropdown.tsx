import React, { useState } from 'react';
import { Menu } from 'react-instantsearch';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  attribute: string;
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ attribute, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-2 py-3 text-left text-gray-700 hover:bg-gray-50/50 rounded-lg transition-colors"
      >
        <span className="font-medium">{label}</span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="mt-1 py-2 px-2">
          <Menu
            attribute={attribute}
            limit={10}
            showMore={true}
            showMoreLimit={20}
            // translations={{
            //   showMore: 'Show more',
            //   showLess: 'Show less',
            //   noResults: 'No results',
            // }}
          />
        </div>
      )}
    </div>
  );
};

export default Dropdown;