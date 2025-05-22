export interface Token {
  type?: string;
  content: string;
}

export function tokenize(code: string, language: string): Token[] {
  const tokens: Token[] = [];
  let currentIndex = 0;
  // Make sure code is a string before accessing length
  const codeLength = code ? code.length : 0;

  // Helper to add a token with HTML entities escaped
  const addToken = (type: string | undefined, content: string) => {
    if (!content) return; // Skip empty content
    
    // For HTML tags in JSX/HTML/etc., don't escape angle brackets
    const tokenContent = (type === "element" && 
                        (language === "jsx" || language === "tsx" || 
                         language === "html" || language === "vue" || 
                         language === "svelte")) 
      ? content
      : content.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;");
    
    tokens.push({ 
      type, 
      content: tokenContent
    });
  };

  // Process code based on language
  while (currentIndex < codeLength) {
    let matched = false;
    
    // Match comments
    if (code.substring(currentIndex, currentIndex + 2) === "//") {
      // Single line comment
      const endOfLine = code.indexOf("\n", currentIndex);
      const commentEnd = endOfLine === -1 ? codeLength : endOfLine;
      addToken("comment", code.substring(currentIndex, commentEnd));
      currentIndex = commentEnd;
      matched = true;
    }
    // Match multi-line comments
    else if (code.substring(currentIndex, currentIndex + 2) === "/*") {
      const commentEnd = code.indexOf("*/", currentIndex + 2);
      if (commentEnd !== -1) {
        addToken("comment", code.substring(currentIndex, commentEnd + 2));
        currentIndex = commentEnd + 2;
      } else {
        addToken("comment", code.substring(currentIndex));
        currentIndex = codeLength;
      }
      matched = true;
    }
    // Match strings
    else if (code[currentIndex] === '"' || code[currentIndex] === "'" || code[currentIndex] === "`") {
      const quoteChar = code[currentIndex];
      let endIndex = currentIndex + 1;
      let escaped = false;
      
      while (endIndex < codeLength) {
        if (code[endIndex] === '\\') {
          escaped = !escaped;
        } else if (code[endIndex] === quoteChar && !escaped) {
          break;
        } else {
          escaped = false;
        }
        endIndex++;
      }
      
      if (endIndex < codeLength) {
        endIndex++;
      }
      
      addToken("string", code.substring(currentIndex, endIndex));
      currentIndex = endIndex;
      matched = true;
    }
    // Match keywords
    else if (/[a-zA-Z_$]/.test(code[currentIndex])) {
      let wordEnd = currentIndex;
      while (wordEnd < codeLength && /[a-zA-Z0-9_$]/.test(code[wordEnd])) {
        wordEnd++;
      }
      
      const word = code.substring(currentIndex, wordEnd);
      const keywords = [
        'import', 'export', 'from', 'const', 'let', 'var', 'function', 'return',
        'if', 'else', 'for', 'while', 'class', 'extends', 'new', 'this',
        'async', 'await', 'try', 'catch', 'throw', 'typeof', 'instanceof'
      ];
      
      const jsxKeywords = [
        'props', 'state', 'context', 'ref', 'key'
      ];

      const reactHooks = [
        'useState', 'useEffect', 'useContext', 'useReducer', 'useCallback',
        'useMemo', 'useRef', 'useImperativeHandle', 'useLayoutEffect', 'useDebugValue'
      ];
      
      if (keywords.includes(word)) {
        addToken("keyword", word);
      } else if (reactHooks.includes(word)) {
        addToken("function", word);
      } else if (jsxKeywords.includes(word) && (language === 'jsx' || language === 'tsx')) {
        addToken("keyword", word);
      } else if (/^[A-Z]/.test(word)) {
        addToken("class", word);
      } else {
        // Check if it's a function (followed by opening parenthesis)
        let nextNonSpace = wordEnd;
        while (nextNonSpace < codeLength && /\s/.test(code[nextNonSpace])) {
          nextNonSpace++;
        }
        
        if (nextNonSpace < codeLength && code[nextNonSpace] === '(') {
          addToken("function", word);
        } else {
          addToken("variable", word);
        }
      }
      
      currentIndex = wordEnd;
      matched = true;
    }    // Match HTML/JSX/Vue elements in specific languages
    else if ((language === 'jsx' || language === 'tsx' || language === 'html' || language === 'vue' || language === 'svelte') 
            && code[currentIndex] === '<' && /[a-zA-Z/]/.test(code[currentIndex + 1] || '')) {
        // Find the matching closing bracket
      const tagEnd = code.indexOf('>', currentIndex);
      if (tagEnd === -1) {
        // If no closing bracket, just add the < as regular text
        addToken(undefined, "<");
        currentIndex++;
        matched = true;
        continue;
      }
      
      // Add the opening bracket
      addToken("element", "<");
      currentIndex++;
      
      // Check if it's a closing tag
      if (code[currentIndex] === '/') {
        addToken("element", "/");
        currentIndex++;
      }
      
      // Get tag name
      let nameEnd = currentIndex;
      while (nameEnd < tagEnd && !/[\s/>]/.test(code[nameEnd])) {
        nameEnd++;
      }
      
      if (nameEnd > currentIndex) {
        addToken("element", code.substring(currentIndex, nameEnd));
        currentIndex = nameEnd;
      }
        // Process attributes and the rest of the tag
      while (currentIndex < tagEnd) {
        // Process spaces
        if (/\s/.test(code[currentIndex])) {
          addToken(undefined, code[currentIndex]);
          currentIndex++;
          continue;
        }
        
        // Check for attribute name
        if (/[a-zA-Z_$]/.test(code[currentIndex])) {
          const attrStart = currentIndex;
          while (currentIndex < tagEnd && !/[\s=/>]/.test(code[currentIndex])) {
            currentIndex++;
          }
          
          if (currentIndex > attrStart) {
            addToken("attribute", code.substring(attrStart, currentIndex));
          }
          
          // Handle equals sign and value if present
          if (currentIndex < tagEnd && code[currentIndex] === '=') {
            // Add the equals sign
            addToken(undefined, "=");
            currentIndex++;
            
            // Skip whitespace
            while (currentIndex < tagEnd && /\s/.test(code[currentIndex])) {
              addToken(undefined, code[currentIndex]);
              currentIndex++;
            }
            
            // Handle attribute value
            if (currentIndex < tagEnd) {
              if (code[currentIndex] === '"' || code[currentIndex] === "'") {
                // Quoted value
                const quoteChar = code[currentIndex];
                const valueStart = currentIndex;
                let valueEnd = -1;
                
                for (let i = currentIndex + 1; i < tagEnd; i++) {
                  if (code[i] === quoteChar && code[i-1] !== '\\') {
                    valueEnd = i;
                    break;
                  }
                }
                
                if (valueEnd !== -1) {
                  addToken("string", code.substring(valueStart, valueEnd + 1));
                  currentIndex = valueEnd + 1;
                } else {
                  addToken("string", code.substring(valueStart, tagEnd));
                  currentIndex = tagEnd;
                }
              } else if (code[currentIndex] === '{') {
                // JSX expression
                addToken("element", "{");
                currentIndex++;
                
                // Find closing brace
                let braceLevel = 1;
                const exprStart = currentIndex;
                while (currentIndex < tagEnd && braceLevel > 0) {
                  if (code[currentIndex] === '{') braceLevel++;
                  else if (code[currentIndex] === '}') braceLevel--;
                  if (braceLevel > 0) currentIndex++;
                }
                
                if (exprStart < currentIndex) {
                  addToken("variable", code.substring(exprStart, currentIndex));
                }
                
                if (currentIndex < tagEnd && code[currentIndex] === '}') {
                  addToken("element", "}");
                  currentIndex++;
                }
              } else {
                // Unquoted value
                const valueStart = currentIndex;
                while (currentIndex < tagEnd && !/[\s/>]/.test(code[currentIndex])) {
                  currentIndex++;
                }
                
                if (currentIndex > valueStart) {
                  addToken("variable", code.substring(valueStart, currentIndex));
                }
              }
            }
          }
          
          continue;
        }
        
        // Process self-closing tag slash
        if (code[currentIndex] === '/' && currentIndex + 1 < tagEnd && code[currentIndex + 1] === '>') {
          addToken("element", "/");
          currentIndex++;
          continue;
        }
        
        // If none of the above, just add the current character
        addToken(undefined, code[currentIndex]);
        currentIndex++;
      }
      
      // Add closing bracket
      addToken("element", ">");
      currentIndex++;
      matched = true;
    }
    // Match JSX expressions in curly braces for JSX/TSX
    else if ((language === 'jsx' || language === 'tsx') && code[currentIndex] === '{') {
      // Add opening brace
      addToken("element", "{");
      currentIndex++;
      
      // Process the expression inside
      let braceLevel = 1;
      const expressionStart = currentIndex;
      
      while (currentIndex < codeLength && braceLevel > 0) {
        if (code[currentIndex] === '{') {
          braceLevel++;
        } else if (code[currentIndex] === '}') {
          braceLevel--;
        }
        
        if (braceLevel > 0) {
          currentIndex++;
        }
      }
      
      if (expressionStart < currentIndex) {
        // Recursively tokenize the content inside braces as JS
        const innerCode = code.substring(expressionStart, currentIndex);
        const innerTokens = tokenize(innerCode, 'js');
        
        // Add all inner tokens
        innerTokens.forEach(token => {
          tokens.push(token);
        });
      }
      
      // Add closing brace if we found one
      if (currentIndex < codeLength && code[currentIndex] === '}') {
        addToken("element", "}");
        currentIndex++;
      }
      
      matched = true;
    }
    // Match numbers
    else if (/[0-9]/.test(code[currentIndex])) {
      let numEnd = currentIndex;
      while (numEnd < codeLength && /[0-9.]/.test(code[numEnd])) {
        numEnd++;
      }
      addToken("number", code.substring(currentIndex, numEnd));
      currentIndex = numEnd;
      matched = true;
    }
    
    // If nothing matched, add the current character as plain text
    if (!matched) {
      addToken(undefined, code[currentIndex]);
      currentIndex++;
    }
  }
  
  return tokens;
}
