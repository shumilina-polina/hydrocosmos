import { JournalCart } from "@/components/JournalCart";
import { GET_JOURNALS } from "@/services/gqlService";
import Error from "@/shared/UI/Error";
import Title from "@/shared/UI/Title";
import Wrapper from "@/shared/UI/Wrapper";
import s from "@/styles/pages/journal/journals.module.scss";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import moment from "moment/moment";
import { Skeleton } from "@mui/material";
import cn from "classnames";

export default function Journals() {
  const { t } = useTranslation();
  const { data, error } = useQuery(GET_JOURNALS);

  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.journal")}</title>
      </Head>
      {error ? (
        <Error />
      ) : (
        <Wrapper>
          <section className={s.wr}>
            <header>
              <Title>{t("journal.title")}</Title>
            </header>
            <main>
              {data ? (
                Array.from(
                  new Set(
                    data.journals.data.map((elem) =>
                      moment(elem.attributes.date).format("YYYY")
                    )
                  )
                ).map((year, index) => (
                  <div key={index} className={s.year}>
                    <div>
                      <h2>{year}</h2>
                      <hr />
                    </div>
                    <ul>
                      {data.journals.data.map(
                        (cart, i) =>
                          moment(cart.attributes.date).format("YYYY") ===
                            year && (
                            <li
                              data-aos="zoom-out"
                              data-aos-delay={`${100 * i}`}
                              key={cart.id}
                            >
                              <JournalCart cart={cart.attributes} />
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                ))
              ) : (
                <div className={s.year}>
                  <div>
                    <h2>
                      <Skeleton
                        className={cn(s.skeleton, s.skeleton_h)}
                        sx={{ bgcolor: "grey.200" }}
                        animation="wave"
                      />
                    </h2>
                  </div>
                  <ul>
                    <li>
                      <Skeleton
                        className={s.skeleton}
                        sx={{ bgcolor: "grey.200" }}
                        animation="wave"
                      />
                    </li>
                    <li>
                      <Skeleton
                        className={s.skeleton}
                        sx={{ bgcolor: "grey.200" }}
                        animation="wave"
                      />
                    </li>
                  </ul>
                </div>
              )}
            </main>
          </section>
        </Wrapper>
      )}
    </>
  );
}
