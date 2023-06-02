import Authors from "@/shared/UI/Authors";
import { breakpoints, fonts } from "@/styles/variables/variables";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const authors = [
  {
    id: 1,
    name: "А.М. Ярков",
    link: "https://pushkeen.ru",
  },
  {
    id: 2,
    name: "С.А. Бычков",
    link: "https://pushkeen.ru",
  },
  {
    id: 3,
    name: "А.Ю. Таракановский",
    link: "https://pushkeen.ru",
  },
];

const Box = styled.div`
  padding: 16px 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 51px;
  & > img {
    height: 253px;
    object-fit: cover;
    @media ${breakpoints.laptop} {
      height: 200px;
    }
  }
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Title = styled.h4`
  ${fonts.inter7}
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  & ~ span {
    font-size: 18px;
    line-height: 25px;
  }
  @media ${breakpoints.laptop} {
    font-size: 20px;
    line-height: 24px;
  }
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 21px;
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  @media ${breakpoints.laptop} {
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10%;
  font-size: 16px;
  line-height: 19px;
  & > span {
    opacity: 0.6;
  }
  & > button {
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

export const IssueCart = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Wrapper>
        <header>
          <Title>УПРАВЛЕНИЕ РИСКАМИ ПРИ ВОДОЛАЗНЫХ РАБОТАХ. ЧТО ЭТО?</Title>
          <Authors data={authors} />
        </header>
        <main>
          <Text>
            В декабре 2020 года в свет вышли новые Правила по охране труда при
            проведении водолазных работ. Документ по своему содержанию и
            практической направленности актуализировал на современном уровне
            требования безопасности при проведении водолазных работ – работ
            потенциально опасных, практической направленности актуализировал на
            современном уровне требования безопасности при проведении водолазных
            работ – работ потенциально опасных,
          </Text>
        </main>
        <Footer>
          <span>{t("journal.item.page")}. 2—10</span>
          <button>
            {t(`journal.item.button-content`)}
            <span> -&gt;</span>
          </button>
        </Footer>
      </Wrapper>
      <img src={"/assets/test/reports-2.jpg"} alt="journal" />
    </Box>
  );
};
