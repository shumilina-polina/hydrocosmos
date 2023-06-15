import { breakpoints, colors, fonts } from "@/styles/variables/variables";
import styled from "styled-components";

export const Theme = styled.h3`
  ${fonts.inter7}
  color: ${colors.cyanArticle};
  margin-bottom: 32px;
  font-size: 32px;
  line-height: 39px;
  text-transform: uppercase;
  @media ${breakpoints.laptop} {
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  @media ${breakpoints.tablet} {
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;
