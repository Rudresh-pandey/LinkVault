import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./logreg.css";
import axios from "axios";
export default function RegisterPage() {
  const [userName, SetUserName] = useState("");
  const [userEmail, SetUserEmail] = useState("");
  const [userPass, SetUserPass] = useState("");
  async function registerUser(e) {
    e.preventDefault();
    await axios.post("/register", {
      userName,
      userEmail,
      userPass,
    });
    // axios.get("/test");
  }
  return (
    <div className="mt-16 grow flex items-center justify-around">
      <form className="form" onSubmit={registerUser}>
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
        <button className="logBtn" type="submit">
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
