import s from "./manifest.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper/Wrapper";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Manifest = () => {
  const { t } = useTranslation();

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.manifest.title")}</h2>
        </header>
        <main>
          <ReactMarkdown children={{ type: "html", value: "<span>" }}>
            {t("home.manifest.main")}
          </ReactMarkdown>
        </main>
        <footer>
          <ReactMarkdown>{t("home.manifest.footer.text")}</ReactMarkdown>
          <br />
          <button>{t("home.manifest.footer.button")}</button>
        </footer>
      </Wrapper>
    </section>
  );
};

export default Manifest;
