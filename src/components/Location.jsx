import { location } from "../data/content.js";
import Button from "./Button.jsx";

export default function Location() {
  return (
    <section className="location section" id="location">
      <div className="wrap location__grid">
        <div className="reveal">
          <span className="eyebrow">{location.eyebrow}</span>
          <h2 className="section-title">{location.heading}</h2>
          <div className="rule" />
          <p>{location.text}</p>
          <address className="location__address">
            {location.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>

        <div className="location__panel reveal" id="contact">
          <span className="eyebrow">HEAVEN — LOUNGE &amp; BAR</span>
          <h3>Come as you are. Leave a legend.</h3>
          <p>Tap below for exact directions straight to our door on Google Maps.</p>
          <Button href={location.mapsUrl} variant="solid" external>
            {location.cta}
          </Button>

          <div className="location__hours">
            {location.openingHours.map((h) => (
              <div className="location__hours-row" key={h.days}>
                <span>{h.days}</span>
                <span>{h.hours}</span>
              </div>
            ))}
          </div>

          <div className="platforms">
            <span className="platforms__label">{location.platformsLabel}</span>
            <div className="platforms__row">
              {location.platforms.map((p) => (
                <a
                  key={p.name}
                  className="platforms__link"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.name} in a new tab`}
                  title={p.name}
                >
                  <img src={p.icon} alt={`${p.name} logo`} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
