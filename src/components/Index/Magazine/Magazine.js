import s from "./magazine.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { useState } from "react";
import { breakpoints } from "@/styles/variables/variables";
import { useMediaQuery } from "@mui/material";
import { MagazineCart } from "@/components/MagazineCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cn from "classnames";
import Link from "next/link";
import { routes } from "@/shared/constants/routes";

const page = "issue-1";

const data = [
  {
    id: 1,
    name: "1 журнал гидрокомос",
    num: 4,
    date: "Май 2024",
    year: "2024",
    url: "/assets/test/magazine.jpg",
  },
  {
    id: 2,
    name: "2 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2023",
    url: "/assets/test/news.jpg",
  },
  {
    id: 3,
    name: "3 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2024",
    url: "/assets/test/magazine.jpg",
  },
  {
    id: 4,
    name: "4 журнал гидрокомос",
    num: 4,
    date: "Май 2023",
    year: "2023",
    url: "/assets/test/magazine.jpg",
  },
];

const Magazine = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(true);
  const isTablet = useMediaQuery(breakpoints.tablet);

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.magazine.title")}</h2>
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
                  <Link
                    as={`/${routes.magazine}/${page}`}
                    href={`/${routes.magazine}/[id]`}
                  >
                    <Wrapper>
                      <span data-aos="fade-left" data-aos-delay={`${100 * i}`}>
                        {item.date}
                      </span>
                      <img src={item.url} alt={item.date} />
                    </Wrapper>
                  </Link>
                </li>
              ))}
          </ul>
        ) : (
          <Swiper
            speed={2000}
            spaceBetween={27}
            className={cn(s.slider, "magazine-slider")}
            slidesPerView={"auto"}
          >
            {data &&
              data.map((cart) => (
                <SwiperSlide key={cart.id}>
                  <MagazineCart cart={cart} />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </main>
      <footer>
        <Link href={"/" + routes.magazine}>
          {isTablet ? (
            <button>
              {t(`home.magazine.button-mobile`)}
              <span>-&gt;</span>
            </button>
          ) : (
            <button>{t(`home.magazine.button`)}</button>
          )}
        </Link>
      </footer>
    </section>
  );
};

export default Magazine;
