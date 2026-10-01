import { useEffect, useRef, useState } from "react";
import { sliderImages } from "../data/media.js";

const pad = (n) => String(n).padStart(2, "0");

export default function ImageSlider() {
  const count = sliderImages.length;
  const [index, setIndex] = useState(0);
  const [noAnim, setNoAnim] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (count < 2) return;
    timer.current = setInterval(() => setIndex((i) => i + 1), 1000);
    return () => clearInterval(timer.current);
  }, [count]);

  useEffect(() => {
    if (count < 2) return;
    if (index === count) {
      // Landed on the cloned first slide: after the transition
      // finishes, jump back to the real first slide instantly.
      const t = setTimeout(() => {
        setNoAnim(true);
        setIndex(0);
      }, 950);
      return () => clearTimeout(t);
    }
    if (noAnim) {
      const r = requestAnimationFrame(() =>
        requestAnimationFrame(() => setNoAnim(false))
      );
      return () => cancelAnimationFrame(r);
    }
  }, [index, noAnim, count]);

  if (count === 0) {
    return (
      <section className="slider slider--empty" id="slider" aria-label="Photo slideshow">
        <p className="slider__placeholder">PHOTOS COMING SOON</p>
      </section>
    );
  }

  const track = count > 1 ? [...sliderImages, sliderImages[0]] : sliderImages;

  return (
    <section className="slider" id="slider" aria-label="Photo slideshow">
      <div
        className="slider__track"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: noAnim ? "none" : undefined,
        }}
      >
        {track.map((src, i) => (
          <div className="slider__slide" key={i}>
            <img src={src} alt="" loading={i < 2 ? "eager" : "lazy"} />
          </div>
        ))}
      </div>

      <div className="slider__counter" aria-hidden="true">
        {pad((index % count) + 1)} <span>/</span> {pad(count)}
      </div>
    </section>
  );
}
