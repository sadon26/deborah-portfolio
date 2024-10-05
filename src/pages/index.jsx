import React from "react";

const Home = React.lazy(() => import("./Home"));
const Project = React.lazy(() => import("./Project"));
const AboutMe = React.lazy(() => import("./AboutMe"));

export { Home, Project, AboutMe };
