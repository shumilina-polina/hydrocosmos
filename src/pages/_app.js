import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { client } from "@/services/gqlService";
import "@/styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import "../locale/i18n";
import Head from "next/head";

export default function App({ Component, pageProps }) {
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
