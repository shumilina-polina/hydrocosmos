import s from "./journal.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper/Wrapper";
import { useState } from "react";

const data = [
  {
    id: 1,
    date: "июль 2023",
    url: "assets/test/journal.jpg",
  },
  {
    id: 2,
    date: "декабрь 2023",
    url: "assets/test/journal.jpg",
  },
  {
    id: 3,
    date: "июль 2024",
    url: "assets/test/journal.jpg",
  },
];

const Journal = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(true);

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.journal.title")}</h2>
          <hr />
        </header>
      </Wrapper>
      <main>
        <ul>
          {data &&
            data.map((item, i) => (
              <li
                key={item.id}
                className={i === 0 && active ? s.active : ""}
                onMouseOver={() => {
                  setActive(false);
                }}
                onMouseOut={() => {
                  setActive(true);
                }}
              >
                <Wrapper>
                  <span>{item.date}</span>
                  <img src={item.url} alt={item.date} />
                </Wrapper>
              </li>
            ))}
        </ul>
      </main>
      <footer>
        <button>{t("home.journal.button")}</button>
      </footer>
    </section>
  );
};

export default Journal;
