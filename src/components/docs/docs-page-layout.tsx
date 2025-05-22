'use client'

import { ReactNode } from "react"
import { DocsSidebar } from "@/components/docs/sidebar"
import { DocumentTableOfContents } from "@/components/docs/document-toc"

interface DocsPageLayoutProps {
  children: ReactNode;
  showTableOfContents?: boolean;
}

export function DocsPageLayout({ 
  children, 
  showTableOfContents = true 
}: DocsPageLayoutProps) {
  return (
    <div className="flex justify-center min-h-screen bg-background text-foreground">
      <div className="flex flex-1 max-w-[1600px] mx-auto">
        {/* Left Sidebar - Navigation (Desktop only) */}
        <div className="lg:block lg:w-64 flex-shrink-0 sticky top-[3.5rem] self-start h-[calc(100vh-16rem)] overflow-auto border-r border-border py-8 z-1">
          <DocsSidebar />
        </div>
        
        {/* Mobile Sidebar is rendered separately in DocsSidebar component */}
        {/* Main Content with Max Width Constraint */}
        <main className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col xl:flex-row">            
            {/* Main Content Area */}            <div 
              id="main-content" 
              className={`flex-1 px-4 sm:px-6 py-8 sm:py-12 min-w-0 overflow-hidden ${showTableOfContents ? 'xl:min-w-0' : ''}`}
            >
              <div className="w-full overflow-x-auto">
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
