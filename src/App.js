import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="read" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

