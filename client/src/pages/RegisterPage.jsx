import React from "react";
import { Link } from "react-router-dom";
import "./logreg.css";
export default function RegisterPage() {
  return (
    <div className="mt-16 grow flex items-center justify-around">
      <form className="form" action="">
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button className="logBtn">Register</button>
        <div>
          Already signed in?
          <Link className="underline" to={"/login"}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
