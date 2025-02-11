import initTranslations from "@/app/i18n";

import {
  Hero,
} from "./_components";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <section className="z-[1]">
      <Hero  />
    </section>
  );
};

export default Home;
