import { reservation, platforms } from "../data/content.js";

export default function Reservation() {
  const submit = (e) => {
    e.preventDefault();
    window.open(reservation.bookingUrl, "_blank", "noopener");
  };

  return (
    <section className="reserve section" id="reserve">
      <div className="wrap reserve__inner reveal">
        <span className="eyebrow">{reservation.eyebrow}</span>
        <h2 className="display">
          {reservation.heading.map((line) => (
            <span key={line} className="display__line">
              {line}
            </span>
          ))}
        </h2>
        <p className="reserve__sub">{reservation.sub}</p>

        <form className="reserve__form" onSubmit={submit}>
          <label className="reserve__field">
            <span>DATE</span>
            <input type="date" name="date" required />
          </label>
          <label className="reserve__field">
            <span>TIME</span>
            <select name="time">
              {reservation.times.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="reserve__field">
            <span>GUESTS</span>
            <select name="guests">
              {reservation.guests.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
          <button className="btn btn--solid reserve__submit" type="submit">
            {reservation.cta}
          </button>
        </form>
        <p className="reserve__note">{reservation.note}</p>

        <div className="platforms">
          <span className="platforms__label">OR RESERVE DIRECTLY ON</span>
          <div className="platforms__row">
            {platforms.map((p) => (
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
    </section>
  );
}
