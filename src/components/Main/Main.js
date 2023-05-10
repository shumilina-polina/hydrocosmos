import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import s from "./main.module.scss";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import cn from "classnames";

const data = [
  {
    id: 1,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 2,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 3,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 4,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 5,
    url: "assets/test/main-slider.jpg",
  },
];

const Main = () => {
  const { t } = useTranslation();

  return (
    <section className={s.wr}>
      <header>
        <ReactMarkdown>{"# " + t("home.title")}</ReactMarkdown>
        <button>
          Читать выпуск №1 <span>-&gt;</span>
        </button>
      </header>
      <main>
        <Swiper
          speed={1300}
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
          }}
          className={cn(s.main_slider, "main-slider")}
          slidesPerView={"auto"}
          spaceBetween={63}
          // centeredSlides={true}
          // centeredSlidesBounds={true}
          centerInsufficientSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data &&
            data.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img src={slide.url} />
              </SwiperSlide>
            ))}
        </Swiper>
      </main>
    </section>
  );
};

export default Main;
