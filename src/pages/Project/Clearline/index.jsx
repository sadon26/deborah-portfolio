import React from "react";
import { motion } from "framer-motion";

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
      <div className="relative pt-[57px] md:pt-[89px] h-full">sdasd</div>
    </motion.div>
  );
};

export default Clearline;
