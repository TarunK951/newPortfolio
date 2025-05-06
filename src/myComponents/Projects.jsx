import React, { useEffect, useState } from "react";
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
      title: "React Crud",
      image:
        "https://res.cloudinary.com/dz209s6jk/image/upload/v1731069573/Challenges/abew5ajhqcspt5sgro7h.jpg",
      languages: ["JavaScript", "React JS", "HTML", "CSS"],
      description:
        "Built a functional CRUD application using React.js. Leveraged HTML and CSS for styling and structure. Employed nested components and prop passing for dynamic UI. Demonstrates proficiency in modern front-end technologies.",
      link: "https://github.com/TarunK951/React-CRUD",
    },
    {
      id: 3,
      title: "Exam App",
      image: "https://satyatarunk.netlify.app/pics/quiz.webp",
      languages: ["HTML", "CSS", "Java Script"],
      description:
        "A dynamic and interactive quiz application built using JavaScript, HTML, and CSS. Features multiple-choice questions, real-time score tracking, and a timer. Implements event-driven interactions for a smooth user experience and responsive design for accessibility across devices. ",
      link: "https://tarunk951.github.io/QuizCraft/",
    },
    {
      id: 4,
      title: "Remainder",
      image: "https://satyatarunk.netlify.app/pics/remainder%20app.webp",
      languages: ["Java Script", "HTML", "CSS"],
      description:
        "A simple and efficient task management app built using JavaScript, HTML, and CSS. Allows users to add, edit, and delete tasks with reminder notifications. Features a user-friendly UI, local storage support, and a responsive design for seamless task tracking.",
      link: "https://github.com/TarunK951/Things-TooDo",
    },
    {
      id: 5,
      title: "Va----Valentine",
      image: "https://satyatarunk.netlify.app/pics/valentine.png",
      languages: ["HTML", "CSS", "Java Script"],
      description:
        "This a funny date proposal onclick bsed web made using html & css A dynamic and interactive digital gift card built using JavaScript, HTML, and CSS. Features animated effects, personalized messages, and event-driven interactions to enhance user engagement. Designed with a romantic theme and smooth transitions for a delightful experience. ",
      link: "https://tarunk951.github.io/vars/",
    },
    {
      id: 6,
      title: "Simons Game",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Simon_Electronic_Game.jpg/1200px-Simon_Electronic_Game.jpg",
      languages: ["JAva Script", "HTML", "CSS"],
      description:
        "A fun and interactive memory-based game built using JavaScript, HTML, and CSS. Features dynamic color sequences, sound effects, and increasing difficulty levels. Implements event listeners for user interactions and ensures a responsive design for a smooth gaming experience ",
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
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const squares = document.querySelectorAll(".grid-square");
    squares.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-container">
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
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
                onError={(e) => {
                  console.error(`Failed to load image for ${project.title}`);
                  e.target.src = "https://via.placeholder.com/120";
                }}
              />
            </div>
            <div className="proj-details">
              <div className="proj-title">
                <p>{project.title}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
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
