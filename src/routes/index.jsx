import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Project } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/projects/:name" element={<Project />} />
    </Routes>
  );
};

export default Router;
