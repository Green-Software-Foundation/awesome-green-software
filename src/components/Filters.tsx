import React from 'react';
import { ClearRefinements, RefinementList } from 'react-instantsearch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface FiltersProps {
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
  sidebarRef: React.RefObject<HTMLDivElement>;
}

const Filters: React.FC<FiltersProps> = ({ isFilterOpen, setIsFilterOpen, sidebarRef }) => {
  return (
    <div 
      ref={sidebarRef} 
      className={`fixed md:relative p-8 md:p-4 shadow-md md:shadow-none bg-white md:bg-transparent left-0 top-0 h-full w-3/4 md:w-64 overflow-y-auto transform transition-transform ${
        isFilterOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:block z-50`}
    >
      <div className='mb-4'>
        <h2 className="text-xl md:text-2xl text-gray-800 font-bold text-left">Filters</h2>
        <ClearRefinements 
          className='text-green-700 font-bold text-sm md:text-base'
          translations={{
            resetButtonText: 'Clear all filters',
          }} 
        />
      </div>

      {/* Manual Refinement Lists */}
      <Accordion type="single" collapsible className='w-full'>
        {/* Topics Filter */}
        <AccordionItem value="Topics">
          <AccordionTrigger className='capitalize font-bold text-gray-800 md:text-lg'>
            Topics
          </AccordionTrigger>
          <AccordionContent>
            <RefinementList attribute="Topics" />
          </AccordionContent>
        </AccordionItem>

        {/* Author Filter */}
        <AccordionItem value="Author">
          <AccordionTrigger className='capitalize font-bold text-gray-800 md:text-lg'>
            Author
          </AccordionTrigger>
          <AccordionContent>
            <RefinementList attribute="by" />
          </AccordionContent>
        </AccordionItem>

        {/* Media Type Filter */}
        <AccordionItem value="Media Type">
          <AccordionTrigger className='capitalize font-bold text-gray-800 md:text-lg'>
            Media Type
          </AccordionTrigger>
          <AccordionContent>
            <RefinementList attribute="Media" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filters;
