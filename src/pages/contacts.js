import Form from "@/components/Index/Form/Form";
import SvgSelector from "@/shared/UI/SvgSelector";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import s from "@/styles/pages/contacts.module.scss";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.contacts")}</title>
      </Head>
      <Wrapper>
        <section className={s.wr}>
          <header>
            <Title>{t("contacts.title")}</Title>
          </header>
          <main>
            <ul>
              <a
                href="mailto:hydrocosmos@urc-rgs.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li data-aos="fade-left" data-aos-delay="50">
                  <SvgSelector svg={"contact-email"} />
                  <span>hydrocosmos@urc-rgs.ru</span>
                </li>
              </a>
              <a
                href="tel:+78123274505"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li data-aos="fade-left" data-aos-delay="100">
                  <SvgSelector svg={"contact-phone"} />
                  <span>8 (812) 327-45-05</span>
                </li>
              </a>
              <a
                href="https://yandex.ru/maps/-/CCUDBWbxKB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li data-aos="fade-left" data-aos-delay="150">
                  <SvgSelector svg={"contact-address"} />
                  <span>{t("contacts.address")}</span>
                </li>
              </a>
            </ul>
            <div>
              <ReactMarkdown>{t("contacts.text")}</ReactMarkdown>
            </div>
          </main>
        </section>
      </Wrapper>
      <Form />
    </>
  );
}
