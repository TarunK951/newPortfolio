import React, { useEffect, useRef } from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  SiNextdotjs
  
} from "react-icons/fa";
import "./skill.css";

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsSection = skillsRef.current;
    const skills = skillsSection.querySelectorAll(".skill");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skills.forEach((skill, index) => {
              skill.classList.remove("animate"); // Reset animation
              setTimeout(() => {
                skill.classList.add("animate");
              }, index * 250); // Staggered drop-down effect
            });
            skillsSection.classList.add("animate");
          } else {
            skills.forEach((skill) => {
              skill.classList.remove("animate"); // Remove animation when out of view
            });
            skillsSection.classList.remove("animate");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  const skillsData = [
    { icon: <FaHtml5 />, name: "HTML5", proficiency: "Advanced" },
    { icon: <FaCss3Alt />, name: "CSS3", proficiency: "Advanced" },
    { icon: <FaJs />, name: "JavaScript", proficiency: "Expert" },
    { icon: <FaReact />, name: "React", proficiency: "Expert" },
     {icon: <SiNextdotjs />,name:"Next Js",proficiency:"Expert"},
    { icon: <FaNodeJs />, name: "Node js", proficiency: "Expert" },
    { icon: <FaGitAlt />, name: "Git", proficiency: "Advanced" },
    { icon: <FaDatabase />, name: "MongoDB", proficiency: "Intermediate" },
    { icon: <FaFigma />, name: "Figma", proficiency: "Intermediate" },
    { icon: <FaJava />, name: "Java", proficiency: "Intermediate" },
    { icon: <FaPython />, name: "Python", proficiency: "Intermediate" },
    
  ];

  return (
    <section className="skills-container" ref={skillsRef}>
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div
            className="skill"
            key={index}
            data-skill={skill.name.toLowerCase()}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-proficiency">{skill.proficiency}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
