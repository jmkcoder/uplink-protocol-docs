'use client'

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function RelatedDocs() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight" id="related-docs">Related Documentation</h2>
      <p className="text-lg">
        Explore these related documents for more specific implementations and use cases:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <Link href="/logic/form-controller/overview" className="no-underline">
          <Card className="h-full hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Form Controller</h3>
              <p className="text-muted-foreground">A flexible, reactive form management system built on the Uplink Protocol.</p>
            </CardContent>
          </Card>
        </Link>
        
        <Link href="/getting-started" className="no-underline">
          <Card className="h-full hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Getting Started Guide</h3>
              <p className="text-muted-foreground">Learn the basics of using Uplink in your projects.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
