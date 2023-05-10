import React from "react";
import { Link } from "react-router-dom";
import "./logreg.css";
export default function LoginPage() {
  return (
    <div className="mt-16 grow flex items-center justify-around">
      <form className="form" action="">
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button className="logBtn">Login</button>
        <div>
          Don't have a account?
          <Link className="underline" to={"/register"}>
            Register now
          </Link>
        </div>
      </form>
    </div>
  );
}
