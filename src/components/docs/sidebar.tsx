'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useSidebar } from './sidebar-context'

import { useEffect, useState } from 'react'

export function DocsSidebar() {
  const { isOpen, closeSidebar } = useSidebar()
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState('')
  // Listen for hash changes and scroll events
  useEffect(() => {
    // Set initial hash
    setCurrentHash(window.location.hash)

    // Update hash on change
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    // Check for visible sections on scroll
    const handleScroll = () => {
      // Only run if we're on a page with sections
      if (pathname.includes('getting-started')) {
        const sections = ['installation', 'usage'];

        // Find the visible section
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the element is visible in the viewport
            if (rect.top <= 150 && rect.bottom >= 150) {
              setCurrentHash(`#${section}`);
              break;
            }
          }
        }

        // If we're at the top of the page, clear the hash
        if (window.scrollY < 100) {
          setCurrentHash('');
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);

    // Initial check after page load
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname])
  const isActive = (path: string) => {
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#')

      // Check if we're on the right page first
      if (pathname !== basePath) return false

      // Main path with no hash (like "/getting-started") should be active only when at the top or no hash
      if (!hash) return !currentHash

      // If there's a hash in the path, check if it matches the current hash
      return currentHash === `#${hash}`
    }

    // For paths without hash:
    // 1. Exact match - highest priority
    if (pathname === path) return true
    
    // 2. Check if current path starts with the link path and the next character is a slash
    // This ensures that "/getting-started" matches "/getting-started/something" but not "/getting-started-xyz"
    if (path !== '/' && pathname.startsWith(path) && (pathname.charAt(path.length) === '/' || pathname.length === path.length)) {
      return true
    }
    
    return false
  }
  const getLinkClassName = (path: string) => {
    const active = isActive(path)
    return active
      ? "text-primary font-medium hover:underline block py-1"
      : "hover:underline text-muted-foreground block py-1"
  }

  return (
    <>      
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}{/* Sidebar */}
      <div className={`
        fixed top-[3.5rem] left-0 z-50 h-[calc(100vh-3.5rem)] w-[280px] bg-background border-r border-border shadow-lg
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:static lg:translate-x-0 lg:w-full lg:shadow-none lg:border-r-0 lg:h-auto lg:overflow-visible
      `}>
        {/* Mobile close button - only visible on mobile */}
        <div className="flex justify-between items-center p-4 border-b border-border lg:hidden mt-6">
          <span className="font-semibold">Navigation</span>
        </div>          
        {/* Sidebar content */}
        <div className="h-[calc(100%-60px)] overflow-y-auto">
          <div className="px-4 py-4 lg:py-1">
            <nav className="space-y-4 pr-2 pb-6">
              <div className="text-sm font-semibold uppercase text-muted-foreground">Getting Started</div>
              <ul className="space-y-3">                <li><Link href="/getting-started" className={getLinkClassName("/getting-started")} onClick={closeSidebar}>Introduction</Link></li>
                <li className="ml-4 flex items-center">
                  <span className="text-muted-foreground mr-1 text-xs">§</span>
                  <Link href="/getting-started#installation" className={getLinkClassName("/getting-started#installation")} onClick={closeSidebar}>Installation</Link>
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-muted-foreground mr-1 text-xs">§</span>
                  <Link href="/getting-started#usage" className={getLinkClassName("/getting-started#usage")} onClick={closeSidebar}>Framework Integrations</Link>
                </li>
                <li><Link href="/getting-started/uplink-protocol" className={getLinkClassName("/getting-started/uplink-protocol")} onClick={closeSidebar}>Uplink Protocol</Link></li>
              </ul>              <div className="text-sm font-semibold uppercase text-muted-foreground pt-6">Logic</div>
              <ul className="space-y-3">
                {/* Form Controller with nested links */}
                <li className="space-y-2">
                  <Link 
                    href="/logic/form-controller/overview" 
                    className={getLinkClassName("/logic/form-controller")} 
                    onClick={closeSidebar}
                  >
                    Form Controller
                  </Link>
                  <ul className="space-y-2 ml-4 pl-2 border-l border-zinc-200 dark:border-zinc-800">
                    <li>
                      <Link 
                        href="/logic/form-controller/overview" 
                        className={getLinkClassName("/logic/form-controller/overview")} 
                        onClick={closeSidebar}
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/logic/form-controller/api" 
                        className={getLinkClassName("/logic/form-controller/api")} 
                        onClick={closeSidebar}
                      >
                        API
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/logic/form-controller/examples" 
                        className={getLinkClassName("/logic/form-controller/examples")} 
                        onClick={closeSidebar}
                      >
                        Examples
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/logic/form-controller/extensibility" 
                        className={getLinkClassName("/logic/form-controller/extensibility")} 
                        onClick={closeSidebar}
                      >
                        Extensibility
                      </Link>
                    </li>
                  </ul>
                </li>
                
                {/* Calendar Controller with nested links */}
                <li className="space-y-2">
                  <Link 
                    href="/logic/calendar-controller/overview" 
                    className={getLinkClassName("/logic/calendar-controller")} 
                    onClick={closeSidebar}
                  >
                    Calendar Controller
                  </Link>
                  <ul className="space-y-2 ml-4 pl-2 border-l border-zinc-200 dark:border-zinc-800">
                    <li>
                      <Link 
                        href="/logic/calendar-controller/overview" 
                        className={getLinkClassName("/logic/calendar-controller/overview")} 
                        onClick={closeSidebar}
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/logic/calendar-controller/api" 
                        className={getLinkClassName("/logic/calendar-controller/api")} 
                        onClick={closeSidebar}
                      >
                        API
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/logic/calendar-controller/examples" 
                        className={getLinkClassName("/logic/calendar-controller/examples")} 
                        onClick={closeSidebar}
                      >
                        Examples
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
