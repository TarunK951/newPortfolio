import React, { useState, useEffect } from "react";
import { CiCircleInfo, CiLink } from "react-icons/ci";
import "./project.css";

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "CRED Clone",
      image:
        "https://play-lh.googleusercontent.com/r2ZbsIr5sQ7Wtl1T6eevyWj4KS7QbezF7JYB9gxQnLWbf0K4kU7qaLNcJLLUh0WG-3pK",
      languages: ["HTML", "CSS"],
      description:
        "A clone of the CRED website with animations and styles, showcasing my CSS and HTML skills by replicating the original design.",
      link: "#",
    },
    {
      id: 2,
      title: "E-commerce Website",
      image:
        "https://cdn.dribbble.com/users/4189230/screenshots/14986479/media/9f4e7e9b0d4a8e4f4c4c4c4c4c4c4c4c.png",
      languages: ["React", "Node.js", "MongoDB"],
      description:
        "A fully functional e-commerce website with user authentication, product listings, cart functionality, and order processing.",
      link: "#",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`project ${
              expandedProject === project.id ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(project.id)}
            data-animate
            data-delay={`${index * 0.3}s`}
          >
            <div className="proj-img-container">
              <img
                className="pro-img"
                src={project.image}
                alt={project.title}
                onError={() =>
                  console.error(`Failed to load image for ${project.title}`)
                }
              />
            </div>
            <div className="proj-details">
              <div className="proj-title">
                <p>{project.title}</p>
                <a href={project.link} onClick={(e) => e.stopPropagation()}>
                  <CiLink />
                </a>
              </div>
              <div
                className="proj-info"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand(project.id);
                }}
              >
                <CiCircleInfo />
              </div>
              {expandedProject === project.id && (
                <div className="proj-expanded">
                  <div className="proj-lang">
                    {project.languages.map((lang, index) => (
                      <p key={index}>{lang}</p>
                    ))}
                  </div>
                  <div className="proj-description">
                    <p>{project.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
