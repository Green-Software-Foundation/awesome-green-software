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

const ALGOLIA_INDEX_NAME = 'Green_Software';
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

const ItemHitComponent: React.FC<{ hit: ItemHit; onSelect: (hit: ItemHit) => void }> = ({ hit, onSelect }) => {
  const formattedDate = hit["Date Evaluated"]
    ? moment(hit["Date Evaluated"]).format('MM/DD/YYYY')
    : 'Date not available';

  return (
    <button
      type="button"
      onClick={() => onSelect(hit)}
      className="group flex h-full w-full flex-col rounded-xl border border-transparent bg-white text-left shadow-sm transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="flex-1 p-5 pb-4">
        <div className="flex items-center mb-3">
          <ItemImage src={hit.Media} alt={`${hit.Name} logo`} />
          <div className="mt-2 ml-4">
            <h4 className="text-lg font-semibold text-primary-default mb-1">{hit.Name}</h4>
            <p className="text-sm text-gray-400 font-medium">{formattedDate}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed">{hit.Description}</p>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex gap-4">
            {hit.GitHub && (
              <a
                href={hit.GitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                onClick={(event) => event.stopPropagation()}
              >
                <FaGithub className="text-gray-500 hover:text-gray-700 text-lg transition-colors" />
              </a>
            )}
            {hit.URL && (
              <a
                href={hit.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                onClick={(event) => event.stopPropagation()}
              >
                <FaLink className="text-gray-500 hover:text-gray-700 text-lg transition-colors" />
              </a>
            )}
          </div>
          <TopicTags topics={hit.Tags} />
        </div>
      </div>
    </button>
  );
};

const NotionSearch: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedHit, setSelectedHit] = useState<ItemHit | null>(null);
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

  useEffect(() => {
    if (!selectedHit) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedHit(null);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedHit]);

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
            hitComponent={({ hit }) => (
              <ItemHitComponent hit={hit} onSelect={setSelectedHit} />
            )}
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

      {selectedHit && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedHit(null)}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700"
              aria-label="Close details"
            >
              ✕
            </button>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <ItemImage src={selectedHit.Media} alt={`${selectedHit.Name} logo`} />
                <div>
                  <h2 className="text-2xl font-semibold text-primary-default">{selectedHit.Name}</h2>
                  {selectedHit["Date Evaluated"] && (
                    <p className="text-sm text-gray-500">
                      Evaluated on {moment(selectedHit["Date Evaluated"]).format('MMMM DD, YYYY')}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {selectedHit.Description || 'No description available.'}
              </p>

              {(selectedHit.Tags?.length || selectedHit.Topics?.length) ? (
                <div className="flex flex-wrap gap-2">
                  {[...(selectedHit.Tags || []), ...(selectedHit.Topics || [])].map((tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="flex flex-wrap gap-3">
                {selectedHit.GitHub && (
                  <a
                    href={selectedHit.GitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
                  >
                    <FaGithub />
                    View on GitHub
                  </a>
                )}
                {selectedHit.URL && (
                  <a
                    href={selectedHit.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark"
                  >
                    <FaLink />
                    Visit Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
    </InstantSearch>
  );
};


export default NotionSearch;
