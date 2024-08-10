import React from "react";
import { Header, Footer } from "@/components";

const HomePageLayout = ({ children }) => {
  return (
    <div className="flex flex-col bg-yellow-layout-bg h-[100vh] overflow-y-scroll">
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
