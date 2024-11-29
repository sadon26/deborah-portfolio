import React from "react";
import { motion } from "framer-motion";
import { ClearlineIcon } from "@/assets/svg";
import { ClearlineLanding } from "@/assets/img";

const Clearline = () => {
  return (
    <motion.div
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
      <>
        <div className="px-4 md:px-20 relative pt-[7px] md:pt-[89px] mb-12 md:mb-[108px] h-full">
          <div className="flex flex-col gap-4 md:gap-6 mt-20 mx-auto items-center mb-10">
            <div className="w-12 md:w-20">
              <img
                src={ClearlineIcon}
                alt="clearline-icon"
                className="w-full"
              />
            </div>
            <div className="text-center">
              <h4 className="text-bold text-[24px] md:text-[48px] mb-2">
                Clearline
              </h4>
              <h5 className="text-primary md:text-[24px]">
                A Health Maintenance Organization Web and Mobile Application
              </h5>
            </div>
          </div>

          <div>
            <img
              src={ClearlineLanding}
              alt="clearline-landing"
              className="w-full"
            />
          </div>
        </div>

        <div className="px-4 md:px-20">
          <h4 className="text-[24px] md:text-[32px] font-bold mb-3 md:mb-4">
            About CLEARLINE
          </h4>
          <p className="mb-8 md:mb-6">
            Clearline, a 30-year-old health insurance company, is transitioning
            into a tech-enabled institution to streamline data management,
            automate payments, enhance training programs, improve customer
            service, and optimize operational efficiency. Offering comprehensive
            healthcare plans for individuals, families, groups, companies, and
            the public sector, Clearline ensures seamless access to primary,
            secondary, and tertiary medical care. The transformation includes
            building applications for the Admin Web, Enrollee/Patient Mobile,
            Provider (Hospital) Web, and Client (Corporate) Customer Web.
          </p>
        </div>
      </>
    </motion.div>
  );
};

export default Clearline;
