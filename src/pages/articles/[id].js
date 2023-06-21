import { GET_ARTICLES_BY_RUBRIC, GET_ONE_ARTICLE } from "@/services/gqlService";
import BreadCrumbs from "@/shared/UI/BreadCrumbs";
import Error from "@/shared/UI/Error";
import { Theme } from "@/shared/UI/Theme";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import { apiUrl } from "@/shared/constants/config";
import { routes } from "@/shared/constants/routes";
import s from "@/styles/pages/article.module.scss";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { CopyButton } from "@/shared/UI/CopyButton";
import styled from "styled-components";
import { breakpoints, mixins } from "@/styles/variables/variables";
import Authors from "@/shared/UI/Authors";
import Articles from "@/components/Index/Articles/Articles";
import { Skeleton } from "@mui/material";
import cn from "classnames";

export default function ArticlePage() {
  const router = useRouter();
  const {
    i18n: { language },
    t,
  } = useTranslation();
  const { data, error } = useQuery(GET_ONE_ARTICLE, {
    variables: { slug: router.query.id, lang: language },
  });

  const { data: dataByRubric } = useQuery(GET_ARTICLES_BY_RUBRIC, {
    skip: data ? false : true,
    variables: {
      rubric: data?.articles.data[0]?.attributes.rubric,
      noSlug: router.query.id,
      lang: language,
    },
  });

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.articles")}</title>
      </Head>

      <section className={s.wr}>
        {error ? (
          <Error />
        ) : (
          <>
            <Wrapper>
              <section className={s.main}>
                <header>
                  <BreadCrumbs>
                    <Link
                      as={`/${routes.journal}/${data?.articles.data[0]?.attributes.journal.data?.attributes.slug}`}
                      href={`/${routes.journal}/[id]`}
                    >
                      {t("home.articles.release")} №
                      {
                        data?.articles.data[0]?.attributes.journal.data
                          .attributes.number
                      }
                    </Link>
                    {data && (
                      <ReactMarkdown className={s.bc_title}>
                        {data.articles.data[0]?.attributes.title}
                      </ReactMarkdown>
                    )}
                  </BreadCrumbs>
                </header>
                <main>
                  {data ? (
                    <>
                      <div>
                        <Theme>
                          {t("home.articles.release")} №
                          {
                            data.articles.data[0]?.attributes.journal.data
                              .attributes.number
                          }
                          <span>|</span>
                          {data.articles.data[0]?.attributes.rubric}
                        </Theme>
                        <Title>
                          <ReactMarkdown>
                            {data?.articles.data[0]?.attributes.title}
                          </ReactMarkdown>
                        </Title>
                      </div>
                      {data.articles.data[0]?.attributes.photo?.data && (
                        <img
                          src={
                            apiUrl +
                            data?.articles.data[0]?.attributes.photo.data
                              .attributes.url
                          }
                          alt="Article"
                        />
                      )}
                    </>
                  ) : (
                    <>
                      <Skeleton
                        animation="wave"
                        className={s.skeleton}
                        sx={{ bgcolor: "grey.200" }}
                      />
                      <Skeleton
                        animation="wave"
                        className={s.skeleton}
                        sx={{ bgcolor: "grey.200" }}
                      />
                    </>
                  )}
                </main>
                <footer>
                  <ul>
                    <li>
                      <span>{t("articles.index")}: </span>
                      <CopyButton>
                        {data?.articles.data[0]?.attributes.index_DOI}
                      </CopyButton>
                    </li>
                    <li>
                      <span>{t("articles.link")}: </span>
                      <CopyButton>
                        {data?.articles.data[0]?.attributes.quotation_link}
                      </CopyButton>
                    </li>
                  </ul>
                  <div className={s.buttons}>
                    <a
                      href={
                        apiUrl +
                        data?.articles.data[0]?.attributes.journal.data
                          .attributes.pdf_ru.data?.attributes.url +
                        "#page=" +
                        data?.articles.data[0]?.attributes.pdf_ru_page
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>
                        {t(`articles.button`)}
                        <span> pdf &#40;rus&#41; -&gt;</span>
                      </button>
                    </a>
                    <a
                      href={
                        apiUrl +
                        data?.articles.data[0]?.attributes.journal.data
                          .attributes.pdf_en.data?.attributes.url +
                        "#page=" +
                        data?.articles.data[0]?.attributes.pdf_en_page
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>
                        {t(`articles.button`)}
                        <span> pdf &#40;eng&#41; -&gt;</span>
                      </button>
                    </a>
                  </div>
                </footer>
              </section>
              <section className={s.annotation}>
                <Header>
                  <Title>{t("articles.annotation")}</Title>
                  <hr />
                </Header>
                <main>
                  {data ? (
                    <ReactMarkdown>
                      {data.articles.data[0]?.attributes.annotation}
                    </ReactMarkdown>
                  ) : (
                    <Skeleton
                      animation="wave"
                      className={s.skeleton}
                      sx={{ bgcolor: "grey.200" }}
                    />
                  )}
                </main>
              </section>
              <section className={s.keywords}>
                <Header>
                  <Title>{t("articles.keywords")}</Title>
                  <hr />
                </Header>
                <main>
                  <ul>
                    {data
                      ? data.articles.data[0]?.attributes.keywords
                          .split(", ")
                          .map((word, i) => (
                            <li
                              data-aos="zoom-in-up"
                              data-aos-delay={40 * i}
                              key={i}
                              className={s.word}
                            >
                              {word}
                            </li>
                          ))
                      : [1, 2, 3, 4, 5].map((word) => (
                          <li key={word}>
                            <Skeleton
                              animation="wave"
                              className={cn(s.skeleton, s.skeleton_keywords)}
                              sx={{ bgcolor: "grey.200" }}
                            />
                          </li>
                        ))}
                  </ul>
                </main>
              </section>
              <section className={s.authors}>
                <Header>
                  <Title>{t("articles.authors")}</Title>
                  <hr />
                </Header>
                <main>
                  {data ? (
                    <Authors
                      data={data.articles.data[0]?.attributes.authors.data}
                    />
                  ) : (
                    <Skeleton
                      animation="wave"
                      className={cn(s.skeleton, s.skeleton_authors)}
                      sx={{ bgcolor: "grey.200" }}
                    />
                  )}
                </main>
              </section>
              <section className={s.rubric}>
                {dataByRubric?.articles.data.length > 0 && (
                  <Header>
                    <Title>{t("articles.read")}</Title>
                    <hr />
                  </Header>
                )}
                <main>{<Articles data={dataByRubric?.articles.data} />}</main>
              </section>
            </Wrapper>
          </>
        )}
      </section>
    </>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  @media ${breakpoints.tablet} {
    margin-bottom: 20px;
  }
  & h2 {
    ${mixins.title}
    font-size: 32px;
    line-height: 39px;
  }
`;
