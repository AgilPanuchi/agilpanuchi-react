import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./layouts/Error404";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";
import { Dashboard } from "./pages/Dashboard";
import TechnicalSkills from "./components/TechnicalSkills";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404 />} />
        <Route path="registration" element={<Registration />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="about/workexperience" element={<WorkExperience />} />
        <Route path="about/technicalskills" element={<TechnicalSkills />} />
      </Routes>
    </Router>
  );
};

export default App;
