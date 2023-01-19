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
<<<<<<< HEAD:src/App.js
=======
          <Route path="/blogs" element={<Write />} />
>>>>>>> 4177488c6ab80a7dad68cfa577c66722794e71df:client/src/App.js
          <Route path="read" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
