"use client";

import React, { useState } from "react";
import Popup from "./Popup";
import FormPopup from "./FormPopup";
import { useTranslation } from "react-i18next";

function HeaderClient() {
  const { t } = useTranslation("homepage");

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [isThirdSectionOpen, setThirdSectionOpen] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="main-container flex sm:w-[382px] gap-2 sm:gap-[64px] items-center justify-center flex-wrap sm:flex-nowrap relative mx-auto mt-10">
      
      {/* "من نحن" Button */}
      <div className="flex rtl:w-[77px] pt-[4px] pr-[16px] pb-[4px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[rgba(255,255,255,0.15)] rounded-[12px] relative z-[4]">
        <span
          onClick={() => setPopupOpen(true)}
          className="h-[32px] grow shrink-0 cursor-pointer basis-auto text-[14px] font-medium leading-[32px] text-[#fff] relative text-center whitespace-nowrap z-[3]"
        >
          {t("header.aboutUs")}
        </span>
        <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
      </div>

      {/* "الشركات" Button */}
      <button
        onClick={scrollToBottom} 
        className="flex rtl:w-[88px] pt-[4px] pr-[16px] pb-[4px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[rgba(255,255,255,0.15)] rounded-[12px] border-none relative z-[2] pointer"
      >
        <span className="h-[32px] grow shrink-0 basis-auto text-[14px] font-medium leading-[32px] text-[#fff] relative text-center whitespace-nowrap z-[3] ">
          {t("header.companies")}
        </span>
      </button>

      {/* "التوظيف" Button */}
      <button className="flex rtl:w-[89px] pt-[4px] pr-[16px] pb-[4px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[rgba(255,255,255,0.15)] rounded-[12px] border-none relative pointer">
        <span
          onClick={() => setFormOpen(true)}
          className="flex w-[57px] h-[32px] justify-center items-start shrink-0 basis-auto text-[14px] font-medium leading-[32px] text-[#fff] relative text-center whitespace-nowrap z-[1]"
        >
          {t("header.careers")}
        </span>
        <FormPopup isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
      </button>
    </div>
  );
}

export default HeaderClient;
