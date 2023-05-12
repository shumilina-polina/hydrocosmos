import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import s from "./main.module.scss";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Keyboard } from "swiper";
import cn from "classnames";
import SvgSelector from "@/shared/UI/SvgSelector";

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
  {
    id: 6,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 7,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 8,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 9,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 10,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 11,
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
          speed={2000}
          modules={[Autoplay, Pagination, Keyboard]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={"auto"}
          centeredSlides={true}
          className={cn(s.slider, "main-slider")}
          spaceBetween={63}
          // centerInsufficientSlides={true}
          keyboard={{
            enabled: true,
          }}
          initialSlide={data.length > 4 ? Math.floor(data.length / 4) : 0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data &&
            data.map((slide, index, arr) => {
              if (!(index % 2)) {
                return (
                  <SwiperSlide className={index} key={slide.id}>
                    <img src={slide.url} />
                    {arr[index + 1] ? <img src={arr[index + 1].url} /> : ""}
                  </SwiperSlide>
                );
              }
              return;
            })}
          <SvgSelector svg={"ellipse"} />
          <SvgSelector svg={"ellipse"} />
        </Swiper>
      </main>
    </section>
  );
};

export default Main;
