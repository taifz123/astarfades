/**
 * SEO Component - Manages all meta tags and structured data
 * Ensures proper Open Graph, Twitter Cards, and JSON-LD schema
 */

export function SEO() {
  const businessName = "Empire Fades";
  const businessAddress = "Shop 219/263 Elizabeth St, Liverpool NSW 2170, Australia (Westfield Liverpool)";
  const businessPhone = "+61 406 713 336";
  const businessEmail = "Empirefadesliverpool@gmail.com";
  const businessURL = "https://empirefades.com.au";
  const businessLatitude = "-33.9204";
  const businessLongitude = "150.9241";
  const businessImage = "/assets/images&logo/empirelogo.png";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": businessName,
    "description": "Premium luxury barbershop in Westfield Liverpool specializing in precision fades and master grooming.",
    "image": businessImage,
    "url": businessURL,
    "telephone": businessPhone,
    "email": businessEmail,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop 219/263 Elizabeth St",
      "addressLocality": "Liverpool",
      "addressRegion": "NSW",
      "postalCode": "2170",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessLatitude,
      "longitude": businessLongitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday"],
        "opens": "09:00",
        "closes": "17:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:30",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/empirefadesliverpool/"
    ]
  };

  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href={businessURL} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content="Empire Fades | Premium Luxury Barbershop Westfield Liverpool" />
      <meta property="og:description" content="Experience the ultimate in male grooming at Empire Fades. Liverpool's premier luxury barbershop in Westfield Liverpool specializing in precision fades and premium styling." />
      <meta property="og:url" content={businessURL} />
      <meta property="og:image" content={`${businessURL}${businessImage}`} />
      <meta property="og:image:width" content="1254" />
      <meta property="og:image:height" content="1254" />
      <meta property="og:site_name" content={businessName} />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Empire Fades | Premium Luxury Barbershop Westfield Liverpool" />
      <meta name="twitter:description" content="Experience the ultimate in male grooming at Empire Fades. Liverpool's premier luxury barbershop in Westfield Liverpool specializing in precision fades and premium styling." />
      <meta name="twitter:image" content={`${businessURL}${businessImage}`} />

      {/* Additional Meta Tags */}
      <meta name="keywords" content="barbershop, Liverpool, Westfield Liverpool, fade, haircut, beard trim, men's grooming, premium barber, NSW" />
      <meta name="author" content={businessName} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </>
  );
}
