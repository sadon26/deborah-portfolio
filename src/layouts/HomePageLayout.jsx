import React from "react";
import { Header, Footer } from "@/components";
import classNames from "classnames";

const HomePageLayout = ({ children, theme, className }) => {
  return (
    <div
      className={classNames(
        "flex flex-col bg-yellow-layout-bg h-[100vh] overflow-y-scroll"
      )}
    >
      <Header theme={theme} />
      <div className={classNames("grow", [className])}>{children}</div>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
