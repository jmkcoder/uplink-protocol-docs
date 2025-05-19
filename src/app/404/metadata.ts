import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  'Page Not Found - Uplink Protocol',
  'The page you are looking for does not exist or has been moved.',
  '/404'
);
