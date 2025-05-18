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

    // For paths without hash
    return pathname === path
  }
  const getLinkClassName = (path: string) => {
    const active = isActive(path)
    return active
      ? "text-primary font-medium hover:underline"
      : "hover:underline text-muted-foreground"
  }
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}      {/* Sidebar */}
      <div className={`
        fixed top-15 left-0 z-40 h-[calc(100vh-4rem)] w-[280px] bg-background border-r border-border shadow-lg
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:w-64 lg:shadow-none lg:sticky
      `}>        {/* Sidebar content */}
        <div className="h-full overflow-hidden">
          <div className="h-full overflow-y-auto p-6">
            <nav className="space-y-4 pr-2">              <div className="text-sm font-semibold uppercase text-muted-foreground">Getting Started</div>
              <ul className="space-y-2">
                <li><Link href="/getting-started" className={getLinkClassName("/getting-started")} onClick={closeSidebar}>Introduction</Link></li>
                <li className="ml-4 flex items-center">
                  <span className="text-muted-foreground mr-1 text-xs">§</span>
                  <Link href="/getting-started#installation" className={getLinkClassName("/getting-started#installation")} onClick={closeSidebar}>Installation</Link>
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-muted-foreground mr-1 text-xs">§</span>
                  <Link href="/getting-started#usage" className={getLinkClassName("/getting-started#usage")} onClick={closeSidebar}>Framework Integrations</Link>
                </li>
                <li><Link href="/getting-started/uplink-protocol" className={getLinkClassName("/getting-started/uplink-protocol")} onClick={closeSidebar}>Uplink Protocol</Link></li>
              </ul><div className="text-sm font-semibold uppercase text-muted-foreground pt-6">Logic</div>
              <ul className="space-y-2">
                {/* Form Controller with nested links */}
                <li className="space-y-1">
                  <Link href="/logic/form-controller/overview" className={pathname.startsWith("/logic/form-controller") ? "text-primary font-medium hover:underline" : "hover:underline text-muted-foreground"} onClick={closeSidebar}>Form Controller</Link>
                  <ul className="space-y-1 ml-4 pl-2 border-l border-zinc-200 dark:border-zinc-800">
                    <li><Link href="/logic/form-controller/overview" className={getLinkClassName("/logic/form-controller/overview")} onClick={closeSidebar}>Overview</Link></li>
                    <li><Link href="/logic/form-controller/api" className={getLinkClassName("/logic/form-controller/api")} onClick={closeSidebar}>API</Link></li>
                    <li><Link href="/logic/form-controller/examples" className={getLinkClassName("/logic/form-controller/examples")} onClick={closeSidebar}>Examples</Link></li>
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
