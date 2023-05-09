import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import UserPage from "./pages/UserPage";

import IntroPage from "./pages/IntroPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<IntroPage />} />;
        <Route exact path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
