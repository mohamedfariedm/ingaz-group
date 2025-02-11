"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThirdSection } from "./ThirdSection";

 function ButtonGrid() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Toggle between 5 and 12 items
  const images = [...Array(isExpanded ? 12 : 5)].map((_, index) => `/assets/images/layers/${index + 1}.svg`);

  return (
    <div className="main-container absolute bottom-[16px] flex w-full xl:w-[1360px] flex-col gap-[9px] items-center flex-nowrap  mx-auto my-0">
      {/* Small Rounded Box (Toggles Expansion) */}
      <div
        className="w-[62px] h-[32px] shrink-0 bg-[#202125] rounded-[16px] flex items-center justify-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img src="/assets/images/layers/arrow.svg" alt="Toggle Icon" className={isExpanded?"w-[24px] h-[24px] ":"w-[24px] h-[24px] rotate-180"} />
      </div>

      {/* Animated Button Grid Container */}
      <motion.div
        animate={{ height: !isExpanded ? "126px" : "278px" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full xl:w-[1230px] py-[33px] px-[40px] flex-col gap-[24px] items-center shrink-0 flex-nowrap rounded-[24px]  relative  bg-[#1e1e1e90]"
      >
        <div className="flex w-full xl:w-[1150px] gap-[16px] justify-center items-start shrink-0 flex-wrap relative ">
          <AnimatePresence>
            {images.map((src, index) => (
              <motion.span
              onClick={() => setPopupOpen(true)}
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

      <ThirdSection isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />

    </div>
  );
}

export default ButtonGrid;
