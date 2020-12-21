interface Props {
  crypto: NomicCrypto;
}

const CryptoCard = ({ crypto }: Props): JSX.Element => (
  <div className="flex flex-row items-center shadow-md">
    <div className="p-2 flex flex-row justify-center">
      <img
        className="object-contain w-20 h-20"
        src={crypto.logo_url}
        alt={`${crypto.name.toLocaleLowerCase()}-log0`}
      />
    </div>

    <div className="p-2">{crypto.name}</div>
  </div>
);

export default CryptoCard;
