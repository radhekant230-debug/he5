import { imageBreak } from "../data/content.js";
import { breakImage } from "../data/media.js";

export default function ImageBreak() {
  return (
    <section
      className="break"
      style={{ backgroundImage: `url(${breakImage})` }}
      role="img"
      aria-label="Night atmosphere inside HEAVEN Lounge & Bar"
    >
      <div className="break__veil" />
      <h2 className="break__text">
        {imageBreak.lines.map((line) => (
          <span key={line} className="break__line">
            {line}
          </span>
        ))}
      </h2>
    </section>
  );
}
