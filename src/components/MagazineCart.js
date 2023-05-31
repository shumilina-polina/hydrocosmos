import {
  breakpoints,
  colors,
  fonts,
  mixins,
} from "@/styles/variables/variables";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  padding: 16px 32px;
  z-index: 1;
  ${mixins.darkButton}
  opacity: 0;
  transition: opacity 0.5s, background-color 0.3s, border-color 0.3s;
  & > span {
    letter-spacing: normal;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  height: 500px;
  margin-bottom: 16px;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    transition: background-color 0.3s, backdrop-filter 0.3s;
  }
  &:hover {
    &:after {
      background-color: rgba($color: $black, $alpha: 0.17);
      backdrop-filter: blur(6px);
    }
    & ${Button} {
      opacity: 1;
    }
  }
  @media ${breakpoints.tablet} {
    height: 359px;
  }
`;
const Name = styled.span`
  ${fonts.inter7}
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 17px;
  color: #0563bb;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
const Release = styled.h3`
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.05em;
  margin-bottom: 18px;
  color: ${colors.gray};
  ${fonts.inter7}
  letter-spacing: 0.05em;
  text-transform: uppercase;
  @media ${breakpoints.tablet} {
    font-size: 20px;
    line-height: 24px;
  }
`;
const Date = styled.span`
  ${fonts.inter4}
  font-size: 14px;
  line-height: 17px;
  text-transform: none;
  letter-spacing: 0.03em;
  color: rgba($color: ${colors.black}, $alpha: 0.6);
`;

export const MagazineCart = ({ cart }) => {
  const { t } = useTranslation();

  return (
    <div>
      <ImageWrapper>
        <img src={cart.url} alt="Magazine" />
        <Button>
            {t("magazine.button")} <span>-&gt;</span>
        </Button>
      </ImageWrapper>
      <Name>{cart.name}</Name>
      <Release>
          {t("magazine.release")} №{cart.num}
      </Release>
      <Date>{cart.date}</Date>
    </div>
  );
};
