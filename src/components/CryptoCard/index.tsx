interface Props {
  crypto: NomicCrypto;
}

const CryptoCard = ({ crypto }: Props): JSX.Element => <div className="">{crypto.name}</div>;

export default CryptoCard;
