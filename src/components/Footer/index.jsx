import React from "react";
import {
  BehanceImage,
  Deborah,
  DribbleImage,
  LinkedInImage,
} from "../../assets/svg";

const Footer = () => {
  return (
    <div className="mx-4 md:mx-20 my-6 md:my-[35px] flex flex-col gap-3 md:flex-row items-center justify-between">
      <div className="h-6 md:h-8">
        <img src={Deborah} alt="deborah-logo" className="h-full" />
      </div>
      <p className="md:text-[18px]">
        Beautifully created by <span className="font-bold">Dayo Ashaolu</span>
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
    </div>
  );
};

export default Footer;
