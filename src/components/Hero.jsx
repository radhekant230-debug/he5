import { hero } from "../data/content.js";
import { heroMedia } from "../data/media.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <img src={heroMedia.src} alt="" className="hero__img" />
        <div className="hero__veil" />
      </div>

      <div className="hero__inner">
        <h1 className="hero__title">{hero.title}</h1>
        <span className="hero__subtitle">{hero.subtitle}</span>
        <p className="hero__tagline">{hero.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--ghost" href={hero.primary.href}>
            {hero.primary.label}
          </a>
          <a className="btn btn--ghost" href={hero.secondary.href}>
            {hero.secondary.label}
          </a>
        </div>
      </div>

      <a className="hero__scroll" href={hero.secondary.href} aria-label="Scroll down">
        SCROLL
      </a>
    </section>
  );
}
