'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Installation() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Installation</h2>
      <p className="text-muted-foreground text-lg">
        Install the form controller package:
      </p>
      <Card>
        <CardContent className="p-0 rounded-xl overflow-hidden">
          <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
            <span className="text-zinc-400">npm</span>
          </div>
          <SyntaxHighlighter code="npm install @uplink-protocol/form-controller" language="shell" />
        </CardContent>
      </Card>

      <p className="text-muted-foreground pt-4 mb-2">
        Then install the integration package for your framework:
      </p>
      
      <Tabs defaultValue="react" className="mt-4">
        <TabsList className="w-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-1 mb-4">
          <TabsTrigger value="react" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            React
          </TabsTrigger>
          <TabsTrigger value="vue" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            Vue
          </TabsTrigger>
          <TabsTrigger value="svelte" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            Svelte
          </TabsTrigger>
          <TabsTrigger value="vanilla" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            Vanilla JS
          </TabsTrigger>
        </TabsList>

        <TabsContent value="react" className="space-y-4">
          <Card>
            <CardContent className="p-0 rounded-xl overflow-hidden">
              <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                <span className="text-zinc-400">npm</span>
              </div>
              <SyntaxHighlighter code="npm install @uplink-protocol/react" language="shell" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vue" className="space-y-4">
          <Card>
            <CardContent className="p-0 rounded-xl overflow-hidden">
              <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                <span className="text-zinc-400">npm</span>
              </div>
              <SyntaxHighlighter code="npm install @uplink-protocol/vue" language="shell" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="svelte" className="space-y-4">
          <Card>
            <CardContent className="p-0 rounded-xl overflow-hidden">
              <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                <span className="text-zinc-400">npm</span>
              </div>
              <SyntaxHighlighter code="npm install @uplink-protocol/svelte" language="shell" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vanilla" className="space-y-4">
          <Card>
            <CardContent className="p-0 rounded-xl overflow-hidden">
              <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                <span className="text-zinc-400">npm</span>
              </div>
              <SyntaxHighlighter code="# No additional package needed for vanilla JS" language="shell" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 p-5 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800/50">
        <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-3">TypeScript Support</h3>
        <p className="text-muted-foreground">
          Form Controller comes with full TypeScript support out of the box. No additional type packages are required.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          This enables code completion, type checking, and better developer experience when working with the library.
        </p>
      </div>
    </div>
  )
}
