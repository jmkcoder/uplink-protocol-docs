"use client";

import { useMemo, useState } from "react";
import { tokenize, Token } from '../syntax-highlighter/tokenizer';

interface SyntaxHighlighterProps {
  code: string;
  language?: "js" | "jsx" | "ts" | "tsx" | "html" | "css" | "shell" | "vue" | "svelte";
}

export function SyntaxHighlighter({ code, language = "jsx" }: SyntaxHighlighterProps) {
  const [copied, setCopied] = useState(false);
  
  // First split the code into lines to preserve the exact line structure
  const codeLines = useMemo(() => code.split('\n'), [code]);
  
  // Process and tokenize each line separately to maintain line integrity
  const lines = useMemo(() => {
    return codeLines.map((line) => {
      return tokenize(line, language);
    });
  }, [codeLines, language]);
  
  // Function to handle copy to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <pre className="leading-relaxed syntax-highlight relative overflow-x-auto">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-zinc-700/80 hover:bg-zinc-600 text-zinc-200 rounded px-2 py-1 text-xs font-medium transition-colors flex items-center gap-1.5 z-10"
        aria-label={copied ? "Copied!" : "Copy code"}
      >
        {copied ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
            </svg>
            <span>Copy</span>
          </>
        )}
      </button>      <code className="block w-full">
        {lines.map((lineTokens, lineIndex) => (
          <div key={lineIndex} className="table-row">            
            <span className="table-cell pr-4 text-right text-zinc-500 select-none w-8 min-w-[2.5rem] pl-2">
              {lineIndex + 1}
            </span>
            <span className="table-cell overflow-visible w-full max-w-full">
              {lineTokens.map((token: Token, tokenIndex: number) => (
                token.type ? 
                  <span key={tokenIndex} className={token.type} dangerouslySetInnerHTML={{ __html: token.content }}></span> : 
                  <span key={tokenIndex} dangerouslySetInnerHTML={{ __html: token.content }}></span>
              ))}
              {/* Add an empty line if this is the last line and empty to maintain proper spacing */}
              {lineTokens.length === 0 && <span>&nbsp;</span>}
            </span>
          </div>
        ))}
      </code>
    </pre>
  );
}
