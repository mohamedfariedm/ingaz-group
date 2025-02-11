"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

 function ButtonGrid() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle between 5 and 12 items
  const images = [...Array(isExpanded ? 12 : 5)].map(() => "https://placehold.co/153x43");

  return (
    <div className="main-container flex w-[1360px] flex-col gap-[9px] items-center flex-nowrap relative mx-auto my-0">
      {/* Small Rounded Box (Toggles Expansion) */}
      <div
        className="w-[62px] h-[32px] shrink-0 bg-[#202125] rounded-[16px] flex items-center justify-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img src="https://placehold.co/24x24" alt="Toggle Icon" className="w-[24px] h-[24px]" />
      </div>

      {/* Animated Button Grid Container */}
      <motion.div
        animate={{ height: !isExpanded ? "126px" : "278px" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-[1230px] py-[33px] px-[40px] flex-col gap-[24px] items-center shrink-0 flex-nowrap rounded-[24px] opacity-70 relative  bg-[#1e1e1e]"
      >
        <div className="flex w-[1150px] gap-[16px] justify-center items-start shrink-0 flex-wrap relative ">
          <AnimatePresence>
            {images.map((src, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.3}}
                className="flex w-[217px] h-[60px] px-4 gap-2 justify-center items-center bg-[#3f3f3f] rounded-lg border-none transition hover:bg-[#555] focus:ring-2 focus:ring-white"
              >
                <img src={src} alt="Placeholder Image" className="w-[153px] h-[43px]" />
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default ButtonGrid;
