import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./login.css";

export default function IntroPage() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">LINKvault</div>
          <div className="loginBtn">
            <button>sing in</button>
            <button>sing up</button>
          </div>
        </div>
        <div className="content">Container</div>
      </div>
      <Outlet />
    </>
  );
}
