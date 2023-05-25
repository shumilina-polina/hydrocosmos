import SvgSelector from "@/shared/UI/SvgSelector";
import { breakpoints, colors } from "@/styles/variables/variables";

import styled from "styled-components";

const ButtonsStyled = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20%;
  @media ${breakpoints.mobile} {
    padding: 0;
    width: 96px;
    right: 0;
  }
`;
const ButtonStyled = styled.button`
  z-index: 10;
  padding: 15px 19px 0;
  &:last-child {
    transform: scale(-1, 1);
  }
  & path {
    stroke: ${colors.black};
  }
  &:hover {
    & path {
      stroke-opacity: 1;
    }
  }
`;

export const Buttons = ({ swiperRef }) => (
  <ButtonsStyled>
    <ButtonStyled onClick={() => swiperRef.current?.slidePrev()}>
      <SvgSelector svg={"slider-arrow"} />
    </ButtonStyled>
    <ButtonStyled onClick={() => swiperRef.current?.slideNext()}>
      <SvgSelector svg={"slider-arrow"} />
    </ButtonStyled>
  </ButtonsStyled>
);
