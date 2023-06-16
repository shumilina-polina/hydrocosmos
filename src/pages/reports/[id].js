import ReportSlider from "@/components/ReportSlider/ReportSlider";
import { GET_ONE_REPORT } from "@/services/gqlService";
import BreadCrumbs from "@/shared/UI/BreadCrumbs";
import Error from "@/shared/UI/Error";
import Modal from "@/shared/UI/Modal";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import { apiUrl } from "@/shared/constants/config";
import { routes } from "@/shared/constants/routes";
import s from "@/styles/pages/report/report.module.scss";
import { useQuery } from "@apollo/client";
import { Skeleton } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ReportPage() {
  const router = useRouter();
  const { data, error } = useQuery(GET_ONE_REPORT, {
    variables: { slug: router.query.id },
  });

  const [openModal, setOpenModal] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.reports")}</title>
      </Head>

      <Wrapper>
        <section className={s.wr}>
          {error ? (
            <Error />
          ) : (
            <>
              <header>
                <BreadCrumbs>
                  <Link href={"/"}>{t("pages.main")}</Link>
                  <Link href={"/" + routes.reports}>{t("pages.reports")}</Link>
                  {data && (
                    <ReactMarkdown className={s.bc_title}>
                      {data.reports.data[0]?.attributes.title}
                    </ReactMarkdown>
                  )}
                </BreadCrumbs>
              </header>
              <main>
                {data ? (
                  <>
                    <Content t={t} data={data.reports.data[0]?.attributes} />
                    <div
                      onClick={() => {
                        setOpenModal(true);
                      }}
                    >
                      <ReportSlider
                        data={data.reports.data[0]?.attributes.photos?.data}
                      />
                    </div>
                    <Modal
                      open={openModal}
                      className={"report-modal"}
                      setOpen={setOpenModal}
                    >
                      <div className={"modal_box"}>
                        <ReportSlider
                          modal={true}
                          data={data.reports.data[0]?.attributes.photos?.data}
                        />
                      </div>
                    </Modal>
                  </>
                ) : (
                  <div className={s.skeleton_wrapper}>
                    <div>
                      <Skeleton
                        className={s.skeleton}
                        sx={{ bgcolor: "grey.200" }}
                        animation="wave"
                      />
                      <div>
                        <Skeleton
                          variant="text"
                          sx={{ bgcolor: "grey.200" }}
                          animation="wave"
                        />
                        <Skeleton
                          variant="text"
                          sx={{ bgcolor: "grey.200" }}
                          animation="wave"
                        />
                      </div>
                    </div>
                    <Skeleton
                      className={s.skeleton}
                      sx={{ bgcolor: "grey.200" }}
                      animation="wave"
                    />
                  </div>
                )}
              </main>
              <footer>
                <a
                  href={
                    apiUrl +
                    data?.reports.data[0]?.attributes.journal.data?.attributes
                      .pdf_ru.data?.attributes.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    {t(`journal.item.button`)}
                    <span> &#40;rus&#41; -&gt;</span>
                  </button>
                </a>
                <a
                  href={
                    apiUrl +
                    data?.reports.data[0]?.attributes.journal.data?.attributes
                      .pdf_en.data?.attributes.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    {t(`journal.item.button`)}
                    <span> &#40;eng&#41; -&gt;</span>
                  </button>
                </a>
              </footer>
            </>
          )}
        </section>
      </Wrapper>
    </>
  );
}

const Content = ({ data, t }) => {
  return (
    <div className={s.content}>
      <div>
        {data?.journal.data && (
          <>
            <Link
              as={`/${routes.journal}/${data.journal.data.attributes.slug}`}
              href={`/${routes.journal}/[id]`}
            >
              {t("home.reports.figcaption")} №
              {data.journal.data.attributes.number}
            </Link>
            |
          </>
        )}
        <span>{t("home.reports.type")}</span>
      </div>
      <Title>
        <ReactMarkdown>{data.title}</ReactMarkdown>
      </Title>
    </div>
  );
};
