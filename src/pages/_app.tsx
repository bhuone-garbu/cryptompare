import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app';

import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <link rel="icon" href="/vercel.svg" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
