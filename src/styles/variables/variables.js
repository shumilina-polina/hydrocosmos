import css from "styled-jsx/css";

export const sizes = {
  desktopWidth: "1330px",
  laptopWidth: "900px",
  mobileWidth: "450px",
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
  gray: "#0d0e0e",
  grayLight: "#dedede",
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

export const mixins = {
  darkButton: css`
    padding: 16px 56px;
    border: 3px solid ${colors.white};
    border-radius: 32px;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: ${colors.white};
    transition: background-color 0.3s, border-color 0.3s;
    ${fonts.inter7}

    &:hover {
      background-color: ${colors.cyan};
      border-color: ${colors.cyan};
    }

    @media ${breakpoints.tablet} {
      border-width: 2px;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.05em;
    }
  `,
};
