interface Props {
  crypto: NomicCrypto;
}

const CryptoCard = ({ crypto }: Props): JSX.Element => (
  <div className="grid grid-cols-12 border-solid border-t border-r border-l px-6">
    <div className="col-auto font-semibold flex items-center">{crypto.rank}</div>
    <div className="p-2 col-span-3 flex items-center">
      <img
        className="inline object-contain h-14 w-14"
        src={crypto.logo_url}
        alt={`${crypto.name.toLocaleLowerCase()}-log0`}
      />
      <div className="ml-4">
        <p>{crypto.name}</p>
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
