import React from 'react';

interface Props {
  crypto: NomicCrypto;
  openModalHandler: () => void;
}

const CryptoCardRow = ({ crypto, openModalHandler }: Props): JSX.Element => {
  const priceChange = Number(crypto['7d'].price_change);
  const priceChangePercent = `${priceChange > 0 ? '+' : ''}${Number(
    crypto['7d'].price_change_pct,
  ).toFixed(2)}`;

  return (
    <tr
      onClick={openModalHandler}
      className="transform-gpu hover:scale-101 bg-white hover:bg-gray-100 transition duration-150 ease-in-out cursor-pointer border-collapse"
    >
      {/* RANK - hidden on small screen */}
      <td className="crypto-rank-col">{crypto.rank}</td>

      {/* Logo and Name */}
      <td className="crypto-name-col">
        <img
          className="inline-block my-auto object-contain h-12 w-12 sm:h-20 sm:w-20"
          loading="lazy"
          src={crypto.logo_url}
          alt={`${crypto.name.toLocaleLowerCase()}-log0`}
        />
        <div className="inline-block my-auto ml-4">
          <p className="font-semibold">{crypto.name}</p>
          <p className="text-gray-500">{crypto.symbol}</p>
        </div>
      </td>

      {/* Price */}
      <td className="crypto-price-col">
        {Number(crypto.price).toLocaleString('en-GB', {
          style: 'currency',
          currency: 'GBP',
        })}
      </td>

      {/* Price change */}
      <td className="crypto-price-change-col">
        <div className={priceChange < 0 ? 'text-red-600' : 'text-green-700'}>
          {priceChange.toLocaleString('en-GB', {
            style: 'currency',
            currency: 'GBP',
          })}
        </div>
        <div
          className={priceChange < 0 ? 'text-red-600' : 'text-green-700'}
        >{`${priceChangePercent}%`}</div>
      </td>
    </tr>
  );
};

export default React.memo(CryptoCardRow);
