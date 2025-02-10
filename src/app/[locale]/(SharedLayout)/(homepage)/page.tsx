import initTranslations from "@/app/i18n";

import {
  Hero,
} from "./_components";
import HomeClient from "./_components/HomeClient";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <section className="">
      <Hero  />
    </section>
  );
};

export default Home;
