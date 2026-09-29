import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const carRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // =========================================
      // INTRO ANIMATION
      // =========================================

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from(".navbar", {
          opacity: 0,
          y: -30,
          duration: 0.7,
        })

        .from(".top-label", {
          opacity: 0,
          y: 30,
          duration: 0.7,
        })

        .from(
          ".title-word",
          {
            opacity: 0,
            y: 100,
            rotateX: -70,
            stagger: 0.15,
            duration: 1,
            transformOrigin: "50% 100%",
          },
          "-=0.4"
        )

        .from(
          ".description",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.5"
        )

        .from(
          ".stat",
          {
            opacity: 0,
            y: 40,
            scale: 0.8,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.4"
        )

        .from(
          ".explore-button",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.3"
        )

        .from(
          ".visual-wrapper",
          {
            opacity: 0,
            scale: 0.5,
            rotateY: -40,
            duration: 1.2,
          },
          "-=1"
        );

      // =========================================
      // CAR FLOATING ANIMATION
      // =========================================

      gsap.to(carRef.current, {
        y: -15,
        rotationX: 3,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // =========================================
      // SCROLL-DRIVEN CAR ANIMATION
      // =========================================

      gsap.to(carRef.current, {
        x: 400,
        y: 180,
        rotationY: 180,
        rotationZ: 12,
        scale: 0.65,

        scrollTrigger: {
          trigger: heroRef.current,

          start: "top top",

          end: "bottom top",

          scrub: 1.2,
        },

        ease: "none",
      });

      // =========================================
      // BACKGROUND ORB PARALLAX
      // =========================================

      gsap.to(".orb-1", {
        x: -180,
        y: 100,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".orb-2", {
        x: 150,
        y: -100,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // =========================================
      // CAR RINGS PARALLAX
      // =========================================

      gsap.to(".ring-1", {
        rotation: 360,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".ring-2", {
        rotation: -250,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // =========================================
      // STATS FADE ON SCROLL
      // =========================================

      gsap.to(".stats", {
        y: -80,
        opacity: 0,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "20% top",
          end: "65% top",
          scrub: 1,
        },
      });

      // =========================================
      // CONTENT SECTION ANIMATION
      // =========================================

      gsap.from(".content-title", {
        opacity: 0,
        y: 100,

        scrollTrigger: {
          trigger: ".content-section",
          start: "top 75%",
          end: "top 30%",
          scrub: 1,
        },
      });

      gsap.from(".content-description", {
        opacity: 0,
        y: 50,

        scrollTrigger: {
          trigger: ".content-section",
          start: "top 70%",
          end: "top 35%",
          scrub: 1,
        },
      });

      // =========================================
      // SERVICE CARDS
      // =========================================

      gsap.from(".service-card", {
        opacity: 0,
        y: 80,
        scale: 0.9,
        stagger: 0.2,

        scrollTrigger: {
          trigger: ".services",
          start: "top 75%",
        },

        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    // =========================================
    // MOUSE 3D PARALLAX
    // =========================================

    const handleMouseMove = (event) => {
      if (window.innerWidth <= 700) return;

      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(visualRef.current, {
        rotationY: x * 10,
        rotationX: -y * 10,

        duration: 0.8,

        ease: "power3.out",
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      ctx.revert();

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <main>

      {/* =========================================
          HERO
      ========================================= */}

      <section
        className="hero"
        ref={heroRef}
      >

        {/* Background */}

        <div className="grid"></div>

        <div className="orb orb-1"></div>

        <div className="orb orb-2"></div>


        {/* =====================================
            NAVBAR
        ===================================== */}

        <nav className="navbar">

          <div className="logo">
            ITZFIZZ<span>.</span>
          </div>

          <div className="nav-links">

            <a href="#about">
              About
            </a>

            <a href="#work">
              Work
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          <button className="menu-button">
            MENU
          </button>

        </nav>


        {/* =====================================
            HERO CONTAINER
        ===================================== */}

        <div className="hero-container">

          {/* ===================================
              LEFT CONTENT
          =================================== */}

          <div className="hero-content">

            <div className="top-label">

              <span></span>

              DIGITAL EXPERIENCE STUDIO

            </div>


            <h1 className="main-title">

              <span className="title-word">
                WELCOME
              </span>

              <span className="title-word gradient-text">
                ITZFIZZ
              </span>

            </h1>


            <p className="description">

              We create immersive digital
              experiences that combine
              technology, creativity and
              performance.

            </p>


            {/* =================================
                STATISTICS
            ================================= */}

            <div className="stats">

              <div className="stat">

                <strong>
                  90%
                </strong>

                <span>
                  Client Satisfaction
                </span>

              </div>


              <div className="stat">

                <strong>
                  85%
                </strong>

                <span>
                  Project Success
                </span>

              </div>


              <div className="stat">

                <strong>
                  95%
                </strong>

                <span>
                  Performance
                </span>

              </div>

            </div>


            {/* =================================
                BUTTON
            ================================= */}

            <button className="explore-button">

              Explore More

              <span>
                ↗
              </span>

            </button>

          </div>


          {/* ===================================
              RIGHT VISUAL
          =================================== */}

          <div
            className="visual-area"
            ref={visualRef}
          >

            <div className="visual-wrapper">

              {/* Glow */}

              <div className="glow"></div>


              {/* Rings */}

              <div className="ring ring-1"></div>

              <div className="ring ring-2"></div>

              <div className="ring ring-3"></div>


              {/* =================================
                  CAR
              ================================= */}

              <div
                className="car-3d"
                ref={carRef}
              >

                <div className="car-glow"></div>


                <div className="car-body">


                  {/* Roof */}

                  <div className="car-roof"></div>


                  {/* Windows */}

                  <div
                    className="
                      car-window
                      front-window
                    "
                  ></div>


                  <div
                    className="
                      car-window
                      back-window
                    "
                  ></div>


                  {/* Door line */}

                  <div className="door-line"></div>


                  {/* Wheels */}

                  <div
                    className="
                      car-wheel
                      wheel-left
                    "
                  ></div>


                  <div
                    className="
                      car-wheel
                      wheel-right
                    "
                  ></div>


                  {/* Headlights */}

                  <div
                    className="
                      car-light
                      light-left
                    "
                  ></div>


                  <div
                    className="
                      car-light
                      light-right
                    "
                  ></div>


                  {/* Front bumper */}

                  <div className="front-bumper"></div>

                </div>

              </div>


              {/* =================================
                  FLOATING CARDS
              ================================= */}

              <div
                className="
                  floating-card
                  card-1
                "
              >

                <span>
                  01
                </span>

                <p>
                  DESIGN
                </p>

              </div>


              <div
                className="
                  floating-card
                  card-2
                "
              >

                <span>
                  02
                </span>

                <p>
                  DEVELOP
                </p>

              </div>


              <div
                className="
                  floating-card
                  card-3
                "
              >

                <span>
                  03
                </span>

                <p>
                  DEPLOY
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            SCROLL INDICATOR
        ===================================== */}

        <div className="scroll-indicator">

          <span>
            SCROLL TO EXPLORE
          </span>

          <div className="scroll-line"></div>

        </div>

      </section>


      {/* =========================================
          ABOUT SECTION
      ========================================= */}

      <section
        className="content-section"
        id="about"
      >

        <div className="section-number">
          01
        </div>


        <h2 className="content-title">

          WE BUILD

          <br />

          <span>
            DIGITAL EXPERIENCES.
          </span>

        </h2>


        <p className="content-description">

          From websites to web applications,
          we create digital products that are
          fast, responsive and memorable.

        </p>

      </section>


      {/* =========================================
          SERVICES
      ========================================= */}

      <section
        className="services"
        id="work"
      >

        <div className="service-card">

          <span>
            01
          </span>

          <h3>
            WEB DESIGN
          </h3>

          <p>
            Modern interfaces designed
            for real users and businesses.
          </p>

        </div>


        <div className="service-card">

          <span>
            02
          </span>

          <h3>
            DEVELOPMENT
          </h3>

          <p>
            Fast and scalable websites
            and web applications.
          </p>

        </div>


        <div className="service-card">

          <span>
            03
          </span>

          <h3>
            EXPERIENCE
          </h3>

          <p>
            Smooth animations and
            interactions that make
            products memorable.
          </p>

        </div>

      </section>


      {/* =========================================
          CONTACT
      ========================================= */}

      <section
        className="contact"
        id="contact"
      >

        <span>
          LET'S CREATE SOMETHING
        </span>

        <h2>
          TOGETHER.
        </h2>

        <button>
          Get In Touch ↗
        </button>

      </section>

    </main>
  );
}

export default App;