interface StructuredDataProps {
  type: 'organization' | 'website' | 'article' | 'product' | 'breadcrumb';
  data?: Record<string, unknown>;
  title?: string;
  description?: string;
  url?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function StructuredData({
  type,
  data = {},
  title,
  description,
  url,
  breadcrumbs
}: StructuredDataProps) {
  const getSchema = () => {
    const baseUrl = 'https://autobusinessos.com';

    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AutoBusinessOS",
          "description": "Enterprise-level intelligent automation solution platform providing comprehensive automation services for marketing, sales, customer service, and human resources",
          "url": baseUrl,
          "logo": `${baseUrl}/images/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-800-123-4567",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": "California",
            "addressLocality": "San Francisco"
          },
          "sameAs": [
            "https://www.linkedin.com/company/autobusinessos",
            "https://twitter.com/autobusinessos"
          ],
          ...data
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "AutoBusinessOS",
          "description": "Enterprise-level intelligent automation solution platform",
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          ...data
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "url": url || baseUrl,
          "author": {
            "@type": "Organization",
            "name": "AutoBusinessOS"
          },
          "publisher": {
            "@type": "Organization",
            "name": "AutoBusinessOS",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/images/logo.png`
            }
          },
          "datePublished": new Date().toISOString(),
          "dateModified": new Date().toISOString(),
          ...data
        };

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": title || "AutoBusinessOS",
          "description": description || "Enterprise-level intelligent automation solution platform",
          "url": url || baseUrl,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "125"
          },
          ...data
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs?.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`
          })) || []
        };

      default:
        return {};
    }
  };

  const schema = getSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}