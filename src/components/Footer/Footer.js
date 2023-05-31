import s from "./footer.module.scss";
import { pagesFooter } from "@/shared/constants/pages";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SvgSelector from "@/shared/UI/SvgSelector";
import Wrapper from "@/shared/UI/Wrapper";
import { links } from "@/shared/constants/links";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className={s.footer}>
      <Wrapper>
        <div className={s.footer_wrapper}>
          <Link href={"/"} className={s.logo}>
            <img src="/assets/logo.svg" alt="hydrocosmos" />
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
          <div className={s.footer_bottom}>
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
                  required={true}
                />
                <button type="submit">
                  <SvgSelector svg={"mailing"} />
                </button>
              </form>
            </div>
            <a
              className={s.rgs}
              href={links.rgs}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/logo-2.png"
                alt="Центр подводных исследований"
              />
            </a>
            <a
              className={s.policy}
              href="https://pushkeen.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              Политика защиты и обработки персональных данных
            </a>
            <ul className={s.social}>
              <li>
                <a href={links.vk} target="_blank" rel="noopener noreferrer">
                  <SvgSelector svg={"vk"} />
                </a>
              </li>
              <li>
                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgSelector svg={"youtube"} />
                </a>
              </li>
              <li>
                <a href={links.dzen} target="_blank" rel="noopener noreferrer">
                  <SvgSelector svg={"dzen"} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
