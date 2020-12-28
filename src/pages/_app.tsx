import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <link rel="icon" href="/favicon.svg" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap"
        rel="stylesheet"
      />
      <meta
        name="Description"
        content="Top 100 crypto currency ranking on the market such as Bitcoin, Ethereum, Ripple, Tether, Litecoin, Bitcoin Cash, Cardano and many more. Learn their historical and trending prices, all with a simple intuitive UI dashboard."
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
