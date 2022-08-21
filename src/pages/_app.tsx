import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalContextsProvider from "src/contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nextjs Clean Architecture Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalContextsProvider>
        <Component {...pageProps} />
      </GlobalContextsProvider>
    </>
  );
}

export default MyApp;
