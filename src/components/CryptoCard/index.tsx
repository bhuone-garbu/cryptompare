interface Props {
  crypto: NomicCrypto;
}

const CryptoCard = ({ crypto }: Props): JSX.Element => (
  <div className="crypto-card">
    <div className="text-gray-500 flex items-center">{crypto.rank}</div>
    <div className="p-2 flex items-center justify-center">
      <img
        className="inline object-contain h-20 w-20"
        loading="lazy"
        src={crypto.logo_url}
        alt={`${crypto.name.toLocaleLowerCase()}-log0`}
      />
      <div className="ml-4">
        <p className="font-semibold">{crypto.name}</p>
        <p className="text-gray-500">{crypto.symbol}</p>
      </div>
    </div>
    <div className="p-2 flex items-center">
      {Number(crypto.price).toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
      })}
    </div>
  </div>
);

export default CryptoCard;
