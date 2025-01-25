import React from "react";
import {
  CarmedisImage,
  ClearlineImage,
  FaiaBravaImage,
  PayrepImage,
} from "../../assets/svg";
import Project from "./Project";
import { PROJECT_ROUTE } from "@/constants";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();

  if (location.hash) {
    setTimeout(() => {
      document
        ?.getElementById(location.hash.slice(1))
        .scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }

  const projects = {
    featuredProjects: {
      title: "The good stuff",
      description: "Featured Projects",
      projects: [
        {
          title: "CARMEDIS",
          description: `Carmedis is a platform that collaborates with company-owned and carefully vetted partner workshops to deliver high-quality, affordable auto care on a large scale in realtime.`,
          wrapperClassName:
            "bg-[#D7DFE1] border-[1px] border-transparent hover:border-[#0E4BA3] flex flex-col md:flex-row justify-between gap-4 md:gap-10 rounded-[24px] p-6 md:p-16 items-center",
          imageClassName: "basis-[55%] shrink-0",
          textClassName: "flex flex-col gap-1 md:gap-4",
          src: CarmedisImage,
          buttonClassName:
            "border-[#0E4BA3] !text-[#0E4BA3] hover:!text-white hover:bg-[#0E4BA3] bg-transparent",
          to: PROJECT_ROUTE("carmedis"),
        },
        {
          title: "PAYREP",
          description: `An intuitive mobile app redesigned to satisfy user needs.`,
          wrapperClassName:
            "bg-[#FBF1CE] border-[1px] border-transparent hover:border-[#FEB800] flex flex-col md:flex-row justify-between gap-4 md:gap-10 rounded-[24px] p-6 md:p-16 items-center",
          imageClassName: "basis-[55%] shrink-0",
          textClassName: "flex flex-col gap-1 md:gap-4 w-full",
          src: PayrepImage,
          buttonClassName:
            "border-yellow-light-100 !text-[#000] hover:!text-yellow-light-100 hover:bg-[#14181A] bg-transparent hover:border-heading",
          to: PROJECT_ROUTE("payrep"),
        },
        {
          title: "CLEARLINE",
          description: `Clearline International Limited (HMO) is a limited liability company, incorporated in January 1994 and duly registered with National Health Insurance Scheme (NHIS) to underwrite health insurance in Nigeria.`,
          wrapperClassName:
            "bg-[#D7EBF5] border-[1px] border-transparent hover:border-[#018BE9] flex flex-col md:flex-row justify-between gap-4 md:gap-10 rounded-[24px] p-6 md:p-16 items-center",
          imageClassName: "basis-[55%] shrink-0 md:order-[-1]",
          textClassName: "flex flex-col gap-1 md:gap-4",
          src: ClearlineImage,
          buttonClassName:
            "border-[#018BE9] !text-[#018BE9] hover:!text-white hover:bg-[#018BE9] bg-transparent",
          to: PROJECT_ROUTE("clearline"),
        },
      ],
    },
    ongoingProjects: {
      title: "Other good stuff",
      description: "Ongoing Projects",
      projects: [
        {
          title: "FAIA BRAVA",
          description: `Faia Brava is a Non-Governmental Environmental Organization (NGO) known for being the first to establish Private Protected Areas in Portugal, creating safe havens for nature. Their focus is on sustainability and caring for the land. `,
          wrapperClassName:
            "bg-[#E7ECE1] border-[1px] border-transparent hover:border-[#618138] flex flex-col md:flex-row justify-between gap-4 md:gap-10 rounded-[24px] p-6 md:p-16 items-center",
          imageClassName: "basis-[55%] shrink-0",
          textClassName: "flex flex-col gap-1 md:gap-4",
          src: FaiaBravaImage,
          buttonClassName:
            "border-[#618138] !text-[#618138] hover:!text-white hover:bg-[#618138] bg-transparent",
          buttonText: "Coming Soon",
        },
      ],
    },
  };

  return (
    <>
      {Object.entries(projects).map(([key, project]) => (
        <div key={key} className="my-12 md:my-[124px]" id="projects">
          <Project {...project} />
        </div>
      ))}
    </>
  );
};

export default Projects;
