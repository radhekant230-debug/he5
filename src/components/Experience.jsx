import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="wrap">
        <div className="experience__head reveal">
          <span className="eyebrow">{experience.eyebrow}</span>
          <h2 className="section-title">{experience.heading}</h2>
        </div>
        <ul className="experience__list">
          {experience.items.map((item, i) => (
            <li className="experience__item reveal" key={item.title}>
              <span className="experience__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
