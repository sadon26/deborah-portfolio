import React, { useState, useEffect } from "react";
import { Deborah, HamburgerOpen } from "@/assets/svg";
import { motion } from "framer-motion";
import { Button } from "@/components";
import classNames from "classnames";

const links = [
  { label: "Projects" },
  { label: "About me" },
  { label: "Resume" },
  { label: "Let's chat" },
];

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [mobileNavOpen]);

  return (
    <motion.div
      className="fixed top-0 w-full z-[3] py-4 md:py-6 px-4 md:px-20 border-b-[1px] border-b-gray-light flex justify-between bg-yellow-light"
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.5,
      }}
    >
      <div className="h-6 md:h-8">
        <img src={Deborah} alt="deborah-logo" className="h-full" />
      </div>
      <div className="hidden md:flex items-center gap-6">
        {links.map(({ label }) => (
          <button
            key={label}
            className="text-[18px] hover:text-primary-base transition-all duration-300"
          >
            {label}
          </button>
        ))}
        <Button>Let's chat</Button>
      </div>
      <button
        className="md:hidden flex cursor-pointer"
        onClick={toggleMobileNav}
      >
        <img src={HamburgerOpen} alt="hamburger-open-icon" />
      </button>
      <motion.div
        initial={{
          width: "24px",
          height: "24px",
          x: 10,
          y: 10,
          top: "16px",
          right: "16px",
        }}
        animate={{
          width: !mobileNavOpen ? "0" : "1400px",
          height: !mobileNavOpen ? "0" : "1400px",
          x: 0,
          y: 0,
          top: !mobileNavOpen ? "23px" : "-90px",
          right: !mobileNavOpen ? "23px" : "-500px",
        }}
        transition={{
          duration: 0.6,
          delay: !mobileNavOpen ? 0.3 : "",
        }}
        className={classNames([
          mobileNavOpen ? "" : "pointer-events-none",
          "absolute bg-white backdrop-blur-md bg-white/30 rounded-[50%] md:hidden",
        ])}
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: mobileNavOpen ? 1 : 0,
        }}
        exit={{
          opacity: 0,
        }}
        className={classNames([
          mobileNavOpen ? "" : "pointer-events-none",
          "absolute top-[16px] right-[16px] cursor-pointer z-[5] font-bold md:hidden",
        ])}
        onClick={toggleMobileNav}
        transition={{
          delay: mobileNavOpen ? 0.5 : "",
        }}
      >
        Close
      </motion.div>
      <motion.div
        className={classNames([
          mobileNavOpen ? "" : "pointer-events-none",
          "absolute top-0 left-0 h-screen rounded-md w-[100%] md:hidden",
        ])}
        initial={{
          opacity: 0,
          top: 0,
        }}
        animate={{
          opacity: mobileNavOpen ? 1 : 0,
          top: mobileNavOpen ? 40 : 0,
        }}
        transition={{
          delay: mobileNavOpen ? 0.5 : "",
        }}
      >
        <div className="bg-white m-4 p-4">
          {links.map(({ label }, index) => (
            <div
              key={index}
              className={classNames(
                "py-3 cursor-pointer hover:text-blue-400 hover:font-bold transition-all",
                {
                  "border-b-[1px] border-neutral-100":
                    index + 1 !== links.length,
                }
              )}
            >
              {label}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
