import { food } from "../data/content.js";
import { foodImages } from "../data/media.js";

export default function Bakery() {
  return (
    <section className="food section" id="food">
      <div className="wrap">
        <header className="food__head reveal">
          <span className="eyebrow">{food.eyebrow}</span>
          <h2 className="display">
            {food.heading.map((line) => (
              <span key={line} className="display__line">
                {line}
              </span>
            ))}
          </h2>
          <p className="food__text">{food.text}</p>
        </header>

        <div className="food__grid">
          <figure className="food__feature reveal-img">
            <img src={foodImages[0]} alt="Signature bites at HEAVEN" loading="lazy" />
          </figure>
          <figure className="food__support food__support--a reveal-img">
            <img src={foodImages[1]} alt="Dining room at HEAVEN" loading="lazy" />
          </figure>
          <figure className="food__support food__support--b reveal-img">
            <img src={foodImages[2]} alt="Terrace dining at HEAVEN" loading="lazy" />
          </figure>
        </div>

        <a
          className="link-arrow food__cta"
          href={food.menuUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {food.cta} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
