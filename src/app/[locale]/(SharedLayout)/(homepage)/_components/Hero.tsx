"use client";

import ButtonGrid from "@/components/Animations/ButtonGrid";
import React, { useRef, useState } from "react";


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
<main className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
<div className=" flex w-[816px] flex-col gap-[40px] items-center flex-nowrap relative z-1  mx-auto my-0">
      <div className="flex w-[816px] flex-col gap-[16px] items-center shrink-0 flex-nowrap relative z-1 ">
        <div className="w-[816px] shrink-0  text-[40px] font-bold leading-[72.8px] relative z-1  text-center whitespace-nowrap">
          <span className=" text-[40px] font-bold leading-[72.8px] text-[#fff] relative z-1  text-center">
            مجموعة إنجاز العالمية{" "}
          </span>
          <span className=" text-[40px] font-bold leading-[72.8px] text-[#15b86c] relative z-1  text-center">
            إنجاز
          </span>
          <span className=" text-[40px] font-bold leading-[72.8px] text-[#fff] relative z-1  text-center">
            {" "}
          </span>
          <span className=" text-[40px] font-bold leading-[72.8px] text-[#15b86c] relative z-1  text-center">
            اليوم
          </span>
          <span className=" text-[40px] font-bold leading-[72.8px] text-[#fff] relative z-1  text-center">
            {" "}
            لرؤية الغد
          </span>
        </div>
        <span className="flex w-[757px] h-[64px] justify-center items-start shrink-0  text-[16px] font-medium leading-[32px] text-[#fff] relative z-1  text-center ">
          نحن في مجموعة إنجاز نؤمن بأن | التميز ليس خيارًا، بل هو التزام نعمل به
          يوميًا لصنع الغد. تتميز المجموعة بقدرتها على تحويل التحديات إلى فرص
          نجاح، مما تعزز مكانتها كأحد الكيانات الرائدة في السوق
        </span>
      </div>
      <div className="w-[193.562px] h-[10.222px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat absolute top-[72.5px] left-[198px] " />
    </div>
  
<ButtonGrid/>
    </main>
  );
};

export default Hero;
