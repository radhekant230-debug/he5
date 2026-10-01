import "../styles/navbar.css";
import "../styles/hero.css";
import "../styles/slider.css";
import "../styles/sections.css";
import "../styles/footer.css";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import VideoSection from "../components/VideoSection.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Drinks from "../components/Drinks.jsx";
import Bakery from "../components/Bakery.jsx";
import Gallery from "../components/Gallery.jsx";
import Location from "../components/Location.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
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
        <ImageSlider />
        <VideoSection />
        <About />
        <Experience />
        <Drinks />
        <Bakery />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </>
  );
}
