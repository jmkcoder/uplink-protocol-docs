/**
 * Outbound Link Tracking Component
 * 
 * This component wraps links to external sites and automatically tracks
 * when users click on them to navigate away from the site.
 */

'use client';

import React from 'react';
import { event } from './gtag';
import { shouldEnableAnalytics } from './config';

interface OutboundLinkProps {
  /**
   * The destination URL
   */
  href: string;
  
  /**
   * Optional category for the event (defaults to 'Outbound Link')
   */
  category?: string;
  
  /**
   * Optional label for the event (defaults to the href)
   */
  label?: string;
  
  /**
   * Whether the link should open in a new tab (defaults to true for external links)
   */
  newTab?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Child elements to render inside the link
   */
  children: React.ReactNode;
  
  /**
   * Additional props to spread onto the anchor element
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * Component that tracks clicks on outbound links
 */
export const OutboundLink: React.FC<OutboundLinkProps> = ({
  href,
  category = 'Outbound Link',
  label,
  newTab = true,
  className,
  children,
  ...props
}) => {
  // Remove any props we've used
  const { rel, target, onClick, ...rest } = props;
  
  // Determine if this is an external link
  const isExternal = href.startsWith('http') || href.startsWith('//');
  const shouldOpenNewTab = newTab && isExternal;
  // Handle the click event
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call any existing onClick handler
    if (onClick) {
      onClick(e);
    }
    
    // Only track if analytics is enabled and user has consented
    if (!shouldEnableAnalytics()) return;
    
    // Track the click
    event({
      action: 'click',
      category,
      label: label || href,
      destination: href,
      outbound: isExternal.toString(),
    });
  };
  
  return (
    <a
      href={href}
      onClick={handleClick}
      target={shouldOpenNewTab ? '_blank' : target}
      rel={shouldOpenNewTab ? 'noopener noreferrer' : rel}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
};

export default OutboundLink;
