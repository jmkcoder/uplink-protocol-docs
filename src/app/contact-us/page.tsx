'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useRef, useEffect, useState } from "react"
import { useAnalytics, useScrollDepthTracking, useTimeOnPage } from "@/lib/analytics"
import { useUplink } from "@uplink-protocol/react"
import { FormController, FormConfig } from "@uplink-protocol/form-controller"
import { useToast } from "@/components/ui/toast-provider"

// Define form configuration

export default function ContactUs() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formStartTimeRef = useRef<number>(Date.now());
    const { showToast } = useToast();

    const formConfig: FormConfig = {
        steps: [
            {
                id: "contactInfo",
                title: "Contact Information",
                fields: {
                    firstName: {
                        id: "firstName",
                        value: "",
                        label: "First Name",
                        type: "text",
                        required: true,
                        validation: {
                            errorMessages: {
                                required: "First name is required"
                            }
                        }
                    },
                    lastName: {
                        id: "lastName",
                        value: "",
                        label: "Last Name",
                        type: "text",
                        required: true,
                        validation: {
                            errorMessages: {
                                required: "Last name is required"
                            }
                        }
                    },
                    email: {
                        id: "email",
                        value: "",
                        label: "Email Address",
                        type: "email",
                        required: true,
                        validation: {
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            errorMessages: {
                                required: "Email address is required",
                                pattern: "Please enter a valid email address"
                            }
                        }
                    },
                    company: {
                        id: "company",
                        value: "",
                        label: "Company",
                        type: "text",
                        required: false
                    },
                    subject: {
                        id: "subject",
                        value: "",
                        label: "Subject",
                        type: "text",
                        required: true,
                        validation: {
                            errorMessages: {
                                required: "Subject is required"
                            }
                        }
                    },
                    message: {
                        id: "message",
                        value: "",
                        label: "Message",
                        type: "textarea",
                        required: true,
                        validation: {
                            errorMessages: {
                                required: "Message is required"
                            }
                        }
                    }
                }
            }
        ]
    };

    // Initialize the form controller with useUplink
      const { state, methods } = useUplink(
        () => FormController(formConfig),
        { trackBindings: "all" }
      );

    // Get our analytics tracking function
    const { trackEvent } = useAnalytics();

    // Track scroll depth for this page
    useScrollDepthTracking({
        thresholds: [25, 50, 75, 100],
        trackPagePath: true
    });

    // Track time on page
    useTimeOnPage({
        minTimeMs: 3000, // 3 seconds
        sendInterval: 60000 // Send update every minute
    });

    // Initialize the form when the component mounts
    useEffect(() => {
        // Record when the user started interacting with the form
        formStartTimeRef.current = Date.now();

        // Track form view
        trackEvent({
            action: 'contact_form_view',
            category: 'Contact',
        });
    }, [trackEvent]);

    // Handle field changes with Uplink method
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        methods.updateField("contactInfo", id, value);

        // Track field interaction after user has entered at least 3 characters
        if (value.length === 3) {
            trackEvent({
                action: 'contact_field_interaction',
                category: 'Form Interaction',
                label: id
            });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Use the form controller's validation and submission
        const result = methods.submitForm();

        if (result.success) {
            // Make a deep copy of the form data
            const stateCopy = JSON.parse(JSON.stringify(state));

            // Track form submission attempt
            trackEvent({
                action: 'contact_form_submit',
                category: 'Contact',
                label: stateCopy.formData?.contactInfo?.subject || '',
                has_company: Boolean(stateCopy.formData?.contactInfo?.company),
                form_completion_time: Date.now() - formStartTimeRef.current,
                form_fields_count: Object.values(stateCopy.formData?.contactInfo || {}).filter(Boolean).length
            });

            // Send the form data to FormSubmit.co
            fetch("https://formsubmit.co/jmkcoder101@outlook.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: `${stateCopy.formData.contactInfo.firstName} ${stateCopy.formData.contactInfo.lastName}`,
                    email: stateCopy.formData.contactInfo.email,
                    company: stateCopy.formData.contactInfo.company || 'Not provided',
                    subject: stateCopy.formData.contactInfo.subject,
                    message: stateCopy.formData.contactInfo.message,
                    _subject: `Contact Form: ${stateCopy.formData.contactInfo.subject}`,
                    _template: "table",
                    _captcha: "false"
                })
            })            .then(data => {
                // Track successful form submission and email sending
                trackEvent({
                    action: 'contact_form_email_sent',
                    category: 'Contact',
                    label: 'FormSubmit'
                });
                
                console.log("Email sent successfully:", data);
                
                // Show success toast notification
                showToast({
                    message: "Your message has been sent successfully! We'll get back to you soon.",
                    type: "success",
                    duration: 5000
                });
            })
            .catch(error => {
                console.error("Error sending email:", error);
                
                // Track error in email sending
                trackEvent({
                    action: 'contact_form_email_error',                    category: 'Contact',
                    label: error.message || 'Unknown error'
                });
                
                // Show error toast notification
                showToast({
                    message: "There was an error sending your message. Please try again later.",
                    type: "error",
                    duration: 5000
                });
            })
            .finally(() => {
                // Track successful submission
                trackEvent({
                    action: 'contact_form_success',
                    category: 'Contact'
                });

                methods.resetForm();
                setIsSubmitting(false);
            });
        } else {            // Track validation errors
            const errorFields = Object.keys(state.fieldErrors?.contactInfo || {});
            trackEvent({
                action: 'contact_form_error',
                category: 'Contact',
                label: errorFields.join(',')
            });
            
            // Show validation error toast
            showToast({
                message: "Please correct the errors in the form before submitting.",
                type: "error",
                duration: 5000
            });
            
            setIsSubmitting(false);
        }
    };

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
                            </CardHeader>
                            <CardContent className="space-y-6 p-6">
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                            <Input
                                                id="firstName"
                                                placeholder="Enter your first name"
                                                value={state.formData?.contactInfo?.firstName || ''}
                                                onChange={handleChange}
                                            />
                                            {state.fieldErrors.contactInfo?.firstName && (
                                                <p className="text-destructive text-xs mt-1">
                                                    {state.fieldErrors.contactInfo.firstName}
                                                </p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                            <Input
                                                id="lastName"
                                                placeholder="Enter your last name"
                                                value={state.formData?.contactInfo?.lastName || ''}
                                                onChange={handleChange}
                                            />
                                            {state.fieldErrors.contactInfo?.lastName && (
                                                <p className="text-destructive text-xs mt-1">
                                                    {state.fieldErrors.contactInfo.lastName}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={state.formData?.contactInfo?.email || ''}
                                            onChange={handleChange}
                                        />
                                        {state.fieldErrors.contactInfo?.email && (
                                            <p className="text-destructive text-xs mt-1">
                                                {state.fieldErrors.contactInfo.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium">Company (Optional)</label>
                                        <Input
                                            id="company"
                                            placeholder="Enter your company name"
                                            value={state.formData?.contactInfo?.company || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                        <Input
                                            id="subject"
                                            placeholder="What is your message about?"
                                            value={state.formData?.contactInfo?.subject || ''}
                                            onChange={handleChange}
                                        />
                                        {state.fieldErrors.contactInfo?.subject && (
                                            <p className="text-destructive text-xs mt-1">
                                                {state.fieldErrors.contactInfo.subject}
                                            </p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <Textarea
                                            id="message"
                                            placeholder="Please provide details about your inquiry or feedback"
                                            className="min-h-[150px]"
                                            value={state.formData?.contactInfo?.message || ''}
                                            onChange={handleChange}
                                        />
                                        {state.fieldErrors.contactInfo?.message && (
                                            <p className="text-destructive text-xs mt-1">
                                                {state.fieldErrors.contactInfo.message}
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto mt-2"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : isSubmitting ? (
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                                Sent Successfully!
                                            </>
                                        ) : (
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                                    <path d="M22 2L11 13"></path>
                                                    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                                                </svg>
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Info Card */}
                    <div className="animate-fade-in animation-delay-400">
                        <Card className="h-full border border-primary/10">
                            <CardContent className="p-6 space-y-8 flex flex-col h-full">
                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-2">Connect With Us</h3>
                                    <p className="text-muted-foreground text-sm">Reach out directly or through our GitHub repository.</p>
                                </div>

                                <div className="space-y-6 flex-1">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-primary/10 p-2 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium">Email</h4>
                                            <a
                                                href="mailto:jmkcoder101@outlook.com"
                                                className="text-primary text-sm hover:underline"
                                                onClick={() => trackEvent({
                                                    action: 'click_email_link',
                                                    category: 'Contact',
                                                    label: 'jmkcoder101@outlook.com'
                                                })}
                                            >
                                                jmkcoder101@outlook.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="bg-primary/10 p-2 rounded-md">
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
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium">GitHub Repository</h4>
                                            <a
                                                href="https://github.com/jmkcoder/odyssey-uplink-protocol"
                                                className="text-primary text-sm hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => trackEvent({
                                                    action: 'click_github_link',
                                                    category: 'Contact',
                                                    label: 'GitHub Repository'
                                                })}
                                            >
                                                github.com/jmkcoder/odyssey-uplink-protocol
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-10 px-4 md:px-6 max-w-5xl mx-auto relative z-10">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12 relative overflow-hidden shadow-lg border border-primary/20 animate-fade-in animation-delay-200">
                    {/* Abstract data flow graphic */}
                    <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" className="text-primary" />
                        </svg>
                    </div>
                    
                    <div className="relative z-10">
                        <svg className="text-primary w-12 h-12 mb-6 opacity-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                        </svg>
                        
                        <blockquote className="text-lg md:text-2xl font-medium italic text-primary mb-4 md:mb-6">
                            This contact experience isn't just a form — it's a showcase of Uplink Protocol's real-time data binding and state management capabilities in action.
                        </blockquote>
                        
                        <div className="flex items-center">
                            <div className="mr-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-sm md:text-base">JmkCoder</p>
                                <p className="text-xs md:text-sm text-muted-foreground">Powered by Uplink Protocol</p>
                            </div>
                        </div>
                        
                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-8">
                            <Badge variant="outline" className="bg-background/80 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                    <path d="m12 18 3-4.5a2.5 2.5 0 0 0 0-2.9l-2.95-2.95a3.2 3.2 0 0 0-4.5 0l-3 2.95a2.5 2.5 0 0 0 0 2.9L9 18a4.24 4.24 0 0 0 3 0z" />
                                </svg>
                                Form state tracked with Uplink
                            </Badge>
                        </div>
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
