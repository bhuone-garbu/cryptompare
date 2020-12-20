import Head from 'next/head';
// import type { AppProps, AppContext } from 'next/app';

interface Props {
  cryptos: NomicCrypto[];
}

const Home = ({ cryptos }: Props): JSX.Element => {
  console.warn('cryptos ', cryptos);
  return (
    <div className="container max-w-screen-md mx-auto p-6 flex items-center h-screen">
      <Head>
        <title>Top 100 crypto dashboard</title>
      </Head>

      <main className="mt-12 w-full">
        <h1>The top 100 crypto currencies</h1>
        <h2>Dashboard</h2>
      </main>
    </div>
  );
};

export default Home;
