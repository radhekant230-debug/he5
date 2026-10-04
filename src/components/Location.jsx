import { location } from "../data/content.js";

export default function Location() {
  return (
    <section className="location section" id="contact">
      <div className="wrap location__grid">
        <div className="reveal">
          <span className="eyebrow">{location.eyebrow}</span>
          <h2 className="display">
            {location.heading.map((line) => (
              <span key={line} className="display__line">
                {line}
              </span>
            ))}
          </h2>
          <address className="location__address">
            {location.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>

        <div className="location__hours reveal">
          <span className="location__hours-label">OPENING HOURS</span>
          <span className="location__days">{location.hours[0]}</span>
          <span className="location__time">{location.hours[1]}</span>
          <a
            className="link-arrow location__cta"
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {location.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
