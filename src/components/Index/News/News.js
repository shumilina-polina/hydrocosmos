import s from "./news.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cn from "classnames";
import { useRef } from "react";
import SvgSelector from "@/shared/UI/SvgSelector";
import { breakpoints } from "@/styles/variables/variables";
import { Skeleton, useMediaQuery } from "@mui/material";
import { NewCart } from "@/components/NewCart";
import { routes } from "@/shared/constants/routes";
import Link from "next/link";

const News = ({ data }) => {
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
              {data ? (
                data
                  .slice(0, 2)
                  .map((cart) => (
                    <NewCart key={cart.id} cart={cart.attributes} />
                  ))
              ) : (
                <>
                  <Skeleton
                    animation="wave"
                    sx={{ bgcolor: "grey.900", borderRadius: "20px" }}
                    width={"100%"}
                    height={378}
                  />
                  <Skeleton
                    animation="wave"
                    sx={{ bgcolor: "grey.900", borderRadius: "20px" }}
                    width={"100%"}
                    height={378}
                  />
                </>
              )}
            </div>
          </Wrapper>
        ) : (
          <div className={s.slider_wr}>
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              speed={1000}
              loop={data?.length > 6}
              slidesPerView={3}
              className={cn(s.slider, "news-slider")}
              spaceBetween={19}
              keyboard={{
                enabled: true,
              }}
            >
              {data ? (
                data.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <NewCart cart={slide.attributes} />
                  </SwiperSlide>
                ))
              ) : (
                <>
                  {[1, 2, 3].map((elem) => (
                    <SwiperSlide key={elem}>
                      <Skeleton
                        className={s.skeleton}
                        animation="wave"
                        sx={{ bgcolor: "grey.900" }}
                      />
                    </SwiperSlide>
                  ))}
                </>
              )}
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
