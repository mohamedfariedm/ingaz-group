import initTranslations from "@/app/i18n";
import Container from "../Container";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import LanguageChanger from "../LanguageChanger";
import MenuItemsDesktop from "./MenuItemsDesktop";
import { Logo } from "@/components/Main";
import { HeaderClient } from "@/components/Animations";

async function Header({ locale }: { locale: string }) {

  const { t } = await initTranslations(locale, ["common"]);


  
  return (
    <div className="fixed flex justify-center items-center w-full">
<div className="main-container w-[1360px] h-[193px] mx-auto my-0">
  <div className="w-[1360px] h-[113px] rounded-[16px] relative mt-0 mr-0 mb-0 ml-0">
    <div className="flex w-[253.399px] h-[74.491px] bg-[url(/assets/images/logo.svg)] bg-cover bg-no-repeat gap-[15.28px] justify-center items-center flex-nowrap absolute top-[8px] left-1/2 translate-x-[-49.88%] translate-y-0 z-[1]">
    </div>
    <button className="w-[40px] h-[40px] bg-[#282828] rounded-[12px] border-none absolute top-[25px] left-[1320px] overflow-hidden z-[11] pointer">
      <span className="flex h-[19px] justify-start items-start  text-[12px] font-medium leading-[19px] text-[#fff] absolute top-[calc(50%-9px)] left-[calc(50%-8px)] text-left whitespace-nowrap z-[12]">
        EN
      </span>
    </button>
    <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#282828] rounded-[12px] absolute top-[25px] left-0 overflow-hidden z-[13]">
      <div
        className="w-[24px] h-[24px] bg-[url(/assets/images/linkedin.svg)] bg-cover bg-no-repeat relative z-[14] "
      />
    </div>
  </div>

  <HeaderClient locale={locale} />

</div>

    </div>

  );
}

export default Header;
