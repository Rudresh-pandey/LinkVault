import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./logreg.css";
export default function RegisterPage() {
  const [userName, SetUserName] = useState("");
  const [userEmail, SetUserEmail] = useState("");
  const [userPass, SetUserPass] = useState("");

  return (
    <div className="mt-16 grow flex items-center justify-around">
      <form className="form" action="">
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            SetUserName(e.target.value);
          }}
          placeholder="UserName"
        />
        <input
          type="email"
          onChange={(e) => {
            SetUserEmail(e.target.value);
          }}
          value={userEmail}
          placeholder="your@email.com"
        />
        <input
          type="password"
          onChange={(e) => {
            SetUserPass(e.target.value);
          }}
          value={userPass}
          placeholder="password"
        />
        <button
          className="logBtn"
          onClick={(e) => {
            e.preventDefault();
            console.log(userEmail, userName, userPass);
          }}
        >
          Register
        </button>
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
