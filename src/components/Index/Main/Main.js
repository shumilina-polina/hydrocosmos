import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import s from "./main.module.scss";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Keyboard } from "swiper";
import cn from "classnames";
import SvgSelector from "@/shared/UI/SvgSelector";
import { breakpoints, sizes } from "@/styles/variables/variables";
import { useMediaQuery } from "@mui/material";

const data = [
  {
    id: 1,
    url: "assets/test/journal.jpg",
  },
  {
    id: 2,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 3,
    url: "assets/test/journal.jpg",
  },
  {
    id: 4,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 5,
    url: "assets/test/journal.jpg",
  },
  {
    id: 6,
    url: "assets/test/main-slider.jpg",
  },
  {
    id: 7,
    url: "assets/test/journal.jpg",
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
const { desktopWidth, laptopWidth, mobileWidth } = sizes;
const { mobile } = breakpoints;

const Main = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(mobile);

  return (
    <section className={s.wr}>
      <header>
        <ReactMarkdown>{"# " + t("home.title")}</ReactMarkdown>
      </header>
      <button>
        Читать выпуск №1 <span>-&gt;</span>
      </button>
      <main>
        <Swiper
          speed={2000}
          modules={[Autoplay, Pagination, Keyboard]}
          pagination={{
            clickable: true,
          }}
          className={cn(s.slider, "main-slider")}
          // centerInsufficientSlides={true}
          keyboard={{
            enabled: true,
          }}
          initialSlide={data.length > 4 ? Math.floor(data.length / 4) : 0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            [desktopWidth.slice(0, -2)]: {
              slidesPerView: "auto",
              spaceBetween: 63,
              centeredSlides: true,
              loop: false,
            },
            [laptopWidth.slice(0, -2)]: {
              slidesPerView: 1,
              spaceBetween: 0,
              loop: true,
            },
            [mobileWidth.slice(0, -2)]: {
              spaceBetween: 16,
            },
          }}
        >
          {data &&
            data.map((slide, index, arr) => {
              if (!(index % 2) && !isMobile) {
                return (
                  <SwiperSlide key={slide.id}>
                    <img src={slide.url} />
                    {arr[index + 1] ? <img src={arr[index + 1].url} /> : ""}
                  </SwiperSlide>
                );
              } else if (isMobile)
                return (
                  <SwiperSlide key={slide.id}>
                    <img src={slide.url} />
                  </SwiperSlide>
                );
              else return;
            })}
          <SvgSelector svg={"ellipse"} />
          <SvgSelector svg={"ellipse"} />
        </Swiper>
      </main>
    </section>
  );
};

export default Main;
