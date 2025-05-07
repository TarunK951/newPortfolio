import React, { useEffect, useRef } from "react";
import { FaFreeCodeCamp, FaLink } from "react-icons/fa";
import "./certificates.css";

function Certificates() {
  const certificates = [
    {
      name: "freeCodeCamp",
      certName: "Responsive Web Design Certification",
      image: <FaFreeCodeCamp className="cert-icon" />,
      link: "https://freecodecamp.org/certification/placeholder-responsive-web-design",
      info: "I have learned the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design & learned how to make webpages that respond to different screen sizes by building a photo gallery with Flexbox, and a magazine article layout with CSS Grid.",
    },
    {
      name: "freeCodeCamp",
      certName: "JavaScript Algorithms and Data Structures",
      image: <FaFreeCodeCamp className="cert-icon" />,
      link: "https://freecodecamp.org/certification/placeholder-javascript-algorithms",
      info: "I have learned JavaScript fundamentals, ES6, regular expressions, basic data structures, and object-oriented programming by building projects like a palindrome checker and a Roman numeral converter.",
    },
    {
      name: "freeCodeCamp",
      certName: "Front End Development Libraries",
      image: <FaFreeCodeCamp className="cert-icon" />,
      link: "https://freecodecamp.org/certification/placeholder-frontend-libraries",
      info: "I have mastered front-end libraries like React, Redux, Sass, and Bootstrap by building projects such as a random quote machine and a Markdown previewer.",
    },
    {
      name: "freeCodeCamp",
      certName: "Back End Development and APIs",
      image: <FaFreeCodeCamp className="cert-icon" />,
      link: "https://freecodecamp.org/certification/placeholder-backend-apis",
      info: "I have learned how to build back-end applications and APIs using Node.js and Express, including how to handle requests, manage databases, and create microservices.",
    },
  ];

  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            grid.classList.add("animate-grid");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (grid) {
      observer.observe(grid);
    }

    return () => {
      if (grid) {
        observer.unobserve(grid);
      }
    };
  }, []);

  return (
    <div className="certificates-section">
      <h1 className="section-title">My Certificates</h1>
      <div className="certificates-grid" ref={gridRef}>
        {certificates.map((item, index) => (
          <div key={index} className="cert-container">
            <div className="cert-box">
              <div className="cert-img">{item.image}</div>
              <div className="cert-name">{item.certName}</div>
              <div className="cert-source">{item.name}</div>
              <div className="cert-info">{item.info}</div>
              <div className="cert-link">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link-icon"
                >
                  <FaLink />
                </a>
                <span className="cert-link-name">{item.certName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
