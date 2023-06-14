import Issue from "@/components/Journal/Issue/Issue";
import IssueContent from "@/components/Journal/IssueContent/IssueContent";
import { GET_ONE_JOURNAL } from "@/services/gqlService";
import BreadCrumbs from "@/shared/UI/BreadCrumbs";
import Error from "@/shared/UI/Error";
import Wrapper from "@/shared/UI/Wrapper";
import { routes } from "@/shared/constants/routes";
import s from "@/styles/pages/journal/journal.module.scss";
import { useQuery } from "@apollo/client";
import { Skeleton } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Journal() {
  const router = useRouter();
  const { data, error } = useQuery(GET_ONE_JOURNAL, {
    variables: { slug: router.query.id },
  });

  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.journal")}</title>
      </Head>
      <Wrapper>
        <section className={s.wr}>
          <header>
            <BreadCrumbs>
              <Link href={"/" + routes.journal}>{t("pages.journal")}</Link>
              {data && (
                <span>
                  {t("journal.release")} №
                  {data.journals.data[0]?.attributes.number}
                </span>
              )}
            </BreadCrumbs>
          </header>
          {error ? (
            <Error />
          ) : (
            <>
              <main>
                <Issue data={data?.journals.data[0]?.attributes} />
                <section className={s.about}>
                  <header>
                    <h2>{t("journal.item.about")}</h2>
                    <hr />
                  </header>
                  {data ? (
                    <main>
                      <ReactMarkdown>
                        {data.journals.data[0]?.attributes.about}
                      </ReactMarkdown>
                    </main>
                  ) : (
                    <Skeleton
                      className={s.skeleton_about}
                      sx={{ bgcolor: "grey.200" }}
                      animation="wave"
                    />
                  )}
                </section>
              </main>
              <footer>
                {data && (
                  <IssueContent data={data.journals.data[0]?.attributes} />
                )}
              </footer>
            </>
          )}
        </section>
      </Wrapper>
    </>
  );
}
