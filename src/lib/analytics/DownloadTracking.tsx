/**
 * Download Link Tracking
 * 
 * This utility provides a component and hook for tracking file downloads
 */

'use client';

import React from 'react';
import { event } from './gtag';
import { isAnalyticsEnabled } from './config';

// Common file extensions to track as downloads
const DOWNLOAD_EXTENSIONS = [
  // Documents
  'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'csv', 'txt',
  // Archives
  'zip', 'rar', 'gz', 'tar', '7z',
  // Media
  'mp3', 'mp4', 'wav', 'avi', 'mov', 'mkv',
  // Images (if they're being downloaded rather than displayed)
  'psd', 'ai', 'eps', 'svg', 'tiff'
];

interface DownloadLinkProps {
  /**
   * The URL to the file to download
   */
  href: string;
  
  /**
   * Optional file name to use in tracking (defaults to the filename portion of the URL)
   */
  fileName?: string;
  
  /**
   * Optional file type/extension to use in tracking (defaults to extracted extension)
   */
  fileType?: string;
  
  /**
   * Optional file size in bytes to include in tracking
   */
  fileSize?: number;
  
  /**
   * Optional category for the event (defaults to 'Download')
   */
  category?: string;
  
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
 * Extract the file name from a URL
 */
const getFileNameFromUrl = (url: string): string => {
  const pathParts = url.split('/');
  const fileName = pathParts[pathParts.length - 1].split('?')[0];
  return fileName;
};

/**
 * Extract the file extension from a URL
 */
const getFileExtensionFromUrl = (url: string): string => {
  const fileName = getFileNameFromUrl(url);
  const parts = fileName.split('.');
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : '';
};

/**
 * Format file size for display (e.g. "2.5 MB")
 */
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Component that tracks file downloads
 */
export const DownloadLink: React.FC<DownloadLinkProps> = ({
  href,
  fileName,
  fileType,
  fileSize,
  category = 'Download',
  className,
  children,
  ...props
}) => {
  // Extract file information from the URL if not provided
  const fileNameValue = fileName || getFileNameFromUrl(href);
  const fileTypeValue = fileType || getFileExtensionFromUrl(href);
  
  // Handle the click event
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call any existing onClick handler
    if (props.onClick) {
      props.onClick(e);
    }
    
    // Don't track non-production
    if (!isAnalyticsEnabled) return;
    
    // Track the download
    event({
      action: 'download',
      category,
      label: fileNameValue,
      file_extension: fileTypeValue,
      file_name: fileNameValue,
      ...(fileSize ? { file_size: formatFileSize(fileSize) } : {}),
    });
  };
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onClick, ...rest } = props;
  
  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      download
      {...rest}
    >
      {children}
    </a>
  );
};

/**
 * Hook to auto-track downloads on a page
 * 
 * This hook will automatically track clicks on links with downloadable file extensions
 */
export const useDownloadTracking = () => {
  React.useEffect(() => {
    if (!isAnalyticsEnabled) return;
    
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link || !link.href) return;
      
      const extension = getFileExtensionFromUrl(link.href);
      if (!extension || !DOWNLOAD_EXTENSIONS.includes(extension)) return;
      
      const fileName = getFileNameFromUrl(link.href);
      
      event({
        action: 'download',
        category: 'Download',
        label: fileName,
        file_extension: extension,
        file_name: fileName,
      });
    };
    
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);
};

export default DownloadLink;
