import s from "./pairs.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";

const data = [
  {
    id: 1,
    url: "assets/test/pairs.png",
  },
  {
    id: 2,
    url: "assets/test/pairs-2.png",
  },
  {
    id: 3,
    url: "assets/test/pairs.png",
  },
  {
    id: 4,
    url: "assets/test/pairs.png",
  },
  {
    id: 5,
    url: "assets/test/pairs-2.png",
  },
  {
    id: 6,
    url: "assets/test/pairs-2.png",
  },
  {
    id: 7,
    url: "assets/test/pairs.png",
  },
  {
    id: 8,
    url: "assets/test/pairs.png",
  },
];

const Pairs = () => {
  const { t } = useTranslation();

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.pairs.title")}</h2>
          <hr />
        </header>
        <main>
          {data && data.map((item) => <img key={item.id} src={item.url} />)}
        </main>
      </Wrapper>
    </section>
  );
};

export default Pairs;
