import "../App.css"
import Contact from "./Contact"
import Profile from "./Profile.jsx"
import Skills from "./Skills"
import Projects from "./Projects"
import Companies from "./Companies"
import ScrollModel from "./ScrollModel"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Home = () => {
  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    const sections = gsap.utils.toArray('section');
    let isScrolling = false;
    let timeout;

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        snap: {
          snapTo: 1,
          duration: 0.5,
          delay: 0.1,
          ease: "power1.inOut",
          onComplete: () => {
            // Set a flag to prevent scrolling for a short duration
            isScrolling = true;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              isScrolling = false;
            }, 1000); // Adjust this value to change how long the pause is
          }
        },
        scrub: 1,
      });
    });

    // Create a custom event for scroll progress
    const updateScrollProgress = () => {
      if (!isScrolling) {
        const progress = container.scrollTop / (container.scrollHeight - container.clientHeight);
        document.documentElement.style.setProperty('--scroll-progress', progress);
      }
    };

    // Prevent wheel events during the pause
    const handleWheel = (e) => {
      if (isScrolling) {
        e.preventDefault();
      }
    };

    container.addEventListener('scroll', updateScrollProgress);
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      container.removeEventListener('scroll', updateScrollProgress);
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="scroll-container">
      <section id="home" className="scroll-section">
        <Profile/>
      </section>
      
      <section id="skills" className="scroll-section">
        <Skills/>
      </section>
      
      <section id="apps" className="scroll-section">
        <Companies/>
      </section>
      
      <section id="contact" className="scroll-section">
        <Contact/>
      </section>
      
      <ScrollModel />
    </div>
  );
};

export default Home;