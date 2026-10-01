import { videos } from "../data/media.js";

export default function VideoSection() {
  if (!videos.length) return null;

  return (
    <section className="video-section reveal" aria-label="Atmosphere video">
      <div className="video-section__frame">
        <video src={videos[0]} autoPlay muted loop playsInline />
        <div className="video-section__overlay" />
        <div className="video-section__caption">
          <span className="eyebrow">THE ATMOSPHERE</span>
          <p>Best experienced after dark.</p>
        </div>
      </div>
    </section>
  );
}
