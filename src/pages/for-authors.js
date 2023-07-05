import { useTranslation } from "react-i18next";
import Head from "next/head";
import Wrapper from "@/shared/UI/Wrapper";
import Title from "@/shared/UI/Title";
import SvgSelector from "@/shared/UI/SvgSelector";
import s from "@/styles/pages/for-authors.module.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Form from "@/components/Index/Form/Form";

const forAuthors = [
  {
    type: "pdf",
    size: "125",
    url: "Гидрокосмос_правила_оформления.pdf",
  },
  {
    type: "doc",
    size: "65",
    url: "Гидрокосмос_карточка_автора.docx",
  },
  {
    type: "doc",
    size: "50",
    url: "Гидрокосмос_лицензионный_договор.docx",
  },
];

export default function ForAuthors() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.for-authors")}</title>
      </Head>

      <Wrapper>
        <section className={s.wr}>
          <header>
            <Title>
              <ReactMarkdown>{t("for-authors.title")}</ReactMarkdown>
            </Title>
            <div>
              <ReactMarkdown>{t("for-authors.label")}</ReactMarkdown>
            </div>
          </header>
          <main>
            <ul>
              {forAuthors.map((item, i) => (
                <li key={i} data-aos="fade-left" data-aos-delay={i * 100}>
                  <div className={s.left}>
                    <div>
                      <span>{i + 1}.</span>
                    </div>
                    <h3>
                      <ReactMarkdown>
                        {t(`for-authors.item-${i + 1}`)}
                      </ReactMarkdown>
                    </h3>
                  </div>
                  <div className={s.right}>
                    <SvgSelector svg={item.type} />
                    <span>
                      {item.size} {t("for-authors.mb")}
                    </span>
                    <a
                      download={true}
                      href={"/assets/documents/" + item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>
                        <SvgSelector svg={"download"} />
                      </button>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </section>
      </Wrapper>
      {/* <Form /> */}
    </>
  );
}
