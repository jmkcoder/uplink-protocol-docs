'use client'

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import "../../../syntax-highlight.css"
import { DocsSidebar } from "@/components/docs/sidebar"
import { Introduction } from "@/components/docs/form-controller/Introduction"
import { Installation } from "@/components/docs/form-controller/Installation"
import { Basics } from "@/components/docs/form-controller/Basics"
import { AdvancedCapabilities } from "@/components/docs/form-controller/AdvancedCapabilities"
import { Validation } from "@/components/docs/form-controller/Validation"
import { TypeScriptSupport } from "@/components/docs/form-controller/TypeScriptSupport"
import { Architecture } from "@/components/docs/form-controller/Architecture"
import { RelatedReferences } from "@/components/docs/form-controller/RelatedReferences"

export default function FormControllerOverview() {  
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground">
      {/* Sidebar */}
      <DocsSidebar />
      
      {/* Main Content */}
      <div className="flex-1 px-6 py-12 lg:max-w-4xl">
        {/* Header & Navigation */}
        <div className="space-y-2 mb-8">
          <Badge variant="outline">Logic</Badge>
          <h1 className="text-4xl font-bold tracking-tight">Form Controller</h1>
          <p className="text-muted-foreground text-lg">
            A flexible, reactive form management system for both multi-step and single-step forms with advanced validation capabilities.
          </p>
          
          <div className="flex gap-4 pt-4 border-b border-border">
            <Link href="/logic/form-controller/overview" className="font-medium text-primary border-b-2 border-primary pb-2">Overview</Link>
            <Link href="/logic/form-controller/api" className="text-muted-foreground hover:text-foreground pb-2">API</Link>
            <Link href="/logic/form-controller/examples" className="text-muted-foreground hover:text-foreground pb-2">Examples</Link>
          </div>
        </div>

        {/* Overview Content */}
        <section className="space-y-12">
          {/* Introduction Component */}
          <Introduction />
          
          {/* Installation Component */}
          <Installation />
          
          {/* Form Controller Basics Component */}
          <Basics />

          {/* Advanced Capabilities Component */}
          <AdvancedCapabilities />
            {/* Validation System Component */}
          <Validation />
          
          {/* TypeScript Support Component */}
          <TypeScriptSupport />
          
          {/* Architecture Component */}
          <Architecture />
          
          {/* Related References Component */}
          <RelatedReferences />
        </section>
      </div>
    </main>
  )
}
