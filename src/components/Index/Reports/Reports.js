import s from "./reports.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Autoplay, Pagination } from "swiper";
import cn from "classnames";
import { Fragment, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import { ReportCart } from "@/components/ReportCart";
import { Buttons } from "./Buttons";

const data = [
  {
    id: 1,
    title: "1 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-1.jpg",
  },
  {
    id: 2,
    title: "2 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
  {
    id: 3,
    title: "3 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-1.jpg",
  },
  {
    id: 4,
    title: "4 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-1.jpg",
  },
  {
    id: 5,
    title: "5 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
  {
    id: 6,
    title: "6 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
  {
    id: 7,
    title: "7 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-1.jpg",
  },
  {
    id: 8,
    title: "8 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-1.jpg",
  },
  {
    id: 9,
    title: "9 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
  {
    id: 10,
    title: "10 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
  {
    id: 11,
    title: "11 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
  {
    id: 12,
    title: "12 белый мишка вышел погулять",
    num: "3",
    type: "репортаж",
    url: "assets/test/reports-2.jpg",
  },
];

const Reports = () => {
  const { t } = useTranslation();

  const isSwiperLaptop = useMediaQuery("(max-width:1650px)");

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.reports.title")}</h2>
          <hr />
        </header>
      </Wrapper>
      <main>
        {data && isSwiperLaptop ? (
          <SliderLaptop data={data} />
        ) : (
          <SliderDesktop data={data} />
        )}
      </main>
    </section>
  );
};

export default Reports;

const SliderLaptop = ({ data }) => {
  const swiperRef = useRef();

  return (
    <Swiper
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      speed={1000}
      modules={[Autoplay]}
      slidesPerView={"auto"}
      className={cn(s.slider, "reports-slider")}
      spaceBetween={12}
      centerInsufficientSlides={true}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {data.map((slide, i, arr) => (
        <Fragment key={slide.id}>
          <SwiperSlide key={slide.id + "s"} className={s.slide}>
            <ReportCart cart={slide} />
          </SwiperSlide>
          <SwiperSlide
            key={slide.id + "f"}
            className={cn(s.slide, s.slide_flex)}
          >
            <>
              {arr[i + 1] && <ReportCart cart={arr[i + 1]} />}
              {arr[i + 2] && <ReportCart cart={arr[i + 2]} />}
            </>
          </SwiperSlide>
        </Fragment>
      ))}
      <Buttons swiperRef={swiperRef} />
    </Swiper>
  );
};

const SliderDesktop = ({ data }) => {
  const swiperRef = useRef();

  return (
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
      spaceBetween={12}
      centerInsufficientSlides={true}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {data.map(
        (slide, i, arr) =>
          i % 5 == 0 && (
            <SwiperSlide className={s.slide} key={slide.id}>
              <ReportCart cart={slide} />
              {[1, 2, 3, 4].map(
                (item) =>
                  arr[i + item] && (
                    <ReportCart key={item} cart={arr[i + item]} />
                  )
              )}
            </SwiperSlide>
          )
      )}

      <Buttons swiperRef={swiperRef} />
    </Swiper>
  );
};
