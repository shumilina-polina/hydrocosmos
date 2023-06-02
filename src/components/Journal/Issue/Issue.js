import s from "./issue.module.scss";
import { useTranslation } from "react-i18next";
import SvgSelector from "@/shared/UI/SvgSelector";
import CopyToClipboard from "react-copy-to-clipboard";

const Issue = () => {
  const { t } = useTranslation();

  return (
    <div className={s.wr}>
      <img src="/assets/test/journal.jpg" alt="Issue" />
      <section className={s.content}>
        <header>
          <h1>Выпуск №3</h1>
          <span>Октябрь 2024</span>
        </header>
        <main>
          <ul>
            <ContentRow data={"1026-9428"}>
              <span>ISSN &#40;{t("journal.item.print")}&#41;:</span>
            </ContentRow>
            <ContentRow data={"2618-8945"}>
              <span>eISSN &#40;{t("journal.item.electronic")}&#41;:</span>
            </ContentRow>
            <ContentRow data={"XHFQWO"}>
              <span>Elibrary EDN:</span>
            </ContentRow>
          </ul>
        </main>
        <footer>
          <a
            href="https://pushkeen.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              {t(`journal.item.button`)}
              <span> &#40;rus&#41; -&gt;</span>
            </button>
          </a>
          <a
            href="https://pushkeen.ru"
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
    <span>{data}</span>
    <CopyToClipboard text={data}>
      <button>
        <SvgSelector svg={"copy"} />
      </button>
    </CopyToClipboard>
  </li>
);
