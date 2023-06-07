import { apiUrl } from "@/shared/constants/config";
import { routes } from "@/shared/constants/routes";
import { breakpoints, colors, fonts } from "@/styles/variables/variables";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const ReportCart = ({ cart }) => {
  const { t } = useTranslation();
  return (
    <Link
      as={`/${routes.reports}/${cart.slug}`}
      href={`/${routes.reports}/[id]`}
    >
      <Wrapper data-aos="flip-up">
        <div>
          <Image src={apiUrl + cart.photos.data[0].attributes.url} />
        </div>
        <Label>
          <Box>
            <span>
              {cart.journal.data && (
                <Link
                  as={`/${routes.journal}/${cart.journal.data.attributes.slug}`}
                  href={`/${routes.journal}/[id]`}
                >
                  {t("home.reports.figcaption")} №
                  {cart.journal.data.attributes.number}
                </Link>
              )}
            </span>
            |<span>{t("home.reports.type")}</span>
          </Box>
          <Title>{cart.title}</Title>
        </Label>
      </Wrapper>
    </Link>
  );
};

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
  text-align: right;
  padding-left: 5%;
  @media ${breakpoints.swiperLaptop} {
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
  & a {
    &:hover {
      text-decoration: underline;
    }
  }
  @media ${breakpoints.swiperLaptop} {
    gap: 9px;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 7px;
  }
`;
