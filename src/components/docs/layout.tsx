'use client'

import { DocsSidebar } from "@/components/docs/sidebar"
import { DocumentTableOfContents } from "@/components/docs/document-toc"
import { ReactNode } from "react"

interface DocsLayoutProps {
  children: ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground">
      {/* Left Sidebar - Navigation */}
      <DocsSidebar />
      
      {/* Main Content with Max Width Constraint */}
      <div className="flex justify-center w-full">
        <div className="flex flex-1 max-w-[1600px] mx-auto">
          {/* Main Content Area */}
          <div 
            id="main-content" 
            className="flex-1 px-4 sm:px-6 py-8 sm:py-12 lg:min-w-0 lg:max-w-full lg:flex-1"
          >
            {children}
          </div>
          
          {/* Right Sidebar - Document TOC */}
          <div className="hidden xl:block w-64 flex-shrink-0 px-4 py-8">
            <DocumentTableOfContents />
          </div>
        </div>
      </div>
    </main>
  )
}