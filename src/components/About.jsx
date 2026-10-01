import { about } from "../data/content.js";
import { aboutImage } from "../data/media.js";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="wrap about__grid">
        <div className="about__text reveal">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="section-title">
            {about.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <div className="rule" />
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="about__media reveal">
          {aboutImage ? (
            <img src={aboutImage} alt="Inside HEAVEN Lounge & Bar" loading="lazy" />
          ) : (
            <div className="media-placeholder" aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  );
}
