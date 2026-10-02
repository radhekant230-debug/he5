import { experience } from "../data/content.js";
import Button from "./Button.jsx";

export default function Experience() {
  return (
    <section className="experience menu-section section" id="experience">
      <div className="wrap">
        <div className="experience__head reveal">
          <span className="eyebrow">{experience.eyebrow}</span>
          <h2 className="section-title">{experience.heading}</h2>
          <div className="rule" />
        </div>

        <div className="menu-cards reveal">
          {experience.cards.map((card) => (
            <div className="menu-card" key={card.title}>
              <div className="menu-card__content">
                <h3 className="menu-card__title">{card.title}</h3>
                <p className="menu-card__desc">{card.description}</p>
              </div>
              <Button
                href={experience.menuUrl}
                variant="solid"
                external
              >
                {card.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
