import Articles from "@/components/Index/Articles/Articles";
import Form from "@/components/Index/Form/Form";
import Journal from "@/components/Index/Journal/Journal";
import Main from "@/components/Index/Main/Main";
import Manifest from "@/components/Index/Manifest/Manifest";
import News from "@/components/Index/News/News";
import Pairs from "@/components/Index/Pairs/Pairs";
import Reports from "@/components/Index/Reports/Reports";
import s from "@/styles/pages/index.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Гидрокосмос</title>
      </Head>
      <section className={s.wr}>
        <Main />
        <Journal />
        <News />
        <Articles />
        <Manifest />
        <Reports />
        <Pairs />
        <Form/>
      </section>
    </>
  );
}
