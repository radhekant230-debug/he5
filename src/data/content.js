export const nav = {
  brand: "HEAVEN",
  links: [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "DRINKS", href: "#drinks" },
    { label: "GALLERY", href: "#gallery" },
    { label: "CONTACT", href: "#contact" },
  ],
  cta: { label: "RESERVE", href: "#contact" },
};

export const hero = {
  title: "HEAVEN",
  subtitle: "LOUNGE & BAR",
  tagline:
    "Low light, slow evenings and cocktails poured with intent — an evening worth remembering.",
  primary: { label: "RESERVE A TABLE", href: "#contact" },
  secondary: { label: "EXPLORE", href: "#slider" },
};

export const about = {
  eyebrow: "THE LOUNGE",
  heading: ["AN EVENING", "WORTH REMEMBERING."],
  paragraphs: [
    "HEAVEN was made for the hours after dark — a room where the light is low, the music is curated, and nobody hurries you toward the door.",
    "Every detail is deliberate: the weight of the glass, the warmth of the booth, the first sip that tells you the night has officially begun.",
  ],
};

export const experience = {
  eyebrow: "DISCOVER",
  heading: "OUR MENU",
  menuUrl: "https://www.zomato.com/ranchi/heaven-lounge-ashok-nagar/menu",
  cards: [
    {
      title: "Food Menu",
      description: "Indian, Chinese, Italian, Continental",
      buttonText: "Explore Menu",
    },
    {
      title: "Drink Menu",
      description: "Cocktails, Mocktails, Shakes, Whisky, Beer, Wine, Rum, Vodka, Gin",
      buttonText: "Explore Menu",
    },
  ],
};

export const bakery = {
  eyebrow: "THE BAKERY",
  heading: ["BAKERY &", "SWEET MOMENTS"],
  text: "Small-batch bakes, finished by hand and served through the evening. Whatever the day's oven brings, it is plated with the same care as everything else at HEAVEN — a quiet, sweet ending to a long night.",
};

export const gallery = {
  eyebrow: "GALLERY",
  heading: "INSIDE THE NIGHT",
  text: "A glimpse of the room before you step into it.",
};

export const location = {
  eyebrow: "FIND US",
  heading: "LOCATION & RESERVATIONS",
  text: "Walk in after sunset, or reserve ahead for the weekends — the room fills quickly once the music starts.",
  address: ["Harmu Bypass Road,", "Argora Chowk,", "Ranchi, Jharkhand 834002"],
  mapsUrl: "https://share.google/cEvCwsb39WhXs05yb",
  cta: "GET DIRECTIONS",
  phone: "+91 92292 34007",
  email: "reservations@heavenlounge.com",
  openingHours: [
    { days: "Monday — Thursday", hours: "6:00 PM — 12:00 AM" },
    { days: "Friday — Saturday", hours: "6:00 PM — 3:00 AM" },
    { days: "Sunday", hours: "6:00 PM — 12:00 AM" },
  ],
  platformsLabel: "ORDER & RESERVE ON",
  platforms: [
    {
      name: "Zomato",
      href: "https://www.zomato.com/ranchi/heaven-lounge-ashok-nagar/order",
      icon: "https://www.google.com/s2/favicons?sz=128&domain=zomato.com",
    },
    {
      name: "EazyDiner",
      href: "https://www.eazydiner.com/ranchi/heaven-lounge-and-bar-argora-ranchi-696322",
      icon: "https://www.google.com/s2/favicons?sz=128&domain=eazydiner.com",
    },
    {
      name: "District by Zomato",
      href: "https://www.district.in/dining/ranchi/heaven-lounge-ashok-nagar",
      icon: "https://www.google.com/s2/favicons?sz=128&domain=district.in",
    },
  ],
};

// Business facts used for structured data, AEO/GEO and accessibility.
// Factual only — no invented claims.
export const business = {
  name: "HEAVEN — Lounge & Bar",
  url: "https://heaven4.netlify.app/",
  telephone: "+91 92292 34007",
  email: "reservations@heavenlounge.com",
  priceRange: "₹₹",
  servesCuisine: ["Indian", "Asian", "Continental"],
  acceptsReservations: true,
  reservationRequired: false,
  paymentAccepted: ["Credit cards", "Debit cards", "NFC mobile payments"],
  // Accessibility
  wheelchairAccessible: true,
  accessibilityFeatures: [
    "Wheelchair-accessible car park",
    "Wheelchair-accessible toilet",
  ],
  // Service options
  serviceOptions: [
    "Outdoor seating",
    "Delivery",
    "Drive-through",
    "Takeaway",
    "Dine-in",
  ],
  // Highlights / entertainment
  highlights: [
    "Great beer selection",
    "Great wine list",
    "Karaoke",
    "Live music",
    "Live performances",
    "Quiz night",
    "Rooftop seating",
  ],
  // Offerings
  offerings: [
    "Alcohol",
    "Beer",
    "Cocktails",
    "Dancing",
    "Food",
    "Food at bar",
    "Happy-hour drinks",
    "Happy-hour food",
    "Private dining room",
    "Spirits",
    "Wine",
  ],
  // Dining options
  seating: true,
  tableService: true,
  // Amenities
  amenities: ["Restroom"],
  // Atmosphere
  atmosphere: ["Casual", "Cozy", "Romantic", "Trendy", "Upmarket"],
  // Crowd
  crowd: ["Groups", "Solo dining"],
  // Children
  goodForKids: true,
  // Parking
  parking: ["Free parking lot", "Free street parking", "Plenty of parking"],
  // Social
  sameAs: {
    instagram: "https://www.instagram.com/heavenlounge/",
    facebook: "https://www.facebook.com/heavenlounge/",
  },
};

export const footer = {
  brand: "HEAVEN",
  subtitle: "LOUNGE & BAR",
  links: [
    { label: "Instagram", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Location", href: "#location" },
    { label: "Reserve", href: "#contact" },
  ],
};
