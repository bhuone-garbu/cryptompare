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
    <section className="w-full min-h-1/4 max-h-96 bg-blue-700 text-yellow-50 py-16 md:py-28">
      <div className="flex flex-col md:items-center container max-w-screen-lg mx-auto">
        <h1 className="font-bold text-5xl tracking-wide md:text-6xl px-3">Crypto Leaderboard</h1>
        <h2 className="text-md px-3 mt-4">
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
