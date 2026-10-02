import { useState } from "react";
import { gallery } from "../data/content.js";
import { galleryImages, galleryCaptions } from "../data/media.js";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="gallery section" id="gallery">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">{gallery.eyebrow}</span>
          <h2 className="section-title">{gallery.heading}</h2>
          <p className="gallery__text">{gallery.text}</p>
        </div>

        {galleryImages.length === 0 ? (
          <div className="gallery__empty">
            <p>PHOTOS COMING SOON</p>
          </div>
        ) : (
          <div className="gallery__grid reveal">
            {galleryImages.map((src, i) => (
              <button
                type="button"
                className={`gallery__cell${i === 0 ? " gallery__cell--feature" : ""}${
                  i % 5 === 3 ? " gallery__cell--tall" : ""
                }`}
                key={src + i}
                onClick={() => setLightbox(src)}
                aria-label="Enlarge photo"
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-label="Photo viewer"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
