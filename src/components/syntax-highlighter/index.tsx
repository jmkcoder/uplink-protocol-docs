"use client";

import { useMemo, useState } from "react";
import { tokenize, Token } from './tokenizer';

interface SyntaxHighlighterProps {
  code: string;
  language?: "js" | "jsx" | "ts" | "tsx" | "html" | "css" | "shell" | "vue" | "svelte";
}

export function SyntaxHighlighter({ code, language = "jsx" }: SyntaxHighlighterProps) {
  const [copied, setCopied] = useState(false);
    // Process and tokenize the code
  const tokens = useMemo(() => tokenize(code, language), [code, language]);
  const lines = useMemo(() => {
    // First, split the raw code by newlines to get the actual number of lines
    const rawLines = code.split('\n');
    
    // Initialize empty line arrays
    const codeLines: Array<Token[]> = [];
    for (let i = 0; i < rawLines.length; i++) {
      codeLines.push([]);
    }
      // Track position in the original code
    let lineIndex = 0; // Current line we're processing
    
    // Process each token
    for (const token of tokens) {
      const tokenContent = token.content;
      let remainingContent = tokenContent;
      let tokenStartIndex = 0;
      
      // Find line breaks within this token
      while (remainingContent.includes('\n')) {
        // Get content until the next line break
        const nextLineBreakIndex = remainingContent.indexOf('\n');
        const currentLineContent = remainingContent.substring(0, nextLineBreakIndex);
        
        // Add this content to the current line if not empty
        if (currentLineContent.length > 0) {
          codeLines[lineIndex].push({
            type: token.type,
            content: currentLineContent
          });
        }
        
        // Move to next line
        lineIndex++;
        if (lineIndex >= codeLines.length) {
          break; // Safety check to avoid out-of-bounds
        }
        
        // Update tracking variables
        tokenStartIndex += nextLineBreakIndex + 1;
        remainingContent = tokenContent.substring(tokenStartIndex);
      }
      
      // Add any remaining content (part of the token after the last line break)
      if (remainingContent.length > 0 && lineIndex < codeLines.length) {
        codeLines[lineIndex].push({
          type: token.type,
          content: remainingContent
        });
      }
    }
    
    return codeLines;
  }, [tokens, code]);
  
  // Function to handle copy to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  
  return (
    <pre className="leading-relaxed syntax-highlight relative overflow-x-auto whitespace-pre-wrap w-full max-w-full">
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
        )}      </button>
      <div className="overflow-x-auto min-w-0">
        <code className="block w-full">
          {lines.map((lineTokens, lineIndex) => (
            <div key={lineIndex} className="table-row whitespace-pre-wrap">
              <span className="table-cell pr-4 text-right text-zinc-500 select-none w-8 min-w-[2.5rem] pl-2">
                {lineIndex + 1}
              </span>
              <span className="table-cell overflow-visible break-words w-full max-w-full">
                {lineTokens.map((token: Token, tokenIndex: number) => (
                  token.type ? 
                    <span key={tokenIndex} className={token.type} dangerouslySetInnerHTML={{ __html: token.content }}></span> : 
                    <span key={tokenIndex} dangerouslySetInnerHTML={{ __html: token.content }}></span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </div>
    </pre>
  );
}
