import { hero } from "../data/content.js";
import { heroMedia } from "../data/media.js";
import Button from "./Button.jsx";

export default function Hero() {
  const hasVideo = heroMedia.type === "video" && heroMedia.src;
  const hasImage = heroMedia.type === "image" && heroMedia.src;

  return (
    <section className={`hero${hasVideo || hasImage ? "" : " hero--fallback"}`} id="top">
      {hasVideo && (
        <video
          className="hero__media"
          src={heroMedia.src}
          autoPlay
          muted
          loop
          playsInline
        />
      )}
      {hasImage && <img className="hero__media" src={heroMedia.src} alt="HEAVEN Lounge & Bar" />}

      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <p className="hero__tagline">{hero.tagline}</p>
        <div className="hero__actions">
          <Button href={hero.primary.href} variant="solid">
            {hero.primary.label}
          </Button>
          <Button href={hero.secondary.href}>{hero.secondary.label}</Button>
        </div>
      </div>

      <a className="hero__scroll" href="#slider" aria-label="Scroll down">
        SCROLL
      </a>
    </section>
  );
}
