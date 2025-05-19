import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  'Form Controller Overview - Uplink Protocol',
  'A flexible, framework-agnostic form management system for both multi-step and single-step forms with advanced validation capabilities. Complete guide and documentation.',
  '/logic/form-controller/overview',
  {
    keywords: [
      'form controller',
      'form validation', 
      'form management',
      'multi-step forms',
      'JavaScript forms',
      'TypeScript forms',
      'form state management',
      'reactive forms',
      'uplink protocol',
      'web development'
    ],
    openGraph: {
      type: 'article',
      article: {
        publishedTime: '2023-01-01T00:00:00+00:00',
        modifiedTime: new Date().toISOString(),
        section: 'Form Controller Documentation',
        tags: ['form controller', 'validation', 'typescript', 'javascript'],
      },
    },
  }
);
