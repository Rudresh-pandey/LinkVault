import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./intro.css";

export default function IntroPage() {
  const [fromClass, setFormClass] = useState("form");
  const [overlayClass, setOverlayClass] = useState("");
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">LINKvault</div>
          <div className="loginBtn">
            <button
              className="signBtn"
              onClick={() => {
                setFormClass("form active");
                setOverlayClass("active");
              }}
            >
              sign in
            </button>
          </div>
        </div>
        <div className="content">Container</div>
      </div>
      <form className={fromClass} action="">
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button className="logBtn">
          <Link to={"/register"}>Login</Link>
        </button>
        <button
          className="closeBtn"
          onClick={() => {
            setFormClass("form");
            setOverlayClass("");
          }}
        >
          <Link to={"/"}>&times;</Link>
        </button>
      </form>

      <div id="overlay" className={overlayClass}></div>
      <Outlet />
    </>
  );
}
