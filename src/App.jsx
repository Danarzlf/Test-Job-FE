// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/Dashboard2";
import { useState } from "react";

const App = () => {

  return (
    <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard2" element={<Dashboard2 />} />
          </Routes>
    </Router>
  );
};

export default App;
