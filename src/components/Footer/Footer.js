import Wrapper from "@/shared/UI/Wrapper/Wrapper";
import s from "./footer.module.scss";
import { pagesFooter } from "@/shared/constants/pages";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SvgSelector from "@/shared/UI/SvgSelector";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className={s.footer}>
      <Wrapper>
        <div className={s.footer_wrapper}>
          <Link href={"/"} className={s.logo}>
            <img src="assets/logo.svg" alt="hydrocosmos" />
          </Link>
          <nav>
            <ul>
              {pagesFooter.map((page) => (
                <li key={page.id}>
                  <Link href={`/${page.path}`}>{page[i18n.language]}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={s.mailing}>
            <div>
              <label htmlFor="mailing-input">
                <ReactMarkdown>{t("footer.email")}</ReactMarkdown>
              </label>
              <form>
                <input
                  maxLength={50}
                  id="mailing-input"
                  placeholder={t("footer.placeholder")}
                  name="email"
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
                <button type="submit">
                  <SvgSelector svg={"mailing"} />
                </button>
              </form>
            </div>
            <a
              href="https://pushkeen.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/logo-2.png" alt="Центр подводных исследований" />
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
