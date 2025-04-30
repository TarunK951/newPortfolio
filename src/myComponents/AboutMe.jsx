import React, { useEffect, useRef } from "react";
import "./about.css";

function AboutMe() {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    if (!section) {
      console.error("AboutMe section ref not found!");
      return;
    }

    const lines = lineRefs.current.filter(Boolean);
    if (lines.length === 0) {
      console.error("No .about-line elements found!");
      return;
    }

    // Split title into characters for slot machine effect
    if (title) {
      const chars = title.textContent.split("");
      title.innerHTML = chars
        .map(
          (char, i) =>
            `<span class="title-char" data-char-index="${i}">${char}</span>`
        )
        .join("");
    }

    // Page load animations
    const triggerLoadAnimations = () => {
      console.log("Triggering page load animations"); // Debug
      section.classList.add("animate-in");
      if (title) {
        title.classList.add("slot-animate");
      }
      lines.forEach((line, index) => {
        setTimeout(() => {
          console.log(`Animating line ${index} on load:`, line.textContent); // Debug
          line.classList.add("animate-line");
          line.classList.add(
            index % 3 === 1
              ? "slide-left"
              : index % 3 === 2
              ? "slide-right"
              : "crack-drop"
          );
        }, index * 700); // Stagger 700ms
      });
    };

    // Trigger on initial load
    triggerLoadAnimations();

    // Section-level observer for scroll
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
            "Section Observer:",
            entry.isIntersecting,
            "Bounding:",
            entry.boundingClientRect.top
          ); // Debug
          if (entry.isIntersecting) {
            section.classList.add("animate-in");
            section.classList.remove("animate-out");
            if (title) {
              title.classList.add("slot-animate");
            }
            lines.forEach((line, index) => {
              setTimeout(() => {
                console.log(
                  `Animating line ${index} on scroll:`,
                  line.textContent
                ); // Debug
                line.classList.add("animate-line");
                line.classList.remove("fly-away");
                line.classList.add(
                  index % 3 === 1
                    ? "slide-left"
                    : index % 3 === 2
                    ? "slide-right"
                    : "crack-drop"
                );
              }, index * 700); // Stagger 700ms
            });
          } else {
            section.classList.add("animate-out");
            section.classList.remove("animate-in");
            if (title) {
              title.classList.remove("slot-animate");
            }
            lines.forEach((line) => {
              if (entry.boundingClientRect.top < 0) {
                line.classList.add("fly-away");
                line.classList.remove(
                  "animate-line",
                  "crack-drop",
                  "slide-left",
                  "slide-right"
                );
              } else {
                line.classList.remove(
                  "animate-line",
                  "fly-away",
                  "crack-drop",
                  "slide-left",
                  "slide-right"
                );
              }
            });
          }
        });
      },
      { threshold: 0.4, rootMargin: "-50px" }
    );

    // Observe section
    sectionObserver.observe(section);

    // Fallback: Trigger animations after 3s
    const checkVisibility = () => {
      const rect = section.getBoundingClientRect();
      console.log("Section rect:", rect.top, window.innerHeight); // Debug
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        console.log("Section Fallback: Triggering animations"); // Debug
        section.classList.add("animate-in");
        if (title) {
          title.classList.add("slot-animate");
        }
        lines.forEach((line, index) => {
          setTimeout(() => {
            line.classList.add("animate-line");
            line.classList.add(
              index % 3 === 1
                ? "slide-left"
                : index % 3 === 2
                ? "slide-right"
                : "crack-drop"
            );
          }, index * 700);
        });
      }
    };

    const timeout = setTimeout(checkVisibility, 3000);

    // Page leave animations
    const handlePageLeave = () => {
      console.log("Triggering page leave animations"); // Debug
      section.classList.add("animate-out");
      if (title) {
        title.classList.remove("slot-animate");
      }
      lines.forEach((line) => {
        line.classList.add("fly-away");
        line.classList.remove(
          "animate-line",
          "crack-drop",
          "slide-left",
          "slide-right"
        );
      });
    };

    window.addEventListener("beforeunload", handlePageLeave);

    // Split words for hover effect
    lines.forEach((line) => {
      if (line) {
        const words = line.textContent.split(" ");
        line.innerHTML = words
          .map((word) => `<span class="word">${word} </span>`)
          .join("");
      }
    });

    // Re-trigger slot machine on title hover
    const handleTitleHover = () => {
      if (title && section.classList.contains("animate-in")) {
        title.classList.remove("slot-animate");
        void title.offsetWidth; // Force reflow
        title.classList.add("slot-animate");
      }
    };

    if (title) {
      title.addEventListener("mouseenter", handleTitleHover);
    }

    return () => {
      sectionObserver.disconnect();
      clearTimeout(timeout);
      window.removeEventListener("beforeunload", handlePageLeave);
      if (title) {
        title.removeEventListener("mouseenter", handleTitleHover);
      }
    };
  }, []);

  const aboutText = [
    "Hey, I’m Tarun, a Frontend Developer who loves building sleek, user-friendly websites with HTML, CSS, JavaScript, and React.",
    "I create web pages that look great and run smoothly.",
    "Using Figma, I design clean, modern interfaces that users love.",
    "I also work with MongoDB, Java, and Python to tackle backend tasks.",
    "My portfolio showcases projects that highlight my skills and creativity.",
    "I’m passionate about crafting websites that make an impact.",
    "Check out my work to see what I bring to the table!",
    "With a focus on quality code, I deliver solutions that meet modern standards.",
    "I’m always learning and pushing to create better digital experiences.",
  ];

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="about-me" ref={sectionRef} data-animate>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="about-title" ref={titleRef}>
          About Me
        </div>
        <div className="about-content">
          <p className="about-data">
            {aboutText.map((line, index) => (
              <span
                key={index}
                className="about-line"
                ref={(el) => (lineRefs.current[index] = el)}
                style={{ display: "block", "--line-index": index }}
              >
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
