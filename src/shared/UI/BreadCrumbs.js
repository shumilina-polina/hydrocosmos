import { colors, fonts } from "@/styles/variables/variables";
import { Breadcrumbs } from "@mui/material";
import styled from "styled-components";

const Nav = styled.div`
  & li {
    font-size: 14px;
    line-height: 17px;
    color: ${colors.black};
    opacity: 0.4;
    ${fonts.inter7}
  }
  & a {
    position: relative;
    line-height: 1;
    text-decoration: none;
    &:after {
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      height: 3px;
      background-color: rgba(0, 0, 0, 0.4);
      content: "";
      transition: width 0.3s ease-out;
    }
    &:hover:after {
      width: 100%;
    }
  }
  & .MuiBreadcrumbs-separator {
    margin: 0 30px;
  }
`;

const BreadCrumbs = ({ children }) => {
  return (
    <Nav>
      <Breadcrumbs separator=">">{children}</Breadcrumbs>
    </Nav>
  );
};

export default BreadCrumbs;
