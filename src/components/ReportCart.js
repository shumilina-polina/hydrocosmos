import { breakpoints, colors, fonts } from "@/styles/variables/variables";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Label = styled.figcaption`
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
  position: absolute;
  bottom: 24px;
  right: 23px;
  color: ${colors.white};
  @media ${breakpoints.swiperLaptop} {
    bottom: 13px;
    right: 13px;
  }
  @media ${breakpoints.mobile} {
    opacity: 1;
  }
`;

const Wrapper = styled.figure`
  position: relative;
  &:first-child {
    grid-row-start: 1;
    grid-row-end: 3;
  }
  &:hover {
    &::after,
    ${Label} {
      opacity: 1;
    }
  }
  &::after {
    transition: opacity 0.3s;
    opacity: 0;
    pointer-events: none;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    @media ${breakpoints.mobile} {
      opacity: 1;
    }
  }
`;
const Image = styled.img`
  user-select: none;
  min-width: 512px;
  height: 100%;
  @media ${breakpoints.swiperLaptop} {
    min-width: 100%;
    height: auto;
  }
`;

const Title = styled.h3`
  ${fonts.inter7}
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${colors.white};
  @media ${breakpoints.swiperLaptop} {
    text-align: right;
    font-size: 18px;
    line-height: 22px;
  }
`;
const Box = styled.div`
  margin-bottom: 13px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${colors.cyanArticle};
  @media ${breakpoints.swiperLaptop} {
    gap: 9px;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 7px;
  }
`;

export const ReportCart = ({ cart }) => {
  const { t } = useTranslation();
  return (
    <Wrapper data-aos="flip-up">
      <div>
        <Image src={cart.url} />
      </div>
      <Label>
        <Box>
          <span>
            {t("home.reports.figcaption")} №{cart.num}
          </span>
          |<span>{cart.type}</span>
        </Box>
        <Title>{cart.title}</Title>
      </Label>
    </Wrapper>
  );
};
