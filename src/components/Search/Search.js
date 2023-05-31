import { useTranslation } from "react-i18next";
import s from "./search.module.scss";

const Search = () => {
  const { t } = useTranslation();

  return (
      <div id={s.search}>
        <input
          maxLength={50}
          placeholder={t("search.placeholder")}
          type="text"
          required={true}
        />
        <button>{t("search.button")}</button>
      </div>
  );
};

export default Search;
