import { business } from "../data/content.js";

// Build opening-hours specification from the existing, factual hours
// (MON — SUN, 7 PM — 1 AM).
const openingHoursSpecification = [
  {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "19:00",
    closes: "01:00",
  },
].map((h) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: h.days,
  opens: h.opens,
  closes: h.closes,
}));

const schema = {
  "@context": "https://schema.org",
  "@type": ["BarOrPub", "Restaurant", "LocalBusiness"],
  name: business.name,
  image: "https://heaven4.netlify.app/media/hero.jpg",
  url: business.url,
  telephone: business.telephone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Harmu Bypass Road, Argora Chowk",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    postalCode: "834002",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Place",
    name: "Ranchi",
  },
  openingHoursSpecification,
  servesCuisine: business.servesCuisine,
  priceRange: business.priceRange,
  acceptsReservations: business.acceptsReservations,
  hasLiveMusic: true,
  menu: "https://heaven4.netlify.app/#menu",
  paymentAccepted: business.paymentAccepted,
  amenityFeature: business.accessibilityFeatures.map((name) => ({
    "@type": "AccessibilityFeature",
    name,
  })),
  sameAs: Object.values(business.sameAs),
};

export default function Seo() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}