import Head from 'next/head';
import type { GetServerSideProps } from 'next';

import CryptoCard from 'components/CryptoCard';

interface Props {
  cryptos: NomicCrypto[];
}

const Home = ({ cryptos }: Props): JSX.Element => {
  return (
    <main className="min-h-screen h-screen">
      <Head>
        <title>Crypto currencies leaderboard</title>
      </Head>
      <section className="flex flex-col w-full min-h-1/2 max-h-96 bg-blue-700 text-yellow-50 pt-32 pb-20">
        <div className="container max-w-screen-lg mx-auto">
          <h1 className="font-bold text-6xl px-3">Crypto Leaderboard</h1>
          <h2 className="text-md px-3 mt-4">
            Your simple guide to the top 100 crypto on the market right now
          </h2>
        </div>
      </section>
      <section className="stop-gradient">
        <div className="container bg-white max-w-screen-lg mx-auto">
          <div className="w-full rounded-3xl">
            {cryptos.map(c => (
              <CryptoCard key={c.id} crypto={c} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const cryptos = await fetch('http://localhost:3000/api/cryptos').then(res => res.json());
  return {
    props: { cryptos },
  };
};

export default Home;
