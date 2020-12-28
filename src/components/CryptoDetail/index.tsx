import React, { useState, useEffect } from 'react';

interface Props {
  cryptoId: string;
}

const CryptoDetail: React.FC<Props> = ({ cryptoId }) => {
  const [data, setData] = useState<CryptoFullDetail>();

  const loadCrypto = async () => {
    const res = await fetch(`http://localhost:3000/api/cryptos/${cryptoId}`);
    const data = await res.json();

    setData(data);
  };

  useEffect(() => {
    loadCrypto();
  }, [cryptoId]);

  // make a skeleton
  if (!data) return <p>Loading ... </p>;

  return (
    <>
      <h4 className="text-left text-xl font-medium mb-4">
        What is <span className="font-bold">{data.name}</span>?
      </h4>
      <div className="text-left max-h-56 overflow-visible overflow-y-scroll space-y-6 font-normal text-base">
        {data.description ? (
          data.description.split('\n\n').map((text, i) => <p key={i}>{text.trim()}</p>)
        ) : (
          <p>
            Unable to provide a description for this coin. <span className="text-2xl">😔</span>
          </p>
        )}
      </div>
    </>
  );
};

export default CryptoDetail;
