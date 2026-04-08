import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

export default function SEO({ title, description, canonical, type = 'website' }: SEOProps) {
  const siteName = "Global Hedef Sigorta";
  const fullTitle = title === siteName ? siteName : `${siteName} - ${title}`;

  const siteUrl = "https://globalhedefsigorta.com";
  const currentPath = window.location.pathname;
  const canonicalUrl = canonical || `${siteUrl}${currentPath === '/' ? '' : currentPath}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
