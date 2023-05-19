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
import { pagesHeader } from "@/shared/constants/pages";
import { useTranslation } from "react-i18next";

const Burger = ({}) => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    window.document
      .getElementsByTagName("html")[0]
      .setAttribute("style", open ? "overflow: hidden" : "");
  }, [open]);

  const toggleDrawer = (open) => (event) => {
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
          <List>
            {pagesHeader.map((page) => (
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
        </Box>
      </Drawer>
    </>
  );
};

export default Burger;
