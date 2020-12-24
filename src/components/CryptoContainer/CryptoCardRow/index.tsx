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

  // const onClick = ({ target }: React.MouseEvent<HTMLElement>) => {
  // };

  return (
    <tr
      onClick={openModalHandler}
      className="transform-gpu hover:scale-101 hover:bg-blue-100 transition duration-150 ease-in-out cursor-pointer"
    >
      <td className="px-6 py-3 text-sm hidden sm:table-cell text-gray-500 text-center">
        {crypto.rank}
      </td>
      <td className="px-6 py-3 whitespace-nowrap flex items-center justify-start">
        <img
          className="object-contain h-12 w-12 sm:h-20 sm:w-20"
          loading="lazy"
          src={crypto.logo_url}
          alt={`${crypto.name.toLocaleLowerCase()}-log0`}
        />
        <div className="ml-4">
          <p className="font-semibold">{crypto.name}</p>
          <p className="text-gray-500">{crypto.symbol}</p>
        </div>
      </td>
      <td className="px-6 py-4 text-right sm:text-left whitespace-nowrap text-md text-gray-900">
        {Number(crypto.price).toLocaleString('en-GB', {
          style: 'currency',
          currency: 'GBP',
        })}
      </td>
      <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-md text-gray-900">
        <div
          className={
            priceChange < 0 ? 'text-red-600 font-semibold' : 'text-green-800 font-semibold'
          }
        >
          {priceChange.toLocaleString('en-GB', {
            style: 'currency',
            currency: 'GBP',
          })}
        </div>
        <div
          className={priceChange < 0 ? 'text-red-600' : 'text-green-800'}
        >{`${priceChangePercent}%`}</div>
      </td>
    </tr>
  );
};

export default React.memo(CryptoCardRow);
