import { JournalCart } from "@/components/JournalCart";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import { routes } from "@/shared/constants/routes";
import s from "@/styles/pages/journal/journals.module.scss";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    name: "1 журнал гидрокомос",
    num: 4,
    date: "Май 2024",
    year: "2024",
    url: "/assets/test/journal.jpg",
  },
  {
    id: 2,
    name: "2 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2023",
    url: "/assets/test/news.jpg",
  },
  {
    id: 3,
    name: "3 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2024",
    url: "/assets/test/journal.jpg",
  },
  {
    id: 4,
    name: "4 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2023",
    url: "/assets/test/journal.jpg",
  },
];

const page = "issue-1";

export default function Journals() {
  const { t } = useTranslation();
  // year sort
  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.journal")}</title>
      </Head>
      <Wrapper>
        <section className={s.wr}>
          <header>
            <Title>{t("journal.title")}</Title>
          </header>
          <main>
            {data &&
              Array.from(new Set(data.map((elem) => elem.year))).map(
                (year, index) => (
                  <div key={index} className={s.year}>
                    <div>
                      <h2>{year}</h2>
                      <hr />
                    </div>
                    <ul>
                      {data.map(
                        (cart, i) =>
                          cart.year === year && (
                            <li
                              data-aos="zoom-out"
                              data-aos-delay={`${100 * i}`}
                              key={i}
                            >
                              <Link
                                as={`/${routes.journal}/${page}`}
                                href={`/${routes.journal}/[id]`}
                              >
                                <JournalCart cart={cart} />
                              </Link>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                )
              )}
          </main>
        </section>
      </Wrapper>
    </>
  );
}
