import HeaderClient from "@/components/Animations/HeaderClient";
import LanguageChanger from "../LanguageChanger";

async function Header({ locale }: { locale: string }) {



  
  return (
    <div className=" flex justify-center items-center w-full ">
<div className="main-container flex flex-col gap-[30px] w-full xl:w-[1360px] xl:h-[193px] mx-auto my-0">
  <div className="w-full xl:w-[1360px]  rounded-[16px] flex justify-between items-center relative mt-0 mr-0 mb-0 ml-0">
    
    <LanguageChanger />
    <div className="hidden sm:flex w-[253.399px] h-[74.491px] bg-[url(/assets/images/logo.svg)] bg-cover bg-no-repeat gap-[15.28px] justify-center items-center flex-nowrap ">
    </div>
    <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#282828] rounded-[12px]  overflow-hidden ">
      <div
        className="w-[24px] h-[24px] bg-[url(/assets/images/linkedin.svg)] bg-cover bg-no-repeat relative  "
      />
    </div>
  </div>

  <div className="flex sm:hidden w-[200px] h-[74.491px] bg-[url(/assets/images/logo.svg)] bg-contain bg-no-repeat gap-[15.28px] justify-center items-center flex-nowrap mx-auto "/>

  <HeaderClient locale={locale} />

</div>

    </div>

  );
}

export default Header;
