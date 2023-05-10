import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./intro.css";

export default function IntroPage() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">LINKvault</div>
          <div className="loginBtn">
            <button className="signBtn">
              <Link to={"/login"}>sign in</Link>
            </button>
          </div>
        </div>
        <div className="content">Container</div>
      </div>
      <Outlet />
    </>
  );
}
