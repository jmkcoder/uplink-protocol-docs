'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useSidebar } from './sidebar-context'

export function SidebarToggle() {
  const { isOpen, toggleSidebar } = useSidebar()
  const pathname = usePathname()
  
  // Only show toggle button on docs paths
  const isDocsPath = pathname.startsWith('/getting-started') || 
                     pathname.startsWith('/logic') ||
                     pathname.startsWith('/docs')
  
  if (!isDocsPath) return null
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleSidebar}
      className="mr-2 lg:hidden"
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
    >
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18"></path>
          <path d="M6 6L18 18"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      )}
    </Button>
  )
}
