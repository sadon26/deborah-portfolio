import React from "react";

const Home = React.lazy(() => import("./Home"));
const Project = React.lazy(() => import("./Project"));

export { Home, Project };
