const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.eman-shahrour.de",
  "name": "Eman Hussein Shahrour",
  "alternateName": "إيمان حسين شحرور",
  "inLanguage": ["de", "ar"],
  "dateCreated": "2023-12-23",
  "dateModified": "2024-09-14",
  "publisher": {
    "@type": "Person",
    "name": "Eman Hussein Shahrour"
  },
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Arabische Version",
      "url": "https://www.eman-shahrour.de/ar/",
      "inLanguage": "ar"
    },
    {
      "@type": "WebPage",
      "name": "Datenschutzrichtlinie",
      "url": "https://www.eman-shahrour.de/privacy-policy/",
      "inLanguage": "de"
    }
  ]
};


const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Startseite",
      "item": "https://www.eman-shahrour.de"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Arabische Version",
      "item": "https://www.eman-shahrour.de/ar/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Datenschutzrichtlinie",
      "item": "https://www.eman-shahrour.de/privacy-policy/"
    }
  ]
};


const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Eman Hussein Shahrour",
  "alternateName": "إيمان حسين شحرور",
  "url": "https://www.eman-shahrour.de",
  "image": "https://www.eman-shahrour.de/profile2.webp",
  "email": "mailto:poststelle@eman-shahrour.de",
  "description": "Kontaktinformationen und Standort von Frau Eman Hussein Shahrour in Bremerhaven, Deutschland.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rickmersstraße 62",
    "addressLocality": "Bremerhaven",
    "addressRegion": "HB",
    "postalCode": "27568",
    "addressCountry": "DE"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.eman-shahrour.de"
  }
};


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
scriptElement3.text = JSON.stringify(personStructuredData);
document.head.appendChild(scriptElement3);
