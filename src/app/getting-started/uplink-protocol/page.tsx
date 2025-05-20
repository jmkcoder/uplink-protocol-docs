'use client'

import { Badge } from "@/components/ui/badge"
import "../../syntax-highlight.css"
import { Introduction } from "@/components/docs/uplink-protocol/Introduction"
import { Installation } from "@/components/docs/uplink-protocol/Installation"
import { Architecture } from "@/components/docs/uplink-protocol/Architecture"
import { BasicUsage } from "@/components/docs/uplink-protocol/BasicUsage"
import { AdvancedFeatures } from "@/components/docs/uplink-protocol/AdvancedFeatures"
import { RelatedDocs } from "@/components/docs/uplink-protocol/RelatedDocs"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"

export default function UplinkProtocolPage() {  
  return (
    <DocsPageLayout>
      <div className="space-y-2 mb-6 sm:mb-8">
        <Badge variant="outline">Getting Started</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Uplink Protocol</h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          A framework-agnostic protocol for building reusable frontend logic that works across UI frameworks.
        </p>
        
        <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
          <Badge className="bg-blue-500 text-white hover:bg-blue-600 text-xs sm:text-sm">React</Badge>
          <Badge className="bg-green-500 text-white hover:bg-green-600 text-xs sm:text-sm">Vue</Badge>
          <Badge className="bg-orange-500 text-white hover:bg-orange-600 text-xs sm:text-sm">Svelte</Badge>
          <Badge className="bg-gray-700 text-white hover:bg-gray-800 text-xs sm:text-sm">Vanilla JS</Badge>
        </div>
      </div>
      
      {/* Document Sections */}
      <section className="space-y-8 sm:space-y-12">
        <Introduction />
        
        <Installation />
        
        <Architecture />
        
        <BasicUsage />
        
        <AdvancedFeatures />
        
        <RelatedDocs />
      </section>
    </DocsPageLayout>
  )
}
