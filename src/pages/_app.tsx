import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <link rel="icon" href="/bitcoin.svg" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
