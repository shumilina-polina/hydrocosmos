import styled from "styled-components";
import { breakpoints } from "@/styles/variables/variables";

const StyledD = styled.div`
  @media ${breakpoints.mobile} {
    display: none !important;
  }
`;
const StyledM = styled.div`
  display: none !important;
  @media ${breakpoints.mobile} {
    width: 100%;
    display: block !important;
  }
`;

export const DesktopContainer = ({ children }) => {
  return <StyledD>{children}</StyledD>;
};
export const MobileContainer = ({ children }) => {
  return <StyledM>{children}</StyledM>;
};
