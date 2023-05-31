import { ReportsBox } from "@/components/Index/Reports/ReportsBox";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import s from "@/styles/pages/reports.module.scss";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    title: "1 Крупнейший минеральный водоём Европы — озеро Эльтон",
    num: "3",
    type: "репортаж",
    url: "/assets/test/reports-1.jpg",
  },
  {
    id: 2,
    title: "2 горное озеро",
    num: "3",
    type: "репортаж",
    url: "/assets/test/reports-2.jpg",
  },
  {
    id: 3,
    title: "3 Раннее утро у маяка",
    num: "3",
    type: "репортаж",
    url: "/assets/test/reports-1.jpg",
  },
  {
    id: 4,
    title: "4 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "/assets/test/reports-1.jpg",
  },
  {
    id: 5,
    title: "5 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "/assets/test/reports-2.jpg",
  },
  {
    id: 6,
    title: "6 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "/assets/test/reports-2.jpg",
  },
];

export default function ReportsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.reports")}</title>
      </Head>
      <Wrapper>
        <section className={s.wr}>
          <header>
            <Title>{t("reports.title")}</Title>
          </header>
          <main>{data && <ReportsBox data={data} />}</main>
          <footer>
            <button>{t("reports.button")}</button>
          </footer>
        </section>
      </Wrapper>
    </>
  );
}
