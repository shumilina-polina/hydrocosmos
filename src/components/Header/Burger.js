import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import cn from "classnames";
import { useEffect, useState } from "react";
import s from "./header.module.scss";
import { CustomLink } from "@/shared/UI/CustomLink";
import { pagesFooter } from "@/shared/constants/pages";
import { useTranslation } from "react-i18next";
import { links } from "@/shared/constants/links";
import Link from "next/link";

const Burger = ({}) => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const { changeLanguage, language } = i18n;

  useEffect(() => {
    window.document
      .getElementsByTagName("html")[0]
      .setAttribute("style", open ? "overflow: hidden" : "");
  }, [open]);

  const toggleDrawer = (_, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <>
      <Link href={"/"} className={s.logo}>
        <img src="/assets/logo.svg" alt="hydrocosmos" />
      </Link>
      <button
        onClick={() => setOpen(!open)}
        className={cn(s.burger, open ? s.burger_active : "")}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Drawer
        className="burger_menu"
        anchor={"top"}
        open={open}
        onClose={toggleDrawer("top", false)}
      >
        <Box
          sx={{ width: "auto" }}
          role="presentation"
          onClick={toggleDrawer("top", false)}
          onKeyDown={toggleDrawer("top", false)}
        >
          <List className={s.list}>
            <div className={s.lang_buttons}>
              <button
                className={s.lang}
                disabled={language === "ru"}
                onClick={() => changeLanguage("ru")}
              >
                ru
              </button>
              <span>/</span>
              <button
                className={s.lang}
                disabled={language === "en"}
                onClick={() => changeLanguage("en")}
              >
                en
              </button>
            </div>
            {pagesFooter.map((page) => (
              <ListItem key={page.id} disablePadding>
                <ListItemButton>
                  <CustomLink href={`/${page.path}`}>
                    <ListItemText
                      className={s.burger_text}
                      primary={page[i18n.language]}
                    />
                  </CustomLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <div className={s.rgs}>
            <a href={links.rgs} target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/logo-2.png"
                alt="Центр подводных исследований"
              />
            </a>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default Burger;
