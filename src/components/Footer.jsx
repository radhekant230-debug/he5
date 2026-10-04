import { footer, location } from "../data/content.js";
import { logoImage } from "../data/media.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <img className="footer__emblem" src={logoImage} alt="HEAVEN emblem" loading="lazy" />
          <span className="footer__name">{footer.brand}</span>
          <span className="footer__sub">{footer.subtitle}</span>
        </div>

        <nav className="footer__col" aria-label="Footer">
          {footer.links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <nav className="footer__col" aria-label="Social">
          {footer.social.map((s) => (
            <a key={s.label} href={s.href}>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="footer__col footer__info">
          {location.address.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <span className="footer__hours">{location.hours[0]}</span>
          <span className="footer__hours">{location.hours[1]}</span>
        </div>
      </div>

      <div className="wrap footer__base">
        <span>© {new Date().getFullYear()}</span>
        <span>{footer.copyright}</span>
      </div>
    </footer>
  );
}
