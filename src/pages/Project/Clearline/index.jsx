import React from "react";
import { motion } from "framer-motion";
import {
  ClearlineIcon,
  Client,
  Duration,
  Location,
  Objective,
  Problem,
  Role,
  ClearlineUserPersona,
  ClearlineUserResearch,
  ClearlineWireframe,
  ClearlineHighFidelity,
  ClearlineProvider,
  ClearlineAdmin,
  ClearlineEnrolee,
  CarmedisMore,
  PayrepMore,
  RightArrow,
  RightArrowBlue,
} from "@/assets/svg";
import { ClearlineLanding } from "@/assets/img";
import { designStrategies } from "@/utils";
import { DesignStrategy } from "@/components";
import LetsWorkTogether from "../../Home/LetsWorkTogether";
import { MyDesignFlair, AboutDeborah } from "../../Home/MyDesignFlair";
import { useNavigate } from "react-router-dom";

const Clearline = () => {
  const navigate = useNavigate();

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

          <div className="grid grid-cols-12 md:gap-[124px] md:gap-x-8 gap-y-8 pb-12 md:pb-[124px]">
            <div className="md:col-span-7 col-span-full flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="self-start shrink-0 w-8 h-8">
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
                    Faces challenges in managing data efficiently, automating
                    payment processes, and maintaining effective training
                    programs for its staff. The current systems in place are not
                    fully equipped to handle the evolving needs of their diverse
                    customer base, which includes individuals, families, groups,
                    companies, and the public sector. This inefficiency can lead
                    to slower service delivery, higher operational costs, and
                    lower customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="self-start shrink-0 w-8 h-8">
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
                    To transition into a tech-enabled institution to address
                    these challenges. This involves improving data management
                    processes, automating payments, enhancing training programs,
                    boosting customer success and service, and optimizing
                    overall operational efficiency. By leveraging advanced
                    technology, Clearline aims to deliver seamless, efficient,
                    and intuitive healthcare services to their diverse customer
                    base.
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
                  <p>Clearline</p>
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
                  <p>July 2023 - Feb 2024</p>
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

        <div className="px-4 md:px-20 md:pt-[124px] pt-12 pb-12 md:pb-[124px]">
          <h3 className="mb-3 md:mb-6 text-heading font-bold text-[24px] md:text-[40px]">
            User Research
          </h3>
          <p>
            To effectively transition into a tech-enabled institution, Clearline
            conducted comprehensive user research to understand the needs and
            pain points of its diverse customer base, which includes
            individuals, families, groups, companies, and the public sector.
          </p>

          <div className="flex justify-center md:pt-[56px] pt-8">
            <img
              src={ClearlineUserResearch}
              loading="lazy"
              alt="clearline-user-research"
            />
          </div>
        </div>

        <div className="px-4 md:px-20 pb-12 md:pb-[124px]">
          <h3 className="md:mb-6 mb-3 text-heading font-bold text-[24px] md:text-[40px]">
            Pain Points
          </h3>
          <div className="grid grid-cols-12 gap-6">
            <div className="md:col-span-4 col-span-full bg-[#EFF0F0] p-4 rounded-[8px]">
              <h5 className="text-heading mb-2 text-[16px] font-bold">
                Navigational Challenges
              </h5>
              <p>
                Difficulty navigating the current system to find information and
                services
              </p>
            </div>
            <div className="md:col-span-4 col-span-full bg-[#EFF0F0] p-4 rounded-[8px]">
              <h5 className="text-heading mb-2 text-[16px] font-bold">
                Slow Claim Processing
              </h5>
              <p>
                Delays in processing claims and payments, leading to
                frustration.
              </p>
            </div>
            <div className="md:col-span-4 col-span-full bg-[#EFF0F0] p-4 rounded-[8px]">
              <h5 className="text-heading mb-2 text-[16px] font-bold">
                Complicated Administrative Processes
              </h5>
              <p>
                Complex and time-consuming processes for managing employee
                benefits.
              </p>
            </div>
            <div className="md:col-span-4 col-span-full bg-[#EFF0F0] p-4 rounded-[8px]">
              <h5 className="text-heading mb-2 text-[16px] font-bold">
                High Manual Workload
              </h5>
              <p>
                Excessive manual processes leading to increased workload and
                potential errors.
              </p>
            </div>
            <div className="md:col-span-4 col-span-full bg-[#EFF0F0] p-4 rounded-[8px]">
              <h5 className="text-heading mb-2 text-[16px] font-bold">
                Billing Delays
              </h5>
              <p>
                Delays in payment processing from Clearline, affecting cash flow
                and operations.
              </p>
            </div>
            <div className="md:col-span-4 col-span-full bg-[#EFF0F0] p-4 rounded-[8px]">
              <h5 className="text-heading mb-2 text-[16px] font-bold">
                Communication Gaps
              </h5>
              <p>
                Lack of efficient communication channels with Clearline for
                resolving issues.
              </p>
            </div>
            <div className="md:col-span-4 col-span-full bg-[#EFF0F0] p-4 rounded-[8px]">
              <h5 className="text-heading mb-2 text-[16px] font-bold">
                Lack of Real-Time Data Access
              </h5>
              <p>
                Inability to access real-time data, affecting decision-making
                and efficiency.
              </p>
            </div>
            <div className="md:col-span-4 col-span-full bg-[#EFF0F0] p-4 rounded-[8px]">
              <h5 className="text-heading mb-2 text-[16px] font-bold">
                Poor Management Tools
              </h5>
              <p>
                Inadequate tools for tracking and managing corporate healthcare
                plans.
              </p>
            </div>
            <div className="md:col-span-4 col-span-full bg-[#EFF0F0] p-4 rounded-[8px]">
              <h5 className="text-heading mb-2 text-[16px] font-bold">
                Slow Response Times
              </h5>
              <p>
                Inability to respond quickly to customer inquiries due to
                inefficient systems.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-20 pb-12 md:pb-[124px]">
          <h3 className="md:mb-6 mb-3 text-heading font-bold text-[24px] md:text-[40px]">
            User Persona
          </h3>
          <div className="flex justify-center w-full">
            <img
              src={ClearlineUserPersona}
              loading="lazy"
              className="w-full"
              alt="clearline-user-persona"
            />
          </div>
        </div>

        <div className="px-4 md:px-20 pb-12">
          <h3 className="md:mb-6 mb-3 text-heading font-bold text-[24px] md:text-[40px]">
            Ideation
          </h3>
          <p>
            Transforming Clearline into a tech-enabled health insurance company
            to streamline data management, automate payments, enhance training
            programs, improve customer service, and optimize operational
            efficiency. This transformation aims to improve Clearline's
            competitive edge, ensure regulatory compliance, foster innovation,
            and enhance the overall customer experience by leveraging advanced
            technology and data analytics.
          </p>
        </div>

        <div className="px-4 md:px-20 pb-12 md:pb-[124px]">
          <h3 className="md:mb-6 mb-3 text-heading font-bold text-[24px] md:text-[40px]">
            Low Fidelity Wireframes
          </h3>
          <p className="md:mb-[56px] mb-8">
            Initial low-fidelity wireframe for Clearline, illustrating the
            foundational layout and primary features. This prototype focuses on
            user-friendly navigation, efficient access to healthcare plan
            details, and seamless interaction to enhance the user experience.
          </p>
          <div className="flex justify-center w-full">
            <img
              src={ClearlineWireframe}
              loading="lazy"
              className="w-full"
              alt="clearline-user-persona"
            />
          </div>
        </div>

        <div className="px-4 md:px-20 pb-8">
          <h3 className="md:mb-6 mb-3 text-heading font-bold text-[24px] md:text-[40px]">
            High Fidelity Prototypes
          </h3>
          <p>
            High-fidelity wireframe for Clearline, showcasing the detailed
            design and refined features. This prototype emphasizes an intuitive
            user interface, comprehensive access to healthcare plan information,
            and optimized functionality for an enhanced user experience.
          </p>
        </div>

        <div className="px-4 md:px-20 pb-12 md:pb-[124px]">
          <h5 className="md:mb-6 mb-3 text-heading font-bold md:text-[24px] text-[18px]">
            Clients{" "}
            <span className="text-secondary font-normal md:text-[20px] text-[14px]">
              (Documents)
            </span>
          </h5>
          <p className="md:mb-[56px] mb-8">
            The client interface includes a dashboard, payments, documents,
            employees, and account settings. The documents section displays
            total documents, signed documents, pending documents, and returned
            documents, along with a summary of recent documents. It also
            features search, filter, and download options for efficient document
            management.
          </p>
          <div className="flex justify-center w-full">
            <img
              src={ClearlineHighFidelity}
              loading="lazy"
              className="w-full"
              alt="clearline-user-persona"
            />
          </div>
        </div>

        <div className="px-4 md:px-20 pb-12 md:pb-[124px]">
          <h5 className="md:mb-6 mb-3 text-heading font-bold md:text-[24px] text-[18px]">
            Provider{" "}
            <span className="text-secondary font-normal md:text-[20px] text-[14px]">
              (Treatment)
            </span>
          </h5>
          <p className="md:mb-[56px] mb-8">
            The provider interface includes a dashboard, documents, treatments,
            claims, and quick actions. The treatments section features recent
            treatment histories, total treatment counts, client personal
            details, and authorizations with their totals. Providers can search
            for treatments, apply filters, and add new treatments seamlessly.
          </p>
          <div className="flex justify-center w-full">
            <img
              src={ClearlineProvider}
              loading="lazy"
              className="w-full"
              alt="clearline-user-persona"
            />
          </div>
        </div>

        <div className="px-4 md:px-20 pb-12 md:pb-[124px]">
          <h5 className="md:mb-6 mb-3 text-heading font-bold md:text-[24px] text-[18px]">
            Admin{" "}
            <span className="text-secondary font-normal md:text-[20px] text-[14px]">
              (Plans &amp; Packages)
            </span>
          </h5>
          <p className="md:mb-[56px] mb-8">
            The admin interface includes a feature to edit client plans,
            allowing modifications to pricing, details, and all health packages.
            This ensures flexibility and accuracy in managing client-specific
            healthcare plans.
          </p>
          <div className="flex justify-center w-full">
            <img
              src={ClearlineAdmin}
              loading="lazy"
              className="w-full"
              alt="clearline-user-persona"
            />
          </div>
        </div>

        <div className="px-4 md:px-20 pb-12 md:pb-[124px]">
          <h5 className="md:mb-6 mb-3 text-heading font-bold md:text-[24px] text-[18px]">
            Enrolee{" "}
            <span className="text-secondary font-normal md:text-[20px] text-[14px]">
              (Mobile)
            </span>
          </h5>
          <p className="md:mb-[56px] mb-8">
            Users can access health blogs and search for their health benefits
            effortlessly. This design ensures a user-friendly experience, making
            healthcare information and resources more accessible than ever.
          </p>
          <div className="flex justify-center w-full">
            <img
              src={ClearlineEnrolee}
              loading="lazy"
              className="md:w-1/2"
              alt="clearline-user-persona"
            />
          </div>
        </div>

        <div className="px-4 md:px-20">
          <div className="mb-12 md:pb-[124px]">
            <h6 className="text-[24px] md:text-[40px] text-blue-100 mb-6 font-extrabold">
              See More Projects
            </h6>

            <div className="grid grid-cols-12 md:gap-9 gap-6">
              <div
                className="col-span-full md:col-span-6 rounded-[16px] bg-[#0E4BA326] bg-opacity-15 p-4 md:p-10 hover:scale-[0.95] transition-all"
                onClick={() => navigate("/projects/carmedis")}
              >
                <div className="flex justify-center">
                  <img src={CarmedisMore} alt="carmedis-more" />
                </div>
                <div className="bg-header-two rounded-[8px] mt-4 p-4 text-white group cursor-pointer">
                  <div className="flex items-center gap-2">
                    <p className="text-blue-300">Previous Project</p>
                    <div className="left-0 relative group-hover:left-[10px] transition-all ease-out duration-500">
                      <img src={RightArrowBlue} alt="right-arrow" />
                    </div>
                  </div>
                  <p className="font-semibold">
                    Carmedis- A car owner and auto-shop app
                  </p>
                </div>
              </div>
              <div
                className="col-span-full md:col-span-6 rounded-[16px] bg-yellow-light-100 bg-opacity-15 p-4 md:p-10 hover:scale-[0.95] transition-all"
                onClick={() => navigate("/projects/payrep")}
              >
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
                  <p className="font-semibold">PayRep - A financial app</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-20">
          <LetsWorkTogether />

          <div className="grid grid-cols-12 gap-4 md:mb-[72px] mb-4">
            <div className="md:col-span-6 col-span-full">
              <MyDesignFlair />
            </div>
            <div className="md:col-span-6 col-span-full">
              <AboutDeborah />
            </div>
          </div>
        </div>
      </>
    </motion.div>
  );
};

export default Clearline;
