import s from "./issue.module.scss";
import { useTranslation } from "react-i18next";
import { apiUrl } from "@/shared/constants/config";
import cn from "classnames";
import { Skeleton } from "@mui/material";
import Date from "@/shared/UI/Date";
import { CopyButton } from "@/shared/UI/CopyButton";

const Issue = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className={s.wr}>
      {data ? (
        <img src={apiUrl + data.photo.data?.attributes.url} alt="Issue" />
      ) : (
        <Skeleton
          className={cn(s.skeleton, s.skeleton_image)}
          sx={{ bgcolor: "grey.200" }}
          animation="wave"
        />
      )}
      <section className={s.content}>
        <header>
          <h1>
            {data ? (
              <>
                {t("journal.release")} №{data.number}
              </>
            ) : (
              <Skeleton
                className={cn(s.skeleton, s.skeleton_h1)}
                sx={{ bgcolor: "grey.200" }}
                animation="wave"
              />
            )}
          </h1>
          {data ? (
            <Date format={"MMMM YYYY"}>{data.date}</Date>
          ) : (
            <Skeleton
              className={cn(s.skeleton, s.skeleton_date)}
              sx={{ bgcolor: "grey.200" }}
              animation="wave"
            />
          )}
        </header>
        <main>
          {data ? (
            <ul>
              <ContentRow data={data.ISSN}>
                <span>ISSN &#40;{t("journal.item.print")}&#41;:</span>
              </ContentRow>
              <ContentRow data={data.eISSN}>
                <span>eISSN &#40;{t("journal.item.electronic")}&#41;:</span>
              </ContentRow>
              <ContentRow data={data.Elibrary_EDN}>
                <span>Elibrary EDN:</span>
              </ContentRow>
            </ul>
          ) : (
            <Skeleton
              className={cn(s.skeleton, s.skeleton_list)}
              sx={{ bgcolor: "grey.200" }}
              animation="wave"
            />
          )}
        </main>
        <footer>
          <a
            href={apiUrl + data?.pdf_ru.data?.attributes.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              {t(`journal.item.button`)}
              <span> &#40;rus&#41; -&gt;</span>
            </button>
          </a>
          <a
            href={apiUrl + data?.pdf_en.data?.attributes.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              {t(`journal.item.button`)}
              <span> &#40;eng&#41; -&gt;</span>
            </button>
          </a>
        </footer>
      </section>
    </div>
  );
};

export default Issue;

const ContentRow = ({ data, children }) => (
  <li>
    {children}
    <CopyButton>{data}</CopyButton>
  </li>
);
