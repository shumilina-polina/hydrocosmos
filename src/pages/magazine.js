import { JournalCart } from "@/components/JournalCart";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import s from "@/styles/pages/magazine.module.scss";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    name: "1 журнал гидрокомос",
    num: 4,
    date: "Май 2024",
    year: "2024",
    url: "assets/test/journal.jpg",
  },
  {
    id: 2,
    name: "2 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 3,
    name: "3 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2024",
    url: "assets/test/magazine.jpg",
  },
  {
    id: 4,
    name: "4 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2023",
    url: "assets/test/magazine.jpg",
  },
];

export default function Magazine() {
  const { t } = useTranslation();
  // year sort
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
            {data &&
              Array.from(new Set(data.map((elem) => elem.year))).map((year) => (
                <div className={s.year}>
                  <div>
                    <h2>{year}</h2>
                    <hr />
                  </div>
                  <ul>
                    {data.map(
                      (cart) =>
                        cart.year === year && (
                          <li>
                            <JournalCart cart={cart} />
                          </li>
                        )
                    )}
                  </ul>
                </div>
              ))}
          </main>
        </section>
      </Wrapper>
    </>
  );
}
