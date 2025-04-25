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
  const [shiftmode, setShiftmode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", shiftmode);
  }, [shiftmode]);

  return (
    <div className={`page1 ${shiftmode ? "dark" : "light"}`}>
      <nav className="navBar">
        <div className="navCom">
          <div className="logo">TARUN</div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes size={30} className="icon-color" />
            ) : (
              <FaBars size={30} className="icon-color" />
            )}
          </button>
          <div className={`details ${menuOpen ? "open" : ""}`}>
            <p>Home</p>
            <p>About</p>
          </div>
          <div className="shift-btn">
            <button className="nd-btn" onClick={() => setShiftmode(!shiftmode)}>
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
              <p className="greeting">Hello, I'm</p>
              <p className="name">Tarun</p>
            </div>
            <div className="bio">
              <p>Passionate about crafting beautiful web experiences</p>
            </div>
          </div>
          <div className="intro-img">
            <div className="image-wrapper">
              <img
                className="hi-img"
                src={profileImage}
                alt="Tarun's profile"
                onError={(e) => console.error("Image failed to load:", e)}
              />
              <div className="glow-overlay"></div>
              <div className="ripple"></div>
              <div className="particle"></div>
            </div>
          </div>
        </div>
        <div className="intro-footer">
          <div className="role">
            <p>Frontend Developer</p>
          </div>
          <div className="media-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithubSquare size={45} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin size={45} />
            </a>
            <a href="mailto:example@gmail.com" className="social-icon">
              <IoIosMail size={45} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaWhatsappSquare size={45} />
            </a>
          </div>
          <div className="Rbtn">
            <button>
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
