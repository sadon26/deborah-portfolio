import React, { useRef } from "react";
import { HomePageLayout } from "@/layouts";
import { DeborahAvatarBig } from "@/assets/svg";
import { slideInFromLeft, designStrategies } from "@/utils";
import { motion } from "framer-motion";
import Projects from "./Projects";
import { DesignStrategy } from "@/components";
import { useIntersectionObserver } from "../../hooks";
import LetsWorkTogether from "./LetsWorkTogether";
import { MyDesignFlair } from "./MyDesignFlair";
import MyMagicTools from "./MyMagicTools";

const Home = () => {
  const intersectionRefs = useRef([]);
  useIntersectionObserver({
    refs: intersectionRefs,
    aosClass: "slide-up",
    updateElement: ({ element, entry }) => {
      if (entry.intersectionRatio >= 0.05) {
        element.classList.add("slide-up-in");
        element.classList.remove("slide-up-out");
      } else {
        element.classList.add("slide-up-out");
        element.classList.remove("slide-up-in");
      }
    },
    options: {
      rootMargin: "20px",
      threshold: 0.05,
    },
  });

  return (
    <HomePageLayout>
      <>
        <div className="px-4 md:px-20 mt-8 md:mt-[192px]">
          <div className="flex flex-col gap-6 md:flex-row mt-16 md:mt-0 justify-between items-center">
            <div className="basis-[40%] flex items-center md:items-start flex-col gap-3 md:gap-5">
              <motion.h5
                className="text-[16px] md:text-[18px] text-secondary"
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.5,
                }}
                variants={slideInFromLeft}
              >
                Hello,
              </motion.h5>
              <motion.p
                className="text-header-two font-bold text-[24px] md:text-[40px]"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft}
                transition={{
                  delay: 0.6,
                }}
              >
                I'm Deborah
              </motion.p>
              <motion.p
                className="text-[14px] md:text-[18px] text-primary"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft}
                transition={{
                  delay: 0.7,
                }}
              >
                A user-centric Product Designer who is passionate about
                empowering people by giving them a seamless user experience as
                they interact with intuitive digital products I create. I have
                over 2 years of experience in UI/UX design for B2Bs and B2Cs
                across iOS, android and web experiences. I am a huge advocate of
                inclusive design.
              </motion.p>
            </div>
            <motion.div
              className="grow flex justify-end"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <img src={DeborahAvatarBig} alt="deborah-picture" />
            </motion.div>
          </div>

          <Projects />
        </div>

        <div
          ref={(el) => intersectionRefs.current.push(el)}
          className="bg-dark p-4 md:p-20"
        >
          <h6 className="text-[24px] md:text-[48px] text-white mb-8">
            My Design Strategy
          </h6>

          <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
            {designStrategies.map((strategy) => (
              <div
                key={strategy.step}
                className="col-span-4 sm:col-span-2 md:col-span-4"
              >
                <DesignStrategy strategy={strategy} />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-4 md:mx-20 md:my-[72px] my-12">
          <div ref={(el) => intersectionRefs.current.push(el)}>
            <LetsWorkTogether />
          </div>

          <div
            ref={(el) => intersectionRefs.current.push(el)}
            className="grid grid-cols-6 md:grid-cols-12 gap-4"
          >
            <div className="col-span-6">
              <MyDesignFlair />
            </div>
            <div className="col-span-6 p-4 md:px-6 md:py-[39.5px] rounded-[16px] border-[1px] border-gray-light flex items-center justify-between gap-4">
              <div>
                <h6 className="text-[18px] font-bold mb-2">About Deborah</h6>
                <p>Meet the creative mind behind the screen</p>
              </div>
              <div className="w-[100px] md:w-[140px] h-[100px] md:h-[140px]">
                <img
                  src={DeborahAvatarBig}
                  className="w-full h-full"
                  alt="avatar-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div ref={(el) => intersectionRefs.current.push(el)}>
          <MyMagicTools />
        </div>
      </>
    </HomePageLayout>
  );
};

export default Home;
