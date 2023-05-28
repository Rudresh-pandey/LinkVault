import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import UserPage from "./pages/UserPage";

import IntroPage from "./pages/IntroPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<IntroPage />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route exact path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
