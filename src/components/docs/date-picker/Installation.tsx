'use client'

import { CodeBlock } from "@/components/code-block"

export function Installation() {
  return (
    <div className="space-y-6">
      <h2 id="installation" className="text-2xl font-bold tracking-tight mt-10 scroll-m-20">Installation</h2>
      
      <p className="text-base leading-relaxed">
        Calendar Controller is available as an npm package and can be installed using npm, yarn, or pnpm:
      </p>
      
      <div className="space-y-4">
        <CodeBlock code="npm install @uplink-protocol/date-picker" language="bash" showLineNumbers={false} />
        <CodeBlock code="yarn add @uplink-protocol/date-picker" language="bash" showLineNumbers={false} />
        <CodeBlock code="pnpm add @uplink-protocol/date-picker" language="bash" showLineNumbers={false} />
      </div>
      
      <p className="text-base leading-relaxed">
        The package contains everything you need for date selection and management, including the core controller and optional UI components for common frameworks.
      </p>
    </div>
  )
}
