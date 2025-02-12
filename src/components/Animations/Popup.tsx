"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation("about");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          onClick={onClose} // Close on background click
        >
          <motion.div
            className="w-[100%] max-w-[1440px] h-[100vh] bg-[#191919] rounded-t-3xl pt-6 overflow-y-auto no-scrollbar relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-[40px] h-[40px] bg-[#282828] rounded-xl absolute top-7 right-6 flex items-center justify-center text-white "
            >
              ✖
            </button>

            {/* Header */}
            <div className="text-center text-[#575757] text-[2rem]  bukra-semi-bold  mt-[12px]  mb-[40px]">
            {t("about.title")}
            </div>
            <div className="main-container w-full  bg-[url(/assets/images/image.png)] bg-cover bg-center bg-no-repeat rounded-tl-[32px] rounded-tr-[32px] rounded-br-none rounded-bl-none relative   mx-auto my-0">
              <div className="p-[40px]">
                {/* Logo Section */}
                <div className="flex justify-start items-center gap-4 ">
                  <img
                    src="/assets/images/logo.svg"
                    alt="Placeholder Logo 1"
                    className="w-[237.826px] h-[70px]"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-wrap justify-between items-start mt-10">
                  {/* Left Section */}
                  <div className="w-full lg:w-[48%] flex flex-col gap-8">
                    <h2 className="text-white text-2xl bukra-semi-bold font-bold text-start">
                    {t("about.companyJourney")}
                                        </h2>
                    <p className="text-[#8c8c8c] text-md leading-8 text-start">
                    {t("about.companyJourneyText")}
                    </p>
                    <p className="text-[#8c8c8c] text-md leading-8 text-start">
                    {t("about.companySuccessText")}
                    </p>
                  </div>

                  {/* Right Section */}
                  <div className="w-full lg:w-[48%] flex flex-col gap-8">
                    <div>
                      <h2 className="text-white text-2xl bukra-semi-bold font-bold text-start">
                      {t("about.futureVision")}
                      </h2>
                      <p className="text-[#8c8c8c] text-md leading-8 text-start mt-8">
                      {t("about.futureVisionText")}
                      </p>
                    </div>
                    <div>
                      <h2 className="text-white text-2xl bukra-semi-bold font-bold text-start">
                      {t("about.leadership")}
                      </h2>
                      <p className="text-[#8c8c8c] text-md leading-8 text-start mt-8">
                      {t("about.leadershipText")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
