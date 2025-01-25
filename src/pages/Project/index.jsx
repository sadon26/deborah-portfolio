import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { HomePageLayout } from "@/layouts";
import Carmedis from "./Carmedis";
import Payrep from "./Payrep";
import Clearline from "./Clearline";

const Project = () => {
  const location = useLocation();

  const projectDetails = useCallback(() => {
    switch (location.pathname) {
      case "/projects/carmedis":
        return {
          theme: "!bg-[#E1E9F430] backdrop-blur-md",
          component: Carmedis,
          className: "bg-blue-layout-bg important",
        };
      case "/projects/payrep":
        return {
          theme: "!bg-white/30 backdrop-blur-md",
          component: Payrep,
          className: "bg-white important",
        };

      case "/projects/clearline":
        return {
          theme: "!bg-[#E1E9F430] backdrop-blur-md",
          component: Clearline,
          className: "bg-blue-layout-bg important",
        };

      default:
        return {
          theme: "!bg-[#E1E9F430] backdrop-blur-md",
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
