import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
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
            <p>Satya Tarun Kamana</p>
          </div>
          <div className="intro-img">
            <img
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
