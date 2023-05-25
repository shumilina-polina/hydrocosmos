import s from "./journal.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { useState } from "react";
import { breakpoints } from "@/styles/variables/variables";
import { useMediaQuery } from "@mui/material";
import { JournalCart } from "@/components/JournalCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import cn from "classnames";

const data = [
  {
    id: 1,
    name: "1 журнал гидрокомос",
    num: 4,
    date: "Май 2024",
    year: "2024",
    url: "assets/test/journal.jpg",
  },
  {
    id: 2,
    name: "2 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 3,
    name: "3 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2024",
    url: "assets/test/magazine.jpg",
  },
  {
    id: 4,
    name: "4 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2023",
    url: "assets/test/magazine.jpg",
  },
];

const Journal = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(true);
  const isTablet = useMediaQuery(breakpoints.tablet);

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.journal.title")}</h2>
          <hr />
        </header>
      </Wrapper>
      <main>
        {!isTablet ? (
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
        ) : (
          <Swiper
            speed={2000}
            spaceBetween={27}
            className={cn(s.slider, "journal-slider")}
            slidesPerView={"auto"}
          >
            {data &&
              data.map((cart) => (
                <SwiperSlide key={cart.id}>
                  <JournalCart cart={cart} />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </main>
      <footer>
        {isTablet ? (
          <button>
            {t(`home.journal.button-mobile`)}
            <span>-&gt;</span>
          </button>
        ) : (
          <button>{t(`home.journal.button`)}</button>
        )}
      </footer>
    </section>
  );
};

export default Journal;
