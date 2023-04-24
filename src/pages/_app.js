import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { client } from "@/services/gqlService";
import "@/styles/globals.scss";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Footer />
    </>
  );
}
