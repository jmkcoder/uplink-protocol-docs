import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  'Getting Started with Uplink Protocol',
  'Learn how to integrate Uplink Protocol into your projects and decouple logic from UI across different frameworks.',
  '/getting-started'
);
