"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThirdSectionComponent:React.FC<PopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        onClick={onClose} // Close on background click
      >
        <motion.div
          className="w-full max-w-[1440px] h-[100vh] bg-[#191919] rounded-t-3xl p-6 overflow-y-auto overflow-x-hidden relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
        >
<div className="main-container w-full max-w-[1360px] h-[80px] relative mx-auto my-0 flex items-center justify-between px-4 lg:px-0">

{/* Logo - Stays Centered */}
<div className="absolute left-1/2 transform -translate-x-1/2 top-0 flex justify-center items-center h-[80px]">
<img
  src="/assets/images/logo.svg"
  alt="Logo"
  className="h-[80px] max-w-[316px] object-contain"
/>
</div>

{/* Visit Website Button - Left Aligned */}
<button className="flex w-[169px] h-[61px] px-6 py-4 gap-2 items-center bg-[#15b86c] hover:bg-[#158450] rounded-lg border-none absolute top-0 left-0 z-[5] pointer">
<img
  src="/assets/images/global.svg"
  alt="Global Icon"
  className="w-6 h-6"
/>
<span className="text-[16px] font-normal leading-[29px] text-white tracking-[0.32px]">
  زيارة الموقع
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


<div className="flex w-full xl:w-[1360px] flex-col gap-[64px] items-start flex-nowrap relative z-[1] mt-[108px] mr-0 mb-0 ml-[40px]">
    <div className="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[2]">
      <span className="xl:h-[58px] self-stretch shrink-0 basis-auto  text-[32px] font-medium leading-[58px] text-[#fff] relative text-right xl:whitespace-nowrap z-[3]">
        مركز متخصص في تطوير الكفاءات المهنية والتدريب.
      </span>
      <span className="flex w-full xl:w-[1360px] h-[140px] justify-start items-start self-stretch shrink-0  text-[16px] font-medium leading-[35px] text-[#8c8c8c] relative text-right overflow-hidden z-[4]">
        يعد مركز إنجاز المتحدة للتدريب أحد أبرز المراكز المتخصصة في تقديم
        البرامج التدريبية والتطويرية التي تهدف إلى تعزيز المهارات وبناء
        القدرات البشرية في مختلف المجالات. تأسس المركز على رؤية واضحة تهدف
        إلى تمكين الأفراد والمؤسسات من تحقيق أهدافهم من خلال تقديم حلول
        تدريبية مبتكرة ومخصصة تلبي احتياجات سوق العمل المتغيرة. <br />
        يقدم المركز مجموعة واسعة من البرامج التدريبية التي تشمل التدريب
        الإداري، تطوير القيادة، المهارات التقنية، التحول الرقمي، إدارة
        المشاريع، بالإضافة إلى برامج متخصصة في الموارد البشرية والتسويق
        والمبيعات. يعتمد المركز في تصميم برامجه على أحدث المنهجيات العالمية
        وأفضل الممارسات، مما يضمن تحقيق أقصى استفادة للمتدربين.
      </span>
    </div>
    <div className="flex h-[287px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[5]">
      <span className="flex xl:w-[459px] xl:h-[58px] justify-start items-start shrink-0 basis-auto  text-[32px] font-medium leading-[58px] text-[#fff] relative text-right xl:whitespace-nowrap z-[6]">
        لماذا مركز إنجاز المتحدة للتدريب؟
      </span>
      <span className="flex w-full xl:w-[1360px] justify-start items-start self-stretch grow shrink-0 basis-0  text-[16px] font-medium leading-[35px] text-[#8c8c8c] relative text-right overflow-hidden z-[7]">
        يتميز مركز إنجاز المتحدة للتدريب بقدرته على تقديم حلول تدريبية
        متكاملة تسهم في تطوير المهارات وبناء الكفاءات البشرية التي تحتاجها
        المؤسسات لتحقيق النجاح. نقدم برامج تدريبية مصممة بعناية لتلبية
        احتياجات الأفراد والمؤسسات، مع التركيز على الجوانب العملية
        والتطبيقية التي تضمن تحقيق نتائج ملموسة. <br /> <br />
        نحن نؤمن بأن التدريب هو الركيزة الأساسية لبناء مؤسسات قوية وقادرة
        على المنافسة، وهذا ما يجعلنا نركز على تقديم برامج تدريبية تدعم
        التميز الوظيفي وتعزز القدرات القيادية. نعمل مع أفضل الخبراء
        والمتخصصين في مختلف المجالات لضمان أن تكون برامجنا ذات جودة عالية
        وتواكب أحدث التطورات العالمية.
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
