import { events } from "../data/content.js";
import { eventsImage } from "../data/media.js";

export default function Events() {
  return (
    <section className="events section" id="events">
      <div className="wrap events__grid">
        <figure className="events__media reveal-img">
          <img src={eventsImage} alt="Guests enjoying an evening at HEAVEN" loading="lazy" />
        </figure>

        <div className="events__body">
          <header className="reveal">
            <span className="eyebrow">{events.eyebrow}</span>
            <h2 className="display">
              {events.heading.map((line) => (
                <span key={line} className="display__line">
                  {line}
                </span>
              ))}
            </h2>
          </header>

          <ul className="events__list">
            {events.items.map((e) => (
              <li key={e.name} className="events__row reveal">
                <span className="events__date">{e.date}</span>
                <div className="events__info">
                  <h3>{e.name}</h3>
                  <p>{e.text}</p>
                </div>
                <span className="events__time">{e.time}</span>
              </li>
            ))}
          </ul>

          <a className="link-arrow" href={events.ctaHref}>
            {events.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
