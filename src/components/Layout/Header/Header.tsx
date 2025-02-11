import initTranslations from "@/app/i18n";
import HeaderClient from "@/components/Animations/HeaderClient";

async function Header({ locale }: { locale: string }) {

  const { t } = await initTranslations(locale, ["common"]);


  
  return (
    <div className=" flex justify-center items-center w-full ">
<div className="main-container flex flex-col gap-[30px] w-full xl:w-[1360px] xl:h-[193px] mx-auto my-0">
  <div className="w-full xl:w-[1360px]  rounded-[16px] flex justify-between items-center relative mt-0 mr-0 mb-0 ml-0">
    <button className="w-[40px] h-[40px] bg-[#282828] rounded-[12px] border-none  overflow-hidden flex justify-center items-center  pointer">
      <span className="flex h-[19px] justify-start items-start  text-[12px] font-medium leading-[19px] text-[#fff]  whitespace-nowrap">
        EN
      </span>
    </button>
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
