"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Set a cookie to save the preferred locale
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Redirect to the new locale path
    let newPath;
    if (currentLocale === "en" && !currentPathname.includes("/en")) {
      newPath = `/${newLocale}${currentPathname}`;
    } else {
      newPath = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }
    window.location.href = newPath;
  };

  return (
    <div className="relative">
      {/* Language Switcher Button */}
      <button
        className="w-[40px] h-[40px] bg-[#282828] rounded-[12px] border-none overflow-hidden flex justify-center items-center pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="flex h-[19px] justify-start items-start text-[12px] font-medium leading-[19px] text-[#fff] whitespace-nowrap">
          {currentLocale === "ar" ? "AR" : "EN"}
        </span>
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <motion.div
          className="absolute top-[50px] start-0 w-[100px] bg-[#282828] text-white shadow-lg rounded-lg z-[9] flex flex-col"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <button
            onClick={() => {
              setDropdownOpen(false);
              handleChange("ar");
            }}
            className="px-4 py-2 text-[14px] hover:bg-gray-700"
          >
            العربية
          </button>
          <button
            onClick={() => {
              setDropdownOpen(false);
              handleChange("en");
            }}
            className="px-4 py-2 text-[14px] hover:bg-gray-700"
          >
            English
          </button>
        </motion.div>
      )}
    </div>
  );
}
