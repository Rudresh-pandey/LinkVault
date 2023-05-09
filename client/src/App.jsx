import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />;
        <Route exact path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
