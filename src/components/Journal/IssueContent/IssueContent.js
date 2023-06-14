import { ReportsBox } from "@/components/Index/Reports/ReportsBox";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  mixins,
} from "@/styles/variables/variables";
import { IssueCart } from "./IssueCart";
import { Theme } from "@/shared/UI/Theme";

const IssueContent = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Section>
      <header>
        <h2>{t("journal.item.content")}</h2>
        <hr />
      </header>
      <main>
        <ArticlesByRubric data={data.articles.data} journal={data.pdf_ru} />
        <article>
          <Theme>репортажи:</Theme>
          <ReportsBox data={data.reports.data} />
        </article>
      </main>
    </Section>
  );
};

export default IssueContent;

const ArticlesByRubric = ({ data, journal }) => {
  return (
    <>
      {Array.from(
        new Set(data.map((article) => article.attributes.rubric))
      ).map((rubric, i) => (
        <article key={i}>
          <Theme>{rubric}:</Theme>
          {data.map(
            (article) =>
              article.attributes.rubric === rubric && (
                <IssueCart
                  key={article.id}
                  data={article.attributes}
                  journal={journal.data.attributes.url}
                />
              )
          )}
        </article>
      ))}
    </>
  );
};

const Section = styled.section`
  & > header {
    display: flex;
    align-items: center;
    margin-bottom: 64px;
    & > h2 {
      ${mixins.title}
    }
  }
  & > main {
    & article {
      margin-bottom: 56px;
      &:last-child {
        margin-top: 24px;
      }
    }
  }
`;
