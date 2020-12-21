import { useState, useEffect } from 'react';
import Head from 'next/head';
// import type { AppProps, AppContext } from 'next/app';

import CryptoCard from 'components/CryptoCard';

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
    <div className="container bg-white min-h-screen max-w-screen-lg mx-auto p-6 ts">
      <Head>
        <title>Top 100 crypto dashboard</title>
      </Head>

      <main className="mt-12 w-full">
        <h1>The top 100 crypto currencies</h1>
        <h2>Dashboard</h2>
        {cryptos.length && cryptos.map(c => <CryptoCard key={c.id} crypto={c} />)}
      </main>
    </div>
  );
};

export default Home;
