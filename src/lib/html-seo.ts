// Utility functions for HTML SEO optimization

/**
 * Adds proper heading structure to ensure accessibility and SEO
 * 
 * @param content HTML content string to process
 * @returns Processed HTML with proper heading structure
 */
export function optimizeHeadingStructure(content: string): string {
  // Check if there's an H1 tag in the content
  const hasH1 = /<h1[^>]*>/i.test(content);
  
  // If no H1 tag, convert the first heading to H1
  if (!hasH1) {
    // Find the first heading of any level
    const headingMatch = content.match(/<h[2-6][^>]*>(.*?)<\/h[2-6]>/i);
    
    if (headingMatch) {
      // Replace the first heading with an H1
      return content.replace(
        headingMatch[0],
        `<h1>${headingMatch[1]}</h1>`
      );
    }
  }
  
  return content;
}

/**
 * Adds proper alt text to images for accessibility and SEO
 * 
 * @param content HTML content string to process
 * @returns Processed HTML with alt text on images
 */
export function addImageAltText(content: string): string {
  // Find images without alt attributes
  return content.replace(
    /<img(?![^>]*alt=)([^>]*)>/gi,
    '<img alt="Uplink Protocol documentation image" $1>'
  );
}

/**
 * Adds rel attributes to external links for security and SEO
 * 
 * @param content HTML content string to process
 * @returns Processed HTML with proper rel attributes on external links
 */
export function optimizeExternalLinks(content: string): string {
  // Find external links (those starting with http)
  return content.replace(
    /<a[^>]*href=["'](https?:\/\/(?!jmkcoder\.github\.io\/uplink-protocol-docs)[^"']*)["'][^>]*>/gi,
    '<a href="$1" rel="noopener noreferrer" target="_blank">'
  );
}

/**
 * Adds semantic HTML elements for better SEO
 * 
 * @param content HTML content string to process
 * @returns Processed HTML with semantic elements
 */
export function addSemanticStructure(content: string): string {
  // Wrap code blocks in figure and figcaption for better semantics
  return content
    .replace(
      /<pre><code[^>]*>(.*?)<\/code><\/pre>/gis,
      '<figure class="code-block"><pre><code>$1</code></pre><figcaption>Code example</figcaption></figure>'
    )
    .replace(
      /<table>/gi,
      '<div class="table-wrapper"><table>'
    )
    .replace(
      /<\/table>/gi,
      '</table></div>'
    );
}

/**
 * Apply all HTML SEO optimizations to content
 * 
 * @param content HTML content string to process
 * @returns Fully optimized HTML content
 */
export function optimizeHTML(content: string): string {
  return addSemanticStructure(
    optimizeExternalLinks(
      addImageAltText(
        optimizeHeadingStructure(content)
      )
    )
  );
}
