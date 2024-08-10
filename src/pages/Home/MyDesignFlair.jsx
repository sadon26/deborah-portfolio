import React from "react";
import { TickImage } from "../../assets/svg";

const flairs = [
  "I prioritize empathy",
  "I embrace iterative design",
  "I excel in team collaboration",
  "I thrive on innovation",
];

export const MyDesignFlair = () => {
  return (
    <div className="p-6 rounded-[16px] border-[1px] border-gray-light">
      <h6 className="text-[18px] font-bold md:mb-4 mb-2">My Design Flair</h6>
      <div className="flex flex-col gap-4">
        {flairs.map((flair) => (
          <div key={flair} className="flex items-center gap-1">
            <div>
              <img src={TickImage} alt="tick-svg" />
            </div>
            <span>{flair}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
