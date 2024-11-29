import React, { useState, useEffect } from "react";
import { Deborah, HamburgerOpen } from "@/assets/svg";
import { motion } from "framer-motion";
import { Button } from "@/components";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE, ABOUT_ME_ROUTE, LETS_CHAT_ROUTE } from "@/constants";

const links = [
  { label: "Projects", to: `${HOME_ROUTE}#projects` },
  { label: "About me", to: ABOUT_ME_ROUTE },
  {
    label: "Resume",
    href: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:6a939e6f-6afa-4e1b-9457-d5b82baee0bd",
    extras: {
      target: "_blank",
    },
  },
  { label: "Let's chat", to: LETS_CHAT_ROUTE },
];

const Header = ({ theme }) => {
  const navigate = useNavigate();

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
    <motion.header
      className={classNames(
        "fixed top-0 w-full z-[3] py-4 md:py-6 px-4 md:px-20 border-b-[1px] border-b-gray-light flex justify-between bg-yellow-light",
        [theme]
      )}
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.5,
      }}
    >
      <div
        className="h-6 md:h-8 cursor-pointer"
        onClick={() => navigate(HOME_ROUTE)}
      >
        <img src={Deborah} alt="deborah-logo" className="h-full" />
      </div>
      <div className="hidden md:flex items-center gap-6">
        {links.map(({ label, to, href, extras }) =>
          href ? (
            <a
              key={label}
              href={`${href}`}
              className={classNames(
                "text-[18px] hover:text-primary-base transition-all duration-300 inline-block",
                {
                  "md:hidden": label === "Let's chat",
                }
              )}
              {...(extras ?? {})}
            >
              {label}
            </a>
          ) : (
            <button
              key={label}
              className={classNames(
                "text-[18px] hover:text-primary-base transition-all duration-300 inline-block",
                {
                  "md:hidden": label === "Let's chat",
                }
              )}
              onClick={() => navigate(to)}
            >
              {label}
            </button>
          )
        )}
        <Button
          className="hidden md:inline-block"
          onClick={() => navigate(LETS_CHAT_ROUTE)}
        >
          Let's chat
        </Button>
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
          {links.map(({ label, to }, index) => (
            <button
              key={index}
              className={classNames(
                "py-3 cursor-pointer hover:text-blue-400 hover:font-bold transition-all w-full block",
                {
                  "border-b-[1px] border-neutral-100":
                    index + 1 !== links.length,
                }
              )}
              onClick={() => navigate(to)}
            >
              {label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
