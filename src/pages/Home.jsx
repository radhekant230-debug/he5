import "../styles/navbar.css";
import "../styles/hero.css";
import "../styles/sections.css";
import "../styles/footer.css";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Drinks from "../components/Drinks.jsx";
import Bakery from "../components/Bakery.jsx";
import ImageBreak from "../components/ImageBreak.jsx";
import Gallery from "../components/Gallery.jsx";
import Events from "../components/Events.jsx";
import Social from "../components/Social.jsx";
import Reservation from "../components/Reservation.jsx";
import Location from "../components/Location.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-img");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Drinks />
        <Bakery />
        <ImageBreak />
        <Gallery />
        <Events />
        <Social />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </>
  );
}
