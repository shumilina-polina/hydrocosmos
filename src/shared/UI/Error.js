import { breakpoints, colors, fonts } from "@/styles/variables/variables";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { useTranslation } from "react-i18next";

const Box = styled.h2`
  margin: 50px;
  ${fonts.inter4}
  font-size: 30px;
  line-height: 50px;
  letter-spacing: normal;
  text-transform: uppercase;
  opacity: 0.6;
  color: ${colors.black};
  text-align: center;

  @media ${breakpoints.laptop} {
    font-size: 20px;
    line-height: 40px;
  }
  @media ${breakpoints.tablet} {
    font-size: 20px;
    line-height: 24px;
    margin: 30px 0;
  }
`;

const Error = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Box>{t("error")}</Box>
    </Wrapper>
  );
};

export default Error;
