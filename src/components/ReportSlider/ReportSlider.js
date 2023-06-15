import s from "./reportSlider.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { useState } from "react";
import cn from "classnames";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";
import { apiUrl } from "@/shared/constants/config";

const ReportSlider = ({
  setOpenModal = () => {},
  modal = false,
  data = undefined,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className={cn(s.slider, "report-slider")}
        onClick={() => setOpenModal(true)}
      >
        {data?.map((slide) => (
          <SwiperSlide>
            <img src={apiUrl + slide.attributes.url} alt="Report" />
            {modal && (
              <span className={s.label}>{slide.attributes.caption}</span>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={2}
        breakpoints={{
          900: {
            slidesPerView: modal ? 5 : 6,
            spaceBetween: 15,
          },
          600: {
            spaceBetween: 10,
            slidesPerView: 4,
          },
          300: {
            spaceBetween: 5,
            slidesPerView: 3,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={cn(s.slider_mini, "report-slider_mini")}
      >
        {data?.map((slide) => (
          <SwiperSlide>
            <img src={apiUrl + slide.attributes.url} alt="Report" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReportSlider;
