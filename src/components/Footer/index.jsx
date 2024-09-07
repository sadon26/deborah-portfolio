import React from "react";
import {
  BehanceImage,
  Deborah,
  DribbleImage,
  LinkedInImage,
} from "../../assets/svg";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "@/constants";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="px-4 md:px-20 py-6 md:py-[35px] flex flex-col gap-3 md:flex-row items-center justify-between bg-white z-[2] border-t-[1px]">
      <div
        className="h-6 md:h-8 cursor-pointer"
        onClick={() => navigate(HOME_ROUTE)}
      >
        <img src={Deborah} alt="deborah-logo" className="h-full" />
      </div>
      <p className="md:text-[18px]">
        Beautifully created by{" "}
        <a
          target="_blank"
          href="https://dayoashaolu.netlify.app"
          className="font-bold cursor-pointer"
        >
          Dayo Ashaolu
        </a>
      </p>
      <div className="flex items-center gap-4">
        <div className="md:w-10 w-6 md:h-10 h-6">
          <img
            src={LinkedInImage}
            className="w-full h-full"
            alt="linkedin-icon"
          />
        </div>
        <div className="md:w-10 w-6 md:h-10 h-6">
          <img
            src={DribbleImage}
            className="w-full h-full"
            alt="dribble-icon"
          />
        </div>
        <div className="md:w-10 w-6 md:h-10 h-6">
          <img
            src={BehanceImage}
            className="w-full h-full"
            alt="behance-icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
