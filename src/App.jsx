import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Summary, Support, Login, Graph, Register } from "./pages";
import { Navbar } from "./components";
import { AppProvider } from "./helpers/AppContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Summary />} />
          <Route path="login/" element={<Login />} />
          <Route path="register/" element={<Register />} />
          <Route path="support/" element={<Support />} />
          <Route path="graph/" element={<Graph />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
