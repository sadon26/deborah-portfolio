import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutMe, Home, Project } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/projects/:name" element={<Project />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
};

export default Router;
