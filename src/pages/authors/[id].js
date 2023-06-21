import { GET_ONE_AUTHOR } from "@/services/gqlService";
import BreadCrumbs from "@/shared/UI/BreadCrumbs";
import Error from "@/shared/UI/Error";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import { apiUrl } from "@/shared/constants/config";
import { routes } from "@/shared/constants/routes";
import s from "@/styles/pages/author/author.module.scss";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { CopyButton } from "@/shared/UI/CopyButton";
import { Skeleton } from "@mui/material";
import cn from "classnames";
import { ArticlesByRubric } from "@/components/Journal/IssueContent/IssueContent";
import { NewCart } from "@/components/NewCart";

export default function AuthorPage() {
  const router = useRouter();
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const { data, error } = useQuery(GET_ONE_AUTHOR, {
    variables: { slug: router.query.id, lang: language },
  });

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.authors")}</title>
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
                    <Link href={`/${routes.authors}`}>
                      {t("authors.item.editorial")}
                    </Link>
                    {data && (
                      <p className={s.bc_title}>
                        {data.authors.data[0]?.attributes.name}
                      </p>
                    )}
                  </BreadCrumbs>
                </header>
                <main>
                  {data ? (
                    <Content data={data.authors.data[0]?.attributes} />
                  ) : (
                    <div className={s.skeleton_wrapper}>
                      <Skeleton
                        className={s.skeleton}
                        sx={{ bgcolor: "grey.200" }}
                        animation="wave"
                      />
                      <Skeleton
                        className={s.skeleton}
                        sx={{ bgcolor: "grey.200" }}
                        animation="wave"
                      />
                    </div>
                  )}
                  <div className={s.title}>
                    {data?.authors.data[0]?.attributes.articles?.data && (
                      <Title>{t("authors.item.articles")}</Title>
                    )}
                    <hr />
                  </div>
                  <div className={s.articles}>
                    {data && (
                      <ArticlesByRubric
                        data={data?.authors.data[0]?.attributes.articles?.data}
                        journal=""
                      />
                    )}
                  </div>
                </main>
                <footer>
                  <div className={s.title}>
                    {data?.authors.data[0]?.attributes.news?.data && (
                      <Title>{t("authors.item.news")}</Title>
                    )}
                    <hr />
                  </div>
                  {data && (
                    <AuthorNews
                      data={data?.authors.data[0]?.attributes.news?.data}
                    />
                  )}
                </footer>
              </section>
            </Wrapper>
          </>
        )}
      </section>
    </>
  );
}

const Content = ({ data }) => {
  const { t } = useTranslation();
  return (
    <article className={s.content}>
      <div>
        <img src={apiUrl + data.photo.data.attributes.url} alt="Author" />
      </div>
      <div>
        <span>{t("authors.item.editor")}</span>
        <h1>{data.name}</h1>
        <div className={s.desc}>
          <ReactMarkdown>{data.description}</ReactMarkdown>
        </div>
        <div className={s.email}>
          <span>email:</span>
          <CopyButton>{data.email}</CopyButton>
        </div>
        <blockquote>
          <ReactMarkdown>{data.quote}</ReactMarkdown>
        </blockquote>
      </div>
    </article>
  );
};

const AuthorNews = ({ data }) => (
  <div className={s.news}>
    {data.map((item, i) => (
      <div key={i} data-aos="flip-right" data-aos-delay={50 * i}>
        <NewCart cart={item.attributes} />
      </div>
    ))}
  </div>
);
