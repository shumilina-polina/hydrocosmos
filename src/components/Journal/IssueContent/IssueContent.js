import { ReportsBox } from "@/components/Index/Reports/ReportsBox";
import s from "./issueContent.module.scss";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { breakpoints, colors, fonts } from "@/styles/variables/variables";
import { IssueCart } from "./IssueCart";

export const Theme = styled.h3`
  ${fonts.inter7}
  color: ${colors.cyanArticle};
  margin-bottom: 32px;
  font-size: 32px;
  line-height: 39px;
  text-transform: uppercase;
  @media ${breakpoints.laptop} {
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;

const data = [
  {
    id: 1,
    title: "1 Крупнейший минеральный водоём Европы — озеро Эльтон",
    num: "3",
    type: "репортаж",
    url: "/assets/test/reports-1.jpg",
  },
  {
    id: 2,
    title: "2 горное озеро",
    num: "3",
    type: "репортаж",
    url: "/assets/test/reports-2.jpg",
  },
  // {
  //   id: 3,
  //   title: "3 горное озеро",
  //   num: "3",
  //   type: "репортаж",
  //   url: "/assets/test/reports-2.jpg",
  // },
];

const IssueContent = () => {
  const { t } = useTranslation();

  return (
    <section className={s.wr}>
      <header>
        <h2>{t("journal.item.content")}</h2>
        <hr />
      </header>
      <main>
        {["От редакции", "археология", "техника/технологии"].map((theme, i) => (
          <article key={i}>
            <Theme>{theme}:</Theme>
            <div data-aos="fade-right" data-aos-delay={100}>
              <IssueCart />
            </div>
            <div data-aos="fade-right" data-aos-delay={200}>
              <IssueCart />
            </div>
          </article>
        ))}

        <article>
          <Theme>репортажи:</Theme>
          <ReportsBox data={data} />
        </article>
      </main>
    </section>
  );
};

export default IssueContent;
