import css from "styled-jsx/css";

const sizes = {
  desktopWidth: "1190px",
  laptopWidth: "900px",
  mobileWidth: "440px",
};

export const breakpoints = {
  laptop: `(max-width: ${sizes.desktopWidth})`,
  tablet: `(max-width: ${sizes.laptopWidth})`,
  mobile: `(max-width: ${sizes.mobileWidth})`,
};

export const colors = {
  black: "#000000",
  white: "#fff",
  blueLight: "#cef2ff",
  cyan: "#6fd6e0",
  cyanArticle: "#65ccd6",
};

export const fonts = {
  inter4: css`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-style: normal;
  `,
  inter5: css`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-style: normal;
  `,
  inter6: css`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-style: normal;
  `,
  inter7: css`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-style: normal;
  `,
  montserrat4: css`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-style: normal;
  `,
  montserrat7: css`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-style: normal;
  `,
  roboto: css`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  `,
};
