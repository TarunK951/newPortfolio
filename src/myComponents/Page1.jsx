import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import {
  FaBars,
  FaGithubSquare,
  FaLinkedin,
  FaTimes,
  FaWhatsappSquare,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import profileImage from "../assets/STK-20250425-WA0004-ezgif.com-speed.gif";
import "./p.css";

function Page1() {
  // Default to dark mode (true), ignore localStorage to avoid override
  const [shiftmode, setShiftmode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply dark mode class and save to localStorage
  useEffect(() => {
    document.body.classList.toggle("dark-mode", shiftmode);
    localStorage.setItem("theme", JSON.stringify(shiftmode));
    console.log("Dark mode applied:", shiftmode); // Debug log
  }, [shiftmode]);

  // Set dark mode meta tag to prevent flash
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = shiftmode ? "#0a0a0a" : "#f8f1e9";
    document.head.appendChild(meta);
    return () => document.head.removeChild(meta);
  }, [shiftmode]);

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.classList.add("active");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("active");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.removeChild(cursor);
    };
  }, []);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.toggle("scrolling", window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
            console.log("Page1 animation triggered:", entry.target); // Debug log
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
    <div className={`page1 ${shiftmode ? "dark" : "light"}`}>
      <nav className="navBar">
        <div className="navCom">
          <div className="logo" data-animate>
            TARUN
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <FaTimes size={30} className="icon" />
            ) : (
              <FaBars size={30} className="icon" />
            )}
          </button>
          <div className={`details ${menuOpen ? "open" : ""}`}>
            <p data-animate>Home</p>
            <p data-animate>About</p>
          </div>
          <div className="shift-btn">
            <button
              className="nd-btn"
              onClick={() => setShiftmode(!shiftmode)}
              aria-label={
                shiftmode ? "Switch to light mode" : "Switch to dark mode"
              }
              data-animate
            >
              {shiftmode ? (
                <CiLight size={35} className="icon" />
              ) : (
                <CiDark size={35} className="icon" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className="intro">
        <div className="intro-card">
          <div className="intro-text" data-animate>
            <div className="info">
              <p className="greeting" data-animate>
                Hello, I'm
              </p>
              <p className="name" data-animate>
                Tarun
              </p>
            </div>
            <div className="bio">
              <p data-animate>
                Passionate about crafting beautiful web experiences
              </p>
            </div>
          </div>
          <div className="intro-img" data-animate>
            <div className="image-wrapper">
              <div className="image-glow-layers">
                <div className="glow-layer glow-layer-1"></div>
                <div className="glow-layer glow-layer-2"></div>
              </div>
              <img
                className="hi-img"
                src={profileImage}
                alt="Tarun's profile"
                onError={(e) => console.error("Image failed to load:", e)}
              />
            </div>
          </div>
        </div>
        <div className="intro-footer" data-animate>
          <div className="role">
            <p data-animate>Frontend Developer</p>
          </div>
          <div className="media-icons" data-animate>
            <a
              href="https://github.com/TarunK951"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub profile"
            >
              <FaGithubSquare size={45} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/satya-tarun-k-91038424a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={45} className="icon" />
            </a>
            <a
              href="mailto:satyatarun.951@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <IoIosMail size={45} className="icon" />
            </a>
            <a
              href="https://wa.me/9391954467"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <FaWhatsappSquare size={45} className="icon" />
            </a>
          </div>
          <div className="Rbtn" data-animate>
            <a href="./assests/resume-2025-april.pdf" download>
              <button aria-label="Download resume">
                <p>Download Resume</p>
                <MdFileDownload size={35} className="icon" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
