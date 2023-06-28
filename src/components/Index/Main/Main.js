import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import s from "./main.module.scss";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import cn from "classnames";
import SvgSelector from "@/shared/UI/SvgSelector";
import { breakpoints, sizes } from "@/styles/variables/variables";
import { Skeleton, useMediaQuery } from "@mui/material";
import { apiUrl } from "@/shared/constants/config";
import { routes } from "@/shared/constants/routes";
import Link from "next/link";

const { desktopWidth, laptopWidth, mobileWidth } = sizes;

const Main = ({ data, journal }) => {
  const { t } = useTranslation();
  data = undefined;
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <section className={s.wr}>
      <header>
        <ReactMarkdown>{"# " + t("home.title")}</ReactMarkdown>
      </header>
      {journal?.slug && (
        <Link
          as={`/${routes.journal}/${journal.slug}`}
          href={`/${routes.journal}/[id]`}
        >
          <button>
            {t("home.button")} {journal?.number || 1}
            <span> -&gt;</span>
          </button>
        </Link>
      )}
      <main>
        {data ? (
          <Swiper
            speed={2000}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
            }}
            className={cn(s.slider, "main-slider")}
            // centerInsufficientSlides={true}
            initialSlide={data?.length > 4 ? Math.floor(data.length / 4) : 0}
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
            {data.map((slide, index, arr) => {
              if (!(index % 2) && !isMobile) {
                return (
                  <SwiperSlide key={slide.id}>
                    <img src={apiUrl + slide.attributes.url} />
                    {arr[index + 1] ? (
                      <img src={apiUrl + arr[index + 1].attributes.url} />
                    ) : (
                      ""
                    )}
                  </SwiperSlide>
                );
              } else if (isMobile)
                return (
                  <SwiperSlide key={slide.id}>
                    <img src={apiUrl + slide.attributes.url} />
                  </SwiperSlide>
                );
              else return;
            })}
            <SvgSelector svg={"ellipse"} />
            <SvgSelector svg={"ellipse"} />
          </Swiper>
        ) : (
          <Skeleton
            className={s.skeleton}
            sx={{ bgcolor: "grey.900" }}
            animation="wave"
          />
        )}
      </main>
    </section>
  );
};

export default Main;
