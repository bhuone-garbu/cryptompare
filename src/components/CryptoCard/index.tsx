interface Props {
  crypto: NomicCrypto;
}

const CryptoCard = ({ crypto }: Props): JSX.Element => (
  <div className="flex items-center border-solid border-t border-r border-l px-6">
    <div className="font-semibold w-8">{crypto.rank}</div>
    <div className="p-2 flex flex-2 justify-items-start">
      <img
        className="inline object-contain h-14 w-14"
        src={crypto.logo_url}
        alt={`${crypto.name.toLocaleLowerCase()}-log0`}
      />
      <div className="ml-4">
        <p>{crypto.name}</p>
        <p>{crypto.symbol}</p>
      </div>
    </div>
    <div className="p-2 flex-2">
      {Number(crypto.price).toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
      })}
    </div>
  </div>
);

export default CryptoCard;
