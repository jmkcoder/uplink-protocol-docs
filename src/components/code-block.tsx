"use client";

import { useState } from "react";
import { SyntaxHighlighter } from "./syntax-highlighter";

// Import types from the syntax highlighter
type SyntaxHighlighterLanguage = "js" | "jsx" | "ts" | "tsx" | "html" | "css" | "shell" | "vue" | "svelte";

interface CodeBlockProps {
  code: string;
  language?: SyntaxHighlighterLanguage;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Function to handle the copy action
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <div className="relative">
      <SyntaxHighlighter code={code} language={language} />
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white py-1 px-2 rounded text-xs transition-colors"
        aria-label={copied ? "Copied!" : "Copy code"}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
