import Head from 'next/head';
import type { GetServerSideProps } from 'next';

import CryptoContainer from 'components/CryptoContainer';

interface Props {
  cryptos: NomicCrypto[];
}

const Home: React.FC<Props> = ({ cryptos }: Props) => (
  <main className="min-h-screen h-screen">
    <Head>
      <title>Crypto currencies leaderboard</title>
    </Head>
    <section className="w-full min-h-1/4 max-h-96 bg-gray-900 text-yellow-50 py-16 md:py-28">
      <div className="flex flex-col md:items-center container max-w-screen-lg px-7 mx-auto">
        <h1 className="mt-9 font-display text-4xl leading-none font-semibold text-white sm:text-5xl lg:text-7xl">
          Crypto Leaderboard
        </h1>
        <h2 className="mt-2 max-w-xl text-xl lg:max-w-3xl lg:text-2xl text-gray-300">
          Your simple guide to the top 100 crypto on the market right now
        </h2>
      </div>
    </section>
    <CryptoContainer cryptos={cryptos} />
  </main>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const cryptos = await fetch('http://localhost:3000/api/cryptos').then(res => res.json());
  return {
    props: { cryptos },
  };
};

export default Home;
