import { NewCart } from "@/components/NewCart";
import { GET_NEWS } from "@/services/gqlService";
import Error from "@/shared/UI/Error";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import s from "@/styles/pages/new/news.module.scss";
import { breakpoints } from "@/styles/variables/variables";
import { useQuery } from "@apollo/client";
import { Skeleton, useMediaQuery } from "@mui/material";
import cn from "classnames";
import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";
let total = 1;

export default function NewsPage() {
  const {
    i18n: { language },
    t,
  } = useTranslation();
  const [start, setStart] = useState(0);
  const [news, setNews] = useState([]);
  const isMobile = useMediaQuery(breakpoints.mobile);

  const { error } = useQuery(GET_NEWS, {
    variables: {
      limit: 11,
      start: start,
      lang: language,
    },
    onCompleted: (data) => {
      setNews([...news, ...data?.news.data]);
      total = data.news.meta.pagination.total;
    },
  });

  const renderGrid = (isMobile) => {
    return news.map((cart, i, arr) =>
      !isMobile ? (
        <div key={i}>
          {i % 11 === 0 && (
            <Row>
              <NewCart cart={cart.attributes} />
              {arr[i + 1] && <NewCart cart={arr[i + 1].attributes} />}
              {arr[i + 2] && <NewCart cart={arr[i + 2].attributes} />}
              {arr[i + 3] && <NewCart cart={arr[i + 3].attributes} />}
            </Row>
          )}
          {i % 11 === 4 && (
            <RowTall>
              <NewCart cart={cart.attributes} />
              {arr[i + 1] && <NewCart cart={arr[i + 1].attributes} />}
              {arr[i + 2] && <NewCart cart={arr[i + 2].attributes} />}
            </RowTall>
          )}
          {i % 11 === 7 && (
            <Row>
              <NewCart cart={cart.attributes} />
              {arr[i + 1] && <NewCart cart={arr[i + 1].attributes} />}
              {arr[i + 2] && <NewCart cart={arr[i + 2].attributes} />}
              {arr[i + 3] && <NewCart cart={arr[i + 3].attributes} />}
            </Row>
          )}
        </div>
      ) : (
        <NewCart key={i + "f"} cart={cart.attributes} />
      )
    );
  };

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.news")}</title>
      </Head>
      {error ? (
        <Error />
      ) : (
        <Wrapper>
          <section className={s.wr}>
            <header>
              <Title>{t("news.title")}</Title>
            </header>
            <main>
              {news.length > 0
                ? renderGrid(isMobile)
                : [1, 2].map((elem) => (
                    <Row key={elem + "s"}>
                      <Skeleton
                        className={s.skeleton}
                        sx={{ bgcolor: "grey.200" }}
                        animation="wave"
                      />
                    </Row>
                  ))}
            </main>
            <footer>
              <button
                disabled={total <= news.length}
                onClick={() => {
                  setStart(start + 11);
                }}
              >
                {t("news.button")}
              </button>
            </footer>
          </section>
        </Wrapper>
      )}
    </>
  );
}

const Row = ({ children }) => <div className={s.row}>{children}</div>;
const RowTall = ({ children }) => (
  <div className={cn(s.row, s.row_tall)}>{children}</div>
);
