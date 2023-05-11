import Journal from "@/components/Index/Journal/Journal";
import Main from "@/components/Index/Main/Main";
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
      </section>
    </>
  );
}
