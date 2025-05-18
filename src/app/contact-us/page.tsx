'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function ContactUs() {
    // No logic implementation, just UI placeholders
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="py-16 px-4 md:px-6 text-center relative overflow-hidden">
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
                        <Badge variant="secondary" className="mb-6">Get in Touch</Badge>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            <span className="text-primary font-bold">
                                Contact Us
                            </span>
                            <br />
                            <span className="relative inline-block">
                                <span className="relative z-10 text-gray-700 font-bold">We'd love to hear from you</span>
                                <svg className="absolute -bottom-2 left-0 w-full h-8 text-gray-400" viewBox="0 0 300 30" preserveAspectRatio="none">
                                    <path d="M0,15 Q75,5 150,15 T300,15" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </span>
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
                        Have questions about Uplink? Need support with your implementation?
                        <br className="hidden md:block" />
                        Our team is here to help you succeed.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-12 px-4 md:px-6 max-w-5xl mx-auto relative z-10">
                <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                    <div className="animate-fade-in animation-delay-300">
                        <Card className="border border-primary/10 overflow-hidden">
                            <CardHeader className="px-6 py-5 bg-gradient-to-r from-primary/5 to-secondary/5">
                                <CardTitle className="text-2xl font-bold text-primary">Send us a message</CardTitle>
                                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                            </CardHeader>                            <CardContent className="space-y-6 p-6">
                                <form className="space-y-6">                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                            <Input id="firstName" placeholder="Enter your first name" />
                                            <p id="firstName-error" className="text-destructive text-xs mt-1 h-0 opacity-0">Please enter your first name.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                            <Input id="lastName" placeholder="Enter your last name" />
                                            <p id="lastName-error" className="text-destructive text-xs mt-1 h-0 opacity-0">Please enter your last name.</p>
                                        </div>
                                    </div>                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                        <Input id="email" type="email" placeholder="Enter your email address" />
                                        <p id="email-error" className="text-destructive text-xs mt-1 h-0 opacity-0">Please enter a valid email address.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium">Company (Optional)</label>
                                        <Input id="company" placeholder="Enter your company name" />
                                        <p id="company-error" className="text-destructive text-xs mt-1 h-0 opacity-0">Please enter your company.</p>
                                    </div>                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                        <Input id="subject" placeholder="What is your message about?" />
                                        <p id="subject-error" className="text-destructive text-xs mt-1 h-0 opacity-0">Please enter a subject for your message.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <Textarea
                                            id="message"
                                            placeholder="Please provide details about your inquiry or feedback"
                                            className="min-h-[150px]"
                                        />
                                        <p id="message-error" className="text-destructive text-xs mt-1 h-0 opacity-0">Please enter your message.</p>
                                    </div>

                                    <Button type="submit" className="w-full md:w-auto mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                            <path d="M22 2L11 13"></path>
                                            <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                                        </svg>
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="animate-fade-in animation-delay-400">
                        <Card className="h-full border border-primary/10">
                            <CardContent className="p-6 space-y-8 flex flex-col h-full">                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-2">Connect With Us</h3>
                                    <p className="text-muted-foreground text-sm">Reach out directly or through our GitHub repository.</p>
                                </div>

                                <div className="space-y-6 flex-1">                  <div className="flex items-start gap-3">
                                    <div className="bg-primary/10 p-2 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                    </div>                    <div>                                        <h4 className="text-sm font-medium">Email</h4>
                                        <a href="mailto:jmkcoder101@outlook.com" className="text-primary text-sm hover:underline">jmkcoder101@outlook.com</a>
                                    </div>
                                </div>

                                    <div className="flex items-start gap-3">
                                        <div className="bg-primary/10 p-2 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                                <path d="M9 18c-4.51 2-5-2-7-2" />
                                            </svg>
                                        </div>                    <div>
                                            <h4 className="text-sm font-medium">GitHub</h4>
                                            <a
                                                href="https://github.com/jmkcoder/odyssey-uplink-protocol"
                                                className="text-primary text-sm hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                github.com/jmkcoder/odyssey-uplink-protocol
                                            </a>
                                        </div>
                                    </div>                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 md:px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">Frequently Asked Questions</h3>
                    <p className="text-muted-foreground mt-2">Quick answers to common questions</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border border-primary/10 bg-gradient-to-br from-background to-primary/5 animate-fade-in animation-delay-500">
                        <CardContent className="p-6">
                            <h4 className="text-lg font-semibold mb-2">How quickly will you respond to my inquiry?</h4>
                            <p className="text-muted-foreground text-sm">We typically respond to all inquiries within 24-48 business hours. For urgent matters, please indicate so in your message subject.</p>
                        </CardContent>
                    </Card>

                    <Card className="border border-primary/10 bg-gradient-to-br from-background to-primary/5 animate-fade-in animation-delay-600">
                        <CardContent className="p-6">
                            <h4 className="text-lg font-semibold mb-2">Do you offer technical support?</h4>
                            <p className="text-muted-foreground text-sm">Yes, our team provides technical support for all Uplink Protocol implementations. Please provide details about your issue in the contact form.</p>
                        </CardContent>
                    </Card>

                    <Card className="border border-primary/10 bg-gradient-to-br from-background to-primary/5 animate-fade-in animation-delay-700">
                        <CardContent className="p-6">
                            <h4 className="text-lg font-semibold mb-2">Can I request a custom integration?</h4>
                            <p className="text-muted-foreground text-sm">Absolutely! We work with teams to create custom integrations for Uplink Protocol. Please describe your requirements in detail.</p>
                        </CardContent>
                    </Card>
                    <Card className="border border-primary/10 bg-gradient-to-br from-background to-primary/5 animate-fade-in animation-delay-800">
                        <CardContent className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                            <h4 className="text-lg font-semibold mb-2 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                                    <path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2"></path>
                                    <path d="M14 15a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2l4 4z"></path>
                                </svg>
                                Is there a community forum?
                            </h4>              <p className="text-muted-foreground text-sm">
                                Yes, we have an active community forum where developers share ideas, solutions, and best practices.
                                <a href="https://github.com/jmkcoder/odyssey-uplink-protocol/discussions"
                                    className="ml-1 inline-flex items-center text-primary font-medium hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Join our community discussions
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    )
}
