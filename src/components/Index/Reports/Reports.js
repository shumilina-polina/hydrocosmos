import s from "./reports.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import cn from "classnames";
import { Fragment, useRef } from "react";
import { Skeleton, useMediaQuery } from "@mui/material";
import { ReportCart } from "@/components/ReportCart";
import { Buttons } from "./Buttons";
import { routes } from "@/shared/constants/routes";
import Link from "next/link";
import { breakpoints } from "@/styles/variables/variables";

const Reports = ({ data }) => {
  const { t } = useTranslation();
  const isSwiperLaptop = useMediaQuery(breakpoints.swiperLaptop);

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.reports.title")}</h2>
          <hr />
        </header>
      </Wrapper>
      <main>
        {data ? (
          isSwiperLaptop ? (
            <SliderLaptop data={data} />
          ) : (
            <SliderDesktop data={data} />
          )
        ) : (
          <Skeleton
            className={s.skeleton}
            animation="wave"
            sx={{ bgcolor: "grey.200" }}
          />
        )}
      </main>
      <footer>
        <Link href={"/" + routes.reports}>
          <button>{t(`home.reports.button`)}</button>
        </Link>
      </footer>
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
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {data?.map(
        (slide, i, arr) =>
          i % 3 == 0 && (
            <Fragment key={slide.id}>
              <SwiperSlide key={slide.id + "s"} className={s.slide}>
                <ReportCart cart={slide.attributes} />
              </SwiperSlide>
              <SwiperSlide
                key={slide.id + "f"}
                className={cn(s.slide, s.slide_flex)}
              >
                <>
                  {arr[i + 1] && <ReportCart cart={arr[i + 1].attributes} />}
                  {arr[i + 2] && <ReportCart cart={arr[i + 2].attributes} />}
                </>
              </SwiperSlide>
            </Fragment>
          )
      )}
      <Buttons swiperRef={swiperRef} />
    </Swiper>
  );
};

const SliderDesktop = ({ data }) => (
  <Swiper
    speed={1000}
    modules={[Autoplay]}
    slidesPerView={"auto"}
    className={cn(s.slider, "reports-slider")}
    spaceBetween={12}
    centerInsufficientSlides={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
  >
    {data?.map(
      (slide, i, arr) =>
        i % 5 == 0 && (
          <SwiperSlide className={s.slide} key={slide.id}>
            <ReportCart cart={slide.attributes} />
            {[1, 2, 3, 4].map(
              (item) =>
                arr[i + item] && (
                  <ReportCart key={item} cart={arr[i + item].attributes} />
                )
            )}
          </SwiperSlide>
        )
    )}
  </Swiper>
);
