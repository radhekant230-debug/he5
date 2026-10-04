import { cocktails } from "../data/content.js";
import { drinks } from "../data/drinks.js";
import { cocktailImages } from "../data/media.js";

export default function Drinks() {
  return (
    <section className="cocktails section" id="menu">
      <div className="wrap cocktails__grid">
        <div className="cocktails__copy reveal">
          <span className="eyebrow">{cocktails.eyebrow}</span>
          <h2 className="display">
            {cocktails.heading.map((line) => (
              <span key={line} className="display__line">
                {line}
              </span>
            ))}
          </h2>
          <p className="cocktails__intro">{cocktails.intro}</p>

          <ul className="cocktails__menu">
            {drinks.map((d) => (
              <li key={d.name} className="cocktails__row">
                <div className="cocktails__info">
                  <span className="cocktails__name">{d.name}</span>
                  <span className="cocktails__desc">{d.description}</span>
                </div>
                <span className="cocktails__dots" aria-hidden="true" />
                <span className="cocktails__price">{d.price}</span>
              </li>
            ))}
          </ul>

          <a
            className="link-arrow"
            href={cocktails.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cocktails.cta} <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="cocktails__media">
          <figure className="cocktails__feature reveal-img">
            <img src={cocktailImages[0]} alt="Signature cocktail at HEAVEN" loading="lazy" />
          </figure>
          <figure className="cocktails__support cocktails__support--a reveal-img">
            <img src={cocktailImages[1]} alt="Cocktail service at the HEAVEN bar" loading="lazy" />
          </figure>
          <figure className="cocktails__support cocktails__support--b reveal-img">
            <img src={cocktailImages[2]} alt="Bar counter and glassware at HEAVEN" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  );
}
