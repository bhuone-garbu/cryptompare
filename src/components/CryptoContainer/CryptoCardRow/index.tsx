interface Props {
  crypto: NomicCrypto;
}

const CryptoCardRow = ({ crypto }: Props): JSX.Element => (
  <tr>
    <td className="px-6 py-3 text-sm hidden sm:table-cell text-gray-500">{crypto.rank}</td>
    <td className="px-6 py-3 whitespace-nowrap flex items-center justify-start">
      <img
        className="object-contain h-20 w-20"
        loading="lazy"
        src={crypto.logo_url}
        alt={`${crypto.name.toLocaleLowerCase()}-log0`}
      />
      <div className="ml-4">
        <p className="font-semibold">{crypto.name}</p>
        <p className="text-gray-500">{crypto.symbol}</p>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-md text-gray-900">
      {Number(crypto.price).toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
      })}
    </td>
  </tr>
);

export default CryptoCardRow;
