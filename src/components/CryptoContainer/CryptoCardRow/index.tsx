import React, { useState } from 'react';
import icons from 'cryptocurrency-icons';

interface Props {
  crypto: NomicCrypto;
  openModalHandler: () => void;
}

const CryptoCardRow = ({ crypto, openModalHandler }: Props): JSX.Element => {
  // it's possible that library might not have all the icon on .svg format
  const [imageSrc, setImage] = useState<string>(`/logos/${crypto.symbol.toLowerCase()}.svg`);

  const priceChange = Number(crypto['7d']?.price_change);
  const priceChangePercent = priceChange
    ? `${priceChange > 0 ? '+' : ''}${Number(crypto['7d'].price_change_pct).toFixed(2)}`
    : undefined;

  function onImageError(event: React.SyntheticEvent<HTMLImageElement>) {
    event.currentTarget.onerror = null;
    setImage(crypto.logo_url);
  }

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
          loading="lazy"
          className="inline-block my-auto object-contain max-h-12 w-12 sm:max-h-20 sm:w-20"
          src={imageSrc}
          alt={`${crypto.name.toLocaleLowerCase()}-logo`}
          onError={onImageError}
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
        {priceChange ? (
          <>
            <div className={priceChange < 0 ? 'text-red-600' : 'text-green-700'}>
              {priceChange.toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP',
              })}
            </div>
            <div
              className={priceChange < 0 ? 'text-red-600' : 'text-green-700'}
            >{`${priceChangePercent}%`}</div>
          </>
        ) : (
          'Info not available'
        )}
      </td>

      {/* Market Cap */}
      <td className="crypto-market-cap-col">
        {priceChange
          ? Number(crypto.market_cap).toLocaleString('en-GB', {
              style: 'currency',
              currency: 'GBP',
              maximumSignificantDigits: 12,
            })
          : 'Info not available'}
      </td>
    </tr>
  );
};

export default React.memo(CryptoCardRow);
