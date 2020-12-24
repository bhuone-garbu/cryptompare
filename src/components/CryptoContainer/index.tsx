import React, { useState, Suspense } from 'react';

import CryptoHeading from './CryptoHeading';
import CryptoCardRow from './CryptoCardRow';

interface Props {
  cryptos: NomicCrypto[];
}
const Modal = React.lazy(() => import('components/Modal'));

const CryptoContainer: React.FC<Props> = ({ cryptos: initialCryptos }: Props) => {
  const [selectedCrypto, setSelectedCrypto] = useState<string>(undefined);
  const [cryptos, setCryptos] = useState(initialCryptos);

  console.log(selectedCrypto);

  const loadMore = async () => {
    const res = await fetch(`http://localhost:3000/api/cryptos?pageNo=${cryptos.length / 20 + 1}`);
    const newData = await res.json();
    setCryptos([...cryptos, ...newData]);
  };

  return (
    <>
      {selectedCrypto && (
        <Suspense fallback={<></>}>
          <Modal cryptoSymbol={selectedCrypto} closeHandler={() => setSelectedCrypto(undefined)} />
        </Suspense>
      )}
      <section className="stop-gradient px-6">
        <div className="container max-w-screen-lg mx-auto">
          <div className="shadow-lg overflow-x-scroll border-b border-gray-200 rounded-md">
            <table className="align-middle divide-gray-200 w-full">
              <CryptoHeading />
              <tbody className="bg-white divide-y divide-gray-200">
                {cryptos.map(crypto => (
                  <CryptoCardRow
                    key={crypto.id}
                    crypto={crypto}
                    openModalHandler={() => setSelectedCrypto(crypto.symbol)}
                  />
                ))}
              </tbody>
            </table>
          </div>
          {cryptos.length < 100 ? (
            <div className="py-10">
              <button
                className="block mx-auto w-full sm:w-auto text-center rounded-md border border-transparent shadow-lg bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 text-white px-6 py-4 text-base font-medium sm:text-md"
                onClick={loadMore}
              >
                Load more
              </button>
            </div>
          ) : (
            <div className="px-6 py-4 my-10 flex items-center bg-indigo-500">
              <div className="rounded-full bg-indigo-900 h-10 w-10 flex justify-center items-center">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <div className="text-white w-full px-6 py-4 text-base font-medium sm:text-md rounded-sm sm:w-auto">
                You have reached the end of this list. Only the top 100 crypto currencies are shown
                in this board.
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CryptoContainer;
