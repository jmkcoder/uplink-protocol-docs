'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useSidebar } from '../sidebar-context'

export function ControllersOverviewSidebar() {
  const { isOpen, closeSidebar } = useSidebar()
  const pathname = usePathname()

  const isActive = (path: string) => {
    // For paths without hash:
    // 1. Exact match - highest priority
    if (pathname === path) return true
    
    // 2. Check if current path starts with the link path and the next character is a slash
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
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-[3.5rem] left-0 z-50 h-[calc(100vh-3.5rem)] w-[280px] bg-background border-r border-border shadow-lg
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:static lg:translate-x-0 lg:w-full lg:shadow-none lg:border-r-0 lg:h-auto lg:overflow-visible
      `}>
        {/* Mobile close button - only visible on mobile */}
        <div className="flex justify-between items-center p-4 border-b border-border lg:hidden mt-6">
          <span className="font-semibold">Controllers</span>
        </div>          

        {/* Sidebar content */}
        <div className="h-[calc(100%-60px)] overflow-y-auto">
          <div className="px-4 py-4 lg:py-1">
            <nav className="space-y-4 pr-2 pb-6">
              
              {/* Controllers Overview */}
              <div className="text-sm font-semibold uppercase text-muted-foreground">Controllers</div>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/controllers" 
                    className={getLinkClassName("/controllers")} 
                    onClick={closeSidebar}
                  >
                    Overview
                  </Link>
                </li>
              </ul>

              {/* Available Controllers */}
              <div className="text-sm font-semibold uppercase text-muted-foreground pt-6">Available Controllers</div>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/controllers/calendar-controller/overview" 
                    className={getLinkClassName("/controllers/calendar-controller")} 
                    onClick={closeSidebar}
                  >
                    Calendar Controller
                  </Link>
                </li>
              </ul>

              {/* Coming Soon */}
              <div className="text-sm font-semibold uppercase text-muted-foreground pt-6">Coming Soon</div>
              <ul className="space-y-3">
                <li>
                  <span className="text-muted-foreground/60 block py-1">Form Controller</span>
                </li>
                <li>
                  <span className="text-muted-foreground/60 block py-1">Navigation Controller</span>
                </li>
                <li>
                  <span className="text-muted-foreground/60 block py-1">State Controller</span>
                </li>
              </ul>

              {/* Documentation Links */}
              <div className="text-sm font-semibold uppercase text-muted-foreground pt-6">Documentation</div>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/getting-started" 
                    className={getLinkClassName("/getting-started")} 
                    onClick={closeSidebar}
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/getting-started/uplink-protocol" 
                    className={getLinkClassName("/getting-started/uplink-protocol")} 
                    onClick={closeSidebar}
                  >
                    Uplink Protocol
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
