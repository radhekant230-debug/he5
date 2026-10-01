import { footer } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <p className="footer__name">{footer.brand}</p>
          <p className="footer__sub">{footer.subtitle}</p>
        </div>
        <ul className="footer__links">
          {footer.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="footer__copy">
        &copy; {new Date().getFullYear()} HEAVEN Lounge &amp; Bar. All rights
        reserved.
      </p>
    </footer>
  );
}
