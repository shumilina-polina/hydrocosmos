import { useTranslation } from "react-i18next";
import Head from "next/head";
import Wrapper from "@/shared/UI/Wrapper";
import Title from "@/shared/UI/Title";
import s from "@/styles/pages/editorial.module.scss";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function EditorialPolicy() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Гидрокосмос - {t("pages.editorial-policy")}</title>
      </Head>

      <Wrapper>
        <section className={s.wr}>
          <header>
            <Title>{t("editorial.title")}</Title>
          </header>
          <main>
            <VerticalTabs />
          </main>
        </section>
      </Wrapper>
    </>
  );
}

const TabPanel = ({ children, value, index }) => (
  <div
    className={s.tab_panel}
    role="tabpanel"
    hidden={value !== index}
    id={`vertical-tabpanel-${index}`}
    aria-labelledby={`vertical-tab-${index}`}
  >
    {value === index && <div>{children}</div>}
  </div>
);

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const VerticalTabs = () => {
  const { t } = useTranslation();

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className={s.tab_box}
      sx={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Tabs
        className={s.tab_tabs}
        orientation="vertical"
        value={value}
        onChange={handleChange}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((tabIndex) => (
          <Tab
            className={s.tab}
            label={t(`editorial.tab_${tabIndex}.title`)}
            {...a11yProps(tabIndex - 1)}
          />
        ))}
      </Tabs>
      {[1, 2, 3, 4, 5, 6, 7].map((tabIndex) => (
        <TabPanel value={value} index={tabIndex - 1}>
          <header>
            <h3>{t(`editorial.tab_${tabIndex}.title`)}</h3>
            <hr />
          </header>
          <ReactMarkdown>{t(`editorial.tab_${tabIndex}.text`)}</ReactMarkdown>
        </TabPanel>
      ))}
    </Box>
  );
};
