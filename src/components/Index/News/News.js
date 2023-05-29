import s from "./news.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Keyboard } from "swiper";
import cn from "classnames";
import { useRef } from "react";
import SvgSelector from "@/shared/UI/SvgSelector";
import { breakpoints } from "@/styles/variables/variables";
import { useMediaQuery } from "@mui/material";
import { NewCart } from "@/components/NewCart";
import { routes } from "@/shared/constants/routes";
import Link from "next/link";

const data = [
  {
    id: 1,
    text: "НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/journal.jpg",
  },
  {
    id: 2,
    text: "Поисковая экспедиция ЦПИ РГО в&nbsp;Пермском крае завершена",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 3,
    text: "НАУЧНО-ИСТОРИЧЕСКАЯ КОНФЕРЕНЦИЯ «ТЕПЛОХОД “АРМЕНИЯ”. ВСПОМНИТЬ ВСЕХ»",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 4,
    text: "НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 5,
    text: "НАУЧНО-ИСТОРИЧЕСКАЯ КОНФЕРЕНЦИЯ «ТЕПЛОХОД “АРМЕНИЯ”. ВСПОМНИТЬ ВСЕХ»",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 6,
    text: "НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
  {
    id: 7,
    text: "НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
  },
];

const News = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  const { t } = useTranslation();
  const swiperRef = useRef();

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.news.title")}</h2>
          <hr />
        </header>
      </Wrapper>
      <main>
        {isMobile ? (
          <Wrapper>
            <div className={s.mobile_wrapper}>
              {data &&
                data
                  .slice(0, 2)
                  .map((cart) => <NewCart key={cart.id} cart={cart} />)}
            </div>
          </Wrapper>
        ) : (
          <div className={s.slider_wr}>
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              speed={1000}
              loop={true}
              modules={[Keyboard]}
              slidesPerView={3}
              className={cn(s.slider, "news-slider")}
              spaceBetween={19}
              keyboard={{
                enabled: true,
              }}
            >
              {data &&
                data.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <NewCart cart={slide} />
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className={s.slider_buttons}>
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <SvgSelector svg={"slider-arrow"} />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <SvgSelector svg={"slider-arrow"} />
              </button>
            </div>
          </div>
        )}
      </main>
      <footer>
        <Link href={"/" + routes.news}>
          <button>{t(`home.news.button${isMobile ? "-mobile" : ""}`)}</button>
        </Link>
      </footer>
    </section>
  );
};

export default News;
