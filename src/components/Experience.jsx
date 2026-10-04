import { experience } from "../data/content.js";
import { experienceImages } from "../data/media.js";

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="wrap">
        <header className="experience__head reveal">
          <span className="eyebrow">{experience.eyebrow}</span>
          <h2 className="display">
            {experience.heading.map((line) => (
              <span key={line} className="display__line">
                {line}
              </span>
            ))}
          </h2>
        </header>

        <div className="experience__list">
          {experience.items.map((item, i) => (
            <article
              key={item.title}
              className={`experience__item experience__item--${i + 1} reveal`}
            >
              <figure className="experience__media reveal-img">
                <img
                  src={experienceImages[i]}
                  alt={item.title}
                  loading="lazy"
                />
              </figure>
              <div className="experience__body">
                <span className="experience__cat">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
