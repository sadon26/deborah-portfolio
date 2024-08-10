import React from "react";
import {
  ClickUpImage,
  DiscordImage,
  FigmaImage,
  InvisionImage,
  MiroImage,
  ProtopieImage,
  SketchUpImage,
  SkypeImage,
  TeamsImage,
  ZeplinImage,
} from "../../assets/svg";

const magicTools = [
  {
    alt: "figma-image",
    icon: FigmaImage,
  },
  {
    alt: "miro-image",
    icon: MiroImage,
  },
  {
    alt: "clickup-image",
    icon: ClickUpImage,
  },
  {
    alt: "sketchup-image",
    icon: SketchUpImage,
  },
  {
    alt: "discord-image",
    icon: DiscordImage,
  },
  {
    alt: "teams-image",
    icon: TeamsImage,
  },
  {
    alt: "invision-image",
    icon: InvisionImage,
  },
  {
    alt: "protopie-image",
    icon: ProtopieImage,
  },
  {
    alt: "zeplin-image",
    icon: ZeplinImage,
  },
  {
    alt: "skype-image",
    icon: SkypeImage,
  },
];

const MyMagicTools = () => {
  return (
    <>
      <div className="mx-4 md:mx-20 md:my-[72px]">
        <h6 className="text-[24px] md:text-[56px] font-bold mb-4 md:mb-8">
          My Magic Tools
        </h6>
      </div>

      <div className="px-4 md:px-20 bg-dark-purple flex gap-x-10 md:justify-between overflow-x-scroll py-4 md:py-10">
        {magicTools.map(({ alt, icon }) => (
          <div key={alt} className="md:w-10 md:h-10 w-6 h-6 shrink-0">
            <img src={icon} alt={alt} className="w-full h-full" />
          </div>
        ))}
      </div>
    </>
  );
};

export default MyMagicTools;
