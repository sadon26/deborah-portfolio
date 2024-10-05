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
  PainPoints,
  PayrepPrevEight,
  PayrepPrevFive,
  PayrepPrevFour,
  PayrepPrevNine,
  PayrepPrevOne,
  PayrepPrevSeven,
  PayrepPrevSix,
  PayrepPrevTen,
  PayrepPrevThree,
  PayrepPrevTwo,
  CrownIcon,
} from "@/assets/svg";
import { designStrategies } from "@/utils";
import { DesignStrategy } from "@/components";
import { DeborahImage } from "../../../assets/img";

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
          <div className="flex md:justify-end">
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

        <div className="px-4 md:px-20 pb-12 md:pb-[124px]">
          <h3 className="text-header-two text-[24px] md:mb-6 mb-3 md:text-[40px]">
            Some Custmer Reviews (Before)
          </h3>

          <div className="flex flex-col gap-6">
            <div className="info-box info-box__primary">
              Payrep needs to go back to the drawing board. The functionality of
              the app is zero. A simple sign up to convert me from being an
              acquired user to an activated user was impossible. Inputed my kyc-
              NIN and that was it- error message, nothing else was workin
            </div>
            <div className="info-box info-box__orange">
              Please how can i speak with customers care, please the transaction
              I did was successful and the person didn't receive credit alert.
            </div>
            <div className="info-box info-box__success">
              your app is so frustrating how can I in one minute get otp to rest
              my app and once I do that I still can't get access to my dashboard
              how do you expect me to log in when it keep telling me wrong
              information yet it same information I have used in the last 2weeks
              pls fix this problem can't get number to reach you guys
            </div>
            <div className="info-box info-box__beige">
              You guys need to work on your app it gives somebody like me
              stress. The app is very poor 😢
            </div>
          </div>
        </div>

        <div className="px-4 md:px-20 pb-12 md:pb-[124px]">
          <h3 className="mb-4 text-heading font-bold text-[24px] md:text-[40px]">
            Previous UI
          </h3>
          <h5 className="text-secondary">
            Analysing the interface to pin-point the bad flow{" "}
          </h5>

          <ul className="py-2 list-disc pl-4 text-primary flex flex-col gap-2">
            <li>
              The designs didn&apos;t depict the companies brand in terms of
              colors
            </li>
            <li>The onboarding flow is scattered</li>
            <li>
              The app is not user friendly and the UI isn&apos;t appealing
            </li>
          </ul>
        </div>

        <div className="bg-[#0F1113] px-4 py-8 md:py-6 md:px-[70px]">
          <div className="flex justify-between gap-3 mb-6 md:mb-[18px]">
            <div>
              <img src={PayrepPrevOne} alt="payrep-prev-UI-1" />
            </div>
            <div>
              <img src={PayrepPrevTwo} alt="payrep-prev-UI-2" />
            </div>
            <div>
              <img src={PayrepPrevThree} alt="payrep-prev-UI-3" />
            </div>
            <div>
              <img src={PayrepPrevFour} alt="payrep-prev-UI-4" />
            </div>
            <div>
              <img src={PayrepPrevFive} alt="payrep-prev-UI-5" />
            </div>
          </div>
          <div className="flex justify-between gap-3 mb-4">
            <div>
              <img src={PayrepPrevSix} alt="payrep-prev-UI-6" />
            </div>
            <div>
              <img src={PayrepPrevSeven} alt="payrep-prev-UI-7" />
            </div>
            <div>
              <img src={PayrepPrevEight} alt="payrep-prev-UI-8" />
            </div>
            <div>
              <img src={PayrepPrevNine} alt="payrep-prev-UI-9" />
            </div>
            <div>
              <img src={PayrepPrevTen} alt="payrep-prev-UI-10" />
            </div>
          </div>
        </div>

        <div className="px-4 md:px-20 py-12 md:py-[124px]">
          <h3 className="mb-3 md:mb-10 text-heading font-bold text-[24px] md:text-[40px]">
            Key Pain Points
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:min-w-[300px]">
              <img src={PainPoints} alt="pain-points" />
            </div>
            <div className="order-[-1] md:order-1">
              <ul className="py-2 list-disc pl-4 text-primary flex flex-col gap-2">
                <li>
                  <span className="font-bold">Brand Color Consistency:</span>{" "}
                  Users feels disconnected or disoriented from the app's user
                  interface because it lacks the brand's color scheme.
                </li>
                <li>
                  <span className="font-bold">Poor Interaction Design:</span>{" "}
                  Bad interaction design can lead to frustration and confusion
                  for users.{" "}
                </li>
                <li>
                  <span className="font-bold">
                    Confusing Customer Support Communication:
                  </span>{" "}
                  Users have difficulty communicating with customer support
                  through the app which leads to frustration and
                  dissatisfaction.
                </li>
                <li>
                  <span className="font-bold">Recurring User Complaints:</span>{" "}
                  Users consistently complain about specific issues or encounter
                  the same problems repeatedly.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-dark p-4 md:p-20">
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

        <div className="px-4 md:px-20 py-12 md:py-[124px]">
          <div className="flex md:justify-start">
            <div
              style={{
                borderTopLeftRadius: "64px",
              }}
              className="w-full mb-2 md:mb-10 md:w-auto text-[18px] rounded-r-[100px] bg-header-two text-white pl-6 py-2 md:py-4 md:pr-[247px] font-bold md:text-[48px]"
            >
              How Might We?
            </div>
          </div>
          <ul className="py-2 list-disc pl-4 text-primary flex flex-col gap-2">
            <li>
              How might we ensure consistent use of brand colors throughout the
              app's interface to reinforce brand identity and improve user
              recognition?
            </li>
            <li>
              How might we redesign the app's interaction patterns to make
              navigation more intuitive and reduce user frustration?
            </li>
            <li>
              How might we streamline communication channels with customer
              support to make it easier for users to seek assistance and resolve
              issues?
            </li>
            <li>
              How might we identify and prioritize user-reported complaints to
              address recurring issues and improve overall user satisfaction?
            </li>
            <li>
              How might we integrate user feedback mechanisms into the app to
              continuously monitor and improve the user experience based on
              real-time user input?
            </li>
          </ul>
        </div>

        <div className="bg-dark py-8 px-[35px] md:px-[86px] md:py-[113px] flex flex-col md:flex-row items-center gap-8 md:gap-[172px]">
          <div className="flex flex-col text-white items-center">
            <h4 className="mb-4 md:mb-6 text-[18px] md:text-[24px]">
              Tired of Ugly UI?
            </h4>
            <div className="md:max-w-[300px] max-w-[88px]">
              <img src={CrownIcon} alt="crown-icon" className="w-full" />
            </div>
            <h5 className="text-[24px] md:text-[56px] mb-2 md:mb-6">
              KEEP CALM
            </h5>
            <p className="text-[16px] md:text-[24px] text-[#D5D7D9]">
              This is where Deborah shows her magic skills
            </p>
          </div>
          <div>
            <div className="bg-white rounded-[50%] overflow-hidden">
              <img src={DeborahImage} alt="deborah-image" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Payrep;
