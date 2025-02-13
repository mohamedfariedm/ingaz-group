"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface PopupProps {
  isOpen: boolean;
  data: any;
  onClose: () => void;
}

const ThirdSectionComponent: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  console.log(data);
let {t}=useTranslation("homepage")
 // Handle body scroll lock when the popup is open
 useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = ""; // Cleanup on unmount
  };
}, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 "
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          onClick={onClose} // Close on background click
        >
          <motion.div
            className="w-full max-w-[1440px] h-[100vh] bg-[#191919] rounded-t-3xl p-6 overflow-y-auto no-scrollbar overflow-x-hidden relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
          >
            <div className="main-container w-full max-w-[1360px] h-[80px] relative mx-auto my-0 flex items-center justify-between px-4 lg:px-0">
              {/* Logo - Stays Centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 hidden md:flex justify-center items-center h-[80px]">
                <img
                  src={data.image}
                  alt="Logo"
                  className="h-[80px] max-w-[316px] object-contain"
                />
              </div>

              {/* Visit Website Button - Left Aligned */}
              <button className="flex rtl:w-[169px] h-[61px] px-6 py-4 gap-2 items-center bg-[#15b86c] hover:bg-[#158450] rounded-lg border-none absolute top-0 left-0 z-[5] pointer">
                <img
                  src="/assets/images/global.svg"
                  alt="Global Icon"
                  className="w-6 h-6"
                />
                <span className="text-[16px] font-normal leading-[29px] text-white tracking-[0.32px]">
                  {t("visit")}
                </span>
              </button>

              {/* Close Button - Right Aligned */}
              <div
                onClick={onClose}
                className="w-[40px] h-[40px] bg-[#282828] rounded-[12px] flex items-center justify-center text-white cursor-pointer absolute top-0 right-0"
              >
                ✖
              </div>
            </div>
            <div className=" flex md:hidden justify-center items-center h-[80px] mx-auto">
                <img
                  src={data.image}
                  alt="Logo"
                  className="h-[80px] max-w-[250px] object-contain"
                />
              </div>
            <div className="flex w-full xl:w-[1360px] flex-col gap-[64px] items-start flex-nowrap relative z-[1] mt-[108px] mr-0 mb-0 sm:ml-[40px]">
              <div className="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[2]">
                <span className=" self-stretch shrink-0 basis-auto  text-[32px] font-medium leading-[58px] text-[#fff] relative text-start xl:whitespace-pre-line z-[3]">
                  {data.title1}
                </span>
                <span className="flex w-full xl:w-[1360px]  justify-start items-start self-stretch shrink-0  text-[16px] font-medium leading-[35px] text-[#8c8c8c] relative text-start overflow-hidden z-[4] whitespace-pre-line">
                  {data.description1}
                </span>
              </div>
              <div className="flex md:h-[287px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[5]">
                <span className="flex xl:w-[459px] xl:h-[58px] justify-start items-start shrink-0 basis-auto  text-[32px] font-medium leading-[58px] text-[#fff] relative text-start xl:whitespace-nowrap z-[6]">
                  {data.title2}
                </span>
                <span className="flex w-full xl:w-[1360px] justify-start items-start self-stretch xl:grow xl:shrink-0 xl:basis-0  text-[16px] font-medium leading-[35px] text-[#8c8c8c]  text-start overflow-hidden z-[7] whitespace-pre-line">
                  {data.description2}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ThirdSection = React.memo(ThirdSectionComponent);
