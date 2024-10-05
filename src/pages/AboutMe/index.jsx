import React from "react";
import { HomePageLayout } from "@/layouts";
import { DeborahAvatarBig } from "../../assets/svg";
import { motion } from "framer-motion";
import { MyDesignFlair } from "../Home/MyDesignFlair";
import MyMagicTools from "../Home/MyMagicTools";

const AboutMe = () => {
  return (
    <HomePageLayout className="bg-light-yellow-layout-bg important">
      <div className="pt-[57px] md:pt-[89px]">
        <div className="px-4 lg:px-20 lg:py-[64px] lg:mb-[88px] mb-6 flex flex-col lg:flex-row gap-10 justify-between items-center">
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              ease: "linear",
            }}
            className="mt-[56px] md:mt-0 px-20 md:px-0"
          >
            <img src={DeborahAvatarBig} alt="deborah-avatar" />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              ease: "linear",
            }}
            className="lg:w-[1px] w-full h-[1px] bg-[#BABDC0] lg:h-[500px]"
          ></motion.div>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              ease: "linear",
            }}
            className="lg:w-[50%] gradient-card lg:py-8 p-6 lg:px-12 rounded-[8px]"
          >
            <div className="mb-4">
              <h4 className="lg:text-[24px] font-bold mb-1 lg:mb-2">
                About Deborah
              </h4>
              <p className="text-secondary text-[18px]">Product designer</p>
            </div>

            <p className="text-primary">
              I am a seasoned product designer known for my unique blend of
              creativity and skill. With meticulous attention to detail, I
              create solutions that resonate with users, specializing in
              visually stunning interfaces for mobile applications and websites.
              <br />
              <br />
              With over a year of experience at Enyata, a prestigious software
              engineering company in Lagos, Nigeria, and another year with a
              prominent Fintech organization in Abuja, Nigeria, I have honed my
              craft. I led the transformation of outdated app designs into
              visually appealing, user-friendly interfaces, enhancing overall
              user experience.
              <br />
              <br />
              In my free time, I enjoy playing mobile games like Candy Crush and
              video games like Mortal Kombat with friends and family.
              <br />
              <br />
              Before transitioning into product design, I spent five years as a
              cash teller in the banking industry. Seeking greater challenges
              and opportunities, I pivoted to product design, where I thrive on
              tackling new challenges and continuously enhancing my skills.
              <br />
              <br />
              Based in Porto, Portugal, I am passionate about cinema,
              discovering new hangout spots, and cherishing quality time with
              friends.
            </p>
          </motion.div>
        </div>

        <div className="px-4 md:px-20">
          <MyDesignFlair />
        </div>

        <div className="my-12">
          <MyMagicTools />
        </div>
      </div>
    </HomePageLayout>
  );
};

export default AboutMe;
