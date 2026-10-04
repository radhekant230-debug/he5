import { gallery } from "../data/content.js";
import { galleryImages, galleryCaptions } from "../data/media.js";

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="wrap">
        <header className="gallery__head reveal">
          <span className="eyebrow">{gallery.eyebrow}</span>
          <h2 className="display">
            {gallery.heading.map((line) => (
              <span key={line} className="display__line">
                {line}
              </span>
            ))}
          </h2>
        </header>

        <div className="gallery__masonry">
          {galleryImages.map((src, i) => (
            <figure key={src} className={`gallery__cell gallery__cell--${i + 1}`}>
              <img src={src} alt={galleryCaptions[i] || "HEAVEN Lounge & Bar"} loading="lazy" />
              <figcaption>{galleryCaptions[i] || "HEAVEN"}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
