import Issue from "@/components/Journal/Issue/Issue";
import IssueContent from "@/components/Journal/IssueContent/IssueContent";
import BreadCrumbs from "@/shared/UI/BreadCrumbs";
import SvgSelector from "@/shared/UI/SvgSelector";
import Wrapper from "@/shared/UI/Wrapper";
import { routes } from "@/shared/constants/routes";
import s from "@/styles/pages/journal/journal.module.scss";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function Journal() {
  const router = useRouter();
  const { id } = router.query;
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
              <span>Выпуск №3</span>
            </BreadCrumbs>
          </header>
          <main>
            <Issue />
            <section className={s.about}>
              <header>
                <h2>{t("journal.item.about")}</h2>
                <hr />
              </header>
              <main>
                <p>
                  Цель исследования — определить круг жанров малой прозы, к
                  которым обращался М. Н. Альбов на раннем этапе. В статье
                  рассмотрены жанры малой прозы: очерк, эскиз, фрагмент,
                  записки, рассказ, — в том варианте, как они представлены
                  преимущественно в раннем творчестве писателя. Показано, что
                  тенденция к жанровому синтезу проявилась не только в крупных
                  жанрах, в творчестве классиков XIX века, но и в малой прозе
                  писателей так называемого «второго ряда», к которым относят и
                  М. Н. Альбова.
                </p>
                <p>
                  Научная новизна работы заключается в подходе к изучению
                  произведений малой прозы М. Н. Альбова с точки зрения ее
                  жанрового своеобразия, выявлена оригинальная черта писателя —
                  наличие жанровых подзаголовков. В результате в малой прозе М.
                  Н. Альбова выявлен синтез жанров психологического рассказа и
                  физиологического очерка.
                </p>
              </main>
            </section>
          </main>
          <footer>
            <IssueContent />
          </footer>
        </section>
      </Wrapper>
    </>
  );
}
