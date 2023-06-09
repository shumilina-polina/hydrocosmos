import { GET_ONE_NEW } from "@/services/gqlService";
import BreadCrumbs from "@/shared/UI/BreadCrumbs";
import Date from "@/shared/UI/Date";
import Error from "@/shared/UI/Error";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import { apiUrl } from "@/shared/constants/config";
import { routes } from "@/shared/constants/routes";
import s from "@/styles/pages/new/new.module.scss";
import { useQuery } from "@apollo/client";
import cn from "classnames";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function New() {
  const router = useRouter();
  const { data, error } = useQuery(GET_ONE_NEW, {
    variables: { slug: router.query.id },
  });

  const { t } = useTranslation();

  useEffect(() => {
    window.document.querySelectorAll("main > div img").forEach((elem) => {
      console.log(elem);
      elem.setAttribute("src", apiUrl + elem?.attributes[0].nodeValue);
    });
  }, [data]);

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.news")}</title>
      </Head>

      <section className={s.wr}>
        {error ? (
          <Error />
        ) : (
          <>
            {data?.news.data[0].attributes.photo.data && (
              <img
                className={s.main_img}
                src={
                  apiUrl +
                  data.news.data[0].attributes.photo.data.attributes.url
                }
                alt="New"
              />
            )}
            <Wrapper>
              <header>
                <BreadCrumbs>
                  <Link href={"/"}>{t("pages.main")}</Link>
                  <Link href={"/" + routes.news}>{t("pages.news")}</Link>
                  {data && (
                    <ReactMarkdown className={s.bc_title}>
                      {data.news.data[0].attributes.title}
                    </ReactMarkdown>
                  )}
                </BreadCrumbs>
                <Title>
                  <ReactMarkdown>
                    {data?.news.data[0].attributes.title}
                  </ReactMarkdown>
                </Title>
                <Date format={"DD MMMM YYYY"}>
                  {data?.news.data[0].attributes.date}
                </Date>
              </header>
              <main>
                <div>
                  <ReactMarkdown>
                    {data?.news.data[0].attributes.description}
                  </ReactMarkdown>
                </div>
                <Members
                  data={data?.news.data[0].attributes.authors.data}
                  title={data?.news.data[0].attributes.authors_title}
                />
              </main>
            </Wrapper>
          </>
        )}
      </section>
    </>
  );
}

const Members = ({ data, title }) => {
  return (
    <article className={s.members}>
      <Title>{title}</Title>
      <ul>
        {data?.map((member) => (
          <Link
            key={member.id}
            as={`/${routes.authors}/${member.attributes.slug}`}
            href={`/${routes.authors}/[id]`}
          >
            <li>
              <h2>{member.attributes.name}</h2>
              <div>
                <img
                  src={apiUrl + member.attributes.photo.data.attributes.url}
                  alt={member.attributes.name}
                />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
};
