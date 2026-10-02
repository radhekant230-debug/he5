/* =========================================================
   MEDIA — real local files only.
   Paste the ACTUAL filenames from public/media/ below using
   browser paths like "/media/my-photo.jpg" or "/media/clip.mp4".
   Do not invent names. Empty lists are handled gracefully:
   the slider/gallery show a quiet placeholder and the video
   section hides itself.
   ========================================================= */

// Hero background: set to a video path (preferred if one exists)
// or an image path. Leave "" to use the styled fallback.
export const heroMedia = {
  type: "image",
  src: "/media/hero.jpg",
};

// Cinematic slider — all photos you want in rotation, in order.
export const sliderImages = [
  "/media/slider-1.jpg",
  "/media/slider-2.jpg",
  "/media/slider-3.jpg",
  "/media/slider-4.jpg",
];

// About section supporting photo.
export const aboutImage = "/media/about.png";

// Experience section full-screen background photo.
export const experienceBg = "/media/exp-bg.png";

// Drinks section supporting photo (optional).
export const drinksImage = "/media/slider-1.jpg";

// Gallery — editorial composition. First entry is the large
// feature image; the rest are supporting images.
export const galleryImages = [
  "/media/gallery-1.jpg",
  "/media/gallery-2.jpg",
  "/media/gallery-3.jpg",
  "/media/gallery-4.jpg",
  "/media/gallery-5.jpg",
  "/media/gallery-6.jpg",
  "/media/gallery-7.png",
  "/media/gallery-8.png",
];

// Bakery section photos.
export const bakeryImages = [
  "/media/bakery-1.jpg",
];

// Descriptive alt text for gallery and slider images (SEO + accessibility).
export const galleryCaptions = [
  "Interior of HEAVEN Lounge & Bar",
  "Cocktail service at the HEAVEN bar",
  "Lounge seating and low lighting at HEAVEN",
  "Guests enjoying the evening at HEAVEN",
  "Bar counter and glassware at HEAVEN",
  "Night atmosphere inside HEAVEN Lounge & Bar",
];

export const sliderCaptions = [
  "HEAVEN Lounge & Bar exterior at night",
  "Interior seating at HEAVEN Lounge & Bar",
  "Cocktails poured at the HEAVEN bar",
  "The lounge room at HEAVEN after dark",
];

// Videos for the cinematic video section (hero video excluded).
export const videos = [
  // "/media/night.mp4",
];
