// This utility helps with auto-generating meta descriptions from content
import { remark } from 'remark';
import strip from 'strip-markdown';

/**
 * Extracts content from markdown and generates a suitable meta description
 * @param markdown The markdown content to process
 * @param maxLength Maximum length of the generated description (default: 160)
 * @returns A plain text description suitable for SEO
 */
export async function extractMetaDescription(markdown: string, maxLength = 160): Promise<string> {
  // Process markdown to remove formatting and extract plain text
  const result = await remark()
    .use(strip)
    .process(markdown);
  
  let plainText = String(result).trim();
  
  // Remove extra whitespace and newlines
  plainText = plainText.replace(/\s+/g, ' ');
  
  // Truncate to maxLength and add ellipsis if needed
  if (plainText.length > maxLength) {
    // Try to truncate at a sentence or period if possible
    const periodIndex = plainText.lastIndexOf('.', maxLength - 3);
    if (periodIndex > maxLength * 0.7) {
      // If we can find a good sentence break that's at least 70% into our text
      return plainText.substring(0, periodIndex + 1);
    }
    
    // Otherwise truncate at a word boundary
    const truncated = plainText.substring(0, maxLength - 3);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    
    return truncated.substring(0, lastSpaceIndex) + '...';
  }
  
  return plainText;
}

/**
 * Extracts headings from markdown content for generating page structure
 * @param markdown The markdown content to process
 * @returns An array of heading objects with text and level
 */
export async function extractHeadings(markdown: string): Promise<Array<{text: string, level: number}>> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Array<{text: string, level: number}> = [];
  
  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    headings.push({ level, text });
  }
  
  return headings;
}

/**
 * Generates FAQ structured data from markdown content
 * @param markdown The markdown content to process
 * @returns An array of FAQ items for structured data
 */
export async function generateFaqItems(markdown: string): Promise<Array<{question: string, answer: string}>> {
  const headings = await extractHeadings(markdown);
  const faqItems: Array<{question: string, answer: string}> = [];
  
  // Use H2 and H3 headings as potential FAQ questions
  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];
    
    // Only use H2 and H3 headings with a question mark or that look like questions
    if (
      (heading.level === 2 || heading.level === 3) && 
      (heading.text.includes('?') || 
       heading.text.toLowerCase().startsWith('how') ||
       heading.text.toLowerCase().startsWith('what') ||
       heading.text.toLowerCase().startsWith('when') ||
       heading.text.toLowerCase().startsWith('why') ||
       heading.text.toLowerCase().startsWith('can') ||
       heading.text.toLowerCase().startsWith('does'))
    ) {
      // Find the next heading to extract content in between
      const nextHeadingIndex = headings.findIndex(
        (h, idx) => idx > i && h.level <= heading.level
      );
      
      // Extract content between current heading and next heading of same or higher level
      const startPos = markdown.indexOf(heading.text) + heading.text.length;
      const endPos = nextHeadingIndex !== -1 
        ? markdown.indexOf('#'.repeat(headings[nextHeadingIndex].level) + ' ' + headings[nextHeadingIndex].text)
        : markdown.length;
      
      if (startPos < endPos) {
        let answerMarkdown = markdown.substring(startPos, endPos).trim();
        
        // Process the answer to get plain text
        const answer = await extractMetaDescription(answerMarkdown, 200);
        
        if (answer) {
          faqItems.push({
            question: heading.text,
            answer
          });
        }
      }
    }
  }
  
  return faqItems;
}

/**
 * Extracts keywords from markdown content
 * @param markdown The markdown content to process
 * @returns An array of potential keywords
 */
export async function extractKeywords(markdown: string): Promise<string[]> {
  const text = await extractMetaDescription(markdown, 1000);
  
  // Remove common words and get keyword candidates
  const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'with', 'by', 'about', 'as', 'of'];
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.includes(word));
  
  // Count word frequencies
  const wordFrequency: Record<string, number> = {};
  words.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });
  
  // Get top keywords
  const topKeywords = Object.entries(wordFrequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);
  
  return topKeywords;
}
