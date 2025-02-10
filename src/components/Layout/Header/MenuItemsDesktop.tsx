import { NavLink } from "@/components/Main";
import { cn } from "@/lib/utils";
import { TFunction } from "i18next";

export default function MenuItemsDesktop({
  t,
  className,
  locale,
}: {
  t: TFunction;
  className?: string;
  locale?: string;
}) {
  console.log(locale);
  
  const menuItems = [
    { key: "home", href: `${locale=="ar"?`/`:`/en`}`, width: "58px" },
    { key: "products", href:`${locale=="ar"?`/products`:`/en/products`}` , width: "55px" },
    { key: "about_us", href:`${locale=="ar"?`/about-us`:`/en/about-us`}` , width: "44px" },
    { key: "calculate_finance", href:`${locale=="ar"?`/calculate`:`/en/calculate`}` , width: "87px" },
    { key: "contact_us", href:`${locale=="ar"?`/contact-us`:`/en/contact-us`}`, width: "69px" },
  ];
  


  return (
    <div
    className={cn(
      "hidden md:flex gap[16px] xl:w-[425px] h-[49px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[16px] items-center justify-center flex-nowrap bg-[rgba(231,240,241,0.2)] rounded-[16px] border-none absolute top-[3px] left-1/2 translate-x-[-50%] translate-y-0 pointer",
      className
    )}
  >
    {menuItems.map((item, index) => (
      <NavLink
        key={index}
        href={item.href}
        className={cn(
          "flex items-center justify-center shrink-0 ltr:text-[12px] rtl:text-[14px] font-normal ltr:leading-3 rtl:leading-[16.406px] relative"
        )}
        style={{
          // width: item.width,
          height: "25px",
        }}
      >
         {t(`menu.${item.key}`)}
      </NavLink>
    ))}
    {/* <div className="w-[58px] h-[2px] bg-white absolute bottom-0 right-[24px] z-[6]" /> */}
  </div>
  );
}
