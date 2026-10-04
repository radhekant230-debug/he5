import { useEffect, useState } from "react";
import { nav } from "../data/content.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <a className="nav__brand" href="#top" aria-label="HEAVEN — back to top">
        {nav.brand}
      </a>

      <nav className="nav__center" aria-label="Primary">
        {nav.links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="nav__right">
        <a className="nav__cta" href={nav.cta.href}>
          {nav.cta.label}
        </a>
        <button
          className={`nav__toggle${open ? " nav__toggle--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav className={`nav__drawer${open ? " nav__drawer--open" : ""}`} aria-label="Mobile">
        {nav.links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="nav__drawer-cta" href={nav.cta.href} onClick={() => setOpen(false)}>
          {nav.cta.label}
        </a>
      </nav>
    </header>
  );
}
