'use client';

import { useEffect, useState, useRef } from 'react';
import { Input } from './input';
import { Card } from './card';
import { useSearchTracking } from '@/lib/analytics';
import { useRouter } from 'next/navigation';

interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
}

interface SearchProps {
  placeholder?: string;
  className?: string;
}

export function Search({ placeholder = 'Search documentation...', className = '' }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Initialize analytics tracking
  const trackSearch = useSearchTracking({
    debounceMs: 800,
    minQueryLength: 2,
    trackResultCount: true,
    getResultCount: () => results.length,
    category: 'Documentation Search'
  });
  
  // Mock search function (in a real app, this would search the actual content)
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }
    
    // Mock results based on query - in a real implementation, 
    // this would query a search index or database
    const mockResults: SearchResult[] = [
      {
        title: 'Getting Started with Uplink',
        path: '/getting-started',
        excerpt: 'Learn how to integrate Uplink Protocol in your applications.'
      },
      {
        title: 'Form Controller',
        path: '/logic/form-controller',
        excerpt: 'Build powerful, validated forms with the Form Controller.'
      },
    ].filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(mockResults);
    
    // Track the search query in analytics
    trackSearch(searchQuery, mockResults.length);
  };
  
  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
  };
  
  // Handle clicking on a search result
  const handleResultClick = (path: string) => {
    router.push(path);
    setIsActive(false);
    setQuery('');
    setResults([]);
  };
  
  // Handle clicks outside of search component to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={handleSearchChange}
        onFocus={() => setIsActive(true)}
        className="w-full"
        id="docs-search"
      />
      
      {isActive && results.length > 0 && (
        <Card className="absolute z-50 mt-1 w-full max-h-[300px] overflow-auto shadow-lg">
          <ul className="py-2">
            {results.map((result, index) => (
              <li 
                key={index}
                className="px-4 py-2 hover:bg-secondary/20 cursor-pointer"
                onClick={() => handleResultClick(result.path)}
              >
                <h3 className="font-medium text-primary">{result.title}</h3>
                <p className="text-sm text-muted-foreground">{result.excerpt}</p>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

export default Search;
