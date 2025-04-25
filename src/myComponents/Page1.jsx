import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import "./p.css";

function Page1() {
  const [shiftmode, SetShiftmode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark-mode", shiftmode);
  }, [shiftmode]);
  return (
    <div className="page1">
      <div>
        <div className="navBar">
          <div className="navCom">
            <div className="logo">TARUN</div>
            <div className="details">
              <p>hii</p>
              <p>hello</p>
            </div>
            <div className="shift-btn">
              <button
                className="nd-btn"
                onClick={() => {
                  SetShiftmode(!shiftmode);
                }}
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
        <div className="intro">
          <div className="intro-text">
            <div className="info">
              <p>Hello I'm </p>
              <p>Tarun</p>
            </div>
            <div className="bio">
              <p>FrontEnd Developer</p>
            </div>
            <div className="media-icons">
              <a>
                {shiftmode ? (
                  <FaGithubSquare size={35} color="#ffffff" />
                ) : (
                  <FaGithubSquare size={35} />
                )}
              </a>
              {/*  */}
              <a>
                {shiftmode ? (
                  <FaLinkedin size={35} color="#ffffff" />
                ) : (
                  <FaLinkedin size={35} />
                )}
              </a>
              {/*  */}
              <a>
                {shiftmode ? (
                  <IoIosMail size={35} color="#ffffff" />
                ) : (
                  <IoIosMail size={35} />
                )}
              </a>
              {/*  */}
              <a>
                {shiftmode ? (
                  <FaWhatsappSquare size={35} color="#ffffff" />
                ) : (
                  <FaWhatsappSquare size={35} />
                )}
              </a>
            </div>
            <div className="Rbtn">
              <button>
                <p>Download Resume</p>
                <a>
                  {shiftmode ? (
                    <MdFileDownload size={35} color="#ffffff" />
                  ) : (
                    <MdFileDownload size={35} />
                  )}
                </a>
              </button>
            </div>
          </div>
          <div className="intro-img">
            <img
              className="hi-img"
              src="/src/assets/STK-20250425-WA0004-ezgif.com-speed.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
