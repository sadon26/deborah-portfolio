import classNames from "classnames";
import React, { useRef } from "react";
import { Button } from "@/components";
import { useIntersectionObserver } from "@/hooks";

const Project = ({ projects, title, description }) => {
  const intersectionRefs = useRef([]);

  useIntersectionObserver({
    refs: intersectionRefs,
    aosClass: "slide-up",
    updateElement: ({ element, entry }) => {
      if (entry.intersectionRatio >= 0.15) {
        element.classList.add("slide-up-in");
        element.classList.remove("slide-up-out");
      } else {
        element.classList.add("slide-up-out");
        element.classList.remove("slide-up-in");
      }
    },
    options: {
      rootMargin: "20px",
      threshold: 0.15,
    },
  });

  return (
    <>
      <div
        ref={(el) => intersectionRefs.current.push(el)}
        className="flex flex-col gap-1 md:gap-4 justify-center sticky top-12 md:top-20 items-center mb-8 p-4"
      >
        <h5 className="text-secondary text-[14px] md:text-[24px]">{title}</h5>
        <p className="text-heading text-[24px] md:text-[48px]">{description}</p>
      </div>

      <div className="flex flex-col gap-12 md:gap-[124px]">
        {projects.map(
          (
            {
              wrapperClassName,
              textClassName,
              imageClassName,
              src,
              title,
              description,
              buttonText = "View Case Study",
              buttonClassName,
            },
            index
          ) => (
            <div
              key={index}
              ref={(el) => intersectionRefs.current.push(el)}
              className={classNames(
                "rounded-[20px] sticky top-[140px] md:top-48 min-h-[500px] md:min-h-[600px]",
                wrapperClassName
              )}
            >
              <div className={classNames("rounded-[20px]", textClassName)}>
                <h6 className="text-heading text-[18px] md:text-[24px] font-bold">
                  {title}
                </h6>
                <p className="text-[14px] md:text-[16px]">{description}</p>
                <div className="hidden md:flex">
                  <Button
                    className={classNames(
                      "rounded-[100px] bg-transparent border py-1 px-3",
                      buttonClassName
                    )}
                  >
                    {buttonText}
                  </Button>
                </div>
              </div>
              <div className={classNames("rounded-[20px]", imageClassName)}>
                <img src={src} />
                <div className="md:hidden block">
                  <Button
                    className={classNames(
                      "rounded-[100px] bg-transparent border py-1 px-3 w-full mt-8",
                      buttonClassName
                    )}
                  >
                    {buttonText}
                  </Button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Project;
