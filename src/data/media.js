/* =========================================================
   MEDIA — real local files only. Every file in public/media/
   is referenced below; nothing is generated, downloaded or
   invented. Browser paths look like "/media/my-photo.jpg".
   ========================================================= */

// Hero background — MUST stay this exact file.
export const heroMedia = {
  type: "image",
  src: "/media/hero.jpg",
};

// Introduction editorial photo (interior hall).
export const introImage = "/media/about.png";

// Experience — one image per experience item, in order.
export const experienceImages = [
  "/media/gallery-5.jpg", // signature cocktails (bar counter)
  "/media/slider-2.jpg", // gourmet dining (pizza)
  "/media/about.png", // live music (stage)
  "/media/slider-4.jpg", // late nights (lounge after dark)
];

// Signature cocktails photography: [feature, supportA, supportB]
export const cocktailImages = [
  "/media/gallery-2.jpg", // backlit bar + HEAVEN sign
  "/media/gallery-5.jpg", // bar counter & glassware
  "/media/gallery-1.jpg", // the bar room
];

// Signature bites: [feature, supportA, supportB]
export const foodImages = [
  "/media/slider-3.jpg", // plated signature dish
  "/media/slider-2.jpg", // wood-fired pizza
  "/media/bakery-1.jpg", // sweet ending (never crop)
];

// Full-width image break background.
export const breakImage = "/media/exp-bg.png";

// Gallery — editorial masonry, mixed orientations.
export const galleryImages = [
  "/media/gallery-1.jpg",
  "/media/gallery-8.png",
  "/media/gallery-2.jpg",
  "/media/gallery-3.jpg",
  "/media/gallery-7.png",
  "/media/gallery-4.jpg",
  "/media/gallery-5.jpg",
  "/media/gallery-6.jpg",
];

// Events side visual.
export const eventsImage = "/media/gallery-4.jpg";

// Social strip — horizontal editorial grid.
export const socialImages = [
  "/media/slider-1.jpg",
  "/media/gallery-3.jpg",
  "/media/gallery-7.png",
  "/media/gallery-8.png",
  "/media/gallery-2.jpg",
];

// Brand emblem (footer).
export const logoImage = "/media/logo.jpg";

// Descriptive alt text, index-matched to galleryImages.
export const galleryCaptions = [
  "Interior of HEAVEN Lounge & Bar",
  "Terrace seating at HEAVEN",
  "Cocktail service at the HEAVEN bar",
  "Lounge seating and low lighting at HEAVEN",
  "Open terrace at HEAVEN",
  "Guests enjoying the evening at HEAVEN",
  "Bar counter and glassware at HEAVEN",
  "Night atmosphere inside HEAVEN Lounge & Bar",
];
