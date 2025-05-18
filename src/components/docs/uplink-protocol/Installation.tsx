'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"

export function Installation() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight" id="installation">Installation</h2>
      <p className="text-muted-foreground text-lg">
        Install the core package :
      </p>
      
      <Card>
        <CardContent className="p-0 rounded-xl overflow-hidden">
          <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
            <span className="text-zinc-400">npm</span>
          </div>
          <SyntaxHighlighter code="
npm install @uplink-protocol/core" language="shell" />
        </CardContent>
      </Card>

      <p className="text-muted-foreground text-lg">
        Install along framework-specific adapters you need :
      </p>
      
      <Card>
        <CardContent className="p-0 rounded-xl overflow-hidden">
          <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
            <span className="text-zinc-400">npm</span>
          </div>
          <SyntaxHighlighter code="
npm install @uplink-protocol/react // or /vue or /svelte or /angular" language="shell" />
        </CardContent>
      </Card>
    </div>
  )
}
