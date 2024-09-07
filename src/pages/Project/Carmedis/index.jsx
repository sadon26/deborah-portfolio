import React from "react";
import {
  CarmedisMain,
  CarmedisMainSm,
  CarmedisUIOne,
  CarmedisUITwo,
  CarmedisUserJourneyOne,
  CarmedisUserPersonaOne,
  CarmedisUserPersonaTwo,
  CarmedisUserJourneyTwo,
  CarmedisWireframe,
  CarmedisUserPersonaEight,
  CarmedisUserPersonaFive,
  CarmedisUserPersonaFour,
  CarmedisUserPersonaSeven,
  CarmedisUserPersonaSix,
  CarmedisUserPersonaThree,
  CarmedisWallet,
  ClearlineMore,
  PayrepMore,
  RightArrow,
  RightArrowBlue,
} from "@/assets/svg";
import { DesignStrategy } from "@/components";
import { designStrategies } from "@/utils";
import { AboutDeborah, MyDesignFlair } from "../../Home/MyDesignFlair";
import LetsWorkTogether from "../../Home/LetsWorkTogether";
import { motion } from "framer-motion";

const Carmedis = () => {
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
      <div className="px-4 md:px-20 relative pt-[57px] md:pt-[89px]  h-full">
        <div className="flex justify-center h-[600px] pt-[84px] pb-10 md:mb-[124px] px-4">
          <img
            className="md:flex hidden"
            src={CarmedisMain}
            alt="carmedis-main"
          />
          <img
            className="flex md:hidden"
            src={CarmedisMainSm}
            alt="carmedis-main"
          />
        </div>

        <div>
          <div className="mb-6">
            <h4 className="font-bold text-[24px] md:text-[40px] mb-4">
              About CARMEDIS
            </h4>
            <p>
              Carmedis is a futuristic technology platform that links car owners
              to car repairers.It serves as a mediator between car owners who
              need repair services and car repairers who provide such services.
              It is a platform typically offers a user-friendly interface that
              allows car owners to submit requests for repair services and
              allows repairers to access these requests and respond to them
              accordingly.
            </p>
          </div>

          <div className="grid grid-cols-12 md:gap-[124px] gap-8 pb-12 md:pb-[124px]">
            <div className="md:col-span-7 col-span-full flex flex-col gap-6">
              <div className="flex gap-2">
                <div className="self-start">{/* icon */}</div>
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
              <div className="flex gap-2">
                <div className="self-start">{/* icon */}</div>
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
              <div>
                <h5 className="font-bold">LOCATION</h5>
                <p>Lagos, (Nigeria)</p>
              </div>
              <div>
                <h5 className="font-bold">CLIENT</h5>
                <p>Carmedis</p>
              </div>
              <div>
                <h5 className="font-bold">MY ROLE</h5>
                <p>Product Designer</p>
              </div>
              <div>
                <h5 className="font-bold">DURATION</h5>
                <p>April 2023 - Feb 2024</p>
              </div>
            </div>
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
      <div className="px-4 md:px-20">
        <div className="flex justify-center md:py-[124px] py-12">
          <img src={CarmedisUIOne} alt="carmedis-ui-one" />
        </div>

        <div className="md:pb-[124px] pb-12">
          <div>
            <h5 className="text-secondary mb-1 text-[14px] md:text-[24px]">
              DISCOVERY/EMPHATIZE
            </h5>
            <h6 className="text-[24px] md:text-[40px] text-blue-100 mb-3 font-extrabold">
              User Research
            </h6>

            <p>
              The team conducted both quantitative and qualitative analyses to
              comprehensively grasp the users' needs. Our primary target
              audience comprises both young and elderly individuals who drive
              cars and require automobile care wherever they may be, as well as
              mechanics shops operating solely from physical locations. Car
              owners often find themselves stranded when their vehicles break
              down, while mechanic shops struggle to attract customers due to
              lack of visibility
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-center md:pb-[124px] pb-12">
            <img src={CarmedisUITwo} alt="carmedis-ui-two" />
          </div>
        </div>

        <div className="md:pb-[124px] pb-12">
          <h6 className="text-[24px] md:text-[40px] text-blue-100 mb-3 font-extrabold">
            Pain Points
          </h6>

          <ul className="list-disc flex flex-col gap-2">
            <li className="ml-4">
              <span className="font-bold">Stranded Without Assistance:</span>{" "}
              Car owners experience the frustration and inconvenience of being
              stranded when their vehicles break down, often without immediate
              access to reliable assistance.
            </li>
            <li className="ml-4">
              <span className="font-bold">
                Limited Accessibility to Services:
              </span>{" "}
              Car owners face challenges in accessing automotive services
              conveniently, particularly when they are in remote areas or
              outside of regular business hours.
            </li>
            <li className="ml-4">
              <span className="font-bold">
                Low Visibility and Customer Traffic:
              </span>{" "}
              Auto shops operating solely from physical locations struggle to
              attract customers due to limited visibility and competition from
              larger, more established businesses.
            </li>
            <li className="ml-4">
              <span className="font-bold">Difficulty in Building Trust:</span>{" "}
              Establishing trust and credibility with potential customers is
              challenging for auto shops that rely solely on physical
              storefronts, as customers may be hesitant to visit unfamiliar
              locations.
            </li>
          </ul>
        </div>

        <div className="md:pb-[124px] pb-12">
          <div className="mb-6">
            <h5 className="text-secondary mb-1 text-[14px] md:text-[24px]">
              USER JOURNEY
            </h5>
            <h6 className="text-[24px] md:text-[40px] text-blue-100 mb-3 font-extrabold">
              User Persona
            </h6>
          </div>

          <div className="md:pb-[124px] pb-12">
            <div className="w-full md:pb-[124px] pb-12">
              <img
                src={CarmedisUserPersonaOne}
                alt="carmedis-user-persona-one"
                className="w-full"
              />
            </div>
            <div className="w-full">
              <img
                src={CarmedisUserPersonaTwo}
                alt="carmedis-user-persona-two"
                className="w-full"
              />
            </div>
          </div>

          <div className="w-full md:pb-[124px] pb-12">
            <h6 className="text-[24px] md:text-[40px] text-blue-100 mb-3 md:mb-6 font-extrabold">
              User Journey
            </h6>

            <div className="w-full md:pb-[124px] pb-12">
              <img
                src={CarmedisUserJourneyOne}
                alt="carmedis-user-journey-one"
                className="w-full"
              />
            </div>
            <div className="w-full">
              <img
                src={CarmedisUserJourneyTwo}
                alt="carmedis-user-journey-two"
                className="w-full"
              />
            </div>
          </div>

          <div className="pb-12">
            <div className="mb-6">
              <h5 className="text-secondary mb-1 text-[14px] md:text-[24px]">
                DESIGN EXPLORATION
              </h5>
              <h6 className="text-[24px] md:text-[40px] text-blue-100 mb-3 font-extrabold">
                Ideation
              </h6>
            </div>
            <p>
              At the ideation stage, we developed designs to meet the needs of
              car owners and auto shops. Our solution includes a user-friendly
              mobile app for car owners, a robust web design for administrators,
              and ensures responsiveness across web and mobile platforms. Our
              goal is to ensure easy satisfaction for all users.
            </p>
          </div>

          <div>
            <div className="pb-6">
              <div className="mb-6">
                <h6 className="text-[24px] md:text-[40px] text-blue-100 mb-3 font-extrabold">
                  Low Fidelity Wireframes
                </h6>
              </div>
              <p>
                I iterated on the low-fidelity screens, refining them based on
                the concepts generated during our ideation phase. By carefully
                analyzing user feedback and incorporating key design principles,
                I aimed to create screens that not only meet but exceed user
                expectations. Through this iterative process, our goal was to
                craft intuitive and user-friendly interfaces that enhance the
                overall user experience and satisfaction.
              </p>
            </div>

            <div className="w-full md:pb-[124px] pb-12 md:px-[20%]">
              <img
                src={CarmedisWireframe}
                alt="carmedis-user-journey-one"
                className="w-full"
              />
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h6 className="text-[24px] md:text-[40px] text-blue-100 mb-3 font-extrabold">
                High Fidelity Prototypes
              </h6>
              <p>
                The high-fidelity screens epitomize a harmonious fusion of
                sophisticated design and intuitive functionality, meticulously
                tailored to deliver a seamless user experience. With a sleek and
                contemporary aesthetic, these screens captivate users from the
                outset, setting the stage for an immersive journey. Each element
                is meticulously crafted with accessibility at the forefront,
                ensuring effortless navigation and meaningful engagement for
                users of all abilities. Whether accessed via desktop or mobile
                devices, these screens offer an inviting interface that not only
                meets but exceeds user expectations, elevating the overall user
                experience.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h5 className="md:text-[24px] mb-4 text-[18px] text-blue-100 font-extrabold">
                CAR OWNERS (mobile)
              </h5>

              <div className="md:pb-[124px]">
                <h6 className="font-bold md:text-[20px]">Home Page</h6>
                <p className="mb-8 md:mb-6">
                  The home page offers users access to their profile,
                  notifications, and the ability to request car repair services.
                  They can view their request history and chat with auto shops.
                </p>
                <div className="w-full pb-12 md:px-[20%]">
                  <img
                    src={CarmedisUserPersonaThree}
                    alt="carmedis-user-persona-three"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="md:pb-[124px]">
                <h6 className="font-bold md:text-[20px]">Cases</h6>
                <p className="mb-8 md:mb-6">
                  Users have access to both completed and cancelled cases,
                  enabling them to view case details, initiate calls, and engage
                  in chat interactions. Additionally, users can review case
                  invoices and conveniently download them for reference.
                </p>
                <div className="w-full pb-12 md:px-[20%] sm:px-10">
                  <img
                    src={CarmedisUserPersonaFour}
                    alt="carmedis-user-persona-foufr"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="md:pb-[124px]">
                <h6 className="font-bold md:text-[20px]">Invoice</h6>
                <p className="mb-8 md:mb-6">
                  Users are granted access to their invoices to monitor their
                  status, whether accepted, paid, or pending. They can
                  conveniently view the invoice details and have the ability to
                  accept or review any invoices received. Furthermore, users are
                  empowered to initiate payments for their invoices directly
                  through the platform.
                </p>
                <div className="w-full pb-12 md:px-[20%] sm:px-10">
                  <img
                    src={CarmedisUserPersonaFive}
                    alt="carmedis-user-persona-five"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="md:pb-[124px]">
                <h6 className="font-bold md:text-[20px]">ScanPro</h6>
                <p className="mb-8 md:mb-6">
                  Users can access ScanPro directly from their profile page. The
                  ScanPro feature provides a comprehensive guide on its
                  functionalities and how it operates. Users have the option to
                  connect directly to ScanPro and make purchases directly from
                  its dedicated page. Additionally, the page offers the
                  convenience of wallet or bank payments, along with order
                  tracking capabilities for enhanced user experience.
                </p>
                <div className="w-full pb-12 md:px-[20%] sm:px-10">
                  <img
                    src={CarmedisUserPersonaSix}
                    alt="carmedis-user-persona-six"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h5 className="md:text-[24px] mb-4 text-[18px] text-blue-100 font-extrabold">
                AUTO-SHOP (mobile)
              </h5>

              <div className="md:pb-[124px]">
                <h6 className="font-bold md:text-[20px]">Home Page</h6>
                <p className="mb-8 md:mb-6">
                  Autoshops are provided with a concise overview encompassing
                  total cases, completed cases, as well as banners offering
                  discounts for customers and facilitating request submissions.
                  Furthermore, autoshops have visibility into ongoing cases for
                  streamlined management and efficient operations.
                </p>
                <div className="w-full pb-12 px-[30%] md:px-[40%]">
                  <img
                    src={CarmedisUserPersonaSeven}
                    alt="carmedis-user-persona-seven"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="md:pb-[124px]">
                <h6 className="font-bold md:text-[20px]">Request</h6>
                <p className="mb-8 md:mb-6">
                  Autoshops possess the capability to review requests initiated
                  by car owners and make informed decisions by either accepting
                  or declining them, while having the opportunity to provide
                  explanations for any rejections. Furthermore, autoshops can
                  access aggregated data regarding total pending requests and
                  meticulously analyze their request history to ensure thorough
                  oversight and facilitate decisive decision-making processes.
                </p>
                <div className="w-full pb-12 md:px-[30%] sm:px-10">
                  <img
                    src={CarmedisUserPersonaEight}
                    alt="carmedis-user-persona-eight"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h5 className="md:text-[24px] mb-4 text-[18px] text-blue-100 font-extrabold">
                AUTO-SHOP (web)
              </h5>

              <div className="md:pb-[124px]">
                <h6 className="font-bold md:text-[20px]">Wallet</h6>
                <p className="mb-8 md:mb-6">
                  Autoshops have access to their wallet and transaction history,
                  allowing them to monitor their financial activities. They can
                  initiate withdrawal requests from their wallet and track the
                  status of these requests. Autoshops also have the capability
                  to update their bank account information as needed for
                  seamless financial management.
                </p>
                <div className="w-full pb-12 md:px-[20%]">
                  <img
                    src={CarmedisWallet}
                    alt="carmedis-wallet"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 md:pb-[124px]">
            <h6 className="text-[24px] md:text-[40px] text-blue-100 mb-6 font-extrabold">
              See More Projects
            </h6>

            <div className="grid grid-cols-12 gap-9">
              <div className="col-span-full md:col-span-6 rounded-[16px] bg-yellow-light-100 bg-opacity-15 p-10 hover:scale-[0.95] transition-all">
                <div className="flex justify-center">
                  <img src={PayrepMore} alt="payrep-more" />
                </div>
                <div className="bg-header-two rounded-[8px] mt-4 p-4 text-white group cursor-pointer">
                  <div className="flex items-center gap-2">
                    <p className="text-yellow-light-200">Next Project</p>
                    <div className="left-0 relative group-hover:left-[10px] transition-all ease-out duration-500">
                      <img src={RightArrow} alt="right-arrow" />
                    </div>
                  </div>
                  <p className="font-semibold">PayRep- A financial app</p>
                </div>
              </div>
              <div className="col-span-full md:col-span-6 rounded-[16px] bg-blue-200 bg-opacity-15 p-10 hover:scale-[0.95] transition-all">
                <div className="flex justify-center">
                  <img src={ClearlineMore} alt="clearline-more" />
                </div>
                <div className="bg-header-two rounded-[8px] mt-4 p-4 text-white group cursor-pointer">
                  <div className="flex items-center gap-2">
                    <p className="text-blue-300">Previous Project</p>
                    <div className="left-0 relative group-hover:left-[10px] transition-all ease-out duration-500">
                      <img src={RightArrowBlue} alt="right-arrow" />
                    </div>
                  </div>
                  <p className="font-semibold">
                    Clearline- A health maintenance organization app
                  </p>
                </div>
              </div>
            </div>
          </div>

          <LetsWorkTogether />

          <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-6 col-span-full">
              <MyDesignFlair />
            </div>
            <div className="md:col-span-6 col-span-full">
              <AboutDeborah />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Carmedis;
