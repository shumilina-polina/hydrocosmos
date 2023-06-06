import s from "./pairs.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { apiUrl } from "@/shared/constants/config";

const Pairs = ({ data }) => {
  const { t } = useTranslation();

  return (
    data && (
      <section className={s.wr}>
        <Wrapper>
          <header>
            <h2>{t("home.pairs.title")}</h2>
            <hr />
          </header>
          <main>
            {data.map((item) => (
              <img key={item.id} src={apiUrl + item.attributes?.url} />
            ))}
          </main>
        </Wrapper>
      </section>
    )
  );
};

export default Pairs;
