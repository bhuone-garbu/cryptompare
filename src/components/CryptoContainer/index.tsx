import { useState } from 'react';

import CryptoHeading from './CryptoHeading';
import CryptoCardRow from './CryptoCardRow';

interface Props {
  cryptos: NomicCrypto[];
}

const CryptoContainer: React.FC<Props> = ({ cryptos: initialCryptos }: Props) => {
  const [cryptos, setCryptos] = useState(initialCryptos);

  const loadMore = async () => {
    const res = await fetch(`http://localhost:3000/api/cryptos?pageNo=${cryptos.length / 20 + 1}`);
    const newData = await res.json();
    setCryptos([...cryptos, ...newData]);
  };

  return (
    <section className="stop-gradient px-6">
      <div className="container max-w-screen-lg mx-auto rounded-3xl">
        <div className="align-middle">
          <table className="divide-y divide-gray-200 w-full">
            <CryptoHeading />
            <tbody className="bg-white divide-y divide-gray-200">
              {cryptos.map(crypto => (
                <CryptoCardRow key={crypto.id} crypto={crypto} />
              ))}
            </tbody>
          </table>
        </div>
        {cryptos.length < 100 ? (
          <div className="py-10">
            <button
              className="block w-full md:max-w-xs mx-auto text-center rounded-lg bg-indigo-900 px-6 py-4 text-lg font-semibold font-display text-white hover:bg-indigo-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
              onClick={loadMore}
            >
              Load more
            </button>
          </div>
        ) : (
          <div className="py-10">
            <div className="bg-indigo-300 w-full px-6 py-4 text-lg text-gray-900 font-semibold rounded-sm">
              You have reached the end the list. Only the top 100 crypto currencies are shown in
              this board.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CryptoContainer;
