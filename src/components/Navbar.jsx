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

      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav__links${open ? " nav__links--open" : ""}`}>
        {nav.links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="nav__cta" href={nav.cta.href} onClick={() => setOpen(false)}>
          {nav.cta.label}
        </a>
      </nav>
    </header>
  );
}
