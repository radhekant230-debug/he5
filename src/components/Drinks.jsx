import { drinks } from "../data/drinks.js";
import { drinksImage } from "../data/media.js";

export default function Drinks() {
  return (
    <section className="drinks section" id="drinks">
      <div className="wrap drinks__grid">
        <div className="drinks__intro reveal">
          <span className="eyebrow">THE BAR</span>
          <h2 className="section-title">
            <span>DRINKS</span>
            <span>&amp; COCKTAILS</span>
          </h2>
          <div className="rule" />
          <p>
            A short list poured with intent. Tell the bartender the mood, not
            the order — the full menu awaits at the bar.
          </p>
          {drinksImage && (
            <div className="drinks__media">
              <img src={drinksImage} alt="Cocktail at HEAVEN" loading="lazy" />
            </div>
          )}
        </div>

        <ul className="drinks__list reveal">
          {drinks.map((d) => (
            <li className="drinks__item" key={d.name}>
              <div className="drinks__row">
                <h3>{d.name}</h3>
                <span className="drinks__dots" aria-hidden="true" />
                <span className="drinks__price">{d.price}</span>
              </div>
              <p>{d.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <p className="drinks__note wrap">
        Please enjoy responsibly. Must be of legal drinking age.
      </p>
    </section>
  );
}
