import { breakpoints, colors, fonts } from "@/styles/variables/variables";
import styled from "styled-components";

const StyledTitle = styled.h2`
  ${fonts.inter7}
  font-size: 48px;
  line-height: 58px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${colors.black};
  background-color: white;

  @media ${breakpoints.laptop} {
    font-size: 38px;
    line-height: 40px;
  }
  @media ${breakpoints.tablet} {
    font-size: 20px;
    line-height: 24px;
  }
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
