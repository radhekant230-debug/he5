import { business } from "../data/content.js";

// Build opening-hours specification from the existing, factual hours.
const dayMap = {
  "Monday — Thursday": ["Monday", "Tuesday", "Wednesday", "Thursday"],
  "Friday — Saturday": ["Friday", "Saturday"],
  Sunday: ["Sunday"],
};

const openingHoursSpecification = [
  { days: "Monday — Thursday", opens: "18:00", closes: "00:00" },
  { days: "Friday — Saturday", opens: "18:00", closes: "03:00" },
  { days: "Sunday", opens: "18:00", closes: "00:00" },
]
  .map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: dayMap[h.days],
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
  menu: "https://heaven4.netlify.app/#drinks",
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