import Wrapper from "@/shared/UI/Wrapper";
import Link from "next/link";
import s from "./header.module.scss";
import { pagesHeader } from "@/shared/constants/pages";
import { useTranslation } from "react-i18next";
import { CustomLink } from "@/shared/UI/CustomLink";
import SvgSelector from "@/shared/UI/SvgSelector";
import Burger from "./Burger";
import { links } from "@/shared/constants/links";
import { useMediaQuery, useScrollTrigger } from "@mui/material";
import React, { useState } from "react";
import cn from "classnames";
import Modal from "@/shared/UI/Modal";
import Search from "../Search/Search";
import { breakpoints } from "@/styles/variables/variables";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const isMobile = useMediaQuery(breakpoints.mobile);

  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const trigger = useScrollTrigger();

  return (
    <header className={cn(s.header, trigger && s.header_fix)}>
      <Wrapper>
        <div className={s.header_wrapper}>
          {isMobile ? (
            <Burger />
          ) : (
            <>
              <Link href={"/"} className={s.logo}>
                <img src="/assets/logo.svg" alt="hydrocosmos" />
              </Link>
              <nav className={s.nav}>
                {pagesHeader.map((page) => (
                  <CustomLink key={page.id} href={`/${page.path}`}>
                    {page[language]}
                  </CustomLink>
                ))}
              </nav>
              <div className={s.func}>
                <div className={s.buttons}>
                  <button
                    className={s.search}
                    onClick={() => setOpenSearch(true)}
                  >
                    <SvgSelector svg={"search"} />
                  </button>
                  <button
                    className={s.lang}
                    onClick={() =>
                      changeLanguage(language === "ru" ? "en" : "ru")
                    }
                  >
                    {language}
                  </button>
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
              </div>
            </>
          )}
        </div>
      </Wrapper>
      <Modal open={openSearch} setOpen={setOpenSearch}>
        <Search setOpen={setOpenSearch} />
      </Modal>
    </header>
  );
};

export default Header;
