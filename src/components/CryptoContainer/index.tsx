import { useState } from 'react';

import CryptoCard from '../CryptoCard';

interface Props {
  cryptos: NomicCrypto[];
}

const CryptoContainer: React.FC<Props> = ({ cryptos: initialCryptos }: Props) => {
  const [cryptos, setCryptos] = useState(initialCryptos);

  const loadMore = () => {};

  return (
    <section className="stop-gradient w-full">
      <div className="container max-w-screen-lg mx-auto">
        <div className="rounded-xl border-none bg-white overflow-hidden">
          {cryptos.map(crypto => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))}
        </div>
        {cryptos.length < 100 && (
          <div className="py-10">
            <button className="block w-full md:max-w-xs mx-auto text-center rounded-lg bg-gray-800 px-6 py-4 text-xl leading-6 font-semibold font-display text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CryptoContainer;
