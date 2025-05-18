import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animations.css";
import "./syntax-highlight.css";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { SidebarProvider } from "@/components/docs/sidebar-context";
import { SidebarToggle } from "@/components/docs/sidebar-toggle";
import { Footer } from "@/components/ui/footer";
import { AnalyticsProvider } from "@/lib/analytics";
import { Search } from "@/components/ui/search";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uplink | Logic as a Service",
  description: "Decouple logic from UI. Write once, use anywhere across React, Vue, Web Components, and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if environment is development
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnalyticsProvider>
          <SidebarProvider>
          {/* Header */}
          <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <SidebarToggle />
                <Link href="/" className="flex items-center gap-2">
                  <h1 className="text-xl font-bold tracking-tight text-primary">Uplink Protocol</h1>
                </Link>
              </div>
              <div className="hidden md:block w-64">
                <Search />
              </div>
              <nav>
                <ul className="flex items-center gap-6">
                  <li>
                    <Link href="/contact-us" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Button variant="ghost" size="sm" className="gap-2 cursor-pointer">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="h-5 w-5"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="hidden sm:inline">Contact Us</span>
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/jmkcoder/odyssey-uplink-protocol" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Button variant="ghost" size="sm" className="gap-2 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span className="hidden sm:inline">GitHub</span>
                      </Button>
                    </Link>
                  </li>
                  {isDevelopment && (
                    <li>
                      <Link href="/analytics" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Button variant="ghost" size="sm" className="gap-2 cursor-pointer">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="h-5 w-5"
                          >
                            <path d="M3 3v18h18" />
                            <path d="M18 17V9" />
                            <path d="M13 17V5" />
                            <path d="M8 17v-3" />
                          </svg>
                          <span className="hidden sm:inline">Analytics</span>
                        </Button>
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link href="/getting-started">
                      <Button size="sm" className="cursor-pointer">Get Started</Button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          
          {children}
          
          <Footer />
        </SidebarProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
