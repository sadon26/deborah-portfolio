import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { HomePageLayout } from "@/layouts";
import Carmedis from "./Carmedis";

const Project = () => {
  const location = useLocation();

  const projectDetails = useCallback(() => {
    switch (location.pathname) {
      case "/projects/carmedis":
        return {
          theme: "!bg-[#E1E9F4] bg-opacity-30",
          component: Carmedis,
          className: "bg-blue-layout-bg important",
        };

      default:
        return {
          theme: "!bg-[#E1E9F4] bg-opacity-30",
          component: Carmedis,
          className: "bg-blue-layout-bg important",
        };
    }
  }, [location]);

  const Component = projectDetails()?.component;

  return (
    <HomePageLayout
      className={projectDetails()?.className}
      theme={projectDetails()?.theme}
    >
      <Component />
    </HomePageLayout>
  );
};

export default Project;