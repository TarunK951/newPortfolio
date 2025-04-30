import React, { useEffect } from "react";
import "./about.css";

function AboutMe() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            entry.target.classList.remove("animate-out");
            const lines = entry.target.querySelectorAll(".about-line");
            lines.forEach((line, index) => {
              setTimeout(() => {
                line.classList.add("animate-line");
              }, index * 200); // Stagger lines by 200ms
            });
          } else {
            entry.target.classList.add("animate-out");
            entry.target.classList.remove("animate-in");
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    const section = document.querySelector(".about-me");
    if (section) observer.observe(section);

    return () => observer.disconnect();
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
      <div className="about-me" data-animate>
        <div className="about-title">About Me</div>
        <div className="about-content">
          <p className="about-data">
            {aboutText.map((line, index) => (
              <span
                key={index}
                className="about-line"
                style={{ display: "block" }}
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
