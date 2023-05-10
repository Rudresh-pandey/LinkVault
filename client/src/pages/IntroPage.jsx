import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./intro.css";

export default function IntroPage() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">LINKvault</div>
          <div className="loginBtn">
            <Link to={"/login"} className="logBtn">
              sing in
            </Link>
            <Link to={"/login"} className="logBtn">
              sing up
            </Link>
          </div>
        </div>
        <div className="content">Container</div>
      </div>
      <Outlet />
    </>
  );
}
