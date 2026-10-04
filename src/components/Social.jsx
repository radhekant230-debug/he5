import { social } from "../data/content.js";
import { socialImages } from "../data/media.js";

export default function Social() {
  return (
    <section className="social section" id="social">
      <div className="wrap social__head reveal">
        <span className="eyebrow">{social.eyebrow}</span>
        <h2 className="social__handle">{social.handle}</h2>
        <a className="link-arrow" href={social.href}>
          {social.cta} <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="social__strip">
        {socialImages.map((src, i) => (
          <figure key={src} className="social__cell">
            <img src={src} alt={`HEAVEN moments ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
