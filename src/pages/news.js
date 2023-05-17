import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import s from "@/styles/pages/news.module.scss";
import cn from "classnames";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const data = [
  {
    id: 1,
    text: "1 Необычайная природа островов.",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 2,
    text: "2 Поисковая экспедиция ЦПИ РГО в&nbsp;Пермском крае завершена",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 3,
    text: "3 НАУЧНО-ИСТОРИЧЕСКАЯ КОНФЕРЕНЦИЯ «ТЕПЛОХОД “АРМЕНИЯ”. ВСПОМНИТЬ ВСЕХ»",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 4,
    text: "4 НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 5,
    text: "5 НАУЧНО-ИСТОРИЧЕСКАЯ КОНФЕРЕНЦИЯ «ТЕПЛОХОД “АРМЕНИЯ”. ВСПОМНИТЬ ВСЕХ»",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 6,
    text: "6 Необычайная природа островов.",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 7,
    text: "7 НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 1,
    text: "8 НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 2,
    text: "9 Поисковая экспедиция ЦПИ РГО в&nbsp;Пермском крае завершена",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 3,
    text: "10 НАУЧНО-ИСТОРИЧЕСКАЯ КОНФЕРЕНЦИЯ «ТЕПЛОХОД “АРМЕНИЯ”. ВСПОМНИТЬ ВСЕХ»",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 4,
    text: "11 НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 5,
    text: "12 НАУЧНО-ИСТОРИЧЕСКАЯ КОНФЕРЕНЦИЯ «ТЕПЛОХОД “АРМЕНИЯ”. ВСПОМНИТЬ ВСЕХ»",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 6,
    text: "13 НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 7,
    text: "14 НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 4,
    text: "15 НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 5,
    text: "16 НАУЧНО-ИСТОРИЧЕСКАЯ КОНФЕРЕНЦИЯ «ТЕПЛОХОД “АРМЕНИЯ”. ВСПОМНИТЬ ВСЕХ»",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 6,
    text: "17 НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 7,
    text: "18 НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
];

export default function News() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.news")}</title>
      </Head>
      <Wrapper>
        <section className={s.wr}>
          <header>
            <Title>{t("news.title")}</Title>
          </header>
          <main>
            {data.map((card, i, arr) => {
              return (
                <div key={i}>
                  {i % 18 === 0 && (
                    <Row>
                      <Card card={card} />
                      <Card card={arr[i + 1]} />
                      <Card card={arr[i + 2]} />
                      <Card card={arr[i + 3]} />
                    </Row>
                  )}
                  {i % 18 === 4 && (
                    <RowTall>
                      <Card card={card} />
                      <Card card={arr[i + 1]} />
                      <Card card={arr[i + 2]} />
                    </RowTall>
                  )}
                  {i % 18 === 7 && (
                    <>
                      <Row>
                        <Card card={card} />
                        <Card card={arr[i + 1]} />
                        <Card card={arr[i + 2]} />
                        <Card card={arr[i + 3]} />
                      </Row>
                      <Row>
                        <Card card={arr[i + 4]} />
                        <Card card={arr[i + 5]} />
                        <Card card={arr[i + 6]} />
                        <Card card={arr[i + 7]} />
                      </Row>
                    </>
                  )}
                  {i % 18 === 15 && (
                    <RowTall>
                      <Card card={card} />
                      <Card card={arr[i + 1]} />
                      <Card card={arr[i + 2]} />
                    </RowTall>
                  )}
                </div>
              );
            })}
          </main>
          <footer>
            <button>{t("news.button")}</button>
          </footer>
        </section>
      </Wrapper>
    </>
  );
}

const Card = ({ card }) => (
  <div className={s.card}>
    <div>
      <div className={s.img_wr}>
        <img src={card?.url} />
      </div>
      <ReactMarkdown>{card?.text}</ReactMarkdown>
    </div>
    <span>{card?.date}</span>
  </div>
);

const Row = ({ children }) => <div className={s.row}>{children}</div>;
const RowTall = ({ children }) => (
  <div className={cn(s.row, s.row_tall)}>{children}</div>
);
