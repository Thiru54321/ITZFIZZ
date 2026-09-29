import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page animation
      const intro = gsap.timeline();

      intro
        .from(".hero-label", {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".hero-title span",
          {
            opacity: 0,
            y: 50,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".stat-card",
          {
            opacity: 0,
            y: 35,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Scroll driven animation
      gsap.to(visualRef.current, {
        y: 420,
        x: 180,
        scale: 0.65,
        rotate: 12,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },

        ease: "none",
      });

      // Background movement
      gsap.to(".gradient-orb.one", {
        y: 300,
        x: -150,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },

        ease: "none",
      });

      gsap.to(".gradient-orb.two", {
        y: -200,
        x: 150,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },

        ease: "none",
      });

      // Scroll indicator
      gsap.to(".scroll-line", {
        scaleY: 1,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },

        transformOrigin: "top",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={heroRef}>
      <section className="hero">
        <div className="gradient-orb one"></div>
        <div className="gradient-orb two"></div>

        <nav className="navbar">
          <div className="logo">
            ITZFIZZ<span>.</span>
          </div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="menu-button">
            <span></span>
            <span></span>
          </button>
        </nav>

        <div className="hero-content">
          <div className="hero-label">
            <span className="label-dot"></span>
            DIGITAL EXPERIENCE STUDIO
          </div>

          <h1 className="hero-title">
            {"WELCOME ITZFIZZ".split("").map((letter, index) => (
              <span key={index}>
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          <p className="hero-description">
            We create digital experiences that combine bold design,
            technology and meaningful interactions.
          </p>

          <div className="stats">
            <div className="stat-card">
              <strong>98%</strong>
              <span>Client Satisfaction</span>
            </div>

            <div className="stat-card">
              <strong>85%</strong>
              <span>Performance Growth</span>
            </div>

            <div className="stat-card">
              <strong>70%</strong>
              <span>Faster Experiences</span>
            </div>
          </div>
        </div>

        <div className="visual-wrapper">
          <div className="visual-glow"></div>

          <div ref={visualRef} className="main-visual">
            <div className="car-shadow"></div>

            <div className="car">
              <div className="car-roof"></div>

              <div className="car-window front"></div>
              <div className="car-window back"></div>

              <div className="car-body">
                <div className="headlight"></div>
                <div className="headlight second"></div>

                <div className="door-line"></div>
                <div className="door-handle"></div>

                <div className="wheel wheel-front">
                  <div className="wheel-inner"></div>
                </div>

                <div className="wheel wheel-back">
                  <div className="wheel-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-track">
            <div className="scroll-line"></div>
          </div>
        </div>

        <div className="hero-number">
          01<span>/03</span>
        </div>
      </section>

      <section className="next-section" id="about">
        <div>
          <span className="section-label">02 — EXPERIENCE</span>

          <h2>
            BUILDING DIGITAL
            <br />
            EXPERIENCES.
          </h2>

          <p>
            Scroll-driven interactions, thoughtful interfaces and
            performance-focused development.
          </p>
        </div>
      </section>

      <section className="next-section dark-section" id="work">
        <div>
          <span className="section-label">03 — WORK</span>

          <h2>
            DESIGN.
            <br />
            DEVELOP.
            <br />
            DELIVER.
          </h2>
        </div>
      </section>

      <section className="next-section" id="contact">
        <div>
          <span className="section-label">04 — CONTACT</span>

          <h2>
            LET'S CREATE
            <br />
            SOMETHING.
          </h2>
        </div>
      </section>
    </main>
  );
}

export default App;