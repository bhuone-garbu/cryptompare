import React, { useState, useEffect } from 'react';

import CryptoDetail from '../CryptoDetail';

import CryptoHeading from './CryptoHeading';
import CryptoCardRow from './CryptoCardRow';
import SkeletonRow from './SkeletonRow';

import Modal from 'components/Modal';

const EndedBanner = ({ maxLength }): JSX.Element => (
  <div className="px-6 py-4 my-10 flex items-center bg-indigo-700 rounded-md">
    <div className="rounded-full bg-gray-800 h-10 w-10 p-2 flex justify-center items-center">
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
    <div className="text-white w-full px-6 py-3 text-base font-medium sm:text-md rounded-sm sm:w-auto">
      You have reached the end of this list. Only the top {maxLength} crypto currencies are shown in
      this board.
    </div>
  </div>
);

const CryptoContainer = (): JSX.Element => {
  const [selectedCrypto, setSelectedCrypto] = useState<string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cryptos, setCryptos] = useState<NomicCrypto[]>([]);

  const maxLength = 100;

  const loadCryptos = async () => {
    setIsLoading(true);
    const res = await fetch(
      `http://localhost:3000/api/cryptos?pageNo=${
        cryptos.length === 0 ? 1 : cryptos.length / 20 + 1
      }`,
    );
    const newData = await res.json();
    setCryptos([...cryptos, ...newData]);

    setIsLoading(false);
  };

  useEffect(() => {
    loadCryptos();
  }, []);

  return (
    <>
      {selectedCrypto && (
        <Modal closeHandler={() => setSelectedCrypto(undefined)}>
          <CryptoDetail cryptoId={selectedCrypto} />
        </Modal>
      )}
      <section className="stop-gradient px-6">
        <div className="container max-w-screen-lg mx-auto">
          <div className="shadow-lg overflow-x-auto rounded-md">
            <table className="align-middle w-full border-collapse bg-white">
              <CryptoHeading />
              <tbody className="bg-white border-white">
                {cryptos.map(crypto => (
                  <CryptoCardRow
                    key={crypto.id}
                    crypto={crypto}
                    openModalHandler={() => setSelectedCrypto(crypto.id)}
                  />
                ))}

                {isLoading && Array.from({ length: 10 }, (_, i) => <SkeletonRow key={i} />)}
              </tbody>
            </table>
          </div>
          {cryptos.length < maxLength ? (
            <div className="py-10">
              <button
                type="button"
                onClick={loadCryptos}
                className="block mx-auto w-full sm:w-auto text-center rounded-md border border-transparent shadow-lg px-4 py-2 bg-indigo-700 hover:bg-indigo-900 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-md"
              >
                Load more
              </button>
            </div>
          ) : (
            <EndedBanner maxLength={maxLength} />
          )}
        </div>
      </section>
    </>
  );
};

export default CryptoContainer;
