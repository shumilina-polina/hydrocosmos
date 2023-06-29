import s from "./journal.module.scss";
import { useTranslation } from "react-i18next";
import Wrapper from "@/shared/UI/Wrapper";
import { useState } from "react";
import { breakpoints } from "@/styles/variables/variables";
import { Skeleton, useMediaQuery } from "@mui/material";
import { JournalCart } from "@/components/JournalCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cn from "classnames";
import Link from "next/link";
import { routes } from "@/shared/constants/routes";
import { apiUrl } from "@/shared/constants/config";
import Date from "@/shared/UI/Date";

const Journal = ({ data }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(true);
  const isTablet = useMediaQuery(breakpoints.tablet);

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.journal.title")}</h2>
          <hr />
        </header>
      </Wrapper>
      <main>
        {data ? (
          !isTablet ? (
            <ul>
              {data.map((item, i) => (
                <li
                  key={item.id}
                  className={i === 0 && active ? s.active : ""}
                  onMouseOver={() => {
                    setActive(false);
                  }}
                  onMouseOut={() => {
                    setActive(true);
                  }}
                >
                  <Link
                    as={`/${routes.journal}/${item.attributes?.slug}`}
                    href={`/${routes.journal}/[id]`}
                  >
                    <Wrapper>
                      <Date format={"MMMM YYYY"}>{item.attributes?.date}</Date>
                      <img
                        src={
                          apiUrl + item.attributes.photo.data?.attributes.url
                        }
                        alt={"Journal"}
                      />
                    </Wrapper>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <Swiper
              speed={2000}
              spaceBetween={27}
              className={cn(s.slider, "journal-slider")}
              slidesPerView={"auto"}
            >
              {data.map((cart) => (
                <SwiperSlide key={cart.id}>
                  <JournalCart cart={cart.attributes} />
                </SwiperSlide>
              ))}
            </Swiper>
          )
        ) : (
          <Skeleton
            className={s.skeleton}
            animation="wave"
            sx={{ bgcolor: "grey.200" }}
          />
        )}
      </main>
      {!isTablet && (
        <footer>
          <Link href={"/" + routes.journal}>
            <button>{t(`home.journal.button`)}</button>
          </Link>
          {/* //   ? (
          //   <button>
          //     {t(`home.journal.button-mobile`)}
          //     <span>-&gt;</span>
          //   </button>
          // ) : ( */}
        </footer>
      )}
    </section>
  );
};

export default Journal;
