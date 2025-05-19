'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import { event as trackEvent } from "@/lib/analytics"

export default function NotFound() {
  // Track 404 page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Error',
      label: '404 Page Not Found'
    });
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">404</h1>
      <h2 className="mt-4 text-xl font-semibold tracking-tight">Page Not Found</h2>
      <p className="mt-2 text-lg text-muted-foreground max-w-md mx-auto">
        We couldn't find the page you were looking for. It might have been moved or doesn't exist.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/">
            Return Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/getting-started">
            View Documentation
          </Link>
        </Button>
      </div>
    </div>
  )
}
