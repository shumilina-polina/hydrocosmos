import s from "./reports.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Autoplay, Pagination } from "swiper";
import cn from "classnames";
import { useRef } from "react";
import SvgSelector from "@/shared/UI/SvgSelector";

const data = [
  {
    id: 1,
    title: "белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-1.jpg",
  },
  {
    id: 2,
    title: "белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
  {
    id: 3,
    title: "белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-1.jpg",
  },
  {
    id: 4,
    title: "белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-1.jpg",
  },
  {
    id: 5,
    title: "белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
  {
    id: 6,
    title: "белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
  {
    id: 7,
    title: "белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-1.jpg",
  },
  {
    id: 8,
    title: "белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-1.jpg",
  },
  {
    id: 9,
    title: "белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
  {
    id: 10,
    title: "белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
  {
    id: 11,
    title: "белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
];

const Reports = () => {
  const swiperRef = useRef();

  const { t } = useTranslation();

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.reports.title")}</h2>
          <hr />
        </header>
      </Wrapper>
      <main>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          speed={1000}
          modules={[Autoplay, Pagination, Keyboard]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={"auto"}
          className={cn(s.slider, "reports-slider")}
          spaceBetween={21}
          centerInsufficientSlides={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {data &&
            data.map((slide, i, arr) => {
              if (i % 5 == 0)
                return (
                  <SwiperSlide className={s.slide} key={slide.id}>
                    <figure>
                      <img src={slide.url} />
                      <figcaption>
                        <div>
                          <span>
                            {t("home.reports.figcaption")} №{slide.num}
                          </span>
                          |<span>{slide.type}</span>
                        </div>
                        <h3>{slide.title}</h3>
                      </figcaption>
                    </figure>
                    {[1, 2, 3, 4].map(
                      (item) =>
                        arr[i + item] && (
                          <figure>
                            <img src={arr[i + item].url} />
                            <figcaption>
                              <div>
                                <span>
                                  {t("home.reports.figcaption")} №
                                  {arr[i + item].num}
                                </span>
                                |<span>{arr[i + item].type}</span>
                              </div>
                              <h3>{arr[i + item].title}</h3>
                            </figcaption>
                          </figure>
                        )
                    )}
                  </SwiperSlide>
                );
              return;
            })}
          <div className={s.slider_buttons}>
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <SvgSelector svg={"slider-arrow"} />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <SvgSelector svg={"slider-arrow"} />
            </button>
          </div>
        </Swiper>
      </main>
    </section>
  );
};

export default Reports;
