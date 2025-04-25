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
import profileImageStatic from "../assets/profile-static.jpg"; // Your static image
import profileImageGIF from "../assets/profile.gif"; // Your animated GIF
import "./p.css";

function Page1() {
  const [shiftmode, setShiftmode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", shiftmode);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [shiftmode]);

  const handleTap = (e) => {
    if (!isMobile) return;
    const element = e.currentTarget;
    element.classList.add("tap-effect");
    setTimeout(() => {
      element.classList.remove("tap-effect");
    }, 300);
  };

  return (
    <div className={`page1 ${shiftmode ? "dark" : "light"}`}>
      <nav className="navBar">
        <div className="navCom">
          <div className="logo" onTouchStart={handleTap}>
            TARUN
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            onTouchStart={handleTap}
          >
            {menuOpen ? (
              <FaTimes size={30} className="icon-color" />
            ) : (
              <FaBars size={30} className="icon-color" />
            )}
          </button>
          <div className={`details ${menuOpen ? "open" : ""}`}>
            <p onTouchStart={handleTap}>Home</p>
            <p onTouchStart={handleTap}>About</p>
          </div>
          <div className="shift-btn">
            <button
              className="nd-btn"
              onClick={() => setShiftmode(!shiftmode)}
              onTouchStart={handleTap}
            >
              {shiftmode ? (
                <CiLight size={35} className="icon-color" />
              ) : (
                <CiDark size={35} className="icon-color" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className="intro">
        <div className="intro-card">
          <div className="intro-text">
            <div className="info">
              <p className="greeting slide-in">Hello, I'm</p>
              <p className="name slide-in">Tarun</p>
            </div>
            <div className="bio">
              <p className="slide-in">
                Passionate about crafting beautiful web experiences
              </p>
            </div>
          </div>
          <div className="intro-img">
            <div
              className="image-wrapper"
              onMouseEnter={() => setIsAnimating(true)}
              onMouseLeave={() => setIsAnimating(false)}
              onTouchStart={() => {
                setIsAnimating(true);
                handleTap();
              }}
              onTouchEnd={() => setTimeout(() => setIsAnimating(false), 1000)}
            >
              <img
                className="static-image"
                src={profileImageStatic}
                alt="Tarun's profile"
              />
              <img
                className={`gif-image ${isAnimating ? "active" : ""}`}
                src={profileImageGIF}
                alt="Tarun's animated profile"
              />
              <div className="glow-overlay"></div>
            </div>
          </div>
        </div>
        <div className="intro-footer">
          <div className="role">
            <p className="scale-in">Frontend Developer</p>
          </div>
          <div className="media-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              onTouchStart={handleTap}
            >
              <FaGithubSquare size={45} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              onTouchStart={handleTap}
            >
              <FaLinkedin size={45} />
            </a>
            <a
              href="mailto:example@gmail.com"
              className="social-icon"
              onTouchStart={handleTap}
            >
              <IoIosMail size={45} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              onTouchStart={handleTap}
            >
              <FaWhatsappSquare size={45} />
            </a>
          </div>
          <div className="Rbtn">
            <button onTouchStart={handleTap}>
              <p>Download Resume</p>
              <MdFileDownload size={35} className="icon-color" />
              <div className="ripple"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
