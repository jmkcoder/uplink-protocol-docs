"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MethodsApi from "@/components/docs/form-controller/api/MethodsApi";
import ConfigurationApi from "@/components/docs/form-controller/api/ConfigurationApi";
import StateApi from "@/components/docs/form-controller/api/StateApi";
import ValidationApi from "@/components/docs/form-controller/api/ValidationApi";
import { DocsPageLayout } from "@/components/docs/docs-page-layout";


export default function FormControllerApiPage() {
  return (
    <DocsPageLayout>
      {/* Header & Navigation */}
      <div className="space-y-2 mb-6 sm:mb-8">
        <Badge variant="outline">Logic</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Form Controller API</h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Detailed documentation for the FormController, its methods, configuration, state management, and validation capabilities.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 border-b border-border">
          <Link href="/logic/form-controller/overview" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Overview</Link>
          <Link href="/logic/form-controller/api" className="font-medium text-primary border-b-2 border-primary hover:text-foreground pb-2 text-sm sm:text-base">API</Link>
          <Link href="/logic/form-controller/examples" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Examples</Link>
          <Link href="/logic/form-controller/extensibility" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Extensibility</Link>
        </div>
      </div>      {/* API Content */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">API Reference</h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6">
          Comprehensive documentation of Form Controller's API and capabilities.
        </p>

        <div className="mb-6 sm:mb-8">
          <Tabs defaultValue="methods" className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="flex w-full mb-4 sm:mb-6 min-w-[360px]">
                <TabsTrigger value="methods" className="flex-grow text-sm py-1.5 sm:py-2">Methods</TabsTrigger>
                <TabsTrigger value="configuration" className="flex-grow text-sm py-1.5 sm:py-2">Configuration</TabsTrigger>
                <TabsTrigger value="state" className="flex-grow text-sm py-1.5 sm:py-2">State</TabsTrigger>
                <TabsTrigger value="validation" className="flex-grow text-sm py-1.5 sm:py-2">Validation</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="methods">
              <MethodsApi />
            </TabsContent>
            <TabsContent value="configuration">
              <ConfigurationApi />
            </TabsContent>
            <TabsContent value="state">
              <StateApi />
            </TabsContent>
            <TabsContent value="validation">
              <ValidationApi />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </DocsPageLayout>
  );
};
