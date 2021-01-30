import Head from 'next/head';

import CryptoContainer from 'components/CryptoContainer';

const Home: React.FC = () => (
  <main className="h-screen">
    <Head>
      <title>Crypto leaderboard</title>
    </Head>
    <section className="w-full max-h-96 bg-gray-900 text-yellow-50 py-16 md:py-28">
      <div className="flex flex-col md:items-center container max-w-screen-lg px-7 mx-auto">
        <h1 className="mt-9 font-display text-4xl leading-none font-semibold text-white sm:text-5xl">
          Crypto Leaderboard
        </h1>
        <h2 className="mt-8 max-w-xl text-xl lg:max-w-3xl lg:text-2xl text-gray-300">
          Your simple guide to the top 🔥 crypto on the market right now.
        </h2>
        <h2 className="mt-2 max-w-xl text-xl lg:max-w-3xl lg:text-2xl text-gray-300">
          Simple view, with zero distractions.
        </h2>
      </div>
    </section>
    <CryptoContainer />
  </main>
);

export default Home;
