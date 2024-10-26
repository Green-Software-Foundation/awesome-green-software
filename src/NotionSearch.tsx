// External dependencies
import React, { useState, useRef, useEffect } from 'react';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
} from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import { FaGithub, FaLink } from 'react-icons/fa';
import Filters from './components/Filters';

// Types
interface ItemHit {
  Name: string;
  Media: string;
  "Date Evaluated": string;
  Description: string;
  Topics: string[];
  by: string;
  URL?: string;
}

// Constants
const searchClient = algoliasearch(
  import.meta.env.PUBLIC_ALGOLIA_APP_ID,
  import.meta.env.PUBLIC_ALGOLIA_SEARCH_KEY
);

const ALGOLIA_INDEX_NAME = 'GreenSoftwareFoundationFrontend50a1e9725143458dac1ae068d9dd10e0';
const DEFAULT_PLACEHOLDER_IMAGE = '/aws-logo-placeholder.png';

// Sub-components
const ItemImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mr-4 border-2 border-gray-200">
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
    {topics?.map((topic, index) => (
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
    ? hit["Date Evaluated"].split(' (')[0]
    : 'Date not available';

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 p-4 w-full">
      <div className="flex items-center mb-3">
        <ItemImage src={hit.Media} alt={`${hit.Name} logo`} />
        <div>
          <h4 className="text-lg font-semibold text-primary-default">{hit.Name}</h4>
          <p className="text-sm text-gray-600">{formattedDate}</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 line-clamp-3">{hit.Description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-700">
            <FaGithub className="text-gray-500 text-xl" />
          </a>
          {hit.URL && (
            <a href={hit.URL} className="hover:text-gray-700">
              <FaLink className="text-gray-500 text-xl" />
            </a>
          )}
        </div>
        <TopicTags topics={hit.Topics} />
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
      <div className="flex flex-col gap-8">
        {/* Filters and Search Section */}
        <div className="flex flex-row justify-between items-start mb-6">
          {/* Filters Section */}
          <aside className="w-full md:w-1/4 flex-shrink-0">
            <Filters 
              isFilterOpen={isFilterOpen} 
              setIsFilterOpen={setIsFilterOpen} 
              sidebarRef={sidebarRef} 
            />
          </aside>

          {/* Search Box Section */}
          <div className="w-full md:w-3/4 ml-auto">
            <SearchBox 
              placeholder="Search solutions..." 
              className="w-full search-input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Search Results Section */}
        <div className="w-full">
          <Configure hitsPerPage={6} />
          <Hits<ItemHit> 
            hitComponent={ItemHitComponent} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          />
        </div>
      </div>
    </InstantSearch>
  );
};


export default NotionSearch;
