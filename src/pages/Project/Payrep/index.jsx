import React from "react";
import { motion } from "framer-motion";
import {
  PayrepLanding,
  PayrepLogo,
  Problem,
  Objective,
  Duration,
  Location,
  Role,
  Client,
  PayrepLogoWithText,
  PayrepPhoneMockup,
  PayrepPhoneMockupTwo,
} from "@/assets/svg";

const Payrep = () => {
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
      <div className="relative pt-[57px] md:pt-[89px]  h-full">
        <div className="px-4 md:px-20 pt-8 md:pt-[120px] flex justify-between flex-col md:flex-row gap-8 bg-header-two">
          <div className="md:pt-10 flex flex-col items-center md:items-start text-white">
            <div className="mb-3 md:mb-6 w-12 md:w-[61px]">
              <img src={PayrepLogo} className="w-full" alt="payrep-log" />
            </div>
            <h5 className="text-[16px] md:text-[24px] mb-2">Fintech</h5>
            <h6 className="text-[24px] md:text-[48px] font-bold mb-2 md:mb-6">
              PAYREP
            </h6>
            <p className="text-[14px] md:text-[18px] text-center md:text-left">
              An intuitive mobile app redesigned to satisfy user needs
            </p>
          </div>
          <div>
            <img src={PayrepLanding} alt="payrep-landing" />
          </div>
        </div>

        <div className="px-4 md:px-20 py-12 md:py-[124px]">
          <h5 className="text-[24px] md:text-[40px] font-bold mb-4 text-header-two">
            About PAYREP
          </h5>
          <p className="text-primary">
            Payrep is a product developed by Xchangebox Solutions designed to
            assist agents, merchants, and individuals utilizing the terminal
            (POS) in managing their wallets, transactions, and conducting
            various financial activities.
          </p>
          <br />
          <p className="text-primar mb-7 md:mb-6">
            With PayRep, users can enjoy hassle-free services such as easy
            withdrawals, quick transfers, seamless airtime top-ups, and even
            convenient electrical transactions.
          </p>

          <div className="grid grid-cols-12 md:gap-[124px] md:gap-x-8 gap-y-8">
            <div className="md:col-span-7 col-span-full flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="self-start w-8 h-8 shrink-0">
                  <img
                    src={Problem}
                    alt="problem-icon"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h5 className="font-bold md:text-[24px] text-[18px]">
                    THE PROBLEM
                  </h5>
                  <p>
                    Users frequently face the distressing scenario of being
                    stranded without access to immediate mechanic assistance
                    following vehicle breakdowns. This recurring problem not
                    only leads to frustration but also raises safety concerns.
                    Addressing this issue is paramount to improving the user
                    experience by ensuring swift and reliable roadside
                    assistance, thereby mitigating the anxiety experienced by
                    stranded individuals
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="self-start w-8 h-8 shrink-0">
                  <img
                    src={Objective}
                    alt="objective-icon"
                    className="w-full h-full"
                  />
                </div>

                <div>
                  <h5 className="font-bold md:text-[24px] text-[18px]">
                    OBJECTIVE
                  </h5>
                  <p>
                    To develop a comprehensive app tailored to the needs of car
                    owners, auto shops, and administrators, ensuring convenience
                    at every step. By seamlessly integrating features for
                    instant roadside assistance, efficient service management
                    for auto shops, and a user-friendly web design with mobile
                    responsiveness, we aim to revolutionize the automotive
                    industry's digital landscape. At the heart of our mission is
                    enhancing user experience, optimizing business operations,
                    and fostering a thriving automotive community, all while
                    ensuring car owners feel supported and empowered within
                    their comfort zones.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-full flex flex-col gap-6">
              <div className="flex gap-2">
                <div className="self-start w-8 h-8 shrink-0">
                  <img
                    src={Location}
                    alt="location-icon"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h5 className="font-bold">LOCATION</h5>
                  <p>Lagos, (Nigeria)</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="self-start w-8 h-8 shrink-0">
                  <img
                    src={Client}
                    alt="client-icon"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h5 className="font-bold">CLIENT</h5>
                  <p>Carmedis</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="self-start w-8 h-8 shrink-0">
                  <img src={Role} alt="role-icon" className="w-full h-full" />
                </div>
                <div>
                  <h5 className="font-bold">MY ROLE</h5>
                  <p>Product Designer</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="self-start w-8 h-8 shrink-0">
                  <img
                    src={Duration}
                    alt="client-icon"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h5 className="font-bold">DURATION</h5>
                  <p>April 2023 - Feb 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-header-two px-4 md:px-20 pt-4 pb-8 md:pb-[78px]">
          <div className="flex justify-end">
            <div className="mb-4 w-20 md:w-24">
              <img
                src={PayrepLogoWithText}
                className="w-full"
                alt="payrep-logo-with-text"
              />
            </div>
          </div>
          <div>
            <img src={PayrepPhoneMockup} alt="payrep-phone-mockup" />
          </div>
        </div>

        <div className="px-4 md:px-20 py-12 md:py-[124px]">
          <div className="flex  md:justify-end">
            <div
              style={{
                borderTopLeftRadius: "64px",
              }}
              className="w-full mb-2 md:mb-10 md:w-auto text-[18px] rounded-r-[100px] bg-header-two text-white pl-6 py-2 md:py-4 md:pr-[247px] font-bold md:text-[48px]"
            >
              Intended Outcome
            </div>
          </div>
          <div className="flex gap-12 flex-col md:flex-row items-center justify-end">
            <div className="hidden md:flex">
              <img src={PayrepPhoneMockupTwo} alt="payrep-mockup-two" />
            </div>
            <ul className="py-2 list-disc pl-4 text-primary flex flex-col gap-4 sm:w-[45%] md:w-[35%]">
              <li>Improved user experience</li>
              <li>Increased engagement and conversion rates</li>
              <li>Reduced support requests</li>
              <li>Enhanced brand perception</li>
              <li>Competitive advantage</li>
              <li>Data-driven insights</li>
              <li>Regulatory compliance</li>
              <li>
                <span className="font-bold">KPIs:</span> User retention rate,
                App store ratings and review Average session duration, Number of
                active users, Task completion rate
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Payrep;
