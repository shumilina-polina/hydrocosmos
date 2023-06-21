import { ReportsBox } from "@/components/Index/Reports/ReportsBox";
import { GET_REPORTS } from "@/services/gqlService";
import Error from "@/shared/UI/Error";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import s from "@/styles/pages/report/reports.module.scss";
import { useQuery } from "@apollo/client";
import { Skeleton } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";
let total = 1;

export default function ReportsPage() {
  const {
    i18n: { language },
    t,
  } = useTranslation();
  
  const [start, setStart] = useState(0);
  const [reports, setReports] = useState([]);

  const { error } = useQuery(GET_REPORTS, {
    variables: {
      limit: 4,
      start: start,
      lang: language,
    },
    onCompleted: (data) => {
      setReports([...reports, ...data?.reports.data]);
      total = data.reports.meta.pagination.total;
    },
  });

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.reports")}</title>
      </Head>
      {error ? (
        <Error />
      ) : (
        <Wrapper>
          <section className={s.wr}>
            <header>
              <Title>{t("reports.title")}</Title>
            </header>
            <main>
              {reports.length ? (
                <ReportsBox data={reports} />
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
            </main>
            <footer>
              {reports.length > 0 && (
                <button
                  disabled={total <= reports.length}
                  onClick={() => {
                    setStart(start + 4);
                  }}
                >
                  {t("reports.button")}
                </button>
              )}
            </footer>
          </section>
        </Wrapper>
      )}
    </>
  );
}
