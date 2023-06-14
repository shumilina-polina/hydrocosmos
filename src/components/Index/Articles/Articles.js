import s from "./articles.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Skeleton, useMediaQuery } from "@mui/material";
import { breakpoints } from "@/styles/variables/variables";
import Authors from "@/shared/UI/Authors";
import { apiUrl } from "@/shared/constants/config";
import Link from "next/link";
import { routes } from "@/shared/constants/routes";

const Articles = ({ data }) => {
  const isTablet = useMediaQuery(breakpoints.tablet);
  const { t } = useTranslation();

  return (
    <section className={s.wr}>
      <Wrapper>
        <header className={s.wr_header}>
          <h2>{t("home.articles.title")}</h2>
          <hr />
        </header>
        <main>
          <div className={s.content}>
            {data ? (
              <>
                {data[0].attributes.photo && (
                  <article data-aos="zoom-in">
                    <img
                      src={
                        apiUrl + data[0].attributes.photo.data.attributes.url
                      }
                    />
                    <hr />
                  </article>
                )}
                {data.map(
                  (article, i) =>
                    ((isTablet && i < 3) || !isTablet) && (
                      <Article
                        t={t}
                        key={article.id}
                        data={article.attributes}
                        index={i}
                      />
                    )
                )}
              </>
            ) : (
              [1, 2, 3, 4].map((elem) => (
                <article key={elem}>
                  <Skeleton
                    className={s.skeleton}
                    sx={{ bgcolor: "grey.200" }}
                    animation="wave"
                  />
                </article>
              ))
            )}
          </div>
        </main>
      </Wrapper>
    </section>
  );
};

const Article = ({ data, index, t }) => {
  return (
    <article
      data-aos="fade-up"
      data-aos-duration={500}
      data-aos-delay={`${50 * index}`}
      className={s[`article_${index}`]}
    >
      <header>
        <span>
          {data.journal && (
            <>
              {t("home.articles.release")} №
              {data.journal.data.attributes.number}
            </>
          )}
        </span>
        |<span>{data.rubric}</span>
      </header>
      <main>
        <Link
          as={`/${routes.articles}/${data.slug}`}
          href={`/${routes.articles}/[id]`}
        >
          <ReactMarkdown>{data.title}</ReactMarkdown>
        </Link>
      </main>
      <footer>
        <Authors data={data.authors?.data} />
      </footer>
      {Boolean(index % 2) && <hr />}
    </article>
  );
};

export default Articles;
