/* =========================================================
   CONTENT — all copy for the redesigned HEAVEN site.
   Real business facts (address, maps link, booking platforms,
   hours) are preserved exactly as provided. Menu / event
   specifics remain clearly-marked placeholders until the real
   data is supplied.
   ========================================================= */

export const nav = {
  brand: "HEAVEN",
  links: [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "DRINKS", href: "#menu" },
    { label: "GALLERY", href: "#gallery" },
    { label: "CONTACT", href: "#contact" },
  ],
  cta: { label: "RESERVE", href: "#reserve" },
};

export const hero = {
  title: "HEAVEN",
  subtitle: "LOUNGE & BAR",
  tagline:
    "Low light, slow evenings and cocktails poured with intent — an evening worth remembering.",
  primary: { label: "RESERVE A TABLE", href: "#reserve" },
  secondary: { label: "EXPLORE", href: "#about" },
};

export const intro = {
  eyebrow: "WELCOME TO HEAVEN",
  heading: ["A PLACE", "ABOVE THE", "ORDINARY."],
  paragraphs: [
    "HEAVEN is a room built for the hours after dark — low light, curated music and a bar that pours with intent.",
    "Every detail is deliberate: the weight of the glass, the warmth of the booth, the first sip that tells you the night has officially begun.",
  ],
};

export const experience = {
  eyebrow: "THE EXPERIENCE",
  heading: ["THE HEAVEN", "EXPERIENCE"],
  items: [
    {
      category: "THE BAR",
      title: "SIGNATURE COCKTAILS",
      text: "Classics done right and house signatures you will not find anywhere else.",
    },
    {
      category: "THE KITCHEN",
      title: "GOURMET DINING",
      text: "Small plates and slow dinners, plated with the same care as the pour.",
    },
    {
      category: "THE STAGE",
      title: "LIVE MUSIC",
      text: "A soundtrack that knows when to simmer and when to turn up.",
    },
    {
      category: "AFTER DARK",
      title: "LATE NIGHTS",
      text: "Dim light and deep seating, built for the hours after midnight.",
    },
  ],
};

export const cocktails = {
  eyebrow: "THE BAR",
  heading: ["SIGNATURE", "COCKTAILS"],
  intro:
    "A short list poured with intent. Tell the bartender the mood, not the order.",
  cta: "VIEW FULL MENU",
  menuUrl: "https://www.zomato.com/ranchi/heaven-lounge-ashok-nagar/order",
};

export const food = {
  eyebrow: "THE KITCHEN",
  heading: ["SIGNATURE", "BITES"],
  text: "A rotating kitchen of small plates and sweet endings — the day's menu lives at the bar.",
  cta: "EXPLORE FOOD MENU",
  menuUrl: "https://www.zomato.com/ranchi/heaven-lounge-ashok-nagar/order",
};

export const imageBreak = {
  lines: ["THE NIGHT", "STARTS HERE."],
};

export const gallery = {
  eyebrow: "GALLERY",
  heading: ["INSIDE", "THE NIGHT"],
};

export const events = {
  eyebrow: "WHAT'S ON",
  heading: ["UPCOMING", "NIGHTS"],
  // PLACEHOLDERS — replace with the real programming when available.
  items: [
    {
      date: "—",
      name: "Upcoming Night 01",
      text: "Placeholder — replace with the real event.",
      time: "TBA",
    },
    {
      date: "—",
      name: "Upcoming Night 02",
      text: "Placeholder — replace with the real event.",
      time: "TBA",
    },
    {
      date: "—",
      name: "Upcoming Night 03",
      text: "Placeholder — replace with the real event.",
      time: "TBA",
    },
  ],
  cta: "RESERVE YOUR NIGHT",
  ctaHref: "#reserve",
};

export const social = {
  eyebrow: "FOLLOW THE NIGHT",
  handle: "@HEAVEN",
  cta: "FOLLOW US",
  href: "#",
};

export const reservation = {
  eyebrow: "RESERVATIONS",
  heading: ["YOUR TABLE", "IS WAITING."],
  sub: "Make tonight unforgettable.",
  note: "Availability is confirmed on our booking partner.",
  cta: "CHECK AVAILABILITY",
  bookingUrl: "https://www.zomato.com/ranchi/heaven-lounge-ashok-nagar/order",
  times: ["7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM", "12:00 AM"],
  guests: ["1", "2", "3", "4", "5", "6", "7", "8+"],
};

// Real booking platforms — preserved from the previous build.
export const platforms = [
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
];

export const location = {
  eyebrow: "FIND HEAVEN",
  heading: ["RANCHI", "JHARKHAND"],
  address: ["Harmu Bypass Road,", "Argora Chowk,", "Ranchi, Jharkhand 834002"],
  hours: ["MON — SUN", "7 PM — 1 AM"],
  cta: "GET DIRECTIONS",
  mapsUrl: "https://share.google/cEvCwsb39WhXs05yb",
};

export const footer = {
  brand: "HEAVEN",
  subtitle: "LOUNGE & BAR",
  links: [
    { label: "EXPERIENCE", href: "#experience" },
    { label: "MENU", href: "#menu" },
    { label: "GALLERY", href: "#gallery" },
    { label: "EVENTS", href: "#events" },
    { label: "CONTACT", href: "#contact" },
  ],
  social: [
    { label: "INSTAGRAM", href: "#" },
    { label: "FACEBOOK", href: "#" },
    { label: "WHATSAPP", href: "#" },
  ],
  copyright: "HEAVEN Lounge & Bar. All rights reserved.",
};

// Structured-data (SEO) facts. Contact fields are intentionally
// omitted until real values are supplied — never invent them.
export const business = {
  name: "HEAVEN — Lounge & Bar",
  url: "https://heaven4.netlify.app/",
  servesCuisine: ["Cocktails", "Small plates", "Desserts"],
  priceRange: "₹₹",
  acceptsReservations: "True",
  accessibilityFeatures: [],
  sameAs: {},
};