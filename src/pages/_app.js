import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { client } from "@/services/gqlService";
import "@/styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import "../locale/i18n";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Head>
        <title>Гидрокосмос</title>
        <meta
          name="description"
          content="Гидрокосмос – научный журнал о подводных исследованиях"
        />
      </Head>
      <Header />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Footer />
    </>
  );
}
