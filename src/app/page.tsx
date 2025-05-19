'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useScrollDepthTracking, useTimeOnPage } from "@/lib/analytics"
import { useEffect } from "react"
import { event as trackEvent } from "@/lib/analytics"
import { SEO } from "@/components/seo"

export default function HomePage() {
  // Track scroll depth for the homepage
  useScrollDepthTracking();
  
  // Track time on page
  useTimeOnPage();
  
  // Track page load as a view
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Engagement',
      label: 'Home Page'
    });
  }, []);
  
  // Track button clicks
  const trackButtonClick = (buttonName: string) => {
    trackEvent({
      action: 'button_click',
      category: 'Navigation',
      label: buttonName
    });  };
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Add enhanced SEO components */}
      <SEO 
        type="software"
        title="Uplink Protocol | Logic as a Service"
        description="Decouple logic from UI. Write once, use anywhere across React, Vue, Web Components, and beyond."
        keywords={[
          'uplink protocol',
          'logic as a service',
          'decoupled logic',
          'framework agnostic',
          'form controller',
          'react',
          'vue',
          'web components'
        ]}
        showSocialShare={false}
      />
      
      {/* Development Analytics Banner - only shown in dev */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-primary/10 border-b border-primary/20 py-2 px-4 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-primary">Analytics Development Mode</span> – 
            Analytics events are being tracked and sent to Google Analytics with user consent. 
            <a href="/analytics" className="ml-1 underline">View analytics documentation</a>
          </p>
        </div>
      )}
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-6 text-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background z-0"></div>
        <div className="absolute inset-0 z-0">
          {/* Abstract connection lines representing the "uplink" concept */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path d="M100,200 C150,150 200,250 250,200 S350,100 400,150 S500,250 550,200 S650,100 700,150" 
                stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <path d="M100,300 C150,250 200,350 250,300 S350,200 400,250 S500,350 550,300 S650,200 700,250" 
                stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <path d="M100,400 C150,350 200,450 250,400 S350,300 400,350 S500,450 550,400 S650,300 700,350" 
                stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <circle cx="200" cy="200" r="5" fill="var(--primary)" />
              <circle cx="400" cy="150" r="5" fill="var(--primary)" />
              <circle cx="600" cy="200" r="5" fill="var(--primary)" />
              <circle cx="300" cy="300" r="5" fill="var(--primary)" />
              <circle cx="500" cy="350" r="5" fill="var(--primary)" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto space-y-6 relative z-10">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6">Logic as a Service</Badge>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-primary font-bold">
                Decouple logic from UI.
              </span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-gray-700 font-bold">Reuse it anywhere.</span>
                <svg className="absolute -bottom-2 left-0 w-full h-8 text-gray-400" viewBox="0 0 300 30" preserveAspectRatio="none">
                  <path d="M0,15 Q75,5 150,15 T300,15" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Uplink lets you write logic once and use it across React, Vue, Web Components, and beyond — 
            <br className="hidden md:block" />
            no adapters, no rewrites, just pure functionality.
          </p>
          
          {/* Visualization of the protocol concept */}
          <div className="relative py-8 max-w-3xl mx-auto animate-fade-in animation-delay-300">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-secondary/0 to-secondary/30"></div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="flex flex-col items-center space-y-2 text-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center animate-pulse-slow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <span className="font-medium">Your Logic</span>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-gradient-to-r from-primary to-secondary animate-pulse-slow"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-background px-2 text-xs text-muted-foreground">Uplink Protocol</span>
                </div>
              </div>
              
              <div className="grid grid-rows-3 gap-2">
                <div className="flex items-center gap-2 p-1 bg-primary/5 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                    <line x1="16" y1="8" x2="2" y2="22"></line>
                    <line x1="17.5" y1="15" x2="9" y2="15"></line>
                  </svg>
                  <span className="text-xs">React</span>
                </div>
                <div className="flex items-center gap-2 p-1 bg-primary/5 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                    <line x1="12" y1="22" x2="12" y2="15.5"></line>
                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                  </svg>
                  <span className="text-xs">Vue</span>
                </div>
                <div className="flex items-center gap-2 p-1 bg-primary/5 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                  <span className="text-xs">Web Components</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 animate-fade-in animation-delay-500">
            <Link href="/getting-started" onClick={() => trackButtonClick('Hero Get Started')}>
              <Button size="lg" className="w-full sm:w-auto shadow-lg cursor-pointer">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>            <Link href="/logic/form-controller/overview" onClick={() => trackButtonClick('Hero View Logic Packages')}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer">View Logic Packages</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature & Code Example Section */}
      <section className="bg-muted py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Why Logic as a Service?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary">🔁</div>
                <div>
                  <h4 className="font-medium">Centralized Logic</h4>
                  <p className="text-muted-foreground">Keep your business logic centralized and reusable across platforms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary">🧠</div>
                <div>
                  <h4 className="font-medium">Separation of Concerns</h4>
                  <p className="text-muted-foreground">Clean separation between logic and UI for better architecture</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary">🚀</div>
                <div>
                  <h4 className="font-medium">Framework Agnostic</h4>
                  <p className="text-muted-foreground">Build once, run anywhere — React, Vue, Web Components</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary">🧩</div>
                <div>
                  <h4 className="font-medium">Better Testing & Maintenance</h4>
                  <p className="text-muted-foreground">Simplified testing, improved scalability, and easier maintenance</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="shadow-xl overflow-hidden border-2 border-border/50">
            <CardContent className="p-0">
              <div className="bg-zinc-800 text-zinc-200 py-2 px-4 border-b border-zinc-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-4 font-mono text-sm bg-zinc-950 text-zinc-100 rounded-b-xl overflow-x-auto">
                {/* React + Uplink Controller */}
                <p className="text-slate-500">{`// React + Uplink Controller`}</p>
                <br />
                <pre>
                  <span className="text-blue-400">import</span> <span className="text-white">&#123;</span> <span className="text-yellow-300">useUplinkController</span> <span className="text-white">&#125;</span> <span className="text-blue-400">from</span> <span className="text-green-400">&apos;@uplink/react&apos;</span><span className="text-white">;</span>
                  <br/>
                  <span className="text-blue-400">import</span> <span className="text-white">&#123;</span> <span className="text-yellow-300">DatePickerController</span> <span className="text-white">&#125;</span> <span className="text-blue-400">from</span> <span className="text-green-400">&apos;@uplink/datepicker&apos;</span><span className="text-white">;</span>
                </pre>
                <br />
                <pre>
                  <span className="text-purple-400">function</span> <span className="text-sky-300">MyDatePicker</span><span className="text-white">() &#123;</span>
                  <br/>
                  <span className="text-white">  </span><span className="text-blue-400">const</span> <span className="text-white">&#123;</span> <span className="text-cyan-300">bindings</span><span className="text-white">,</span> <span className="text-cyan-300">methods</span> <span className="text-white">&#125;</span> <span className="text-white">=</span> <span className="text-sky-300">useUplinkController</span><span className="text-white">(</span><span className="text-yellow-300">DatePickerController</span><span className="text-white">);</span>
                  <br/><br/>
                  <span className="text-white">  </span><span className="text-blue-400">return</span> <span className="text-white">(</span>
                  <br/>
                  <span className="text-white">    &lt;</span><span className="text-orange-400">div</span> <span className="text-cyan-300">className</span><span className="text-white">=</span><span className="text-green-400">&quot;datepicker&quot;</span><span className="text-white">&gt;</span>
                  <br/>
                  <span className="text-white">      &lt;</span><span className="text-orange-400">input</span> <span className="text-cyan-300">type</span><span className="text-white">=</span><span className="text-green-400">&quot;text&quot;</span>
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">value</span><span className="text-white">=</span><span className="text-white">&#123;</span><span className="text-cyan-300">bindings</span><span className="text-white">.</span><span className="text-cyan-300">selectedDate</span><span className="text-white">&#125;</span>
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-cyan-300">onChange</span><span className="text-white">=</span><span className="text-white">&#123;</span><span className="text-cyan-300">methods</span><span className="text-white">.</span><span className="text-sky-300">handleDateChange</span><span className="text-white">&#125;</span> <span className="text-white">/&gt;</span>
                  <br/>
                  <br/>
                  <span className="text-white">      &lt;</span><span className="text-orange-400">button</span> <span className="text-cyan-300">onClick</span><span className="text-white">=</span><span className="text-white">&#123;</span><span className="text-cyan-300">methods</span><span className="text-white">.</span><span className="text-sky-300">goToToday</span><span className="text-white">&#125;&gt;</span><span className="text-white">Today</span><span className="text-white">&lt;/</span><span className="text-orange-400">button</span><span className="text-white">&gt;</span>
                  <br/>
                  <span className="text-white">      &lt;</span><span className="text-orange-400">button</span> <span className="text-cyan-300">onClick</span><span className="text-white">=</span><span className="text-white">&#123;</span><span className="text-cyan-300">methods</span><span className="text-white">.</span><span className="text-sky-300">clearSelection</span><span className="text-white">&#125;&gt;</span><span className="text-white">Clear</span><span className="text-white">&lt;/</span><span className="text-orange-400">button</span><span className="text-white">&gt;</span>
                  <br/>
                  <span className="text-white">    &lt;/</span><span className="text-orange-400">div</span><span className="text-white">&gt;</span>
                  <br/>
                  <span className="text-white">  );</span>
                  <br/>
                  <span className="text-white">&#125;</span>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>      
      
      {/* Video Tutorials Section */}
      {/* <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Tutorials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn how to integrate and use Uplink Protocol through our video tutorials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <VideoPlayer 
              src="/videos/form-controller-tutorial.mp4" 
              title="Building Forms with FormController" 
              poster="/images/form-controller-placeholder.png"
              aspectRatio="16:9"
            />
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-primary font-medium">Ready to streamline your development?</span>
          <h2 className="text-3xl md:text-4xl font-bold">Start building with decoupled logic today</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uplink provides a clean architecture for your projects, allowing teams to work in parallel with consistent behavior across all platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/getting-started" onClick={() => trackButtonClick('Footer Get Started')}>
              <Button size="lg" className="shadow-md cursor-pointer">Get Started</Button>
            </Link>
            <Link href="https://github.com/jmkcoder/odyssey-uplink-protocol" target="_blank" onClick={() => trackButtonClick('Footer View on GitHub')}>
              <Button variant="outline" size="lg" className="cursor-pointer">View on GitHub</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
