import { intro } from "../data/content.js";
import { introImage } from "../data/media.js";

export default function About() {
  return (
    <section className="intro section" id="about">
      <div className="wrap intro__grid">
        <div className="intro__copy reveal">
          <span className="eyebrow">{intro.eyebrow}</span>
          <h2 className="display">
            {intro.heading.map((line) => (
              <span key={line} className="display__line">
                {line}
              </span>
            ))}
          </h2>
          <div className="intro__paras">
            {intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <figure className="intro__media reveal-img">
          <img src={introImage} alt="Interior of HEAVEN Lounge & Bar" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
