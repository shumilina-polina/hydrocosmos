import s from "./manifest.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { routes } from "@/shared/constants/routes";
import Link from "next/link";

const Manifest = () => {
  const { t } = useTranslation();

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.manifest.title")}</h2>
        </header>
        <main data-aos="fade-zoom-in" data-aos-duration={1000}>
          <span>
            <ReactMarkdown>{t("home.manifest.main")}</ReactMarkdown>
          </span>
        </main>
        <footer data-aos="fade-zoom-in" data-aos-duration={1000}>
          <ReactMarkdown>{t("home.manifest.footer.text")}</ReactMarkdown>
          <Link href={"/" + routes.manifest}>
            <button>{t("home.manifest.footer.button")}</button>
          </Link>
        </footer>
      </Wrapper>
    </section>
  );
};

export default Manifest;
