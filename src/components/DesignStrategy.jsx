import React from "react";

const DesignStrategy = ({ strategy }) => {
  return (
    <div className="p-4 rounded-[16px] border min-h-[280px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 flex">
          <img
            src={strategy.icon}
            className="w-full h-full relative top-[3px]"
          />
        </div>
        <div
          style={{
            background: strategy.theme,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Step {strategy.step}
        </div>
      </div>

      <div>
        <h6 className="mb-2 text-[18px] font-bold text-white">
          {strategy.title}
        </h6>
        <p className="text-neutral-50">{strategy.description}</p>
      </div>
    </div>
  );
};

export default DesignStrategy;
