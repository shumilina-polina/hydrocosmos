import Main from "@/components/Main/Main";
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
      </section>
    </>
  );
}
