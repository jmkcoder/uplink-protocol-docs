"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DocsSidebar } from "@/components/docs/sidebar";
import MethodsApi from "@/components/docs/form-controller/api/MethodsApi";
import ConfigurationApi from "@/components/docs/form-controller/api/ConfigurationApi";
import StateApi from "@/components/docs/form-controller/api/StateApi";
import ValidationApi from "@/components/docs/form-controller/api/ValidationApi";

const FormControllerApiPage: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground">
      {/* Sidebar */}
      <DocsSidebar />

      {/* Main Content */}
      <div className="flex-1 px-6 py-12 lg:max-w-4xl">
        {/* Header & Navigation */}
        <div className="space-y-2 mb-8">
          <Badge variant="outline">Logic</Badge>
          <h1 className="text-4xl font-bold tracking-tight">
            Form Controller API
          </h1>
          <p className="text-muted-foreground text-lg">
            Detailed documentation for the FormController, its methods,
            configuration, state management, and validation capabilities.
          </p>

          <div className="flex gap-4 pt-4 border-b border-border">
            <Link
              href="/logic/form-controller/overview"
              className="text-muted-foreground hover:text-foreground pb-2"
            >
              Overview
            </Link>
            <Link
              href="/logic/form-controller/api"
              className="font-medium text-primary border-b-2 border-primary pb-2"
            >
              API
            </Link>
            <Link
              href="/logic/form-controller/examples"
              className="text-muted-foreground hover:text-foreground pb-2"
            >
              Examples
            </Link>
          </div>
        </div>

        {/* API Content */}
        <Tabs defaultValue="methods" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
            <TabsTrigger value="methods">Methods</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="state">State</TabsTrigger>
            <TabsTrigger value="validation">Validation</TabsTrigger>
          </TabsList>

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
    </main>
  );
};

export default FormControllerApiPage;
