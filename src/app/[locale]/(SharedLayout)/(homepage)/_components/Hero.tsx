"use client";

import React, { useRef, useState } from "react";
import HomeClient from "./HomeClient";
import ButtonGrid from "../../../../../components/Animations/ButtonGrid";


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
<main className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
  
<div className="main-container flex w-[816px] flex-col gap-[40px] items-center flex-nowrap relative mx-auto my-0">
      <div className="flex w-[816px] flex-col gap-[16px] items-center shrink-0 flex-nowrap relative">
        <div className="w-[816px] shrink-0  text-[40px] font-bold leading-[72.8px] relative text-center whitespace-nowrap z-[1]">
          <span className=" text-[40px] font-bold leading-[72.8px] text-[#fff] relative text-center">
            مجموعة إنجاز العالمية{" "}
          </span>
          <span className=" text-[40px] font-bold leading-[72.8px] text-[#15b86c] relative text-center">
            إنجاز
          </span>
          <span className=" text-[40px] font-bold leading-[72.8px] text-[#fff] relative text-center">
            {" "}
          </span>
          <span className=" text-[40px] font-bold leading-[72.8px] text-[#15b86c] relative text-center">
            اليوم
          </span>
          <span className=" text-[40px] font-bold leading-[72.8px] text-[#fff] relative text-center">
            {" "}
            لرؤية الغد
          </span>
        </div>
        <span className="flex w-[757px] h-[64px] justify-center items-start shrink-0  text-[16px] font-medium leading-[32px] text-[#fff] relative text-center z-[2]">
          نحن في مجموعة إنجاز نؤمن بأن | التميز ليس خيارًا، بل هو التزام نعمل به
          يوميًا لصنع الغد. تتميز المجموعة بقدرتها على تحويل التحديات إلى فرص
          نجاح، مما تعزز مكانتها كأحد الكيانات الرائدة في السوق
        </span>
      </div>
      <div className="w-[193.562px] h-[10.222px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat absolute top-[72.5px] left-[198px] z-[3]" />
    </div>
<ButtonGrid/>

    </main>
  );
};

export default Hero;
