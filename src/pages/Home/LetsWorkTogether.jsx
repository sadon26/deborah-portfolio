import React from "react";
import { Button } from "@/components";
import { WorkTogetherImage } from "../../assets/svg";
import { useNavigate } from "react-router-dom";
import { LETS_CHAT_ROUTE } from "@/constants";

const LetsWorkTogether = () => {
  const navigate = useNavigate();

  return (
    <div className="md:my-10 my-6 rounded-[32px] bg-[#E4E6E7] md:px-16 px-6 md:py-9 gap-8 py-7 flex justify-between items-center">
      <div className="flex flex-col gap-6">
        <h5 className="font-bold text-[24px] md:text-[38px] lg:text-[48px] leading-[24px] md:leading-[40px]">
          Interested in working <br /> together?
        </h5>
        <div>
          <Button
            className="whitespace-nowrap bg-button-trans"
            onClick={() => navigate(LETS_CHAT_ROUTE)}
          >
            Let's chat
          </Button>
        </div>
      </div>
      <div>
        <img src={WorkTogetherImage} alt="lets-work-together" />
      </div>
    </div>
  );
};

export default LetsWorkTogether;
