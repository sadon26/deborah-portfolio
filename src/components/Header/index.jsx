import React from "react";
import { Deborah } from "@/assets/svg";
import { motion } from "framer-motion";
import { Button } from "@/components";

const Header = () => {
  const links = [
    { label: "Projects" },
    { label: "About me" },
    { label: "Resume" },
  ];

  return (
    <motion.div
      className="py-4 md:py-6 px-4 md:px-20 border-b-[1px] border-b-gray-light flex justify-between bg-yellow-light"
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
    </motion.div>
  );
};

export default Header;
