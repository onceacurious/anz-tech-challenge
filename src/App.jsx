import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Summary, RealThing, Login, Graph, Register } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Summary />} />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
        <Route path="real-thing/" element={<RealThing />} />
        <Route path="graph/" element={<Graph />} />
      </Routes>
    </Router>
  );
}

export default App;
