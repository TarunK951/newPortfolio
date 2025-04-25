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
import "./p.css";

function Page1() {
  const [shiftmode, setShiftmode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", shiftmode);
  }, [shiftmode]);

  return (
    <div className="page1">
      <nav className="navBar">
        <div className="navCom">
          <div className="logo">TARUN</div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes size={30} color={shiftmode ? "#ffffff" : "#000000"} />
            ) : (
              <FaBars size={30} color={shiftmode ? "#ffffff" : "#000000"} />
            )}
          </button>
          <div className={`details ${menuOpen ? "open" : ""}`}>
            <p>Home</p>
            <p>About</p>
            <div className="shift-btn">
              <button
                className="nd-btn"
                onClick={() => setShiftmode(!shiftmode)}
              >
                {shiftmode ? (
                  <CiLight size={35} color="#ffffff" />
                ) : (
                  <CiDark size={35} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="intro">
        <div className="intro-text">
          <div className="info">
            <p className="greeting">Hello, I'm</p>
            <p className="name">Tarun</p>
          </div>
          <div className="bio">
            <p>Passionate about crafting beautiful web experiences</p>
          </div>
          <div className="intro-img">
            <div className="image-wrapper">
              <img
                className="hi-img"
                src="/src/assets/STK-20250425-WA0004-ezgif.com-speed.gif"
                alt="Tarun"
              />
              <div className="glow-overlay"></div>
            </div>
          </div>
          <div className="role">
            <p>Frontend Developer</p>
          </div>
          <div className="media-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
            >
              <FaGithubSquare size={35} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
            >
              <FaLinkedin size={35} />
            </a>
            <a href="mailto:example@gmail.com" className="icon mail">
              <IoIosMail size={35} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="icon whatsapp"
            >
              <FaWhatsappSquare size={35} />
            </a>
          </div>
          <div className="Rbtn">
            <button>
              <p>Download Resume</p>
              <MdFileDownload
                size={35}
                color={shiftmode ? "#ffffff" : "#000000"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
