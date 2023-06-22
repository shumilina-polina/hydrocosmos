import { GET_AUTHORS } from "@/services/gqlService";
import Error from "@/shared/UI/Error";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import { apiUrl } from "@/shared/constants/config";
import { routes } from "@/shared/constants/routes";
import s from "@/styles/pages/author/authors.module.scss";
import { useQuery } from "@apollo/client";
import { Skeleton } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function AuthorsPage() {
  const {
    i18n: { language },
    t,
  } = useTranslation();
  const { data, error } = useQuery(GET_AUTHORS, {
    variables: { lang: language, limit: 10 },
  });

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.authors")}</title>
      </Head>
      {error ? (
        <Error />
      ) : (
        <Wrapper>
          <section className={s.wr}>
            <header>
              <Title>{t("authors.item.editorial")}</Title>
            </header>
            <main>
              <ul>
                {data ? (
                  data.authors.data.map((author, i) => (
                    <Author key={i} delay={i} data={author.attributes} />
                  ))
                ) : (
                  <>
                    <Skeleton
                      className={s.skeleton}
                      animation="wave"
                      sx={{ bgcolor: "grey.200" }}
                    />
                    <Skeleton
                      className={s.skeleton}
                      animation="wave"
                      sx={{ bgcolor: "grey.200" }}
                    />
                  </>
                )}
              </ul>
            </main>
          </section>
        </Wrapper>
      )}
    </>
  );
}

const Author = ({ data, delay }) => {
  const { t } = useTranslation();
  return (
    <Link
      as={`/${routes.authors}/${data.slug}`}
      href={`/${routes.authors}/[id]`}
    >
      <li data-aos="fade-left" data-aos-delay={70 * delay} className={s.card}>
        <div className={s.card_text}>
          <h3>{data.name}</h3>
          <span>
            {data.role && `${data.role}, `}
            {t("authors.author")}
          </span>
          <div>
            <ReactMarkdown>{data.description}</ReactMarkdown>
          </div>
        </div>
        <div className={s.card_image}>
          {data.photo.data && (
            <img src={apiUrl + data.photo.data.attributes.url} alt="Author" />
          )}
        </div>
      </li>
    </Link>
  );
};
