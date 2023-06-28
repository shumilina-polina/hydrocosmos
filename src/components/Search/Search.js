import { useTranslation } from "react-i18next";
import s from "./search.module.scss";
import { useLazyQuery } from "@apollo/client";
import { SEARCH } from "@/services/gqlService";
import { useState } from "react";
import {
  ArticlesResult,
  AuthorsResult,
  JournalsResult,
  NewsResult,
  ReportsResult,
} from "./Result";

const Search = ({ setOpen }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const [search, setSearch] = useState("");

  const [loadResult, { called, loading, data }] = useLazyQuery(SEARCH, {
    variables: { lang: language, search: "" },
  });

  return (
    <section>
      <div id={s.search}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          maxLength={50}
          placeholder={t("search.placeholder")}
          type="text"
          required={true}
        />
        <button
          disabled={search.length === 0}
          onClick={() => loadResult({ variables: { search: search } })}
        >
          {t("search.button")}
        </button>
      </div>
      {called && (
        <div id={s.result}>
          {data && (
            <>
              {Object.keys(data).filter((elem) => data[elem].data.length > 0)
                .length == 0 && <p>{t("notfound")}</p>}

              {data.articles.data.length > 0 && (
                <ArticlesResult setOpen={setOpen} data={data.articles.data} />
              )}
              {data.news.data.length > 0 && (
                <NewsResult setOpen={setOpen} data={data.news.data} />
              )}
              {data.reports.data.length > 0 && (
                <ReportsResult setOpen={setOpen} data={data.reports.data} />
              )}
              {data.journals.data.length > 0 && (
                <JournalsResult setOpen={setOpen} data={data.journals.data} />
              )}
              {data.authors.data.length > 0 && (
                <AuthorsResult setOpen={setOpen} data={data.authors.data} />
              )}
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Search;
