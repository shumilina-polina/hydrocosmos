import s from "./articles.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";

const data = [
  {
    id: 1,
    num: 3,
    type: "научная статья",
    text: "ГЛУБОКОВОДНЫЕ ВОДОЛАЗНЫЕ СПУСКИ (МЕДИЦИНСКИЕ И&nbsp;ЕХНИЧЕСКИЕ АСПЕКТЫ, МЕТОДИКИ ТЕХНИЧЕСКОГО ДАЙВИНГА, ИСПОЛЬЗОВАНИЕ АВТОНОМНЫХ АППАРАТОВ С&nbsp;ЗАМКНУТОЙ СХЕМОЙ ДЫХАНИЯ, АЛГОРИТМЫ МЕДИЦИНСКОГО РЕАГИРОВАНИЯ И&nbsp;ПАРАМЕДИЦИНСКИЕ НАВЫКИ ВОДОЛАЗОВ)",
    url: "assets/test/article.jpg",
    authors: [
      {
        id: 1,
        name: "А.М. Ярков",
        link: "https://pushkeen.ru",
      },
      {
        id: 2,
        name: "С.А. Бычков",
        link: "https://pushkeen.ru",
      },
      {
        id: 3,
        name: "А.Ю. Таракановский",
        link: "https://pushkeen.ru",
      },
    ],
  },
  {
    id: 2,
    num: 3,
    type: "научная статья",
    text: "ГЛУБОКОВОДНЫЕ ВОДОЛАЗНЫЕ СПУСКИ (МЕДИЦИНСКИЕ И&nbsp;ЕХНИЧЕСКИЕ АСПЕКТЫ, МЕТОДИКИ ТЕХНИЧЕСКОГО ДАЙВИНГА, ИСПОЛЬЗОВАНИЕ АВТОНОМНЫХ АППАРАТОВ С&nbsp;ЗАМКНУТОЙ СХЕМОЙ ДЫХАНИЯ, АЛГОРИТМЫ МЕДИЦИНСКОГО РЕАГИРОВАНИЯ И&nbsp;ПАРАМЕДИЦИНСКИЕ НАВЫКИ ВОДОЛАЗОВ)",
    authors: [
      {
        id: 1,
        name: "А.М. Ярков",
        link: "https://pushkeen.ru",
      },
      {
        id: 2,
        name: "С.А. Бычков",
        link: "https://pushkeen.ru",
      },
      {
        id: 3,
        name: "А.Ю. Таракановский",
        link: "https://pushkeen.ru",
      },
    ],
  },
  {
    id: 3,
    num: 3,
    type: "научная статья",
    text: "ГЛУБОКОВОДНЫЕ ВОДОЛАЗНЫЕ СПУСКИ (МЕДИЦИНСКИЕ И&nbsp;ЕХНИЧЕСКИЕ АСПЕКТЫ, МЕТОДИКИ ТЕХНИЧЕСКОГО ДАЙВИНГА, ИСПОЛЬЗОВАНИЕ АВТОНОМНЫХ АППАРАТОВ С&nbsp;ЗАМКНУТОЙ СХЕМОЙ ДЫХАНИЯ, АЛГОРИТМЫ МЕДИЦИНСКОГО РЕАГИРОВАНИЯ И&nbsp;ПАРАМЕДИЦИНСКИЕ НАВЫКИ ВОДОЛАЗОВ)",
    authors: [
      {
        id: 1,
        name: "А.М. Ярков",
        link: "https://pushkeen.ru",
      },
      {
        id: 2,
        name: "С.А. Бычков",
        link: "https://pushkeen.ru",
      },
      {
        id: 3,
        name: "А.Ю. Таракановский",
        link: "https://pushkeen.ru",
      },
    ],
  },
  {
    id: 4,
    num: 3,
    type: "научная статья",
    text: "ГЛУБОКОВОДНЫЕ ВОДОЛАЗНЫЕ СПУСКИ (МЕДИЦИНСКИЕ И&nbsp;ЕХНИЧЕСКИЕ АСПЕКТЫ, МЕТОДИКИ ТЕХНИЧЕСКОГО ДАЙВИНГА, ИСПОЛЬЗОВАНИЕ АВТОНОМНЫХ АППАРАТОВ С&nbsp;ЗАМКНУТОЙ СХЕМОЙ ДЫХАНИЯ, АЛГОРИТМЫ МЕДИЦИНСКОГО РЕАГИРОВАНИЯ И&nbsp;ПАРАМЕДИЦИНСКИЕ НАВЫКИ ВОДОЛАЗОВ)",
    authors: [
      {
        id: 1,
        name: "А.М. Ярков",
        link: "https://pushkeen.ru",
      },
      {
        id: 2,
        name: "С.А. Бычков",
        link: "https://pushkeen.ru",
      },
      {
        id: 3,
        name: "А.Ю. Таракановский",
        link: "https://pushkeen.ru",
      },
    ],
  },
  {
    id: 5,
    num: 3,
    type: "научная статья",
    text: "ГЛУБОКОВОДНЫЕ ВОДОЛАЗНЫЕ СПУСКИ (МЕДИЦИНСКИЕ И&nbsp;ЕХНИЧЕСКИЕ АСПЕКТЫ, МЕТОДИКИ ТЕХНИЧЕСКОГО ДАЙВИНГА, ИСПОЛЬЗОВАНИЕ АВТОНОМНЫХ АППАРАТОВ С&nbsp;ЗАМКНУТОЙ СХЕМОЙ ДЫХАНИЯ, АЛГОРИТМЫ МЕДИЦИНСКОГО РЕАГИРОВАНИЯ И&nbsp;ПАРАМЕДИЦИНСКИЕ НАВЫКИ ВОДОЛАЗОВ)",
    authors: [
      {
        id: 1,
        name: "А.М. Ярков",
        link: "https://pushkeen.ru",
      },
      {
        id: 2,
        name: "С.А. Бычков",
        link: "https://pushkeen.ru",
      },
      {
        id: 3,
        name: "А.Ю. Таракановский",
        link: "https://pushkeen.ru",
      },
    ],
  },
  {
    id: 6,
    num: 3,
    type: "научная статья",
    text: "ГЛУБОКОВОДНЫЕ ВОДОЛАЗНЫЕ СПУСКИ (МЕДИЦИНСКИЕ И&nbsp;ЕХНИЧЕСКИЕ АСПЕКТЫ, МЕТОДИКИ ТЕХНИЧЕСКОГО ДАЙВИНГА, ИСПОЛЬЗОВАНИЕ АВТОНОМНЫХ АППАРАТОВ С&nbsp;ЗАМКНУТОЙ СХЕМОЙ ДЫХАНИЯ, АЛГОРИТМЫ МЕДИЦИНСКОГО РЕАГИРОВАНИЯ И&nbsp;ПАРАМЕДИЦИНСКИЕ НАВЫКИ ВОДОЛАЗОВ)",
    authors: [
      {
        id: 1,
        name: "А.М. Ярков",
        link: "https://pushkeen.ru",
      },
      {
        id: 2,
        name: "С.А. Бычков",
        link: "https://pushkeen.ru",
      },
      {
        id: 3,
        name: "А.Ю. Таракановский",
        link: "https://pushkeen.ru",
      },
    ],
  },
];

const Articles = () => {
  const { t } = useTranslation();

  return (
    <section className={s.wr}>
      <Wrapper>
        <header className={s.wr_header}>
          <h2>{t("home.articles.title")}</h2>
          <hr />
        </header>
        <main>
          {data && (
            <div className={s.content}>
              <article>
                <img src={data[0].url} />
                <hr />
              </article>
              {data.map((article, i) => (
                <article className={s[`article_${i}`]} key={article.id}>
                  <header>
                    <span>
                      {t("home.articles.release")} №{article.num}
                    </span>
                    |<span>{article.type}</span>
                  </header>
                  <main>
                    <ReactMarkdown>{article.text}</ReactMarkdown>
                  </main>
                  <footer>
                    {article.authors.map((author, i, arr) => (
                      <span key={author.id}>
                        <Link href={"/"}>
                          {author.name}
                          {i < arr.length - 1 ? ", " : "."}
                        </Link>
                      </span>
                    ))}
                  </footer>
                  {Boolean(i % 2) && <hr />}
                </article>
              ))}
            </div>
          )}
        </main>
      </Wrapper>
    </section>
  );
};

export default Articles;
