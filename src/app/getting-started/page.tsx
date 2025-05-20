'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import "../syntax-highlight.css"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"
import { useEffect } from "react"
import { useAnalytics, useScrollDepthTracking } from "@/lib/analytics"

export default function GettingStarted() {  
  // Get analytics tracking function
  const { trackEvent } = useAnalytics();
  
  // Track scroll depth for better engagement metrics
  useScrollDepthTracking({
    thresholds: [25, 50, 75, 100],
    trackPagePath: true
  });
  
  // Track page view
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Documentation',
      label: 'Getting Started'
    });
  }, [trackEvent]);
  return (
    <DocsPageLayout>
      <div className="space-y-2">
        <Badge variant="outline">Docs</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Getting Started</h1>
        <p className="text-muted-foreground text-lg">
          Learn how to use Uplink to build frontend-agnostic logic you can reuse across frameworks.
        </p>
        <div className="flex gap-3 pt-4">
          <Badge className="bg-blue-500 text-white hover:bg-blue-600">React</Badge>
          <Badge className="bg-green-500 text-white hover:bg-green-600">Vue</Badge>
          <Badge className="bg-orange-500 text-white hover:bg-orange-600">Svelte</Badge>
          <Badge className="bg-gray-700 text-white hover:bg-gray-800">Vanilla JS</Badge>
        </div>
      </div>

        {/* What is Uplink? */}
        <section className="space-y-4 pt-10">
          <h2 className="text-3xl font-bold tracking-tight">What is Uplink?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
              <CardContent className="p-6 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">Framework Agnostic</h3>
                </div>
                <p className="text-muted-foreground">Write your logic once and use it with any UI framework. No need to reimplement the same functionality across different projects.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
              <CardContent className="p-6 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">Reactive State</h3>
                </div>
                <p className="text-muted-foreground">Built with a reactive core that automatically updates your UI when the underlying state changes, regardless of your framework.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Install Section */}
        <section id="installation" className="space-y-4 pt-10">
          <h2 className="text-3xl font-bold tracking-tight">Installation</h2>          <p className="text-muted-foreground text-lg">
            Install the core package and a logic controller. Here&apos;s an example using the Form Controller:
          </p>
          <div className="grid grid-cols-1">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">npm</span>
                </div>
                <SyntaxHighlighter code="npm install @uplink-protocol/core   @uplink-protocol/form-controller" language="shell" />
              </CardContent>
            </Card>
          </div>

          <p className="text-muted-foreground pt-4">
            Then install the integration package for your framework:
          </p>
          <Card>
            <CardContent className="p-0 rounded-xl overflow-hidden">
              <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                <span className="text-zinc-400">npm</span>
              </div>
              <SyntaxHighlighter
                code={`# React
npm install @uplink-protocol/react

# Vue
npm install @uplink-protocol/vue

# Svelte
npm install @uplink-protocol/svelte`}
                language="shell"
              />
            </CardContent>
          </Card>
        </section>

        {/* Usage Section */}
        <section id="usage" className="space-y-8 pt-10">
          <h2 className="text-3xl font-bold tracking-tight">Framework Integrations</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Uplink works with any UI framework or even vanilla JavaScript. Choose your preferred approach below.
          </p>
          <Tabs defaultValue="react">
            <TabsList className="w-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-1 mb-6">
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

            <TabsContent value="react" className="space-y-4">          <p className="text-muted-foreground">
            Connect a controller to your React component using <code>useUplinkController()</code>:
          </p>              <Card>              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">react</span>
                </div>
                <SyntaxHighlighter
                  code={`import { useUplinkController } from "@uplink/react"
import { FormController } from "@uplink/form"

function MyForm() {
  const { bindings, methods, state } = useUplinkController(FormController)
  
  return (
    <div className="form">
      <input 
        type="text" 
        value={bindings.values.name} 
        onChange={(e) => methods.setValue("name", e.target.value)}
      />
      <button onClick={methods.submit}>Submit</button>
      <button onClick={methods.reset}>Reset Form</button>
    </div>
  )
}`}
                  language="jsx"
                />
              </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vue" className="space-y-4">              <p className="text-muted-foreground">
                Use the <code>useUplinkController</code> composable in your Vue components:
              </p>              <Card>                <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">vue</span>
                </div>
                <SyntaxHighlighter
                  code={`<script setup>
  import { useUplinkController } from "@uplink/vue"
  import { FormController } from "@uplink/form"

  const { bindings, methods } = useUplinkController(FormController)
</script>

<template>
  <div class="form">
    <input 
      type="text" 
      v-model="bindings.values.name" 
    />
    <button @click="methods.submit">Submit</button>
    <button @click="methods.reset">Reset Form</button>
  </div>
</template>`}
                  language="vue"
                />
              </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="svelte" className="space-y-4">              <p className="text-muted-foreground">
                Integrate with Svelte using the <code>useUplinkController</code> function:
              </p>              <Card>                <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">svelte</span>
                </div>
                <SyntaxHighlighter
                  code={`<script>
  import { useUplinkController } from "@uplink/svelte"
  import { FormController } from "@uplink/form"

  const { bindings, methods } = useUplinkController(FormController)
</script>

<div class="form">
  <input 
    type="text" 
    bind:value={$bindings.values.name}
  />
  <button on:click={methods.submit}>Submit</button>
  <button on:click={methods.reset}>Reset Form</button>
</div>`}
                  language="svelte"
                />
              </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vanilla" className="space-y-4">              <p className="text-muted-foreground">
                Use Uplink directly in vanilla JavaScript without any framework dependencies:
              </p>              <Card>                <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">javascript</span>
                </div>
                <SyntaxHighlighter
                  code={`import { useUplink } from "@uplink/core"
import { FormController } from "@uplink/form"

// Create a controller instance
const controller = useUplink(FormController)

// Listen for state changes
controller.subscribe((state) => {
  document.querySelector('#name-input').value = state.values.name
})

// Setup UI interactions
document.querySelector('#submit-btn').addEventListener('click', () => {
  controller.methods.submit()
})

document.querySelector('#reset-btn').addEventListener('click', () => {
  controller.methods.reset()
})

document.querySelector('#name-input').addEventListener('change', (e) => {
  controller.methods.setValue('name', e.target.value)
})`}
                  language="js"
                />
              </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Continue CTA */}
        <section className="pt-12 space-y-6">          <h2 className="text-3xl font-bold tracking-tight">Ready to Explore?</h2>
          <div className="grid gap-4 md:grid-cols-2">            <Link 
              href="/logic/form-controller" 
              onClick={() => trackEvent({
                action: 'click_card_link',
                category: 'Navigation',
                label: 'Form Controller Card'
              })}
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg hover:bg-primary/5 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">Form Controller Logic</h3>
                  </div>
                  <p className="text-muted-foreground">Explore the Form Controller and learn how to implement a complete form solution with validation.</p>
                </CardContent>
              </Card>
            </Link>
            <Card className="overflow-hidden transition-all hover:shadow-lg hover:bg-primary/5 h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">Coming Soon</h3>
                </div>
                <p className="text-muted-foreground">More controllers are on the way! Stay tuned for dropdown menus, modals, toasts and more.</p>
              </CardContent>
            </Card>
          </div>          <div className="flex justify-center pt-4">
            <Link 
              href="/logic/form-controller"
              onClick={() => trackEvent({
                action: 'click_button_link',
                category: 'Navigation',
                label: 'Explore Form Controller Button'
              })}
            >
              <Button size="lg" className="gap-2">
                <span>Explore the Form Controller Logic</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>          </div>        </section>
      </DocsPageLayout>
  )
}
