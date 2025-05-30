// External dependencies
import React, { useState, useRef, useEffect } from 'react';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  RefinementList,
  Pagination
} from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import { FaGithub, FaLink } from 'react-icons/fa';
import Filters from './components/Filters';
import moment from 'moment';

// Types
interface ItemHit {
  Name: string;
  Media: string;
  "Date Evaluated": string;
  Description: string;
  Topics: string[];
  Tags: string[];
  Category: string;
  GitHub: string;
  URL: string;
}

// Constants
const searchClient = algoliasearch(
  import.meta.env.PUBLIC_ALGOLIA_APP_ID,
  import.meta.env.PUBLIC_ALGOLIA_SEARCH_KEY
);

const ALGOLIA_INDEX_NAME = 'GreenSoftwareFoundationFrontend50a1e9725143458dac1ae068d9dd10e0';
const DEFAULT_PLACEHOLDER_IMAGE = '/awesome-green-software/placeholder.png';

// Sub-components
const ItemImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="rounded-full overflow-hidden flex-shrink-0 h-12 w-12 border-gray-200">
    <img
      className="w-full h-full object-cover"
      src={src || DEFAULT_PLACEHOLDER_IMAGE}
      alt={alt}
      onError={(e) => { e.currentTarget.src = DEFAULT_PLACEHOLDER_IMAGE }}
    />
  </div>
);

const TopicTags: React.FC<{ topics: string[] }> = ({ topics }) => (
  <div className="flex flex-wrap gap-2">
    {topics?.sort((a, b) => a.localeCompare(b))?.map((topic, index) => (
      <span 
        key={index} 
        className="inline-block bg-green-100 rounded-full px-3 py-1 text-xs font-semibold text-green-800"
      >
        {topic}
      </span>
    ))}
  </div>
);

const ItemHitComponent: React.FC<{ hit: ItemHit }> = ({ hit }) => {
  const formattedDate = hit["Date Evaluated"]
    ? moment(hit["Date Evaluated"]).format('MM/DD/YYYY')
    : 'Date not available';

  return (
    <div className="rounded-xl overflow-hidden w-full">
      <div className="flex items-center mb-2">
        <ItemImage src={hit.Media} alt={`${hit.Name} logo`} />
        <div className='mt-4 ml-4'>
          <h4 className="text-xl font-bold text-primary-default mb-1">{hit.Name}</h4>
          <p className="text-sm text-gray-400 font-medium">{formattedDate}</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed">{hit.Description}</p>
      
      <div className="flex items-center justify-between mt-auto pt-1 border-t border-gray-300">
        <div className="flex gap-4">
          {hit.GitHub && (
            <a 
              href={hit.GitHub} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:bg-gray-50 rounded-full transition-colors"
            >
              <FaGithub className="text-gray-500 hover:text-gray-700 text-xl transition-colors" />
            </a>
          )}
          {hit.URL && (
            <a 
              href={hit.URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:bg-gray-50 rounded-full transition-colors"
            >
              <FaLink className="text-gray-500 hover:text-gray-700 text-xl transition-colors" />
            </a>
          )}
        </div>
        <TopicTags topics={hit.Tags} />
      </div>
    </div>
  );
};

const NotionSearch: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <InstantSearch 
      searchClient={searchClient} 
      indexName={ALGOLIA_INDEX_NAME}
      future={{ preserveSharedStateOnUnmount: true }}
    >


<div className="container mx-auto px-4 lg:px-16 pb-10">
  {/* Top Section */}
  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
    {/* Top Left Section (Empty) */}
    <div className="flex">
      <div className="w-full">
        {/* Intentionally left empty */}
      </div>
    </div>

    {/* Top Right Section */}
    <div className="flex-grow">
      <div className="w-full">
      <SearchBox 
                placeholder="  Search Resources..." 
                className="w-full search-input bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-sm hover:shadow-md transition-shadow duration-300 text-lg"
                submitIconComponent={() => (
                  <div className="absolute left-1 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                )}
                loadingIconComponent={() => null}
                resetIconComponent={() => null}
                
              />
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6">
    {/* Bottom Left Section */}
    <div className="flex">
      <div className="w-auto">
      <Filters 
            isFilterOpen={isFilterOpen} 
            setIsFilterOpen={setIsFilterOpen} 
            sidebarRef={sidebarRef} 
          />
      </div>
    </div>

    {/* Bottom Right Section */}
    <div className="flex-grow">
      <div className="w-full">
      <Configure hitsPerPage={6} />
          <Hits<ItemHit>
            hitComponent={ItemHitComponent}
            classNames={{
              list: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2",
              item: "w-auto bg-white rounded-lg shadow-md p-4 pb-1 hover:shadow-lg transition-shadow border-none"
            }}
          />
          <Pagination 
      className="mt-6" 
      padding={2} 
      showFirst={false} 
      showLast={false} 
    />
      </div>
    </div>
  </div>
</div>
    </InstantSearch>
  );
};


export default NotionSearch;
