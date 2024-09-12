const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Eman Hussein Shahrour",
  "url": "https://www.eman-shahrour.de",
  "inLanguage": "de",
  "alternateName": "إيمان حسين شحرور",
  "alternateUrl": "https://www.eman-shahrour.de/ar/",
  "publisher": {
    "@type": "Person",
    "name": "Eman Hussein Shahrour"
  },
  "logo": "https://www.eman-shahrour.de/profile2.webp",
  "dateCreated": "2023-12-23",
  "dateModified": "2024-09-10"
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.eman-shahrour.de"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Arabic Version",
      "item": "https://www.eman-shahrour.de/ar/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Privacy Policy",
      "item": "https://www.eman-shahrour.de/privacy-policy/"
    }
  ]
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Eman Hussein Shahrour",
  "description": "Kontaktinformationen und Standort von Frau Eman Hussein Shahrour, die im Bereich Lebensmittellieferung in Bremerhaven, Deutschland tätig ist.",
  "url": "https://www.eman-shahrour.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rickmersstraße 62",
    "addressLocality": "Bremerhaven",
    "addressRegion": "HB",
    "postalCode": "27568",
    "addressCountry": "DE"
  },
  "email": "poststelle@eman-shahrour.de"
};

// Adding all structured data to the head section
const scriptElement1 = document.createElement('script');
scriptElement1.type = 'application/ld+json';
scriptElement1.text = JSON.stringify(websiteStructuredData);
document.head.appendChild(scriptElement1);

const scriptElement2 = document.createElement('script');
scriptElement2.type = 'application/ld+json';
scriptElement2.text = JSON.stringify(breadcrumbStructuredData);
document.head.appendChild(scriptElement2);

const scriptElement3 = document.createElement('script');
scriptElement3.type = 'application/ld+json';
scriptElement3.text = JSON.stringify(structuredData);
document.head.appendChild(scriptElement3);
