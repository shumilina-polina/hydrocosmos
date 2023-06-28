import Date from "@/shared/UI/Date";
import { routes } from "@/shared/constants/routes";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const ArticlesResult = ({ data, setOpen }) => (
  <ResultBox title="articles">
    {data.map((elem, i) => (
      <Link
        onClick={() => setOpen(false)}
        key={i}
        as={`/${routes.articles}/${elem.attributes.slug}`}
        href={`/${routes.articles}/[id]`}
      >
        <li>
          <p>{elem.attributes.title}</p>
        </li>
      </Link>
    ))}
  </ResultBox>
);

export const NewsResult = ({ data, setOpen }) => (
  <ResultBox title="news">
    {data.map((elem, i) => (
      <Link
        onClick={() => setOpen(false)}
        key={i}
        as={`/${routes.news}/${elem.attributes.slug}`}
        href={`/${routes.news}/[id]`}
      >
        <li>{elem.attributes.title}</li>
      </Link>
    ))}
  </ResultBox>
);

export const ReportsResult = ({ data, setOpen }) => (
  <ResultBox title="reports">
    {data.map((elem, i) => (
      <Link
        onClick={() => setOpen(false)}
        key={i}
        as={`/${routes.reports}/${elem.attributes.slug}`}
        href={`/${routes.reports}/[id]`}
      >
        <li>{elem.attributes.title}</li>
      </Link>
    ))}
  </ResultBox>
);

export const JournalsResult = ({ data, setOpen }) => (
  <ResultBox title="journal">
    {data.map((elem, i) => (
      <Link
        onClick={() => setOpen(false)}
        key={i}
        as={`/${routes.journal}/${elem.attributes.slug}`}
        href={`/${routes.journal}/[id]`}
      >
        <li>
          <Date format={"MMMM YYYY"}>{elem.attributes.date}</Date>
        </li>
      </Link>
    ))}
  </ResultBox>
);

export const AuthorsResult = ({ data, setOpen }) => (
  <ResultBox title="authors">
    {data.map((elem, i) => (
      <Link
        onClick={() => setOpen(false)}
        key={i}
        as={`/${routes.authors}/${elem.attributes.slug}`}
        href={`/${routes.authors}/[id]`}
      >
        <li>{elem.attributes.name}</li>
      </Link>
    ))}
  </ResultBox>
);
const ResultBox = ({ children, title }) => {
  const { t } = useTranslation();

  return (
    <article>
      <h3>{t(`pages.${title}`)}</h3>
      <ul>{children}</ul>
    </article>
  );
};
