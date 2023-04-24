import s from "@/styles/pages/index.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Гидрокосмос</title>
      </Head>
      <div className={s.page}>
      </div>
    </>
  );
}