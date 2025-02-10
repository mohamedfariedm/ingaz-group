"use client";
import React, { useState } from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
 function Features() {
  const { t } = useTranslation("products");

  const images = [
    '/assets/images/singleProduct/avatar.svg',
    '/assets/images/singleProduct/avatar.svg',
    '/assets/images/singleProduct/avatar.svg',
    '/assets/images/singleProduct/avatar.svg',

  ];

  const [activeButton, setActiveButton] = useState(1);

  // Array of buttons with their labels and icons
  const buttons = [
    { id: 1,activeIcon:"/assets/images/singleProduct/6.svg", label: "buttons.beauty", icon: "/assets/images/products/component1.svg" },
    { id: 2,activeIcon:"/assets/images/singleProduct/5.svg", label: "buttons.recruitment", icon: "/assets/images/products/component6.svg" },
    { id: 3,activeIcon:"/assets/images/singleProduct/4.svg", label: "buttons.travel", icon: "/assets/images/products/component5.svg" },
    { id: 4,activeIcon:"/assets/images/singleProduct/3.svg", label: "buttons.salati", icon: "/assets/images/products/component4.svg" },
    { id: 5,activeIcon:"/assets/images/singleProduct/2.svg", label: "buttons.personal_finance", icon: "/assets/images/products/component3.svg" },
    { id: 6,activeIcon:"/assets/images/singleProduct/1.svg", label: "buttons.shabab_tuwaiq", icon: "/assets/images/products/component2.svg" },
  ];
  return (
    <>
      <BreadCrumbComponent t={t} />
      <div className="main-container xl:w-[1152px] xl:h-[954px] relative mx-auto my-0">



      <div className="flex xl:w-[1152px] gap-[24px] items-center justify-center flex-wrap xl:flex-nowrap relative mt-0 mr-0 mb-0 ml-0">
      {buttons.map((button) => (
        <button
          key={button.id}
          className={`flex ${
            button.id === activeButton ? "bg-[#5d9d9f]" : "bg-[#f8fbfc]"
          } w-auto h-[64px] pt-[12px] px-[26px] pb-[12px]  flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[16px] border-none relative pointer`}
          onClick={() => setActiveButton(button.id)} // Set active button on click
        >
          <div className="flex gap-[8px] items-center shrink-0 flex-nowrap relative">
            <div
              className="w-[40px] h-[40px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden"
              style={{ backgroundImage: `url(${button.id !== activeButton ?button.activeIcon:button.icon})` }}
            />
            <span
              className={`flex h-[24px] justify-center items-start shrink-0 basis-auto text-[16px] font-normal leading-[24px] relative text-center xl:whitespace-nowrap ${
                button.id === activeButton ? "text-[#fff]" : "text-[#5d9d9f]"
              }`}
            >
              {t(button.label)}
            </span>
          </div>
        </button>
      ))}
    </div>




        <div className="flex w-full xl:w-[1152px] flex-col gap-[24px] items-center justify-center xl:items-start flex-nowrap relative mt-[64px]">
          <div className="flex gap-[24px] items-center flex-col xl:flex-row self-stretch shrink-0 flex-nowrap relative">
          <div className="flex w-full xl:w-[564px] h-[568px]  flex-col gap-[8px] items-center shrink-0 flex-nowrap rounded-[24px] relative">
      <Swiper
        modules={[Pagination,Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        autoplay
        loop
        pagination={{
          clickable: true
        }}
        className="w-full h-full"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-no-repeat rounded-[24px]"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
            <div className="flex w-full xl:w-[564px] p-[31px] flex-col gap-[24px] items-start shrink-0 flex-nowrap bg-[#f8fbfc] rounded-[24px] relative">
              <div className="flex flex-col gap-[16px]  self-stretch shrink-0 flex-nowrap relative">
                <div className="flex gap-[8px]  items-center self-stretch shrink-0 flex-nowrap relative">
                  <div className="w-[16px] h-[5px] shrink-0 bg-[#5d9d9f] rounded-[6px]" />
                  <span className="flex w-[132px] h-[29px]  items-start shrink-0 basis-auto text-[16px] font-semibold leading-[29px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap">
                   {t("product_details.title")}
                  </span>
                </div>
                <div className="flex flex-col gap-[12px] justify-center  self-stretch shrink-0 flex-nowrap relative">
                  {[
                    "product_details.features.list.first",
                    "product_details.features.list.second",
                    "product_details.features.list.third",

                  ].map((text, idx) => (
                    <div
                      key={idx}
                      className="flex gap-[12px]  items-center self-stretch shrink-0 flex-nowrap"
                    >
                      <div className="w-[40px] h-[40px] shrink-0 bg-[url(/assets/images/singleProduct/right.svg)] bg-cover bg-no-repeat rounded-[999px] relative overflow-hidden" />
                      <span className="flex w-full xl:w-[290px] xl:h-[29px]  items-start shrink-0 basis-auto text-[16px] font-normal leading-[29px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap">
                        {t(text)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[16px]  self-stretch shrink-0 flex-nowrap relative">
                <div className="flex gap-[8px]  items-center self-stretch shrink-0 flex-nowrap relative">
                  <div className="w-[16px] h-[5px] shrink-0 bg-[#5d9d9f] rounded-[6px]" />
                  <span className="flex w-[150px] h-[29px]  items-start shrink-0 basis-auto text-[16px] font-semibold leading-[29px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap">
{t("product_details.conditions.title")}
                  </span>
                </div>
                <div className="flex flex-col gap-[12px] justify-center  self-stretch shrink-0 flex-nowrap relative">
                  {[
                    "product_details.conditions.list.first",
                    "product_details.conditions.list.second",
                    "product_details.conditions.list.third",
                    "product_details.conditions.list.fourth",
                    "product_details.conditions.list.fifth",
                  ].map((condition, idx) => (
                    <div
                      key={idx}
                      className="flex gap-[12px]  items-center self-stretch shrink-0 flex-nowrap"
                    >
                      <div className="w-[40px] h-[40px] shrink-0 bg-[url(/assets/images/singleProduct/right.svg)] bg-cover bg-no-repeat rounded-[999px] relative overflow-hidden" />
                      <span className="flex w-full xl:w-[380px] xl:h-[29px]  items-start shrink-0 basis-auto text-[16px] font-normal leading-[29px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap">
                        {t(condition)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-col gap-[32px] items-start self-stretch shrink-0 flex-nowrap relative">
            <div className="flex flex-col gap-[16px] justify-center  self-stretch shrink-0 flex-nowrap relative">
              <span className="flex w-[191px] h-[44px]  items-start shrink-0 basis-auto text-[24px] font-semibold leading-[43.68px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap">
              {t("product_details.title")}
              </span>
              <span className="xl:h-[32px] self-stretch shrink-0 basis-auto text-[16px] font-normal leading-[32px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap">
              {t("product_details.description")}
                            </span>
            </div>
            <div className="flex flex-col gap-[9px] items-start self-stretch shrink-0 flex-nowrap relative">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative">
                <span className="flex w-[145px] h-[29px] justify-center items-start shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#5d9d9f] relative text-center xl:whitespace-nowrap">
{t("product_details.max_financing")}
                </span>
                <span className="flex w-[128px] h-[44px]  items-start shrink-0 basis-auto text-[24px] font-semibold leading-[43.68px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap">
                  4,000 {t("product_details.amount")}
                </span>
              </div>
              <button className="flex p-[14px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#5d9d9f] rounded-[16px] border-none relative pointer">
                <span className="flex w-[81px] h-[29px] justify-center items-start shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#fff] relative text-center xl:whitespace-nowrap">
                  {t("product_details.apply_now")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
