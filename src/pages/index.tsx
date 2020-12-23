import { useState, useEffect } from 'react';
import Head from 'next/head';
// import type { AppProps, AppContext } from 'next/app';

import CryptoCard from 'components/CryptoCard';
import MiniHero from 'components/MiniHero';

const Home = (): JSX.Element => {
  const [cryptos, setCryptos] = useState<NomicCrypto[]>([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      const data = await fetch(`http://${window.location.host}/api/cryptos`).then(res =>
        res.json(),
      );
      setCryptos(data);
    };
    fetchCryptos();
  }, []);

  return (
    <>
      <div className="container bg-white rounded min-h-screen max-w-screen-lg mx-auto">
        <Head>
          <title>Crypto currencies leaderboard</title>
        </Head>
        <div className="flex flex-col items-center justify-center py-20 w-full bg-blue-800 text-yellow-50">
          <h1 className="font-bold text-6xl px-3">Crypto leaderboard</h1>
          <h2 className="font-semibold text-2xl px-3 mt-4">The top 100 crypto currencies</h2>
        </div>

        <main className="w-full">
          {cryptos.length && cryptos.map(c => <CryptoCard key={c.id} crypto={c} />)}
        </main>
      </div>
    </>
  );
};

export default Home;
