import React from "react";
import { Button } from "@/components";
import { WorkTogetherImage } from "../../assets/svg";

const LetsWorkTogether = () => {
  return (
    <div className="md:my-10 my-6 rounded-[32px] bg-neutral-50 md:px-16 px-6 md:py-9 gap-8 py-7 flex justify-between items-center">
      <div className="flex flex-col gap-6">
        <h5 className="font-bold text-[24px] md:text-[38px] lg:text-[48px] leading-[20px] md:leading-[40px]">
          Interested in working <br /> together?
        </h5>
        <div>
          <Button className="whitespace-nowrap">Let's chat</Button>
        </div>
      </div>
      <div>
        <img src={WorkTogetherImage} alt="lets-work-together" />
      </div>
    </div>
  );
};

export default LetsWorkTogether;
