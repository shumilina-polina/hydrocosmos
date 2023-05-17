import s from "./news.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Keyboard } from "swiper";
import cn from "classnames";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useRef } from "react";
import SvgSelector from "@/shared/UI/SvgSelector";

const data = [
  {
    id: 1,
    text: "НИОКР «Создание отечественного обитаемого подводного аппарата».",
    date: "12 мая 2023",
    url: "assets/test/news.jpg",
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
                  <div className={s.slider_slide}>
                    <div>
                      <div className={s.img_wr}>
                        <img src={slide.url} />
                      </div>
                      <ReactMarkdown>{slide.text}</ReactMarkdown>
                    </div>
                    <span>{slide.date}</span>
                  </div>
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
      </main>
      <footer>
        <button>{t("home.news.button")}</button>
      </footer>
    </section>
  );
};

export default News;
