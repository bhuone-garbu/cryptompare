import { useState } from 'react';

import CryptoHeading from './CryptoHeading';
import CryptoCardRow from './CryptoCardRow';

interface Props {
  cryptos: NomicCrypto[];
}

const CryptoContainer: React.FC<Props> = ({ cryptos: initialCryptos }: Props) => {
  const [cryptos, setCryptos] = useState(initialCryptos);

  // const loadMore = () => {};

  return (
    <section className="stop-gradient px-6">
      <div className="container align-middle max-w-screen-lg mx-auto rounded-3xl">
        <table className="divide-y divide-gray-200 w-full">
          <CryptoHeading />
          <tbody className="bg-white divide-y divide-gray-200">
            {cryptos.map(crypto => (
              <CryptoCardRow key={crypto.id} crypto={crypto} />
            ))}
          </tbody>
        </table>
      </div>
      {cryptos.length < 100 && (
        <div className="py-10">
          <button className="block w-full md:max-w-xs mx-auto text-center rounded-lg bg-gray-800 px-6 py-4 text-xl leading-6 font-semibold font-display text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
            Load more
          </button>
        </div>
      )}
    </section>
  );
};

export default CryptoContainer;
