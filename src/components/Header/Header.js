import Wrapper from "@/shared/UI/Wrapper";
import Link from "next/link";
import s from "./header.module.scss";
import { pagesHeader } from "@/shared/constants/pages";
import { useTranslation } from "react-i18next";
import { CustomLink } from "@/shared/UI/CustomLink";
import SvgSelector from "@/shared/UI/SvgSelector";
import { DesktopContainer, MobileContainer } from "@/shared/UI/Containers";
import Burger from "./Burger";
import { links } from "@/shared/constants/links";

const Header = () => {
  const { i18n } = useTranslation();
  const { changeLanguage, language } = i18n;

  return (
    <header className={s.header}>
      <Wrapper>
        <div className={s.header_wrapper}>
          <Link href={"/"} className={s.logo}>
            <img src="assets/logo.svg" alt="hydrocosmos" />
          </Link>
          <DesktopContainer>
            <nav className={s.nav}>
              {pagesHeader.map((page) => (
                <CustomLink key={page.id} href={`/${page.path}`}>
                  {page[language]}
                </CustomLink>
              ))}
            </nav>
            <div className={s.func}>
              <div className={s.buttons}>
                <button className={s.search}>
                  <SvgSelector svg={"search"} />
                </button>
                <button
                  className={s.lang}
                  onClick={() =>
                    changeLanguage(language === "ru" ? "en" : "ru")
                  }
                >
                  {i18n.language}
                </button>
              </div>
              <a
                href={links.rgs}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/logo-2.png"
                  alt="Центр подводных исследований"
                />
              </a>
            </div>
          </DesktopContainer>
          <MobileContainer>
            <Burger />
          </MobileContainer>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
