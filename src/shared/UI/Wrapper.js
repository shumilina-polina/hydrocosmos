import { breakpoints } from "@/styles/variables/variables";
import styled from "styled-components";

const Styled = styled.div`
  max-width: 1180px;
  height: 100%;
  margin: auto;
  padding: 0;
  @media ${breakpoints.laptop} {
    max-width: 95%;
  }
`;

const Wrapper = ({ children }) => {
  return <Styled>{children}</Styled>;
};

export default Wrapper;
