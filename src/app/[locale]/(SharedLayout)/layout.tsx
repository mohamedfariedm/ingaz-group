import { Footer, Header } from "@/components/Layout";
import type { Metadata } from "next";

/* export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden relative">
        {/* Background Video */}
        <video 
          autoPlay
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1252915703189651761/TEAM/f4e9/02ee/-d559-4cc0-9c1f-7ecb49909fa8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BDgr7CLZMemL6B0RiZVf2bzjhMC26HJobgsFChVa6GnxyrXpXw12lDMF0cwPuE6KgySDI2qvIg0wTKRuQAD7BYCC3NLdFfbLhNMhk47g2phziMa6w9SBvGDCUHGOmYbecbKsgPxJ~pT8LWyVWZbbCrqmCZ8CXYFjgWxzUlAdLPcXWzYZN~glDvi0Pp06rOsWu5X-DcEM0HtI4-eEEpLYM-Dynow9~Se1BYqUdw20ANARkO8mf1kCHafD2Nm3ZzMQyoqlaONUbI8UnH4Ece5ZfdgC1Mm6~YD2HcXYdGKtwEUMUxJyNIDLNE7-04lWQJmVy-Wn9tTXzbvgv3PI6JAtpg__" type="video/mp4" />
        </video>
{/* Radial Gradient Overlay */}
<div 
  className="absolute top-0 left-0 w-full h-full"
  style={{
    background: "radial-gradient(47.77% 50% at 50% 50%, rgba(24, 66, 116, 0.00) 1.46%, rgba(31, 31, 31, 0.64) 100%)"
  }}
></div>
        {/* Content */}
        <main className="flex flex-col items-center min-h-[990px] relative gap-[200px] p-6">
          <Header locale={locale} />
          {children}
          {/* <Footer locale={locale} /> */}
        </main>
      </div>
    </>
  );
}
