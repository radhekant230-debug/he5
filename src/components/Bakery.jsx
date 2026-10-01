import { bakery } from "../data/content.js";
import { bakeryImages } from "../data/media.js";

export default function Bakery() {
  return (
    <section className="bakery section" id="bakery">
      <div className="wrap bakery__grid">
        <div className="bakery__media reveal">
          {bakeryImages[0] ? (
            <img src={bakeryImages[0]} alt="Dessert at HEAVEN Lounge & Bar" loading="lazy" />
          ) : (
            <div className="media-placeholder" aria-hidden="true" />
          )}
        </div>
        <div className="bakery__text reveal">
          <span className="eyebrow">{bakery.eyebrow}</span>
          <h2 className="section-title">
            {bakery.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <div className="rule" />
          <p>{bakery.text}</p>
        </div>
      </div>
    </section>
  );
}
