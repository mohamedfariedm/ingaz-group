import ButtonGrid from "@/components/Animations/ButtonGrid";
import { TFunction } from "i18next";

async function Hero ({ t,locale }: { t: TFunction,locale: string }) {
  return (
  <>
    <div className="flex w-full xl:w-[816px] flex-col gap-[40px] items-center flex-nowrap relative z-1 mx-auto my-0">
      <div className="flex w-full xl:w-[816px] flex-col gap-[16px] items-center shrink-0 flex-nowrap relative z-1">
        <div className="w-full xl:w-[816px] shrink-0 text-[40px] font-bold leading-[75px] relative z-1 text-center rtl:xl:whitespace-nowrap">
          <span className="text-[40px] font-bold leading-[75px] bukra-bolder text-[#fff] relative z-1 text-center">
            {t("hero.mainTitle1")}
          </span>
          <span className="relative">
            <span className="text-[40px] font-bold leading-[75px] bukra-bolder text-[#15b86c] relative z-1 text-center">
              {t("hero.mainTitle2")}
            </span>
            <span className="text-[40px] font-bold leading-[75px] text-[#fff] relative z-1 text-center">
              {" "}
            </span>
            <span className="text-[40px] font-bold leading-[75px] bukra-bolder text-[#15b86c] relative z-1 text-center">
              {t("hero.mainTitle3")}
            </span>
            <div className="h-[10.222px] shrink-0 bg-[url(/assets/images/vector3.svg)] bg-cover bg-no-repeat absolute right-0 -bottom-5 left-[0px]" />
          </span>
          <span className="text-[40px] font-bold leading-[75px] bukra-bolder text-[#fff] relative z-1 text-center">
            {t("hero.mainTitle4")}
          </span>
        </div>
        <span className="flex w-full xl:w-[757px] xl:h-[64px] justify-center items-start shrink-0 text-[16px] font-medium leading-[32px] text-[#fff] relative z-1 text-center">
          {t("hero.subtitle")}
        </span>
      </div>
    </div>

    {/* <ButtonGrid locale={locale} /> */}
  </>
  );
};

export default Hero;
