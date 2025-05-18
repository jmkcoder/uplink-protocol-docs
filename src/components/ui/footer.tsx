import Link from 'next/link';
import { Button } from './button';

export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-background to-primary/5 border-t border-primary/10 mt-1">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Logo & Description */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary">Uplink Protocol</h3>
                        <p className="text-muted-foreground text-sm">
                            Decouple logic from UI. Write once, use anywhere across React, Vue, Web Components, and beyond.
                        </p>
                        <div className="flex space-x-4 pt-2">
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
                        </div>
                    </div>

                    {/* Column 2: Documentation */}
                    <div>
                        <h4 className="font-semibold text-primary mb-4">Documentation</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/getting-started" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                    Getting Started
                                </Link>
                            </li>
                            <li>
                                <Link href="/getting-started/uplink-protocol" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                    Uplink Protocol
                                </Link>
                            </li>
                            <li>
                                <Link href="/logic/form-controller" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                    Form Controller
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="font-semibold text-primary mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="https://github.com/jmkcoder/odyssey-uplink-protocol/discussions"
                                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                                    target="_blank"
                                >
                                    Community Forum
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/jmkcoder/odyssey-uplink-protocol/issues"
                                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                                    target="_blank"
                                >
                                    Bug Reports
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/jmkcoder/odyssey-uplink-protocol/releases"
                                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                                    target="_blank"
                                >
                                    Release Notes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-semibold text-primary mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact-us" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:jmkcoder@outlook.com" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                    jmkcoder101@outlook.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>        <div className="mt-12 pt-8 border-t border-primary/10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-muted-foreground text-sm">
                            Made with ❤️ by <a href="https://github.com/jmkcoder" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@jmkcoder</a>
                        </p>                        <div className="flex items-center space-x-6 mt-4 md:mt-0">
                            <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/privacy-policy#cookie-settings" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                Cookie Settings
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
