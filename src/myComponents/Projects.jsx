import React, { useState } from "react";
import { CiLink } from "react-icons/ci";
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
      title: "CRED Clone",
      image:
        "https://play-lh.googleusercontent.com/r2ZbsIr5sQ7Wtl1T6eevyWj4KS7QbezF7JYB9gxQnLWbf0K4kU7qaLNcJLLUh0WG-3pK",
      languages: ["HTML", "CSS"],
      description:
        "A clone of the CRED website with animations and styles, showcasing my CSS and HTML skills by replicating the original design.",
      link: "#",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`project ${
              expandedProject === project.id ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(project.id)}
          >
            <div className="proj-img-container">
              <img
                className="pro-img"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="proj-details">
              <div className="proj-title">
                <p>{project.title}</p>
                <a href={project.link} onClick={(e) => e.stopPropagation()}>
                  <CiLink />
                </a>
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
