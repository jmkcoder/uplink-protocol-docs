'use client'

import { ReactNode } from "react"
import { usePathname } from 'next/navigation'
import { CalendarControllerSidebar } from "@/components/docs/controllers/calendar-controller-sidebar"
import { FormControllerSidebar } from "@/components/docs/controllers/form-controller-sidebar"
import { ControllersOverviewSidebar } from "@/components/docs/controllers/controllers-overview-sidebar"
import { DocumentTableOfContents } from "@/components/docs/document-toc"

interface ControllersLayoutProps {
  children: ReactNode;
}

export default function ControllersLayout({ children }: ControllersLayoutProps) {
  const pathname = usePathname()
  
  // Determine which controller sidebar to show based on the current path
  const getCurrentSidebar = () => {
    if (pathname.startsWith('/controllers/calendar-controller')) {
      return <CalendarControllerSidebar />
    }
    // Add more controllers here as they're implemented
    if (pathname.startsWith('/controllers/form-controller')) {
      return <FormControllerSidebar />
    }
    
    // Default sidebar for controllers overview
    if (pathname === '/controllers') {
      return <ControllersOverviewSidebar />
    }
    
    return null
  }

  const showTableOfContents = !pathname.endsWith('/controllers')

  return (
    <div className="flex justify-center min-h-screen bg-background text-foreground">
      <div className="flex flex-1 max-w-[1600px] mx-auto">
        {/* Left Sidebar - Controller-specific Navigation (Desktop only) */}
        <div className="lg:block lg:w-64 flex-shrink-0 sticky top-[3.5rem] self-start overflow-auto border-r border-border py-8 z-1">
          {getCurrentSidebar()}
        </div>
        
        {/* Main Content with Max Width Constraint */}
        <main className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col xl:flex-row">              
            {/* Main Content Area */}            
            <div
              id="main-content" 
              className={`flex-1 px-2 sm:px-4 md:px-6 py-8 sm:py-12 min-w-0 overflow-hidden ${showTableOfContents ? 'xl:min-w-0' : ''}`}
            >
              <div className="w-full overflow-hidden max-w-full px-2">
                {children}
              </div>
              
              {/* Mobile TOC - displayed at the bottom of content on smaller screens */}
              {showTableOfContents && (
                <div className="xl:hidden w-full mt-12 mb-8">
                  <DocumentTableOfContents />
                </div>
              )}
            </div>
            
            {/* Right Sidebar - Document TOC */}
            {showTableOfContents && (
              <div className="hidden xl:block w-64 flex-shrink-0 px-4 py-8">
                <DocumentTableOfContents />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
