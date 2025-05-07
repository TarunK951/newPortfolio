import React, { useEffect, useRef } from "react";
import { FaFreeCodeCamp, FaLink } from "react-icons/fa";
import "./certificates.css";

function Certificates() {
  const certificates = [
    {
      name: "freeCodeCamp",
      certName: "Responsive Web Design Certification",
      image: <FaFreeCodeCamp className="cert-icon" />,
      link: "https://www.freecodecamp.org/certification/fcc35d50086-0e3b-4c46-b3b9-2100268ce3f8/responsive-web-design",
      info: "I have learned the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design & learned how to make webpages that respond to different screen sizes by building a photo gallery with Flexbox, and a magazine article layout with CSS Grid.",
    },
    {
      name: "freeCodeCamp",
      certName: "JavaScript Algorithms and Data Structures",
      image: <FaFreeCodeCamp className="cert-icon" />,
      link: "https://www.freecodecamp.org/certification/fcc35d50086-0e3b-4c46-b3b9-2100268ce3f8/javascript-algorithms-and-data-structures-v8",
      info: "I have learned JavaScript fundamentals, ES6, regular expressions, basic data structures, and object-oriented programming by building projects like a palindrome checker and a Roman numeral converter.",
    },
    {
      name: "freeCodeCamp",
      certName: "Front End Development Libraries",
      image: <FaFreeCodeCamp className="cert-icon" />,
      link: "https://www.freecodecamp.org/certification/fcc35d50086-0e3b-4c46-b3b9-2100268ce3f8/javascript-algorithms-and-data-structures",
      info: "I have mastered front-end libraries like React, Redux, Sass, and Bootstrap by building projects such as a random quote machine and a Markdown previewer.",
    },
    {
      name: "Great Learning",
      certName: "React JS",
      image: <FaFreeCodeCamp className="cert-icon" />,
      link: "https://olympus.mygreatlearning.com/courses/52045/certificate?pb_id=581",
      info: "Completed a certified course in React.js, gaining practical experience with core concepts like components, props, state, and hooks. Built responsive web applications using reusable components and explored state management, conditional rendering, and form handling. The course strengthened my ability to design scalable and maintainable front-end interfaces.",
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
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
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
