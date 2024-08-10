import { Suspense, useEffect } from "react";
import Router from "./routes";
import { AppIcon } from "@/assets/svg";
import { motion } from "framer-motion";

function App() {
  return (
    <Suspense
      fallback={
        <motion.div
          className="flex justify-center items-center w-full h-[100vh]"
          initial={{
            rotate: 0,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-[80px] h-[80px]">
            <img src={AppIcon} alt="app-icon" className="w-full h-full" />
          </div>
        </motion.div>
      }
    >
      <Router />
    </Suspense>
  );
}

export default App;
