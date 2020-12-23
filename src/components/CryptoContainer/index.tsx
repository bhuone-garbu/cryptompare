import { useState } from 'react';

import CryptoCard from '../CryptoCard';

interface Props {
  cryptos: NomicCrypto[];
}

const CryptoContainer: React.FC<Props> = ({ cryptos: initialCryptos }: Props) => {
  const [cryptos, setCryptos] = useState(initialCryptos);
  return (
    <section className="stop-gradient w-full">
      <div className="container max-w-screen-lg mx-auto">
        <div className="rounded-xl border-none bg-white overflow-hidden">
          {cryptos.map(crypto => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))}
        </div>
        {cryptos.length < 100 && (
          <button className="w-full block mx-auto md:max-w-xs my-10 p-4 bg-blue-700 text-white font-bold rounded-sm">
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default CryptoContainer;
