import { apiUrl } from "@/shared/constants/config";
import { routes } from "@/shared/constants/routes";
import Authors from "@/shared/UI/Authors";
import { breakpoints, colors, fonts } from "@/styles/variables/variables";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";

export const IssueCart = ({ data, journal }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Wrapper>
        <main>
          <Link
            as={`/${routes.articles}/${data.slug}`}
            href={`/${routes.articles}/[id]`}
          >
            <Title>
              <ReactMarkdown>{data?.title}</ReactMarkdown>
            </Title>
          </Link>
          <Authors data={data?.authors.data} />
        </main>
        <Footer>
          <span>
            {t("journal.item.page")}. {data?.pdf_ru_page}
          </span>
          <a
            href={apiUrl + journal + "#page=" + data?.pdf_ru_page}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              {t(`journal.item.button-content`)}
              <span> -&gt;</span>
            </button>
          </a>
        </Footer>
      </Wrapper>
      <img src={apiUrl + data?.photo.data?.attributes.url} alt="Article" />
    </Box>
  );
};
const Title = styled.h4`
  ${fonts.inter7}
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  transition: color 0.3s;
  & ~ span {
    font-size: 18px;
    line-height: 25px;
  }
  @media ${breakpoints.laptop} {
    font-size: 20px;
    line-height: 24px;
  }
  &:hover {
    color: ${colors.cyanArticle};
  }
`;

const Box = styled.div`
  padding: 16px 0;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 51px;

  & > img {
    object-fit: cover;
    height: 285px;
    @media ${breakpoints.laptop} {
      height: 200px;
    }
  }
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 16px;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10%;
  font-size: 16px;
  line-height: 19px;
  & button {
    color: #0538bb;
    font-size: 16px;
    line-height: 19px;
    position: relative;
    text-decoration: none;
    &:after {
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #0538bb;
      content: "";
      transition: width 0.3s ease-out;
    }
    &:hover:after {
      width: 100%;
    }
    &:active {
      opacity: 0.6;
    }
  }
`;
