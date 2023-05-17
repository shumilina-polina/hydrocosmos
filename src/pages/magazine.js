import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import s from "@/styles/pages/magazine.module.scss";
import cn from "classnames";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    text: "1 журнал гидрокомос",
    date: "май 2024",
    year: "2024",
    url: "assets/test/magazine.jpg",
  },
  {
    id: 2,
    text: "2 журнал гидрокомос",
    date: "май 2024",
    year: "2024",
    url: "assets/test/magazine.jpg",
  },
  {
    id: 3,
    text: "3 журнал гидрокомос",
    date: "май 2023",
    year: "2023",
    url: "assets/test/magazine.jpg",
  },
  {
    id: 4,
    text: "4 журнал гидрокомос",
    date: "май 2023",
    year: "2023",
    url: "assets/test/magazine.jpg",
  },
];

export default function Magazine() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.magazine")}</title>
      </Head>
      <Wrapper>
        <section className={s.wr}>
          <header>
            <Title>{t("magazine.title")}</Title>
          </header>
          <main>
            {/* {data.filter} */}
          </main>
        </section>
      </Wrapper>
    </>
  );
}
