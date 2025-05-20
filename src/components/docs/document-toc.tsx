'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

// Define the props interface for DocumentTableOfContents
interface DocumentTocProps {
  // Optional classname for styling
  className?: string;
}

export function DocumentTableOfContents({ className }: DocumentTocProps) {
  // Keep track of the current heading in view
  const [activeId, setActiveId] = useState<string>('');
  // Store all the headings found in the document
  const [headings, setHeadings] = useState<{ id: string, text: string, level: number }[]>([]);
  const pathname = usePathname();

  // Find all headings in the document when component mounts or pathname changes
  useEffect(() => {
    const findHeadings = () => {
      // Select all h2 and h3 elements in the main content area
      const elements = document.querySelectorAll('#main-content h2, #main-content h3');
      const headingElements: { id: string, text: string, level: number }[] = [];
      
      elements.forEach((element) => {
        // Skip elements without IDs
        const id = element.id;
        if (!id) return;
        
        headingElements.push({
          id,
          text: element.textContent || '',
          level: element.tagName === 'H2' ? 2 : 3,
        });
      });
      
      setHeadings(headingElements);
    };

    // Wait for the DOM to be ready
    setTimeout(findHeadings, 500);
  }, [pathname]);

  // Set up an intersection observer to track which headings are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0
      }
    );

    // Observe all headings
    const elements = document.querySelectorAll('#main-content h2, #main-content h3');
    elements.forEach((element) => {
      if (element.id) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element.id) {
          observer.unobserve(element);
        }
      });
    };
  }, [pathname, headings]);

  if (headings.length === 0) {
    return null;
  }
  return (
    <div className={`bg-card border rounded-lg overflow-hidden shadow-sm ${className || ''} xl:sticky xl:top-24`}>
      <div className="px-4 py-3 bg-primary/10 border-b">
        <h3 className="font-semibold">On This Page</h3>
      </div>
      <nav className="p-2">
        <ul className="space-y-1 text-sm">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block px-3 py-3 rounded-md hover:bg-primary/5 transition-colors ${
                  activeId === heading.id ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground'
                } ${heading.level === 3 ? 'pl-6' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  if (element) {
                    // Update URL with hash
                    window.history.pushState(null, '', `#${heading.id}`);
                    // Smooth scroll to element with offset for fixed header
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                    
                    setActiveId(heading.id);
                  }
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
